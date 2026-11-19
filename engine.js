// Mini motor de plantillas compatible con la sintaxis usada por el
// prototipo original (Design Canvas): interpolacion {{ }}, <sc-if>,
// <sc-for>, atributos sc-camel-on-*, style-hover / style-active y ref.
// No reescribe el markup original: lo parsea e interpreta tal cual.
//
// Version SIN React: compila el template a un arbol liviano de
// "vnodes" (objetos planos) y lo monta/actualiza contra el DOM real
// con un diff posicional simple (reutiliza nodos existentes cuando el
// tag no cambia, asi los <input>/<textarea> no pierden el foco en
// cada re-render).
(function (global) {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';

  function getPath(scope, path) {
    path = path.trim();
    var parts = path.split('.');
    var cur = scope;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  var WHOLE_RE = /^\{\{\s*([^}]+?)\s*\}\}$/;
  var PART_RE = /\{\{\s*([^}]+?)\s*\}\}/g;

  // Evalua {{ expr }} contra scope. Si el string ES exactamente una
  // sola interpolacion, devuelve el valor crudo (puede ser funcion,
  // array, booleano, objeto, vnode construido con h()...). Si hay
  // texto mezclado, concatena como string.
  function interp(str, scope) {
    if (typeof str !== 'string') return str;
    // Las interpolaciones de texto suelen quedar en su propia linea del
    // markup (con indentacion/saltos de linea alrededor); eso no debe
    // impedir detectar que es una interpolacion "completa" (y por lo
    // tanto devolver el valor crudo, no forzarlo a string).
    var whole = str.trim().match(WHOLE_RE);
    if (whole) return getPath(scope, whole[1]);
    if (str.indexOf('{{') === -1) return str;
    return str.replace(PART_RE, function (m, expr) {
      var val = getPath(scope, expr);
      return val == null ? '' : String(val);
    });
  }

  function styleStrToObj(str) {
    var out = {};
    if (typeof str !== 'string') return out;
    str.split(';').forEach(function (decl) {
      var i = decl.indexOf(':');
      if (i < 0) return;
      var prop = decl.slice(0, i).trim();
      var val = decl.slice(i + 1).trim();
      if (!prop || !val) return;
      var camel = prop.indexOf('--') === 0 ? prop : prop.replace(/-([a-z0-9])/g, function (_, c) { return c.toUpperCase(); });
      out[camel] = val;
    });
    return out;
  }

  function camelFromKebab(kebab) {
    return kebab.replace(/-([a-z0-9])/g, function (_, c) { return c.toUpperCase(); });
  }

  // ---------------------------------------------------------------
  // Construccion de vnodes
  // ---------------------------------------------------------------

  function vtype(v) {
    if (v === null || v === undefined || v === true || v === false) return '#comment';
    if (typeof v === 'string' || typeof v === 'number') return '#text';
    return v.tag;
  }

  function sameType(a, b) {
    return vtype(a) === vtype(b);
  }

  // h(tag, props, ...children) - usado internamente y expuesto como
  // React.createElement para el codigo original que ya construye un
  // arbol a mano (p.ej. bgOrbs). props.style puede venir como string
  // CSS o como objeto camelCase; ambos formatos se soportan.
  function h(tag, props) {
    props = props || {};
    if (typeof props.style === 'string') props = Object.assign({}, props, { style: styleStrToObj(props.style) });
    var children = [];
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (Array.isArray(c)) children = children.concat(c);
      else children.push(c);
    }
    return { tag: tag, props: props, children: children, hoverStyle: null, activeStyle: null, svg: tag === 'svg' };
  }

  function compileChildren(node, scope, svgCtx) {
    var out = [];
    var child = node.firstChild;
    while (child) {
      var compiled = compileNode(child, scope, svgCtx);
      if (Array.isArray(compiled)) {
        compiled.forEach(function (c) { if (c !== null && c !== undefined && c !== false) out.push(c); });
      } else if (compiled !== null && compiled !== undefined && compiled !== false) {
        out.push(compiled);
      }
      child = child.nextSibling;
    }
    return out;
  }

  function compileNode(node, scope, svgCtx) {
    if (node.nodeType === 3) { // texto
      var text = node.nodeValue;
      if (!text || !text.trim()) return text && text.indexOf('{{') === -1 ? text : null;
      return interp(text, scope);
    }
    if (node.nodeType !== 1) return null; // comentarios, etc.

    var tag = node.tagName.toLowerCase();

    if (tag === 'sc-if') {
      var raw = node.getAttribute('value');
      var cond = interp(raw, scope);
      if (!cond) return null;
      return compileChildren(node, scope, svgCtx);
    }

    if (tag === 'sc-for') {
      var listRaw = node.getAttribute('list');
      var list = interp(listRaw, scope) || [];
      var asName = node.getAttribute('as') || 'item';
      var out = [];
      for (var idx = 0; idx < list.length; idx++) {
        var childScope = Object.assign({}, scope);
        childScope[asName] = list[idx];
        childScope[asName + 'Index'] = idx;
        out = out.concat(compileChildren(node, childScope, svgCtx));
      }
      return out;
    }

    var isSvgNow = svgCtx || tag === 'svg';

    // elemento normal
    var attrs = node.attributes;
    var elProps = {};
    var hoverStyle = null, activeStyle = null;
    for (var a = 0; a < attrs.length; a++) {
      var name = attrs[a].name;
      var val = attrs[a].value;
      if (name === 'style') {
        var styleStr = interp(val, scope);
        elProps.style = styleStrToObj(typeof styleStr === 'string' ? styleStr : '');
        continue;
      }
      if (name === 'style-hover') {
        var hv = interp(val, scope);
        hoverStyle = styleStrToObj(typeof hv === 'string' ? hv : '');
        continue;
      }
      if (name === 'style-active') {
        var av = interp(val, scope);
        activeStyle = styleStrToObj(typeof av === 'string' ? av : '');
        continue;
      }
      if (name === 'ref') {
        elProps.ref = interp(val, scope);
        continue;
      }
      if (name === 'class') {
        elProps.className = interp(val, scope);
        continue;
      }
      if (name.indexOf('hint-placeholder') === 0 || name.indexOf('data-dc') === 0) {
        continue; // solo son pistas del editor, no hacen falta en runtime
      }
      if (name.indexOf('sc-camel-') === 0) {
        var rest = name.slice('sc-camel-'.length);
        var propName = camelFromKebab(rest);
        elProps[propName] = interp(val, scope);
        continue;
      }
      elProps[name] = interp(val, scope);
    }

    var children = compileChildren(node, scope, isSvgNow);

    return { tag: tag, props: elProps, children: children, hoverStyle: hoverStyle, activeStyle: activeStyle, svg: isSvgNow };
  }

  var templateRoot = null;

  function initEngine(templateHtml) {
    var doc = new DOMParser().parseFromString('<div id="dc-root-wrap">' + templateHtml + '</div>', 'text/html');
    var wrap = doc.getElementById('dc-root-wrap');
    // el root real es el primer elemento hijo (un unico <div> envolvente)
    templateRoot = wrap.firstElementChild;
  }

  function renderTemplate(scope) {
    if (!templateRoot) throw new Error('DC engine: initEngine() no fue llamado');
    return compileNode(templateRoot, scope, false);
  }

  // ---------------------------------------------------------------
  // Montaje / actualizacion contra el DOM real (sin virtual-DOM de
  // React): diff posicional simple, reutiliza nodos cuando el tipo
  // coincide para no perder foco/estado nativo (inputs, scroll, etc.)
  // ---------------------------------------------------------------

  function isEventProp(name, val) {
    return typeof val === 'function' && name.length > 2 && name.charCodeAt(0) === 111 /* o */ && name.charCodeAt(1) === 110 /* n */
      && name[2] === name[2].toUpperCase();
  }
  function nativeEventName(name) { return name.slice(2).toLowerCase(); }

  function applyProps(el, oldProps, newProps) {
    oldProps = oldProps || {};
    newProps = newProps || {};
    var isSvg = el.namespaceURI === SVG_NS;

    // props que ya no estan
    Object.keys(oldProps).forEach(function (name) {
      if (name in newProps) return;
      if (name === 'style') return;
      var oldVal = oldProps[name];
      if (name === 'ref') return;
      if (isEventProp(name, oldVal)) {
        el.__scHandlers = el.__scHandlers || {};
        var ev = nativeEventName(name);
        if (el.__scHandlers[name]) el.removeEventListener(ev, el.__scHandlers[name]);
        delete el.__scHandlers[name];
        return;
      }
      if (name === 'className') { if (isSvg) el.removeAttribute('class'); else el.className = ''; return; }
      if (name === 'value') { el.value = ''; return; }
      if (name === 'checked') { el.checked = false; return; }
      if (name === 'disabled') { el.disabled = false; return; }
      el.removeAttribute(name);
    });

    // estilos
    var oldStyle = oldProps.style || {};
    var newStyle = newProps.style || {};
    Object.keys(oldStyle).forEach(function (k) { if (!(k in newStyle)) el.style[k] = ''; });
    Object.keys(newStyle).forEach(function (k) { if (oldStyle[k] !== newStyle[k]) el.style[k] = newStyle[k]; });

    // props nuevas / actualizadas
    Object.keys(newProps).forEach(function (name) {
      if (name === 'style') return;
      var val = newProps[name];
      if (name === 'ref') {
        if (val) { if (typeof val === 'function') val(el); else val.current = el; }
        return;
      }
      if (isEventProp(name, val)) {
        el.__scHandlers = el.__scHandlers || {};
        var ev = nativeEventName(name);
        if (el.__scHandlers[name] !== val) {
          if (el.__scHandlers[name]) el.removeEventListener(ev, el.__scHandlers[name]);
          el.addEventListener(ev, val);
          el.__scHandlers[name] = val;
        }
        return;
      }
      if (name === 'className') { if (isSvg) el.setAttribute('class', val == null ? '' : val); else el.className = val == null ? '' : val; return; }
      if (name === 'value') { if (el.value !== val) el.value = val == null ? '' : val; return; }
      if (name === 'checked') { el.checked = !!val; return; }
      if (name === 'disabled') { el.disabled = !!val; return; }
      if (val === null || val === undefined || val === false) { el.removeAttribute(name); return; }
      el.setAttribute(name, val === true ? '' : val);
    });
  }

  // Simula style-hover / style-active via eventos reales de mouse /
  // pointer (soporta valores dinamicos {{ }} dentro de esos
  // atributos, igual que el original con React).
  function attachInteractive(el, v) {
    if (!v.hoverStyle && !v.activeStyle) return;
    el.__scBase = (v.props && v.props.style) || {};
    el.__scHover = v.hoverStyle || {};
    el.__scActive = v.activeStyle || {};
    var allProps = {};
    Object.keys(el.__scBase).forEach(function (k) { allProps[k] = 1; });
    Object.keys(el.__scHover).forEach(function (k) { allProps[k] = 1; });
    Object.keys(el.__scActive).forEach(function (k) { allProps[k] = 1; });
    el.__scAllProps = Object.keys(allProps);
    if (!el.__scBound) {
      el.__scState = { hover: false, active: false };
      var apply = function () {
        var st = el.__scState;
        var desired = Object.assign({}, el.__scBase, st.hover ? el.__scHover : null, st.active ? el.__scActive : null);
        el.__scAllProps.forEach(function (p) { el.style[p] = desired[p] != null ? desired[p] : ''; });
      };
      el.__scApply = apply;
      el.addEventListener('mouseenter', function () { el.__scState.hover = true; apply(); });
      el.addEventListener('mouseleave', function () { el.__scState.hover = false; el.__scState.active = false; apply(); });
      el.addEventListener('mousedown', function () { el.__scState.active = true; apply(); });
      el.addEventListener('mouseup', function () { el.__scState.active = false; apply(); });
      el.addEventListener('pointerdown', function () { el.__scState.active = true; apply(); });
      el.addEventListener('pointerup', function () { el.__scState.active = false; apply(); });
      el.addEventListener('pointercancel', function () { el.__scState.active = false; apply(); });
      el.__scBound = true;
    }
    el.__scApply();
  }

  function createDom(v) {
    var vt = vtype(v);
    if (vt === '#comment') return document.createComment('');
    if (vt === '#text') return document.createTextNode(String(v));
    var el = v.svg ? document.createElementNS(SVG_NS, v.tag) : document.createElement(v.tag);
    applyProps(el, {}, v.props || {});
    var doms = [];
    (v.children || []).forEach(function (c) {
      var d = createDom(c);
      doms.push(d);
      el.appendChild(d);
    });
    v.__doms = doms;
    attachInteractive(el, v);
    return el;
  }

  function patchChildren(parentDom, oldDoms, oldVs, newVs) {
    oldDoms = oldDoms || [];
    oldVs = oldVs || [];
    newVs = newVs || [];
    var newDoms = [];
    var common = Math.min(oldVs.length, newVs.length);
    for (var i = 0; i < common; i++) {
      var oldV = oldVs[i], newV = newVs[i], oldDom = oldDoms[i];
      if (sameType(oldV, newV)) {
        if (vtype(newV) === '#text') {
          if (oldDom.nodeValue !== String(newV)) oldDom.nodeValue = String(newV);
          newDoms.push(oldDom);
        } else if (vtype(newV) === '#comment') {
          newDoms.push(oldDom);
        } else {
          applyProps(oldDom, oldV.props || {}, newV.props || {});
          newV.__doms = patchChildren(oldDom, oldV.__doms || [], oldV.children || [], newV.children || []);
          attachInteractive(oldDom, newV);
          newDoms.push(oldDom);
        }
      } else {
        var fresh = createDom(newV);
        parentDom.replaceChild(fresh, oldDom);
        newDoms.push(fresh);
      }
    }
    for (var j = common; j < newVs.length; j++) {
      var d = createDom(newVs[j]);
      parentDom.appendChild(d);
      newDoms.push(d);
    }
    for (var k = oldVs.length - 1; k >= common; k--) {
      parentDom.removeChild(oldDoms[k]);
    }
    return newDoms;
  }

  function mount(container, vnode) {
    var dom = createDom(vnode);
    vnode.__dom = dom;
    container.innerHTML = '';
    container.appendChild(dom);
    return vnode;
  }

  function update(container, oldVnode, newVnode) {
    if (!sameType(oldVnode, newVnode)) {
      var dom = createDom(newVnode);
      newVnode.__dom = dom;
      container.replaceChild(dom, oldVnode.__dom);
      return newVnode;
    }
    var dom = oldVnode.__dom;
    applyProps(dom, oldVnode.props || {}, newVnode.props || {});
    newVnode.__doms = patchChildren(dom, oldVnode.__doms || [], oldVnode.children || [], newVnode.children || []);
    newVnode.__dom = dom;
    attachInteractive(dom, newVnode);
    return newVnode;
  }

  global.DCEngine = {
    initEngine: initEngine,
    renderTemplate: renderTemplate,
    mount: mount,
    update: update,
    createElement: h
  };

  // Shim minimo de React para app-logic.js (solo usa createRef y, una
  // vez, createElement para armar "bgOrbs" a mano).
  global.React = {
    createRef: function () { return { current: null }; },
    createElement: h,
    Fragment: 'sc-fragment-unused'
  };
})(window);
