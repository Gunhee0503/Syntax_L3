// 학습 세트 데이터 — 새 세트 추가는 이 파일만 수정하면 돼요
window.SETS = {
  'set1': {
    grammar: '관계사 수식',
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
    structure: `<div><span class="ch-hl">The recognition</span> <span style="color: #185FA5;">[that survival depended on collective effort]</span></div>
      <div style="padding-left: 12px;"><em style="color: var(--color-text-tertiary);">gradually transformed</em> <span style="border-bottom: 2px solid #0F6E56;">our ancestors' cognitive architecture</span>,</div>
      <div style="padding-left: 24px;"><span style="border-bottom: 2px dashed #993556;">favoring those</span> <span style="color: #993556;">[who could anticipate the intentions of others]</span>.</div>`,
    contextOneLiner: '"혼자서는 살아남을 수 없다"는 깨달음이, "남의 마음을 읽는 능력"을 가진 조상을 진화적으로 이롭게 만들었다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'the role of brain size in determining hunting success among early humans',
        'how cooperative living shaped the evolution of human social cognition',
        'why human ancestors needed to defend against large predators',
        'the limitations of facial expressions as tools for communication',
        'cultural inheritance as the main driver of cognitive development'
      ],
      correct: 1,
      causalChain: '환경(혼자선 못 살았다) → 인식(<span class="ch-hl">학습한 문장</span>) → 결과(뇌 변형) → 일반화(사회적 지능 토대)',
      traps: '① 부분 단어(brain size) · ③ 지엽(포식자) · ④ 정반대(한계) · ⑤ 유사 개념(문화 ≠ 진화)'
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
    structure: `<div><span class="ch-hl">Language</span>, <span style="color: #993556;">in this view,</span> <em style="color: var(--color-text-tertiary);">is</em></div>
      <div style="padding-left: 16px;"><span style="background: #EFF6FC; color: #143C6B; padding: 2px 6px; border-radius: 3px;">less a transparent window onto reality</span></div>
      <div style="padding-left: 16px;"><span style="color: var(--color-text-tertiary); font-size: 12px;">— 비교 축 —</span></div>
      <div style="padding-left: 16px;"><span style="background: #FBF7EE; color: #5A4515; padding: 2px 6px; border-radius: 3px;">than a lens <span style="color: #185FA5;">[that quietly bends what we see]</span></span></div>`,
    contextOneLiner: '언어는 현실을 그대로 보여주는 투명한 도구가 아니라, 우리가 세상을 보는 방식을 결정하는 굴절 장치다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'the universal structure of human visual perception',
        'how language quietly shapes the way speakers perceive reality',
        'why grammatical tense systems vary across world languages',
        'the difficulty of translating idioms between distant languages',
        "cognitive scientists' historical bias toward European languages"
      ],
      correct: 1,
      causalChain: '가정(보편 인식) → 반전(연구 결과) → 메커니즘(어휘가 인식 형성) → 결론(<span class="ch-hl">언어 = 굴절 렌즈</span>)',
      traps: '① 정반대(글이 부정하는 가정) · ③ 지엽(시제는 예시) · ④ 무관(번역 얘기 없음) · ⑤ 함정(과학자 비판은 부차적)'
    }
  },

  'set3': {
    grammar: '관계사 수식',
    grammarKey: 'relative',
    topic: '철학',
    passageTitle: '칸트와 정언명령의 유산',
    source: '2023학년도 수능 30번 응용',
    background: '18세기 독일 철학자 <strong>칸트(Kant)</strong>는 도덕 판단의 새로운 기준을 제시했어요. "어떤 행위가 옳은지 알고 싶으면, 그 행위가 모두에게 보편 법칙이 될 수 있는지 자문해보라" — 이것이 <strong>정언명령(categorical imperative)</strong>이에요. 결과가 아닌 원칙으로 도덕을 판단하는 이 관점은 현대 윤리학의 토대가 되었습니다.',
    chunks: [
      { en: 'Kant proposed a moral test', ko: '칸트는 도덕적 시험을 제안했다' },
      { en: 'whose force still resonates today,', ko: '오늘날에도 여전히 울려 퍼지는,' },
      { en: 'demanding that we ask', ko: '우리에게 묻기를 요구하면서' },
      { en: 'whether the rule', ko: '그 규칙이' },
      { en: 'we are about to follow', ko: '우리가 따르려는' },
      { en: 'could become a universal law.', ko: '보편적 법칙이 될 수 있는지를.' }
    ],
    segments: [
      { text: 'Kant proposed a moral test whose force still resonates today,', pauseAfterMs: 180 },
      { text: 'demanding that we ask', pauseAfterMs: 100 },
      { text: 'whether the rule we are about to follow could become a universal law.', pauseAfterMs: 0 }
    ],
    koreanFull: '칸트는 오늘날에도 여전히 그 힘이 울려 퍼지는 도덕적 시험을 제안했는데, 그것은 우리가 따르려는 규칙이 보편적 법칙이 될 수 있는지를 자문해야 한다고 요구하는 것이다.',
    passage: "Modern ethics inherits a question that began with eighteenth-century German philosophy. <span class='ch-hl'>Kant proposed a moral test whose force still resonates today, demanding that we ask whether the rule we are about to follow could become a universal law.</span> Lying, for example, fails this test instantly — if everyone lied whenever convenient, the very institution of language would collapse. The brilliance of the principle lies not in its outcomes but in its form: it locates morality in the structure of reasoning itself, rather than in pleasure, custom, or divine command. Even today, debates about justice, consent, and human dignity often return, knowingly or not, to this elegant Kantian frame.",
    passageWordCount: 110,
    structure: `<div><span class="ch-hl">Kant</span> <em style="color: var(--color-text-tertiary);">proposed</em> <span style="border-bottom: 2px solid #0F6E56;">a moral test</span> <span style="color: #993556;">[whose force still resonates today]</span>,</div>
      <div style="padding-left: 12px;"><span style="border-bottom: 2px dashed #993556;">demanding that</span> we ask</div>
      <div style="padding-left: 24px;"><span style="color: #185FA5;">[whether the rule (we are about to follow) could become a universal law]</span>.</div>`,
    contextOneLiner: '칸트는 "그 규칙이 모두에게 적용돼도 괜찮은가?"라는 보편화 테스트로 도덕을 판단하라고 했다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        "the historical decline of Kant's influence in modern philosophy",
        'how a Kantian principle continues to shape contemporary moral reasoning',
        'why religious commands provide stronger moral guidance than philosophy',
        'the practical difficulties of applying universal laws in daily life',
        'the role of pleasure and consequence in eighteenth-century ethics'
      ],
      correct: 1,
      causalChain: '제시(칸트의 정언명령) → 예시(거짓말의 자기모순) → 핵심(<span class="ch-hl">형식에 도덕이 있다</span>) → 현대적 의의(정의·존엄 논의)',
      traps: '① 정반대(영향력 쇠퇴 ≠ 지속) · ③ 무관(종교 비교 없음) · ④ 지엽(어려움 언급 없음) · ⑤ 정반대(쾌락 기반 거부)'
    }
  },

  'set4': {
    grammar: '분사구문',
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
      { en: 'a figure transforming', ko: '하나의 수치가 바꾸어 놓는다' },
      { en: 'how oncologists weigh time itself.', ko: '종양학자들이 시간을 평가하는 방식을.' }
    ],
    segments: [
      { text: 'Patients diagnosed early, compared with those identified at later stages,', pauseAfterMs: 200 },
      { text: 'show recovery rates approaching ninety percent,', pauseAfterMs: 160 },
      { text: 'a figure transforming how oncologists weigh time itself.', pauseAfterMs: 0 }
    ],
    koreanFull: '후기 단계에서 발견된 환자들과 비교했을 때 조기에 진단받은 환자들은 90%에 가까운 회복률을 보이는데, 이 수치는 종양학자들이 시간 자체를 평가하는 방식을 바꾸어 놓고 있다.',
    passage: "Three decades ago, an oncologist's prognosis often depended more on the cancer's aggressiveness than on when it was caught. That picture has fundamentally changed. <span class='ch-hl'>Patients diagnosed early, compared with those identified at later stages, show recovery rates approaching ninety percent, a figure transforming how oncologists weigh time itself.</span> Screening programs for breast, colon, and cervical cancer now save tens of thousands of lives each year, not by inventing new drugs but by buying patients earlier appointments with the same drugs. The lesson cuts across medicine: in many serious diseases, the calendar is the most powerful intervention we have.",
    passageWordCount: 102,
    structure: `<div><span style="border-bottom: 2px dashed #993556;">Patients diagnosed early</span>, <span style="color: #993556;">[compared with those identified at later stages]</span>,</div>
      <div style="padding-left: 12px;"><em style="color: var(--color-text-tertiary);">show</em> <span style="border-bottom: 2px solid #0F6E56;">recovery rates</span> <span style="color: #185FA5;">[approaching ninety percent]</span>,</div>
      <div style="padding-left: 24px;"><span style="background: #FAEEDA; color: #854F0B; padding: 2px 6px; border-radius: 3px;">a figure transforming</span> how oncologists weigh time itself.</div>`,
    contextOneLiner: '조기 진단과 후기 진단의 회복률 격차(90% vs 더 낮음)는 의학에서 "시간"의 의미 자체를 바꾸어 놓았다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'why aggressive cancers are increasingly resistant to modern drugs',
        'how early detection has reshaped cancer treatment outcomes',
        "the high cost barriers preventing widespread cancer screening",
        'recent breakthroughs in chemotherapy for late-stage patients',
        'the ethical debate around mandatory cancer screening programs'
      ],
      correct: 1,
      causalChain: '과거(공격성 중심 예후) → 현재(<span class="ch-hl">조기 진단 = 회복률 90%</span>) → 메커니즘(시간 매수) → 일반화(시간이 가장 강력한 개입)',
      traps: '① 무관(공격성 글의 핵심 아님) · ③ 지엽(비용 언급 없음) · ④ 정반대(후기 약 ≠ 조기 진단) · ⑤ 무관(윤리 논쟁 없음)'
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
      { en: 'forcing manufacturers worldwide', ko: '전 세계 제조업체들로 하여금' },
      { en: 'to rethink what once seemed unshakable.', ko: '한때 흔들리지 않을 것 같던 것을 재고하게 만들면서.' }
    ],
    segments: [
      { text: 'A single factory shutdown occurring in a remote region,', pauseAfterMs: 180 },
      { text: 'can ripple outward across continents,', pauseAfterMs: 150 },
      { text: 'forcing manufacturers worldwide to rethink what once seemed unshakable.', pauseAfterMs: 0 }
    ],
    koreanFull: '외딴 지역에서 발생한 단 한 곳의 공장 가동 중단이 대륙을 가로질러 바깥으로 파급될 수 있고, 이는 전 세계 제조업체들로 하여금 한때 흔들리지 않을 것 같던 것을 재고하게 만든다.',
    passage: "Globalization once promised efficiency above all else. Components flowed from cheapest source to nearest factory, inventories shrank, profits grew. The pandemic exposed the fragility hidden in this design. <span class='ch-hl'>A single factory shutdown occurring in a remote region can ripple outward across continents, forcing manufacturers worldwide to rethink what once seemed unshakable.</span> Carmakers idled assembly lines because of missing chips; pharmacies emptied of basic supplies; ports backed up for weeks. In response, companies have begun building redundancy back into their networks — multiple suppliers, regional hubs, even reshoring — sacrificing some efficiency for resilience.",
    passageWordCount: 95,
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
      { en: 'Were it not for the invention of paper,', ko: '만약 종이의 발명이 없었다면,' },
      { en: 'civilization as we know it', ko: '우리가 아는 문명은' },
      { en: 'might never have emerged,', ko: '결코 나타나지 못했을지도 모른다,' },
      { en: 'for the cheap, durable medium', ko: '왜냐하면 그 저렴하고 내구성 있는 매체가' },
      { en: 'allowed knowledge', ko: '지식이 ~할 수 있게 해주었기 때문에' },
      { en: 'to outlive the minds that produced it.', ko: '그것을 생산한 정신들보다 더 오래 살아남을 수 있게.' }
    ],
    segments: [
      { text: 'Were it not for the invention of paper, civilization as we know it might never have emerged,', pauseAfterMs: 200 },
      { text: 'for the cheap, durable medium allowed knowledge', pauseAfterMs: 140 },
      { text: 'to outlive the minds that produced it.', pauseAfterMs: 0 }
    ],
    koreanFull: '만약 종이의 발명이 없었다면 우리가 아는 문명은 결코 나타나지 못했을지도 모르는데, 왜냐하면 그 저렴하고 내구성 있는 매체가 지식으로 하여금 그것을 생산한 정신들보다 더 오래 살아남을 수 있게 해주었기 때문이다.',
    passage: "Around 105 CE, a Chinese court official named Cai Lun perfected a process for making sheets from mulberry bark and rags. The result looked unremarkable, yet it changed everything. <span class='ch-hl'>Were it not for the invention of paper, civilization as we know it might never have emerged, for the cheap, durable medium allowed knowledge to outlive the minds that produced it.</span> Clay tablets were too heavy; papyrus too fragile; parchment too costly. Paper was light, strong enough to fold, and produced from materials abundant nearly everywhere. Within a millennium, it had spread from East Asia through the Islamic world to Europe, where it would eventually meet the printing press and detonate the modern age.",
    passageWordCount: 118,
    structure: `<div><span style="background: #FCEBEB; color: #791F1F; padding: 2px 6px; border-radius: 3px; font-weight: 500;">Were it not for the invention of paper</span>,</div>
      <div style="padding-left: 12px;"><span style="background: #FAEEDA; color: #854F0B; padding: 2px 6px; border-radius: 3px;">civilization as we know it</span> <em style="color: var(--color-text-tertiary);">might never have emerged</em>,</div>
      <div style="padding-left: 24px;"><span style="color: #993556;">for</span> the cheap, durable medium <em style="color: var(--color-text-tertiary);">allowed</em> <span style="border-bottom: 2px solid #0F6E56;">knowledge</span></div>
      <div style="padding-left: 36px;"><span style="color: #185FA5;">[to outlive the minds that produced it]</span>.</div>`,
    contextOneLiner: '종이가 없었다면 문명이 불가능했을 것이다 — 종이는 지식이 발명자보다 오래 살아남게 해준 매체였기 때문이다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'the technical superiority of clay tablets over early paper',
        'how the invention of paper made cumulative knowledge possible',
        'why the printing press alone created the modern age',
        'the decline of papyrus as a writing medium in ancient Egypt',
        'the political role of Cai Lun in the Han dynasty court'
      ],
      correct: 1,
      causalChain: '발명(채륜의 종이) → 가정법(<span class="ch-hl">없었다면 문명 없음</span>) → 메커니즘(지식 ≫ 발명자 수명) → 확산(천 년에 걸친 전파)',
      traps: '① 정반대(점토판 열등 ≠ 우월) · ③ 과장(인쇄기만 ≠ 종이 + 인쇄기) · ④ 지엽(파피루스 쇠퇴 부차적) · ⑤ 무관(채륜 정치 역할 아님)'
    }
  },

  'set7': {
    grammar: '도치 구문 (부정어 문두)',
    grammarKey: 'inversion',
    topic: '문학',
    passageTitle: '침묵이 시작되는 순간',
    source: '2022학년도 수능 40번 응용',
    background: '문학에서 <strong>침묵</strong>은 단순한 부재가 아니에요. 어떤 작가들은 말로 표현할 수 없는 감정을 침묵으로 드러내죠. 헤밍웨이의 <strong>"빙산 이론"</strong> — 글로 쓰는 건 빙산의 8분의 1이고, 나머지는 행간에 잠겨 있다는 것 — 은 이 침묵의 미학을 가장 잘 설명하는 비유예요.',
    chunks: [
      { en: 'Not until the final page', ko: '마지막 페이지가 되어서야 비로소' },
      { en: 'does the reader realize', ko: '독자는 깨닫게 된다' },
      { en: 'that what was left unsaid', ko: '말해지지 않은 것이' },
      { en: 'mattered far more', ko: '훨씬 더 중요했음을' },
      { en: 'than anything', ko: '그 어떤 것보다도' },
      { en: 'the characters had spoken aloud.', ko: '등장인물들이 소리 내어 말했던.' }
    ],
    segments: [
      { text: 'Not until the final page does the reader realize', pauseAfterMs: 200 },
      { text: 'that what was left unsaid mattered far more', pauseAfterMs: 160 },
      { text: 'than anything the characters had spoken aloud.', pauseAfterMs: 0 }
    ],
    koreanFull: '마지막 페이지가 되어서야 비로소 독자는 말해지지 않은 것이 등장인물들이 소리 내어 말했던 그 어떤 것보다도 훨씬 더 중요했음을 깨닫게 된다.',
    passage: "Hemingway called it the iceberg theory: a story shows only one-eighth of itself, leaving seven-eighths submerged beneath the surface. The greatest writers trust their readers to feel that hidden weight. <span class='ch-hl'>Not until the final page does the reader realize that what was left unsaid mattered far more than anything the characters had spoken aloud.</span> A glance held a moment too long, a sentence trailing into ellipsis, a question never asked — these silences carry meanings too dense for direct speech. To write this way is to honor the reader as a co-creator, granting them the dignity of completing the meaning themselves.",
    passageWordCount: 105,
    structure: `<div><span style="background: #FCEBEB; color: #791F1F; padding: 2px 6px; border-radius: 3px; font-weight: 500;">Not until the final page</span> <em style="color: var(--color-text-tertiary);">does</em> <span style="background: #FAEEDA; color: #854F0B; padding: 2px 6px; border-radius: 3px;">the reader</span> <em style="color: var(--color-text-tertiary);">realize</em></div>
      <div style="padding-left: 12px;"><span style="color: #185FA5;">[that <span style="background: #EFF6FC; padding: 0 4px;">what was left unsaid</span> mattered far more</span></div>
      <div style="padding-left: 24px;"><span style="color: #185FA5;">than anything <span style="color: #993556;">(that) the characters had spoken aloud]</span>.</span></div>`,
    contextOneLiner: '말해지지 않은 것이 말해진 것보다 더 중요하다 — 위대한 문학은 독자를 의미의 공동 창작자로 대우한다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        "Hemingway's preference for plain dialogue over literary description",
        'how skilled writers use silence and omission as primary tools of meaning',
        'why modern readers struggle with classical literature',
        'the historical decline of detailed exposition in twentieth-century novels',
        'translation challenges when rendering implicit meaning across languages'
      ],
      correct: 1,
      causalChain: '비유(빙산 이론 1/8 vs 7/8) → 신뢰(<span class="ch-hl">독자가 침묵을 느낀다</span>) → 예시(시선·말줄임표·미완 질문) → 가치(독자 = 공동 창작자)',
      traps: '① 부분 단어(헤밍웨이 단순화 ≠ 침묵의 깊이) · ③ 무관(현대 독자 어려움 없음) · ④ 지엽(20세기 쇠퇴 언급 없음) · ⑤ 무관(번역 얘기 없음)'
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
      { en: 'whose decisions', ko: '그것의 결정들이' },
      { en: 'shape ours in return.', ko: '거꾸로 우리의 결정을 형성한다.' }
    ],
    segments: [
      { text: 'It has become increasingly clear', pauseAfterMs: 160 },
      { text: 'that the systems we build are no longer mere tools but partners', pauseAfterMs: 180 },
      { text: 'whose decisions shape ours in return.', pauseAfterMs: 0 }
    ],
    koreanFull: '우리가 만드는 시스템들이 더 이상 단순한 도구가 아니라 그것의 결정이 거꾸로 우리의 결정을 형성하는 파트너라는 점이 점점 더 분명해졌다.',
    passage: "For most of computing history, machines did exactly what we told them, nothing more. The arrival of large language models has shifted that ground beneath our feet. <span class='ch-hl'>It has become increasingly clear that the systems we build are no longer mere tools but partners whose decisions shape ours in return.</span> A doctor relies on diagnostic suggestions from an algorithm; a writer accepts or resists a model's phrasing; a teenager spends hours conversing with a chatbot that gradually nudges their worldview. The relationship is bidirectional, and that bidirectionality demands a new ethics — one less concerned with what AI can do for us, and more concerned with what we are becoming together.",
    passageWordCount: 117,
    structure: `<div><span style="background: #FCEBEB; color: #791F1F; padding: 2px 6px; border-radius: 3px; font-weight: 500;">It</span> <em style="color: var(--color-text-tertiary);">has become</em> increasingly clear</div>
      <div style="padding-left: 12px;"><span style="color: #185FA5;">[that the systems <span style="color: #993556;">(we build)</span> are no longer mere tools but partners</span></div>
      <div style="padding-left: 24px;"><span style="color: #185FA5;"><span style="border-bottom: 2px dashed #993556;">whose decisions</span> shape ours in return]</span>.</div>
      <div style="padding-left: 12px; font-size: 12px; color: var(--color-text-tertiary); margin-top: 4px;">↑ It은 가주어, [that ~] 절 전체가 진주어</div>`,
    contextOneLiner: 'AI는 더 이상 도구가 아니라 우리에게 영향을 주는 파트너이며, 따라서 새로운 윤리가 필요하다.',
    quiz: {
      question: '다음 글의 주제로 가장 적절한 것은?',
      choices: [
        'how artificial intelligence has finally surpassed human intelligence in all tasks',
        'why our changing relationship with AI requires a new framework of ethics',
        'the technical limitations preventing language models from making decisions',
        'why doctors should never rely on algorithms for medical diagnosis',
        'historical attempts to regulate computer programs in the twentieth century'
      ],
      correct: 1,
      causalChain: '과거(기계 = 명령 따르는 도구) → 변화(<span class="ch-hl">LLM이 지반 흔듦</span>) → 예시(의사·작가·청소년) → 결론(쌍방향 = 새 윤리 필요)',
      traps: '① 과장(능가 ≠ 동반자) · ③ 정반대(글은 결정 능력 인정) · ④ 지엽(의사 의존 비판 아님) · ⑤ 무관(20세기 규제 없음)'
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
  { key: 'passive', num: 8, name: '수동태', ex: 'minds have been shaped by', meta: '8 청크' }
];
