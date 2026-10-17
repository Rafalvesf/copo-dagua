{{flutter_js}}
{{flutter_build_config}}

// Sem service worker: cada visita carrega logo a versão mais recente da
// app (antes, a versão nova só aparecia depois de reabrir — pedido do
// utilizador, 2026-10-17: "não aparece o novo início"). Remove também
// service workers antigos que já estejam instalados.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (regs) {
    regs.forEach(function (r) { r.unregister(); });
  });
}

_flutter.loader.load();
