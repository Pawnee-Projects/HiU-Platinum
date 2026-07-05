// ————————————————————————————————————————————————————————————————
// HADEA FIELD GUIDE — service worker (offline support, Roadmap item 2)
// Cache-first over the app's own same-origin files. Never touches user
// data or any external host (honors Hard rule 1). CACHE is bumped every
// build so a new deploy purges the old cache and re-fetches fresh files.
// All paths are RELATIVE so this works under the GitHub Pages project
// subpath (/HiU-Platinum/) and at a domain root alike.
// ————————————————————————————————————————————————————————————————
const CACHE = "hadea-9.4";
const CORE = ["./", "index.html", "ledger-data.js", "manifest.webmanifest"];   // must cache for the app to run offline (+ manifest for installability)
const EXTRA = ["apple-touch-icon.png", "icon-192.png", "icon-512.png", "icon-maskable-512.png"];  // best-effort; absence must not fail install

self.addEventListener("install", e => {
  // Precache with {cache:"reload"} so each build pulls fresh bytes straight from the network,
  // never the browser's HTTP cache. GitHub Pages serves app files with Cache-Control: max-age=600,
  // so a default-mode addAll during a redeploy can re-fetch the PREVIOUS build's shell from the
  // 10-min HTTP cache and store it under the NEW CACHE name — the cache "busts" but the contents
  // don't, and reloads can't fix it. cache:"reload" bypasses that. (Still bump CACHE every build.)
  const fresh = u => new Request(u, { cache: "reload" });
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(CORE.map(fresh)).then(() => Promise.all(
        EXTRA.map(u => c.add(fresh(u)).catch(() => {}))
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;                       // never intercept non-GET
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;        // same-origin only; ignore anything external
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      // runtime-cache successful responses so first-seen assets survive offline
      if (res && res.ok && res.type === "basic") {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(req, clone));
      }
      return res;
    }).catch(() =>
      // offline and uncached: fall back to the app shell for navigations
      req.mode === "navigate" ? caches.match("index.html") : undefined
    ))
  );
});
