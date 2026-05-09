# 수능 구문독해 — 청크 학습 PWA

수능·모의고사 지문을 청크 단위로 직독직해하고 구조를 분석하는 학습 앱입니다.
PWA(Progressive Web App)로 만들어져서 학생들이 모바일 홈 화면에 설치해 앱처럼 쓸 수 있고, 오프라인에서도 학습이 가능해요.

## 빠른 시작 (로컬 테스트)

### 1) 로컬 서버 실행

PWA는 file:// 로 열면 Service Worker가 작동하지 않아요. 반드시 HTTP 서버로 띄워야 합니다.

```bash
# 폴더로 이동
cd suneung-app

# Python 3 (가장 간단)
python3 -m http.server 8000

# 또는 Node.js
npx serve .

# 또는 PHP
php -S localhost:8000
```

브라우저에서 `http://localhost:8000` 으로 열어보세요.

### 2) 모바일에서 테스트

같은 Wi-Fi 네트워크에서 컴퓨터 IP로 접속하면 됩니다.

```bash
# 컴퓨터 IP 확인 (예: 192.168.1.100)
# 모바일 브라우저에서 http://192.168.1.100:8000 접속
```

**Chrome (Android)**: 자동으로 "홈 화면에 추가" 배너 표시
**Safari (iOS)**: 공유 → 홈 화면에 추가

## 배포 (학생들에게 공유)

PWA는 정적 파일이라 어디든 호스팅 가능합니다. **HTTPS 필수**예요.

### 추천 호스팅 (모두 무료)

- **Netlify Drop**: https://app.netlify.com/drop — 폴더를 드래그&드롭 한 번이면 배포 끝
- **Vercel**: `vercel deploy` 명령 한 번
- **GitHub Pages**: GitHub 저장소 push 후 Pages 활성화
- **Cloudflare Pages**: GitHub 연동 후 자동 배포

배포되면 학생들에게 URL을 공유하면 되고, 학생들이 그 URL을 브라우저에서 열고 "홈 화면에 추가"를 누르면 폰에 앱처럼 설치됩니다.

## 새 세트 추가하는 법

`data.js` 파일 하나만 수정하면 모든 학생 폰에 자동 반영됩니다.

### 1) data.js 열기

`window.SETS` 객체 끝에 새 세트를 추가하세요:

```javascript
'set9': {
  grammar: '도치 구문 (only 부사구 문두)',     // 메인 타이틀
  grammarKey: 'inversion',                  // 어느 챕터에 속하는지
  topic: '환경',                            // [소재]
  passageTitle: '기후 위기의 가속도',          // 글 제목
  source: '2024학년도 9월 모의평가 응용',
  background: '...배경 지식 한 단락...',
  chunks: [
    { en: 'Only when ...', ko: '...할 때에야 비로소' },
    // ... 6~7개 청크
  ],
  segments: [
    { text: '...', pauseAfterMs: 180 },     // S와 V 사이 호흡
    // ... 2~3개 세그먼트
  ],
  koreanFull: '자연스러운 한국어 전체 해석',
  passage: "<영어 지문 86~120단어, 학습 문장은 <span class='ch-hl'>...</span>로 감싸기>",
  passageWordCount: 95,
  structure: `<HTML로 작성된 구문 분석>`,
  contextOneLiner: '한 줄로 압축한 의역',
  quiz: {
    question: '다음 글의 주제로 가장 적절한 것은?',
    choices: [ '...', '...', '...', '...', '...' ],   // 5개
    correct: 1,                              // 0~4 정답 인덱스
    causalChain: '글의 인과 사슬 4단계',
    traps: '함정 선지 분석'
  }
}
```

### 2) sw.js의 캐시 버전 올리기

`sw.js` 첫 줄을 수정해서 학생 폰에 업데이트가 자동 푸시되도록 합니다.

```javascript
const CACHE_VERSION = 'v2';  // v1 → v2로 변경
```

### 3) 다시 배포

같은 호스팅에 폴더를 다시 올리면 끝. 학생들이 앱을 다음에 열면 "새 버전이 준비됐어요" 배너가 뜨고, 누르면 즉시 업데이트됩니다.

## grammarKey 매칭 표

| 문법 챕터 | grammarKey |
|---|---|
| 분사구문 | `participle` |
| 관계사 수식 | `relative` |
| 동격 that | `apposition` |
| 비교급 / 최상급 | `comparative` |
| 가정법 | `subjunctive` |
| 도치 구문 | `inversion` |
| 가주어 / 가목적어 it | `dummy` |
| 수동태 | `passive` |

같은 grammarKey를 가진 세트들은 자동으로 한 챕터로 묶여서 학생이 챕터 안에서 누적된 세트를 볼 수 있어요.

## 파일 구조

```
suneung-app/
├── index.html       # 메인 HTML (앱 셸 + Service Worker 등록)
├── styles.css       # 스타일
├── app.js           # 앱 로직 (상태, 네비게이션, 렌더링)
├── data.js          # 세트 콘텐츠 ⭐ 새 세트는 여기만 수정
├── manifest.json    # PWA 매니페스트
├── sw.js            # Service Worker (오프라인 캐싱)
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   └── icon-maskable-512.png
└── README.md
```

## 현재 포함된 세트 (8개)

1. **관계사 수식** [진화생물학] 집단협력의 진화적 기원
2. **비교급 (less A than B)** [언어학] 언어가 사고를 만드는가
3. **관계사 수식** [철학] 칸트와 정언명령의 유산
4. **분사구문** [의학] 조기 진단의 결정적 효과
5. **분사구문** [경제] 글로벌 공급망의 파급 효과
6. **가정법 (Were it not for)** [역사] 만약 종이가 발명되지 않았다면
7. **도치 구문 (Not until)** [문학] 침묵이 시작되는 순간
8. **가주어 it ~ that** [AI] 도구를 넘어선 AI

## 주요 기능

- **5단계 학습 사이클**: 미리보기 → 청크 학습 → 풀 센텐스 → 적용 문제
- **청크 학습 5탭**: Listen(자동재생) / 해석 / 구문 / 맥락 / Speak
- **음성 합성**: Chrome/Safari의 Web Speech API로 영어 발음 재생
- **풀 센텐스 플레이어**: S와 V 사이 미세 호흡, 한국어 전체 해석 토글
- **5지선다 적용 문제**: 4단 해설(인과사슬·정답 근거·함정 분석·SKILL)
- **두 가지 학습 진입 경로**: 지문별 학습 + 문법별 학습 (이중 인덱싱)
- **진행률 자동 저장**: localStorage에 학습 상태 보존
- **오프라인 학습 가능**: Service Worker로 모든 콘텐츠 캐싱
- **자동 업데이트**: 강사가 새 세트 푸시하면 학생 폰에 알림 → 한 번 탭으로 업데이트

## 브라우저 지원

- **권장**: Chrome (Android/데스크톱), Safari (iOS 16.4+/macOS), Edge
- **음성 인식 (Speak 모드)**: Chrome 권장
- **음성 합성 (Listen 모드)**: 모든 모던 브라우저

## 라이선스

내부 사용 / 학습 콘텐츠 제작용
