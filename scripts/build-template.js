// Regenera template-data.js a partir de template.html.
// Uso: node scripts/build-template.js
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'template.html'), 'utf8');
const header =
  '// GENERADO por scripts/build-template.js desde template.html. No editar a mano.\n' +
  '// Markup embebido como string para que index.html funcione incluso\n' +
  '// abierto con doble clic (file://), sin necesitar un servidor local.\n';
fs.writeFileSync(path.join(root, 'template-data.js'),
  header + 'window.__KHAOS_TEMPLATE__ = ' + JSON.stringify(html) + ';\n');
console.log('template-data.js actualizado (' + html.length + ' caracteres)');
