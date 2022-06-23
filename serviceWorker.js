const CACHE_NAME = "livestreamideas-v1";
const assets = [
  "./index.html",
  "./css/normalize.min.css",
  "./css/bootstrap.min.css",
  "./css/style.css",
  "./js/pluglins/lodash.min.js",
  "./js/pluglins/DrawSVGPlugin3.min.js",
  "./js/pluglins/gsap-latest-beta.min.js",
  "./js/app.js",
  "./favicons/favicon-16x16.png",
  "./public/img/multiple-social-media_144.png",
  "./public/img/multiple-social-media.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(assets).then(() => self.skipWaiting());
      })
      .catch((err) => console.log("ERROR AL REGISTAR CACHE", err))
  );
});

self.addEventListener("active", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== CACHE_NAME;
          })
          .map((cacheName) => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
