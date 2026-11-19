// Assets locales en /assets. rs(path) resuelve el mismo path humano que usaba
// el prototipo original para no tocar el resto del codigo.
const RS_MAP = {
  "assets_closet_jacket_png": "assets/closet-jacket.png",
  "assets_logo_visa_svg": "assets/logo-visa.svg",
  "assets_logo_mastercard_svg": "assets/logo-mastercard.svg",
  "assets_closet_jeans2_png": "assets/closet-jeans2.png",
  "assets_closet_hoodie2_png": "assets/closet-hoodie2.png",
  "assets_logo_gpay_svg": "assets/logo-gpay.svg",
  "assets_closet_tenis3_png": "assets/closet-tenis3.png",
  "assets_logo_apple_svg": "assets/logo-apple.svg",
  "assets_s_closet_jeans_fixed_png": "assets/s-closet-jeans-fixed.png",
  "assets_s_closet_tenis2_png": "assets/s-closet-tenis2.png",
  "assets_s_closet_camiseta_png": "assets/s-closet-camiseta.png",
  "assets_closet_tee2_png": "assets/closet-tee2.png",
  "assets_closet_tenis_png": "assets/closet-tenis.png",
  "assets_s_closet_hoodie_png": "assets/s-closet-hoodie.png",
  "assets_s_closet_gafas_png": "assets/s-closet-gafas.png",
  "assets_bag_1_png": "assets/bag-1.png",
  "assets_hat_0_png": "assets/hat-0.png",
  "assets_closet_gorro_png": "assets/closet-gorro.png",
  "assets_s_new_1_png": "assets/s-new-1.png",
  "assets_s_c2_3_png": "assets/s-c2-3.png",
  "assets_closet_short_png": "assets/closet-short.png",
  "assets_s_bag_2_png": "assets/s-bag-2.png",
  "assets_s_c2_2_png": "assets/s-c2-2.png",
  "assets_bag_4_png": "assets/bag-4.png",
  "assets_hat_2_png": "assets/hat-2.png",
  "assets_s_bag_3_png": "assets/s-bag-3.png",
  "assets_c2_0_png": "assets/c2-0.png",
  "assets_closet_zip_png": "assets/closet-zip.png",
  "assets_s_new_3_png": "assets/s-new-3.png",
  "assets_c2_1_png": "assets/c2-1.png",
  "assets_s_watch_0_png": "assets/s-watch-0.png",
  "assets_s_watch_2_png": "assets/s-watch-2.png",
  "assets_s_watch_1_png": "assets/s-watch-1.png",
  "assets_c2_5_png": "assets/c2-5.png",
  "assets_s_new_0_png": "assets/s-new-0.png",
  "assets_hat_1_png": "assets/hat-1.png",
  "assets_s_c2_4_png": "assets/s-c2-4.png"
};
const rs = (p) => RS_MAP[p.replace(/[^\w]/g, '_')] || p;
const QUESTIONS = [
  { q: 'Pregunta 1/7 — ¿Cuál es tu plan ideal para un sábado libre?', o: ['Skate con amigos', 'Un concierto', 'Crear algo en casa'] },
  { q: 'Pregunta 2/7 — ¿Qué música te define ahora mismo?', o: ['Rap / trap', 'Rock / punk', 'Electrónica'] },
  { q: 'Pregunta 3/7 — ¿Qué color te representa hoy?', o: ['Negro total', 'Azul eléctrico', 'Rojo vinotinto'] },
  { q: 'Pregunta 4/7 — ¿Cómo quieres que te perciban?', o: ['Fuerte', 'Creativo/a', 'Misterioso/a'] },
  { q: 'Pregunta 5/7 — ¿Qué prenda no puede faltar?', o: ['Hoodie oversized', 'Jeans rotos', 'Chaqueta'] },
  { q: 'Pregunta 6/7 — ¿Qué te incomoda al vestirte?', o: ['Seguir tendencias', 'Que me juzguen', 'Nada, me da igual'] },
  { q: 'Pregunta 7/7 — ¿Qué te haría sentir más tú?', o: ['Destacar', 'Estar cómodo/a', 'Expresar lo que siento'] }
];
const IDENTITIES = [
  { n: 'Rebelde urbano', t: 'Te mueves con fuerza y no pides permiso. Siluetas oversized, negros profundos y un acento vinotinto.' },
  { n: 'Ruido creativo', t: 'Tu estilo es una obra en proceso. Mezcla texturas, capas y detalles hechos a mano sin miedo al error.' },
  { n: 'Caos silencioso', t: 'Dices mucho sin gritar. Tonos azules fríos, cortes limpios y una sola pieza que rompe la regla.' }
];
const GROUPS = [['khaos', 'KHAOS'], ['hombres', 'Hombres'], ['mujeres', 'Mujeres'], ['otras', 'Otras comunidades']];
const CHANNELS = [
  { id: 'bienvenida', name: 'bienvenida', desc: 'Empieza aquí', ro: true, tint: 'oklch(0.5 0.058 230)', g: 'khaos' },
  { id: 'normas', name: 'normas', desc: 'Respeto primero. Cero odio.', ro: true, tint: 'oklch(0.4 0.15 20)', g: 'khaos' },
  { id: 'looks', name: 'looks', desc: 'Comparte con cariño tu look del día', tint: 'oklch(0.55 0.058 230)', online: '128 en línea', g: 'otras' },
  { id: 'retos', name: 'retos', desc: 'Reto semanal de estilo', tint: 'oklch(0.42 0.16 20)', online: '64 en línea', g: 'otras' },
  { id: 'general', name: 'general', desc: 'Habla de lo que sea', tint: 'oklch(0.35 0.03 250)', online: '210 en línea', g: 'khaos' },
  { id: 'expertos', name: 'expertos', approval: true, desc: 'Estilistas responden', tint: 'oklch(0.6 0.12 200)', online: '12 en línea', g: 'khaos' },
  { id: 'h-looks', name: 'hombres', desc: 'Fits, oversized y básicos', tint: 'oklch(0.5 0.045 250)', online: '96 en línea', g: 'hombres' },
  { id: 'h-grooming', name: 'barba', desc: 'Cortes, barba y cuidado', tint: 'oklch(0.4 0.08 250)', online: '41 en línea', g: 'hombres' },
  { id: 'm-looks', name: 'mujeres', desc: 'Fits, capas y accesorios', tint: 'oklch(0.5 0.16 10)', online: '118 en línea', g: 'mujeres' },
  { id: 'm-makeup', name: 'makeup', desc: 'Makeup que va con tu estilo', tint: 'oklch(0.45 0.14 350)', online: '57 en línea', g: 'mujeres' },
  { id: 'lgbt', name: 'lgbtq+', approval: true, desc: 'Espacio seguro para expresarte', tint: 'oklch(0.55 0.15 300)', online: '73 en línea', g: 'otras' },
  { id: 'skate', name: 'skaters', desc: 'Ropa que aguanta caídas', tint: 'oklch(0.45 0.1 150)', online: '38 en línea', g: 'otras' },
  { id: 'sneakers', name: 'sneakers', desc: 'Drops, limpieza y combos', tint: 'oklch(0.6 0.12 80)', online: '85 en línea', g: 'otras' },
  { id: 'thrift', name: 'thrift', desc: 'Thrift, intercambio y DIY', tint: 'oklch(0.45 0.08 60)', online: '29 en línea', g: 'otras' }
];
const ARTICLES0 = [
  { cat: 'Moda', title: 'Moda: pasarelas, tendencias y street style', author: 'Vogue', read: 'Abrir ↗', url: 'https://www.vogue.com/fashion', shown: 'vogue.com/fashion', tint: 'linear-gradient(135deg, oklch(0.45 0.18 20), oklch(0.15 0.04 250))', body: [] },
  { cat: 'Moda', title: 'Estilo: guía de moda y outfits', author: 'GQ', read: 'Abrir ↗', url: 'https://www.gq.com/style', shown: 'gq.com/style', tint: 'linear-gradient(135deg, oklch(0.45 0.058 230), oklch(0.15 0.04 250))', body: [] },
  { cat: 'Moda', title: 'Moda: moda joven, cultura y experimentación', author: 'Dazed', read: 'Abrir ↗', url: 'https://www.dazeddigital.com/fashion', shown: 'dazeddigital.com/fashion', tint: 'linear-gradient(135deg, oklch(0.45 0.18 300), oklch(0.15 0.04 250))', body: [] },
  { cat: 'Moda', title: 'Moda y cultura juvenil desde Londres', author: 'i-D', read: 'Abrir ↗', url: 'https://www.i-d.co/', shown: 'i-d.co', tint: 'linear-gradient(135deg, oklch(0.45 0.18 20), oklch(0.15 0.04 250))', body: [] },
  { cat: 'Streetwear', title: 'Moda: drops, colaboraciones y streetwear', author: 'Hypebeast', read: 'Abrir ↗', url: 'https://hypebeast.com/fashion', shown: 'hypebeast.com/fashion', tint: 'linear-gradient(135deg, oklch(0.45 0.058 230), oklch(0.15 0.04 250))', body: [] },
  { cat: 'Streetwear', title: 'Streetwear, lujo y cultura urbana', author: 'Highsnobiety', read: 'Abrir ↗', url: 'https://www.highsnobiety.com/', shown: 'highsnobiety.com', tint: 'linear-gradient(135deg, oklch(0.45 0.058 250), oklch(0.15 0.04 250))', body: [] },
  { cat: 'Streetwear', title: 'Estilo: lo que se está usando ahora', author: 'Complex', read: 'Abrir ↗', url: 'https://www.complex.com/style', shown: 'complex.com/style', tint: 'linear-gradient(135deg, oklch(0.45 0.18 20), oklch(0.15 0.04 250))', body: [] },
  { cat: 'Sneakers', title: 'Calzado: lanzamientos de sneakers', author: 'Hypebeast', read: 'Abrir ↗', url: 'https://hypebeast.com/footwear', shown: 'hypebeast.com/footwear', tint: 'linear-gradient(135deg, oklch(0.45 0.058 230), oklch(0.15 0.04 250))', body: [] },
  { cat: 'Sneakers', title: 'Calendario y noticias de sneakers', author: 'Sneaker News', read: 'Abrir ↗', url: 'https://sneakernews.com/', shown: 'sneakernews.com', tint: 'linear-gradient(135deg, oklch(0.45 0.18 300), oklch(0.15 0.04 250))', body: [] }
];
const ARTICLES = ARTICLES0.map(a => ({ ...a, initial: a.author[0] }));
const CLOSET = [
  { id: 1, name: 'Gorro SKYLRK negro', cat: 'Gorros', img: rs('assets/closet-gorro.png'), color: 'oklch(0.55 0.05 240)', worn: 6 },
  { id: 2, name: 'Gafas rojas SKYLRK', cat: 'Gafas', img: rs('assets/s-closet-gafas.png'), color: 'oklch(0.5 0.2 25)', worn: 4 },
  { id: 5, name: 'Hoodie azul lavado', cat: 'Hoodies', img: rs('assets/s-closet-hoodie.png'), color: 'oklch(0.5 0.08 245)', worn: 7 },
  { id: 6, name: 'Jeans con cadenas', cat: 'Pantalones', img: rs('assets/s-closet-jeans-fixed.png'), color: 'oklch(0.6 0.05 240)', worn: 9 },
  { id: 8, name: 'Camiseta ECHOES', cat: 'Camisetas', img: rs('assets/s-closet-camiseta.png'), color: 'oklch(0.15 0 0)', worn: 2 },
  { id: 9, name: 'Tenis suede negros', cat: 'Tenis', img: rs('assets/s-closet-tenis2.png'), color: 'oklch(0.2 0 0)', worn: 3 },
  { id: 10, name: 'Hoodie negro STWZ', cat: 'Hoodies', img: rs('assets/closet-hoodie2.png'), color: 'oklch(0.15 0 0)', worn: 1 },
  { id: 11, name: 'Chaqueta cuero DIESEL', cat: 'Chaquetas', img: rs('assets/closet-jacket.png'), color: 'oklch(0.15 0 0)', worn: 1 },
  { id: 12, name: 'Jeans lavados', cat: 'Pantalones', img: rs('assets/closet-jeans2.png'), color: 'oklch(0.55 0.06 240)', worn: 1 },
  { id: 13, name: 'Short denim raw', cat: 'Shorts', img: rs('assets/closet-short.png'), color: 'oklch(0.3 0.05 260)', worn: 1 },
  { id: 14, name: 'Wave Runner', cat: 'Tenis', img: rs('assets/closet-tenis3.png'), color: 'oklch(0.7 0.02 90)', worn: 1 },
  { id: 15, name: 'Camiseta true. verde', cat: 'Camisetas', img: rs('assets/closet-tee2.png'), color: 'oklch(0.45 0.05 200)', worn: 1 },
  { id: 16, name: 'Zip hoodie washed', cat: 'Hoodies', img: rs('assets/closet-zip.png'), color: 'oklch(0.25 0 0)', worn: 1 },
  { id: 7, name: 'Tenis plata', cat: 'Tenis', img: rs('assets/closet-tenis.png'), color: 'oklch(0.7 0.02 90)', worn: 5 },
  { id: 17, name: 'Tenis rosa', cat: 'Tenis', img: rs('assets/s-new-0.png'), color: 'oklch(0.75 0.15 350)', worn: 1 },
  { id: 18, name: 'Tenis azul y amarillo', cat: 'Tenis', img: rs('assets/s-new-1.png'), color: 'oklch(0.7 0.042 235)', worn: 1 },
  { id: 20, name: 'Jeans rotos con pintura', cat: 'Pantalones', img: rs('assets/s-new-3.png'), color: 'oklch(0.75 0.04 240)', worn: 1 },
  { id: 30, name: 'Mochila Coach negra', cat: 'Bolsos', img: rs('assets/bag-1.png'), color: 'oklch(0.2 0 0)', worn: 1 },
  { id: 31, name: 'Mochila Sprayground shark', cat: 'Bolsos', img: rs('assets/s-bag-2.png'), color: 'oklch(0.35 0.15 20)', worn: 1 },
  { id: 32, name: 'Bandolera Louis Vuitton negra', cat: 'Bolsos', img: rs('assets/s-bag-3.png'), color: 'oklch(0.15 0 0)', worn: 1 },
  { id: 33, name: 'Bandolera Coach monograma', cat: 'Bolsos', img: rs('assets/bag-4.png'), color: 'oklch(0.25 0 0)', worn: 1 },
  { id: 34, name: 'Camiseta Project duraznos', cat: 'Camisetas', img: rs('assets/c2-0.png'), color: 'oklch(0.3 0.05 255)', worn: 1 },
  { id: 35, name: 'Hoodie Nude Project', cat: 'Hoodies', img: rs('assets/c2-1.png'), color: 'oklch(0.35 0.01 250)', worn: 1 },
  { id: 36, name: 'Gafas Skylrk plata', cat: 'Gafas', img: rs('assets/s-c2-2.png'), color: 'oklch(0.75 0 0)', worn: 1 },
  { id: 37, name: 'Gafas Skylrk negras', cat: 'Gafas', img: rs('assets/s-c2-3.png'), color: 'oklch(0.2 0 0)', worn: 1 },
  { id: 38, name: 'Zip hoodie arena', cat: 'Hoodies', img: rs('assets/s-c2-4.png'), color: 'oklch(0.85 0.05 85)', worn: 1 },
  { id: 39, name: 'Bomber Acne Studios', cat: 'Chaquetas', img: rs('assets/c2-5.png'), color: 'oklch(0.25 0.01 250)', worn: 1 },
  { id: 40, name: 'Gorra White Sox paisley', cat: 'Gorros', img: rs('assets/hat-0.png'), color: 'oklch(0.9 0.03 90)', worn: 1 },
  { id: 41, name: 'Gorra Fortaleza', cat: 'Gorros', img: rs('assets/hat-1.png'), color: 'oklch(0.35 0.08 255)', worn: 1 },
  { id: 42, name: 'Gorra Harris Tweed', cat: 'Gorros', img: rs('assets/hat-2.png'), color: 'oklch(0.3 0.04 190)', worn: 1 },
  { id: 43, name: 'Rolex Datejust azul', cat: 'Relojes', img: rs('assets/s-watch-0.png'), color: 'oklch(0.4 0.1 255)', worn: 1 },
  { id: 44, name: 'Rolex Daytona oro', cat: 'Relojes', img: rs('assets/s-watch-1.png'), color: 'oklch(0.8 0.12 90)', worn: 1 },
  { id: 45, name: 'Rolex Datejust verde', cat: 'Relojes', img: rs('assets/s-watch-2.png'), color: 'oklch(0.4 0.1 150)', worn: 1 }
];
const SLOT_OF = { Tenis: 'shoes', Gorros: 'head', Gafas: 'eyes', Hoodies: 'top', Camisetas: 'top', Chaquetas: 'top', Pantalones: 'bottom', Shorts: 'bottom', Bolsos: 'bag', Relojes: 'watch' };
const SLOTS = [['head', 'Cabeza'], ['eyes', 'Gafas'], ['top', 'Arriba'], ['bottom', 'Abajo'], ['shoes', 'Pies'], ['bag', 'Bolso'], ['watch', 'Reloj']];
const NEW_ITEMS = [];
const LOOKS = { Streetwear: [{ name: 'Oversize negro', cats: ['Hoodies', 'Pantalones', 'Tenis'] }, { name: 'Capas y cadenas', cats: ['Chaquetas', 'Pantalones', 'Tenis'] }], Minimal: [{ name: 'Base limpia', cats: ['Camisetas', 'Pantalones', 'Tenis'] }, { name: 'Todo en uno', cats: ['Camisetas', 'Shorts', 'Tenis'] }], Accesorios: [{ name: 'Gorro y gafas', cats: ['Gorros', 'Gafas', 'Camisetas'] }, { name: 'Detalles del día', cats: ['Gafas', 'Hoodies', 'Gorros'] }] };
const CLOSET_CATS = ['Todo', 'Camisetas', 'Hoodies', 'Chaquetas', 'Pantalones', 'Shorts', 'Tenis', 'Gorros', 'Gafas', 'Bolsos', 'Relojes'];
const ART_CATS = ['Todos', 'Moda', 'Streetwear', 'Sneakers'];
const SEED = {
  bienvenida: [{ user: 'KHAOS', text: 'Bienvenido/a al caos. Aquí nadie te dice cómo vestirte: te ayudamos a descubrir quién eres. Lee #normas y preséntate en #general.', time: 'fijado', likes: 342 }],
  normas: [{ user: 'KHAOS', text: '1. Respeto siempre. 2. Nada de burlas por el cuerpo. 3. Sin spam ni ventas. 4. Tus fotos son tuyas: pide permiso antes de compartir las de otros.', time: 'fijado', likes: 198 }],
  looks: [
    { user: 'mar_k', text: 'Hoodie gigante + cadena. Hoy me sentí yo.', time: '2 min', likes: 24 },
    { user: 'nico.rx', text: '¿Jeans anchos con botas o con tenis? Opinen.', time: '15 min', likes: 9 }
  ],
  retos: [{ user: 'KHAOS', text: 'Reto de la semana: arma un look sin comprar nada nuevo. Sube tu foto antes del domingo.', time: '1 h', likes: 87 }],
  general: [
    { user: 'luna_v', text: 'Alguien más va al concierto del sábado?', time: '5 min', likes: 6 },
    { user: 'dani0', text: 'Primera vez aquí, vengo del asesor', time: '20 min', likes: 14 }
  ],
  'h-looks': [{ user: 'mar_k', text: 'Cargo negro + camiseta boxy blanca. Simple pero me gusta.', time: '8 min', likes: 19 }],
  'h-grooming': [{ user: 'dani0', text: '¿Fade bajo o medio para cara redonda?', time: '30 min', likes: 7 }],
  'm-looks': [{ user: 'luna_v', text: 'Baggy jeans + top ajustado + chaqueta de cuero. Opinen.', time: '4 min', likes: 31 }],
  'm-makeup': [{ user: 'vale.k', text: 'Delineado gráfico azul para el concierto del sábado.', time: '1 h', likes: 22 }],
  lgbt: [{ user: 'KHAOS', text: 'Este es tu espacio. Aquí la ropa no tiene género. Preséntate como quieras.', time: 'fijado', likes: 140 }],
  skate: [{ user: 'rolo', text: 'Recomienden pantalones que no se rompan en la rodilla.', time: '2 h', likes: 11 }],
  sneakers: [{ user: 'nico.rx', text: 'Truco: bicarbonato + cepillo de dientes para las suelas.', time: '3 h', likes: 44 }],
  thrift: [{ user: 'sofi_t', text: 'Chaqueta de jean por 15 mil en el mercado de pulgas.', time: '5 h', likes: 26 }],
  expertos: [{ user: 'Estilista Ana', text: 'Tip: el oversized funciona mejor si ajustas una sola pieza (cintura o tobillo).', time: '3 h', likes: 51 }]
};
const ONB = [
  { t: 'Quererte también se practica', x: 'KHAOS no te dice cómo debes verte. Te acompaña a sentirte bien con quien eres.' },
  { t: 'Alguien que te escucha', x: 'Cuéntale cómo te sientes. Si quieres, mándale una foto y te muestra qué colores y estilos te hacen sentir tú. Siempre con tu permiso.' },
  { t: 'Una comunidad sin juicios', x: 'Espacios seguros para compartir, hacer retos de autoestima y hablar con expertos. Nadie se burla.' }
];

const BANNERS = [
  { k: 'f', t: 'Hoy eres suficiente.' }, { k: 'f', t: 'Tu estilo no necesita permiso.' }, { k: 'f', t: 'Vestirte es una forma de quererte.' }, { k: 'f', t: 'No tienes que gustarle a todos para valer.' }, { k: 'f', t: 'Hoy basta con que lo intentes.' },
  { k: 'h', t: 'Sofi dejó de esconderse en hoodies enormes. Hoy elige lo que la hace sentir ella, y dice que se siente más liviana.' },
  { k: 'h', t: 'Mateo tardó un año en publicar su primer look. Recibió 12 frases bonitas y hoy ayuda a otros a animarse.' },
  { k: 'h', t: 'Valen pensaba que su cuerpo no cabía en ninguna tendencia. Aprendió a vestirse para ella y no para las fotos.' },
  { k: 'h', t: 'Cami empezó sola en un canal. Hoy tiene un grupo de amigas con las que arma outfits cada viernes.' },
  { k: 'h', t: 'Dani donó su primera chaqueta y la vio transformada en algo nuevo. Dice que soltar también es estilo.' }];
