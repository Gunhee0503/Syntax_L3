// 학습 세트 데이터 — 새 세트 추가는 이 파일만 수정하면 돼요
window.SETS = {
  'set1': {
    grammar: '동격의 that',
    grammarKey: 'relative',
    topic: '진화생물학',
    passageTitle: '집단협력의 진화적 기원',
    source: '2024학년도 9월 모의평가 · 38번',
    background: '인류 진화의 결정적 전환점은 우리 조상이 <strong>혼자서는 생존할 수 없다는 사실을 깨달은 순간</strong>이에요. 대형 포식자 사냥, 식량 확보, 양육 모두 함께하지 않으면 불가능했죠.',
    chunks: [
      { en: 'The recognition', ko: '그 인식이' },
      { en: 'that survival depended on collective effort', ko: '생존이 집단의 노력에 달려 있었다는' },
      { en: 'gradually transformed', ko: '점진적으로 변형시켰다' },
      { en: "our ancestors' cognitive architecture,", ko: '우리 조상들의 인지 구조를,' },
      { en: 'favoring those', ko: '~한 사람들을 선호하면서' },
      { en: 'who could anticipate the intentions of others.', ko: '타인의 의도를 예측할 수 있는.' }
    ],
    segments: [
      { text: 'The recognition that survival depended on collective effort', pauseAfterMs: 180 },
      { text: "gradually transformed our ancestors' cognitive architecture,", pauseAfterMs: 140 },
      { text: 'favoring those who could anticipate the intentions of others.', pauseAfterMs: 0 }
    ],
    koreanFull: '생존이 집단의 노력에 달려 있다는 그 인식이 우리 조상들의 인지 구조를 점진적으로 변형시켰는데, 이는 타인의 의도를 예측할 수 있는 사람들을 진화적으로 선호하게 만들었다.',
    passage: "For most of human prehistory, individual survival was simply impossible. Hunting large prey, defending against predators, and raising offspring all required coordinated action among many hands. <span class='ch-hl'>The recognition that survival depended on collective effort gradually transformed our ancestors' cognitive architecture, favoring those who could anticipate the intentions of others.</span> Over time, this selective pressure produced brains exquisitely tuned to read facial expressions, infer goals, and predict behavior. What began as a survival necessity, in other words, eventually became the foundation of human social intelligence itself.",
    passageWordCount: 86,
    passageKorean: "인류 선사 시대 대부분 동안, 개인이 혼자 생존하는 것은 사실상 불가능했다. 큰 사냥감을 잡는 일, 포식자로부터 자신을 지키는 일, 자손을 기르는 일 모두가 수많은 손이 함께하는 조율된 행동을 필요로 했다. <span class='ch-hl'>생존이 집단의 노력에 달려 있다는 그 인식이 우리 조상들의 인지 구조를 점진적으로 변형시켰는데, 이는 타인의 의도를 예측할 수 있는 사람들을 진화적으로 선호하게 만들었다.</span> 시간이 흐르면서, 이러한 선택적 압력은 표정을 읽고, 의도를 추론하고, 행동을 예측하는 데 정교하게 조율된 뇌를 만들어냈다. 다시 말해, 처음에는 생존의 필요로 시작된 것이 결국 인간 사회적 지능 그 자체의 토대가 된 것이다.",
    structure: `<div><span class="ch-hl">The recognition</span> <span style="color: #185FA5;">[that survival depended on collective effort]</span></div>
      <div style="padding-left: 12px;"><em style="color: var(--color-text-tertiary);">gradually transformed</em> <span style="border-bottom: 2px solid #0F6E56;">our ancestors' cognitive architecture</span>,</div>
      <div style="padding-left: 24px;"><span style="border-bottom: 2px dashed #993556;">favoring those</span> <span style="color: #993556;">[who could anticipate the intentions of others]</span>.</div>`,
    contextOneLiner: '"혼자서는 살아남을 수 없다"는 깨달음이, "남의 마음을 읽는 능력"을 가진 조상을 진화적으로 이롭게 만들었다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'the role of brain size in determining hunting success among early humans',
        'why human ancestors needed to defend against large predators',
        'how cooperative living shaped the evolution of human social cognition',
        'the limitations of facial expressions as tools for communication',
        'cultural inheritance as the main driver of cognitive development'
      ],
      correct: 2,
      causalChain: '환경(혼자선 못 살았다) → 인식(<span class="ch-hl">학습한 문장</span>) → 결과(뇌 변형) → 일반화(사회적 지능 토대)',
      traps: '① 부분 단어(brain size) · ② 지엽(포식자) · ④ 정반대(한계) · ⑤ 유사 개념(문화 ≠ 진화)'
    }
  },

  'set2': {
    grammar: '비교급 (less A than B)',
    grammarKey: 'comparative',
    topic: '언어학',
    passageTitle: '언어가 사고를 만드는가',
    source: '2023학년도 수능 응용 · 빈칸추론 변형',
    background: '20세기 중반까지 주류 인지과학은 <strong>"인간은 누구나 똑같이 세상을 본다"</strong>는 보편주의를 믿었어요. 그런데 사피어-워프 가설은 <strong>언어가 사고 자체를 형성</strong>한다고 주장했고, 이 논쟁은 지금도 인지과학의 중심 화두예요.',
    chunks: [
      { en: 'Language, in this view,', ko: '이 관점에서 언어는,' },
      { en: 'is less a transparent window', ko: '투명한 창이라기보다는' },
      { en: 'onto reality', ko: '현실을 비추는' },
      { en: 'than a lens', ko: '오히려 렌즈에 가깝다' },
      { en: 'that quietly bends', ko: '조용히 굴절시키는' },
      { en: 'what we see.', ko: '우리가 보는 것을.' }
    ],
    segments: [
      { text: 'Language, in this view,', pauseAfterMs: 200 },
      { text: 'is less a transparent window onto reality', pauseAfterMs: 160 },
      { text: 'than a lens that quietly bends what we see.', pauseAfterMs: 0 }
    ],
    koreanFull: '이 관점에서 언어는 현실을 비추는 투명한 창이라기보다는, 오히려 우리가 보는 것을 조용히 굴절시키는 렌즈에 가깝다.',
    passage: "For decades, scientists assumed that human perception was largely universal — that we all carved up reality into the same basic categories. Recent research, however, suggests something far more unsettling. The vocabulary a culture develops for colors, time, or spatial relations appears to subtly reshape how its members notice, remember, and reason about the world. Speakers of languages that mark time with rich grammatical tense, for instance, recall the order of past events more accurately than speakers of languages that do not. <span class='ch-hl'>Language, in this view, is less a transparent window onto reality than a lens that quietly bends what we see.</span>",
    passageWordCount: 92,
    passageKorean: "수십 년 동안 과학자들은 인간의 지각이 대체로 보편적이라고 — 즉, 우리가 모두 현실을 동일한 기본 범주로 나눈다고 — 가정해 왔다. 그러나 최근의 연구는 훨씬 더 불안한 무언가를 시사한다. 한 문화가 색깔, 시간, 또는 공간 관계에 대해 발달시킨 어휘는, 그 구성원들이 세계를 인식하고 기억하고 추론하는 방식을 미묘하게 재형성하는 것처럼 보인다. 예를 들어, 풍부한 문법적 시제로 시간을 표시하는 언어의 화자들은 그렇지 않은 언어의 화자들보다 과거 사건의 순서를 더 정확하게 기억한다. <span class='ch-hl'>이 관점에서 언어는 현실을 비추는 투명한 창이라기보다는, 오히려 우리가 보는 것을 조용히 굴절시키는 렌즈에 가깝다.</span>",
    structure: `<div style="background: var(--color-background-info); border-left: 3px solid var(--color-text-info); border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0; padding: 10px 14px; margin-bottom: 14px;">
        <div style="font-family: var(--font-serif); font-size: 10px; color: var(--color-text-info); letter-spacing: 0.1em; margin-bottom: 4px;">★ 핵심 공식</div>
        <div style="font-family: var(--font-mono); font-size: 13px; color: var(--color-text-info); font-weight: 500;">less <span style="background: #EFF6FC; padding: 1px 5px; border-radius: 2px;">A</span> than <span style="background: #FBF7EE; color: #5A4515; padding: 1px 5px; border-radius: 2px;">B</span></div>
        <div style="font-size: 12px; color: var(--color-text-info); margin-top: 4px; line-height: 1.5;"><span style="background: #EFF6FC; padding: 0 4px; border-radius: 2px;">A</span>라기 보다는 <span style="background: #FBF7EE; color: #5A4515; padding: 0 4px; border-radius: 2px;">B</span>다</div>
      </div>
      <div><span class="ch-hl">Language</span>, <span style="color: #993556;">in this view,</span> <em style="color: var(--color-text-tertiary);">is</em></div>
      <div style="padding-left: 16px;"><span style="background: #EFF6FC; color: #143C6B; padding: 2px 6px; border-radius: 3px;">less a transparent window onto reality</span> <span style="color: var(--color-text-tertiary); font-size: 11px;">← A</span></div>
      <div style="padding-left: 16px;"><span style="color: var(--color-text-tertiary); font-size: 12px;">— 비교 축 —</span></div>
      <div style="padding-left: 16px;"><span style="background: #FBF7EE; color: #5A4515; padding: 2px 6px; border-radius: 3px;">than a lens <span style="color: #185FA5;">[that quietly bends what we see]</span></span> <span style="color: var(--color-text-tertiary); font-size: 11px;">← B</span></div>`,
    contextOneLiner: '언어는 현실을 그대로 보여주는 투명한 도구가 아니라, 우리가 세상을 보는 방식을 결정하는 굴절 장치다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'how language quietly shapes the way speakers perceive reality',
        'the universal structure of human visual perception',
        'why grammatical tense systems vary across world languages',
        'the difficulty of translating idioms between distant languages',
        "cognitive scientists' historical bias toward European languages"
      ],
      correct: 0,
      causalChain: '가정(보편 인식) → 반전(연구 결과) → 메커니즘(어휘가 인식 형성) → 결론(<span class="ch-hl">언어 = 굴절 렌즈</span>)',
      traps: '② 정반대(글이 부정하는 가정) · ③ 지엽(시제는 예시) · ④ 무관(번역 얘기 없음) · ⑤ 함정(과학자 비판은 부차적)'
    }
  },

  'set3': {
    grammar: '소유격 관계대명사 whose',
    grammarKey: 'relative',
    topic: '철학',
    passageTitle: '칸트와 정언명령의 유산',
    source: '2023학년도 수능 30번 응용',
    background: '18세기 독일 철학자 <strong>칸트(Kant)</strong>는 도덕 판단의 새로운 기준을 제시했어요. "어떤 행위가 옳은지 알고 싶으면, 그 행위가 모두에게 보편 법칙이 될 수 있는지 자문해보라" — 이것이 <strong>정언명령(categorical imperative)</strong>이에요. 결과가 아닌 원칙으로 도덕을 판단하는 이 관점은 현대 윤리학의 토대가 되었습니다.',
    chunks: [
      { en: 'Kant proposed a moral test', ko: '칸트는 도덕 판단 기준을 제시했다' },
      { en: 'whose force still resonates today,', ko: '근데 그것(도덕 기준)의 힘은 오늘날에도 여전히 울려 퍼진다.<br><span style="color: var(--color-text-info); font-size: 13px;">→ 그 영향력은 지금까지도 이어지고 있다.</span>' },
      { en: 'demanding that we ask', ko: '(그 기준은) 우리가 이런 질문을 하도록 요구하면서' },
      { en: 'whether the rule we are about to follow', ko: '우리가 따르려는 그 규칙이' },
      { en: 'could become a universal law.', ko: '보편적 법칙이 될 수 있는지 아닌지를' }
    ],
    segments: [
      { text: 'Kant proposed a moral test whose force still resonates today,', pauseAfterMs: 180 },
      { text: 'demanding that we ask', pauseAfterMs: 100 },
      { text: 'whether the rule we are about to follow could become a universal law.', pauseAfterMs: 0 }
    ],
    koreanFull: '칸트는 오늘날에도 여전히 그 힘이 울려 퍼지는 도덕적 시험을 제안했는데, 그것은 우리가 따르려는 규칙이 보편적 법칙이 될 수 있는지를 자문해야 한다고 요구하는 것이다.',
    passage: "Modern ethics inherits a question that began with eighteenth-century German philosophy. <span class='ch-hl'>Kant proposed a moral test whose force still resonates today, demanding that we ask whether the rule we are about to follow could become a universal law.</span> Lying, for example, fails this test instantly — if everyone lied whenever convenient, the very institution of language would collapse. The brilliance of the principle lies not in its outcomes but in its form: it locates morality in the structure of reasoning itself, rather than in pleasure, custom, or divine command. Even today, debates about justice, consent, and human dignity often return, knowingly or not, to this elegant Kantian frame.",
    passageWordCount: 110,
    passageKorean: "현대 윤리학은 18세기 독일 철학에서 시작된 하나의 질문을 물려받고 있다. <span class='ch-hl'>칸트는 오늘날에도 여전히 그 힘이 울려 퍼지는 도덕적 시험을 제안했는데, 그것은 우리가 따르려는 규칙이 보편적 법칙이 될 수 있는지를 자문해야 한다고 요구하는 것이다.</span> 예를 들어, 거짓말은 이 시험을 즉시 통과하지 못한다 — 만약 모두가 편리할 때마다 거짓말을 한다면 언어라는 제도 자체가 붕괴할 것이기 때문이다. 이 원리의 탁월함은 결과가 아니라 형식에 있다. 즉, 도덕을 쾌락이나 관습, 신의 명령이 아니라 추론의 구조 그 자체에 위치시킨다는 점이다. 오늘날에도 정의, 동의, 인간 존엄에 관한 논쟁은 알게 모르게 이 우아한 칸트적 틀로 되돌아오곤 한다.",
    structure: `<div><span class="ch-hl">Kant</span> <em style="color: var(--color-text-tertiary);">proposed</em> <span style="border-bottom: 2px solid #0F6E56;">a moral test</span> <span style="color: #993556;">[whose force still resonates today]</span>,</div>
      <div style="padding-left: 12px;"><span style="border-bottom: 2px dashed #993556;">demanding that</span> we ask</div>
      <div style="padding-left: 24px;"><span style="color: #185FA5;">[whether the rule (we are about to follow) could become a universal law]</span>.</div>`,
    contextOneLiner: '칸트는 "그 규칙이 모두에게 적용돼도 괜찮은가?"라는 보편화 테스트로 도덕을 판단하라고 했다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        "the historical decline of Kant's influence in modern philosophy",
        'why religious commands provide stronger moral guidance than philosophy',
        'the practical difficulties of applying universal laws in daily life',
        'the role of pleasure and consequence in eighteenth-century ethics',
        'how a Kantian principle continues to shape contemporary moral reasoning'
      ],
      correct: 4,
      causalChain: '제시(칸트의 정언명령) → 예시(거짓말의 자기모순) → 핵심(<span class="ch-hl">형식에 도덕이 있다</span>) → 현대적 의의(정의·존엄 논의)',
      traps: '① 정반대(영향력 쇠퇴 ≠ 지속) · ② 무관(종교 비교 없음) · ③ 지엽(어려움 언급 없음) · ④ 정반대(쾌락 기반 거부)'
    }
  },

  'set4': {
    grammar: '분사 수식구조',
    grammarKey: 'participle',
    topic: '의학',
    passageTitle: '조기 진단의 결정적 효과',
    source: '2024학년도 6월 모의평가 응용',
    background: '암 치료의 패러다임은 지난 30년 사이 극적으로 바뀌었어요. <strong>"늦게 발견하면 어쩔 수 없다"</strong>던 시대를 지나, 이제는 <strong>조기 발견 + 정밀 치료</strong>가 결정적 변수가 됐죠. 같은 암이라도 1기에서 발견되면 5년 생존율이 90%를 넘지만, 4기에서는 30% 이하로 떨어집니다. 이 격차의 핵심은 시간이에요.',
    chunks: [
      { en: 'Patients diagnosed early,', ko: '조기에 진단받은 환자들은,' },
      { en: 'compared with those identified at later stages,', ko: '후기 단계에서 발견된 사람들과 비교했을 때,' },
      { en: 'show recovery rates', ko: '회복률을 보인다' },
      { en: 'approaching ninety percent,', ko: '90%에 가까운,' },
      { en: 'a figure', ko: '(즉) 수치이다' },
      { en: 'transforming how oncologists weigh time itself.', ko: '종양학자들이 \'시간\'이라는 개념 자체를 평가하는 방식을 바꾸어 놓는' }
    ],
    segments: [
      { text: 'Patients diagnosed early, compared with those identified at later stages,', pauseAfterMs: 200 },
      { text: 'show recovery rates approaching ninety percent,', pauseAfterMs: 160 },
      { text: 'a figure transforming how oncologists weigh time itself.', pauseAfterMs: 0 }
    ],
    koreanFull: '후기 단계에서 발견된 환자들과 비교했을 때 조기에 진단받은 환자들은 90%에 가까운 회복률을 보이는데, 이 수치는 종양학자들이 시간 자체를 평가하는 방식을 바꾸어 놓고 있다.',
    passage: "Three decades ago, an oncologist's prognosis often depended more on the cancer's aggressiveness than on when it was caught. That picture has fundamentally changed. <span class='ch-hl'>Patients diagnosed early, compared with those identified at later stages, show recovery rates approaching ninety percent, a figure transforming how oncologists weigh time itself.</span> Screening programs for breast, colon, and cervical cancer now save tens of thousands of lives each year, not by inventing new drugs but by buying patients earlier appointments with the same drugs. The lesson cuts across medicine: in many serious diseases, the calendar is the most powerful intervention we have.",
    passageWordCount: 102,
    passageKorean: "30년 전에는, 종양학자의 예후가 종종 암이 언제 발견되었는지보다 그 공격성에 더 좌우되었다. 그 그림은 근본적으로 바뀌었다. <span class='ch-hl'>후기 단계에서 발견된 환자들과 비교했을 때 조기에 진단받은 환자들은 90%에 가까운 회복률을 보이는데, 이 수치는 종양학자들이 시간 자체를 평가하는 방식을 바꾸어 놓고 있다.</span> 유방암, 대장암, 자궁경부암을 위한 검진 프로그램은 이제 매년 수만 명의 생명을 살리고 있는데, 이는 새로운 약을 발명함으로써가 아니라, 같은 약으로 환자들에게 더 이른 진료 기회를 사주는 방식으로 이루어진다. 이 교훈은 의학 전반에 걸쳐 적용된다 — 많은 중대한 질병에서, 달력(시간)이야말로 우리가 가진 가장 강력한 개입 수단이다.",
    structure: `<div><span style="border-bottom: 2px dashed #993556;">Patients diagnosed early</span>, <span style="color: #993556;">[compared with those identified at later stages]</span>,</div>
      <div style="padding-left: 12px;"><em style="color: var(--color-text-tertiary);">show</em> <span style="border-bottom: 2px solid #0F6E56;">recovery rates</span> <span style="color: #185FA5;">[approaching ninety percent]</span>,</div>
      <div style="padding-left: 24px;"><span style="background: #FAEEDA; color: #854F0B; padding: 2px 6px; border-radius: 3px;">a figure transforming</span> how oncologists weigh time itself.</div>`,
    contextOneLiner: '조기 진단과 후기 진단의 회복률 격차(90% vs 더 낮음)는 의학에서 "시간"의 의미 자체를 바꾸어 놓았다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'why aggressive cancers are increasingly resistant to modern drugs',
        "the high cost barriers preventing widespread cancer screening",
        'recent breakthroughs in chemotherapy for late-stage patients',
        'how early detection has reshaped cancer treatment outcomes',
        'the ethical debate around mandatory cancer screening programs'
      ],
      correct: 3,
      causalChain: '과거(공격성 중심 예후) → 현재(<span class="ch-hl">조기 진단 = 회복률 90%</span>) → 메커니즘(시간 매수) → 일반화(시간이 가장 강력한 개입)',
      traps: '① 무관(공격성 글의 핵심 아님) · ② 지엽(비용 언급 없음) · ③ 정반대(후기 약 ≠ 조기 진단) · ⑤ 무관(윤리 논쟁 없음)'
    }
  },

  'set5': {
    grammar: '분사구문',
    grammarKey: 'participle',
    topic: '경제',
    passageTitle: '글로벌 공급망의 파급 효과',
    source: '2023학년도 9월 모의평가 응용',
    background: '21세기 경제의 가장 큰 특징은 <strong>모든 것이 연결돼 있다</strong>는 거예요. 베트남의 작은 부품 공장이 멈추면, 한 달 뒤 미국의 전기차 생산 라인이 멈춥니다. 2020년 코로나, 2021년 수에즈 운하 봉쇄, 2024년 홍해 위기 — 모두 한 곳의 작은 사건이 <strong>연쇄 반응</strong>을 일으켜 세계 경제를 흔들었어요.',
    chunks: [
      { en: 'A single factory shutdown', ko: '단 한 곳의 공장 가동 중단이' },
      { en: 'occurring in a remote region,', ko: '외딴 지역에서 발생하면,' },
      { en: 'can ripple outward', ko: '바깥으로 파급될 수 있다' },
      { en: 'across continents,', ko: '대륙을 가로질러,' },
      { en: 'forcing manufacturers worldwide to rethink', ko: '전 세계 제조업체들이 재고하게 만들면서' },
      { en: 'what once seemed unshakable.', ko: '한때 흔들리지 않을 것 같이 보였던 것을<br><span style="color: var(--color-text-info); font-size: 13px;">→ 글로벌 공급망 시스템 (효율 중심 구조)</span>' }
    ],
    segments: [
      { text: 'A single factory shutdown occurring in a remote region,', pauseAfterMs: 180 },
      { text: 'can ripple outward across continents,', pauseAfterMs: 150 },
      { text: 'forcing manufacturers worldwide to rethink what once seemed unshakable.', pauseAfterMs: 0 }
    ],
    koreanFull: '외딴 지역에서 발생한 단 한 곳의 공장 가동 중단이 대륙을 가로질러 바깥으로 파급될 수 있고, 이는 전 세계 제조업체들로 하여금 한때 흔들리지 않을 것 같던 것을 재고하게 만든다.',
    passage: "Globalization once promised efficiency above all else. Components flowed from cheapest source to nearest factory, inventories shrank, profits grew. The pandemic exposed the fragility hidden in this design. <span class='ch-hl'>A single factory shutdown occurring in a remote region can ripple outward across continents, forcing manufacturers worldwide to rethink what once seemed unshakable.</span> Carmakers idled assembly lines because of missing chips; pharmacies emptied of basic supplies; ports backed up for weeks. In response, companies have begun building redundancy back into their networks — multiple suppliers, regional hubs, even reshoring — sacrificing some efficiency for resilience.",
    passageWordCount: 95,
    passageKorean: "한때 세계화는 무엇보다 효율성을 약속했다. 부품은 가장 값싼 곳에서 가장 가까운 공장으로 흘러갔고, 재고는 줄었으며, 수익은 늘어났다. 그러나 팬데믹은 이 설계 안에 숨어 있던 취약성을 드러냈다. <span class='ch-hl'>외딴 지역에서 발생한 단 한 곳의 공장 가동 중단이 대륙을 가로질러 바깥으로 파급될 수 있고, 이는 전 세계 제조업체들로 하여금 한때 흔들리지 않을 것 같던 것을 재고하게 만든다.</span> 자동차 제조사들은 부족한 반도체 때문에 조립 라인을 세웠고, 약국은 기본 의약품이 바닥났으며, 항구는 수 주 동안 정체되었다. 이에 대응하여 기업들은 자사 네트워크에 다시 중복성을 구축하기 시작했다 — 여러 공급사, 지역 거점, 심지어 본국 회귀까지 — 회복탄력성을 위해 일부 효율성을 희생하면서 말이다.",
    structure: `<div><span style="background: #FAEEDA; color: #854F0B; padding: 2px 6px; border-radius: 3px;">A single factory shutdown</span> <span style="color: #993556;">[occurring in a remote region]</span>,</div>
      <div style="padding-left: 12px;"><em style="color: var(--color-text-tertiary);">can ripple</em> outward across continents,</div>
      <div style="padding-left: 24px;"><span style="border-bottom: 2px dashed #993556;">forcing manufacturers worldwide</span> <span style="color: #185FA5;">[to rethink what once seemed unshakable]</span>.</div>`,
    contextOneLiner: '한 외딴 공장의 멈춤이 대륙을 가로질러 파급되어 전 세계 제조업의 가정 자체를 흔든다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'how global supply chains became more efficient during the pandemic',
        'why interconnected supply networks force a tradeoff between efficiency and resilience',
        'the rising cost of shipping in the post-pandemic global economy',
        'why companies should source all components from a single supplier',
        'how reshoring eliminates the need for international trade altogether'
      ],
      correct: 1,
      causalChain: '약속(효율성) → 현실(취약성 노출) → 메커니즘(<span class="ch-hl">파급 효과</span>) → 대응(중복성 회복 = 효율성 일부 포기)',
      traps: '① 정반대(효율 ≠ 취약) · ③ 지엽(운송비 글의 초점 아님) · ④ 정반대(단일 ≠ 다수 공급) · ⑤ 과장(완전 제거 ≠ 일부 회귀)'
    }
  },

  'set6': {
    grammar: '가정법 (Were it not for)',
    grammarKey: 'subjunctive',
    topic: '역사',
    passageTitle: '만약 종이가 발명되지 않았다면',
    source: '2024학년도 수능 응용 · 빈칸추론',
    background: '서기 105년경 중국에서 발명된 <strong>종이</strong>는 인류 문명의 가장 결정적인 도구 중 하나예요. 종이가 없었다면 우리는 점토판이나 양피지에 글을 새기고 있을 거고, 책 한 권을 만드는 데 양 200마리가 필요했을 거예요. <strong>지식의 대량 보존과 전파</strong>는 종이가 있었기에 가능한 일이었습니다.',
    chunks: [
      { en: 'Were it not for the invention of paper,', ko: '만약 종이의 발명이 없었다면, (현재 가정)' },
      { en: 'civilization as we know it', ko: '우리가 아는 문명은' },
      { en: 'might never have emerged,', ko: '결코 나타나지 못했을지도 모른다,' },
      { en: 'for the cheap, durable medium', ko: '왜냐하면 그 저렴하고 내구성 있는 매체가' },
      { en: 'allowed knowledge', ko: '지식이 ~할 수 있게 해주었기 때문에' },
      { en: 'to outlive the minds that produced it.', ko: '그것을 생산한 정신(=인간)들보다 더 오래 살아남을 수 있게.' }
    ],
    segments: [
      { text: 'Were it not for the invention of paper, civilization as we know it might never have emerged,', pauseAfterMs: 200 },
      { text: 'for the cheap, durable medium allowed knowledge', pauseAfterMs: 140 },
      { text: 'to outlive the minds that produced it.', pauseAfterMs: 0 }
    ],
    koreanFull: '만약 종이의 발명이 없었다면 우리가 아는 문명은 결코 나타나지 못했을지도 모르는데, 왜냐하면 그 저렴하고 내구성 있는 매체가 지식으로 하여금 그것을 생산한 정신들보다 더 오래 살아남을 수 있게 해주었기 때문이다.',
    passage: "Around 105 CE, a Chinese court official named Cai Lun perfected a process for making sheets from mulberry bark and rags. The result looked unremarkable, yet it changed everything. <span class='ch-hl'>Were it not for the invention of paper, civilization as we know it might never have emerged, for the cheap, durable medium allowed knowledge to outlive the minds that produced it.</span> Clay tablets were too heavy; papyrus too fragile; parchment too costly. Paper was light, strong enough to fold, and produced from materials abundant nearly everywhere. Within a millennium, it had spread from East Asia through the Islamic world to Europe, where it would eventually meet the printing press and detonate the modern age.",
    passageWordCount: 118,
    passageKorean: "기원후 105년경, 채륜(蔡倫)이라는 이름의 중국 궁정 관리는 뽕나무 껍질과 헝겊으로 종이 한 장을 만드는 공정을 완성했다. 그 결과물은 평범해 보였지만, 모든 것을 바꾸어 놓았다. <span class='ch-hl'>만약 종이의 발명이 없었다면 우리가 아는 문명은 결코 나타나지 못했을지도 모르는데, 왜냐하면 그 저렴하고 내구성 있는 매체가 지식으로 하여금 그것을 생산한 정신들보다 더 오래 살아남을 수 있게 해주었기 때문이다.</span> 점토판은 너무 무거웠고, 파피루스는 너무 약했으며, 양피지는 너무 비쌌다. 종이는 가볍고, 접을 수 있을 만큼 튼튼했으며, 거의 어디에서나 풍부한 재료로 만들 수 있었다. 천 년이 채 지나기 전에 종이는 동아시아에서 이슬람권을 거쳐 유럽으로 퍼져 나갔고, 그곳에서 결국 인쇄기를 만나 근대를 폭발시키게 된다.",
    structure: `<div><span style="background: #FCEBEB; color: #791F1F; padding: 2px 6px; border-radius: 3px; font-weight: 500;">Were it not for the invention of paper</span>,</div>
      <div style="padding-left: 12px;"><span style="background: #FAEEDA; color: #854F0B; padding: 2px 6px; border-radius: 3px;">civilization as we know it</span> <em style="color: var(--color-text-tertiary);">might never have emerged</em>,</div>
      <div style="padding-left: 24px;"><span style="color: #993556;">for</span> the cheap, durable medium <em style="color: var(--color-text-tertiary);">allowed</em> <span style="border-bottom: 2px solid #0F6E56;">knowledge</span></div>
      <div style="padding-left: 36px;"><span style="color: #185FA5;">[to outlive the minds that produced it]</span>.</div>`,
    contextOneLiner: '종이가 발명되지 않았더라면, 우리가 알고 있는 문명은 아마 등장하지 않았을 것이다. 왜냐하면 이 싸고 내구성 있는 매체가 지식을 인간의 기억보다 더 오래 지속되게 만들었기 때문이다.<br>→ 사람은 죽어도 지식은 남는다. 그걸 가능하게 한 게 종이',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'the technical superiority of clay tablets over early paper',
        'why the printing press alone created the modern age',
        'the decline of papyrus as a writing medium in ancient Egypt',
        'the political role of Cai Lun in the Han dynasty court',
        'how the invention of paper made cumulative knowledge possible'
      ],
      correct: 4,
      causalChain: '발명(채륜의 종이) → 가정법(<span class="ch-hl">없었다면 문명 없음</span>) → 메커니즘(지식 ≫ 발명자 수명) → 확산(천 년에 걸친 전파)',
      traps: '① 정반대(점토판 열등 ≠ 우월) · ② 과장(인쇄기만 ≠ 종이 + 인쇄기) · ③ 지엽(파피루스 쇠퇴 부차적) · ④ 무관(채륜 정치 역할 아님)'
    }
  },

  'set7': {
    grammar: '부정어 문두 시 도치',
    grammarKey: 'inversion',
    topic: '문학',
    passageTitle: '침묵이 시작되는 순간',
    source: '2022학년도 수능 40번 응용',
    background: '문학에서 <strong>침묵</strong>은 단순한 부재가 아니에요. 어떤 작가들은 말로 표현할 수 없는 감정을 침묵으로 드러내죠. 헤밍웨이의 <strong>"빙산 이론"</strong> — 글로 쓰는 건 빙산의 8분의 1이고, 나머지는 행간에 잠겨 있다는 것 — 은 이 침묵의 미학을 가장 잘 설명하는 비유예요.',
    chunks: [
      { en: 'Not until the final page', ko: '마지막 페이지가 되기 전까지는 아니다' },
      { en: 'does the reader realize', ko: '독자가 깨닫게 된다는 것은<br><span style="color: var(--color-text-info); font-size: 13px;">→ 마지막 페이지가 되어서야 독자는 깨닫게 된다</span>' },
      { en: 'that what was left unsaid', ko: '말해지지 않은 것이' },
      { en: 'mattered far more', ko: '훨씬 더 중요했음을' },
      { en: 'than anything the characters had spoken aloud.', ko: '등장 인물들이 소리 내어 말했던 어떤 것 보다도' }
    ],
    segments: [
      { text: 'Not until the final page does the reader realize', pauseAfterMs: 200 },
      { text: 'that what was left unsaid mattered far more', pauseAfterMs: 160 },
      { text: 'than anything the characters had spoken aloud.', pauseAfterMs: 0 }
    ],
    koreanFull: '마지막 페이지가 되어서야 비로소 독자는 말해지지 않은 것이 등장인물들이 소리 내어 말했던 그 어떤 것보다도 훨씬 더 중요했음을 깨닫게 된다.',
    passage: "Hemingway called it the iceberg theory: a story shows only one-eighth of itself, leaving seven-eighths submerged beneath the surface. The greatest writers trust their readers to feel that hidden weight. <span class='ch-hl'>Not until the final page does the reader realize that what was left unsaid mattered far more than anything the characters had spoken aloud.</span> A glance held a moment too long, a sentence trailing into ellipsis, a question never asked — these silences carry meanings too dense for direct speech. To write this way is to honor the reader as a co-creator, granting them the dignity of completing the meaning themselves.",
    passageWordCount: 105,
    passageKorean: "헤밍웨이는 그것을 빙산 이론이라 불렀다. 즉, 하나의 이야기는 자기 자신의 8분의 1만을 보여주고, 8분의 7은 수면 아래에 잠겨 있도록 둔다는 것이다. 가장 위대한 작가들은 독자들이 그 숨은 무게를 느낄 것이라고 믿는다. <span class='ch-hl'>마지막 페이지가 되어서야 비로소 독자는 말해지지 않은 것이 등장인물들이 소리 내어 말했던 그 어떤 것보다도 훨씬 더 중요했음을 깨닫게 된다.</span> 한순간 너무 오래 머문 시선, 말줄임표로 흩어지는 문장, 끝내 던져지지 않은 질문 — 이러한 침묵들은 직접 말로는 담을 수 없을 만큼 짙은 의미를 품고 있다. 이런 방식으로 글을 쓴다는 것은 독자를 공동 창작자로서 존중하는 일이며, 그들이 스스로 의미를 완성할 수 있는 권위를 부여하는 일이다.",
    structure: `<div><span style="background: #FCEBEB; color: #791F1F; padding: 2px 6px; border-radius: 3px; font-weight: 500;">Not until the final page</span> <em style="color: var(--color-text-tertiary);">does</em> <span style="background: #FAEEDA; color: #854F0B; padding: 2px 6px; border-radius: 3px;">the reader</span> <em style="color: var(--color-text-tertiary);">realize</em></div>
      <div style="padding-left: 12px;"><span style="color: #185FA5;">[that <span style="background: #EFF6FC; padding: 0 4px;">what was left unsaid</span> mattered far more</span></div>
      <div style="padding-left: 24px;"><span style="color: #185FA5;">than anything <span style="color: #993556;">(that) the characters had spoken aloud]</span>.</span></div>`,
    contextOneLiner: '말해지지 않은 것이, 때로는 말해진 것보다 더 중요하다. 작가들은 모든 것을 직접 드러내지 않고, 드러내지 않은 부분에 더 깊은 의미를 담는다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        "Hemingway's preference for plain dialogue over literary description",
        'why modern readers struggle with classical literature',
        'how skilled writers use silence and omission as primary tools of meaning',
        'the historical decline of detailed exposition in twentieth-century novels',
        'translation challenges when rendering implicit meaning across languages'
      ],
      correct: 2,
      causalChain: '비유(빙산 이론 1/8 vs 7/8) → 신뢰(<span class="ch-hl">독자가 침묵을 느낀다</span>) → 예시(시선·말줄임표·미완 질문) → 가치(독자 = 공동 창작자)',
      traps: '① 부분 단어(헤밍웨이 단순화 ≠ 침묵의 깊이) · ② 무관(현대 독자 어려움 없음) · ④ 지엽(20세기 쇠퇴 언급 없음) · ⑤ 무관(번역 얘기 없음)'
    }
  },

  'set8': {
    grammar: '가주어 it ~ that',
    grammarKey: 'dummy',
    topic: 'AI',
    passageTitle: '도구를 넘어선 AI',
    source: '2024학년도 6월 응용 · 빈칸추론',
    background: '2022년 ChatGPT 등장 이후 AI는 <strong>"도구"라는 정의 자체</strong>를 흔들고 있어요. 망치는 못을 박고 끝나지만, AI는 사용자와 대화하고, 학습하고, 때로는 사용자의 의견을 바꿔놓기까지 하죠. 이제 학자들은 AI를 단순한 기술이 아니라 <strong>"인지적 동반자(cognitive partner)"</strong>로 보기 시작했어요. 그런데 동반자라면, 우리는 그것에 대해 어떤 책임을 져야 할까요?',
    chunks: [
      { en: 'It has become increasingly clear', ko: '점점 더 분명해졌다' },
      { en: 'that the systems we build', ko: '우리가 만드는 시스템들이' },
      { en: 'are no longer mere tools', ko: '더 이상 단순한 도구가 아니라' },
      { en: 'but partners', ko: '오히려 파트너라는 점이' },
      { en: 'whose decisions shape ours in return.', ko: '그것(AI 시스템)의 결정들이 우리의 결정을 다시 형성한다.' }
    ],
    segments: [
      { text: 'It has become increasingly clear', pauseAfterMs: 160 },
      { text: 'that the systems we build are no longer mere tools but partners', pauseAfterMs: 180 },
      { text: 'whose decisions shape ours in return.', pauseAfterMs: 0 }
    ],
    koreanFull: '우리가 만드는 시스템들이 더 이상 단순한 도구가 아니라 그것의 결정이 거꾸로 우리의 결정을 형성하는 파트너라는 점이 점점 더 분명해졌다.',
    passage: "For most of computing history, machines did exactly what we told them, nothing more. The arrival of large language models has shifted that ground beneath our feet. <span class='ch-hl'>It has become increasingly clear that the systems we build are no longer mere tools but partners whose decisions shape ours in return.</span> A doctor relies on diagnostic suggestions from an algorithm; a writer accepts or resists a model's phrasing; a teenager spends hours conversing with a chatbot that gradually nudges their worldview. The relationship is bidirectional, and that bidirectionality demands a new ethics — one less concerned with what AI can do for us, and more concerned with what we are becoming together.",
    passageWordCount: 117,
    passageKorean: "컴퓨터 역사의 대부분 동안, 기계는 정확히 우리가 시키는 일을 했고 그 이상은 하지 않았다. 그러나 대규모 언어 모델의 등장은 우리 발밑의 그 지반을 흔들어 놓았다. <span class='ch-hl'>우리가 만드는 시스템들이 더 이상 단순한 도구가 아니라 그것의 결정이 거꾸로 우리의 결정을 형성하는 파트너라는 점이 점점 더 분명해졌다.</span> 한 의사는 알고리즘이 제시하는 진단 제안에 의존하고, 한 작가는 모델이 다듬어 준 표현을 받아들이거나 거부하며, 한 청소년은 자신의 세계관을 서서히 조정해 가는 챗봇과 몇 시간씩 대화한다. 그 관계는 양방향이며, 바로 그 양방향성은 새로운 윤리를 요구한다 — AI가 우리에게 무엇을 해줄 수 있는가에 덜 관심을 두고, 우리가 함께 무엇이 되어가고 있는가에 더 관심을 두는 윤리를.",
    structure: `<div><span style="background: #FCEBEB; color: #791F1F; padding: 2px 6px; border-radius: 3px; font-weight: 500;">It</span> <em style="color: var(--color-text-tertiary);">has become</em> increasingly clear</div>
      <div style="padding-left: 12px;"><span style="color: #185FA5;">[that the systems <span style="color: #993556;">(we build)</span> are no longer mere tools but partners</span></div>
      <div style="padding-left: 24px;"><span style="color: #185FA5;"><span style="border-bottom: 2px dashed #993556;">whose decisions</span> shape ours in return]</span>.</div>
      <div style="padding-left: 12px; font-size: 12px; color: var(--color-text-tertiary); margin-top: 4px;">↑ It은 가주어, [that ~] 절 전체가 진주어</div>`,
    contextOneLiner: '우리가 만든 시스템(AI)은 더 이상 단순한 도구가 아니라, 그들의 결정이 우리의 결정에도 영향을 미치는 ‘파트너’가 되었다는 것이 점점 분명해지고 있다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'how artificial intelligence has finally surpassed human intelligence in all tasks',
        'the technical limitations preventing language models from making decisions',
        'why doctors should never rely on algorithms for medical diagnosis',
        'why our changing relationship with AI requires a new framework of ethics',
        'historical attempts to regulate computer programs in the twentieth century'
      ],
      correct: 3,
      causalChain: '과거(기계 = 명령 따르는 도구) → 변화(<span class="ch-hl">LLM이 지반 흔듦</span>) → 예시(의사·작가·청소년) → 결론(쌍방향 = 새 윤리 필요)',
      traps: '① 과장(능가 ≠ 동반자) · ② 정반대(글은 결정 능력 인정) · ③ 지엽(의사 의존 비판 아님) · ⑤ 무관(20세기 규제 없음)'
    }
  },

  'set9': {
    grammar: '현재완료 수동태 (has been + p.p.)',
    grammarKey: 'passive',
    topic: '기후과학',
    passageTitle: '산업화 이후 지구 기온의 변화',
    source: '2024학년도 9월 모의평가 응용',
    background: '<strong>현재완료 수동태(has/have been + p.p.)</strong>는 *"과거 어느 시점부터 지금까지 ~되어 왔다"*라는 시간 폭을 한꺼번에 담는 구조예요. 단순 수동(*was raised*)은 한 시점만, 현재완료 수동(*has been raised*)은 <strong>지속과 누적</strong>을 표현하죠. 기후 데이터처럼 "장기간 누적된 변화"를 말할 때 거의 필수적으로 쓰이는 패턴입니다.',
    chunks: [
      { en: "Earth's average surface temperature", ko: '지구의 평균 표면 온도는' },
      { en: 'has been steadily raised', ko: '꾸준히 상승되어 왔다 <span style="color: var(--color-text-info); font-size: 13px;">(현재완료 수동: 산업화 시점부터 지금까지)</span>' },
      { en: 'by roughly 1.2 degrees Celsius', ko: '대략 섭씨 1.2도만큼' },
      { en: 'since industrialization began,', ko: '산업화가 시작된 이래로,' },
      { en: 'a change driven', ko: '하나의 변화이다, 추동된' },
      { en: 'almost entirely by human activity.', ko: '거의 전적으로 인간 활동에 의해.' }
    ],
    segments: [
      { text: "Earth's average surface temperature has been steadily raised by roughly 1.2 degrees Celsius", pauseAfterMs: 200 },
      { text: 'since industrialization began,', pauseAfterMs: 160 },
      { text: 'a change driven almost entirely by human activity.', pauseAfterMs: 0 }
    ],
    koreanFull: '지구의 평균 표면 온도는 산업화가 시작된 이래로 대략 섭씨 1.2도만큼 꾸준히 상승되어 왔는데, 이것은 거의 전적으로 인간 활동에 의해 추동된 변화이다.',
    passage: "Climate scientists rely on two centuries of meteorological records to track the planet's vital signs. The picture they assemble is unambiguous. <span class='ch-hl'>Earth's average surface temperature has been steadily raised by roughly 1.2 degrees Celsius since industrialization began, a change driven almost entirely by human activity.</span> The same period saw atmospheric carbon dioxide rise from 280 to 420 parts per million, oceans grow measurably more acidic, and Arctic sea ice retreat by nearly half its summer extent. None of these shifts has a plausible natural explanation when considered against the geological baseline.",
    passageWordCount: 96,
    passageKorean: "기후 과학자들은 지구의 생체 신호를 추적하기 위해 2세기에 걸친 기상 기록에 의존한다. 그들이 종합한 그림은 분명하다. <span class='ch-hl'>지구의 평균 표면 온도는 산업화가 시작된 이래로 대략 섭씨 1.2도만큼 꾸준히 상승되어 왔는데, 이것은 거의 전적으로 인간 활동에 의해 추동된 변화이다.</span> 같은 기간에 대기 중 이산화탄소는 280ppm에서 420ppm으로 상승했고, 바다는 측정 가능할 정도로 더 산성화되었으며, 북극 해빙은 여름철 면적의 거의 절반만큼 줄어들었다. 지질학적 기준선과 비교했을 때, 이러한 변화들 중 어느 것도 자연적으로는 설명되지 않는다.",
    structure: `<div style="background: var(--color-background-info); border-left: 3px solid var(--color-text-info); border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0; padding: 10px 14px; margin-bottom: 14px;">
        <div style="font-family: var(--font-serif); font-size: 10px; color: var(--color-text-info); letter-spacing: 0.1em; margin-bottom: 4px;">★ 핵심 공식</div>
        <div style="font-family: var(--font-mono); font-size: 13px; color: var(--color-text-info); font-weight: 500;">has/have been + p.p. <span style="color: var(--color-text-tertiary);">+ since A</span></div>
        <div style="font-size: 12px; color: var(--color-text-info); margin-top: 4px; line-height: 1.5;">A 시점부터 지금까지 ~되어 왔다 <strong>(누적·지속)</strong></div>
      </div>
      <div><span class="ch-hl">Earth's average surface temperature</span></div>
      <div style="padding-left: 12px;"><span style="background: #FCEBEB; color: #791F1F; padding: 2px 6px; border-radius: 3px; font-weight: 500;">has been steadily raised</span> by roughly 1.2°C</div>
      <div style="padding-left: 24px;"><span style="color: #185FA5;">[since industrialization began]</span>,</div>
      <div style="padding-left: 12px;"><span style="background: #FAEEDA; color: #854F0B; padding: 2px 6px; border-radius: 3px;">a change</span> <span style="color: #993556;">[driven almost entirely by human activity]</span>.</div>`,
    contextOneLiner: '산업화 이후 지구 평균 기온은 약 1.2도 상승해 왔고, 이 변화는 거의 전적으로 인간이 만든 결과다.<br>→ 단순한 한 시점의 사건이 아니라 <strong>200년에 걸쳐 누적된 변화</strong> — 그래서 has been raised (현재완료 수동)을 쓴 거예요.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'how meteorological instruments have improved over two centuries',
        'why the Arctic ice retreat is the most reliable climate indicator',
        'how cumulative climate data points clearly to human-driven warming',
        'the geological history of natural temperature fluctuations on Earth',
        'why carbon dioxide alone cannot explain global temperature changes'
      ],
      correct: 2,
      causalChain: '도구(2세기 기록) → 데이터(<span class="ch-hl">기온 1.2°C 상승</span>) → 누적 증거(CO₂·해양·북극) → 결론(자연 설명 불가)',
      traps: '① 지엽(도구 발전 글의 초점 아님) · ② 부분 단어(북극은 예시 중 하나) · ④ 무관(자연 변동 설명 없음) · ⑤ 정반대(CO₂가 핵심 증거)'
    }
  },

  'set10': {
    grammar: '과거완료 수동태 + 인과/전후관계',
    grammarKey: 'passive',
    topic: '고고학',
    passageTitle: '고대 유물의 재해석',
    source: '2023학년도 6월 모의평가 응용',
    background: '<strong>과거완료 수동태(had been + p.p.)</strong>는 *"과거의 더 과거"*에서 일어난 수동 사건을 표현해요. 글에서 자주 <strong>"한때 X로 여겨졌으나, 이제는 Y로 밝혀졌다"</strong>처럼 <strong>전후관계의 반전</strong>을 만들 때 쓰입니다. 학생들이 시험장에서 이 시제 차이를 놓치면 글의 논리(과거 가설 → 현재 새 발견)가 무너져요.',
    chunks: [
      { en: 'The artifact,', ko: '그 유물은,' },
      { en: 'which had been mistakenly classified', ko: '잘못 분류되어 있었던 <span style="color: var(--color-text-info); font-size: 13px;">(과거완료 수동: 그 전부터 분류된 상태)</span>' },
      { en: 'as a ceremonial object', ko: '의식용 물건으로' },
      { en: 'for nearly a century,', ko: '거의 한 세기 동안,' },
      { en: 'was finally recognized', ko: '마침내 (재)인식되었다 <span style="color: var(--color-text-info); font-size: 13px;">→ 그제서야 알려지게 되었다</span>' },
      { en: 'as an early astronomical instrument.', ko: '초기의 천문 관측 기구로서.' }
    ],
    segments: [
      { text: 'The artifact, which had been mistakenly classified as a ceremonial object for nearly a century,', pauseAfterMs: 220 },
      { text: 'was finally recognized', pauseAfterMs: 140 },
      { text: 'as an early astronomical instrument.', pauseAfterMs: 0 }
    ],
    koreanFull: '거의 한 세기 동안 의식용 물건으로 잘못 분류되어 있었던 그 유물은, 마침내 초기의 천문 관측 기구로 인식되게 되었다.',
    passage: "Museums sometimes get their stories spectacularly wrong. A bronze disc unearthed in the late nineteenth century sat for decades in a glass case labeled, with quiet confidence, as a religious offering. Then a graduate student noticed the patterns of holes drilled around its rim. <span class='ch-hl'>The artifact, which had been mistakenly classified as a ceremonial object for nearly a century, was finally recognized as an early astronomical instrument.</span> The holes corresponded precisely to the angular positions of certain stars at midnight on the spring equinox — too precisely to be coincidence. What had once seemed sacred turned out to be scientific, and the disc now anchors a growing literature on prehistoric astronomy.",
    passageWordCount: 113,
    passageKorean: "박물관은 때때로 자기네 설명이 놀라울 만큼 틀려 있기도 한다. 19세기 후반에 발굴된 한 청동 원반은 수십 년 동안 *'종교적 봉헌물'*이라는 라벨이 조용히 자신만만하게 붙은 채 유리장에 놓여 있었다. 그러던 중 한 대학원생이 원반 가장자리에 뚫린 구멍들의 패턴을 발견했다. <span class='ch-hl'>거의 한 세기 동안 의식용 물건으로 잘못 분류되어 있었던 그 유물은, 마침내 초기의 천문 관측 기구로 인식되게 되었다.</span> 그 구멍들은 춘분 자정에 특정 별들이 위치한 각도와 정확히 일치했다 — 우연이라고 보기엔 너무 정확했다. 한때 신성하게 보였던 것이 사실은 과학적이었던 것으로 밝혀졌고, 그 원반은 이제 선사 시대 천문학에 관한 점점 늘어나는 연구 문헌의 중심에 있다.",
    structure: `<div style="background: var(--color-background-info); border-left: 3px solid var(--color-text-info); border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0; padding: 10px 14px; margin-bottom: 14px;">
        <div style="font-family: var(--font-serif); font-size: 10px; color: var(--color-text-info); letter-spacing: 0.1em; margin-bottom: 4px;">★ 핵심 공식 — 시간의 두 층</div>
        <div style="font-family: var(--font-mono); font-size: 13px; color: var(--color-text-info); font-weight: 500; line-height: 1.7;">had been + p.p. <span style="color: var(--color-text-tertiary);">[과거의 더 과거]</span><br>was/were + p.p. <span style="color: var(--color-text-tertiary);">[그 다음 과거]</span></div>
        <div style="font-size: 12px; color: var(--color-text-info); margin-top: 4px; line-height: 1.5;">두 시제가 함께 쓰이면 <strong>"전후관계의 반전"</strong>을 만들어요</div>
      </div>
      <div><span class="ch-hl">The artifact</span>,</div>
      <div style="padding-left: 12px;"><span style="color: #185FA5;">[which <span style="background: #FCEBEB; color: #791F1F; padding: 2px 6px; border-radius: 3px; font-weight: 500;">had been mistakenly classified</span> as a ceremonial object for nearly a century]</span>,</div>
      <div style="padding-left: 12px;"><span style="background: #FAEEDA; color: #854F0B; padding: 2px 6px; border-radius: 3px; font-weight: 500;">was finally recognized</span> as an early astronomical instrument.</div>
      <div style="margin-top: 8px; font-size: 11px; color: var(--color-text-tertiary);">↑ 100년 동안 잘못 분류 (had been ~) → 마침내 재인식 (was ~) : <strong>시제로 전후관계 표현</strong></div>`,
    contextOneLiner: '한 청동 원반이 100년간 의식용으로 잘못 분류되어 있다가, 한 대학원생의 발견으로 사실은 천문 관측 기구였음이 밝혀졌다.<br>→ 글의 핵심 = <strong>"과거 가정 vs 새 발견"</strong>의 반전. 시제(had been ↔ was)가 이 논리를 떠받침.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'how a museum reorganized its bronze artifact collection in the nineteenth century',
        'how careful observation overturned a long-standing misclassification of an ancient object',
        'why religious offerings often resemble early scientific instruments in shape',
        'the dominant role of graduate students in modern archaeological breakthroughs',
        'the difficulty of dating ancient bronze objects using stylistic analysis alone'
      ],
      correct: 1,
      causalChain: '오류(<span class="ch-hl">100년간 의식용으로 분류</span>) → 발견(대학원생이 구멍 패턴 인지) → 검증(춘분 별 위치와 일치) → 재정의(천문 기구)',
      traps: '① 지엽(박물관 운영 ≠ 재해석) · ③ 무관(다른 사례 일반화 안 함) · ④ 과장(대학원생 일반론 아님) · ⑤ 무관(연대 측정 얘기 없음)'
    }
  },

  'set11': {
    grammar: '조동사 수동태 + 해석 주의',
    grammarKey: 'passive',
    topic: '우주공학',
    passageTitle: '제임스 웹 망원경의 첫 발견',
    source: '2024학년도 6월 모의평가 응용',
    background: '<strong>조동사 수동태(must/can/should + be + p.p.)</strong>는 *"~되어야 한다 / ~될 수 있다 / ~되어야 마땅하다"*라는 가능·의무·당위를 담아요. 그리고 학생들이 자주 헷갈리는 게 <strong>be 동사 + 형용사처럼 보이는데 사실 수동태인 경우</strong>예요. *"is concerned"*, *"is involved"* 같은 표현은 형태는 수동태이지만 한국어로는 능동처럼 해석해야 자연스럽죠.',
    chunks: [
      { en: 'A galaxy that should not yet exist', ko: '아직 존재하지 말아야 할 은하가' },
      { en: 'has been observed', ko: '관측되었다 <span style="color: var(--color-text-info); font-size: 13px;">(현재완료 수동: 새로운 발견)</span>' },
      { en: 'just 300 million years', ko: '단 3억 년 후에' },
      { en: 'after the Big Bang,', ko: '빅뱅 이후,' },
      { en: 'a finding that must be reconciled', ko: '하나의 발견이다, 반드시 조정되어야 할 <span style="color: var(--color-text-info); font-size: 13px;">(조동사 수동: 마땅히 ~되어야 함)</span>' },
      { en: 'with our standard model of cosmic evolution.', ko: '우주 진화에 관한 (기존의) 우리의 표준 모형과' }
    ],
    segments: [
      { text: 'A galaxy that should not yet exist has been observed', pauseAfterMs: 200 },
      { text: 'just 300 million years after the Big Bang,', pauseAfterMs: 180 },
      { text: 'a finding that must be reconciled with our standard model of cosmic evolution.', pauseAfterMs: 0 }
    ],
    koreanFull: '아직 존재하지 말아야 할 은하 하나가 빅뱅 이후 단 3억 년 후에 관측되었는데, 이는 우주 진화에 관한 우리의 표준 모형과 반드시 조화시켜야 할 발견이다.',
    passage: "For decades, astronomers assumed that the early universe was a slow, fragmentary place — too young, too thin to assemble large structures quickly. The James Webb Space Telescope has begun to challenge that picture in startling ways. <span class='ch-hl'>A galaxy that should not yet exist has been observed just 300 million years after the Big Bang, a finding that must be reconciled with our standard model of cosmic evolution.</span> The object is fully formed, rich in heavy elements, and far brighter than theory predicts. Either galaxies grew up much faster than anyone thought, or our timeline of cosmic history needs serious revision.",
    passageWordCount: 105,
    passageKorean: "수십 년 동안 천문학자들은 초기 우주가 느리고 파편적인 곳이라고 — 큰 구조를 빠르게 조립하기에는 너무 어리고 너무 희박한 곳이라고 — 가정해 왔다. 제임스 웹 우주 망원경은 그 그림을 놀라운 방식으로 흔들기 시작했다. <span class='ch-hl'>아직 존재하지 말아야 할 은하 하나가 빅뱅 이후 단 3억 년 후에 관측되었는데, 이는 우주 진화에 관한 우리의 표준 모형과 반드시 조화시켜야 할 발견이다.</span> 그 천체는 완전히 형성되어 있고, 무거운 원소가 풍부하며, 이론이 예측하는 것보다 훨씬 밝다. 은하가 누구의 생각보다도 훨씬 빠르게 성장했거나, 아니면 우주 역사의 시간표가 심각한 수정을 필요로 한다.",
    structure: `<div style="background: var(--color-background-info); border-left: 3px solid var(--color-text-info); border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0; padding: 10px 14px; margin-bottom: 14px;">
        <div style="font-family: var(--font-serif); font-size: 10px; color: var(--color-text-info); letter-spacing: 0.1em; margin-bottom: 4px;">★ 핵심 공식 — 두 가지 수동태가 한 문장에</div>
        <div style="font-family: var(--font-mono); font-size: 13px; color: var(--color-text-info); font-weight: 500; line-height: 1.8;">has been + p.p. <span style="color: var(--color-text-tertiary);">→ ~되었다 (사실)</span><br>must be + p.p. <span style="color: var(--color-text-tertiary);">→ ~되어야 한다 (당위)</span></div>
        <div style="font-size: 12px; color: var(--color-text-info); margin-top: 4px; line-height: 1.5;">한 문장에서 사실(완료 수동) → 당위(조동사 수동)로 자연스럽게 흐름</div>
      </div>
      <div><span class="ch-hl">A galaxy</span> <span style="color: #185FA5;">[that should not yet exist]</span></div>
      <div style="padding-left: 12px;"><span style="background: #FCEBEB; color: #791F1F; padding: 2px 6px; border-radius: 3px; font-weight: 500;">has been observed</span> just 300 million years after the Big Bang,</div>
      <div style="padding-left: 12px;"><span style="background: #FAEEDA; color: #854F0B; padding: 2px 6px; border-radius: 3px;">a finding</span> <span style="color: #185FA5;">[that <span style="background: #FCEBEB; color: #791F1F; padding: 2px 6px; border-radius: 3px; font-weight: 500;">must be reconciled</span> with our standard model]</span>.</div>`,
    contextOneLiner: '초기 우주는 (원소 재료가 부족해서) 천천히 형성되어야 한다는 기존 이론과 달리, 빅뱅 이후 3억년 정도 밖에 안된 너무 이른 시기에 성숙한 은하(무거운 원소가 많고 안정된)가 발견되면서 기존의 우주 진화 모델의 수정이 필요해졌다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'how the James Webb Telescope was designed and assembled in space',
        'why all current galaxies must contain heavy elements to form properly',
        "the gradual cooling of the universe in its first 300 million years",
        'an unexpected early galaxy that challenges established theories of cosmic evolution',
        'the comparative brightness of nearby and distant galaxies in modern astronomy'
      ],
      correct: 3,
      causalChain: '기존 가정(초기 우주 = 느림) → 발견(<span class="ch-hl">존재 불가 은하 관측</span>) → 모순(이론보다 빠른 성장) → 결론(모형 수정 필요)',
      traps: '① 무관(망원경 설계 ≠ 발견) · ② 과장(모든 은하 일반화 아님) · ③ 정반대(글은 초기 우주가 빠르게 발달했다고 시사) · ⑤ 지엽(밝기 비교는 부분 사례)'
    }
  }
};

// 문법 챕터 정의 — 각 세트가 어느 챕터에 속하는지 자동 매칭
window.GRAMMAR_CHAPTERS = [
  { key: 'participle', num: 1, name: '분사구문', ex: 'favoring those who could...', meta: '8 청크' },
  { key: 'relative', num: 2, name: '관계사 수식', ex: 'who could anticipate', meta: '8 청크' },
  { key: 'apposition', num: 3, name: '동격 that', ex: 'recognition that survival...', meta: '8 청크' },
  { key: 'comparative', num: 4, name: '비교급 / 최상급', ex: 'less a window than a lens', meta: '8 청크' },
  { key: 'subjunctive', num: 5, name: '가정법', ex: 'Were it not for paper', meta: '8 청크' },
  { key: 'inversion', num: 6, name: '도치 구문', ex: 'Not until the final page', meta: '8 청크' },
  { key: 'dummy', num: 7, name: '가주어 / 가목적어 it', ex: 'It has become clear that', meta: '8 청크' },
  { key: 'passive', num: 8, name: '능동태 vs 수동태 (시제별)', ex: 'has been raised since...', meta: '8 청크' }
];
