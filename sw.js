// 캐시 버전 — 콘텐츠 업데이트 시 이 숫자만 올려주면 학생 폰에 자동 반영
const CACHE_VERSION = 'v11';
const CACHE_NAME = `suneung-chunk-${CACHE_VERSION}`;

const CORE_FILES = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// 설치: 핵심 파일 미리 캐시
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_FILES).catch((err) => {
        // 일부 파일이 없어도 설치는 진행
        console.warn('Some files failed to cache:', err);
      });
    })
  );
  self.skipWaiting();
});

// 활성화: 이전 버전 캐시 정리
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// fetch: 네트워크 우선, 실패 시 캐시 (학습 콘텐츠는 항상 최신, 오프라인 폴백 가능)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  // 외부 도메인은 그냥 통과
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 성공 응답은 캐시 업데이트
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // 네트워크 실패 시 캐시에서 반환
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // index.html 폴백 (SPA 라우팅 지원)
          return caches.match('./index.html');
        });
      })
  );
});