const PHRASES = ['Hoy eres suficiente.', 'Tu estilo no necesita permiso.', 'Eres más de lo que te dijeron.', 'Vestirte es una forma de quererte.', 'Tu cuerpo es tu casa. Cuídala.', 'No tienes que gustarle a todos para valer.', 'Lo que sientes importa.', 'Hoy basta con que lo intentes.', 'Eres tú, y eso ya es suficiente.', 'Cada día te conoces un poco más.'];
const PHRASES_GIVE_OLD = ['Te ves increíble', 'Qué orgullo verte', 'Eso eres tú', 'Tienes muy buen ojo', 'Gracias por mostrarte', 'Me inspiras'];
const PHRASES_GIVE = ['Inspirador', 'Auténtico', 'Increíble', 'Creativo', 'Único', 'Valiente'];
const hsvToHex = (h, sa, v) => { const f = (n) => { const k = (n + h / 60) % 6; const x = v - v * sa * Math.max(0, Math.min(k, 4 - k, 1)); return Math.round(x * 255).toString(16).padStart(2, '0'); }; return '#' + f(5) + f(3) + f(1); };
const hexToHsv = (hex) => { const m = /^#?([0-9a-f]{6})$/i.exec(hex || ''); if (!m) return { h: 0, s: 0, v: 1 }; const n = parseInt(m[1], 16), r = (n >> 16 & 255) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn; let h = 0; if (d) { if (mx === r) h = ((g - b) / d + 6) % 6; else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4; } return { h: Math.round(h * 60), s: mx ? d / mx : 0, v: mx }; };
const FONTS = { Manrope: "'Manrope','Helvetica Neue',Arial,sans-serif", Stretch: "'Stretch Pro','Helvetica Neue',Arial,sans-serif", Serif: 'Georgia,serif', Mono: "'Courier New',monospace" };
const mkEl = (o) => ({ x: 50, y: 50, rot: 0, bdw: 0, bd: '#ffffff', fill: '#ffffff', fill2: null, ...o, id: Math.random().toString(36).slice(2, 8) });
const SEED_STORIES = [
  { id: 's1', ar: '3/4', bg: { c1: '#e5242d', c2: '#1a0505' }, title: 'Mi estilo, mis reglas', by: 'Sofi', text: 'Antes me escondía en hoodies enormes. Hoy elijo lo que me hace sentir yo, y se siente liviano.', tags: ['#oversized', '#yosoyyo'], els: [mkEl({ type: 'image', src: 'assets/closet-hoodie2.png', y: 40, w: 74 }), mkEl({ type: 'text', text: 'MI ESTILO', y: 82, size: 9, font: 'Stretch' }), mkEl({ type: 'text', text: '#yosoyyo', y: 92, size: 5, font: 'Manrope' })] },
  { id: 's2', ar: '1/1', bg: { c1: '#ece7dd', c2: '#bdb6a8' }, title: 'Soltar es estilo', by: 'Dani', text: 'Doné mi chaqueta favorita y la vi transformada en algo nuevo. Soltar también es estilo.', tags: ['#donar', '#segundavida'], els: [mkEl({ type: 'image', src: 'assets/closet-jacket.png', x: 38, y: 52, w: 62, rot: -8 }), mkEl({ type: 'text', text: 'Soltar\nes estilo', x: 72, y: 24, size: 10, font: 'Serif', fill: '#111111' }), mkEl({ type: 'shape', shape: 'circle', x: 82, y: 78, w: 22, fill: '#e5242d' })] },
  { id: 's3', ar: '9/16', bg: { c1: '#0b0b0d', c2: '#2a2f3a' }, title: 'Primera vez sin esconderme', by: 'Mateo', text: 'Tardé un año en publicar mi primer look. Me llegaron palabras bonitas y hoy animo a otros.', tags: ['#valiente', '#primeravez'], els: [mkEl({ type: 'image', src: 'assets/closet-tenis3.png', y: 36, w: 84, rot: 8 }), mkEl({ type: 'text', text: 'Primera vez\nsin esconderme', y: 74, size: 9, font: 'Manrope' }), mkEl({ type: 'text', text: '✦', x: 82, y: 12, size: 14, fill: '#e5242d' })] },
  { id: 's4', ar: '4/5', bg: { c1: '#8c1319', c2: '#e5242d' }, title: 'Amigas del fit', by: 'Cami', text: 'Empecé sola en un canal. Hoy tengo un grupo con el que armamos outfits cada viernes.', tags: ['#amistad', '#viernesdefit'], els: [mkEl({ type: 'image', src: 'assets/closet-jeans2.png', x: 50, y: 44, w: 60 }), mkEl({ type: 'text', text: 'VIERNES\nDE FIT', y: 84, size: 9, font: 'Stretch' })] }
];
const BAD = ['idiota', 'estúpid', 'estupid', 'asco', 'feo', 'fea', 'odio', 'basura', 'patétic'];
const SPEC = { imagen: 'Imagen personal', color: 'Colorimetría', vestuario: 'Vestuario', shopper: 'Personal shopper', estilismo: 'Outfits', urbana: 'Streetwear', tendencias: 'Tendencias', identidad: 'Identidad visual' };
const TONES = {
  photo: { bg: '#101418', solid: '#101418', fg: '#ffffff', cover: true, shade: 'linear-gradient(180deg, transparent 38%, rgba(5,6,8,0.9))' },
  dark: { bg: 'radial-gradient(circle at 70% 18%, oklch(0.42 0.2 27 / 0.55), transparent 58%), #0d0d10', solid: '#0d0d10', fg: '#ffffff', cover: true, shade: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85))' },
  light: { bg: '#e9e4d9', solid: '#e9e4d9', fg: '#121212', cover: false, shade: 'linear-gradient(180deg, transparent 50%, #e9e4d9 80%)' },
  light2: { bg: '#d4d1c9', solid: '#d4d1c9', fg: '#121212', cover: false, shade: 'linear-gradient(180deg, transparent 50%, #d4d1c9 80%)' },
  red: { bg: 'linear-gradient(160deg,#e5242d,#6e0d13)', solid: '#a5151c', fg: '#ffffff', cover: false, shade: 'linear-gradient(180deg, transparent 48%, rgba(60,5,9,0.88))' },
  dark2: { bg: '#1a1c21', solid: '#1a1c21', fg: '#ffffff', cover: false, shade: 'linear-gradient(180deg, transparent 50%, #1a1c21 84%)' }
};
// Perfiles de demostración: fotos y textos de ejemplo, reemplazables por los reales de cada asesor.
const ADV = [
  { id: 'laura', name: 'Laura M.', ini: 'LM', role: 'Estilista de imagen', st: 'En línea', tags: ['imagen', 'identidad', 'estilismo'], line: 'Tu imagen, editada.', bio: 'Trabajo contigo desde lo que ya tienes en el clóset. Construimos un estilo reconocible, cómodo y tuyo, sin copiar a nadie.', ph: 'assets/hero-portrait.png', pos: '50% 18%', tone: 'photo', rate: 4.9, nrev: 128, resp: 'Menos de 2 h',
    work: [['assets/closet-hoodie2.png', 'Capas oversized'], ['assets/closet-jacket.png', 'Cuero y denim'], ['assets/home-outfit.png', 'Negro con rojo'], ['assets/closet-jeans2.png', 'Base de clóset']],
    fits: [['Oversized en capas', 'assets/closet-hoodie2.png', 'Hoodie · Jeans · Tenis'], ['Negro con un toque rojo', 'assets/home-outfit.png', 'Chaqueta · Jeans · Botas'], ['Casual sin esfuerzo', 'assets/closet-camiseta.png', 'Camiseta · Short · Gorro']],
    ba: ['assets/closet-camiseta.png', 'assets/home-outfit.png', 'De básicos sueltos a un look con intención.'],
    exp: [['2024 – hoy', 'Estilista de imagen en KHAOS'], ['2021 – 2024', 'Estilismo para marcas independientes'], ['2019', 'Diplomado en asesoría de imagen']],
    svc: [['Asesoría de imagen completa', 'Análisis de estilo, clóset y 3 looks base · 60 min', 60], ['Armado de outfits', '5 looks con tus prendas · 40 min', 45], ['Revisión de clóset', 'Qué se queda y qué se dona · 45 min', 50]],
    rev: [['Sofi', 'Salí con 6 looks que nunca habría pensado con mi propia ropa.', 5], ['Dani', 'Muy clara, sin juicios y con mucha dirección.', 5], ['Cami', 'Rápida y con mucho ojo para las proporciones.', 4]] },
  { id: 'camilo', name: 'Camilo R.', ini: 'CR', role: 'Moda urbana y streetwear', st: 'Hoy 6 pm', tags: ['urbana', 'tendencias', 'estilismo'], line: 'Calle con intención.', bio: 'Streetwear sin disfraz: siluetas amplias, capas y piezas clave. Te ayudo a vestir urbano con criterio y con presupuesto real.', ph: 'assets/hero-model.png', pos: '50% 22%', tone: 'dark', rate: 4.8, nrev: 94, resp: 'Menos de 4 h',
    work: [['assets/closet-zip.png', 'Zip y cargo'], ['assets/closet-tenis3.png', 'Tenis protagonistas'], ['assets/closet-jeans.png', 'Denim ancho'], ['assets/closet-gorro.png', 'Gorro y capas']],
    fits: [['Cargo + hoodie', 'assets/closet-zip.png', 'Zip hoodie · Cargo · Tenis'], ['Total black', 'assets/closet-jacket.png', 'Chaqueta · Jeans · Gorro'], ['Lluvia urbana', 'assets/closet-tenis3.png', 'Tenis · Short · Camiseta']],
    ba: null,
    exp: [['2023 – hoy', 'Asesor de streetwear en KHAOS'], ['2020 – 2023', 'Stylist en una tienda de culturas urbanas'], ['2018', 'Curador de drops y colaboraciones']],
    svc: [['Look urbano completo', '3 outfits de calle con tus piezas · 45 min', 50], ['Sneakers y capas', 'Cómo combinar tenis y siluetas · 30 min', 35]],
    rev: [['Mateo', 'Entendí cómo usar lo oversized sin verme perdido.', 5], ['Juli', 'Me recomendó piezas que sí podía pagar.', 5]] },
  { id: 'valeria', name: 'Valeria S.', ini: 'VS', role: 'Colorimetría y armonía de colores', st: 'En línea', tags: ['color', 'imagen', 'vestuario'], line: 'Tu color, tu luz.', bio: 'Descubrimos qué tonos te favorecen y por qué. Armo tu paleta personal para que cada prenda que compres sume.', ph: 'assets/closet-camiseta.png', pos: '50% 10%', tone: 'light', rate: 5.0, nrev: 76, resp: 'Menos de 3 h', pal: ['#e5242d', '#f4efe6', '#2a2f3a', '#9aa3ad', '#8c1319'],
    work: [['assets/closet-camiseta.png', 'Paleta fría'], ['assets/closet-gafas.png', 'Acentos y accesorios'], ['assets/closet-jeans2.png', 'Neutros que suman'], ['assets/closet-hoodie2.png', 'Tonos tierra']],
    fits: [['Paleta fría invierno', 'assets/closet-camiseta.png', 'Azules · Grises · Rojo de acento'], ['Neutros con contraste', 'assets/closet-jeans2.png', 'Jeans · Blanco roto · Negro'], ['Acentos de color', 'assets/closet-gafas.png', 'Gafas · Gorro · Camiseta']],
    ba: null,
    exp: [['2022 – hoy', 'Colorista en KHAOS'], ['2019 – 2022', 'Estudio de armonía de color'], ['2018', 'Certificación en colorimetría personal']],
    svc: [['Análisis de paleta personal', 'Tonos que te favorecen y los que evitar · 50 min', 55], ['Color en tu clóset', 'Reorganiza tu ropa por armonía · 40 min', 40]],
    rev: [['Lu', 'Por fin entiendo por qué ciertos colores me apagaban.', 5], ['Nico', 'Mi clóset quedó coherente y me sirve todo.', 5]] },
  { id: 'andres', name: 'Andrés P.', ini: 'AP', role: 'Personal shopper', st: 'Mañana 10 am', tags: ['shopper', 'vestuario', 'tendencias'], line: 'Compra menos, elige mejor.', bio: 'Salgo de compras contigo, o por ti, con tu presupuesto y tu estilo. Piezas que duran y que combinan con todo.', ph: 'assets/closet-tenis3.png', pos: '50% 14%', tone: 'red', rate: 4.7, nrev: 63, resp: 'Menos de 6 h',
    work: [['assets/closet-tenis3.png', 'Tenis clave'], ['assets/closet-jacket.png', 'Chaqueta inversión'], ['assets/closet-short.png', 'Verano ligero'], ['assets/closet-tee2.png', 'Básicos premium']],
    fits: [['Cápsula de 10 piezas', 'assets/closet-tee2.png', 'Básicos · Capa · Tenis'], ['Entretiempo', 'assets/closet-jacket.png', 'Chaqueta · Jeans · Camiseta'], ['Fin de semana', 'assets/closet-short.png', 'Short · Camiseta · Tenis']],
    ba: null,
    exp: [['2022 – hoy', 'Personal shopper en KHAOS'], ['2019 – 2022', 'Asesor de ventas en moda multimarca'], ['2017', 'Compras para producciones de moda']],
    svc: [['Lista de compras a medida', 'Qué comprar y dónde, según tu presupuesto · 30 min', 35], ['Shopping acompañado', 'Salida virtual en vivo a tiendas · 60 min', 70]],
    rev: [['Esteban', 'Me ahorró plata y tiempo. Compré solo lo que uso.', 5], ['Vale', 'Súper claro con las marcas y los precios.', 4]] },
  { id: 'isabela', name: 'Isabela T.', ini: 'IT', role: 'Estilismo y creación de outfits', st: 'En línea', tags: ['estilismo', 'identidad', 'imagen'], line: 'Cada look, una historia.', bio: 'Creo outfits con narrativa: moodboards, combinaciones y variaciones para que tengas qué ponerte cada día sin repetirte.', ph: 'assets/fall-jacket.png', pos: '50% 12%', tone: 'light2', rate: 4.9, nrev: 112, resp: 'Menos de 3 h',
    work: [['assets/fall-jacket.png', 'Otoño en capas'], ['assets/fall-pants.png', 'Pantalón protagonista'], ['assets/home-outfit.png', 'Look completo'], ['assets/closet-hoodie.png', 'Hoodie reinventado']],
    fits: [['Moodboard otoño', 'assets/fall-jacket.png', 'Chaqueta · Pantalón · Botas'], ['Un hoodie, 3 formas', 'assets/closet-hoodie.png', 'Hoodie · Jeans · Gorro'], ['Look de noche', 'assets/home-outfit.png', 'Negro · Rojo · Denim']],
    ba: ['assets/closet-tee2.png', 'assets/fall-jacket.png', 'La misma base, estilizada en capas.'],
    exp: [['2023 – hoy', 'Estilista de outfits en KHAOS'], ['2020 – 2023', 'Asistente de estilismo editorial'], ['2019', 'Curso de styling y dirección de arte']],
    svc: [['Moodboard + 5 outfits', 'Referencias y looks con tu ropa · 50 min', 55], ['Outfit para un evento', 'Un look pensado desde cero · 30 min', 35]],
    rev: [['Cata', 'Los moodboards me inspiraron muchísimo.', 5], ['Tomás', 'Armó variaciones de una sola chaqueta. Genial.', 5]] },
  { id: 'mateo', name: 'Mateo G.', ini: 'MG', role: 'Asesor de tendencias', st: 'Hoy 8 pm', tags: ['tendencias', 'urbana', 'identidad'], line: 'Lo que viene, a tu manera.', bio: 'Sigo la moda de cerca para traducirla a tu estilo. Sin modas pasajeras: tendencias que sí van contigo.', ph: 'assets/closet-jacket.png', pos: '50% 12%', tone: 'dark2', rate: 4.8, nrev: 58, resp: 'Menos de 5 h',
    work: [['assets/closet-jacket.png', 'Cuero 2026'], ['assets/closet-zip.png', 'Siluetas amplias'], ['assets/closet-tenis2.png', 'Calzado en alza'], ['assets/closet-gafas.png', 'Accesorios tendencia']],
    fits: [['Tendencias de temporada', 'assets/closet-jacket.png', 'Cuero · Denim · Botas'], ['Tech casual', 'assets/closet-zip.png', 'Zip · Cargo · Tenis'], ['Detalles que marcan', 'assets/closet-gafas.png', 'Gafas · Gorro · Capas']],
    ba: null,
    exp: [['2024 – hoy', 'Asesor de tendencias en KHAOS'], ['2021 – 2024', 'Investigador de tendencias en un medio de moda'], ['2020', 'Curaduría de desfiles y colecciones']],
    svc: [['Reporte de tendencias para ti', 'Qué sí y qué no según tu estilo · 40 min', 45], ['Renueva tu look', 'Actualiza 3 prendas clave · 30 min', 35]],
    rev: [['Anto', 'Me explicó qué tendencias valen la pena. Cero humo.', 5], ['Rafa', 'Muy buen ojo para lo que viene.', 4]] }
];
class Component extends DCLogic {
  splashRef = React.createRef();
  splashGyro = (e) => { e.stopPropagation(); this.askMotion(); };
  splashGo = () => {
    this.askMotion();
    let seen = false; try { seen = localStorage.getItem('khOnbSeen') === '1'; localStorage.setItem('khOnbSeen', '1'); } catch (e) {}
    this.setState({ splashOut: true });
    setTimeout(() => this.setState({ screen: seen ? 'reg' : 'onb', splashOut: false }), 450);
  };
  // Sensores de movimiento: pide permiso donde el sistema lo exige (iOS) y escucha acelerómetro + giroscopio.
  askMotion = () => {
    if (this._motionOn) return;
    const DM = window.DeviceMotionEvent, DO = window.DeviceOrientationEvent;
    const on = () => { if (this._motionOn) return; this._motionOn = true; window.addEventListener('devicemotion', this.onMotion); window.addEventListener('deviceorientation', this.onTilt); this.setState({ gyro: true }); };
    const req = DM && typeof DM.requestPermission === 'function' ? DM : (DO && typeof DO.requestPermission === 'function' ? DO : null);
    try { if (req) req.requestPermission().then(r => { if (r === 'granted') on(); }).catch(() => {}); else if (DM || DO) on(); } catch (e) {}
  };
  // Detecta sacudidas: umbral de sensibilidad para ignorar vibraciones pequeñas; la fuerza escala con la intensidad.
  onMotion = (e) => {
    const S = this._sp; if (!S || !S.kick) return;
    const a = e.acceleration && e.acceleration.x != null ? e.acceleration : null, g = e.accelerationIncludingGravity;
    let m = 0;
    if (a) m = Math.hypot(a.x, a.y, a.z);
    else if (g && g.x != null) m = Math.abs(Math.hypot(g.x, g.y, g.z) - 9.81);
    const r = e.rotationRate;
    if (r && r.alpha != null) m = Math.max(m, Math.hypot(r.alpha, r.beta, r.gamma) / 20);
    if (!m) return;
    S.sensor = true;
    if (m > S.thr) S.kick(0.3 + Math.min(1, (m - S.thr) / 24) * 1.2);
  };
  startSplash = () => {
    const S = this._sp = { n: 0, tx: 0, ty: 0, sx: 0, sy: 0, raf: 0, w: 0, h: 0, font: false, gyro: false, sensor: false, thr: 11, mode: 0, regrouped: true, lastShake: 0, lastKick: 0, last: 0, t0: 0, cv: null, sc: 1, lm: null };
    const fin = () => { S.font = true; S.w = 0; };
    try { document.fonts.load("800 100px 'Stretch Pro'").then(fin, fin); } catch (e) { fin(); }
    setTimeout(fin, 1500);
    const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
    // Reinicia la entrada: las partículas aparecen poco a poco y convergen hacia el logotipo.
    const reset = () => {
      const now = performance.now(), n = S.n; S.t0 = now; S.mode = 0; S.regrouped = true; S.last = now;
      for (let i = 0; i < n; i++) {
        const ang = Math.random() * 6.2832, rad = (0.25 + Math.random() * 0.75) * Math.max(S.w, S.h) * 0.6;
        S.X[i] = S.w / 2 + Math.cos(ang) * rad; S.Y[i] = S.h * 0.42 + Math.sin(ang) * rad;
        S.VX[i] = (Math.random() - 0.5) * 10; S.VY[i] = (Math.random() - 0.5) * 10; S.PZ[i] = (Math.random() - 0.5) * 1.2; S.VZ[i] = 0;
        S.BI[i] = Math.random() * 1500; S.RT[i] = now + 350 + S.RD[i] * 1500;
      }
    };
    S.kick = (force) => {
      const now = performance.now(); if (!S.cv || !S.n || now - S.lastKick < 80) return;
      S.lastKick = now; S.lastShake = now; S.mode = 1; S.regrouped = false;
      const cx = S.w / 2, cy = S.h * 0.42, sc = S.sc, Vm = 46 * sc;
      for (let i = 0; i < S.n; i++) {
        const dx = S.X[i] - cx, dy = S.Y[i] - cy, d = Math.hypot(dx, dy) || 1, ang = Math.random() * 6.2832, rn = Math.random();
        const sp = force * (2 + rn * rn * 26) * (0.5 + S.Z[i] * 0.6) * sc;
        S.VX[i] = clamp(S.VX[i] + (dx / d * 0.5 + Math.cos(ang) * 0.9) * sp, -Vm, Vm);
        S.VY[i] = clamp(S.VY[i] + (dy / d * 0.5 + Math.sin(ang) * 0.9) * sp, -Vm, Vm);
        S.VZ[i] += (Math.random() * 2 - 1) * 0.016 * force;
        S.RT[i] = Infinity;
      }
    };
    // Sin sensores (escritorio): un movimiento muy brusco del cursor sobre el splash hace de sacudida; el cursor suave solo da paralaje.
    S.mm = (e) => {
      const now = performance.now(), lm = S.lm; S.lm = { x: e.clientX, y: e.clientY, t: now };
      if (lm && !S.sensor && S.cv) { const v = Math.hypot(e.clientX - lm.x, e.clientY - lm.y) / Math.max(1, now - lm.t), r = S.cv.getBoundingClientRect(); if (v > 3.2 && e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom) S.kick(Math.min(1.1, 0.25 + (v - 3.2) / 5)); }
      if (S.gyro) return; S.tx = (e.clientX / window.innerWidth - 0.5) * 2; S.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', S.mm);
    const build = (w, h) => {
      const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d');
      const fam = "800 100px 'Stretch Pro','Helvetica Neue',Helvetica,Arial,sans-serif"; x.font = fam;
      const tw = x.measureText('KHAOS').width, fs = 100 * (w * 0.84) / tw; x.font = fam.replace('100px', fs + 'px');
      x.textBaseline = 'middle'; const wA = x.measureText('KHAO').width, wAll = x.measureText('KHAOS').width, x0 = (w - wAll) / 2, cy = h * 0.42;
      x.fillStyle = '#fff'; x.fillText('KHAO', x0, cy); x.fillStyle = '#e5242d'; x.fillText('S', x0 + wA, cy);
      const d = x.getImageData(0, 0, w, h).data, MAX = (navigator.hardwareConcurrency || 8) <= 4 ? 2400 : 3600;
      let gap = Math.max(2, Math.round(w / 175)), pts;
      for (;;) {
        pts = [];
        for (let yy = 0; yy < h; yy += gap) for (let xx = 0; xx < w; xx += gap) { const q = (yy * w + xx) * 4, a = d[q + 3]; if (a > 40) pts.push(xx, yy, a, d[q] < 200 || d[q + 1] > 120 ? 0 : 1); }
        if (pts.length / 4 <= MAX || gap > 9) break; gap++;
      }
      const n = pts.length / 4, F = (k) => new Float32Array(k);
      S.n = n; S.w = w; S.h = h; S.sc = w / 390; S.X = F(n); S.Y = F(n); S.VX = F(n); S.VY = F(n); S.PZ = F(n); S.VZ = F(n);
      S.HX = F(n); S.HY = F(n); S.Z = F(n); S.A = F(n); S.RD = F(n); S.BI = F(n); S.RT = F(n); S.PH = F(n); S.SZ = F(n); S.RED = new Uint8Array(n);
      S.DX = F(n); S.DY = F(n); S.DS = F(n); S.DA = F(n);
      const sz = 0.8 + gap * 0.18;
      for (let i = 0; i < n; i++) {
        S.HX[i] = pts[i * 4]; S.HY[i] = pts[i * 4 + 1]; S.A[i] = pts[i * 4 + 2] / 255; S.RED[i] = pts[i * 4 + 3];
        S.Z[i] = 0.4 + Math.random() * 0.9; S.RD[i] = Math.random(); S.PH[i] = Math.random() * 6.2832; S.SZ[i] = (0.9 + S.Z[i] * 0.8) * sz;
      }
      reset();
    };
    const loop = () => {
      const cv = this.splashRef.current;
      if (cv && cv.clientWidth) {
        const dpr = Math.min(2, window.devicePixelRatio || 1), w = Math.round(cv.clientWidth), h = Math.round(cv.clientHeight);
        if (cv.width !== w * dpr) { cv.width = w * dpr; cv.height = h * dpr; }
        if (S.font && (S.w !== w || S.h !== h)) build(w, h);
        if (cv !== S.cv) { S.cv = cv; if (S.n) reset(); }
        const x = cv.getContext('2d'); x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, w, h);
        const n = S.n;
        if (n) {
          const now = performance.now(), f = Math.min(3, (now - S.last) / 16.667); S.last = now;
          const t = (now - S.t0) / 1000, sc = S.sc, cx = w / 2, cy = h * 0.42, Vm = 46 * sc;
          const ease = 1 - Math.pow(0.92, f); S.sx += (S.tx - S.sx) * ease; S.sy += (S.ty - S.sy) * ease;
          // Calma: tras un instante quieto el movimiento se apaga; tras un momento de estabilidad, vuelven a su sitio escalonadamente.
          const idle = now - S.lastShake;
          if (S.mode === 1) {
            if (!S.regrouped && idle > 1500) { S.regrouped = true; for (let i = 0; i < n; i++) S.RT[i] = now + S.RD[i] * 1000; }
            if (S.regrouped && idle > 6200) S.mode = 0;
          }
          const dragFree = S.mode === 1 ? (idle > 650 ? 0.935 : 0.987) : 0.975;
          const lo = -30, hiX = w + 30, hiY = h + 30;
          for (let i = 0; i < n; i++) {
            const q = clamp((now - S.RT[i]) / 1700, 0, 1), q2 = q * q * (3 - 2 * q), z = S.Z[i], ph = S.PH[i];
            const k = 0.07 * q2, sw = 0.0045 * Math.sin(3.1416 * q), amp = 0.05 * (1 - q2) * sc;
            const gx = S.HX[i] + S.sx * z * 26 + Math.sin(t * 0.9 + ph) * 1.1 * z, gy = S.HY[i] + S.sy * z * 26 + Math.cos(t * 0.75 + ph * 1.3) * 1.1 * z;
            let px = S.X[i], py = S.Y[i], vx = S.VX[i], vy = S.VY[i];
            const dx = gx - px, dy = gy - py;
            vx += (dx * k - dy * sw + Math.sin(py * 0.011 + t * 0.8 + ph) * amp) * f;
            vy += (dy * k + dx * sw + Math.cos(px * 0.011 + t * 0.7 + ph) * amp) * f;
            const dg = 1 - (1 - (dragFree + (0.84 - dragFree) * q2)) * f; vx *= dg; vy *= dg;
            vx = clamp(vx, -Vm, Vm); vy = clamp(vy, -Vm, Vm);
            px += vx * f; py += vy * f;
            if (px < lo) { px = lo; vx = -vx * 0.6; } else if (px > hiX) { px = hiX; vx = -vx * 0.6; }
            if (py < lo) { py = lo; vy = -vy * 0.6; } else if (py > hiY) { py = hiY; vy = -vy * 0.6; }
            // Profundidad: z de cada partícula (pz) la acerca o aleja de la cámara durante la dispersión.
            let pz = S.PZ[i], vz = S.VZ[i];
            vz = (vz - pz * 0.06 * q2 * f) * (1 - (1 - (0.985 - 0.145 * q2)) * f); pz += vz * f;
            if (pz > 1.6) { pz = 1.6; vz = -vz * 0.5; } else if (pz < -1.2) { pz = -1.2; vz = -vz * 0.5; }
            S.X[i] = px; S.Y[i] = py; S.VX[i] = vx; S.VY[i] = vy; S.PZ[i] = pz; S.VZ[i] = vz;
            const pr = 1 + pz * 0.3, ab = clamp((now - S.t0 - S.BI[i]) / 700, 0, 1), far = pz < 0 ? 0.5 + 0.5 * clamp(1 + pz, 0, 1) : 1;
            S.DX[i] = cx + (px - cx) * pr; S.DY[i] = cy + (py - cy) * pr;
            S.DS[i] = Math.max(0.5, S.SZ[i] * (1 + pz * 0.85));
            S.DA[i] = S.A[i] * (0.55 + z * 0.4) * ab * far * (0.92 + 0.08 * Math.sin(t * 1.6 + ph));
          }
          for (let pass = 0; pass < 2; pass++) {
            x.fillStyle = pass ? '#e5242d' : '#ffffff';
            for (let i = 0; i < n; i++) { if (S.RED[i] !== pass || S.DA[i] < 0.02) continue; const s = S.DS[i]; x.globalAlpha = S.DA[i]; x.fillRect(S.DX[i] - s / 2, S.DY[i] - s / 2, s, s); }
          }
          x.globalAlpha = 1;
        }
      } else S.cv = null;
      S.raf = requestAnimationFrame(loop);
    };
    S.raf = requestAnimationFrame(loop);
  };
  advRef = React.createRef();
  advTop = () => { const e = this.advRef.current; if (e) e.scrollTop = 0; };
  advVals = (s) => {
    const norm = (x) => x.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const money = (n) => '$' + n + '.000';
    const byId = (id) => ADV.find(x => x.id === id);
    const STR = "'Stretch Pro','Helvetica Neue',Arial,sans-serif";
    const A = s.advView && s.advView !== 'cmp' ? byId(s.advView) : null;
    const isCmp = s.advView === 'cmp' && s.advCmp.length === 2;
    const isList = !A && !isCmp;
    const bump = (p, tags, n) => { const o = { ...p }; tags.forEach(t => { o[t] = (o[t] || 0) + n; }); return o; };
    const top = () => setTimeout(this.advTop, 0);
    const goList = () => { this.setState({ advView: null, advPrev: null }); top(); };
    const open = (id) => () => { this.setState(st => ({ advView: id, advSvc: null, advBA: 50, advPrev: null, advPref: bump(st.advPref, byId(id).tags, 1) })); top(); };
    const favTog = (id) => () => this.setState(st => { const on = !st.advFav[id]; return { advFav: { ...st.advFav, [id]: on }, advPref: on ? bump(st.advPref, byId(id).tags, 2) : st.advPref }; });
    const cmpTog = (id) => () => this.setState(st => ({ advCmp: st.advCmp.includes(id) ? st.advCmp.filter(x => x !== id) : [...st.advCmp, id].slice(-2) }));
    const request = (i, svc) => () => this.setState({ advReq: i, advReqSvc: svc == null ? null : svc });
    const glassBtn = (a, T, right, on, onBg, onCol) => ({ position: 'absolute', top: '6px', right: right + 'px', width: '44px', height: '44px', borderRadius: '50%', border: 'none', cursor: 'pointer', fontSize: '17px', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3, backdropFilter: 'blur(8px)', background: on ? onBg : (T.fg === '#ffffff' ? 'oklch(0 0 0 / 0.4)' : 'oklch(1 0 0 / 0.6)'), color: on ? onCol : T.fg });

    // ---- Lista / exploración ----
    const q = norm(s.advQ.trim());
    const hay = (a) => norm([a.name, a.role, a.line, a.bio, ...a.tags.map(t => SPEC[t])].join(' '));
    const res = ADV.filter(a => (!s.advF || a.tags.includes(s.advF)) && (!s.advFavOnly || s.advFav[a.id]) && (!q || hay(a).includes(q)));
    const plain = !s.advF && !q && !s.advFavOnly;
    const featA = plain ? res[0] : null, rest = plain ? res.slice(1) : res;
    const favCount = Object.keys(s.advFav).filter(k => s.advFav[k]).length;
    const mkCard = (a, i, ar, big) => {
      const T = TONES[a.tone], fav = !!s.advFav[a.id], cmp = s.advCmp.includes(a.id), dark = T.fg === '#ffffff';
      const rad = big ? '34px 34px 34px 90px' : ['22px', '22px 22px 22px 60px', '60px 22px 22px 22px'][i % 3];
      return {
        id: a.id, label: 'Ver perfil de ' + a.name, name: a.name.toUpperCase(), kicker: SPEC[a.tags[0]], role: a.role, line: a.line, rate: a.rate.toFixed(1), status: a.st,
        starCol: T.fg === '#ffffff' && a.tone !== 'red' ? '#ff5a62' : (a.tone === 'red' ? '#ffffff' : '#c4161e'),
        hasPal: !!a.pal, pal: (a.pal || []).map(c => ({ style: { width: '13px', height: '13px', borderRadius: '50%', background: c, border: '1px solid oklch(0.5 0 0 / 0.5)' } })),
        cardStyle: { position: 'relative', breakInside: 'avoid', marginBottom: big ? '0' : '12px', aspectRatio: ar, borderRadius: rad, overflow: 'hidden', background: T.bg, color: T.fg, border: '1px solid oklch(1 0 0 / 0.14)', boxShadow: '0 14px 34px oklch(0 0 0 / 0.35)', animation: 'khIn .6s cubic-bezier(.2,.8,.2,1) both', animationDelay: (i * 80) + 'ms' },
        phStyle: { position: 'absolute', inset: 0, backgroundImage: 'url(' + rs(a.ph) + ')', backgroundSize: T.cover ? 'cover' : (big ? 'auto 70%' : 'auto 62%'), backgroundPosition: a.pos, backgroundRepeat: 'no-repeat', transition: 'transform .9s cubic-bezier(.2,.8,.2,1)' },
        shadeStyle: { position: 'absolute', inset: 0, background: T.shade, pointerEvents: 'none' },
        nameStyle: { fontFamily: STR, fontWeight: 800, fontSize: big ? '28px' : '14px', lineHeight: 1.02, letterSpacing: '-0.01em' },
        open: open(a.id), favGo: favTog(a.id), cmpGo: cmpTog(a.id),
        favGlyph: fav ? '♥' : '♡', favLabel: fav ? 'Quitar a ' + a.name + ' de favoritos' : 'Guardar a ' + a.name + ' en favoritos', favP: fav ? 'true' : 'false',
        cmpLabel: cmp ? 'Quitar a ' + a.name + ' de la comparación' : 'Comparar a ' + a.name, cmpP: cmp ? 'true' : 'false',
        favStyle: glassBtn(a, T, 6, fav, '#e5242d', '#ffffff'), cmpStyle: glassBtn(a, T, 54, cmp, dark ? '#ffffff' : '#121212', dark ? '#121212' : '#ffffff')
      };
    };
    const ARS = ['3/4.2', '3/3.5', '1/1.2', '3/4.5', '3/3.3', '1/1.05'];
    const cards = rest.map((a, i) => mkCard(a, i + 1, ARS[i % ARS.length], false));
    const feat = featA ? mkCard(featA, 0, '4/4.7', true) : { name: '', cardStyle: {}, phStyle: {}, shadeStyle: {}, nameStyle: {}, favStyle: {}, cmpStyle: {}, pal: [] };
    const chipStyle = (on) => ({ flex: 'none', minHeight: '44px', padding: '0 16px', borderRadius: '22px', fontSize: '12.5px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', color: on ? '#ffffff' : 'oklch(0.88 0.005 250)', background: on ? 'oklch(0.5 0.21 27)' : 'oklch(1 0 0 / 0.07)', border: on ? '1px solid oklch(0.7 0.2 27)' : '1px solid oklch(1 0 0 / 0.16)' });
    const chips = [{ label: 'Todos', on: !s.advF && !s.advFavOnly, go: () => this.setState({ advF: '', advFavOnly: false }) },
      { label: '♥ Favoritos' + (favCount ? ' (' + favCount + ')' : ''), on: s.advFavOnly, go: () => this.setState(st => ({ advFavOnly: !st.advFavOnly, advF: '' })) },
      ...Object.keys(SPEC).map(k => ({ label: SPEC[k], on: s.advF === k, go: () => this.setState(st => ({ advF: st.advF === k ? '' : k, advFavOnly: false, advPref: st.advF === k ? st.advPref : bump(st.advPref, [k], 1) })) }))
    ].map(c => ({ label: c.label, go: c.go, p: c.on ? 'true' : 'false', style: chipStyle(c.on) }));
    const score = (a) => a.tags.reduce((n, t) => n + (s.advPref[t] || 0), 0);
    const prefKeys = Object.keys(s.advPref).filter(k => s.advPref[k] > 0).sort((x, y) => s.advPref[y] - s.advPref[x]);
    const topTag = prefKeys[0];
    const recs = [...ADV].sort((x, y) => score(y) - score(x) || y.rate - x.rate).slice(0, 4).map(a => { const T = TONES[a.tone]; return { name: a.name, open: open(a.id), why: topTag ? (a.tags.includes(topTag) ? 'Porque te interesa ' + SPEC[topTag].toLowerCase() : 'Combina con tu estilo') : a.line, thumb: { width: '52px', height: '52px', flex: 'none', borderRadius: '50%', backgroundColor: T.solid, backgroundImage: 'url(' + rs(a.ph) + ')', backgroundSize: T.cover ? '170%' : 'auto 82%', backgroundPosition: T.cover ? '50% 12%' : 'center', backgroundRepeat: 'no-repeat', border: '1px solid oklch(1 0 0 / 0.3)' } }; });
    const unit = Object.keys(SPEC).map(k => SPEC[k].toUpperCase()).join('  ✦  ') + '  ✦  ';

    // ---- Perfil ----
    let P = { name: '', role: '', tags: [], svc: [], work: [], fits: [], exp: [], rev: [], palette: [] };
    let pv = { open: false, imgStyle: {}, boxStyle: {} };
    if (A) {
      const T = TONES[A.tone], idx = ADV.indexOf(A), fav = !!s.advFav[A.id], cmp = s.advCmp.includes(A.id), sent = s.advReq === idx;
      const svcSel = s.advSvc != null ? A.svc[s.advSvc] : null;
      const tileBg = ['#e9e4d9', '#1a1c21', '#d4d1c9', 'linear-gradient(160deg,#e5242d,#6e0d13)'];
      const tileSpan = [true, false, false, true], tileAr = ['16/9.5', '4/5', '4/5', '16/7.5'], tileRad = ['26px', '26px 26px 26px 64px', '64px 26px 26px 26px', '26px'];
      const stars = (n) => '★★★★★'.slice(0, n) + '☆☆☆☆☆'.slice(0, 5 - n);
      const ba = A.ba;
      P = {
        name: A.name.toUpperCase(), role: A.role, line: A.line, bio: A.bio, status: A.st, dot: A.st === 'En línea' ? 'oklch(0.8 0.17 150)' : 'oklch(0.7 0.01 250)', resp: A.resp,
        ratingTxt: A.rate.toFixed(1) + ' · ' + A.nrev + ' opiniones', fromTxt: 'Desde ' + money(Math.min(...A.svc.map(v => v[2]))),
        heroStyle: { position: 'relative', margin: '0 22px', borderRadius: '34px 34px 34px 90px', overflow: 'hidden', aspectRatio: '4/5', background: T.bg, color: T.fg, border: '1px solid oklch(1 0 0 / 0.14)', boxShadow: '0 20px 50px oklch(0 0 0 / 0.45)' },
        heroPh: { position: 'absolute', inset: 0, backgroundImage: 'url(' + rs(A.ph) + ')', backgroundSize: T.cover ? 'cover' : 'auto 72%', backgroundPosition: A.pos, backgroundRepeat: 'no-repeat', animation: 'khLogo .9s cubic-bezier(.2,.8,.2,1) both' },
        heroShade: { position: 'absolute', inset: 0, background: T.shade, pointerEvents: 'none' },
        heroText: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px 20px 22px', display: 'grid', gap: '8px', color: T.fg },
        tags: A.tags.map(t => ({ label: SPEC[t] })),
        hasPal: !!A.pal, palette: (A.pal || []).map(c => ({ style: { width: '34px', height: '34px', borderRadius: '50%', background: c, border: '1px solid oklch(1 0 0 / 0.35)' } })),
        favGo: favTog(A.id), favGlyph: fav ? '♥' : '♡', favLabel: fav ? 'Quitar de favoritos' : 'Guardar en favoritos', favP: fav ? 'true' : 'false',
        favStyle: { width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', color: fav ? '#ffffff' : 'oklch(0.95 0 0)', background: fav ? '#e5242d' : 'oklch(1 0 0 / 0.1)', border: '1px solid oklch(1 0 0 / 0.25)' },
        cmpGo: cmpTog(A.id), cmpLabel: cmp ? 'Quitar de la comparación' : 'Añadir a comparar', cmpP: cmp ? 'true' : 'false',
        cmpStyle: { height: '44px', padding: '0 16px', borderRadius: '22px', cursor: 'pointer', fontSize: '12.5px', fontWeight: 700, color: cmp ? '#121212' : 'oklch(0.95 0 0)', background: cmp ? '#ffffff' : 'oklch(1 0 0 / 0.1)', border: '1px solid oklch(1 0 0 / 0.25)' },
        cmpTxt: cmp ? '⇄ En comparación' : '⇄ Comparar',
        svc: A.svc.map((v, k) => { const on = s.advSvc === k; return { n: v[0], d: v[1], price: money(v[2]), on, p: on ? 'true' : 'false', go: () => this.setState({ advSvc: on ? null : k }), style: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', alignItems: 'center', gap: '12px', textAlign: 'left', padding: '14px 16px', borderRadius: '20px', cursor: 'pointer', color: 'inherit', background: on ? 'oklch(0.5 0.21 27 / 0.28)' : 'oklch(1 0 0 / 0.06)', border: on ? '1px solid oklch(0.7 0.2 27)' : '1px solid oklch(1 0 0 / 0.14)' }, mark: on ? '●' : '○' }; }),
        work: A.work.map((w, k) => ({ cap: w[1], aria: 'Ver ' + w[1], open: () => this.setState({ advPrev: { k: 'w', i: k } }),
          style: { position: 'relative', overflow: 'hidden', padding: 0, cursor: 'pointer', gridColumn: tileSpan[k] ? 'span 2' : 'auto', aspectRatio: tileAr[k], borderRadius: tileRad[k], background: tileBg[k], border: '1px solid oklch(1 0 0 / 0.14)', display: 'block' },
          ph: { position: 'absolute', inset: 0, backgroundImage: 'url(' + rs(w[0]) + ')', backgroundSize: 'auto 82%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', transition: 'transform .7s cubic-bezier(.2,.8,.2,1)' } })),
        fits: A.fits.map((f, k) => ({ t: f[0], pcs: f[2], open: () => this.setState({ advPrev: { k: 'f', i: k } }),
          imgBox: { position: 'relative', display: 'block', overflow: 'hidden', aspectRatio: '1/1.08', background: tileBg[(k + 2) % 3] },
          ph: { position: 'absolute', inset: 0, backgroundImage: 'url(' + rs(f[1]) + ')', backgroundSize: 'auto 84%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', transition: 'transform .7s cubic-bezier(.2,.8,.2,1)' } })),
        hasBA: !!ba, baNote: ba ? ba[2] : '', baVal: s.advBA, onBA: (e) => this.setState({ advBA: +e.target.value }),
        baAfter: ba ? { position: 'absolute', inset: 0, backgroundColor: '#d4d1c9', backgroundImage: 'url(' + rs(ba[1]) + ')', backgroundSize: 'auto 86%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {},
        baBefore: ba ? { position: 'absolute', inset: 0, backgroundColor: '#b9b5ab', backgroundImage: 'url(' + rs(ba[0]) + ')', backgroundSize: 'auto 86%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', clipPath: 'inset(0 ' + (100 - s.advBA) + '% 0 0)' } : {},
        baLine: { position: 'absolute', top: 0, bottom: 0, left: s.advBA + '%', width: '2px', marginLeft: '-1px', background: '#e5242d', pointerEvents: 'none' },
        exp: A.exp.map(e => ({ y: e[0], t: e[1] })),
        rev: A.rev.map(r => ({ by: r[0], t: r[1], stars: stars(r[2]) })),
        sent, ctaLabel: sent ? 'Solicitud enviada ✓' : (svcSel ? 'Solicitar · ' + svcSel[0] : 'Solicitar asesoría'),
        ctaGo: request(idx, s.advSvc),
        ctaStyle: { width: '100%', minHeight: '54px', borderRadius: '27px', fontSize: '14px', fontWeight: 800, letterSpacing: '0.02em', cursor: 'pointer', color: sent ? '#121212' : '#ffffff', background: sent ? 'oklch(0.9 0.05 235)' : '#e5242d', border: '1px solid oklch(1 0 0 / 0.25)', boxShadow: sent ? 'none' : '0 10px 30px oklch(0.5 0.21 27 / 0.55)' },
        sentText: sent ? 'Listo. ' + A.name.split(' ')[0] + ' te escribirá en menos de 24 horas para acordar la sesión' + (s.advReqSvc != null ? ' (' + A.svc[s.advReqSvc][0] + ')' : '') + '.' : ''
      };
      if (s.advPrev) {
        const k = s.advPrev.k, L = k === 'w' ? A.work : A.fits, n = L.length, i = ((s.advPrev.i % n) + n) % n, it = L[i];
        pv = { open: true, count: (i + 1) + ' / ' + n, title: k === 'w' ? it[1] : it[0], sub: k === 'w' ? 'Trabajo de ' + A.name : it[2],
          boxStyle: { flex: 1, minHeight: 0, position: 'relative', margin: '0 22px', borderRadius: '28px', overflow: 'hidden', background: '#d4d1c9', animation: 'khPop2 .35s ease both' },
          imgStyle: { position: 'absolute', inset: 0, backgroundImage: 'url(' + rs(k === 'w' ? it[0] : it[1]) + ')', backgroundSize: 'auto 88%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' },
          close: () => this.setState({ advPrev: null }), prev: () => this.setState({ advPrev: { k, i: i - 1 } }), next: () => this.setState({ advPrev: { k, i: i + 1 } }),
          ask: () => { this.setState({ advReq: idx, advReqSvc: null, advPrev: null }); } };
      }
    }

    // ---- Comparar ----
    let CMP = { head: [], rows: [], fits: [] };
    if (isCmp) {
      const C = s.advCmp.map(byId), side = (fn) => ({ a: fn(C[0]), b: fn(C[1]) });
      CMP = {
        head: C.map(a => { const T = TONES[a.tone]; return { name: a.name.toUpperCase(), role: a.role, open: open(a.id), drop: cmpTog(a.id), aria: 'Ver perfil de ' + a.name, st: { position: 'relative', display: 'block', width: '100%', aspectRatio: '3/3.8', padding: 0, cursor: 'pointer', overflow: 'hidden', borderRadius: '24px', color: T.fg, background: T.bg, border: '1px solid oklch(1 0 0 / 0.14)' },
          ph: { position: 'absolute', inset: 0, backgroundImage: 'url(' + rs(a.ph) + ')', backgroundSize: T.cover ? 'cover' : 'auto 66%', backgroundPosition: a.pos, backgroundRepeat: 'no-repeat' }, shade: { position: 'absolute', inset: 0, background: T.shade }, ini: a.ini }; }),
        rows: [['Especialidades', (a) => a.tags.map(t => SPEC[t]).join(' · ')], ['Desde', (a) => money(Math.min(...a.svc.map(v => v[2])))], ['Valoración', (a) => '★ ' + a.rate.toFixed(1) + ' (' + a.nrev + ')'], ['Responde', (a) => a.resp], ['Disponibilidad', (a) => a.st]].map(([label, fn]) => ({ label, ...side(fn) })),
        fits: [0, 1, 2].map(k => { const f = (a) => ({ t: a.fits[k][0], ph: { position: 'absolute', inset: 0, backgroundImage: 'url(' + rs(a.fits[k][1]) + ')', backgroundSize: 'auto 84%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } }); return { n: k + 1, ...side(f) }; }),
        ctas: C.map(a => ({ label: 'Ver perfil de ' + a.name.split(' ')[0], go: open(a.id) }))
      };
    }
    const tray = { show: isList && s.advCmp.length > 0, text: s.advCmp.length === 2 ? 'Listos para comparar' : 'Elige otro asesor para comparar', names: s.advCmp.map(id => byId(id).ini).join(' · '), clear: () => this.setState({ advCmp: [] }), go: () => { if (s.advCmp.length === 2) { this.setState({ advView: 'cmp' }); top(); } }, btn: { minHeight: '44px', padding: '0 16px', borderRadius: '22px', fontSize: '12.5px', fontWeight: 800, cursor: s.advCmp.length === 2 ? 'pointer' : 'default', color: s.advCmp.length === 2 ? '#ffffff' : 'oklch(0.7 0.01 250)', background: s.advCmp.length === 2 ? '#e5242d' : 'oklch(1 0 0 / 0.08)', border: '1px solid oklch(1 0 0 / 0.2)' } };

    return {
      isAdvList: isList, isAdvProf: !!A, isAdvCmp: isCmp, advRef: this.advRef, goAdvList: goList,
      ticker: unit.repeat(4), chips, recs, recTitle: topTag ? 'Para ti · según lo que exploras' : 'Para empezar', showRecs: plain,
      showFeat: !!featA, feat, cards, noRes: res.length === 0, advQ: s.advQ, onAdvQ: (e) => this.setState({ advQ: e.target.value.slice(0, 40) }),
      resCount: res.length === 1 ? '1 asesor' : res.length + ' asesores', clearAdv: () => this.setState({ advQ: '', advF: '', advFavOnly: false }),
      P, pv, cmp: CMP, tray
    };
  };
  edRef = React.createRef();
  edFileRef = React.createRef();
  edPickFile = () => { const f = this.edFileRef.current; if (f) { f.value = ''; f.click(); } };
  edFile = (e) => { const f = e.target.files && e.target.files[0]; if (!f) return; const rd = new FileReader(); rd.onload = () => { const im = new Image(); im.onload = () => { const k = Math.min(1, 640 / Math.max(im.naturalWidth, im.naturalHeight)), c = document.createElement('canvas'); c.width = Math.round(im.naturalWidth * k); c.height = Math.round(im.naturalHeight * k); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); this.edAdd({ type: 'image', src: c.toDataURL('image/jpeg', 0.85), w: 60 }); }; im.src = rd.result; }; rd.readAsDataURL(f); };
  edAdd = (o) => { const el = mkEl(o); this.setState(st => ({ edEls: [...st.edEls, el], edSel: el.id, edTab: 'edit', edTarget: 'fill', edHsv: hexToHsv(el.fill) })); };
  edUpd = (patch) => this.setState(st => ({ edEls: st.edEls.map(x => x.id === st.edSel ? { ...x, ...patch } : x) }));
  edDown = (id) => (ev) => {
    ev.stopPropagation(); const cv = this.edRef.current; if (!cv) return; const r = cv.getBoundingClientRect();
    const el = this.state.edEls.find(x => x.id === id); if (!el) return; const sx = ev.clientX, sy = ev.clientY, ox = el.x, oy = el.y;
    this.setState({ edSel: id });
    const mv = (m) => { const nx = Math.max(0, Math.min(100, ox + (m.clientX - sx) / r.width * 100)), ny = Math.max(0, Math.min(100, oy + (m.clientY - sy) / r.height * 100)); this.setState(st => ({ edEls: st.edEls.map(x => x.id === id ? { ...x, x: nx, y: ny } : x) })); };
    const up = () => { window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up); };
    window.addEventListener('pointermove', mv); window.addEventListener('pointerup', up);
  };
  curColor = (st) => { const el = st.edEls.find(x => x.id === st.edSel), t = st.edTarget; if (t === 'bg1') return st.edBg.c1; if (t === 'bg2') return st.edBg.c2 || st.edBg.c1; if (!el) return '#ffffff'; if (t === 'fill2') return el.fill2 || el.fill; if (t === 'bd') return el.bd; return el.fill; };
  applyColor = (hex, hsv) => this.setState(st => {
    const t = st.edTarget, o = { edHsv: hsv || hexToHsv(hex) };
    if (t === 'bg1') o.edBg = { ...st.edBg, c1: hex }; else if (t === 'bg2') o.edBg = { ...st.edBg, c2: hex };
    else o.edEls = st.edEls.map(x => x.id === st.edSel ? { ...x, [t]: hex, ...(t === 'bd' && !x.bdw ? { bdw: 2 } : {}) } : x);
    return o;
  });
  setHsvPart = (p) => { const h = { ...this.state.edHsv, ...p }; this.applyColor(hsvToHex(h.h, h.s, h.v), h); };
  wheelDown = (ev) => {
    const box = ev.currentTarget.getBoundingClientRect(), cx = box.left + box.width / 2, cy = box.top + box.height / 2, R0 = box.width / 2;
    const pick = (m) => { const dx = m.clientX - cx, dy = m.clientY - cy; const h = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360, sa = Math.min(1, Math.hypot(dx, dy) / R0); this.setHsvPart({ h: Math.round(h), s: sa }); };
    pick(ev); const up = () => { window.removeEventListener('pointermove', pick); window.removeEventListener('pointerup', up); };
    window.addEventListener('pointermove', pick); window.addEventListener('pointerup', up);
  };
  edVals = (s) => {
    const elStyle = (e, sel) => {
      const o = { position: 'absolute', left: e.x + '%', top: e.y + '%', transform: 'translate(-50%,-50%) rotate(' + (e.rot || 0) + 'deg)', userSelect: 'none', touchAction: 'none', outline: sel ? '2px dashed #fff' : 'none', outlineOffset: '4px', boxSizing: 'border-box' };
      const fb = e.fill2 ? 'linear-gradient(135deg, ' + e.fill + ', ' + e.fill2 + ')' : e.fill;
      if (e.type === 'text') { Object.assign(o, { fontSize: e.size + 'cqw', fontFamily: FONTS[e.font] || FONTS.Manrope, fontWeight: e.font === 'Stretch' ? 800 : 700, lineHeight: 1.05, whiteSpace: 'pre', textAlign: 'center', width: 'max-content', maxWidth: '94%', color: e.fill, WebkitTextStroke: e.bdw ? e.bdw + 'px ' + e.bd : '0' }); if (e.fill2) { o.backgroundImage = fb; o.WebkitBackgroundClip = 'text'; o.backgroundClip = 'text'; o.color = 'transparent'; } }
      else if (e.type === 'shape') Object.assign(o, { width: e.w + '%', aspectRatio: e.shape === 'pill' ? '2.6' : e.shape === 'rect' ? '1.3' : '1', background: fb, border: e.bdw ? e.bdw + 'px solid ' + e.bd : 'none', borderRadius: e.shape === 'circle' ? '50%' : e.shape === 'pill' ? '999px' : '6%' });
      else Object.assign(o, { width: e.w + '%', aspectRatio: '1', backgroundImage: 'url(' + (e.src.startsWith('data:') ? e.src : rs(e.src)) + ')', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.35))' });
      return o;
    };
    const bgOf = (b) => b.c2 ? 'linear-gradient(160deg, ' + b.c1 + ', ' + b.c2 + ')' : b.c1;
    const cvOf = (ar, bg, h) => ({ aspectRatio: ar, ...(h ? { height: h } : { width: '100%' }), background: bgOf(bg), containerType: 'inline-size', position: 'relative', overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.14)' });
    const mk = (list, sel, down) => list.map(e => ({ text: e.type === 'text' ? e.text : '', style: elStyle(e, sel && s.edSel === e.id), down: down ? this.edDown(e.id) : undefined }));
    const chipOf = (label, on, go) => ({ label, go, col: on ? 'oklch(0.98 0 0)' : 'oklch(0.85 0.005 250)', bg: on ? 'oklch(0.5 0.21 27 / 0.85)' : 'oklch(1 0 0 / 0.08)' });
    const sel = s.edEls.find(x => x.id === s.edSel), st0 = s;
    const story = s.stories.find(x => x.id === s.storyView);
    const cur = this.curColor(s), hsv = s.edHsv, rad = hsv.h * Math.PI / 180;
    const tgt = sel ? s.edTarget : (s.edTarget.startsWith('bg') ? s.edTarget : 'bg1');
    const setT = (t) => this.setState(st => ({ edTarget: t, edHsv: hexToHsv(this.curColor({ ...st, edTarget: t })) }));
    const AR = { '3/4': 'Vertical', '1/1': 'Cuadrado', '9/16': 'Historia' };
    const LIB = ['closet-hoodie2', 'closet-jacket', 'closet-jeans2', 'closet-tenis3', 'closet-gorro', 'closet-gafas', 'closet-camiseta', 'closet-short'];
    const sizeKey = sel && sel.type === 'text' ? 'size' : 'w', sizeVal = sel ? (sel[sizeKey] || 0) : 0;
    const PAL = [['Rojo KHAOS', ['#e5242d', '#8c1319', '#0b0b0d', '#f4efe6', '#9aa3ad']], ['Neutros', ['#ffffff', '#d9d6cf', '#8a8a8f', '#3a3a40', '#000000']], ['Pastel', ['#f7c6c9', '#c9d8f0', '#d4ecd6', '#f6e7b4', '#dccbf0']]];
    const addTxt = (text, o) => () => this.edAdd({ type: 'text', text, size: 10, font: 'Manrope', ...o });
    return {
      storyCards: s.stories.map(q => ({ title: q.title, by: q.by, cv: cvOf(q.ar, q.bg), els: mk(q.els, false, false), open: () => this.setState({ storyView: q.id, cmErr: '' }) })),
      edOpenNew: () => this.setState({ edOpen: true, edEls: [], edSel: null, edTab: 'add', edTitle: '', edStory: '', edTags: '', edBg: { c1: '#e5242d', c2: '#0b0b0d' }, edTarget: 'bg1', edHsv: hexToHsv('#e5242d') }),
      edOpen: s.edOpen, edClose: () => this.setState({ edOpen: false }), edRef: this.edRef, edFileRef: this.edFileRef, edFile: this.edFile, edPickFile: this.edPickFile,
      edDeselect: () => this.setState({ edSel: null, edTarget: s.edTarget.startsWith('bg') ? s.edTarget : 'bg1' }),
      edCv: cvOf(s.edAr, s.edBg, '292px'), edElsR: mk(s.edEls, true, true),
      edFormats: Object.keys(AR).map(k => chipOf(AR[k], s.edAr === k, () => this.setState({ edAr: k }))),
      edTabs: [['add', 'Añadir'], ['edit', 'Editar'], ['color', 'Color'], ['layers', 'Capas'], ['info', 'Info']].map(([k, l]) => chipOf(l, s.edTab === k, () => this.setState({ edTab: k }))),
      tabAdd: s.edTab === 'add', tabEdit: s.edTab === 'edit', tabColor: s.edTab === 'color', tabLayers: s.edTab === 'layers', tabInfo: s.edTab === 'info',
      addBasics: [chipOf('Título', false, addTxt('Tu título', { size: 12, font: 'Stretch' })), chipOf('Texto', false, addTxt('Tu texto', { size: 8 })), chipOf('Círculo', false, () => this.edAdd({ type: 'shape', shape: 'circle', w: 36, fill: '#e5242d' })), chipOf('Rectángulo', false, () => this.edAdd({ type: 'shape', shape: 'rect', w: 50, fill: '#f4efe6' })), chipOf('Píldora', false, () => this.edAdd({ type: 'shape', shape: 'pill', w: 50, fill: '#0b0b0d', bdw: 2 })), chipOf('# Hashtag', false, addTxt('#tuhashtag', { size: 6 }))],
      addStickers: ['✦', '✺', '❖', '✷', '✶', '☾', '✿', '➤'].map(g => ({ label: g, go: () => this.edAdd({ type: 'text', text: g, size: 16, fill: '#e5242d' }) })),
      addLib: LIB.map(f => ({ img: 'url(' + rs('assets/' + f + '.png') + ')', go: () => this.edAdd({ type: 'image', src: 'assets/' + f + '.png', w: 56 }) })),
      hasSel: !!sel, noSel: !sel, selText: !!sel && sel.type === 'text', selTextVal: sel && sel.type === 'text' ? sel.text : '',
      onSelText: (e) => this.edUpd({ text: e.target.value }),
      fontChips: Object.keys(FONTS).map(k => chipOf(k === 'Stretch' ? 'Stretch Pro' : k, !!sel && sel.font === k, () => this.edUpd({ font: k }))),
      selSize: sizeVal, selSizeTxt: Math.round(sizeVal), onSize: (e) => this.edUpd({ [sizeKey]: +e.target.value }),
      selRot: sel ? sel.rot || 0 : 0, selRotTxt: sel ? Math.round(sel.rot || 0) + '°' : '', onRot: (e) => this.edUpd({ rot: +e.target.value }),
      selBdw: sel ? sel.bdw || 0 : 0, selBdwTxt: sel ? sel.bdw || 0 : 0, onBdw: (e) => this.edUpd({ bdw: +e.target.value }),
      selDup: () => { if (sel) this.edAdd({ ...sel, id: undefined, x: Math.min(95, sel.x + 6), y: Math.min(95, sel.y + 6) }); },
      selDel: () => this.setState(st => ({ edEls: st.edEls.filter(x => x.id !== st.edSel), edSel: null })),
      targetChips: [['fill', 'Relleno / texto'], ['fill2', 'Degradado'], ['bd', 'Borde'], ['bg1', 'Fondo'], ['bg2', 'Fondo 2']].map(([k, l]) => chipOf(l, tgt === k, () => setT(k))),
      wheelDown: this.wheelDown,
      wheelStyle: { position: 'relative', width: '190px', height: '190px', borderRadius: '50%', touchAction: 'none', cursor: 'crosshair', background: 'linear-gradient(rgba(0,0,0,' + (1 - hsv.v) + '),rgba(0,0,0,' + (1 - hsv.v) + ')), radial-gradient(circle, #fff 0%, rgba(255,255,255,0) 70%), conic-gradient(from 90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)', border: '1px solid rgba(255,255,255,0.25)' },
      knobStyle: { position: 'absolute', width: '22px', height: '22px', borderRadius: '50%', border: '3px solid #fff', boxShadow: '0 0 0 1px rgba(0,0,0,0.5)', background: cur, left: 'calc(' + (50 + hsv.s * 50 * Math.cos(rad)) + '% - 11px)', top: 'calc(' + (50 + hsv.s * 50 * Math.sin(rad)) + '% - 11px)', pointerEvents: 'none' },
      hH: hsv.h, hHTxt: Math.round(hsv.h) + '°', onH: (e) => this.setHsvPart({ h: +e.target.value }),
      hS: Math.round(hsv.s * 100), hSTxt: Math.round(hsv.s * 100) + '%', onS: (e) => this.setHsvPart({ s: +e.target.value / 100 }),
      hV: Math.round(hsv.v * 100), hVTxt: Math.round(hsv.v * 100) + '%', onV: (e) => this.setHsvPart({ v: +e.target.value / 100 }),
      swatchStyle: { width: '46px', height: '46px', flex: 'none', borderRadius: '14px', background: cur, border: '1px solid rgba(255,255,255,0.35)' },
      hexVal: cur.toUpperCase(), onHex: (e) => { let v = e.target.value.trim(); if (v[0] !== '#') v = '#' + v; if (/^#[0-9a-f]{6}$/i.test(v)) this.applyColor(v.toLowerCase()); },
      saveFav: () => this.setState(st => { const c = this.curColor(st); return st.edFavs.includes(c) ? null : { edFavs: [...st.edFavs, c].slice(-10) }; }),
      hasFavs: s.edFavs.length > 0, favList: s.edFavs.map(hex => ({ hex, go: () => this.applyColor(hex) })),
      palettes: PAL.map(([name, cols]) => ({ name, cols: cols.map(hex => ({ hex, go: () => this.applyColor(hex) })) })),
      layers: [...s.edEls].reverse().map(e => { const i = s.edEls.indexOf(e); const mv = (d) => () => this.setState(st => { const a = [...st.edEls], j = i + d; if (j < 0 || j >= a.length) return null; [a[i], a[j]] = [a[j], a[i]]; return { edEls: a }; }); return { label: e.type === 'text' ? 'Texto · ' + e.text.replace(/\n/g, ' ').slice(0, 22) : e.type === 'shape' ? 'Forma · ' + e.shape : 'Imagen', bg: s.edSel === e.id ? 'oklch(0.5 0.21 27 / 0.35)' : 'oklch(1 0 0 / 0.05)', pick: () => this.setState({ edSel: e.id }), up: mv(1), down: mv(-1), del: () => this.setState(st => ({ edEls: st.edEls.filter(x => x.id !== e.id), edSel: st.edSel === e.id ? null : st.edSel })) }; }),
      noLayers: s.edEls.length === 0,
      edTitle: s.edTitle, edStory: s.edStory, edTags: s.edTags, onEdTitle: (e) => this.setState({ edTitle: e.target.value.slice(0, 50) }), onEdStory: (e) => this.setState({ edStory: e.target.value.slice(0, 400) }), onEdTags: (e) => this.setState({ edTags: e.target.value.slice(0, 80) }),
      edPublish: () => { const st = this.state; if (!st.edEls.length) return this.setState({ edTab: 'add' }); const tags = st.edTags.split(/\s+/).filter(Boolean).map(t => t[0] === '#' ? t : '#' + t); const id = 'u' + Date.now(); this.setState({ stories: [{ id, ar: st.edAr, bg: st.edBg, els: st.edEls, title: st.edTitle || 'Mi historia', text: st.edStory, tags, by: st.fName || 'ti' }, ...st.stories], edOpen: false, storyView: id }); },
      storyOpen: !!story, closeStory: () => this.setState({ storyView: null }),
      stCv: story ? cvOf(story.ar, story.bg) : {}, stEls: story ? mk(story.els, false, false) : [], stTitle: story ? story.title : '', stBy: story ? story.by : '', stText: story ? story.text : '', stTags: story ? story.tags : [],
      stReacts: PHRASES_GIVE.map(t => { const got = (s.sReacts[s.storyView] || []); const on = got.includes(t); return chipOf(t, on, () => this.setState(st => { const cu = st.sReacts[st.storyView] || []; return { sReacts: { ...st.sReacts, [st.storyView]: on ? cu.filter(x => x !== t) : [...cu, t] } }; })); }),
      stComments: (s.comments[s.storyView] || []).concat(story && story.id === 's1' ? [{ by: 'Laura (asesora)', t: 'Qué bonito verte elegir lo que te hace sentir bien.' }] : []),
      cmDraft: s.cmDraft, onCm: (e) => this.setState({ cmDraft: e.target.value.slice(0, 200), cmErr: '' }), cmErr: !!s.cmErr, cmErrText: s.cmErr,
      sendCm: () => { const t = s.cmDraft.trim(); if (!t) return; if (BAD.some(w => t.toLowerCase().includes(w))) return this.setState({ cmErr: 'Reescríbelo con respeto: aquí solo hay palabras positivas o críticas constructivas.' }); this.setState(st => ({ comments: { ...st.comments, [st.storyView]: [...(st.comments[st.storyView] || []), { by: st.fName || 'Tú', t }] }, cmDraft: '', cmErr: '' })); }
    };
  };
  donaRef = React.createRef();
  pickDona = () => { const f = this.donaRef.current; if (f) { f.value = ''; f.click(); } };
  donaFile = (e) => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => { const im = new Image(); im.onload = () => { const k = Math.min(1, 720 / Math.max(im.naturalWidth, im.naturalHeight)), c = document.createElement('canvas'); c.width = Math.round(im.naturalWidth * k); c.height = Math.round(im.naturalHeight * k); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); this.setState({ dFoto: c.toDataURL('image/jpeg', 0.85), dErr: false }); }; im.src = rd.result; };
    rd.readAsDataURL(f);
  };
  partRef = React.createRef();
  photoRef = React.createRef();
  startParticles = () => {
    const P = this._pt = { ps: [], tx: 0, ty: 0, sx: 0, sy: 0, raf: 0, got: false };
    P.ps = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), z: 0.3 + Math.random() * 0.9, r: 1.2 + Math.random() * 2.8, h: Math.random() < 0.14 ? 25 : (Math.random() < 0.5 ? 235 : 0), ph: Math.random() * 6.28 }));
    P.mm = (e) => { if (P.got) return; P.tx = (e.clientX / window.innerWidth - 0.5) * 1.6; P.ty = (e.clientY / window.innerHeight - 0.5) * 1.6; };
    window.addEventListener('mousemove', P.mm);
    const loop = () => {
      const cv = this.partRef.current;
      if (cv && cv.clientWidth) {
        const w = cv.clientWidth, h = cv.clientHeight, dpr = Math.min(2, window.devicePixelRatio || 1);
        if (cv.width !== Math.round(w * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
        const x = cv.getContext('2d'); x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, w, h);
        P.sx += (P.tx - P.sx) * 0.07; P.sy += (P.ty - P.sy) * 0.07;
        for (const p of P.ps) {
          p.ph += 0.012;
          p.x += (Math.sin(p.ph) * 0.00035 + P.sx * p.z * 0.0042); p.y += (Math.cos(p.ph * 0.8) * 0.0003 - 0.0002 * p.z + P.sy * p.z * 0.0042);
          if (p.x < -0.05) p.x = 1.05; if (p.x > 1.05) p.x = -0.05; if (p.y < -0.05) p.y = 1.05; if (p.y > 1.05) p.y = -0.05;
          const px = p.x * w, py = p.y * h, rad = p.r * (3 + p.z * 3), a = 0.25 + p.z * 0.4;
          const g = x.createRadialGradient(px, py, 0, px, py, rad);
          const col = p.h === 0 ? '255,255,255' : p.h === 235 ? '150,185,235' : '255,120,90';
          g.addColorStop(0, 'rgba(' + col + ',' + a + ')'); g.addColorStop(1, 'rgba(' + col + ',0)');
          x.fillStyle = g; x.beginPath(); x.arc(px, py, rad, 0, 6.2832); x.fill();
        }
      }
      P.raf = requestAnimationFrame(loop);
    };
    P.raf = requestAnimationFrame(loop);
  };
  onTilt = (e) => { const Q = this._sp; if (Q && e.gamma != null && e.beta != null) { Q.gyro = true; Q.tx = Math.max(-1.6, Math.min(1.6, e.gamma / 22)); Q.ty = Math.max(-1.6, Math.min(1.6, (e.beta - 45) / 22)); } const P = this._pt; if (!P || e.gamma == null || e.beta == null) return; P.got = true; P.tx = Math.max(-1.6, Math.min(1.6, e.gamma / 22)); P.ty = Math.max(-1.6, Math.min(1.6, (e.beta - 45) / 22)); };
  enableGyro = () => this.askMotion();
  nextPhrase = () => { this.setState({ phraseO: 0 }); clearTimeout(this._pt1); this._pt1 = setTimeout(() => this.setState(st => ({ phraseI: (st.phraseI + 1 + Math.floor(Math.random() * (BANNERS.length - 1))) % BANNERS.length, phraseO: 1 })), 380); };
  pickPhoto = () => { const f = this.photoRef.current; if (f) { f.value = ''; f.click(); } };
  photoFile = (e) => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => { const im = new Image(); im.onload = () => { const m = Math.max(im.naturalWidth, im.naturalHeight), k = Math.min(1, 720 / m), c = document.createElement('canvas'); c.width = Math.round(im.naturalWidth * k); c.height = Math.round(im.naturalHeight * k); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); this.setState({ photoDraft: c.toDataURL('image/jpeg', 0.85) }); }; im.src = rd.result; };
    rd.readAsDataURL(f);
  };
  clearPhoto = () => this.setState({ photoDraft: null });
  state = {
    paidText: '', confirmOut: false, helpQ: '', helpOpen: -1, plan: 'mensual', paying: false, paid: false, payId: 'card1', addingCard: false, cNum: '', cName: '', cExp: '', cCvv: '', cardError: '', payCards: [{ id: 'card1', brand: 'VISA', last: '4242', name: 'Tú' }],
    reports: {}, pBase: 0, pTitle: '', pText: '', posters: [], dTipo: 'Hoodies', dEstado: 'Buen estado', dNombre: '', dFoto: null, dCode: '', dErr: false,
    advHomeSel: 0, splashOut: false, rulesGone: false, space: '', spaceJoined: {}, edOpen: false, edAr: '3/4', edEls: [], edBg: { c1: '#e5242d', c2: '#0b0b0d' }, edSel: null, edTab: 'add', edTarget: 'fill', edHsv: { h: 0, s: 0.85, v: 0.9 }, edFavs: [], edTitle: '', edStory: '', edTags: '', stories: SEED_STORIES, storyView: null, cmDraft: '', cmErr: '', comments: {}, sReacts: {},
    phraseI: Math.floor(Math.random() * 10), aboutOpen: -1, fCed: '', fPermData: false, fPermNotif: false, advReq: null, advReqSvc: null, advQ: '', advF: '', advFavOnly: false, advFav: {}, advCmp: [], advView: null, advSvc: null, advBA: 50, advPrev: null, advPref: {}, phraseO: 1, gyro: false, reacts: {}, pickOpen: {}, photoDraft: null,
    screen: 'splash', onb: 0, regMode: 'signup', authed: false, regBusy: false,
    fName: '', fAge: '', fEmail: '', fPass: '', fTerms: false, regError: '',
    isAdvisor: false, aMode: 'signup', aStep: 0, aName: '', aEmail: '', aPass: '', aSpecs: [], aYears: '', aBio: '', aHow: [], aAvail: [], aLink: '', aTerms: false, aErr: '', aTitle: '', aLine: '', aRate: '', aPhoto: null, aSaved: false,
    notif: false, step: 0, answers: [], msgs: null, phase: 'q', draft: '', identity: null,
    tryOn: {}, trySel: null, tryTab: 'all', tryConsent: null, trySaved: false,
    combo: null, add: null, build: null, toast: null, mood: null, moodLog: {}, helpOn: false, wins: [], winDraft: '', ropaView: 'hub', donSel: {}, donDest: 'Punto KHAOS', donDone: false, donLast: 0, inspTab: 'Streetwear', comSafe: false, motionOn: false, channel: 'looks', posts: JSON.parse(JSON.stringify(SEED)), postDraft: '', liked: {}, myPosts: 0, faq: false, article: null, artCat: 'Todos', rted: {}, hov: null, detail: null, closet: CLOSET, outfit: { eyes: 2 }, favs: { 2: true }, pos: {}, drag: null, closetCat: 'Todo', shared: false, anon: false, circle: false, joined: { bienvenida: true, normas: true, general: true }, pending: {}, rulesOk: false
  };
  chatRef = React.createRef();
  tryStageRef = React.createRef();
  _emb = typeof location !== 'undefined' && /[?&]embed/.test(location.search);
  _dev = typeof location !== 'undefined' && /[?&]dev/.test(location.search);
  videoRef = React.createRef();

  componentDidMount() {
    this.resetAsesor();
    this.hydrate();
    const q = new URLSearchParams(location.search);
    if (this._dev && q.get('screen')) this.setState({ screen: q.get('screen') });
    this.startParticles(); this.startSplash();
    if (!(window.DeviceMotionEvent && typeof window.DeviceMotionEvent.requestPermission === 'function') && !(window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function')) this.askMotion();
    this._pi = setInterval(() => { if (this.state.screen === 'home') this.nextPhrase(); }, 7500);
  }
  // --- Persistencia local (MVP sin backend) -------------------------------
  // Guarda solo datos del usuario, nunca datos de tarjeta. Todo pasa por
  // window.KhaosStore (store.js), pensado para cambiarse luego por Supabase.
  static PERSIST_KEYS = ['authed', 'fName', 'fEmail', 'fAge', 'plan', 'paid', 'paidText', 'closet', 'liked', 'pinned', 'favs', 'moodLog', 'wins', 'advFav'];
  hydrate() {
    const saved = window.KhaosStore && window.KhaosStore.load();
    if (!saved) return;
    const patch = {};
    Component.PERSIST_KEYS.forEach((k) => { if (saved[k] !== undefined) patch[k] = saved[k]; });
    if (KhaosStore.enabled) { delete patch.authed; delete patch.myPosts; }
    if (KhaosStore.enabled && KhaosStore.hasSession()) { patch.authed = true; patch.screen = 'home'; }
    else if (KhaosStore.enabled) patch.authed = false;
    else if (patch.authed) patch.screen = 'home';
    this.setState(patch);
    if (KhaosStore.enabled && KhaosStore.hasSession()) this.startSync();
  }
  // --- Sincronización con Supabase ------------------------------------------
  static relTime(iso) {
    const m = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
    if (m < 1) return 'ahora';
    if (m < 60) return m + ' min';
    const h = Math.round(m / 60);
    return h < 24 ? h + ' h' : Math.round(h / 24) + ' d';
  }
  startSync() {
    clearInterval(this._syncT);
    this.loadRemote();
    this._syncT = setInterval(() => { if (!document.hidden) this.loadRemote(); }, 30000);
  }
  stopSync() { clearInterval(this._syncT); this._syncT = null; }
  loadRemote() {
    if (!KhaosStore.enabled || !KhaosStore.hasSession()) return Promise.resolve();
    return Promise.all([KhaosStore.listPosts(100), KhaosStore.listCloset(), KhaosStore.getProfile()]).then(([rows, items, prof]) => {
      const posts = JSON.parse(JSON.stringify(SEED));
      let mine = 0;
      rows.slice().reverse().forEach((r) => {
        if (r.mine) mine++;
        const p = { id: r.id, user: r.anon ? 'Anónimo' : (r.author || 'tú'), anon: r.anon, circle: r.circle, mine: r.mine, text: r.body, time: Component.relTime(r.created_at), likes: 0 };
        (posts[r.channel] = posts[r.channel] || []).unshift(p);
      });
      const local = this.state.posts || {};
      Object.keys(local).forEach((ch) => { const keep = (local[ch] || []).filter((p) => p.mine && p.photo); if (keep.length) posts[ch] = [...keep, ...(posts[ch] || [])]; });
      const ids = new Set(items.map((i) => i.id));
      const remote = items.map((i) => ({ id: i.id, name: i.name, cat: i.cat, img: i.img, color: 'oklch(0.422 0.02 250)', worn: i.worn || 0, synced: true }));
      this.setState((st) => ({
        posts, myPosts: mine,
        closet: [...remote, ...st.closet.filter((c) => !c.synced && !ids.has(c.id))],
        fName: (prof && prof.username) || st.fName
      }));
    }).catch((e) => {
      if (e && (e.code === 'no_session' || e.status === 401)) this.endSession();
      else console.warn('KHAOS: no se pudo sincronizar', e);
    });
  }
  endSession() {
    this.stopSync();
    this.setState((st) => ({
      authed: false, screen: 'splash', regMode: 'login', fPass: '',
      posts: JSON.parse(JSON.stringify(SEED)), myPosts: 0,
      closet: st.closet.filter((c) => !c.synced)
    }));
  }
  remotePost(channel, body, anon, circle) {
    if (!KhaosStore.enabled || !KhaosStore.hasSession()) return;
    KhaosStore.addPost({ channel, body, anon, circle }).then(() => this.loadRemote()).catch((e) => { console.warn('KHAOS: no se pudo publicar', e); this.loadRemote(); });
  }
  authError(e) {
    const m = {
      user_already_exists: 'Ese correo ya tiene cuenta. Inicia sesión.',
      email_exists: 'Ese correo ya tiene cuenta. Inicia sesión.',
      invalid_credentials: 'Correo o contraseña incorrectos.',
      weak_password: 'La contraseña es muy débil. Usa al menos 6 caracteres.',
      over_request_rate_limit: 'Demasiados intentos. Espera un momento.',
      over_email_send_rate_limit: 'Demasiados intentos. Espera un momento.',
      email_address_invalid: 'Revisa tu correo.',
      network: 'Sin conexión. Revisa tu internet e inténtalo de nuevo.'
    };
    return m[e && e.code] || (e && e.status >= 500 ? 'No pudimos crear tu cuenta. Revisa tus datos (edad 18–25).' : 'Algo salió mal. Inténtalo de nuevo.');
  }
  persist() {
    if (!window.KhaosStore) return;
    clearTimeout(this._persistT);
    this._persistT = setTimeout(() => {
      const out = {};
      Component.PERSIST_KEYS.forEach((k) => { out[k] = this.state[k]; });
      if (out.closet) out.closet = out.closet.filter((c) => !c.synced); // lo sincronizado vive en el servidor
      window.KhaosStore.save(out);
    }, 250);
  }
  componentDidUpdate() { this.persist(); const el = this.chatRef.current; if (el) el.scrollTop = el.scrollHeight; if (this._stream ) this.stopCam(); }
  stopCam = () => { if (this._stream) { this._stream.getTracks().forEach(tr => tr.stop()); this._stream = null; } if (this.state.tryConsent === 'cam') this.setState({ tryConsent: null }); };
  startCam = () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { this.setState({ tryErr: 'Tu navegador no permite usar la cámara aquí.' }); return; }
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 1080 }, height: { ideal: 1440 } }, audio: false }).then(stream => {
      this._stream = stream; this.setState({ tryConsent: 'cam', tryErr: '' }, () => { const v = this.videoRef.current; if (v) { v.srcObject = stream; v.play && v.play().catch(() => {}); } });
    }).catch(() => this.setState({ tryErr: 'No pudimos abrir la cámara. Revisa el permiso del navegador o sube una foto.' }));
  };

  bot(text) { return { from: 'bot', text }; }
  me(text) { return { from: 'me', text }; }

  resetAsesor = () => this.setState({
    step: 7, answers: [], phase: 'done', identity: null, colorAsk: true, colorRes: '',
    msgs: [this.bot('Hola, estoy aquí para escucharte. Cuéntame cómo te sientes hoy. Si quieres, también puedo mostrarte colores y estilos con los que te sientas más tú.'), this.bot('Si decides mandarme una foto, necesito tu permiso. Solo la uso para sugerirte colores y estilos, nunca para juzgarte, y no se guarda.')]
  });

  pick = (label, idx) => {
    const s = this.state;
    if (s.phase !== 'q') return;
    const answers = [...s.answers, idx];
    const msgs = [...s.msgs, this.me(label)];
    const next = s.step + 1;
    if (next < QUESTIONS.length) {
      msgs.push(this.bot(QUESTIONS[next].q));
      this.setState({ answers, msgs, step: next });
    } else {
      msgs.push(this.bot('¡Listo! Para afinar el consejo puedo ver una foto de tus facciones.\n¿Me das permiso? Es opcional y la foto no se guarda.'));
      this.setState({ answers, msgs, step: next, phase: 'perm' });
    }
  };

  finish(extraMsgs) {
    const counts = [0, 0, 0];
    this.state.answers.forEach(a => counts[a]++);
    const id = counts.indexOf(Math.max(...counts));
    this.setState(s => ({ msgs: [...s.msgs, ...extraMsgs, this.bot('Este es tu resultado:')], phase: 'done', identity: id }));
  }

  onPhoto = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    this.finish([this.me('Foto: ' + f.name), this.bot('Gracias por confiar. Analicé tus facciones solo para este consejo y ya borré la foto.')]);
  };
  denyPhoto = () => this.finish([this.me('No, gracias'), this.bot('Perfecto, respetamos tu decisión. Seguimos solo con tus respuestas.')]);

