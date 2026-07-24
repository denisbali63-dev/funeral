// Simple service worker for basic static asset caching
const CACHE_NAME = 'funeral-cache-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './main.28b5fb0d.css',
  './main.886c6bae.js',
  './logo.jpeg',
  './manifest.json',
  './404.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  // For navigation requests, try network first then fallback to cache
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // For other requests, respond with cache first, then network
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      // Cache successful GET requests for future
      if (req.method === 'GET' && res && res.status === 200) {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
      }
      return res;
    }))
  );
});
