# KHAOS App — MVP web (diseño v12)

App web estática (HTML/CSS/JS puro, sin build ni dependencias) para
jóvenes de 18 a 25 años: asesor de estilo, My closet, probador,
comunidad por canales e historias.

## Qué cambió respecto al prototipo

- **Diseño v12:** tema oscuro, tipografía Manrope, y pantallas nuevas (asesores
  reales, "Mi día", registro de asesor, verificación de correo). El markup y la
  lógica salen del archivo `KHAOS App v12`; las imágenes y tipografías están en
  `assets/`.
- Se quitó el marco de teléfono, la barra de estado simulada y el panel de
  prototipo: la página muestra solo la app (`mvp.css`), a pantalla completa
  en móvil y en una columna centrada en escritorio.
- Sesión persistente: la app recuerda tu sesión al recargar. Los datos de
  tarjeta nunca se guardan.
- Se retiró el listener de `postMessage` que permitía a otra página
  controlar la app. Los saltos entre pantallas quedan solo en modo
  desarrollo (`?dev`, y `?dev&screen=home` para abrir una pantalla).
- Metadatos para móvil: `theme-color`, ícono, manifest e Open Graph.

## Supabase (cuentas, asesores, posts y closet)

El proyecto de Supabase "Khaos" ya está conectado (`config.js`, `store.js`):

- **Cuentas reales:** registro e inicio de sesión con correo y contraseña.
  La edad (18–25) y el nombre de usuario se validan también en la base de datos.
- **Asesores reales:** cualquiera puede crear una cuenta de asesor (rol
  `advisor`); su perfil (foto, especialidades, bio, tarifa) aparece de inmediato
  en la lista de Asesores. Sin revisión previa del equipo (ver "Pendiente").
- **Solicitudes de sesión:** el cliente pide una sesión; el asesor la acepta o
  rechaza desde su Perfil. Al aceptar, el cliente ve el contacto que el asesor
  dejó (guardado en una tabla privada, nunca en la lista pública).
- **Posts compartidos:** fotos (Storage, bucket público `media`), "Dejar una
  palabra" (frases positivas, solo las ve el autor), reportes y borrado de tus
  propios posts. Con 3 reportes de personas distintas el post deja de mostrarse.
  No hay likes públicos, por diseño. Los anónimos nunca exponen al autor.
- **My closet en la nube:** las prendas que agregues se guardan en tu cuenta.
- **Sin pagos:** se quitaron la membresía y los planes.
- **Seguridad:** RLS activo en todas las tablas; cada usuario solo ve y
  modifica lo suyo. La clave de `config.js` es la "publishable", pública por
  diseño. Nunca pongas la clave `secret` / `service_role` en el repo.

Tablas: `profiles`, `advisors`, `advisor_private`, `session_requests`, `posts`,
`post_phrases`, `post_reports`, `closet_items` (esquema en las migraciones del
proyecto Supabase). Sin conexión a Supabase (config vacío) la app corre en modo
demo local con asesores y posts de ejemplo.

Para entrar directo sin confirmar el correo, desactiva *Confirm email* en
Supabase → Authentication → Sign In / Providers → Email. Si queda activo, la
app avisa al usuario que revise su correo.

Notas: la cédula del registro solo se valida en el dispositivo; no se envía ni se
guarda en Supabase.

Pendiente: reseñas y valoraciones reales de asesores, chat dentro de la app,
revisión/verificación de asesores por el equipo, fotos del closet en Storage
(hoy van dentro de la tabla) y activar la protección contra contraseñas
filtradas en Supabase → Authentication.

## Estructura

- `index.html` — punto de entrada.
- `app.css` — estilos y animaciones del diseño v12 (fuentes en `assets/fonts/`).
- `mvp.css` — layout responsive del MVP.
- `config.js` — URL y clave pública de Supabase.
- `store.js` — capa de datos: local + Supabase (auth, posts, closet).
- `template.html` — markup de todas las pantallas (fuente editable).
- `template-data.js` — copia generada de `template.html`. Tras editar el
  markup, ejecutar `node scripts/build-template.js`.
- `app-logic.js`, `engine.js`, `dclogic.js`, `app-bootstrap.js` — lógica,
  motor de plantillas y arranque.
- `assets/` — imágenes e íconos.

## Probarlo en local

No hace falta `npm install` ni ningún build. Solo un servidor estático
simple (necesario porque `fetch('./template.html')` no funciona abriendo
el archivo directo con `file://`):

```bash
cd khaos-app   # o como hayas nombrado la carpeta
python3 -m http.server 8000
```

Y abrí `http://localhost:8000` en el navegador.

## Subir a GitHub (repo "Taller")

```bash
cd khaos-app
git init
git add .
git commit -m "Versión final de la app KHAOS (export standalone)"
git branch -M main
git remote add origin https://github.com/Garnicad/Taller.git
git push -u origin main
```

Si el repo `Taller` ya tiene contenido (por ejemplo un commit inicial
vacío desde GitHub), puede que el push sea rechazado; en ese caso:

```bash
git pull origin main --allow-unrelated-histories
# resolvé cualquier conflicto si aparece, luego:
git push -u origin main
```

## Vercel

Si `https://khaos-rho.vercel.app/` ya está conectado al repo
`Garnicad/Taller` (integración automática de Vercel con GitHub), el
`git push` de arriba va a disparar un redeploy solo, sin que tengas
que hacer nada más — en unos 30-60 segundos el sitio se actualiza.

Si no está conectado todavía: entrá a vercel.com → tu proyecto → Settings
→ Git, y conectá el repo `Garnicad/Taller`. Como es un sitio estático
puro (sin framework), dejá el "Build Command" vacío y el "Output
Directory" en `.` (la raíz) — Vercel lo sirve directo, sin build.
