// O Samsung Internet desenha o ícone "maskable" dentro de uma moldura branca na tela de
// abertura do app instalado (defeito do navegador, sem correção oficial). Para ele vai um
// manifesto só com os ícones comuns; Chrome e os demais continuam com o ícone adaptável.
if (/SamsungBrowser/i.test(navigator.userAgent)) {
  var link = document.getElementById('vt-manifest');
  if (link) link.href = '/app-manifest-samsung.json';
}
