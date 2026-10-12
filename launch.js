// Tela de abertura: fica por cima do app enquanto o script principal carrega.
// O app chama window.__hideLaunch() quando a primeira tela está pronta.
(function () {
  var MIN_VISIBLE_MS = 1100; // tempo para a animação de entrada terminar
  var GIVE_UP_MS = 15000; // nunca esconde uma tela de erro para sempre
  var startedAt = Date.now();
  var done = false;

  function hide() {
    if (done) return;
    done = true;
    var el = document.getElementById('vt-launch');
    if (!el) return;
    setTimeout(function () {
      el.classList.add('vt-out');
      setTimeout(function () {
        el.remove();
      }, 400);
    }, Math.max(0, MIN_VISIBLE_MS - (Date.now() - startedAt)));
  }

  window.__hideLaunch = hide;
  setTimeout(hide, GIVE_UP_MS);
})();
