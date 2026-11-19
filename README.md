# KHAOS App — MVP web

App web estática (HTML/CSS/JS puro, sin build ni dependencias) para
jóvenes de 18 a 25 años: asesor de estilo, My closet, probador,
comunidad por canales e historias.

## Qué cambió respecto al prototipo

- Se quitó el marco de teléfono y la barra de estado simulada: en móvil la
  app ocupa toda la pantalla; en escritorio se muestra una columna
  centrada con un panel de marca (`mvp.css`).
- Sesión persistente: al registrarte o iniciar sesión, la app recuerda tu
  perfil, closet, posts, likes y plan al recargar (`store.js`, localStorage).
  Los datos de tarjeta nunca se guardan.
- Se retiró el listener de `postMessage` que permitía a otra página
  controlar la app. Los saltos entre pantallas quedan solo en modo
  desarrollo (`?dev`, y `?dev&screen=home` para abrir una pantalla).
- Metadatos para móvil: `theme-color`, ícono, manifest e Open Graph.

## Pendiente (siguiente etapa)

Cuentas reales, creación y publicación de posts, y closet en la nube con
Supabase. Para conectarlo basta reemplazar `store.js` por un adaptador
con la misma interfaz (`load` / `save` / `clear`).

## Estructura

- `index.html` — punto de entrada.
- `app.css` — estilos y animaciones (incluye la tipografía Stretch Pro embebida).
- `mvp.css` — layout responsive del MVP.
- `store.js` — capa de datos local.
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
