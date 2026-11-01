// Service worker só para notificações (Web Push) — 2026-10-21.
// Não guarda nada em cache (a app vem sempre da rede, ver index.html).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener('push', function (event) {
  var data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) { data = { title: 'À Nossa!', body: event.data && event.data.text() }; }
  var title = data.title || 'À Nossa!';
  event.waitUntil(self.registration.showNotification(title, {
    body: data.body || '',
    icon: 'icons/Icon-192.png',
    badge: 'icons/Icon-maskable-192.png',
    tag: data.tag || undefined,
    renotify: !!data.tag,
    data: { url: data.url || '/' }
  }));
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var route = (event.notification.data && event.notification.data.url) || '/';
  var target = self.registration.scope + '#' + route;
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if (c.url.indexOf(self.registration.scope) === 0 && 'focus' in c) {
        c.focus();
        return c.navigate ? c.navigate(target) : c;
      }
    }
    return self.clients.openWindow(target);
  }));
});
