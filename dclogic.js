// Base equivalente a la clase DCLogic que provee el runtime original,
// sin depender de React: implementa su propio state / setState /
// ciclo de render contra el motor de plantillas (engine.js).
class DCLogic {
  constructor() {
    this.state = {};
    this._container = null;
    this._vnode = null;
    this._pendingCbs = [];
    this._scheduled = false;
  }

  setState(update, cb) {
    var patch = typeof update === 'function' ? update(this.state) : update;
    this.state = Object.assign({}, this.state, patch);
    if (cb) this._pendingCbs.push(cb);
    if (!this._scheduled) {
      this._scheduled = true;
      var self = this;
      Promise.resolve().then(function () { self._flush(); });
    }
  }

  _flush() {
    this._scheduled = false;
    this._doRender();
    var cbs = this._pendingCbs;
    this._pendingCbs = [];
    cbs.forEach(function (cb) { cb(); });
  }

  _doRender() {
    if (!this._container) return;
    var isFirst = !this._vnode;
    var vals = this.renderVals();
    var newVnode = window.DCEngine.renderTemplate(vals);
    if (isFirst) {
      this._vnode = window.DCEngine.mount(this._container, newVnode);
    } else {
      this._vnode = window.DCEngine.update(this._container, this._vnode, newVnode);
      if (this.componentDidUpdate) this.componentDidUpdate();
    }
  }

  mount(container) {
    this._container = container;
    this._doRender();
    if (this.componentDidMount) this.componentDidMount();
  }
}
