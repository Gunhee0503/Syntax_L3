// ============================================================
// 수능 구문독해 앱 — 메인 로직
// ============================================================

const SETS = window.SETS || {};
const GRAMMAR_CHAPTERS = window.GRAMMAR_CHAPTERS || [];

// ============================================================
// 진행률 저장 (localStorage)
// ============================================================
const STORAGE_KEY = 'suneung-progress-v1';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Progress load failed:', e);
  }
  return { completedStages: {}, lastSet: null };
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      completedStages: state.completedStages,
      lastSet: state.currentSet
    }));
  } catch (e) {
    console.warn('Progress save failed:', e);
  }
}

// ============================================================
// 상태
// ============================================================
const savedProgress = loadProgress();
const setIds = Object.keys(SETS);
const initialSet = (savedProgress.lastSet && SETS[savedProgress.lastSet]) ? savedProgress.lastSet : setIds[0];

const state = {
  currentSet: initialSet,
  screen: 'home',
  currentChunk: 0,
  mode: 'listen',
  fpPlaying: false,
  fpAbort: false,
  transVisible: false,
  quizSelected: null,
  quizAnswered: false,
  quizTransVisible: false,
  completedStages: savedProgress.completedStages || {}
};

// 모든 세트의 진행률 컨테이너 초기화
setIds.forEach(id => {
  if (!state.completedStages[id]) state.completedStages[id] = [];
});

function S() { return SETS[state.currentSet]; }
function CS() { return state.completedStages[state.currentSet] || []; }

