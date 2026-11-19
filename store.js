// Capa de datos del MVP: todo se guarda en localStorage de este navegador.
// La app solo usa load() / save() / clear(); cuando se conecte Supabase
// (cuentas, posts, closet) basta con reemplazar este archivo por un
// adaptador con la misma interfaz, sin tocar app-logic.js.
(function () {
  'use strict';
  var KEY = 'khaos.v1';
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); return true; }
    catch (e) { return false; } // sin espacio o almacenamiento bloqueado
  }
  function clear() {
    try { localStorage.removeItem(KEY); } catch (e) {}
  }
  window.KhaosStore = { load: load, save: save, clear: clear };
})();
