// KOREA EASY — basic offline cache
// Caches key pages so travelers can reopen them without signal (e.g. right after landing).
const CACHE_NAME = 'korea-easy-v9';
const CORE_ASSETS = [
  'index.html',
  'SEOUL-EASY.html',
  'incheon-airport-to-seoul.html',
  'gimpo-airport-guide.html',
  'tmoney-guide-foreigners.html',
  'wowpass-guide.html',
  'emergency-info.html',
  'keta-visa-guide.html',
  'foreigner-savings.html',
  'toilet-sos.html',
  'pharmacy-sos.html',
  'cable-car-guide.html',
  'search.html',
  'account.html',
  'korea-easy-supabase.js',
  'assets/korea-easy-logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// Network-first for HTML (so content stays current when online),
// falling back to cache when offline. Cache-first for other assets.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const isHTML = req.headers.get('accept')?.includes('text/html');

  if (isHTML) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((res) => res || caches.match('index.html')))
    );
  } else {
    event.respondWith(
      caches.match(req).then((res) => res || fetch(req))
    );
  }
});
