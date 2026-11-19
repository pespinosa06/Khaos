// Capa de datos de KHAOS.
//  - load/save/clear: datos locales del dispositivo (localStorage).
//  - auth + datos remotos: Supabase vía REST (sin dependencias).
// Si config.js no define Supabase, la app sigue funcionando solo en local.
(function () {
  'use strict';
  var KEY = 'khaos.v1';
  var SKEY = 'khaos.session.v1';
  var cfg = window.KHAOS_CONFIG || {};
  var enabled = !!(cfg.supabaseUrl && cfg.supabaseKey);

  // ---------- almacenamiento local ----------
  function lsGet(k) { try { var r = localStorage.getItem(k); return r ? JSON.parse(r) : null; } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }

  function load() { return lsGet(KEY); }
  function save(data) { return lsSet(KEY, data); }
  function clear() { lsDel(KEY); }

  // ---------- sesión ----------
  var session = lsGet(SKEY);
  function setSession(s) {
    session = s;
    if (s) lsSet(SKEY, s); else lsDel(SKEY);
  }
  function hasSession() { return !!(session && session.refresh_token); }
  function userId() { return session && session.user ? session.user.id : null; }

  function toSession(r) {
    return {
      access_token: r.access_token,
      refresh_token: r.refresh_token,
      expires_at: r.expires_at || (Math.floor(Date.now() / 1000) + (r.expires_in || 3600)),
      user: r.user ? { id: r.user.id, email: r.user.email } : (session && session.user)
    };
  }

  // ---------- HTTP ----------
  function fail(code, status, msg) {
    var e = new Error(msg || code); e.code = code; e.status = status; return e;
  }
  function http(path, opts) {
    opts = opts || {};
    var headers = { apikey: cfg.supabaseKey, 'Content-Type': 'application/json' };
    if (opts.token) headers.Authorization = 'Bearer ' + opts.token;
    if (opts.headers) Object.keys(opts.headers).forEach(function (k) { headers[k] = opts.headers[k]; });
    return fetch(cfg.supabaseUrl + path, {
      method: opts.method || 'GET',
      headers: headers,
      body: opts.body === undefined ? undefined : JSON.stringify(opts.body)
    }).catch(function () { throw fail('network', 0, 'Sin conexión'); })
      .then(function (res) {
        return res.text().then(function (txt) {
          var data = null;
          try { data = txt ? JSON.parse(txt) : null; } catch (e) { data = null; }
          if (!res.ok) {
            var code = (data && (data.error_code || data.code)) || 'http_' + res.status;
            throw fail(String(code), res.status, data && (data.msg || data.message || data.error_description));
          }
          return data;
        });
      });
  }

  // ---------- auth ----------
  function signUp(email, password, meta) {
    return http('/auth/v1/signup', { method: 'POST', body: { email: email, password: password, data: meta || {} } })
      .then(function (r) {
        if (r && r.access_token) { setSession(toSession(r)); return { needsConfirm: false }; }
        return { needsConfirm: true };
      });
  }
  function signIn(email, password) {
    return http('/auth/v1/token?grant_type=password', { method: 'POST', body: { email: email, password: password } })
      .then(function (r) { setSession(toSession(r)); });
  }
  var refreshing = null;
  function refresh() {
    if (!hasSession()) return Promise.reject(fail('no_session', 401));
    if (refreshing) return refreshing;
    refreshing = http('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: { refresh_token: session.refresh_token } })
      .then(function (r) { setSession(toSession(r)); })
      .catch(function (e) { if (e.status === 400 || e.status === 401 || e.status === 403) setSession(null); throw e; })
      .then(function (v) { refreshing = null; return v; }, function (e) { refreshing = null; throw e; });
    return refreshing;
  }
  function token() {
    if (!hasSession()) return Promise.reject(fail('no_session', 401));
    if (session.expires_at - 60 > Date.now() / 1000) return Promise.resolve(session.access_token);
    return refresh().then(function () { return session.access_token; });
  }
  function signOut() {
    var t = session && session.access_token;
    setSession(null);
    if (!t) return Promise.resolve();
    return http('/auth/v1/logout', { method: 'POST', token: t }).catch(function () {});
  }

  // ---------- datos ----------
  function authed(path, opts) {
    opts = opts || {};
    return token().then(function (t) { opts.token = t; return http(path, opts); });
  }
  function getProfile() {
    return authed('/rest/v1/profiles?select=username,age&limit=1').then(function (r) { return (r && r[0]) || null; });
  }
  function listPosts(max) {
    return authed('/rest/v1/rpc/community_posts', { method: 'POST', body: { max_rows: max || 100 } });
  }
  function addPost(p) {
    return authed('/rest/v1/posts', { method: 'POST', body: { channel: p.channel, body: p.body, anon: !!p.anon, circle: !!p.circle }, headers: { Prefer: 'return=minimal' } });
  }
  function listCloset() {
    return authed('/rest/v1/closet_items?select=id,name,cat,img,worn&order=created_at.desc&limit=200');
  }
  function addClosetItem(it) {
    return authed('/rest/v1/closet_items', { method: 'POST', body: { id: it.id, name: it.name, cat: it.cat, img: it.img || null, worn: it.worn || 0 }, headers: { Prefer: 'return=minimal' } });
  }

  window.KhaosStore = {
    enabled: enabled,
    load: load, save: save, clear: clear,
    hasSession: hasSession, userId: userId,
    signUp: signUp, signIn: signIn, signOut: signOut, refresh: refresh,
    getProfile: getProfile, listPosts: listPosts, addPost: addPost,
    listCloset: listCloset, addClosetItem: addClosetItem
  };
})();
