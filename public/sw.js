'use strict';

const CACHE_NAME = 'english-fun-quest-v1';

// Install: Skip waiting to immediately activate the new service worker.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate: Clean up old caches and claim all clients.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Handle network requests.
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Do not cache non-GET requests or Firestore streaming data.
  if (request.method !== 'GET' || request.url.includes('firestore.googleapis.com')) {
    event.respondWith(fetch(request));
    return;
  }
  
  // For HTML pages (navigations), use a "Network Falling back to Cache" strategy.
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // If successful, cache the new page for offline use.
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return networkResponse;
        })
        .catch(() => {
          // If network fails, try to serve the page from the cache.
          return caches.match(request).then((cachedResponse) => {
            // Fallback to the homepage if the specific page isn't cached.
            return cachedResponse || caches.match('/'); 
          });
        })
    );
    return;
  }

  // For static assets (CSS, JS, images), use a "Cache First, then Network" strategy.
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // If the asset is in the cache, return it.
      if (cachedResponse) {
        return cachedResponse;
      }
      // Otherwise, fetch from the network, cache it, and then return it.
      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
        }
        return networkResponse;
      });
    })
  );
});