// ============================================================
// 네비게이션
// ============================================================
function switchSet(setId) {
  if (!SETS[setId]) return;
  state.currentSet = setId;
  state.screen = 'home';
  state.currentChunk = 0;
  state.mode = 'listen';
  state.transVisible = false;
  state.quizSelected = null;
  state.quizAnswered = false;
  state.quizTransVisible = false;
  speechSynthesis.cancel();
  state.fpPlaying = false;
  state.fpAbort = true;
  saveProgress();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nav(screenName) {
  state.screen = screenName;
  const stages = ['preview', 'chunk', 'fullsentence', 'quiz'];
  const idx = stages.indexOf(screenName);
  if (idx > 0) {
    const cs = state.completedStages[state.currentSet];
    for (let i = 0; i < idx; i++) {
      if (!cs.includes(stages[i])) cs.push(stages[i]);
    }
  } else if (screenName === 'preview') {
    const cs = state.completedStages[state.currentSet];
    if (!cs.includes('preview')) cs.push('preview');
  }
  speechSynthesis.cancel();
  state.fpPlaying = false;
  state.fpAbort = true;
  saveProgress();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// 음성 합성 (Web Speech API)
// ============================================================
function speakChunk() {
  if (!('speechSynthesis' in window)) {
    alert('이 브라우저는 음성 합성을 지원하지 않아요. Chrome이나 Safari에서 열어보세요.');
    return;
  }
  const u = new SpeechSynthesisUtterance(S().chunks[state.currentChunk].en);
  u.lang = 'en-US';
  u.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function speakSeg(text, rate) {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) { resolve(); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = rate;
    u.onend = resolve;
    u.onerror = resolve;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  });
}

async function playFull() {
  const segs = S().segments;
  if (state.fpPlaying) {
    state.fpAbort = true;
    speechSynthesis.cancel();
    state.fpPlaying = false;
    const btn = document.getElementById('fp-play-btn');
    if (btn) btn.innerHTML = '<i class="ti ti-player-play" style="font-size: 16px;" aria-hidden="true"></i>전체 재생';
    return;
  }
  state.fpAbort = false;
  state.fpPlaying = true;
  const btn = document.getElementById('fp-play-btn');
  if (btn) btn.innerHTML = '<i class="ti ti-player-stop" style="font-size: 16px;" aria-hidden="true"></i>정지';
  for (let i = 0; i < segs.length; i++) {
    if (state.fpAbort) break;
    document.querySelectorAll('.fp-seg').forEach(el => { el.style.background = ''; el.style.color = ''; });
    const el = document.querySelector(`.fp-seg[data-idx="${i}"]`);
    if (el) {
      el.style.background = '#FAEEDA';
      el.style.color = '#854F0B';
      el.style.padding = '1px 2px';
      el.style.borderRadius = '2px';
    }
    await speakSeg(segs[i].text, 0.9);
    if (state.fpAbort) break;
    if (segs[i].pauseAfterMs > 0) await new Promise(r => setTimeout(r, segs[i].pauseAfterMs));
  }
  document.querySelectorAll('.fp-seg').forEach(el => { el.style.background = ''; el.style.color = ''; });
  state.fpPlaying = false;
  if (btn) btn.innerHTML = '<i class="ti ti-player-play" style="font-size: 16px;" aria-hidden="true"></i>전체 재생';
}

async function playSlow() {
  const segs = S().segments;
  state.fpAbort = false;
  for (let i = 0; i < segs.length; i++) {
    if (state.fpAbort) break;
    document.querySelectorAll('.fp-seg').forEach(el => { el.style.background = ''; el.style.color = ''; });
    const el = document.querySelector(`.fp-seg[data-idx="${i}"]`);
    if (el) { el.style.background = '#FAEEDA'; el.style.color = '#854F0B'; }
    await speakSeg(segs[i].text, 0.7);
    if (segs[i].pauseAfterMs > 0) await new Promise(r => setTimeout(r, segs[i].pauseAfterMs));
  }
  document.querySelectorAll('.fp-seg').forEach(el => { el.style.background = ''; el.style.color = ''; });
}

// ============================================================
// 청크/모드 핸들러
// ============================================================
function setChunk(i) { state.currentChunk = i; render(); if (state.mode === 'listen') setTimeout(speakChunk, 200); }
function setMode(m) { state.mode = m; render(); if (m === 'listen') setTimeout(speakChunk, 200); }
function nextChunk() {
  const s = S();
  if (state.currentChunk < s.chunks.length - 1) {
    state.currentChunk++;
    render();
    if (state.mode === 'listen') setTimeout(speakChunk, 250);
  } else {
    nav('fullsentence');
  }
}
function prevChunk() {
  if (state.currentChunk > 0) {
    state.currentChunk--;
    render();
    if (state.mode === 'listen') setTimeout(speakChunk, 250);
  }
}
function toggleTrans() { state.transVisible = !state.transVisible; render(); }

// ============================================================
// 퀴즈 핸들러
// ============================================================
function selectQuiz(i) { state.quizSelected = i; render(); }
function submitQuiz() { state.quizAnswered = true; render(); }
function resetQuiz() { state.quizSelected = null; state.quizAnswered = false; state.quizTransVisible = false; }
function toggleQuizTrans() { state.quizTransVisible = !state.quizTransVisible; render(); }

// ============================================================
// UI 컴포넌트
// ============================================================
function setSwitcherEl() {
  return `
    <div class="set-switch">
      ${Object.entries(SETS).map(([id, s], i) => `
        <button class="set-btn ${state.currentSet === id ? 'active' : ''}" onclick="switchSet('${id}')">
          <div class="set-btn-row">
            <span class="set-num-badge">SET ${i + 1}</span>
            <span class="set-grammar">${s.grammar}</span>
          </div>
          <div class="set-subtitle"><span style="color: var(--color-text-secondary);">[${s.topic}]</span> ${s.passageTitle}</div>
        </button>
      `).join('')}
    </div>
  `;
}

function navTabs() {
  const grammarShort = S().grammar.split(' ')[0];
  const tabs = [
    { id: 'home', label: '홈' },
    { id: 'grammar', label: '문법 라이브러리' },
    { id: 'chapter', label: `${grammarShort} 챕터` },
    { id: 'preview', label: '1. 미리보기' },
    { id: 'chunk', label: '2. 청크 학습' },
    { id: 'fullsentence', label: '3. 풀 센텐스' },
    { id: 'quiz', label: '4. 적용 문제' }
  ];
  return `<div class="nav-tabs">${tabs.map(t => `
    <button class="nav-tab ${state.screen === t.id ? 'active' : ''}" onclick="nav('${t.id}')">${t.label}</button>
  `).join('')}</div>`;
}

function stageHeader(currentStage) {
  const stages = [
    { id: 'preview', num: 1, label: '미리보기' },
    { id: 'chunk', num: 2, label: '청크 학습' },
    { id: 'fullsentence', num: 3, label: '풀 센텐스' },
    { id: 'quiz', num: 4, label: '적용 문제' }
  ];
  const cs = CS();
  const s = S();
  return `
    <div class="screen-card" style="padding: 1rem 1.25rem; margin-bottom: 1.25rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; flex-wrap: wrap; gap: 8px;">
        <span style="font-family: var(--font-serif); font-size: 10px; letter-spacing: 0.1em; background: var(--color-background-info); color: var(--color-text-info); padding: 2px 8px; border-radius: 999px;">${s.grammar}</span>
        <span style="font-size: 11px; color: var(--color-text-secondary);">${cs.length} / 4 단계</span>
      </div>
      <div style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 12px;"><span style="color: var(--color-text-tertiary);">[${s.topic}]</span> <span style="color: var(--color-text-primary); font-weight: 500;">${s.passageTitle}</span></div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px;">
        ${stages.map(st => {
          const isDone = cs.includes(st.id) && st.id !== currentStage;
          const isActive = st.id === currentStage;
          return `<button class="stage-step ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}" onclick="nav('${st.id}')">
            <div class="stage-num">${st.num}</div>
            <div class="stage-label">${st.label}</div>
          </button>`;
        }).join('')}
      </div>
    </div>
  `;
}

// ============================================================
// 화면들
// ============================================================
function homeScreen() {
  const s = S();
  const totalSets = Object.keys(SETS).length;
  const totalChunks = Object.values(SETS).reduce((sum, set) => sum + set.chunks.length, 0);
  const completedSetsCount = Object.values(state.completedStages).filter(arr => arr.includes('quiz')).length;

  return `
    ${navTabs()}
    <div style="margin-bottom: 1.25rem;">
      <div class="meta-line">SUNEUNG · 구문학습</div>
      <h1 style="font-size: 22px; font-weight: 500; letter-spacing: -0.01em; margin: 4px 0 6px;">구문 독해 연습실</h1>
      <div style="font-size: 13px; color: var(--color-text-secondary); line-height: 1.5;">한 세트 = 한 문법 패턴 + 한 지문. 패턴을 입에 붙이는 청크 단위 학습.</div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 1.5rem;">
      <div style="background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 10px;">
        <div style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px;">학습 세트</div>
        <div style="font-size: 20px; font-weight: 500;">${totalSets}</div>
      </div>
      <div style="background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 10px;">
        <div style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px;">청크</div>
        <div style="font-size: 20px; font-weight: 500;">${totalChunks}</div>
      </div>
      <div style="background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 10px;">
        <div style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px;">완주 세트</div>
        <div style="font-size: 20px; font-weight: 500;">${completedSetsCount}</div>
      </div>
      <div style="background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 10px;">
        <div style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px;">진행률</div>
        <div style="font-size: 20px; font-weight: 500;">${Math.round((completedSetsCount / totalSets) * 100)}<span style="font-size: 12px; color: var(--color-text-secondary);">%</span></div>
      </div>
    </div>

    <div class="meta-line">CONTINUE · 학습 중</div>
    <div onclick="nav('preview')" style="background: var(--color-background-primary); border: 0.5px solid var(--color-border-secondary); border-left: 3px solid var(--color-text-info); border-radius: 0 var(--border-radius-lg) var(--border-radius-lg) 0; padding: 1rem 1.25rem; margin-bottom: 1.5rem; cursor: pointer;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; flex-wrap: wrap;">
        <span style="font-family: var(--font-serif); font-size: 10px; letter-spacing: 0.1em; background: var(--color-background-info); color: var(--color-text-info); padding: 2px 8px; border-radius: 999px;">${s.grammar}</span>
        <span style="font-size: 11px; color: var(--color-text-tertiary);">${s.source}</span>
      </div>
      <div style="font-size: 14px; color: var(--color-text-secondary); margin-bottom: 6px;"><span style="color: var(--color-text-tertiary);">[${s.topic}]</span> <span style="color: var(--color-text-primary); font-weight: 500;">${s.passageTitle}</span></div>
      <div style="font-family: var(--font-serif); font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; font-style: italic;">"${s.chunks.map(c => c.en).join(' ').slice(0, 90)}..."</div>
    </div>

    <div class="meta-line">두 가지 학습 진입 경로</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 1.5rem;">
      <div onclick="nav('preview')" style="background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); padding: 1.25rem; cursor: pointer;">
        <i class="ti ti-book" style="font-size: 24px; color: var(--color-text-tertiary); margin-bottom: 8px;" aria-hidden="true"></i>
        <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">지문별 학습</div>
        <div style="font-size: 12px; color: var(--color-text-secondary); line-height: 1.5;">한 지문을 5단계 사이클로 깊이 학습.</div>
      </div>
      <div onclick="nav('grammar')" style="background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); padding: 1.25rem; cursor: pointer;">
        <i class="ti ti-binary-tree" style="font-size: 24px; color: var(--color-text-tertiary); margin-bottom: 8px;" aria-hidden="true"></i>
        <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">문법별 학습</div>
        <div style="font-size: 12px; color: var(--color-text-secondary); line-height: 1.5;">같은 패턴 청크 모아 집중 학습.</div>
      </div>
    </div>

    <div class="meta-line">문법 라이브러리 · CORE 8</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
      ${GRAMMAR_CHAPTERS.map(c => {
        const setsCount = Object.values(SETS).filter(set => set.grammarKey === c.key).length;
        const completedCount = Object.entries(SETS).filter(([id, set]) => set.grammarKey === c.key && state.completedStages[id]?.includes('quiz')).length;
        const hasContent = setsCount > 0;
        return `
          <div onclick="nav('grammar')" style="background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-md); padding: 10px 12px; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span style="font-family: var(--font-serif); font-size: 9px; color: var(--color-text-tertiary); letter-spacing: 0.1em;">CORE ${c.num}</span>
              ${hasContent ? `<span style="margin-left: auto; font-size: 9px; background: var(--color-background-info); color: var(--color-text-info); padding: 1px 5px; border-radius: 999px; font-weight: 500;">${completedCount}/${setsCount}</span>` : ''}
            </div>
            <div style="font-size: 12px; font-weight: 500; line-height: 1.35; color: ${hasContent ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'};">${c.name}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function grammarLibScreen() {
  const currentGrammarKey = S().grammarKey;

  // 각 챕터에 속한 세트 카운트 계산
  const chaptersWithStats = GRAMMAR_CHAPTERS.map(c => {
    const setsInChapter = Object.entries(SETS).filter(([id, s]) => s.grammarKey === c.key);
    const completedInChapter = setsInChapter.filter(([id]) => state.completedStages[id]?.includes('quiz')).length;
    const isActive = c.key === currentGrammarKey;
    let status = 'pending';
    if (completedInChapter > 0 || isActive) status = 'active';
    if (completedInChapter === setsInChapter.length && setsInChapter.length > 0) status = 'done';
    return { ...c, setsInChapter, completedInChapter, isActive, status };
  });

  return `
    ${navTabs()}
    <div style="margin-bottom: 1.25rem;">
      <div class="meta-line">GRAMMAR LIBRARY · CORE 8</div>
      <h1 style="font-size: 22px; font-weight: 500; margin: 4px 0 6px;">8개 핵심 챕터로 구성</h1>
      <div style="font-size: 13px; color: var(--color-text-secondary); line-height: 1.5;">한 챕터 안에 같은 문법 우산 아래의 다양한 세부 패턴이 누적돼요.</div>
    </div>
    <div style="display: grid; gap: 10px;">
      ${chaptersWithStats.map(c => {
        const clickable = c.setsInChapter.length > 0;
        const onclick = clickable
          ? `nav('chapter')`
          : `alert('이 챕터는 아직 세트가 추가되지 않았어요. 곧 콘텐츠가 추가됩니다.')`;
        const meta = c.setsInChapter.length > 0
          ? `${c.setsInChapter.length}/8`
          : c.meta;
        const numBg = c.status === 'done' ? 'background: var(--color-text-primary); color: var(--color-background-primary);'
          : c.status === 'active' ? 'background: var(--color-text-info); color: white;'
          : 'background: var(--color-background-secondary); color: var(--color-text-secondary);';
        const badgeStyle = c.status === 'done' ? 'background: var(--color-background-success); color: var(--color-text-success);'
          : c.status === 'active' ? 'background: var(--color-background-info); color: var(--color-text-info); font-weight: 500;'
          : 'background: var(--color-background-secondary); color: var(--color-text-tertiary);';

        const subCatHTML = c.subCategories ? `
          <div style="margin-top: 10px; padding-top: 10px; border-top: 0.5px solid var(--color-border-tertiary); display: grid; gap: 8px;">
            ${c.subCategories.map((sc, i) => `
              <div style="background: var(--color-background-secondary); border-radius: 6px; padding: 8px 10px;">
                <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 3px;">
                  <span style="font-family: var(--font-serif); font-size: 10px; color: var(--color-text-tertiary);">${i + 1}.</span>
                  <span style="font-size: 12px; font-weight: 500; color: var(--color-text-primary);">${sc.title}</span>
                </div>
                <div style="font-size: 11px; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 4px;">${sc.desc}</div>
                <div style="font-family: var(--font-mono); font-size: 10px; color: var(--color-text-tertiary); line-height: 1.5; word-break: break-word;">${sc.examples}</div>
              </div>
            `).join('')}
          </div>
        ` : '';

        return `
          <div onclick="${onclick}"
            style="background: var(--color-background-primary); border: 0.5px solid ${c.isActive ? 'var(--color-text-info)' : 'var(--color-border-tertiary)'}; border-radius: var(--border-radius-md); padding: 14px 16px; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
              <span style="font-family: var(--font-serif); font-size: 9px; color: var(--color-text-tertiary); letter-spacing: 0.1em;">CORE ${c.num}</span>
              <span style="margin-left: auto; font-size: 10px; ${badgeStyle} padding: 2px 6px; border-radius: 999px;">${meta}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 28px; height: 28px; border-radius: 50%; ${numBg} display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 13px; font-weight: 500; flex-shrink: 0;">${c.num}</div>
              <div style="font-size: 14px; font-weight: 500; flex: 1;">${c.name}</div>
            </div>
            <div style="font-family: var(--font-serif); font-size: 11px; color: var(--color-text-secondary); font-style: italic; line-height: 1.5; margin-top: 6px;">"${c.ex}"</div>
            ${subCatHTML}
          </div>
        `;
      }).join('')}
    </div>
    <div style="margin-top: 1rem; padding: 12px 14px; background: var(--color-background-secondary); border-radius: var(--border-radius-md); display: flex; align-items: flex-start; gap: 10px;">
      <i class="ti ti-info-circle" style="font-size: 14px; color: var(--color-text-tertiary); flex-shrink: 0; margin-top: 2px;" aria-hidden="true"></i>
      <div style="font-size: 12px; color: var(--color-text-secondary); line-height: 1.6;">현재 활성: <strong style="color: var(--color-text-primary);">${S().grammar}</strong>. 위쪽 SET 전환으로 다른 챕터를 잠금 해제할 수 있어요.</div>
    </div>
  `;
}

function chapterScreen() {
  const s = S();
  const grammarKey = s.grammarKey;
  // 같은 grammarKey를 가진 모든 세트
  const setsInChapter = Object.entries(SETS)
    .filter(([id, set]) => set.grammarKey === grammarKey)
    .map(([id, set]) => ({ id, set }));

  const chapterMeta = GRAMMAR_CHAPTERS.find(c => c.key === grammarKey) || {};

  return `
    ${navTabs()}
    <div style="margin-bottom: 1.25rem;">
      <div class="meta-line">CHAPTER · ${s.grammar.split(' ')[0]}</div>
      <h1 style="font-size: 22px; font-weight: 500; margin: 4px 0 6px;">${s.grammar}</h1>
      <div style="font-size: 13px; color: var(--color-text-secondary); line-height: 1.5;">같은 문법 패턴이 들어간 다양한 소재의 세트가 누적돼요.</div>
    </div>

    <div class="meta-line">SETS · ${setsInChapter.length} / 8 · 같은 문법, 다른 소재</div>
    <div style="display: grid; gap: 6px; margin-bottom: 1.25rem;">
      ${setsInChapter.map(({ id, set }, idx) => {
        const isCurrent = id === state.currentSet;
        const completed = state.completedStages[id]?.includes('quiz');
        const status = completed ? 'done' : isCurrent ? 'current' : 'available';
        const borderColor = isCurrent ? 'var(--color-text-info)' : 'var(--color-border-tertiary)';
        const bgColor = isCurrent ? 'var(--color-background-info)' : 'var(--color-background-primary)';
        const numBg = completed ? 'background: var(--color-text-success); color: white;'
          : isCurrent ? 'background: var(--color-text-info); color: white;'
          : 'background: var(--color-background-primary); color: var(--color-text-tertiary); border: 0.5px solid var(--color-border-tertiary);';
        return `
          <div onclick="switchSet('${id}'); nav('preview')"
            style="background: ${bgColor}; border: 0.5px solid ${borderColor}; border-radius: var(--border-radius-md); padding: 12px 14px; cursor: pointer; display: flex; gap: 10px; align-items: flex-start;">
            <div style="width: 24px; height: 24px; border-radius: 50%; ${numBg} display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 12px; font-weight: 500; flex-shrink: 0;">${idx + 1}</div>
            <div style="flex: 1; min-width: 0;">
              <div style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 2px;"><span style="color: var(--color-text-tertiary);">[${set.topic}]</span> <span style="color: var(--color-text-primary); font-weight: 500;">${set.passageTitle}</span></div>
              <div style="font-family: var(--font-serif); font-size: 13px; line-height: 1.5; color: var(--color-text-primary); font-style: italic;">"${set.chunks.map(c => c.en).join(' ').slice(0, 80)}..."</div>
              <div style="font-size: 10px; color: var(--color-text-tertiary); margin-top: 3px;">${set.source} · ${completed ? '완료' : isCurrent ? '학습 중' : '시작 가능'}</div>
            </div>
          </div>
        `;
      }).join('')}
      ${Array(Math.max(0, 8 - setsInChapter.length)).fill(0).map((_, idx) => `
        <div style="background: var(--color-background-secondary); border: 0.5px dashed var(--color-border-tertiary); border-radius: var(--border-radius-md); padding: 12px 14px; display: flex; gap: 10px; align-items: center; opacity: 0.6;">
          <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--color-background-primary); color: var(--color-text-tertiary); display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 12px; flex-shrink: 0;">${setsInChapter.length + idx + 1}</div>
          <div style="font-size: 12px; color: var(--color-text-tertiary);">새 세트 추가 예정</div>
        </div>
      `).join('')}
    </div>

    <button class="primary-btn" onclick="nav('preview')">
      <span>현재 세트 학습 시작</span>
      <i class="ti ti-arrow-right" style="font-size: 16px;" aria-hidden="true"></i>
    </button>
  `;
}

function previewScreen() {
  const s = S();
  return `
    ${navTabs()}
    ${stageHeader('preview')}

    <div style="border-bottom: 0.5px solid var(--color-border-tertiary); padding-bottom: 1rem; margin-bottom: 1.25rem;">
      <div style="font-size: 11px; color: var(--color-text-tertiary);">${s.source}</div>
      <div style="font-size: 18px; font-weight: 500; margin-top: 6px;">${s.grammar}</div>
      <div style="font-size: 13px; color: var(--color-text-secondary); margin-top: 4px;"><span style="color: var(--color-text-tertiary);">[${s.topic}]</span> ${s.passageTitle}</div>
    </div>

    <div style="background: var(--color-background-warning); border-radius: var(--border-radius-md); padding: 14px 16px; margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
        <i class="ti ti-history" style="font-size: 14px; color: var(--color-text-warning);" aria-hidden="true"></i>
        <span style="font-family: var(--font-serif); font-size: 11px; color: var(--color-text-warning); letter-spacing: 0.08em;">BACKGROUND</span>
      </div>
      <div style="font-size: 13px; line-height: 1.7; color: var(--color-text-warning);">${s.background}</div>
    </div>

    <div style="background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 1rem 1.25rem; margin-bottom: 1.25rem;">
      <div class="meta-line">PASSAGE · ${s.passageWordCount} words</div>
      <div style="font-family: var(--font-serif); font-size: 14px; line-height: 1.95; color: var(--color-text-primary);">${s.passage}</div>
      <div style="margin-top: 10px; padding-top: 8px; border-top: 0.5px solid var(--color-border-tertiary); font-size: 11px; color: var(--color-text-tertiary);">노란 부분이 이번에 학습할 핵심 문장</div>
    </div>

    <button class="primary-btn" onclick="nav('chunk')">
      <span>청크 학습 시작</span>
      <i class="ti ti-arrow-right" style="font-size: 16px;" aria-hidden="true"></i>
    </button>
  `;
}

function chunkScreen() {
  const s = S();
  const c = s.chunks[state.currentChunk];
  const fullSentenceHTML = s.chunks.map((ch, i) => {
    const cls = i === state.currentChunk ? 'active' : i < state.currentChunk ? 'done' : '';
    return `<span class="chunk-pill ${cls}" onclick="setChunk(${i})">${ch.en}</span>${i < s.chunks.length - 1 ? '<span class="chunk-divider">/</span>' : ''}`;
  }).join(' ');

  return `
    ${navTabs()}
    ${stageHeader('chunk')}

    <div style="background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 1rem 1.25rem; margin-bottom: 1rem;">
      <div class="meta-line">FULL SENTENCE · ${s.chunks.length} chunks</div>
      <div style="font-family: var(--font-serif); font-size: 15px; line-height: 2.1;">${fullSentenceHTML}</div>
    </div>

    <div class="mode-tabs">
      <button class="mode-tab ${state.mode === 'listen' ? 'active' : ''}" onclick="setMode('listen')">Listen</button>
      <button class="mode-tab ${state.mode === 'translate' ? 'active' : ''}" onclick="setMode('translate')">해석</button>
      <button class="mode-tab ${state.mode === 'structure' ? 'active' : ''}" onclick="setMode('structure')">구문</button>
      <button class="mode-tab ${state.mode === 'context' ? 'active' : ''}" onclick="setMode('context')">맥락</button>
      <button class="mode-tab ${state.mode === 'speak' ? 'active' : ''}" onclick="setMode('speak')">Speak</button>
    </div>

    <div class="screen-card" style="min-height: 200px; text-align: center;">
      ${state.mode === 'listen' ? `
        <div class="meta-line">LISTEN &amp; READ</div>
        <div style="font-family: var(--font-serif); font-size: 22px; font-weight: 500; line-height: 1.45; margin: 1rem 0 1.5rem;">${c.en}</div>
        <button class="ghost-btn" onclick="speakChunk()" style="padding: 8px 18px; font-size: 13px;">
          <i class="ti ti-player-play" style="font-size: 14px;" aria-hidden="true"></i>다시 듣기
        </button>
        <div style="margin-top: 14px; font-size: 11px; color: var(--color-text-tertiary);">
          <i class="ti ti-bolt" style="font-size: 12px; vertical-align: -1px;" aria-hidden="true"></i> 다음 청크로 넘어가면 자동 재생
        </div>
      ` : ''}
      ${state.mode === 'translate' ? `
        <div class="meta-line">DIRECT READING</div>
        <div style="font-family: var(--font-serif); font-size: 17px; font-weight: 500; margin: 12px 0;">${c.en}</div>
        <div style="height: 1px; background: var(--color-border-tertiary); margin: 12px auto; max-width: 60px;"></div>
        <div style="font-size: 14px; color: var(--color-text-secondary); line-height: 1.7;">${c.ko}</div>
      ` : ''}
      ${state.mode === 'structure' ? `
        <div class="meta-line">SENTENCE STRUCTURE</div>
        <div style="font-family: var(--font-serif); font-size: 14px; line-height: 2.2; padding: 1rem; background: var(--color-background-secondary); border-radius: var(--border-radius-md); text-align: left;">
          ${s.structure}
        </div>
      ` : ''}
      ${state.mode === 'context' ? `
        <div class="meta-line">CONTEXT</div>
        <div style="background: var(--color-background-info); border-radius: var(--border-radius-md); padding: 14px 16px; font-size: 14px; line-height: 1.85; color: var(--color-text-info); font-weight: 500; text-align: left; margin-top: 10px;">
          ${s.contextOneLiner}
        </div>
      ` : ''}
      ${state.mode === 'speak' ? `
        <div class="meta-line">KOREAN → ENGLISH</div>
        <div style="font-size: 17px; font-weight: 500; margin: 1rem 0 1.5rem;">${c.ko}</div>
        <button class="ghost-btn" onclick="alert('마이크 권한이 필요해요. 모바일/데스크톱 Chrome에서 작동합니다.')" style="padding: 8px 18px; font-size: 13px;">
          <i class="ti ti-microphone" style="font-size: 14px;" aria-hidden="true"></i>Tap to speak
        </button>
      ` : ''}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      <button class="ghost-btn" onclick="prevChunk()" style="padding: 10px; font-size: 13px; justify-content: center; ${state.currentChunk === 0 ? 'opacity: 0.4;' : ''}">
        <i class="ti ti-arrow-left" aria-hidden="true"></i>이전 청크
      </button>
      <button class="ghost-btn" onclick="nextChunk()" style="padding: 10px; font-size: 13px; justify-content: center;">
        ${state.currentChunk === s.chunks.length - 1 ? '풀 센텐스로' : '다음 청크'}<i class="ti ti-arrow-right" aria-hidden="true"></i>
      </button>
    </div>
  `;
}

function fullSentenceScreen() {
  const s = S();
  return `
    ${navTabs()}
    ${stageHeader('fullsentence')}

    <div class="screen-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; gap: 8px; flex-wrap: wrap;">
        <div>
          <div class="meta-line" style="margin: 0;">FULL SENTENCE PLAYER</div>
          <div style="font-size: 13px; color: var(--color-text-secondary);">자연스러운 흐름으로 — 의미 경계엔 미세한 호흡</div>
        </div>
        <button class="ghost-btn" onclick="toggleTrans()">
          <i class="ti ti-language" style="font-size: 13px;" aria-hidden="true"></i>${state.transVisible ? '해석 숨기기' : '해석 보기'}
        </button>
      </div>

      <div id="fp-text" style="font-family: var(--font-serif); font-size: 15px; line-height: 1.95; padding: 14px 16px; background: var(--color-background-secondary); border-radius: var(--border-radius-md);">
        ${s.segments.map((seg, i) => `<span class="fp-seg" data-idx="${i}">${seg.text}</span>`).join(' ')}
      </div>

      ${state.transVisible ? `
      <div style="padding: 14px 16px; background: var(--color-background-warning); border-radius: var(--border-radius-md); margin-top: 8px; font-size: 14px; line-height: 1.8; color: var(--color-text-warning); font-weight: 500;">
        <div style="font-family: var(--font-serif); font-size: 10px; color: var(--color-text-warning); opacity: 0.7; letter-spacing: 0.1em; margin-bottom: 6px;">KOREAN · 전체 해석</div>
        ${s.koreanFull}
      </div>
      ` : ''}

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 12px;">
        <button class="ghost-btn" id="fp-play-btn" onclick="playFull()" style="padding: 10px; font-size: 13px; justify-content: center;">
          <i class="ti ti-player-play" style="font-size: 16px;" aria-hidden="true"></i>전체 재생
        </button>
        <button class="ghost-btn" onclick="playSlow()" style="padding: 10px; font-size: 13px; justify-content: center;">
          <i class="ti ti-rewind-backward-10" style="font-size: 16px;" aria-hidden="true"></i>천천히 0.7x
        </button>
      </div>
    </div>

    <div class="dark-cta" onclick="nav('quiz')">
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px;">
        <div>
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <i class="ti ti-target" style="font-size: 14px;" aria-hidden="true"></i>
            <span style="font-family: var(--font-serif); font-size: 11px; letter-spacing: 0.1em; opacity: 0.7;">EXAM PRACTICE</span>
          </div>
          <div style="font-size: 15px; font-weight: 500; margin-bottom: 4px;">실전 문제로 마무리</div>
          <div style="font-size: 12px; opacity: 0.75; line-height: 1.5;">${s.passageWordCount}단어 지문 + 주제 찾기 5지선다</div>
        </div>
        <div style="background: rgba(255,255,255,0.15); border-radius: 50%; padding: 10px;">
          <i class="ti ti-arrow-right" style="font-size: 18px; color: white;" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  `;
}

function quizScreen() {
  const s = S();
  const q = s.quiz;
  const setIds = Object.keys(SETS);
  const currentIdx = setIds.indexOf(state.currentSet);
  const nextSetId = setIds[(currentIdx + 1) % setIds.length];
  const nextSet = SETS[nextSetId];

  return `
    ${navTabs()}
    ${stageHeader('quiz')}

    <div style="border-bottom: 0.5px solid var(--color-border-tertiary); padding-bottom: 1rem; margin-bottom: 1.25rem;">
      <div style="font-size: 11px; color: var(--color-text-tertiary);">실전 문제 · 글의 주제</div>
      <div style="font-size: 17px; font-weight: 500; margin-top: 6px;">${q.question}</div>
    </div>

    <div style="background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 1.25rem 1.5rem; margin-bottom: 1.25rem;">
      <div class="meta-line">PASSAGE · ${s.passageWordCount} words</div>
      <div style="font-family: var(--font-serif); font-size: 14px; line-height: 1.9; color: var(--color-text-primary);">${s.passage}</div>
    </div>

    <div style="margin-bottom: 1rem;">
      ${q.choices.map((ch, i) => {
        let cls = '';
        if (state.quizAnswered) {
          if (i === q.correct) cls = 'correct';
          else if (i === state.quizSelected) cls = 'incorrect';
        } else if (i === state.quizSelected) cls = 'selected';
        const symbols = ['①','②','③','④','⑤'];
        return `<div class="choice-card ${cls}" onclick="${state.quizAnswered ? '' : `selectQuiz(${i})`}">
          <div class="choice-num">${symbols[i]}</div>
          <div style="flex: 1; font-size: 13px; line-height: 1.6;">${ch}</div>
        </div>`;
      }).join('')}
    </div>

    ${!state.quizAnswered ? `
      <button class="primary-btn" ${state.quizSelected === null ? 'disabled' : ''} onclick="${state.quizSelected !== null ? 'submitQuiz()' : ''}">
        답 제출하기
      </button>
    ` : `
      <div style="padding: 14px 16px; border-radius: var(--border-radius-md); margin-bottom: 14px; display: flex; align-items: center; gap: 12px; background: ${state.quizSelected === q.correct ? 'var(--color-background-success)' : 'var(--color-background-danger)'}; color: ${state.quizSelected === q.correct ? 'var(--color-text-success)' : 'var(--color-text-danger)'};">
        <i class="ti ti-${state.quizSelected === q.correct ? 'circle-check' : 'circle-x'}" style="font-size: 22px;" aria-hidden="true"></i>
        <div>
          <div style="font-size: 14px; font-weight: 500;">${state.quizSelected === q.correct ? '정답 — 잘했어요!' : `오답 — 정답은 ${['①','②','③','④','⑤'][q.correct]}번`}</div>
          <div style="font-size: 12px; opacity: 0.85; margin-top: 2px;">청크 학습이 글 전체 이해로 이어졌나요?</div>
        </div>
      </div>

      <div class="screen-card">
        <div class="meta-line">EXPLANATION</div>
        <div style="background: var(--color-background-success); border-radius: var(--border-radius-md); padding: 12px; font-size: 12px; line-height: 1.7; color: var(--color-text-success); margin-bottom: 12px;">
          <strong>인과 사슬:</strong> ${q.causalChain}
        </div>
        <div style="background: var(--color-background-danger); border-radius: var(--border-radius-md); padding: 12px; font-size: 12px; line-height: 1.7; color: var(--color-text-danger);">
          <strong>함정 분석:</strong> ${q.traps}
        </div>
      </div>

      <div class="screen-card" style="padding: 0; overflow: hidden;">
        <button onclick="toggleQuizTrans()" style="width: 100%; background: ${state.quizTransVisible ? 'var(--color-background-warning)' : 'var(--color-background-secondary)'}; border: none; padding: 14px 16px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; text-align: left;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i class="ti ti-language" style="font-size: 16px; color: ${state.quizTransVisible ? 'var(--color-text-warning)' : 'var(--color-text-secondary)'};" aria-hidden="true"></i>
            <div>
              <div style="font-family: var(--font-serif); font-size: 11px; color: ${state.quizTransVisible ? 'var(--color-text-warning)' : 'var(--color-text-tertiary)'}; letter-spacing: 0.1em;">PASSAGE TRANSLATION</div>
              <div style="font-size: 13px; font-weight: 500; color: ${state.quizTransVisible ? 'var(--color-text-warning)' : 'var(--color-text-primary)'}; margin-top: 2px;">전체 우리말 해석 ${state.quizTransVisible ? '숨기기' : '확인'}</div>
            </div>
          </div>
          <i class="ti ti-chevron-${state.quizTransVisible ? 'up' : 'down'}" style="font-size: 16px; color: ${state.quizTransVisible ? 'var(--color-text-warning)' : 'var(--color-text-secondary)'};" aria-hidden="true"></i>
        </button>
        ${state.quizTransVisible ? `
          <div style="padding: 14px 16px; background: var(--color-background-warning); border-top: 0.5px solid rgba(0,0,0,0.06);">
            <div style="font-size: 13px; line-height: 1.95; color: var(--color-text-warning);">${s.passageKorean || '(해석 준비 중)'}</div>
            <div style="margin-top: 10px; padding-top: 8px; border-top: 0.5px solid rgba(0,0,0,0.08); font-size: 11px; color: var(--color-text-warning); opacity: 0.7;">노란 부분이 학습한 핵심 문장의 해석</div>
          </div>
        ` : ''}
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 1.25rem;">
        <button class="ghost-btn" onclick="resetQuiz(); nav('chunk')" style="padding: 10px; justify-content: center;">
          <i class="ti ti-refresh" aria-hidden="true"></i>청크 학습 다시
        </button>
        <button class="primary-btn" onclick="resetQuiz(); switchSet('${nextSetId}')">
          다음 세트
          <i class="ti ti-arrow-right" style="font-size: 14px;" aria-hidden="true"></i>
        </button>
      </div>
      <div style="text-align: center; margin-top: 8px; font-size: 11px; color: var(--color-text-tertiary);">다음: <strong style="color: var(--color-text-secondary);">${nextSet.grammar}</strong> · [${nextSet.topic}] ${nextSet.passageTitle}</div>
    `}
  `;
}

// ============================================================
// 메인 렌더 함수
// ============================================================
function render() {
  document.getElementById('set-switcher').innerHTML = setSwitcherEl();
  const map = {
    home: homeScreen,
    grammar: grammarLibScreen,
    chapter: chapterScreen,
    preview: previewScreen,
    chunk: chunkScreen,
    fullsentence: fullSentenceScreen,
    quiz: quizScreen
  };
  const screenFn = map[state.screen] || homeScreen;
  document.getElementById('screen-container').innerHTML = screenFn();
}

// 전역 노출 (onclick 핸들러 접근용)
window.switchSet = switchSet;
window.nav = nav;
window.setChunk = setChunk;
window.setMode = setMode;
window.nextChunk = nextChunk;
window.prevChunk = prevChunk;
window.speakChunk = speakChunk;
window.playFull = playFull;
window.playSlow = playSlow;
window.toggleTrans = toggleTrans;
window.selectQuiz = selectQuiz;
window.submitQuiz = submitQuiz;
window.resetQuiz = resetQuiz;
window.toggleQuizTrans = toggleQuizTrans;

// 초기 렌더
render();