  sendText = (e) => {
    e.preventDefault();
    const t = this.state.draft.trim();
    if (!t) return;
    const s = this.state;
    if (s.phase === 'q') {
      this.setState({ draft: '' });
      this.pick(t, s.step % 3);
      return;
    }
    this.setState({ draft: '' });
    this.askAI(t);
  };
  askAI = (text) => {
    const s = this.state;
    const typing = { from: 'bot', text: '…', typing: true };
    const base = [...s.msgs, this.me(text)];
    this.setState({ msgs: [...base, typing] });
    const closet = s.closet.map(c => c.name + ' (' + c.cat + ')').join(', ');
    const idn = s.identity != null ? IDENTITIES[s.identity].n + ': ' + IDENTITIES[s.identity].t : 'aún sin definir';
    const hist = base.filter(m => !m.typing).slice(-10).map(m => ({ role: m.from === 'me' ? 'user' : 'assistant', content: m.text }));
    while (hist.length && hist[0].role !== 'user') hist.shift();
    const system = 'Eres el estilista de KHAOS, una app de moda streetwear para jóvenes de 18 a 25 años. Hablas en español, tono cercano, directo y con actitud, sin sonar corporativo. Respondes en máximo 3 frases cortas, sin listas largas ni markdown. Das consejos concretos de outfits, colores, accesorios y cómo combinar. Cuando puedas, usa prendas del closet del usuario por su nombre. Identidad de estilo del usuario: ' + idn + '. Closet del usuario: ' + closet + '. Si te piden verse puesto algo, sugiere abrir el Probador. No des consejos médicos ni hables de temas ajenos a la moda y el estilo.' + (s.colorRes ? ' Análisis de color del usuario: ' + s.colorRes + ' Úsalo al recomendar colores.' : '');
    const done = (reply) => this.setState(st => ({ msgs: st.msgs.map(m => m.typing ? this.bot(reply) : m) }));
    if (!window.claude || !window.claude.complete) { done(this.advise(text)); return; }
    window.claude.complete({ system, max_tokens: 300, messages: hist }).then(r => done(String(r).trim() || this.advise(text))).catch(() => done(this.advise(text)));
  };
  advise = (q) => {
    const s = this.state, l = q.toLowerCase();
    const pick = (cat) => { const xs = s.closet.filter(c => c.cat === cat); return xs.length ? xs[Math.floor(Math.random() * xs.length)].name : null; };
    const top = pick('Hoodies') || pick('Chaquetas') || pick('Camisetas'), bot = pick('Pantalones') || pick('Shorts'), shoe = pick('Tenis'), cap = pick('Gorros');
    const fit = [top, bot, shoe].filter(Boolean).join(' + ');
    if (/hoy|dia|día|qué me pongo|que me pongo/.test(l)) return 'Hoy: ' + fit + (cap ? ' y ' + cap : '') + '. Simple y con actitud.';
    if (/salir|fiesta|noche|plan/.test(l)) return 'Para salir: ' + (pick('Chaquetas') || top) + ' sobre ' + (bot || 'tu pantalón favorito') + ', con ' + (shoe || 'tus tenis') + '. Oscuro con un solo detalle brillante.';
    if (/cómodo|comodo|casa|universidad|clase|diario/.test(l)) return 'Cómodo y con estilo: ' + (pick('Hoodies') || top) + ' oversize + ' + (pick('Shorts') || bot) + ' + ' + (shoe || 'tenis') + '.';
    if (/color|paleta|combina/.test(l)) return 'Regla rápida: dos tonos neutros y un acento. Mantén negro, gris o blanco y deja una sola prenda que destaque.';
    if (/gafas|accesorio|gorro/.test(l)) return 'Un solo accesorio fuerte: ' + (pick('Gafas') || 'gafas') + ' o ' + (cap || 'un gorro') + '. No los dos a la vez.';
    if (/tenis|zapat/.test(l)) return 'Los tenis llevan el look: ' + (shoe || 'unos tenis limpios') + ' con pantalón holgado se ve mejor.';
    return 'Te armo algo rápido: ' + fit + '. Si quieres verlo puesto, ábrelo en el Probador.';
  };
  startColor = () => {
    const s = this.state;
    this.setState({ colorAsk: true, msgs: [...s.msgs, this.me('Analizar otra foto'), this.bot('Va. Necesito una foto de tu cara con luz natural, sin filtros y sin gafas.\n¿Me das permiso para verla? Solo la uso para este análisis y no se guarda.')] });
  };
  denyColor = () => this.setState(s => ({ colorAsk: false, msgs: [...s.msgs, this.me('Mejor no'), this.bot('Sin problema. Si cambias de idea, toca "Mi análisis de color" otra vez.')] }));
  onColorPhoto = (e) => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    const s = this.state;
    const typing = { from: 'bot', text: 'Analizando tu tono de piel, ojos y contraste…', typing: true };
    this.setState({ colorAsk: false, msgs: [...s.msgs, this.me('Foto enviada'), typing] });
    const fail = (m) => this.setState(st => ({ msgs: st.msgs.map(x => x.typing ? this.bot(m) : x) }));
    const img = new Image(); const url = URL.createObjectURL(f);
    img.onload = () => {
      const k = Math.min(1, 640 / Math.max(img.width, img.height)); const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
      const data = c.toDataURL('image/jpeg', 0.82).split(',')[1];
      if (!window.claude || !window.claude.complete) return fail('El análisis de color no está disponible ahora.');
      const system = 'Eres colorista de imagen personal de KHAOS (moda streetwear, jóvenes 18-25). Analizas una foto de la cara y estimas: forma del rostro, subtono de la piel (cálido, frío o neutro), contraste (piel, pelo y ojos) y la estación de color más cercana. También recomiendas qué estilo de gafas, cuellos/escotes y cortes de pelo o barba le favorecen según su rostro. Si no se ve una cara clara, responde {"error":"..."} explicando qué foto necesitas. Responde SOLO con JSON válido, sin texto extra: {"estacion":"","subtono":"","contraste":"","rostro":"forma del rostro","resumen":"1-2 frases en español","recomendaciones":"2 frases con gafas, cuello/escote y corte que le favorecen","favorecen":[{"hex":"#rrggbb","nombre":""}],"evitar":[{"hex":"#rrggbb","nombre":""}],"consejo":"1 frase sobre cómo usarlos en streetwear"}. favorecen: 6 colores; evitar: 3 colores. Nombres cortos en español.';
      window.claude.complete({ system, max_tokens: 700, messages: [{ role: 'user', content: [{ type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data } }, { type: 'text', text: 'Analiza mi colorimetría y dime qué colores me favorecen.' }] }] }).then(r => {
        const a = String(r).indexOf('{'), b = String(r).lastIndexOf('}'); const j = JSON.parse(String(r).slice(a, b + 1));
        if (j.error) return fail(j.error);
        const sw = (xs, good) => (xs || []).map(x => ({ hex: x.hex, name: x.nombre, ring: good ? 'oklch(1 0 0 / 0.5)' : 'oklch(0.6 0.2 25)' }));
        this.setState(st => ({ colorRes: j.estacion + ', subtono ' + j.subtono + '. Favorecen: ' + (j.favorecen || []).map(x => x.nombre).join(', ') + (j.rostro ? '. Rostro ' + j.rostro + ': ' + (j.recomendaciones || '') : '') + '. Evitar: ' + (j.evitar || []).map(x => x.nombre).join(', ') + '.',
          msgs: [...st.msgs.filter(x => !x.typing), { from: 'bot', text: 'Tu análisis\nRostro ' + (j.rostro || '—') + ' · subtono ' + j.subtono + ' · ' + j.estacion + '\nContraste ' + j.contraste + '\n\n' + j.resumen + '\n\nPara ti: ' + (j.recomendaciones || '') + '\n\nColores que te favorecen:', sw: sw(j.favorecen, true) }, { from: 'bot', text: 'Mejor evita estos cerca de la cara:', sw: sw(j.evitar, false) }, this.bot(j.consejo + '\n\nEs una estimación a partir de tu foto; la luz puede cambiar el resultado.')] }));
      }).catch(() => fail('No pude analizar la foto. Prueba con otra con más luz.'));
    };
    img.onerror = () => fail('No pude abrir esa imagen.');
    img.src = url; e.target.value = '';
  };
  quick = (label) => {
    const s = this.state;
    if (label === 'Analizar otra foto') { this.startColor(); return; }
    if (label === 'Abrir probador') return;
    this.askAI(label);
  };

  submitReg = (e) => {
    e.preventDefault();
    const s = this.state;
    if (s.regBusy) return;
    const email = s.fEmail.trim();
    if (s.regMode === 'signup') {
      const age = parseInt(s.fAge, 10);
      if (!s.fName.trim()) return this.setState({ regError: 'Escribe un nombre de usuario.' });
      if (!age || age < 18 || age > 25) return this.setState({ regError: 'KHAOS es solo para personas de 18 a 25 años.' });
      if (s.fCed.length < 6) return this.setState({ regError: 'Escribe tu cédula (mínimo 6 números).' });
      if (!email.includes('@')) return this.setState({ regError: 'Revisa tu correo.' });
      if (s.fPass.length < 6) return this.setState({ regError: 'La contraseña necesita mínimo 6 caracteres.' });
      if (!s.fTerms) return this.setState({ regError: 'Debes aceptar los términos y las normas.' });
      if (!s.fPermData) return this.setState({ regError: 'Necesitamos tu permiso para verificar tu edad con la cédula.' });
      if (!KhaosStore.enabled) return this.setState({ regError: '', screen: 'verify' });
      // La cédula se valida solo aquí en el dispositivo: no se envía ni se guarda en el servidor.
      this.setState({ regBusy: true, regError: '' });
      KhaosStore.signUp(email, s.fPass, { username: s.fName.trim(), age })
        .then((r) => {
          if (r.needsConfirm) return this.setState({ regBusy: false, regError: '', screen: 'verify' });
          this.setState({ regBusy: false, regError: '', screen: 'home', authed: true, fPass: '', fCed: '' });
          this.startSync();
        })
        .catch((err) => this.setState({ regBusy: false, regError: this.authError(err) }));
    } else {
      if (!email.includes('@') || !s.fPass) return this.setState({ regError: 'Correo o contraseña incorrectos.' });
      if (!KhaosStore.enabled) return this.setState({ regError: '', screen: 'home', authed: true, fName: s.fName || email.split('@')[0] });
      this.setState({ regBusy: true, regError: '' });
      KhaosStore.signIn(email, s.fPass)
        .then(() => {
          this.setState({ regBusy: false, regError: '', screen: 'home', authed: true, fPass: '', fName: s.fName || email.split('@')[0] });
          this.startSync();
        })
        .catch((err) => this.setState({ regBusy: false, regError: this.authError(err) }));
    }
  };

  // ---- Cuenta de asesor ----
  advAccountVals = (s) => {
    const SPECS = ['Imagen y estilismo', 'Moda urbana', 'Colorimetría', 'Personal shopper', 'Tendencias', 'Armado de outfits', 'Revisión de clóset'];
    const YEARS = ['Menos de 1 año', '1–3 años', '3–5 años', 'Más de 5 años'];
    const HOW = ['Videollamada', 'Chat', 'Presencial'];
    const AVAIL = ['Mañanas', 'Tardes', 'Noches', 'Fines de semana'];
    const sty = (on) => ({ on, col: on ? 'oklch(0.97 0.02 230)' : 'oklch(0.9 0.005 250)', bg: on ? 'oklch(0.72 0.061 230 / 0.22)' : 'oklch(1 0 0 / 0.04)', bd: on ? 'oklch(0.72 0.061 230 / 0.7)' : 'oklch(1 0 0 / 0.2)' });
    const multi = (key, list) => list.map(o => ({ label: o, ...sty(s[key].includes(o)), go: () => this.setState(st => ({ [key]: st[key].includes(o) ? st[key].filter(x => x !== o) : [...st[key], o], aSaved: false })) }));
    const single = (key, list) => list.map(o => ({ label: o, ...sty(s[key] === o), go: () => this.setState({ [key]: o, aSaved: false }) }));
    const signup = s.aMode === 'signup';
    const stepLabels = ['Paso 1 de 3 · Tu cuenta', 'Paso 2 de 3 · Cuéntanos de ti', 'Paso 3 de 3 · Cómo trabajas'];
    const rate = parseInt((s.aRate || '').replace(/[^0-9]/g, ''), 10);
    const nm = (s.aName || '').trim();
    return {
      isAReg: s.screen === 'areg', isAdvisor: s.isAdvisor,
      goAReg: () => this.setState({ screen: 'areg', aStep: 0, aErr: '', aMode: 'signup' }),
      aIsSignup: signup, aShowAccount: !signup || s.aStep === 0, aShowAbout: signup && s.aStep === 1, aShowWork: signup && s.aStep === 2,
      aTitleText: signup ? ['Crea tu cuenta', 'Cuéntanos de ti', 'Cómo trabajas'][s.aStep] : 'Inicia sesión',
      aStepLabel: stepLabels[s.aStep], aDots: [0, 1, 2].map(i => ({ w: i === s.aStep ? '22px' : '6px', bg: i <= s.aStep ? 'oklch(0.72 0.061 230)' : 'oklch(1 0 0 / 0.2)' })),
      aCta: signup ? (s.aStep < 2 ? 'Continuar' : 'Crear cuenta de asesor') : 'Entrar',
      aSwitch: signup ? '¿Ya tienes cuenta de asesor? Inicia sesión' : '¿Nuevo/a? Crea tu cuenta de asesor',
      aToggleMode: () => this.setState({ aMode: signup ? 'login' : 'signup', aStep: 0, aErr: '' }),
      aBackLabel: signup && s.aStep > 0 ? '‹ Paso anterior' : '‹ Volver',
      aBack: () => signup && s.aStep > 0 ? this.setState({ aStep: s.aStep - 1, aErr: '' }) : this.setState({ screen: 'reg', aErr: '' }),
      aSubmit: this.aSubmit, hasAErr: !!s.aErr, aErr: s.aErr,
      aName: s.aName, aEmail: s.aEmail, aPass: s.aPass, aBio: s.aBio, aLink: s.aLink, aTerms: s.aTerms, aTitle: s.aTitle, aLine: s.aLine, aRate: s.aRate, aSaved: s.aSaved,
      setAName: e => this.setState({ aName: e.target.value, aSaved: false }), setAEmail: e => this.setState({ aEmail: e.target.value }), setAPass: e => this.setState({ aPass: e.target.value }),
      setABio: e => this.setState({ aBio: e.target.value, aSaved: false }), setALink: e => this.setState({ aLink: e.target.value, aSaved: false }), setATitle: e => this.setState({ aTitle: e.target.value, aSaved: false }),
      setALine: e => this.setState({ aLine: e.target.value, aSaved: false }), setARate: e => this.setState({ aRate: e.target.value.replace(/[^0-9]/g, '').slice(0, 7), aSaved: false }),
      toggleATerms: () => this.setState({ aTerms: !s.aTerms }),
      aSpecChips: multi('aSpecs', SPECS), aYearChips: single('aYears', YEARS), aHowChips: multi('aHow', HOW), aAvailChips: multi('aAvail', AVAIL),
      aSave: this.aSave,
      onAPhoto: (e) => { const f = e.target.files && e.target.files[0]; if (f) this.setState({ aPhoto: URL.createObjectURL(f), aSaved: false }); },
      aPhotoBg: s.aPhoto ? 'url(' + s.aPhoto + ')' : 'linear-gradient(135deg, oklch(0.6 0.064 230), oklch(0.38 0.15 20))',
      aInitial: s.aPhoto ? '' : (nm[0] || 'A').toUpperCase(),
      aPrevName: (nm || 'Tu nombre').toUpperCase(), aPrevRole: s.aTitle || s.aSpecs[0] || 'Tu especialidad',
      aPrevLine: s.aLine || (s.aBio.trim() ? s.aBio.trim().slice(0, 90) + (s.aBio.trim().length > 90 ? '…' : '') : 'Tu frase corta aparece aquí.'),
      aPrevRate: (rate ? '$' + rate.toLocaleString('es-CO') + ' COP por sesión' : 'Tarifa por definir') + (s.aHow.length ? ' · ' + s.aHow.join(', ') : ''),
      verifyGo: () => {
        if (s.isAdvisor || !KhaosStore.enabled || KhaosStore.hasSession()) return this.setState({ screen: s.isAdvisor ? 'perfil' : 'home' });
        KhaosStore.signIn(s.fEmail.trim(), s.fPass)
          .then(() => { this.setState({ screen: 'home', authed: true, fPass: '', fCed: '' }); this.startSync(); })
          .catch(() => this.say && this.say('Aún no confirmas tu correo'));
      }
    };
  };
  aEmailOk = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test((v || '').trim());
  aSubmit = (e) => {
    e.preventDefault();
    const s = this.state;
    if (s.aMode === 'login') {
      if (!this.aEmailOk(s.aEmail)) return this.setState({ aErr: 'Revisa tu correo.' });
      if (!s.aPass) return this.setState({ aErr: 'Escribe tu contraseña.' });
      const nm = s.aName || s.aEmail.split('@')[0];
      this.setState({ aErr: '', isAdvisor: true, aName: nm, fName: nm, fEmail: s.aEmail, screen: 'perfil', aSaved: false,
        aSpecs: s.aSpecs.length ? s.aSpecs : ['Imagen y estilismo'], aYears: s.aYears || '1–3 años', aHow: s.aHow.length ? s.aHow : ['Videollamada'], aAvail: s.aAvail.length ? s.aAvail : ['Tardes'],
        aTitle: s.aTitle || 'Imagen y estilismo', aBio: s.aBio || 'Cuéntales a las personas cómo trabajas, qué te diferencia y con qué les puedes ayudar.' });
      return;
    }
    if (s.aStep === 0) {
      if (!s.aName.trim()) return this.setState({ aErr: 'Escribe tu nombre completo.' });
      if (!this.aEmailOk(s.aEmail)) return this.setState({ aErr: 'Revisa tu correo.' });
      if (s.aPass.length < 6) return this.setState({ aErr: 'La contraseña necesita mínimo 6 caracteres.' });
      return this.setState({ aErr: '', aStep: 1 });
    }
    if (s.aStep === 1) {
      if (!s.aSpecs.length) return this.setState({ aErr: 'Elige al menos una especialidad.' });
      if (!s.aYears) return this.setState({ aErr: 'Cuéntanos cuántos años de experiencia tienes.' });
      if (s.aBio.trim().length < 30) return this.setState({ aErr: 'Cuéntanos un poco más de ti (mínimo 30 caracteres).' });
      return this.setState({ aErr: '', aStep: 2 });
    }
    if (!s.aHow.length) return this.setState({ aErr: 'Elige cómo atiendes.' });
    if (!s.aAvail.length) return this.setState({ aErr: 'Elige cuándo estás disponible.' });
    if (!s.aTerms) return this.setState({ aErr: 'Debes aceptar los términos y la revisión del equipo.' });
    this.setState({ aErr: '', isAdvisor: true, fName: s.aName.trim(), fEmail: s.aEmail.trim(), aTitle: s.aSpecs[0], screen: 'verify', aSaved: false });
  };
  aSave = () => {
    const s = this.state;
    if (!s.aName.trim()) return this.setState({ aErr: 'Escribe tu nombre público.', aSaved: false });
    if (s.aBio.trim().length < 30) return this.setState({ aErr: 'Tu bio necesita mínimo 30 caracteres.', aSaved: false });
    if (!s.aSpecs.length) return this.setState({ aErr: 'Elige al menos una especialidad.', aSaved: false });
    this.setState({ aErr: '', aSaved: true, fName: s.aName.trim() });
    clearTimeout(this._at); this._at = setTimeout(() => this.setState({ aSaved: false }), 3500);
  };

  joinChannel = () => {
    const s = this.state, ch = CHANNELS.find(c => c.id === s.channel);
    if (!s.rulesOk || s.pending[ch.id]) return;
    if (ch.approval) {
      this.setState({ pending: { ...s.pending, [ch.id]: true } });
      setTimeout(() => this.setState(x => ({ pending: { ...x.pending, [ch.id]: false }, joined: { ...x.joined, [ch.id]: true }, rulesOk: false })), 2200);
    } else this.setState({ joined: { ...s.joined, [ch.id]: true }, rulesOk: false });
  };

  tilt = (e) => {
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--kh-glow', '1'); el.style.setProperty('--kh-x', ((x + 0.5) * 100) + '%'); el.style.setProperty('--kh-y', ((y + 0.5) * 100) + '%');
    el.style.transform = 'perspective(800px) rotateY(' + (x * 14) + 'deg) rotateX(' + (-y * 14) + 'deg) translateZ(6px)';
  };
  untilt = (e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.setProperty('--kh-glow', '0'); };

  wearItem = (it) => {
    const slot = SLOT_OF[it.cat];
    this.setState(s => ({ shared: false, outfit: { ...s.outfit, [slot]: s.outfit[slot] === it.id ? null : it.id } }));
  };
  canvasRef = React.createRef();
  addItem = () => {};
  stageRef = React.createRef();
  rot = { y: -22, x: 8 }; dragging = null; timer = null;
  applyRot = () => {
    const el = this.stageRef.current; if (!el) return;
    if (this.viewsMode) {
      const a = ((this.rot.y % 360) + 360) % 360;
      const act = Math.round(a / 90) % 4;
      for (let k = 0; k < 4; k++) {
        const n = el.querySelector('[data-k="v' + k + '"]'); if (!n) continue;
        const d = ((a - k * 90 + 540) % 360) - 180;
        const on = k === act;
        n.style.opacity = on ? 1 : 0;
        n.style.transform = on ? 'scaleX(' + Math.max(0.1, Math.cos(Math.abs(d) * Math.PI / 180 * 1.8)).toFixed(3) + ') translateX(' + (-d * 0.35).toFixed(1) + 'px)' : 'scaleX(0.1)';
        n.style.filter = on ? 'brightness(' + (1 - 0.35 * Math.abs(d) / 45).toFixed(2) + ')' : 'none';
      }
      el.style.transform = 'rotateX(' + (this.rot.x * 0.5) + 'deg)';
      return;
    }
    const th = this.rot.y * Math.PI / 180, c = Math.cos(th), s = Math.abs(Math.sin(th));
    el.style.transform = 'rotateX(' + this.rot.x + 'deg)';
    const set = (k, sx, br, op) => { const n = el.querySelector('[data-k="' + k + '"]'); if (n) { n.style.transform = 'scaleX(' + Math.max(sx, 0.002) + ')'; n.style.filter = 'brightness(' + br + ')'; n.style.opacity = op; } };
    const sh = 0.5 + 0.5 * Math.abs(c);
    set('front', Math.max(c, 0), sh, c > 0 ? 1 : 0);
    set('back', Math.max(-c, 0), sh, c < 0 ? 1 : 0);
    set('side', 0.16 * s, 0.9, s > 0.02 ? 1 : 0);
  };
  openDetail = (id) => {
    const it = this.state.closet.find(c => c.id === id); this.viewsMode = !!(it && it.views);
    this.rot = { y: this.viewsMode ? 20 : -22, x: 4 }; this.dragging = null;
    this.setState({ detail: id }, () => this.applyRot());
    clearInterval(this.timer);
    this.timer = setInterval(() => { if (!this.dragging) { this.rot.y += 0.6; this.applyRot(); } }, 30);
  };
  closeDetail = () => { clearInterval(this.timer); this.setState({ detail: null }); };
  componentWillUnmount() { if (this._sp) { cancelAnimationFrame(this._sp.raf); window.removeEventListener('mousemove', this._sp.mm); } window.removeEventListener('deviceorientation', this.onTilt); window.removeEventListener('devicemotion', this.onMotion); clearInterval(this._pi); clearTimeout(this._pt1); if (this._pt) { cancelAnimationFrame(this._pt.raf); window.removeEventListener('mousemove', this._pt.mm); } clearInterval(this.timer); }
  stageDown = (e) => { this.dragging = { x: e.clientX, y: e.clientY }; };
  stageMove = (e) => { const d = this.dragging; if (!d) return; this.rot.y += (e.clientX - d.x) * 0.8; this.rot.x = Math.max(-35, Math.min(35, this.rot.x - (e.clientY - d.y) * 0.4)); this.dragging = { x: e.clientX, y: e.clientY }; this.applyRot(); };
  stageUp = () => { this.dragging = null; };
  dragStart = (it, e) => {
    const r = this.canvasRef.current.getBoundingClientRect();
    this.setState({ drag: { id: it.id, sx: e.clientX, sy: e.clientY, moved: false, r } });
  };
  dragMove = (e) => {
    const d = this.state.drag; if (!d) return;
    const moved = d.moved || Math.abs(e.clientX - d.sx) + Math.abs(e.clientY - d.sy) > 5;
    if (!moved) return;
    const x = Math.max(8, Math.min(92, (e.clientX - d.r.left) / d.r.width * 100)), y = Math.max(8, Math.min(92, (e.clientY - d.r.top) / d.r.height * 100));
    this.setState(s => ({ drag: { ...d, moved: true }, pos: { ...s.pos, [d.id]: { x, y } } }));
  };
  dragEnd = () => {
    const d = this.state.drag; if (!d) return;
    if (!d.moved) { const it = this.state.closet.find(c => c.id === d.id); this.setState({ drag: null }); this.wearItem(it); }
    else this.setState({ drag: null });
  };
  startCombo = () => {
    clearInterval(this.comboTimer);
    const cl = this.state.closet; const pool = (sl) => cl.filter(c => SLOT_OF[c.cat] === sl);
    const final = {}; ['head', 'eyes', 'top', 'bottom', 'shoes'].forEach(sl => { const xs = pool(sl); final[sl] = xs.length ? xs[Math.floor(Math.random() * xs.length)].id : null; });
    const order = [['top', 800], ['bottom', 1300], ['shoes', 1800], ['head', 2300], ['eyes', 2700]];
    const t0 = Date.now();
    this.setState({ combo: { open: true, picks: {}, locked: {}, final, done: false } });
    this.comboTimer = setInterval(() => {
      const el = Date.now() - t0; const picks = {}; const locked = {};
      order.forEach(([sl, ms], n) => { if (el >= ms) { locked[sl] = true; picks[sl] = final[sl]; } else { const xs = pool(sl); picks[sl] = xs.length ? xs[(Math.floor(el / 120) + n) % xs.length].id : null; } });
      const done = el >= 2800; if (done) clearInterval(this.comboTimer);
      this.setState({ combo: { open: true, picks, locked, final, done } });
    }, 120);
  };
  fileRef = React.createRef();
  addVideoRef = React.createRef();
  stopAddCam = () => { if (this._astream) { this._astream.getTracks().forEach(tr => tr.stop()); this._astream = null; } };
  say = (text, undo) => { clearTimeout(this._tt); this._undo = undo || null; this.setState({ toast: { text, undo: !!undo } }); this._tt = setTimeout(() => this.setState({ toast: null }), 4500); };
  openAdd = () => this.setState({ add: { step: 'consent', name: '', cat: 'Camisetas', img: null, err: '' } });
  closeAdd = () => { this.stopAddCam(); this.setState({ add: null }); };
  addPickFile = () => { const f = this.fileRef.current; if (f) { f.value = ''; f.click(); } };
  shrink = (src, w, h) => { const m = Math.max(w, h), k = Math.min(1, 720 / m), cw = Math.round(w * k), ch = Math.round(h * k); const c = document.createElement('canvas'); c.width = cw; c.height = ch; const x = c.getContext('2d'); x.fillStyle = '#111'; x.fillRect(0, 0, cw, ch); x.drawImage(src, 0, 0, cw, ch); return c.toDataURL('image/jpeg', 0.86); };
  addFile = (e) => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => { const im = new Image(); im.onload = () => { const url = this.shrink(im, im.naturalWidth, im.naturalHeight); this.stopAddCam(); this.setState(st => ({ add: { ...st.add, step: 'form', img: url, err: '' } })); }; im.src = rd.result; };
    rd.readAsDataURL(f);
  };
  addCamStart = () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { this.setState(st => ({ add: { ...st.add, step: st.add.step === 'form' ? 'form' : 'consent', err: 'Tu navegador no permite usar la cámara aquí. Sube una foto.' } })); return; }
    navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1080 }, height: { ideal: 1440 } }, audio: false }).then(stream => {
      this.stopAddCam(); this._astream = stream;
      this.setState(st => ({ add: { ...st.add, step: 'cam', err: '' } }), () => { const v = this.addVideoRef.current; if (v) { v.srcObject = stream; v.play && v.play().catch(() => {}); } });
    }).catch(() => this.setState(st => ({ add: { ...st.add, step: 'consent', err: 'No pudimos abrir la cámara. Revisa el permiso o sube una foto.' } })));
  };
  addSnap = () => { const v = this.addVideoRef.current; if (!v || !v.videoWidth) return; const url = this.shrink(v, v.videoWidth, v.videoHeight); this.stopAddCam(); this.setState(st => ({ add: { ...st.add, step: 'form', img: url } })); };
  saveAdd = () => {
    const a = this.state.add; if (!a || !a.img) return;
    const id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now(); const name = (a.name || '').trim() || ('Mi ' + a.cat.toLowerCase());
    this.stopAddCam();
    this.setState(st => ({ closet: [{ id, name, cat: a.cat, img: a.img, color: 'oklch(0.6 0.02 250)', worn: 0 }, ...st.closet], closetCat: a.cat, add: null }), () => this.say('Guardaste "' + name + '" en My closet'));
    if (KhaosStore.enabled && KhaosStore.hasSession() && typeof id === 'string') {
      KhaosStore.addClosetItem({ id, name, cat: a.cat, img: a.img }).then(() => this.setState(st => ({ closet: st.closet.map(c => c.id === id ? { ...c, synced: true } : c) }))).catch((e) => console.warn('KHAOS: no se pudo guardar la prenda', e));
    }
  };
  openBuild = () => this.setState(st => ({ build: { slot: 'top', picks: { head: st.outfit.head || null, eyes: st.outfit.eyes || null, top: st.outfit.top || null, bottom: st.outfit.bottom || null, shoes: st.outfit.shoes || null } } }));
  closeBuild = () => this.setState({ build: null });
  buildClear = () => this.setState(st => ({ build: { ...st.build, picks: {} } }));
  buildUse = () => this.setState(st => ({ outfit: { ...st.outfit, ...['head', 'eyes', 'top', 'bottom', 'shoes'].reduce((o, k) => { o[k] = st.build.picks[k] || null; return o; }, {}) }, shared: false, build: null }), () => this.say('Outfit de hoy actualizado'));
  componentWillUnmount() { this.stopAddCam && this.stopAddCam(); clearInterval(this.comboTimer); if (this._stream) this._stream.getTracks().forEach(tr => tr.stop()); }
  closeCombo = () => { clearInterval(this.comboTimer); this.setState({ combo: null }); };
  wearCombo = () => { const c = this.state.combo; if (!c) return; clearInterval(this.comboTimer); this.setState({ outfit: { ...this.state.outfit, ...c.final }, shared: false, combo: null }); };
  shuffleOutfit = () => {
    const pick = (slot) => { const xs = this.state.closet.filter(c => SLOT_OF[c.cat] === slot); return xs.length ? xs[Math.floor(Math.random() * xs.length)].id : null; };
    this.setState({ shared: false, outfit: { top: pick('top'), bottom: pick('bottom'), shoes: pick('shoes'), shoes: pick('shoes'), head: Math.random() > 0.3 ? pick('head') : null, eyes: Math.random() > 0.3 ? pick('eyes') : null } });
  };
  shareOutfit = () => {
    const s = this.state; const names = SLOTS.map(([k]) => s.outfit[k]).filter(Boolean).map(id => s.closet.find(c => c.id === id).name);
    if (!names.length || s.shared) return;
    const posts = { ...s.posts, looks: [{ user: s.fName || 'tú', mine: true, text: 'Fit de hoy: ' + names.join(' + '), time: 'ahora', likes: 0 }, ...s.posts.looks] };
    this.setState(x => ({ posts, shared: true, myPosts: x.myPosts + 1 }));
    this.remotePost('looks', 'Fit de hoy: ' + names.join(' + '), false, false);
  };

  sendPost = (e) => {
    e.preventDefault();
    const t = this.state.postDraft.trim(), photo = this.state.photoDraft;
    if (!t && !photo) return;
    const ch = this.state.channel, id = 'p' + Date.now();
    const posts = { ...this.state.posts, [ch]: [{ id, user: this.state.anon ? 'Anónimo' : (this.state.fName || 'tú'), anon: this.state.anon, circle: this.state.circle, mine: true, text: t, photo, time: 'ahora', likes: 0 }, ...this.state.posts[ch]] };
    this.setState(s => ({ posts, postDraft: '', photoDraft: null, myPosts: s.myPosts + 1 }));
    if (t) this.remotePost(ch, t, !!this.state.anon, !!this.state.circle);
    if (photo) {
      const give = (t2, say) => setTimeout(() => this.setState(st => ({ reacts: { ...st.reacts, [id]: [...(st.reacts[id] || []), t2] } }), () => { if (say && this.say) this.say('Alguien te dejó una frase: «' + t2 + '»'); }), say ? 2200 : 4800);
      give('Te ves increíble', true); give('Qué orgullo verte', false);
    }
  };

  shareResult = () => {
    const id = IDENTITIES[this.state.identity];
    const posts = { ...this.state.posts, looks: [{ user: this.state.fName || 'tú', text: 'Mi identidad KHAOS: ' + id.n.toUpperCase() + ' ✦', time: 'ahora', likes: 0 }, ...this.state.posts.looks] };
    this.setState(s => ({ posts, channel: 'looks', screen: 'comunidad', myPosts: s.myPosts + 1 }));
    this.remotePost('looks', 'Mi identidad KHAOS: ' + id.n.toUpperCase() + ' ✦', false, false);
  };

  renderVals() {
    const h = React.createElement;
    if (!this._fx) {
      const font = "'Stretch Pro','Helvetica Neue',Helvetica,Arial,sans-serif";
      const word = (style, key) => h('div', { key, style: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: font, fontWeight: 800, fontSize: 44, letterSpacing: '0.02em', whiteSpace: 'nowrap', ...style } }, 'KHAO', h('span', { style: { opacity: 0.22 } }, 'S'));

      this._fx = {
        logo3d: h('div', { style: { position: 'relative', width: 300, height: 90 } }, word({ color: 'oklch(0.98 0 0)' }, 'front')),
        bgOrbs: h('div', { style: { position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 } },
          h('div', { style: { position: 'absolute', width: 520, height: 520, left: '8%', top: '-10%', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.45 0.058 240 / 0.35), transparent 65%)', filter: 'blur(20px)', animation: 'khOrbA 14s ease-in-out infinite' } }),
          h('div', { style: { position: 'absolute', width: 600, height: 600, right: '2%', bottom: '-20%', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.38 0.16 20 / 0.4), transparent 65%)', filter: 'blur(24px)', animation: 'khOrbB 18s ease-in-out infinite' } }))
      };
    }
    const s = this.state;
    const go = (screen) => () => this.setState({ screen, notif: false, ...(screen === 'asesor' ? { advView: null, advPrev: null } : {}) });
    const TD = { head: [50, 11, 30], eyes: [50, 19, 34], top: [50, 42, 66], bottom: [50, 70, 46], shoes: [50, 89, 44], bag: [78, 60, 30], watch: [22, 56, 14] };
    const tryPick = (it) => () => { const sl = SLOT_OF[it.cat]; if (!sl) return; const cur = s.tryOn[sl]; const nxt = { ...s.tryOn }; if (cur && cur.id === it.id) delete nxt[sl]; else nxt[sl] = { id: it.id, x: TD[sl][0], y: TD[sl][1], w: TD[sl][2] }; this.setState({ tryOn: nxt, trySel: cur && cur.id === it.id ? null : sl, trySaved: false }); };
    const tryResize = (d) => () => { const sl = s.trySel; if (!sl || !s.tryOn[sl]) return; this.setState({ tryOn: { ...s.tryOn, [sl]: { ...s.tryOn[sl], w: Math.max(14, Math.min(110, s.tryOn[sl].w + d)) } } }); };
    const blue = 'oklch(0.72 0.061 230)';
    const mainScreens = ['home', 'asesor', 'comunidad', 'articulos', 'perfil'];
    const onbItem = ONB[s.onb];
    const ch = CHANNELS.find(c => c.id === s.channel);
    const idObj = s.identity != null ? IDENTITIES[s.identity] : null;
    const name = s.fName || 'khaoser';
    const jumpList = [['splash', 'Splash'], ['onb', 'Onboarding'], ['reg', 'Registro / login'], ['verify', 'Verificar correo'], ['home', 'Home'], ['asesor', 'Asesores (reales)'], ['pagos', 'Membresía / pago'], ['ayuda', 'Ayuda'], ['comunidad', 'Comunidad'], ['articulos', 'Historias'], ['ropa', 'Ropa (donar / inspírate)'], ['checkin', 'Mi día (autoestima)'], ['identidad', 'Identidad visual'], ['perfil', 'Perfil y ajustes']];
    const dc = s.detail != null ? s.closet.find(c => c.id === s.detail) : null; const dOn = dc ? s.outfit[SLOT_OF[dc.cat]] === dc.id : false; const dFav = dc ? !!s.favs[dc.id] : false;
    const v = {
      detailOpen: !!dc, stageRef: this.stageRef, closeDetail: this.closeDetail, stageDown: this.stageDown, stageMove: this.stageMove, stageUp: this.stageUp,
            detailClassicShow: dc && dc.views ? 'none' : 'flex', detailViewsShow: dc && dc.views ? 'flex' : 'none',
      detailView0Bg: dc && dc.views ? 'url(' + dc.views[0] + ')' : 'none', detailView1Bg: dc && dc.views ? 'url(' + dc.views[1] + ')' : 'none', detailView2Bg: dc && dc.views ? 'url(' + dc.views[0] + ')' : 'none', detailView3Bg: dc && dc.views ? 'url(' + dc.views[2] + ')' : 'none',
      detailFrontBg: dc && dc.img ? 'url(' + dc.img + ')' : 'none', detailBackFlip: dc && dc.img && !dc.imgBack ? -1 : 1, detailBackBg: dc && dc.imgBack ? 'url(' + dc.imgBack + ')' : (dc && dc.img ? 'url(' + dc.img + ')' : 'none'), detailSideBg: 'none', detailImgShow: dc && dc.img ? 'block' : 'none', detailMarkShow: dc && !dc.img ? 'block' : 'none', detailMark: dc ? dc.cat[0] : '',
      detailName: dc ? dc.name : '', detailCat: dc ? dc.cat : '', detailWorn: dc ? (dc.worn ? 'usado ' + dc.worn + ' veces' : 'nuevo') : '',
      detailFav: () => dc && this.setState({ favs: { ...s.favs, [dc.id]: !dFav } }), detailFavColor: dFav ? 'oklch(0.65 0.2 15)' : 'oklch(0.9 0 0)', detailFavFill: dFav ? 'currentColor' : 'none',
      detailWear: () => dc && this.wearItem(dc), detailWearLabel: dOn ? 'QUITAR DEL OUTFIT' : 'PONÉRMELO',
      logo3d: this._fx.logo3d, bgOrbs: null, tilt: this.tilt, untilt: this.untilt,
      jumps: jumpList.map(([k, l]) => ({ label: l, go: go(k), bg: s.screen === k ? 'oklch(0.72 0.061 230 / 0.2)' : 'oklch(1 0 0 / 0.04)' })).concat([
        { label: 'Registro de asesor', go: () => this.setState({ screen: 'areg', aStep: 0, aErr: '', aMode: 'signup' }), bg: s.screen === 'areg' ? 'oklch(0.72 0.061 230 / 0.2)' : 'oklch(1 0 0 / 0.04)' },
        { label: 'Perfil de asesor (editar)', go: () => this.setState({ isAdvisor: true, screen: 'perfil', aErr: '', aName: s.aName || 'Laura Martínez', aSpecs: s.aSpecs.length ? s.aSpecs : ['Imagen y estilismo', 'Colorimetría'], aYears: s.aYears || '3–5 años', aHow: s.aHow.length ? s.aHow : ['Videollamada', 'Chat'], aAvail: s.aAvail.length ? s.aAvail : ['Tardes', 'Noches'], aTitle: s.aTitle || 'Estilista de imagen', aLine: s.aLine || 'Tu imagen, editada.', aRate: s.aRate || '60000', aBio: s.aBio || 'Trabajo contigo desde lo que ya tienes en el clóset. Construimos un estilo reconocible, cómodo y tuyo.' }), bg: s.screen === 'perfil' && s.isAdvisor ? 'oklch(0.72 0.061 230 / 0.2)' : 'oklch(1 0 0 / 0.04)' }
      ]),
      isDev: this._dev,
      outerBg: (s.screen === 'splash' || s.screen === 'home') ? '#000' : 'linear-gradient(180deg, oklch(0.13 0.01 250), oklch(0.04 0 0) 55%, oklch(0.08 0.03 20))',
      screenBg: (s.screen === 'splash' || s.screen === 'home') ? '#000' : 'linear-gradient(180deg, oklch(0.13 0.01 250), oklch(0.04 0 0) 55%, oklch(0.08 0.03 20))',
      isSplash: s.screen === 'splash', isOnb: s.screen === 'onb', isReg: s.screen === 'reg', isVerify: s.screen === 'verify',
      ...this.advAccountVals(s),
      isHome: s.screen === 'home',
      homeTiles: [['checkin','Mi día','D','Cómo te sientes hoy'],['asesor','Asesores','A','Sesiones con personas reales'],['comunidad','Comunidad','C','Espacios sin juicios'],['articulos','Historias','H','Moda y tendencias'],['ropa','Ropa','R','Dona e inspírate'],['pagos','Membresía','K+','Planes y pago']].map(([k, label, mark, sub]) => ({ label, mark, sub, go: () => this.setState({ screen: k, notif: false }) })), isAsesor: s.screen === 'asesor', isComunidad: s.screen === 'comunidad', isPerfil: s.screen === 'perfil', isArticulos: s.screen === 'articulos',
      articleList: s.article == null, articleOpen: s.article != null,
      artCats: ART_CATS.map(c => ({ label: c, go: () => this.setState({ artCat: c }), bg: s.artCat === c ? 'oklch(0.72 0.061 230 / 0.2)' : 'transparent', border: s.artCat === c ? 'oklch(0.72 0.061 230 / 0.6)' : 'oklch(1 0 0 / 0.15)' })),
      articles: ARTICLES.map((a, i) => ({ ...a, i })).filter(a => s.artCat === 'Todos' || a.cat === s.artCat).map(a => ({ ...a, open: () => window.open(a.url, '_blank', 'noopener') })),
      art: s.article != null ? ARTICLES[s.article] : ARTICLES[0],
      artBody: (s.article != null ? ARTICLES[s.article] : ARTICLES[0]).body.map(t => ({ t })),
      closeArticle: () => this.setState({ article: null }),
      discussArticle: () => this.setState({ screen: 'comunidad', channel: 'general', postDraft: 'Sobre "' + ARTICLES[s.article].title + '": ' }),
      meInitial: (s.fName || 'Tú')[0].toUpperCase(),
      meShown: s.anon ? '?' : (s.fName || 'Tú')[0].toUpperCase(),
      meTint: s.anon ? 'oklch(0.3 0.01 250)' : 'linear-gradient(135deg, oklch(0.6 0.064 230), oklch(0.4 0.16 20))',
      toggleAnon: () => this.setState({ anon: !s.anon }), anonLabel: s.anon ? '● Anónimo' : 'Anónimo',
      anonBg: s.anon ? 'oklch(0.62 0.064 230 / 0.2)' : 'transparent', anonBorder: s.anon ? 'oklch(0.62 0.064 230 / 0.7)' : 'oklch(1 0 0 / 0.15)',
      toggleCircle: () => this.setState({ circle: !s.circle }), circleLabel: s.circle ? '● Mi círculo' : 'Todos',
      circleBg: s.circle ? 'oklch(0.75 0.15 160 / 0.15)' : 'transparent', circleBorder: s.circle ? 'oklch(0.75 0.15 160 / 0.6)' : 'oklch(1 0 0 / 0.15)',
      groupTabs: GROUPS.map(([gid, label]) => { const on = (CHANNELS.find(c => c.id === s.channel) || {}).g === gid; return { label: gid === 'otras' ? 'Otras' : label, go: () => this.setState({ channel: CHANNELS.find(c => c.g === gid).id }), color: on ? 'oklch(0.97 0 0)' : 'oklch(0.6 0.01 250)', weight: on ? '800' : '500', bar: on ? 'oklch(0.98 0 0 / 0.85)' : 'transparent' }; }),
      groupChannels: CHANNELS.filter(c => c.g === (CHANNELS.find(x => x.id === s.channel) || {}).g).map(c => ({ name: c.name, locked: !s.joined[c.id] && !c.ro, go: () => this.setState({ channel: c.id }), weight: c.id === s.channel ? '700' : '400', bg: c.id === s.channel ? 'linear-gradient(135deg, oklch(1 0 0 / 0.2), oklch(1 0 0 / 0.05))' : 'transparent', border: c.id === s.channel ? 'oklch(0.62 0.064 230 / 0.7)' : 'oklch(1 0 0 / 0.15)' })),
      channelGroups: GROUPS.map(([gid, label]) => ({ label, items: CHANNELS.filter(c => c.g === gid).map(c => ({ name: c.name, go: () => this.setState({ channel: c.id }), bg: c.id === s.channel ? 'oklch(0.72 0.061 230 / 0.18)' : 'transparent', color: c.id === s.channel ? 'oklch(0.95 0.05 230)' : 'oklch(0.7 0.01 250)', weight: c.id === s.channel ? '700' : '400' })) })),
      toastOn: !!s.toast, toastText: s.toast ? s.toast.text : '', toastUndoShow: s.toast && s.toast.undo ? 'block' : 'none',
      toastUndo: () => { const u = this._undo; this._undo = null; this.setState({ toast: null }); if (u) u(); },
      isCheckin: s.screen === 'checkin', moodOn: !!s.mood, winDraft: s.winDraft, wins: s.wins.map(t => ({ t })),
      moods: ['Genial', 'Bien', 'Más o menos', 'Bajón', 'Con ansiedad'].map(k => { const on = s.mood === k; return { label: k, go: () => { const d = new Date().getDay(); this.setState({ mood: k, moodLog: { ...s.moodLog, [d]: k } }); }, col: on ? 'oklch(0.1 0 0)' : 'oklch(0.98 0 0)', bg: on ? 'oklch(0.98 0 0)' : 'oklch(1 0 0 / 0.06)', bd: on ? 'transparent' : 'oklch(1 0 0 / 0.22)' }; }),
      week: (() => { const sc = {"Genial":5,"Bien":4,"Más o menos":3,"Bajón":2,"Con ansiedad":1}, L = ['D','L','M','M','J','V','S'], t = new Date().getDay(); return [6,5,4,3,2,1,0].map(b => { const d = (t - b + 7) % 7, m = s.moodLog[d]; return { l: b === 0 ? 'Hoy' : L[d], h: m ? 12 + sc[m] * 10 : 10, bg: m ? 'oklch(0.98 0 0)' : 'transparent', bs: m ? 'solid' : 'dashed' }; }); })(),
      weekCaption: Object.keys(s.moodLog).length ? 'Altura = qué tan bien te sentiste' : 'Aquí verás cómo cambia tu ánimo',
      helpSheet: s.helpOn, openHelp: () => this.setState({ helpOn: true }), closeHelp: () => this.setState({ helpOn: false }), stop: (e) => e.stopPropagation(), helpTalk: () => this.setState({ helpOn: false, screen: 'asesor' }),
      moodTitle: s.mood ? ({"Genial":["Qué bueno verte así","Guarda este momento. Anota abajo qué lo hizo especial para recordarlo cuando lo necesites.","Anotar lo que me gustó","win"],"Bien":["Vas por buen camino","Los días tranquilos también suman. Hoy puedes hacer algo pequeño por ti.","Armar un outfit con el que me sienta cómodo","closet"],"Más o menos":["Está bien no estar al 100","No tienes que compararte con nadie. Escoge una prenda con la que te sientas tú y empieza por ahí.","Escoger mi prenda favorita","closet"],"Bajón":["Gracias por decirlo","Lo que sientes importa. No estás solo: puedes hablar con el acompañante o entrar a un espacio seguro.","Hablar con mi acompañante","asesor"],"Con ansiedad":["Respira, aquí estás a salvo","Inhala 4 segundos, sostén 4 y exhala 6. Repítelo tres veces. Cuando quieras, cuéntame qué pasó.","Hablar con mi acompañante","asesor"]})[s.mood][0] : '', moodText: s.mood ? ({"Genial":["Qué bueno verte así","Guarda este momento. Anota abajo qué lo hizo especial para recordarlo cuando lo necesites.","Anotar lo que me gustó","win"],"Bien":["Vas por buen camino","Los días tranquilos también suman. Hoy puedes hacer algo pequeño por ti.","Armar un outfit con el que me sienta cómodo","closet"],"Más o menos":["Está bien no estar al 100","No tienes que compararte con nadie. Escoge una prenda con la que te sientas tú y empieza por ahí.","Escoger mi prenda favorita","closet"],"Bajón":["Gracias por decirlo","Lo que sientes importa. No estás solo: puedes hablar con el acompañante o entrar a un espacio seguro.","Hablar con mi acompañante","asesor"],"Con ansiedad":["Respira, aquí estás a salvo","Inhala 4 segundos, sostén 4 y exhala 6. Repítelo tres veces. Cuando quieras, cuéntame qué pasó.","Hablar con mi acompañante","asesor"]})[s.mood][1] : '', moodBtn: s.mood ? ({"Genial":["Qué bueno verte así","Guarda este momento. Anota abajo qué lo hizo especial para recordarlo cuando lo necesites.","Anotar lo que me gustó","win"],"Bien":["Vas por buen camino","Los días tranquilos también suman. Hoy puedes hacer algo pequeño por ti.","Armar un outfit con el que me sienta cómodo","closet"],"Más o menos":["Está bien no estar al 100","No tienes que compararte con nadie. Escoge una prenda con la que te sientas tú y empieza por ahí.","Escoger mi prenda favorita","closet"],"Bajón":["Gracias por decirlo","Lo que sientes importa. No estás solo: puedes hablar con el acompañante o entrar a un espacio seguro.","Hablar con mi acompañante","asesor"],"Con ansiedad":["Respira, aquí estás a salvo","Inhala 4 segundos, sostén 4 y exhala 6. Repítelo tres veces. Cuando quieras, cuéntame qué pasó.","Hablar con mi acompañante","asesor"]})[s.mood][2] : '',
      moodGo: () => { const k = s.mood && ({"Genial":["Qué bueno verte así","Guarda este momento. Anota abajo qué lo hizo especial para recordarlo cuando lo necesites.","Anotar lo que me gustó","win"],"Bien":["Vas por buen camino","Los días tranquilos también suman. Hoy puedes hacer algo pequeño por ti.","Armar un outfit con el que me sienta cómodo","closet"],"Más o menos":["Está bien no estar al 100","No tienes que compararte con nadie. Escoge una prenda con la que te sientas tú y empieza por ahí.","Escoger mi prenda favorita","closet"],"Bajón":["Gracias por decirlo","Lo que sientes importa. No estás solo: puedes hablar con el acompañante o entrar a un espacio seguro.","Hablar con mi acompañante","asesor"],"Con ansiedad":["Respira, aquí estás a salvo","Inhala 4 segundos, sostén 4 y exhala 6. Repítelo tres veces. Cuando quieras, cuéntame qué pasó.","Hablar con mi acompañante","asesor"]})[s.mood][3]; if (k === 'win') { this.say('Escríbelo abajo'); } else if (k) this.setState({ screen: k }); },
      onWin: (e) => this.setState({ winDraft: e.target.value.slice(0, 80) }),
      addWin: () => { const t = s.winDraft.trim(); if (!t) return; this.setState({ wins: [t, ...s.wins], winDraft: '' }); this.say('Guardado. Qué bueno que lo notes'); },
      isRopa: s.screen === 'ropa', isIdentidad: s.screen === 'identidad',
      ropaTitle: s.ropaView === 'donar' ? 'Donar' : s.ropaView === 'inspira' ? 'Inspírate' : 'Ropa',
      ropaHub: s.ropaView === 'hub', ropaDonar: s.ropaView === 'donar', ropaInspira: s.ropaView === 'inspira',
      ropaBack: () => s.ropaView === 'hub' ? this.setState({ screen: 'home' }) : this.setState({ ropaView: 'hub' }),
      idenBack: () => this.setState({ screen: 'home' }),
      ropaCards: [['donar', 'Donar', 'Dale una segunda vida a lo que ya no usas.'], ['inspira', 'Inspírate antes de comprar', 'Mira looks hechos con tus prendas y decide qué te falta.']].map(([k, t, d]) => ({ t, d, go: () => this.setState({ ropaView: k, donDone: false }) })),
      donItems: s.closet.filter(c => c.img).map(c => { const on = !!s.donSel[c.id]; return { name: c.name, bg: 'url(' + c.img + ')', bd: on ? 'oklch(0.98 0 0)' : 'oklch(1 0 0 / 0.14)', chk: on ? 1 : 0, tog: () => this.setState(st => ({ donSel: { ...st.donSel, [c.id]: !st.donSel[c.id] } })) }; }),
      donDests: ['Punto KHAOS', 'Fundación aliada', 'Intercambio entre khaosers'].map(d => { const on = s.donDest === d; return { label: d, go: () => this.setState({ donDest: d }), col: on ? 'oklch(0.1 0 0)' : 'oklch(0.98 0 0)', bg: on ? 'oklch(0.98 0 0)' : 'oklch(1 0 0 / 0.06)', bd: on ? 'transparent' : 'oklch(1 0 0 / 0.2)' }; }),
      donForm: !s.donDone, donDone: s.donDone,
      donLabel: (() => { const n = Object.values(s.donSel).filter(Boolean).length; return n ? 'Donar ' + n + (n === 1 ? ' prenda' : ' prendas') : 'Elige prendas para donar'; })(),
      donBg: Object.values(s.donSel).some(Boolean) ? 'oklch(0.98 0 0)' : 'oklch(1 0 0 / 0.08)', donCol: Object.values(s.donSel).some(Boolean) ? 'oklch(0.1 0 0)' : 'oklch(0.7 0.01 250)',
      donConfirm: () => { const n = Object.values(s.donSel).filter(Boolean).length; if (!n) return; const prev = { ...s.donSel }; this.setState({ donDone: true, donLast: n }); this.say(n + (n === 1 ? ' prenda donada' : ' prendas donadas'), () => this.setState({ donDone: false, donSel: prev })); },
      donMsg: s.donLast + (s.donLast === 1 ? ' prenda va' : ' prendas van') + ' a: ' + s.donDest + '. Te avisamos cuando lleguen.',
      donMore: () => this.setState({ donDone: false, donSel: {} }),
      inspTabs: Object.keys(LOOKS).map(k => { const on = s.inspTab === k; return { label: k, go: () => this.setState({ inspTab: k }), col: on ? 'oklch(0.1 0 0)' : 'oklch(0.98 0 0)', bg: on ? 'oklch(0.98 0 0)' : 'oklch(1 0 0 / 0.06)', bd: on ? 'transparent' : 'oklch(1 0 0 / 0.2)' }; }),
      inspLooks: (LOOKS[s.inspTab] || []).map((l, li) => { const ps = l.cats.map(cat => { const list = s.closet.filter(c => c.cat === cat && c.img); return list.length ? list[li % list.length] : null; }).filter(Boolean); return { name: l.name, pieces: ps.map(p => ({ bg: 'url(' + p.img + ')' })), use: () => { const o = { ...s.outfit }; ps.forEach(p => { o[SLOT_OF[p.cat]] = p.id; }); this.setState({ outfit: o, screen: 'closet' }); } }; }),
      idenColors: [{ name: 'Negro', role: 'Fondo', bg: '#000', w: 70 }, { name: 'Blanco', role: 'Texto y botón sólido', bg: 'oklch(0.98 0 0)', w: 14 }, { name: 'Gris', role: 'Superficies glass', bg: 'oklch(0.3 0 0)', w: 10 }, { name: 'Azul grisáceo', role: 'Acento', bg: 'oklch(0.72 0.061 230)', w: 5 }, { name: 'Rojo', role: 'Un destello puntual', bg: 'oklch(0.62 0.24 25)', w: 1 }],
      idenPics: [rs('assets/s-closet-hoodie.png'), rs('assets/s-closet-jeans-fixed.png'), rs('assets/closet-gorro.png')].map(u => ({ bg: 'url(' + u + ')' })),
      idenRules: ['Fondo negro liso, sin ruido.', 'La prenda va recortada y flotando, con sombra suave.', 'Luz de borde blanca y fría.', 'Sin rostros: tu cara nunca se publica.'],
      idenMotion: ['Entrada: 0,5 s, aparece y sube un poco.', 'Hover: 0,25 s, el glass se vuelve blanco.', 'Prendas: flotan despacio y giran en 3D.', 'Un solo destello rojo, solo en momentos clave.'],
      motionX: s.motionOn ? 220 : 0, motionPlay: () => { this.setState({ motionOn: true }); clearTimeout(this._mt); this._mt = setTimeout(() => this.setState({ motionOn: false }), 900); },
      safeOpen: s.comSafe, openSafe: () => this.setState({ comSafe: true }), closeSafe: () => this.setState({ comSafe: false }),
      goNormas: () => this.setState({ comSafe: false, channel: 'normas' }),
      safeRules: [{ t: 'Entras con permiso', d: 'Los canales cerrados se abren solo con JOIN. Nadie entra sin que lo decidas.' }, { t: 'Tu cara no se publica', d: 'Las fotos del asesor y del probador son privadas y no se guardan.' }, { t: 'Tú decides qué ves', d: 'Silencia, bloquea o sal de un canal cuando quieras.' }, { t: 'Reportar es anónimo', d: 'Cada publicación se puede reportar y el equipo la revisa.' }, { t: 'Cero burlas', d: 'No se permiten comentarios sobre cuerpos, tallas ni identidades.' }],
      showTabs: mainScreens.includes(s.screen) || s.screen === 'pagos' || s.screen === 'ayuda' || s.screen === 'ropa' || s.screen === 'identidad' || s.screen === 'checkin',
      isAyuda: s.screen === 'ayuda', helpQ: s.helpQ, onHelpQ: (e) => this.setState({ helpQ: e.target.value, helpOpen: -1 }),
      helpItems: (() => { const q = s.helpQ.trim().toLowerCase(); return [['¿Cómo pido una sesión con un asesor?','Ve a Asesores, elige a la persona que quieras y toca Pedir una sesión. Te escribirá en menos de 24 horas.'],['¿Cómo entro a un canal?','En Comunidad elige un canal y toca JOIN. Los canales cerrados son de KHAOS+.'],['¿Cómo funciona My closet?','Desde Perfil abre My closet. Toca una prenda para verla en 3D o usa Combinar para armar un outfit.'],['¿Cómo compro la membresía?','Perfil → Membresía KHAOS+. Elige un plan, un método de pago y toca Pagar y activar.'],['¿Cómo cancelo mi membresía?','Perfil → Membresía KHAOS+ → Cancelar membresía.'],['¿Cómo cierro sesión?','Perfil → Cerrar sesión. Te pedimos confirmar con un segundo toque.']].filter(([a, b]) => !q || (a + ' ' + b).toLowerCase().includes(q)).map(([a, b], i) => ({ q: a, a: b, go: () => this.setState({ helpOpen: s.helpOpen === i ? -1 : i }), sign: s.helpOpen === i ? '−' : '+', disp: s.helpOpen === i ? 'block' : 'none', bg: s.helpOpen === i ? 'oklch(1 0 0 / 0.1)' : 'oklch(1 0 0 / 0.04)' })); })(),
      helpEmpty: [['¿Cómo pido una sesión con un asesor?','Ve a Asesores, elige a la persona que quieras y toca Pedir una sesión. Te escribirá en menos de 24 horas.'],['¿Cómo entro a un canal?','En Comunidad elige un canal y toca JOIN. Los canales cerrados son de KHAOS+.'],['¿Cómo funciona My closet?','Desde Perfil abre My closet. Toca una prenda para verla en 3D o usa Combinar para armar un outfit.'],['¿Cómo compro la membresía?','Perfil → Membresía KHAOS+. Elige un plan, un método de pago y toca Pagar y activar.'],['¿Cómo cancelo mi membresía?','Perfil → Membresía KHAOS+ → Cancelar membresía.'],['¿Cómo cierro sesión?','Perfil → Cerrar sesión. Te pedimos confirmar con un segundo toque.']].some(([a, b]) => !s.helpQ.trim() || (a + ' ' + b).toLowerCase().includes(s.helpQ.trim().toLowerCase())) ? 'none' : 'block',
      isPagos: s.screen === 'pagos', paid: s.paid, notPaid: !s.paid, resetPay: () => this.setState({ paid: false, paying: false, plan: 'mensual', payStep: false }), planStep: !s.payStep, sumShort: ({ free: 'Para empezar', mensual: 'Acceso completo', anual: 'Acceso completo + merch' })[s.plan], sumPrice: ({ free: '$0', mensual: '$14.900', anual: '$119.900' })[s.plan], sumPer: ({ free: 'siempre', mensual: '/mes', anual: '/año' })[s.plan], sumBill: ({ free: 'Sin costo, sin tarjeta obligatoria.', mensual: 'Facturación mensual a partir de hoy.', anual: 'Facturación anual a partir de hoy.' })[s.plan], isCardPay: (s.payM || 'card') === 'card', payOpts: [{ id: 'card', name: 'Tarjeta', i1: 'url(' + rs('assets/logo-visa.svg') + ')', i2: 'url(' + rs('assets/logo-mastercard.svg') + ')', w1: 36, w2: 36 }, { id: 'apple', name: 'Apple Pay', i1: 'url(' + rs('assets/logo-apple.svg') + ')', i2: 'none', w1: 18, w2: 0 }, { id: 'gpay', name: 'Google Pay', i1: 'url(' + rs('assets/logo-gpay.svg') + ')', i2: 'none', w1: 22, w2: 0 }].map(o => { const on = (s.payM || 'card') === o.id; return { ...o, go: () => this.setState({ payM: o.id }), dot: on ? 1 : 0, ring: on ? 'oklch(0.98 0 0)' : 'oklch(1 0 0 / 0.4)', bg: on ? 'oklch(1 0 0 / 0.1)' : 'oklch(1 0 0 / 0.03)', bd: on ? 'oklch(1 0 0 / 0.5)' : 'oklch(1 0 0 / 0.14)' }; }), payStep: !!s.payStep, backPlans: () => this.setState({ payStep: false }),
      plans: [{ id: 'free', name: 'Free', tag: 'Actual', sub: 'Canales abiertos y asesores', price: '$0', per: 'siempre', amt: 0 }, { id: 'mensual', name: 'Plus', tag: 'Popular', sub: 'Canales cerrados, asesor sin límite y My closet ilimitado', price: '$14.900', per: 'COP / mes', amt: 14900 }, { id: 'anual', name: 'Pro', tag: 'Ahorra 33%', sub: 'Todo Plus y un drop de merch al año', price: '$119.900', per: 'COP / año', amt: 119900 }].map(p => ({ ...p, go: () => this.setState({ plan: p.id, payStep: true }), short: ({ free: 'Para empezar', mensual: 'Acceso completo', anual: 'Acceso completo + merch' })[p.id], per2: ({ free: 'siempre', mensual: '/mes', anual: '/año' })[p.id], items: ({ free: ['Asesor básico', 'Canales abiertos', 'My closet hasta 10 prendas', 'Sin costo, cancela cuando quieras.'], mensual: ['Canales cerrados: #expertos, #retos, #drops', 'Asesor sin límite y My closet ilimitado', 'Facturación mensual a partir de hoy.', 'Cancela cuando quieras.'], anual: ['Todo lo de Mensual', 'Un drop de merch al año y eventos para miembros', 'Facturación anual a partir de hoy.', 'Cancela cuando quieras.'] })[p.id].map(x => ({ t: x })), cta: p.id === 'free' ? 'Continuar gratis' : 'Obtener ' + p.name.replace('KHAOS+ ', ''), tint: 'oklch(0.3 0.006 250)', col: 'oklch(0.98 0 0)', delay: (['mensual','anual','free'].indexOf(p.id) >= 0 ? ['mensual','anual','free'].indexOf(p.id) : 0) * 0.12 + 's', enter: () => this.setState({ hovPlan: p.id }), leave: (e) => { if (e && e.currentTarget) this.untilt(e); this.setState({ hovPlan: null }); }, hintO: s.hovPlan === p.id ? 0 : 1, perkH: s.hovPlan === p.id ? '160px' : '0px', perkO: s.hovPlan === p.id ? 1 : 0, perkList: ({ free: ['Asesor básico', 'Canales abiertos', 'My closet hasta 10 prendas', 'Con anuncios de colecciones'], mensual: ['Canales cerrados: #expertos, #retos, #drops', 'Asesor sin límite', 'My closet ilimitado', 'Acceso anticipado a colecciones'], anual: ['Todo lo de Mensual', 'Un drop de merch al año', 'Eventos solo para miembros', 'Ahorras 33%'] })[p.id].map(x => '✓  ' + x).join('\n'), tagOp: p.id === 'free' ? 0 : 1, bg: s.plan === p.id ? 'linear-gradient(135deg, oklch(1 0 0 / 0.2), oklch(1 0 0 / 0.05))' : 'oklch(1 0 0 / 0.04)', bd: s.plan === p.id ? 'oklch(1 0 0 / 0.45)' : 'oklch(1 0 0 / 0.12)' })),
      perks: ['Canales cerrados: #expertos, #retos y #drops', 'Sesiones con asesores reales', 'Historias y pósters sin límite', 'Acceso anticipado a colecciones y eventos'],
      sumPlan: [{ id: 'free', name: 'Free', tag: 'Actual', sub: 'Canales abiertos y asesores', price: '$0', per: 'siempre', amt: 0 }, { id: 'mensual', name: 'Plus', tag: 'Popular', sub: 'Canales cerrados, asesor sin límite y My closet ilimitado', price: '$14.900', per: 'COP / mes', amt: 14900 }, { id: 'anual', name: 'Pro', tag: 'Ahorra 33%', sub: 'Todo Plus y un drop de merch al año', price: '$119.900', per: 'COP / año', amt: 119900 }].find(p => p.id === s.plan).name, sumTotal: (() => { const a = [{ id: 'free', name: 'Free', tag: 'Actual', sub: 'Canales abiertos y asesores', price: '$0', per: 'siempre', amt: 0 }, { id: 'mensual', name: 'Plus', tag: 'Popular', sub: 'Canales cerrados, asesor sin límite y My closet ilimitado', price: '$14.900', per: 'COP / mes', amt: 14900 }, { id: 'anual', name: 'Pro', tag: 'Ahorra 33%', sub: 'Todo Plus y un drop de merch al año', price: '$119.900', per: 'COP / año', amt: 119900 }].find(p => p.id === s.plan).amt; return '$' + a.toLocaleString('es-CO') + ' COP'; })(),
      sumMethod: (s.payCards.find(c => c.id === s.payId) ? s.payCards.find(c => c.id === s.payId).brand + ' •••• ' + s.payCards.find(c => c.id === s.payId).last : { nequi: 'Nequi', pse: 'PSE', pay: 'Apple Pay / Google Pay', cod: 'Efectivo' }[s.payId]),
      payLabel: s.paying ? 'Procesando…' : (s.plan === 'free' ? 'Continuar gratis' : 'Pagar y activar'),
      payNow: () => { if (s.paying) return; this.setState({ paying: true }); setTimeout(() => this.setState({ paying: false, paid: true, paidText: s.plan === 'free' ? 'Sigues en el plan Free.' : 'Ya tienes acceso a los canales cerrados.' }), 1600); },
      paidText: s.paidText || '', notAdding: !s.addingCard, addingCard: s.addingCard, cNum: s.cNum, cName: s.cName, cExp: s.cExp, cCvv: s.cCvv, cardError: s.cardError,
      onNum: (e) => { const d = e.target.value.replace(/\D/g, '').slice(0, 16); this.setState({ cNum: d.replace(/(.{4})/g, '$1 ').trim() }); },
      onName: (e) => this.setState({ cName: e.target.value.slice(0, 26) }),
      onExp: (e) => { const d = e.target.value.replace(/\D/g, '').slice(0, 4); this.setState({ cExp: d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d }); },
      onCvv: (e) => this.setState({ cCvv: e.target.value.replace(/\D/g, '').slice(0, 4) }),
      openAdd: () => this.setState({ addingCard: true, cardError: '' }),
      cardBrand: s.addingCard && s.cNum ? (s.cNum[0] === '4' ? 'VISA' : s.cNum[0] === '5' ? 'MASTERCARD' : 'CARD') : (s.payCards[0] ? s.payCards[0].brand : 'CARD'),
      cardPreviewNum: s.addingCard && s.cNum ? (s.cNum + ' ••••  ••••  ••••  ••••').slice(0, 19) : '••••  ••••  ••••  ' + (s.payCards[0] ? s.payCards[0].last : '0000'),
      cardPreviewName: s.addingCard ? (s.cName || 'Nombre apellido') : 'Tu tarjeta',
      cardPreviewExp: s.addingCard ? (s.cExp || 'MM/AA') : '12/28',
      saveCard: () => { const n = s.cNum.replace(/\s/g, ''); if (n.length < 15) return this.setState({ cardError: 'El número de tarjeta está incompleto.' }); if (!s.cName.trim()) return this.setState({ cardError: 'Escribe el nombre que aparece en la tarjeta.' }); if (!/^\d\d\/\d\d$/.test(s.cExp)) return this.setState({ cardError: 'Fecha inválida. Usa MM/AA.' }); if (s.cCvv.length < 3) return this.setState({ cardError: 'El CVV debe tener 3 o 4 dígitos.' }); const id = 'c' + Date.now(); this.setState({ payCards: [...s.payCards, { id, brand: n[0] === '4' ? 'VISA' : n[0] === '5' ? 'MASTERCARD' : 'CARD', last: n.slice(-4), name: s.cName }], payId: id, addingCard: false, cNum: '', cName: '', cExp: '', cCvv: '', cardError: '' }); },
      payMethods: [...s.payCards.map(c => ({ id: c.id, tag: c.brand.slice(0, 4), name: c.brand + ' •••• ' + c.last, sub: '' })), { id: 'nequi', tag: 'NEQ', name: 'Nequi', sub: 'Aprueba desde tu app' }, { id: 'pse', tag: 'PSE', name: 'PSE', sub: 'Débito desde tu banco' }].map(m => ({ ...m, logo: m.tag === 'VISA' ? 'url(' + rs(rs('assets/logo-visa.svg')) + ')' : m.tag === 'MAST' ? 'url(' + rs(rs('assets/logo-mastercard.svg')) + ')' : 'none', tagT: (m.tag === 'VISA' || m.tag === 'MAST') ? '' : m.tag, logoC: 'oklch(0.98 0 0)', go: () => this.setState({ payId: m.id }), dot: s.payId === m.id ? 1 : 0, bg: s.payId === m.id ? 'linear-gradient(135deg, oklch(1 0 0 / 0.2), oklch(1 0 0 / 0.05))' : 'oklch(1 0 0 / 0.04)', bd: s.payId === m.id ? 'oklch(1 0 0 / 0.4)' : 'oklch(1 0 0 / 0.12)' })),
      payStatus: 'Método elegido: ' + ((s.payCards.find(c => c.id === s.payId) && (s.payCards.find(c => c.id === s.payId).brand + ' •••• ' + s.payCards.find(c => c.id === s.payId).last)) || { nequi: 'Nequi', pse: 'PSE', pay: 'Apple Pay / Google Pay', cod: 'Contra entrega' }[s.payId]),
      
      tryStageRef: this.tryStageRef, videoRef: this.videoRef, tryCamOn: s.tryConsent === 'cam', tryErr: s.tryErr || '', tryCam: this.startCam, stopCam: this.stopCam, tryPhotoOn: s.tryConsent === true, tryAsk: s.tryConsent === null,
      tryYes: () => this.setState({ tryConsent: true }), tryNo: () => this.setState({ tryConsent: false }),
      tryHint: Object.keys(s.tryOn).length ? 'Arrastra para mover · − / + para el tamaño' : 'Toca una prenda para probártela',
      tryLayers: ['shoes', 'bottom', 'top', 'bag', 'watch', 'eyes', 'head'].filter(k => s.tryOn[k]).map(k => { const g = s.tryOn[k]; const it = s.closet.find(c => c.id === g.id); return { img: it.img, x: g.x, y: g.y, w: g.w, ol: s.trySel === k ? '1.5px dashed oklch(1 0 0 / 0.8)' : 'none', down: (e) => { e.preventDefault(); e.currentTarget.setPointerCapture(e.pointerId); this._tryDrag = k; this.setState({ trySel: k }); } }; }),
      tryMove: (e) => { const k = this._tryDrag; if (!k || !s.tryOn[k]) return; const r = this.tryStageRef.current.getBoundingClientRect(); const x = Math.max(0, Math.min(100, (e.clientX - r.left) / r.width * 100)); const y = Math.max(0, Math.min(100, (e.clientY - r.top) / r.height * 100)); this.setState({ tryOn: { ...s.tryOn, [k]: { ...s.tryOn[k], x, y } } }); },
      tryUp: () => { this._tryDrag = null; },
      tryTabs: [['all', 'Todo'], ...SLOTS.map(([id, l]) => [id, l])].map(([id, label]) => ({ label, go: () => this.setState({ tryTab: id }), bg: s.tryTab === id ? 'oklch(1 0 0 / 0.22)' : 'oklch(1 0 0 / 0.05)', bd: s.tryTab === id ? 'oklch(1 0 0 / 0.5)' : 'oklch(1 0 0 / 0.14)' })),
      tryItems: s.closet.filter(c => c.img && SLOT_OF[c.cat] && (s.tryTab === 'all' || SLOT_OF[c.cat] === s.tryTab)).map(c => { const on = s.tryOn[SLOT_OF[c.cat]] && s.tryOn[SLOT_OF[c.cat]].id === c.id; return { go: tryPick(c), bg: 'url(' + c.img + ') center / 80% no-repeat', bd: on ? 'oklch(1 0 0 / 0.9)' : 'oklch(1 0 0 / 0.2)' }; }),
      tryMinus: tryResize(-6), tryPlus: tryResize(6),
      tryClear: () => this.setState({ tryOn: {}, trySel: null, trySaved: false }),
      trySave: () => this.setState({ trySaved: true }), trySaveLabel: s.trySaved ? 'Look guardado ✓' : 'Guardar look',
      isCloset: s.screen === 'closet', goCloset: go('closet'), closetCount: s.closet.length,
      closetPeek: s.closet.filter(c => c.img).slice(0, 4).map(c => ({ bg: 'url(' + c.img + ') center / 82% no-repeat, linear-gradient(160deg, oklch(0.28 0.01 250), oklch(0.08 0.005 250))' })),
      canvasRef: this.canvasRef, dragMove: this.dragMove, dragEnd: this.dragEnd,
      floatItems: s.closet.map((c, i) => { const p = s.pos[c.id] || c; const on = s.outfit[SLOT_OF[c.cat]] === c.id; const dragging = s.drag && s.drag.id === c.id && s.drag.moved; return { ...c, x: p.x, y: p.y, on, z: dragging ? 9 : on ? 3 : 2, scale: dragging ? 1.12 : on ? 1.06 : 1, dur: 5 + i * 0.7, delay: -i * 1.3, filter: on ? 'drop-shadow(0 14px 18px oklch(0.15 0.05 250 / 0.55))' : 'drop-shadow(0 8px 10px oklch(0.15 0.05 250 / 0.25))', down: (e) => this.dragStart(c, e) }; }),
      closetCats: CLOSET_CATS.map(c => ({ label: c, count: s.closet.filter(i => c === 'Todo' || i.cat === c).length, go: () => this.setState({ closetCat: c }), bg: (s.closetCat || 'Todo') === c ? 'oklch(0.72 0.061 230 / 0.2)' : 'transparent', border: (s.closetCat || 'Todo') === c ? 'oklch(0.72 0.061 230 / 0.7)' : 'oklch(1 0 0 / 0.15)' })),
      closetItems: s.closet.filter(c => !s.closetCat || s.closetCat === 'Todo' || c.cat === s.closetCat).map(c => { const on = s.outfit[SLOT_OF[c.cat]] === c.id; const f = !!s.favs[c.id]; const hv = s.hov === c.id; return { ...c, on, open: () => this.wearItem(c), enter: () => this.setState({ hov: c.id }), leave: (e) => { e.currentTarget.style.transform = ''; this.setState({ hov: null }); }, infoOp: hv ? 1 : 0, infoY: hv ? '0' : '8px', imgScale: hv || on ? 1.06 : 1, imgFilter: on ? 'drop-shadow(0 0 18px oklch(1 0 0 / 0.35)) drop-shadow(0 14px 16px oklch(0 0 0 / 0.6))' : 'drop-shadow(0 12px 14px oklch(0 0 0 / 0.55))', mark: c.cat[0], markShow: c.img ? 'none' : 'block', imgShow: c.img ? 'block' : 'none', imgSrcBg: c.img ? 'url(' + c.img + ')' : 'none', wearLabel: c.worn ? 'usado ' + c.worn + ' veces' : 'nuevo', wear: () => this.wearItem(c), border: on ? 'oklch(1 0 0 / 0.6)' : 'oklch(1 0 0 / 0.08)', glow: on ? '0 0 0 1px oklch(1 0 0 / 0.35), 0 12px 30px oklch(0 0 0 / 0.6)' : 'none', fav: () => this.setState({ favs: { ...s.favs, [c.id]: !f } }), favColor: f ? 'oklch(0.65 0.2 15)' : 'oklch(0.9 0 0)', favFill: f ? 'currentColor' : 'none' }; }),
      outfitSlots: SLOTS.map(([k, label]) => { const it = s.closet.find(c => c.id === s.outfit[k]); return { slot: label, name: it ? it.name : '—', bg: it ? (it.img ? 'center / 85% no-repeat url(' + it.img + '), linear-gradient(160deg, oklch(0.3 0 0), oklch(0.05 0 0))' : 'linear-gradient(160deg, oklch(0.3 0 0), oklch(0.05 0 0))') : 'transparent', borderStyle: it ? 'solid' : 'dashed', scale: it ? 'scale(1)' : 'scale(0.96)', clear: () => this.setState({ shared: false, outfit: { ...s.outfit, [k]: null } }) }; }),
      openAdd: this.openAdd, closeAdd: this.closeAdd, addOpen: !!s.add, addConsent: !!s.add && s.add.step === 'consent', addCam: !!s.add && s.add.step === 'cam', addForm: !!s.add && s.add.step === 'form',
      addErr: s.add ? s.add.err : '', fileRef: this.fileRef, addVideoRef: this.addVideoRef, addFile: this.addFile, addPickFile: this.addPickFile, addCamStart: this.addCamStart, addSnap: this.addSnap, saveAdd: this.saveAdd,
      addImgBg: s.add && s.add.img ? 'url(' + s.add.img + ')' : 'none', addName: s.add ? s.add.name : '', onAddName: (e) => { const v = e.target.value.slice(0, 28); this.setState(st => ({ add: { ...st.add, name: v } })); },
      addCats: CLOSET_CATS.filter(c => c !== 'Todo').map(c => { const on = s.add && s.add.cat === c; return { label: c, go: () => this.setState(st => ({ add: { ...st.add, cat: c } })), bg: on ? 'oklch(0.98 0 0)' : 'oklch(1 0 0 / 0.06)', bd: on ? 'transparent' : 'oklch(1 0 0 / 0.2)' }; }),
      openBuild: this.openBuild, closeBuild: this.closeBuild, buildOpen: !!s.build, buildClear: this.buildClear, buildUse: this.buildUse,
      buildRows: [['head', 'Cabeza', 64], ['eyes', 'Gafas', 40], ['top', 'Arriba', 140], ['bottom', 'Abajo', 150], ['shoes', 'Pies', 56]].map(([sl, label, h]) => { const b = s.build || { slot: 'top', picks: {} }; const it = s.closet.find(c => c.id === b.picks[sl]); const on = b.slot === sl; return { label, h, bg: it && it.img ? 'url(' + it.img + ')' : 'none', lblShow: it ? 'none' : 'block', hl: on ? 'oklch(1 0 0 / 0.1)' : 'transparent', bs: it ? 'solid' : 'dashed', bc: on ? 'oklch(1 0 0 / 0.7)' : 'oklch(1 0 0 / 0.18)', sel: () => this.setState(st => ({ build: { ...st.build, slot: sl } })) }; }),
      buildTabs: [['head', 'Cabeza'], ['eyes', 'Gafas'], ['top', 'Arriba'], ['bottom', 'Abajo'], ['shoes', 'Pies']].map(([sl, label]) => { const on = s.build && s.build.slot === sl; return { label, go: () => this.setState(st => ({ build: { ...st.build, slot: sl } })), bg: on ? 'oklch(0.98 0 0)' : 'oklch(1 0 0 / 0.06)', bd: on ? 'transparent' : 'oklch(1 0 0 / 0.2)' }; }).map(t => ({ ...t, bg: t.bg, bd: t.bd })),
      buildItems: (() => { const b = s.build; if (!b) return []; return s.closet.filter(c => SLOT_OF[c.cat] === b.slot).map(c => { const on = b.picks[b.slot] === c.id; return { bg: (c.img ? 'center / 84% no-repeat url(' + c.img + '), ' : '') + 'linear-gradient(160deg, oklch(0.26 0 0), oklch(0.07 0 0))', bd: on ? 'oklch(1 0 0 / 0.9)' : 'oklch(1 0 0 / 0.12)', pick: () => this.setState(st => ({ build: { ...st.build, picks: { ...st.build.picks, [st.build.slot]: on ? null : c.id } } })) }; }); })(),
      buildEmptyShow: s.build && !s.closet.some(c => SLOT_OF[c.cat] === s.build.slot) ? 'block' : 'none',
      startCombo: this.startCombo, closeCombo: this.closeCombo, wearCombo: this.wearCombo, comboOpen: !!s.combo, comboDone: !!(s.combo && s.combo.done), comboTitle: s.combo && s.combo.done ? 'Tu combinación' : 'Combinando…',
      comboRows: [['head', 'Cabeza', 78, 'contain'], ['eyes', 'Gafas', 46, 'contain'], ['top', 'Arriba', 180, 'contain'], ['bottom', 'Abajo', 200, 'contain'], ['shoes', 'Pies', 70, 'contain']].map(([sl, label, h]) => { const co = s.combo || { picks: {}, locked: {}, final: {} }; const it = s.closet.find(c => c.id === co.picks[sl]); const lk = !!co.locked[sl]; return { label, h, bg: it && it.img ? 'url(' + it.img + ')' : 'none', name: it ? it.name : 'Sin ' + label.toLowerCase(), scale: lk ? 1 : 0.94, op: lk ? 1 : 0.55, blur: lk ? '0px' : '2px', nameOp: lk ? 1 : 0 }; }),
      shuffleOutfit: this.shuffleOutfit, shareOutfit: this.shareOutfit, addItem: this.addItem, shareLabel: s.shared ? 'Publicado en #looks ✓' : 'Compartir fit',
      goOnb: go('onb'), goReg: go('reg'), goHome: go('home'), goAsesor: go('asesor'), goComunidad: go('comunidad'), goPerfil: go('perfil'),
      onbNum: s.onb + 1, onb0: s.onb === 0, onb1: s.onb === 1, onb2: s.onb === 2, onbTitle: onbItem.t, onbText: onbItem.x, onbCta: s.onb === 2 ? 'Empezar' : 'Siguiente',
      onbDots: ONB.map((_, i) => ({ w: i === s.onb ? '22px' : '6px', bg: i === s.onb ? 'oklch(0.98 0 0)' : 'oklch(1 0 0 / 0.25)' })),
      swDown: (e) => { this._sx = e.clientX; },
      swCancel: () => { this._sx = null; },
      swUp: (e) => { if (this._sx == null) return; const dx = e.clientX - this._sx; this._sx = null; if (Math.abs(dx) < 40) return; if (dx < 0) { s.onb < 2 ? this.setState({ onb: s.onb + 1 }) : this.setState({ screen: 'reg' }); } else if (s.onb > 0) this.setState({ onb: s.onb - 1 }); },
      ...(() => {
        const BASES = [{ bg: 'linear-gradient(160deg, oklch(0.5 0.07 245), oklch(0.12 0.01 250))', img: 'assets/closet-hoodie2.png', col: 'oklch(0.98 0 0)', base: 'oklch(0.35 0.06 245)' }, { bg: 'linear-gradient(160deg, oklch(0.5 0.14 25), oklch(0.1 0.01 250))', img: 'assets/closet-jacket.png', col: 'oklch(0.98 0 0)', base: 'oklch(0.4 0.12 25)' }, { bg: 'linear-gradient(160deg, oklch(0.42 0.02 250), oklch(0.08 0.004 250))', img: 'assets/closet-jeans2.png', col: 'oklch(0.98 0 0)', base: 'oklch(0.3 0.02 250)' }, { bg: 'linear-gradient(160deg, oklch(0.93 0.015 250), oklch(0.72 0.02 250))', img: 'assets/closet-tenis3.png', col: 'oklch(0.12 0 0)', base: 'oklch(0.8 0.02 250)' }];
        const u = (b) => 'url(' + rs(b.img) + ')', cur = BASES[s.pBase];
        const seed = [{ title: 'Me quité el miedo', text: 'Primera vez que salgo sin esconderme. Me sentí yo.', base: 0, by: 'Sofi' }, { title: 'Soltar es estilo', text: 'Doné mi chaqueta favorita y fue de lo mejor que hice.', base: 1, by: 'Dani' }];
        return {
          prevBg: cur.bg, prevCol: cur.col, prevImg: u(cur), prevTitle: s.pTitle || 'Tu título', prevText: s.pText || 'Aquí va tu historia.',
          posterBases: BASES.map((b, i) => ({ img: u(b), base: b.base, bd: s.pBase === i ? 'oklch(0.98 0 0)' : 'transparent', go: () => this.setState({ pBase: i }) })),
          pTitle: s.pTitle, pText: s.pText, onPTitle: (e) => this.setState({ pTitle: e.target.value.slice(0, 40) }), onPText: (e) => this.setState({ pText: e.target.value.slice(0, 220) }),
          publishPoster: () => { if (!s.pTitle.trim() && !s.pText.trim()) return; this.setState({ posters: [{ title: s.pTitle || 'Mi historia', text: s.pText, base: s.pBase, by: s.fName || 'ti' }, ...s.posters], pTitle: '', pText: '' }); },
          posterList: [...s.posters, ...seed].map(q => ({ ...q, bg: BASES[q.base].bg, col: BASES[q.base].col, img: u(BASES[q.base]) })),
          donaRef: this.donaRef, donaFile: this.donaFile, pickDona: this.pickDona, donaBg: s.dFoto ? 'url(' + s.dFoto + ')' : 'none', donaPhotoLabel: s.dFoto ? '' : 'Toca para subir una foto de la prenda',
          dNombre: s.dNombre, onDNombre: (e) => this.setState({ dNombre: e.target.value.slice(0, 40) }), donaErr: s.dErr, donaCode: !!s.dCode, donaCodeText: s.dCode,
          donaTipos: ['Hoodies', 'Jeans', 'Chaquetas', 'Camisetas', 'Tenis', 'Otro'].map(t => ({ label: t, col: s.dTipo === t ? 'oklch(0.12 0 0)' : 'oklch(0.98 0 0)', bg: s.dTipo === t ? 'oklch(0.9 0.05 235)' : 'oklch(1 0 0 / 0.08)', go: () => this.setState({ dTipo: t }) })),
          donaEstados: ['Como nueva', 'Buen estado', 'Para transformar'].map(t => ({ label: t, col: s.dEstado === t ? 'oklch(0.12 0 0)' : 'oklch(0.98 0 0)', bg: s.dEstado === t ? 'oklch(0.9 0.05 235)' : 'oklch(1 0 0 / 0.08)', go: () => this.setState({ dEstado: t }) })),
          sendDona: () => { if (!s.dFoto) return this.setState({ dErr: true }); this.setState({ dCode: 'KHAOS-' + (1000 + Math.floor(Math.random() * 9000)), dErr: false }); }
        };
      })(),
      ...(() => {
        const A = [['Laura M.', 'LM', 'Estilista de imagen', 'En línea', 'Te ayuda a armar looks con lo que ya tienes.', 'assets/closet-hoodie2.png', 96, 6, 18], ['Camilo R.', 'CR', 'Moda urbana y streetwear', 'Hoy 6 pm', 'Arma looks de calle con actitud y piezas que ya tienes.', 'assets/closet-jacket.png', 70, 44, 8], ['Valeria S.', 'VS', 'Asesora de color', 'En línea', 'Descubre qué tonos te favorecen y por qué.', 'assets/closet-jeans2.png', 84, 62, 42], ['Andrés P.', 'AP', 'Personal shopper', 'Mañana 10 am', 'Compra menos y elige mejor, con tu presupuesto y tu estilo.', 'assets/closet-tenis3.png', 62, 24, 62]];
        const i = Math.min(s.advHomeSel, 3);
        return {
          homeAdv: A.map(([name, ini, , , , img, sz, lx, ty], k) => { const on = i === k; return { name, ini, pick: () => this.setState({ advHomeSel: k }), style: { position: 'absolute', left: lx + '%', top: ty + '%', width: sz + 'px', height: sz + 'px', borderRadius: '50%', overflow: 'hidden', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', padding: 0, background: 'oklch(0.2 0.01 250)', border: on ? '2px solid oklch(0.98 0 0)' : '1px solid oklch(1 0 0 / 0.3)', transform: on ? 'scale(1.14)' : 'scale(1)', zIndex: on ? 2 : 1, boxShadow: on ? '0 0 0 6px oklch(0.55 0.23 27 / 0.35)' : 'none', transition: 'transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, border-color .3s ease' }, imgStyle: { position: 'absolute', inset: 0, backgroundImage: 'url(' + rs(img) + ')', backgroundSize: '84%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: on ? 1 : 0.55, transition: 'opacity .3s ease' } }; }),
          advSel: { name: A[i][0], role: A[i][2], status: A[i][3], bio: A[i][4], dot: A[i][3] === 'En línea' ? 'oklch(0.8 0.17 150)' : 'oklch(0.7 0.01 250)' }
        };
      })(),
      ...(() => {
        const SP = { estilo: ['Comunidades por estilo', 'Encuentra personas con tus gustos, comparte referencias y habla de moda.', [['Oversized y básicos', '240 miembros'], ['Vintage y thrift', '180 miembros'], ['Minimal y neutros', '152 miembros']]], amistad: ['Comunidades de amistad', 'Conoce gente, conversa y construye amistades sin presión.', [['Nuevos en KHAOS', '310 miembros'], ['Café y outfits', '96 miembros'], ['Charlas de viernes', '74 miembros']]], vinculos: ['Comunidades por vínculos', 'Cuando dos o más personas conectan de verdad, pueden abrir un espacio compartido para cuidar esa relación.', [['Tu primer vínculo', 'Se crea al conectar con alguien'], ['Amigas del fit', '4 miembros'], ['Dúo de estilo', '2 miembros']]] };
        const cur = SP[s.space];
        return {
          spaceChips: [['estilo', 'Estilo'], ['amistad', 'Amistad'], ['vinculos', 'Vínculos']].map(([k, label]) => { const on = s.space === k; return { label, col: on ? 'oklch(0.98 0 0)' : 'oklch(0.85 0.005 250)', bg: on ? 'oklch(0.5 0.21 27 / 0.85)' : 'oklch(1 0 0 / 0.08)', go: () => this.setState({ space: on ? '' : k }) }; }),
          spaceOpen: !!cur, spaceDesc: cur ? cur[1] : '',
          spaceList: cur ? cur[2].map(([name, meta]) => { const key = s.space + name, on = !!s.spaceJoined[key]; return { name, meta, label: on ? 'Dentro' : 'Unirme', col: on ? 'oklch(0.12 0 0)' : 'oklch(0.98 0 0)', bg: on ? 'oklch(0.92 0.02 80)' : 'oklch(1 0 0 / 0.1)', go: () => this.setState(st => ({ spaceJoined: { ...st.spaceJoined, [key]: !st.spaceJoined[key] } })) }; }) : [],
          rulesNote: !s.rulesGone, closeRules: () => this.setState({ rulesGone: true })
        };
      })(),
      orbStyle: (() => { const h = s.mood ? [...s.mood].reduce((a, c) => a + c.charCodeAt(0), 0) % 360 : 27; return { width: '112px', height: '112px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, oklch(0.95 0.04 ' + h + '), oklch(0.6 0.2 ' + h + ') 55%, oklch(0.2 0.06 ' + h + '))', boxShadow: '0 0 60px oklch(0.55 0.2 ' + h + ' / 0.45)', animation: 'khBreath 4s ease-in-out infinite', transition: 'background .6s ease' }; })(),
      ...this.edVals(s),
      ...this.advVals(s),
      setCed: (e) => this.setState({ fCed: e.target.value.replace(/[^0-9]/g, '').slice(0, 10) }), fCed: s.fCed, fPermData: s.fPermData, fPermNotif: s.fPermNotif, togglePermData: () => this.setState({ fPermData: !s.fPermData }), togglePermNotif: () => this.setState({ fPermNotif: !s.fPermNotif }),
      splashOp: s.splashOut ? 0 : 1, splashRef: this.splashRef, splashGo: this.splashGo, splashGyro: this.splashGyro,
      nextOnb: () => s.onb < 2 ? this.setState({ onb: s.onb + 1 }) : this.setState({ screen: 'reg' }),
      regIsSignup: s.regMode === 'signup',
      regTitle: s.regMode === 'signup' ? 'Crea tu cuenta' : 'Inicia sesión',
      regCta: s.regMode === 'signup' ? 'Registrarme' : 'Entrar',
      regSwitch: s.regMode === 'signup' ? '¿Ya tienes cuenta? Inicia sesión' : '¿Nuevo/a? Crea tu cuenta',
      toggleRegMode: () => this.setState({ regMode: s.regMode === 'signup' ? 'login' : 'signup', regError: '' }),
      fName: s.fName, fAge: s.fAge, fEmail: s.fEmail, fPass: s.fPass, fTerms: s.fTerms, fEmailShown: s.fEmail || 'tu correo',
      setName: e => this.setState({ fName: e.target.value }), setAge: e => this.setState({ fAge: e.target.value }),
      setEmail: e => this.setState({ fEmail: e.target.value }), setPass: e => this.setState({ fPass: e.target.value }),
      toggleTerms: () => this.setState({ fTerms: !s.fTerms }),
      hasRegError: !!s.regError, regError: s.regError, submitReg: this.submitReg,
      notifOpen: s.notif, toggleNotif: () => this.setState({ notif: !s.notif }),
      userName: name, userInitial: name[0].toUpperCase(),
      homeAsesorCta: idObj ? 'Repetir el asesor' : 'Hablar con el asesor',
      homeArticles: ARTICLES.slice(0, 3).map((a, i) => ({ ...a, open: () => window.open(a.url, '_blank', 'noopener') })),
      goArticulos: () => this.setState({ screen: 'articulos', article: null }),
      homeChannels: CHANNELS.filter(c => c.online).slice(0, 2).map(c => ({ ...c, go: () => this.setState({ screen: 'comunidad', channel: c.id }) })),
      asesorStatus: s.phase === 'done' ? (s.colorAsk ? 'Esperando tu foto' : 'En línea') : s.phase === 'perm' ? 'Esperando tu permiso' : 'En línea',
      progress: Math.round((Math.min(s.step, 7) / 7) * 100) + '%',
      chatRef: this.chatRef,
      msgs: (s.msgs || []).map(m => m.from === 'me'
        ? { text: m.text, align: 'flex-end', bg: 'oklch(0.98 0 0)', color: 'oklch(0.1 0 0)', border: 'none', radius: '20px 20px 4px 20px' }
        : { text: m.text, hasSw: !!m.sw, sw: m.sw || [], align: 'flex-start', bg: 'linear-gradient(135deg, oklch(1 0 0 / 0.2), oklch(1 0 0 / 0.05))', color: 'oklch(0.98 0 0)', border: '1px solid oklch(1 0 0 / 0.2)', radius: '20px 20px 20px 4px' }),
      colorAsk: !!s.colorAsk, onColorPhoto: this.onColorPhoto, denyColor: this.denyColor, showQuick: s.phase === 'done' && !s.colorAsk, quickReplies: ['Analizar otra foto', '¿Qué me pongo hoy?', 'Look para salir', 'Look cómodo', 'Qué colores combinar', 'Abrir probador'].map(label => ({ label, go: () => this.quick(label) })), showOptions: s.phase === 'q', showPermission: s.phase === 'perm', showResultCard: s.phase === 'done' && s.identity != null,
      options: s.phase === 'q' ? QUESTIONS[s.step].o.map((l, i) => ({ label: l, pick: () => this.pick(l, i) })) : [],
      onPhoto: this.onPhoto, denyPhoto: this.denyPhoto, resetAsesor: this.resetAsesor,
      draft: s.draft, setDraft: e => this.setState({ draft: e.target.value }), sendText: this.sendText,
      resultName: idObj ? idObj.n : '', resultText: idObj ? idObj.t : '', shareResult: this.shareResult,
      channels: CHANNELS.map(c => ({ name: c.name, go: () => this.setState({ channel: c.id }), bg: c.id === s.channel ? 'oklch(0.72 0.061 230 / 0.18)' : 'transparent', color: c.id === s.channel ? 'oklch(0.95 0.05 230)' : 'oklch(0.7 0.01 250)', weight: c.id === s.channel ? '700' : '400' })),
      chName: ch.name, chDesc: ch.desc, canPost: !ch.ro && !!s.joined[ch.id], readOnly: !!ch.ro,
      isMember: !!s.joined[ch.id] || !!ch.ro, notMember: !s.joined[ch.id] && !ch.ro,
      chTint: ch.tint, chOnline: ch.online || '', chAccess: ch.approval ? 'Requiere aprobación' : 'Canal abierto',
      toggleRules: () => this.setState({ rulesOk: !s.rulesOk }), rulesMark: s.rulesOk ? '✓' : '', rulesBg: s.rulesOk ? 'oklch(0.75 0.15 160)' : 'transparent', rulesBorder: s.rulesOk ? 'oklch(0.75 0.15 160)' : 'oklch(1 0 0 / 0.35)',
      joinChannel: this.joinChannel, joinLabel: s.pending[ch.id] ? 'SOLICITUD ENVIADA…' : (ch.approval ? 'SOLICITAR JOIN' : 'JOIN'),
      joinBg: s.rulesOk && !s.pending[ch.id] ? 'linear-gradient(135deg, oklch(1 0 0 / 0.25), oklch(1 0 0 / 0.07))' : 'oklch(1 0 0 / 0.05)', joinColor: s.rulesOk && !s.pending[ch.id] ? 'oklch(0.98 0 0)' : 'oklch(0.55 0.01 250)', joinCursor: s.rulesOk ? 'pointer' : 'not-allowed',
      joinHint: s.pending[ch.id] ? 'Un moderador está revisando tu solicitud.' : (ch.approval ? 'Un moderador aprueba cada solicitud para cuidar el espacio.' : 'Solo los miembros ven y publican en este canal.'),
      partRef: this.partRef, photoRef: this.photoRef, photoFile: this.photoFile, pickPhoto: this.pickPhoto, clearPhoto: this.clearPhoto, hasPhotoDraft: !!s.photoDraft, photoBg: s.photoDraft ? 'url(' + s.photoDraft + ')' : 'none',
      phrase: BANNERS[s.phraseI % BANNERS.length].t, phraseKind: BANNERS[s.phraseI % BANNERS.length].k === 'h' ? 'Historia para inspirarte' : 'Frase para ti', phraseFs: BANNERS[s.phraseI % BANNERS.length].k === 'h' ? '15px' : '26px', phraseFF: BANNERS[s.phraseI % BANNERS.length].k === 'h' ? "'Helvetica Neue',Helvetica,Arial,sans-serif" : "'Stretch Pro','Helvetica Neue',Helvetica,Arial,sans-serif", phraseTT: 'none',
      aboutTiles: [['Qué es KHAOS', 'Un lugar para jóvenes de 18 a 25 años donde nadie te juzga. Aquí encuentras tu estilo, a personas reales que te acompañan y una comunidad que te hace sentir bien contigo.'], ['Cómo nació', 'Nació de una idea simple: la ropa y las redes no deberían hacerte sentir menos. Empezó entre amigos que querían un espacio seguro, y hoy es de todos.']].map(([t, x], i) => ({ t, x, show: s.aboutOpen === i ? 'block' : 'none', tog: () => this.setState({ aboutOpen: s.aboutOpen === i ? -1 : i }) })), phraseO: s.phraseO, phraseY: s.phraseO ? 0 : 8, nextPhrase: this.nextPhrase, enableGyro: this.enableGyro, gyroBtn: !s.gyro && ((window.DeviceMotionEvent && typeof window.DeviceMotionEvent.requestPermission === 'function') || (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function')) ? 'flex' : 'none',
      posts: s.posts[s.channel].map((p, i) => {
        const key = s.channel + i; const on = !!s.liked[key]; const r = !!s.rted[key];
        const likesN = p.likes + (on ? 1 : 0);
        const pid = p.id || ('seed-' + s.channel + '-' + p.user + '-' + p.time); const got = (s.reacts[pid] || []); const open = !!s.pickOpen[pid];
        return { ...p, circle: !!p.circle, likesL: '', repShow: p.mine ? 'none' : 'flex', repLabel: (s.reports[pid] || 0) >= 3 ? 'Cuenta eliminada' : ((s.reports[pid] || 0) ? 'Reportado ' + s.reports[pid] + '/3' : 'Reportar'), repCol: (s.reports[pid] || 0) >= 3 ? 'oklch(0.8 0.12 25)' : 'oklch(0.75 0.01 250)', report: () => this.setState(st => ({ reports: { ...st.reports, [pid]: Math.min(3, (st.reports[pid] || 0) + 1) } })),
          hasPhoto: !!p.photo, photoBg: p.photo ? 'url(' + p.photo + ')' : 'none', phrases: got, hasPhrases: got.length > 0, phraseLabel: p.mine ? 'Lo que dijeron de ti' : 'Frases para ' + p.user, pickOpen: open,
          togglePick: () => this.setState(st => ({ pickOpen: { ...st.pickOpen, [pid]: !st.pickOpen[pid] } })),
          opts: PHRASES_GIVE.map(t => { const on = got.includes(t); return { t, col: on ? 'oklch(0.12 0 0)' : 'oklch(0.98 0 0)', bg: on ? 'oklch(0.9 0.05 235)' : 'oklch(1 0 0 / 0.08)', give: () => this.setState(st => { const cur = st.reacts[pid] || []; return { reacts: { ...st.reacts, [pid]: on ? cur.filter(x => x !== t) : [...cur, t] } }; }) }; }), rtsL: '', repliesL: '', handle: p.anon ? 'kh-' + (1000 + i * 37) : p.user.toLowerCase().replace(/[^a-z0-9_.]/g, ''), initial: p.anon ? '?' : p.user[0].toUpperCase(), tint: p.anon ? 'oklch(0.3 0.01 250)' : p.user === 'KHAOS' ? 'linear-gradient(135deg, oklch(0.6 0.064 230), oklch(0.4 0.16 20))' : 'oklch(0.3 0.04 250)', likes: p.likes + (on ? 1 : 0), likeColor: on ? 'oklch(0.65 0.2 15)' : 'inherit', replies: Math.round(p.likes / 4), rts: Math.round(p.likes / 3) + (r ? 1 : 0), rtColor: r ? 'oklch(0.75 0.15 160)' : 'inherit', react: () => this.setState({ liked: { ...s.liked, [key]: !on } }), doRt: () => this.setState({ rted: { ...s.rted, [key]: !r } }), doReply: () => this.setState({ postDraft: '@' + p.user.toLowerCase().replace(/[^a-z0-9_.]/g, '') + ' ' }) };
      }),
      postDraft: s.postDraft, setPostDraft: e => this.setState({ postDraft: e.target.value }), sendPost: this.sendPost,
      profileIdentity: s.isAdvisor ? 'Asesor/a KHAOS' : (idObj ? idObj.n : 'Identidad sin descubrir'), myPosts: s.myPosts,
      faqOpen: s.faq,
      settings: [
        { label: 'Mi identidad KHAOS', value: idObj ? 'Ver' : 'Descubrir', go: go('asesor') },
        { label: 'Membresía KHAOS+', value: '', go: go('pagos') },
        { label: 'Ayuda', value: '', go: go('ayuda') },
        { label: 'Identidad visual', value: '', go: go('identidad') },
        { label: 'Ropa: donar e inspirarte', value: '', go: go('ropa') },
        { label: 'Notificaciones', value: 'Activadas', go: () => {} },
        { label: 'Privacidad y fotos', value: 'No se guardan', go: () => {} },
        { label: 'Normas de la comunidad', value: '', go: () => this.setState({ screen: 'comunidad', channel: 'normas' }) },
        { label: 'Preguntas frecuentes y contacto', value: s.faq ? '−' : '+', go: () => this.setState({ faq: !s.faq }) },
        { label: 'Redes', value: '@khaos', go: () => {} }
      ],
      logoutLabel: s.confirmOut ? '¿Seguro? Toca otra vez para salir' : 'Cerrar sesión',
      logout: () => { if (!s.confirmOut) { this.setState({ confirmOut: true }); setTimeout(() => this.setState({ confirmOut: false }), 3000); return; } KhaosStore.signOut(); this.stopSync(); this.setState((st) => ({ posts: JSON.parse(JSON.stringify(SEED)), myPosts: 0, closet: st.closet.filter((c) => !c.synced) })); this.setState({ authed: false, fPass: '', confirmOut: false, helpQ: '', helpOpen: -1, screen: 'splash', onb: 0, regMode: 'login', isAdvisor: false, aMode: 'login', aStep: 0, aErr: '', aSaved: false }); },
      tabs: [['home', '⌂', 'Inicio'], ['asesor', '✦', 'Asesor'], ['comunidad', '#', 'Comunidad'], ['articulos', '▤', 'Historias'], ['perfil', '◉', 'Perfil']].map(([k, icon, label]) => ({ icon, label, go: go(k), color: s.screen === k ? 'oklch(0.98 0 0)' : 'oklch(0.62 0.005 250)', weight: s.screen === k ? '700' : '400', bar: 'transparent', bg: s.screen === k ? 'linear-gradient(135deg, oklch(1 0 0 / 0.2), oklch(1 0 0 / 0.05))' : 'transparent', bd: s.screen === k ? 'oklch(1 0 0 / 0.25)' : 'transparent', sh: s.screen === k ? 'inset 0 1px 0 oklch(1 0 0 / 0.3)' : 'none' }))
    };
    v.tabs.forEach((x, i) => { v['t' + i] = x; });
    return v;
  }
}

