// Depois de uma publicação, o navegador pode abrir a página do cache (até 10 minutos)
// apontando para um script que já não existe: a tela ficaria vazia. Se o script do app
// falhar, recarrega uma vez para buscar a página atual.
window.addEventListener(
  'error',
  function (event) {
    var el = event.target;
    if (!el || el.tagName !== 'SCRIPT' || el.src.indexOf('/_expo/') === -1) return;
    try {
      if (sessionStorage.getItem('vt-reloaded') === el.src) return;
      sessionStorage.setItem('vt-reloaded', el.src);
    } catch (e) {
      return;
    }
    location.reload();
  },
  true
);
