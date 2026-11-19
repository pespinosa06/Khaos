// Arranque: carga el markup original (template.html) en el motor y
// monta <Component/> (definido en app-logic.js) en #root. Sin React:
// engine.js ya expuso un shim de React (createRef/createElement) que
// app-logic.js consume igual que antes.
//
// El markup viene embebido en template-data.js (window.__KHAOS_TEMPLATE__)
// para que la app funcione tambien abriendo index.html con doble clic
// (file://), sin depender de un servidor local para el fetch. Si por
// algun motivo ese script no cargo, se intenta el fetch como respaldo
// (funciona si se sirve con un servidor local o en un hosting real).
(function () {
  'use strict';
  function start(html) {
    window.DCEngine.initEngine(html);
    var comp = new Component();
    comp.mount(document.getElementById('root'));
  }
  function fail(err) {
    document.getElementById('root').innerHTML =
      '<div style="padding:40px;font-family:sans-serif;color:#b00">' +
      'No se pudo cargar el markup de la app: ' + String(err) + '</div>';
    console.error(err);
  }
  if (typeof window.__KHAOS_TEMPLATE__ === 'string') {
    start(window.__KHAOS_TEMPLATE__);
  } else {
    fetch('./template.html').then(function (r) { return r.text(); }).then(start).catch(fail);
  }
})();
