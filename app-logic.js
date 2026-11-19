
// Assets exportados como archivos locales en /assets. rs(path) resuelve el
// mismo path humano que usaba el prototipo original para no tocar el resto
// del codigo.
const RS_MAP = {
  "assets_bag_1_png": "assets/bag-1.png",
  "assets_bag_4_png": "assets/bag-4.png",
  "assets_bape_star_sneaker_png": "assets/bape-star-sneaker.png",
  "assets_bomber_horse_white_png": "assets/bomber-horse-white.png",
  "assets_c2_0_png": "assets/c2-0.png",
  "assets_c2_1_png": "assets/c2-1.png",
  "assets_c2_5_png": "assets/c2-5.png",
  "assets_cap_velvet_w_png": "assets/cap-velvet-w.png",
  "assets_cat_boot_tan_png": "assets/cat-boot-tan.png",
  "assets_closet_gorro_png": "assets/closet-gorro.png",
  "assets_closet_hoodie2_png": "assets/closet-hoodie2.png",
  "assets_closet_jacket_png": "assets/closet-jacket.png",
  "assets_closet_jeans2_png": "assets/closet-jeans2.png",
  "assets_closet_short_png": "assets/closet-short.png",
  "assets_closet_tee2_png": "assets/closet-tee2.png",
  "assets_closet_tenis3_png": "assets/closet-tenis3.png",
  "assets_closet_tenis_png": "assets/closet-tenis.png",
  "assets_closet_zip_png": "assets/closet-zip.png",
  "assets_hat_0_png": "assets/hat-0.png",
  "assets_hat_1_png": "assets/hat-1.png",
  "assets_hat_2_png": "assets/hat-2.png",
  "assets_hoodie_pink_grills_png": "assets/hoodie-pink-grills.png",
  "assets_hoodie_skeleton_black_png": "assets/hoodie-skeleton-black.png",
  "assets_jeans_black_wide_png": "assets/jeans-black-wide.png",
  "assets_jeans_navy_wide_png": "assets/jeans-navy-wide.png",
  "assets_logo_apple_svg": "assets/logo-apple.svg",
  "assets_logo_gpay_svg": "assets/logo-gpay.svg",
  "assets_logo_mastercard_svg": "assets/logo-mastercard.svg",
  "assets_logo_visa_svg": "assets/logo-visa.svg",
  "assets_lv_timberland_boot_png": "assets/lv-timberland-boot.png",
  "assets_mihara_sneaker_png": "assets/mihara-sneaker.png",
  "assets_onb_card_1_png": "assets/onb-card-1.png",
  "assets_onb_card_2_png": "assets/onb-card-2.png",
  "assets_rickowens_hightop_png": "assets/rickowens-hightop.png",
  "assets_s_bag_2_png": "assets/s-bag-2.png",
  "assets_s_bag_3_png": "assets/s-bag-3.png",
  "assets_s_c2_2_png": "assets/s-c2-2.png",
  "assets_s_c2_3_png": "assets/s-c2-3.png",
  "assets_s_c2_4_png": "assets/s-c2-4.png",
  "assets_s_closet_camiseta_png": "assets/s-closet-camiseta.png",
  "assets_s_closet_gafas_png": "assets/s-closet-gafas.png",
  "assets_s_closet_hoodie_png": "assets/s-closet-hoodie.png",
  "assets_s_closet_jeans_fixed_png": "assets/s-closet-jeans-fixed.png",
  "assets_s_closet_tenis2_png": "assets/s-closet-tenis2.png",
  "assets_s_new_0_png": "assets/s-new-0.png",
  "assets_s_new_1_png": "assets/s-new-1.png",
  "assets_s_new_3_png": "assets/s-new-3.png",
  "assets_s_watch_0_png": "assets/s-watch-0.png",
  "assets_s_watch_1_png": "assets/s-watch-1.png",
  "assets_s_watch_2_png": "assets/s-watch-2.png",
  "assets_tee_black_basic1_png": "assets/tee-black-basic1.png",
  "assets_tee_black_basic2_png": "assets/tee-black-basic2.png"
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
const HOME_TILES = [['asesor','Asesor','A','Análisis de tu rostro'],['probador','Probador','P','Pruébate prendas'],['closet','My closet','M','Tus prendas'],['comunidad','Comunidad','C','Canales y looks'],['articulos','Historias','H','Moda y tendencias'],['ropa','Ropa','R','Dona e inspírate'],['ropa','Donar','D','Dona tus prendas','donar'],['identidad','Identidad','Id','Tipografía y color'],['pagos','Membresía','K+','Planes y pago']];
const IDENTITIES = [
  { n: 'Rebelde urbano', t: 'Te mueves con fuerza y no pides permiso. Siluetas oversized, negros profundos y un acento vinotinto.' },
  { n: 'Ruido creativo', t: 'Tu estilo es una obra en proceso. Mezcla texturas, capas y detalles hechos a mano sin miedo al error.' },
  { n: 'Caos silencioso', t: 'Dices mucho sin gritar. Tonos azules fríos, cortes limpios y una sola pieza que rompe la regla.' }
];
const GROUPS = [['khaos', 'KHAOS'], ['hombres', 'Hombres'], ['mujeres', 'Mujeres'], ['otras', 'Otras comunidades']];
const CHANNELS = [
  { id: 'bienvenida', name: 'bienvenida', desc: 'Empieza aquí', ro: true, tint: 'oklch(0.512 0.058 230)', g: 'khaos' },
  { id: 'normas', name: 'normas', desc: 'Respeto primero. Cero odio.', ro: true, tint: 'oklch(0.603 0.15 20)', g: 'khaos' },
  { id: 'looks', name: 'looks', desc: 'Comparte tu fit del día', tint: 'oklch(0.467 0.058 230)', online: '128 en línea', g: 'otras' },
  { id: 'retos', name: 'retos', desc: 'Reto semanal de estilo', tint: 'oklch(0.585 0.16 20)', online: '64 en línea', g: 'otras' },
  { id: 'general', name: 'general', desc: 'Habla de lo que sea', tint: 'oklch(0.648 0.03 250)', online: '210 en línea', g: 'khaos' },
  { id: 'expertos', name: 'expertos', approval: true, desc: 'Estilistas responden', tint: 'oklch(0.422 0.12 200)', online: '12 en línea', g: 'khaos' },
  { id: 'h-looks', name: 'hombres', desc: 'Fits, oversized y básicos', tint: 'oklch(0.512 0.045 250)', online: '96 en línea', g: 'hombres' },
  { id: 'h-grooming', name: 'barba', desc: 'Cortes, barba y cuidado', tint: 'oklch(0.603 0.08 250)', online: '41 en línea', g: 'hombres' },
  { id: 'm-looks', name: 'mujeres', desc: 'Fits, capas y accesorios', tint: 'oklch(0.512 0.16 10)', online: '118 en línea', g: 'mujeres' },
  { id: 'm-makeup', name: 'makeup', desc: 'Makeup que va con tu estilo', tint: 'oklch(0.558 0.14 350)', online: '57 en línea', g: 'mujeres' },
  { id: 'lgbt', name: 'lgbtq+', approval: true, desc: 'Espacio seguro para expresarte', tint: 'oklch(0.467 0.15 300)', online: '73 en línea', g: 'otras' },
  { id: 'skate', name: 'skaters', desc: 'Ropa que aguanta caídas', tint: 'oklch(0.558 0.1 150)', online: '38 en línea', g: 'otras' },
  { id: 'sneakers', name: 'sneakers', desc: 'Drops, limpieza y combos', tint: 'oklch(0.422 0.12 80)', online: '85 en línea', g: 'otras' },
  { id: 'thrift', name: 'thrift', desc: 'Thrift, intercambio y DIY', tint: 'oklch(0.558 0.08 60)', online: '29 en línea', g: 'otras' }
];
const ARTICLES0 = [
  { cat: 'Moda', title: 'Moda: pasarelas, tendencias y street style', author: 'Vogue', read: 'Abrir ↗', url: 'https://www.vogue.com/fashion', shown: 'vogue.com/fashion', tint: 'linear-gradient(135deg, oklch(0.558 0.18 20), oklch(0.829 0.04 250))', body: [] },
  { cat: 'Moda', title: 'Estilo: guía de moda y outfits', author: 'GQ', read: 'Abrir ↗', url: 'https://www.gq.com/style', shown: 'gq.com/style', tint: 'linear-gradient(135deg, oklch(0.558 0.058 230), oklch(0.829 0.04 250))', body: [] },
  { cat: 'Moda', title: 'Moda: moda joven, cultura y experimentación', author: 'Dazed', read: 'Abrir ↗', url: 'https://www.dazeddigital.com/fashion', shown: 'dazeddigital.com/fashion', tint: 'linear-gradient(135deg, oklch(0.558 0.18 300), oklch(0.829 0.04 250))', body: [] },
  { cat: 'Moda', title: 'Moda y cultura juvenil desde Londres', author: 'i-D', read: 'Abrir ↗', url: 'https://www.i-d.co/', shown: 'i-d.co', tint: 'linear-gradient(135deg, oklch(0.558 0.18 20), oklch(0.829 0.04 250))', body: [] },
  { cat: 'Streetwear', title: 'Moda: drops, colaboraciones y streetwear', author: 'Hypebeast', read: 'Abrir ↗', url: 'https://hypebeast.com/fashion', shown: 'hypebeast.com/fashion', tint: 'linear-gradient(135deg, oklch(0.558 0.058 230), oklch(0.829 0.04 250))', body: [] },
  { cat: 'Streetwear', title: 'Streetwear, lujo y cultura urbana', author: 'Highsnobiety', read: 'Abrir ↗', url: 'https://www.highsnobiety.com/', shown: 'highsnobiety.com', tint: 'linear-gradient(135deg, oklch(0.558 0.058 250), oklch(0.829 0.04 250))', body: [] },
  { cat: 'Streetwear', title: 'Estilo: lo que se está usando ahora', author: 'Complex', read: 'Abrir ↗', url: 'https://www.complex.com/style', shown: 'complex.com/style', tint: 'linear-gradient(135deg, oklch(0.558 0.18 20), oklch(0.829 0.04 250))', body: [] },
  { cat: 'Sneakers', title: 'Calzado: lanzamientos de sneakers', author: 'Hypebeast', read: 'Abrir ↗', url: 'https://hypebeast.com/footwear', shown: 'hypebeast.com/footwear', tint: 'linear-gradient(135deg, oklch(0.558 0.058 230), oklch(0.829 0.04 250))', body: [] },
  { cat: 'Sneakers', title: 'Calendario y noticias de sneakers', author: 'Sneaker News', read: 'Abrir ↗', url: 'https://sneakernews.com/', shown: 'sneakernews.com', tint: 'linear-gradient(135deg, oklch(0.558 0.18 300), oklch(0.829 0.04 250))', body: [] }
];
const ARTICLES = ARTICLES0.map(a => ({ ...a, initial: a.author[0] }));
const CLOSET = [
  { id: 1, name: 'Gorra terciopelo negra W', cat: 'Gorros', img: rs('assets/cap-velvet-w.png'), color: 'oklch(0.802 0.004 250)', worn: 6 },
  { id: 2, name: 'Gafas rojas SKYLRK', cat: 'Gafas', img: rs('assets/s-closet-gafas.png'), color: 'oklch(0.512 0.2 25)', worn: 4 },
  { id: 5, name: 'Hoodie azul lavado', cat: 'Hoodies', img: rs('assets/s-closet-hoodie.png'), color: 'oklch(0.512 0.08 245)', worn: 7 },
  { id: 6, name: 'Jeans azul oversize curvo', cat: 'Pantalones', img: rs('assets/jeans-navy-wide.png'), color: 'oklch(0.648 0.08 250)', worn: 9 },
  { id: 8, name: 'Camiseta negra básica', cat: 'Camisetas', img: rs('assets/tee-black-basic1.png'), color: 'oklch(0.838 0.004 250)', worn: 2 },
  { id: 9, name: 'Botines Rick Owens DRKSHDW', cat: 'Tenis', img: rs('assets/rickowens-hightop.png'), color: 'oklch(0.82 0.004 250)', worn: 3 },
  { id: 10, name: 'Hoodie negro Skeleton Studios', cat: 'Hoodies', img: rs('assets/hoodie-skeleton-black.png'), color: 'oklch(0.838 0.004 250)', worn: 1 },
  { id: 11, name: 'Chaqueta cuero DIESEL', cat: 'Chaquetas', img: rs('assets/closet-jacket.png'), color: 'oklch(0.829 0.004 250)', worn: 1 },
  { id: 12, name: 'Jeans negro oversize curvo', cat: 'Pantalones', img: rs('assets/jeans-black-wide.png'), color: 'oklch(0.802 0.004 250)', worn: 1 },
  { id: 13, name: 'Short denim raw', cat: 'Shorts', img: rs('assets/closet-short.png'), color: 'oklch(0.694 0.05 260)', worn: 1 },
  { id: 14, name: 'Tenis Mihara Yasuhiro', cat: 'Tenis', img: rs('assets/mihara-sneaker.png'), color: 'oklch(0.829 0.004 250)', worn: 1 },
  { id: 15, name: 'Camiseta true. verde', cat: 'Camisetas', img: rs('assets/closet-tee2.png'), color: 'oklch(0.558 0.05 200)', worn: 1 },
  { id: 16, name: 'Zip hoodie washed', cat: 'Hoodies', img: rs('assets/closet-zip.png'), color: 'oklch(0.739 0.004 250)', worn: 1 },
  { id: 7, name: 'Tenis BAPE STA plata', cat: 'Tenis', img: rs('assets/bape-star-sneaker.png'), color: 'oklch(0.467 0.004 250)', worn: 5 },
  { id: 17, name: 'Botas LV x Timberland camel', cat: 'Tenis', img: rs('assets/lv-timberland-boot.png'), color: 'oklch(0.422 0.08 70)', worn: 1 },
  { id: 18, name: 'Botas CAT camel', cat: 'Tenis', img: rs('assets/cat-boot-tan.png'), color: 'oklch(0.404 0.09 75)', worn: 1 },
  { id: 20, name: 'Jeans rotos con pintura', cat: 'Pantalones', img: rs('assets/s-new-3.png'), color: 'oklch(0.286 0.04 240)', worn: 1 },
  { id: 30, name: 'Mochila Coach negra', cat: 'Bolsos', img: rs('assets/bag-1.png'), color: 'oklch(0.784 0.004 250)', worn: 1 },
  { id: 31, name: 'Mochila Sprayground shark', cat: 'Bolsos', img: rs('assets/s-bag-2.png'), color: 'oklch(0.648 0.15 20)', worn: 1 },
  { id: 32, name: 'Bandolera Louis Vuitton negra', cat: 'Bolsos', img: rs('assets/s-bag-3.png'), color: 'oklch(0.829 0.004 250)', worn: 1 },
  { id: 33, name: 'Bandolera Coach monograma', cat: 'Bolsos', img: rs('assets/bag-4.png'), color: 'oklch(0.739 0.004 250)', worn: 1 },
  { id: 34, name: 'Camiseta negra crew', cat: 'Camisetas', img: rs('assets/tee-black-basic2.png'), color: 'oklch(0.856 0.004 250)', worn: 1 },
  { id: 35, name: 'Hoodie rosa Studios grills', cat: 'Hoodies', img: rs('assets/hoodie-pink-grills.png'), color: 'oklch(0.286 0.1 20)', worn: 1 },
  { id: 36, name: 'Gafas Skylrk plata', cat: 'Gafas', img: rs('assets/s-c2-2.png'), color: 'oklch(0.286 0.004 250)', worn: 1 },
  { id: 37, name: 'Gafas Skylrk negras', cat: 'Gafas', img: rs('assets/s-c2-3.png'), color: 'oklch(0.784 0.004 250)', worn: 1 },
  { id: 38, name: 'Zip hoodie arena', cat: 'Hoodies', img: rs('assets/s-c2-4.png'), color: 'oklch(0.196 0.05 85)', worn: 1 },
  { id: 39, name: 'Bomber blanco Horse Studios', cat: 'Chaquetas', img: rs('assets/bomber-horse-white.png'), color: 'oklch(0.132 0.004 250)', worn: 1 },
  { id: 40, name: 'Gorra White Sox paisley', cat: 'Gorros', img: rs('assets/hat-0.png'), color: 'oklch(0.15 0.03 90)', worn: 1 },
  { id: 41, name: 'Gorra Fortaleza', cat: 'Gorros', img: rs('assets/hat-1.png'), color: 'oklch(0.648 0.08 255)', worn: 1 },
  { id: 42, name: 'Gorra Harris Tweed', cat: 'Gorros', img: rs('assets/hat-2.png'), color: 'oklch(0.694 0.04 190)', worn: 1 },
  { id: 43, name: 'Rolex Datejust azul', cat: 'Relojes', img: rs('assets/s-watch-0.png'), color: 'oklch(0.603 0.1 255)', worn: 1 },
  { id: 44, name: 'Rolex Daytona oro', cat: 'Relojes', img: rs('assets/s-watch-1.png'), color: 'oklch(0.241 0.12 90)', worn: 1 },
  { id: 45, name: 'Rolex Datejust verde', cat: 'Relojes', img: rs('assets/s-watch-2.png'), color: 'oklch(0.603 0.1 150)', worn: 1 }
];
const SLOT_OF = { Tenis: 'shoes', Gorros: 'head', Gafas: 'eyes', Hoodies: 'top', Camisetas: 'top', Chaquetas: 'top', Pantalones: 'bottom', Shorts: 'bottom', Bolsos: 'bag', Relojes: 'watch' };
const SLOTS = [['head', 'Cabeza'], ['eyes', 'Gafas'], ['top', 'Arriba'], ['bottom', 'Abajo'], ['shoes', 'Pies'], ['bag', 'Bolso'], ['watch', 'Reloj']];
const NEW_ITEMS = [];
const LOOKS = { Streetwear: [{ name: 'Oversize negro', cats: ['Hoodies', 'Pantalones', 'Tenis'] }, { name: 'Capas y cadenas', cats: ['Chaquetas', 'Pantalones', 'Tenis'] }], Minimal: [{ name: 'Base limpia', cats: ['Camisetas', 'Pantalones', 'Tenis'] }, { name: 'Todo en uno', cats: ['Camisetas', 'Shorts', 'Tenis'] }], Accesorios: [{ name: 'Gorro y gafas', cats: ['Gorros', 'Gafas', 'Camisetas'] }, { name: 'Detalles del día', cats: ['Gafas', 'Hoodies', 'Gorros'] }] };
const CLOSET_CATS = ['Todo', 'Camisetas', 'Hoodies', 'Chaquetas', 'Pantalones', 'Shorts', 'Tenis', 'Gorros', 'Gafas', 'Bolsos', 'Relojes'];
const ART_CATS = ['Todos', 'Moda', 'Streetwear', 'Sneakers'];
const MOOD_QUOTES = [
  { t: 'Tu ropa no te define. Tú decides quién eres hoy.', u: '@caosdemente' },
  { t: 'No hay un cuerpo "correcto" para vestirte como quieras.', u: '@mar_k' },
  { t: 'Lo raro de vos es justo lo que no se puede copiar.', u: '@thrift.bogota' },
  { t: 'Vestite para vos, no para que te clasifiquen.', u: '@skylrk_oficial' },
  { t: 'Hoy también está bien no encajar en ninguna etiqueta.', u: '@nuncaigual' },
  { t: 'Tu estilo cambia porque vos también cambiás. Eso es sano.', u: '@caosdemente' }
];
const DON_POINTS = [
  { name: 'KHAOS Chapinero', addr: 'Cra 13 #54-11, Chapinero', dist: '1.2 km', left: '26%', top: '30%' },
  { name: 'KHAOS Usaquén', addr: 'Cl 119 #6-14, Usaquén', dist: '3.8 km', left: '68%', top: '18%' },
  { name: 'KHAOS Zona G', addr: 'Cra 4 #69-21, Zona G', dist: '2.1 km', left: '46%', top: '58%' },
  { name: 'KHAOS Teusaquillo', addr: 'Cl 39 #22-05, Teusaquillo', dist: '4.5 km', left: '18%', top: '74%' }
];
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
  { t: 'Tu estilo empieza por dentro', x: 'KHAOS no te dice qué ponerte. Te ayuda a descubrir qué quieres expresar.' },
  { t: 'Un asesor que te escucha', x: 'Mándale una foto de tu cara y te dice qué colores y estilos te favorecen. Siempre con tu permiso.' },
  { t: 'Una comunidad sin filtros', x: 'Canales para compartir looks, hacer retos y hablar con expertos. Sin juicios.' }
];

class Component extends DCLogic {
  state = {
    paidText: '', confirmOut: false, helpQ: '', helpOpen: -1, plan: 'mensual', paying: false, paid: false, payId: 'card1', addingCard: false, cNum: '', cName: '', cExp: '', cCvv: '', cardError: '', payCards: [{ id: 'card1', brand: 'VISA', last: '4242', name: 'Tú' }],
    screen: 'splash', onb: 0, regMode: 'signup', authed: false, regBusy: false,
    fName: '', fAge: '', fEmail: '', fPass: '', fTerms: false, regError: '',
    notif: false, step: 0, answers: [], msgs: null, phase: 'q', draft: '', identity: null,
    tryOn: {}, trySel: null, tryTab: 'all', tryConsent: null, trySaved: false,
    combo: null, add: null, build: null, ropaView: 'hub', donSel: {}, donDest: 'Punto KHAOS', donDone: false, donLast: 0, inspTab: 'Streetwear', comSafe: false, motionOn: false, channel: 'looks', posts: JSON.parse(JSON.stringify(SEED)), postDraft: '', liked: {}, myPosts: 0, faq: false, article: null, artCat: 'Todos', rted: {}, hov: null, detail: null, closet: CLOSET, outfit: { eyes: 2 }, favs: { 2: true }, pos: {}, drag: null, closetCat: 'Todo', shared: false, anon: false, circle: false, joined: { bienvenida: true, normas: true, general: true }, pending: {}, rulesOk: false,
    // H7 (flexibilidad y eficiencia de uso): canales fijados para acceso en un toque.
    // Empieza con #thrift y #sneakers fijados a propósito — eran los que, en la
    // auditoría de heurísticas, quedaban hasta el final de la lista para un
    // usuario frecuente ("un usuario frecuente de #thrift debe bajar hasta el
    // final cada vez"). Se pueden fijar o soltar otros desde cada chip de canal.
    pinned: { thrift: true, sneakers: true },
    wheelFront: 0
  };
  chatRef = React.createRef();
  tryStageRef = React.createRef();
  _emb = typeof location !== 'undefined' && /[?&]embed/.test(location.search);
  _dev = typeof location !== 'undefined' && /[?&]dev/.test(location.search);
  videoRef = React.createRef();
  wheelRef = React.createRef();
  wheelRot = 0;
  wheelDrag = null;
  wheelFrontIdx = (rot) => {
    const n = HOME_TILES.length, step = 360 / n;
    const mod360 = (x) => ((x % 360) + 360) % 360;
    let best = 0, bestD = 361;
    for (let i = 0; i < n; i++) {
      const eff = mod360(i * step + rot);
      const d = Math.min(eff, 360 - eff);
      if (d < bestD) { bestD = d; best = i; }
    }
    return best;
  };
  wheelGoTo = (i) => {
    const n = HOME_TILES.length, step = 360 / n;
    const mod360 = (x) => ((x % 360) + 360) % 360;
    const targetMod = mod360(-i * step);
    const curMod = mod360(this.wheelRot);
    let delta = targetMod - curMod;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const newRot = this.wheelRot + delta;
    const el = this.wheelRef.current;
    if (el) {
      el.style.transition = 'transform .5s cubic-bezier(.2,.8,.2,1)';
      el.style.transform = 'rotateY(' + newRot + 'deg)';
      clearTimeout(this._wheelSnapT);
      this._wheelSnapT = setTimeout(() => { if (el) el.style.transition = ''; }, 520);
    }
    this.wheelRot = newRot;
    this.setState({ wheelFront: i });
  };
  wheelStep = (dir) => () => {
    const n = HOME_TILES.length;
    const next = ((this.state.wheelFront + dir) % n + n) % n;
    this.wheelGoTo(next);
  };
  wheelDown = (e) => {
    this.wheelDrag = { x: e.clientX, rot: this.wheelRot };
    const el = this.wheelRef.current;
    if (el) el.style.transition = '';
  };
  wheelMove = (e) => {
    const d = this.wheelDrag; if (!d) return;
    this.wheelRot = d.rot + (e.clientX - d.x) * 0.6;
    const el = this.wheelRef.current;
    if (el) el.style.transform = 'rotateY(' + this.wheelRot + 'deg)';
    const idx = this.wheelFrontIdx(this.wheelRot);
    if (idx !== this.state.wheelFront) this.setState({ wheelFront: idx });
  };
  wheelUp = () => {
    if (!this.wheelDrag) return;
    this.wheelDrag = null;
    this.wheelGoTo(this.state.wheelFront);
  };
  wheelTileClick = (i) => {
    if (i === this.state.wheelFront) {
      const [k, , , , rv] = HOME_TILES[i];
      this.setState({ screen: k, notif: false, ...(rv ? { ropaView: rv, donDone: false } : {}) });
    } else {
      this.wheelGoTo(i);
    }
  };

  componentDidMount() {
    this.resetAsesor();
    this.hydrate();
    const q = new URLSearchParams(location.search);
    if (this._dev && q.get('screen')) this.setState({ screen: q.get('screen') });
  }
  // --- Persistencia local (MVP sin backend) -------------------------------
  // Guarda solo datos del usuario, nunca datos de tarjeta. Todo pasa por
  // window.KhaosStore (store.js), pensado para cambiarse luego por Supabase.
  static PERSIST_KEYS = ['authed', 'fName', 'fEmail', 'fAge', 'plan', 'paid', 'paidText', 'closet', 'liked', 'pinned', 'favs'];
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
  componentDidUpdate() { this.persist(); const el = this.chatRef.current; if (el) el.scrollTop = el.scrollHeight; if (this._stream && this.state.screen !== 'probador') this.stopCam(); }
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
    msgs: [this.bot('Soy tu estilista KHAOS. Mándame una foto y te digo qué colores y estilo te quedan mejor.'), this.bot('Necesito tu permiso: solo se usa para el análisis, no se guarda.')]
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
    // H1 (estado del sistema visible) + H10 (ayuda contextual): en vez de un
    // spinner mudo, el usuario ve en qué paso va el análisis, una barra de
    // progreso y un tip justo donde surge la duda (mientras espera).
    const typing = { from: 'bot', text: 'Detectando tu rostro…', typing: true, pct: 12, tip: '' };
    this.setState({ colorAsk: false, msgs: [...s.msgs, this.me('Foto enviada'), typing] });
    const stepTo = (text, pct, tip) => this.setState(st => (st.msgs.some(m => m.typing) ? { msgs: st.msgs.map(x => x.typing ? { ...x, text, pct, tip } : x) } : null));
    const tip = '💡 Usa luz natural y evita filtros: así el análisis sale más preciso.';
    this._colorSteps = [
      setTimeout(() => stepTo('Analizando tono de piel y contraste…', 55, tip), 650),
      setTimeout(() => stepTo('Buscando tu paleta de color…', 85, tip), 1500)
    ];
    const clearSteps = () => (this._colorSteps || []).forEach(clearTimeout);
    const fail = (m) => { clearSteps(); this.setState(st => ({ msgs: st.msgs.map(x => x.typing ? this.bot(m) : x) })); };
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
        clearSteps();
        const sw = (xs, good) => (xs || []).map(x => ({ hex: x.hex, name: x.nombre, ring: good ? 'oklch(0.06 0.004 250 / 0.5)' : 'oklch(0.422 0.2 25)' }));
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
    if (label === 'Abrir probador') { this.setState({ screen: 'probador' }); return; }
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
      if (!email.includes('@')) return this.setState({ regError: 'Revisa tu correo.' });
      if (s.fPass.length < 6) return this.setState({ regError: 'La contraseña necesita mínimo 6 caracteres.' });
      if (!s.fTerms) return this.setState({ regError: 'Debes aceptar los términos y las normas.' });
      if (!KhaosStore.enabled) return this.setState({ regError: '', screen: 'home', authed: true });
      this.setState({ regBusy: true, regError: '' });
      KhaosStore.signUp(email, s.fPass, { username: s.fName.trim(), age })
        .then((r) => {
          if (r.needsConfirm) return this.setState({ regBusy: false, regError: 'Te enviamos un correo: confírmalo para entrar.' });
          this.setState({ regBusy: false, regError: '', screen: 'home', authed: true, fPass: '' });
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
  componentWillUnmount() { clearInterval(this.timer); }
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
  openAdd = () => this.setState({ add: { step: 'consent', name: '', cat: 'Camisetas', img: null, err: '' } });
  closeAdd = () => { this.stopAddCam(); this.setState({ add: null }); };
  addPickFile = () => { const f = this.fileRef.current; if (f) { f.value = ''; f.click(); } };
  shrink = (src, w, h) => { const m = Math.max(w, h), k = Math.min(1, 720 / m), cw = Math.round(w * k), ch = Math.round(h * k); const c = document.createElement('canvas'); c.width = cw; c.height = ch; const x = c.getContext('2d'); x.fillStyle = '#e9e7e1'; x.fillRect(0, 0, cw, ch); x.drawImage(src, 0, 0, cw, ch); return c.toDataURL('image/jpeg', 0.86); };
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
    this.setState(st => ({ closet: [{ id, name, cat: a.cat, img: a.img, color: 'oklch(0.422 0.02 250)', worn: 0 }, ...st.closet], closetCat: a.cat, add: null }));
    if (KhaosStore.enabled && KhaosStore.hasSession() && typeof id === 'string') {
      KhaosStore.addClosetItem({ id, name, cat: a.cat, img: a.img }).then(() => this.setState(st => ({ closet: st.closet.map(c => c.id === id ? { ...c, synced: true } : c) }))).catch((e) => console.warn('KHAOS: no se pudo guardar la prenda', e));
    }
  };
  openBuild = () => this.setState(st => ({ build: { slot: 'top', picks: { head: st.outfit.head || null, eyes: st.outfit.eyes || null, top: st.outfit.top || null, bottom: st.outfit.bottom || null, shoes: st.outfit.shoes || null } } }));
  closeBuild = () => this.setState({ build: null });
  buildClear = () => this.setState(st => ({ build: { ...st.build, picks: {} } }));
  buildUse = () => this.setState(st => ({ outfit: { ...st.outfit, ...['head', 'eyes', 'top', 'bottom', 'shoes'].reduce((o, k) => { o[k] = st.build.picks[k] || null; return o; }, {}) }, shared: false, build: null }));
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
    const t = this.state.postDraft.trim();
    if (!t) return;
    const ch = this.state.channel;
    const posts = { ...this.state.posts, [ch]: [{ user: this.state.anon ? 'Anónimo' : (this.state.fName || 'tú'), anon: this.state.anon, circle: this.state.circle, mine: true, text: t, time: 'ahora', likes: 0 }, ...this.state.posts[ch]] };
    this.setState(s => ({ posts, postDraft: '', myPosts: s.myPosts + 1 }));
    this.remotePost(ch, t, !!this.state.anon, !!this.state.circle);
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
      // Puntillismo: "KHAOS" se arma en puntos dispersos que caen en su lugar,
      // de izquierda a derecha (una barrida minimalista, como khOrbA/khOrbB).
      // La S queda más tenue a propósito — el mismo gesto que ya usaba
      // "KHAO" + S difuminada: el nombre nunca termina de cerrarse del todo.
      const KH_LETTERS = {
        K: ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
        H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
        A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
        O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
        S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110']
      };
      const WORD = 'KHAOS', cell = 9, gap = 10;
      const totalW = cell * 5;
      const totalH = cell * 7 * WORD.length + gap * (WORD.length - 1);
      const dots = [];
      let oy = 0;
      WORD.split('').forEach((letter) => {
        KH_LETTERS[letter].forEach((row, r) => {
          row.split('').forEach((bit, c) => {
            if (bit !== '1') return;
            const x = c * cell, y = oy + r * cell;
            const ang = Math.random() * Math.PI * 2, dist = 100 + Math.random() * 190;
            const tint = Math.random();
            dots.push({
              x, y,
              sx: Math.round(Math.cos(ang) * dist), sy: Math.round(Math.sin(ang) * dist),
              sz: Math.round((4 + Math.random() * 3) * 10) / 10,
              c: 'oklch(' + Math.round((0.33 + Math.random() * 0.18) * 100) / 100 + ' 0.23 27)',
              o: Math.round((0.85 + Math.random() * 0.15) * 100) / 100,
              dl: Math.round((450 + (y / totalH) * 900 + Math.random() * 220)) / 1000
            });
          });
        });
        oy += cell * 7 + gap;
      });

      this._fx = {
        khDots: dots, khDotsW: totalW, khDotsH: totalH,
        bgOrbs: h('div', { style: { position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 } },
          h('div', { style: { position: 'absolute', width: 520, height: 520, left: '8%', top: '-10%', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.558 0.058 240 / 0.35), transparent 65%)', filter: 'blur(20px)', animation: 'khOrbA 14s ease-in-out infinite' } }),
          h('div', { style: { position: 'absolute', width: 600, height: 600, right: '2%', bottom: '-20%', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.621 0.16 20 / 0.4), transparent 65%)', filter: 'blur(24px)', animation: 'khOrbB 18s ease-in-out infinite' } }))
      };
    }
    const s = this.state;
    const go = (screen) => () => this.setState({ screen, notif: false });
    const TD = { head: [50, 11, 30], eyes: [50, 19, 34], top: [50, 42, 66], bottom: [50, 70, 46], shoes: [50, 89, 44], bag: [78, 60, 30], watch: [22, 56, 14] };
    const tryPick = (it) => () => { const sl = SLOT_OF[it.cat]; if (!sl) return; const cur = s.tryOn[sl]; const nxt = { ...s.tryOn }; if (cur && cur.id === it.id) delete nxt[sl]; else nxt[sl] = { id: it.id, x: TD[sl][0], y: TD[sl][1], w: TD[sl][2] }; this.setState({ tryOn: nxt, trySel: cur && cur.id === it.id ? null : sl, trySaved: false }); };
    const tryResize = (d) => () => { const sl = s.trySel; if (!sl || !s.tryOn[sl]) return; this.setState({ tryOn: { ...s.tryOn, [sl]: { ...s.tryOn[sl], w: Math.max(14, Math.min(110, s.tryOn[sl].w + d)) } } }); };
    const blue = 'oklch(0.313 0.061 230)';
    const mainScreens = ['home', 'asesor', 'comunidad', 'articulos', 'perfil'];
    const onbItem = ONB[s.onb];
    const ch = CHANNELS.find(c => c.id === s.channel);
    const idObj = s.identity != null ? IDENTITIES[s.identity] : null;
    const name = s.fName || 'khaoser';
    const jumpList = [['splash', 'Splash'], ['onb', 'Onboarding'], ['reg', 'Registro / login'], ['home', 'Home'], ['asesor', 'Asesor (chat)'], ['closet', 'My closet'], ['probador', 'Probador'], ['pagos', 'Membresía / pago'], ['ayuda', 'Ayuda'], ['comunidad', 'Comunidad'], ['articulos', 'Historias'], ['ropa', 'Ropa (donar / inspírate)'], ['identidad', 'Identidad visual'], ['perfil', 'Perfil y ajustes']];
    const dc = s.detail != null ? s.closet.find(c => c.id === s.detail) : null; const dOn = dc ? s.outfit[SLOT_OF[dc.cat]] === dc.id : false; const dFav = dc ? !!s.favs[dc.id] : false;
    const v = {
      detailOpen: !!dc, stageRef: this.stageRef, closeDetail: this.closeDetail, stageDown: this.stageDown, stageMove: this.stageMove, stageUp: this.stageUp,
            detailClassicShow: dc && dc.views ? 'none' : 'flex', detailViewsShow: dc && dc.views ? 'flex' : 'none',
      detailView0Bg: dc && dc.views ? 'url(' + dc.views[0] + ')' : 'none', detailView1Bg: dc && dc.views ? 'url(' + dc.views[1] + ')' : 'none', detailView2Bg: dc && dc.views ? 'url(' + dc.views[0] + ')' : 'none', detailView3Bg: dc && dc.views ? 'url(' + dc.views[2] + ')' : 'none',
      detailFrontBg: dc && dc.img ? 'url(' + dc.img + ')' : 'none', detailBackFlip: dc && dc.img && !dc.imgBack ? -1 : 1, detailBackBg: dc && dc.imgBack ? 'url(' + dc.imgBack + ')' : (dc && dc.img ? 'url(' + dc.img + ')' : 'none'), detailSideBg: 'none', detailImgShow: dc && dc.img ? 'block' : 'none', detailMarkShow: dc && !dc.img ? 'block' : 'none', detailMark: dc ? dc.cat[0] : '',
      detailName: dc ? dc.name : '', detailCat: dc ? dc.cat : '', detailWorn: dc ? (dc.worn ? 'usado ' + dc.worn + ' veces' : 'nuevo') : '',
      detailFav: () => dc && this.setState({ favs: { ...s.favs, [dc.id]: !dFav } }), detailFavColor: dFav ? 'oklch(0.377 0.2 15)' : 'oklch(0.15 0.004 250)', detailFavFill: dFav ? 'currentColor' : 'none',
      detailWear: () => dc && this.wearItem(dc), detailWearLabel: dOn ? 'QUITAR DEL OUTFIT' : 'PONÉRMELO',
      khDots: this._fx.khDots, khDotsW: this._fx.khDotsW, khDotsH: this._fx.khDotsH, bgOrbs: null, tilt: this.tilt, untilt: this.untilt,
      jumps: jumpList.map(([k, l]) => ({ label: l, go: go(k), bg: s.screen === k ? 'oklch(0.313 0.061 230 / 0.2)' : 'oklch(0.06 0.004 250 / 0.04)' })),
      isDev: this._dev,
      outerBg: '#f2f0ec',
      screenBg: '#f2f0ec',
      isSplash: s.screen === 'splash', isOnb: s.screen === 'onb', isReg: s.screen === 'reg',
      isHome: s.screen === 'home',
      homeTiles: HOME_TILES.map(([k, label, mark, sub, rv], i) => {
        const front = i === s.wheelFront;
        return {
          label, mark, sub,
          ry: Math.round(i * (360 / HOME_TILES.length) * 100) / 100,
          click: () => this.wheelTileClick(i),
          bg: front ? 'linear-gradient(135deg, oklch(0.58 0.22 25), oklch(0.46 0.2 20))' : 'linear-gradient(135deg, oklch(0.06 0.004 250 / 0.18), oklch(0.06 0.004 250 / 0.04))',
          bd: front ? 'oklch(0.66 0.2 25)' : 'oklch(0.06 0.004 250 / 0.25)',
          sh: front ? 'inset 0 1px 0 oklch(1 0 0 / 0.25), 0 16px 34px oklch(0.558 0.24 25 / 0.55)' : 'inset 0 1px 0 oklch(0.06 0.004 250 / 0.3)',
          col: front ? 'oklch(0.98 0.01 25)' : 'inherit',
          blur: front ? 'none' : 'blur(20px)'
        };
      }),
      wheelFrontLabel: HOME_TILES[s.wheelFront][1],
      wheelDown: this.wheelDown, wheelMove: this.wheelMove, wheelUp: this.wheelUp, wheelRef: this.wheelRef,
      wheelPrev: this.wheelStep(-1), wheelNext: this.wheelStep(1),
      isAsesor: s.screen === 'asesor', isComunidad: s.screen === 'comunidad', isPerfil: s.screen === 'perfil', isArticulos: s.screen === 'articulos',
      articleList: s.article == null, articleOpen: s.article != null,
      artCats: ART_CATS.map(c => ({ label: c, go: () => this.setState({ artCat: c }), bg: s.artCat === c ? 'oklch(0.313 0.061 230 / 0.2)' : 'transparent', border: s.artCat === c ? 'oklch(0.313 0.061 230 / 0.6)' : 'oklch(0.06 0.004 250 / 0.15)' })),
      articles: ARTICLES.map((a, i) => ({ ...a, i })).filter(a => s.artCat === 'Todos' || a.cat === s.artCat).map(a => ({ ...a, open: () => window.open(a.url, '_blank', 'noopener') })),
      art: s.article != null ? ARTICLES[s.article] : ARTICLES[0],
      artBody: (s.article != null ? ARTICLES[s.article] : ARTICLES[0]).body.map(t => ({ t })),
      closeArticle: () => this.setState({ article: null }),
      discussArticle: () => this.setState({ screen: 'comunidad', channel: 'general', postDraft: 'Sobre "' + ARTICLES[s.article].title + '": ' }),
      meInitial: (s.fName || 'Tú')[0].toUpperCase(),
      meShown: s.anon ? '?' : (s.fName || 'Tú')[0].toUpperCase(),
      meTint: s.anon ? 'oklch(0.694 0.004 250)' : 'linear-gradient(135deg, oklch(0.422 0.064 230), oklch(0.603 0.16 20))',
      toggleAnon: () => this.setState({ anon: !s.anon }), anonLabel: s.anon ? '● Anónimo' : 'Anónimo',
      anonBg: s.anon ? 'oklch(0.404 0.064 230 / 0.2)' : 'transparent', anonBorder: s.anon ? 'oklch(0.404 0.064 230 / 0.7)' : 'oklch(0.06 0.004 250 / 0.15)',
      toggleCircle: () => this.setState({ circle: !s.circle }), circleLabel: s.circle ? '● Mi círculo' : 'Todos',
      circleBg: s.circle ? 'oklch(0.286 0.15 160 / 0.15)' : 'transparent', circleBorder: s.circle ? 'oklch(0.286 0.15 160 / 0.6)' : 'oklch(0.06 0.004 250 / 0.15)',
      groupTabs: GROUPS.map(([gid, label]) => { const on = (CHANNELS.find(c => c.id === s.channel) || {}).g === gid; return { label: gid === 'otras' ? 'Otras' : label, go: () => this.setState({ channel: CHANNELS.find(c => c.g === gid).id }), color: on ? 'oklch(0.087 0.004 250)' : 'oklch(0.422 0.004 250)', weight: on ? '800' : '500', bar: on ? 'oklch(0.078 0.004 250 / 0.85)' : 'transparent' }; }),
      groupChannels: CHANNELS.filter(c => c.g === (CHANNELS.find(x => x.id === s.channel) || {}).g).map(c => ({
        name: c.name, locked: !s.joined[c.id] && !c.ro, go: () => this.setState({ channel: c.id }), weight: c.id === s.channel ? '700' : '400', bg: c.id === s.channel ? 'linear-gradient(135deg, oklch(0.06 0.004 250 / 0.2), oklch(0.06 0.004 250 / 0.05))' : 'transparent', border: c.id === s.channel ? 'oklch(0.404 0.064 230 / 0.7)' : 'oklch(0.06 0.004 250 / 0.15)',
        // H7 (flexibilidad y eficiencia): cada chip puede fijarse para el acceso rápido de arriba.
        pinned: !!s.pinned[c.id], pinMark: s.pinned[c.id] ? '★' : '☆', pinLabel: (s.pinned[c.id] ? 'Soltar #' : 'Fijar #') + c.name,
        pin: () => this.setState(st => ({ pinned: { ...st.pinned, [c.id]: !st.pinned[c.id] } }))
      })),
      channelGroups: GROUPS.map(([gid, label]) => ({ label, items: CHANNELS.filter(c => c.g === gid).map(c => ({ name: c.name, go: () => this.setState({ channel: c.id }), bg: c.id === s.channel ? 'oklch(0.313 0.061 230 / 0.18)' : 'transparent', color: c.id === s.channel ? 'oklch(0.105 0.05 230)' : 'oklch(0.332 0.004 250)', weight: c.id === s.channel ? '700' : '400' })) })),
      // H7: fila "Fijados" arriba de los tabs — los canales que el usuario marcó
      // llegan en un toque sin importar en qué grupo esté parado.
      pinnedChannels: CHANNELS.filter(c => s.pinned[c.id]).map(c => ({ name: c.name, active: c.id === s.channel, go: () => this.setState({ channel: c.id }), bg: c.id === s.channel ? 'oklch(0.06 0.004 250 / 0.95)' : 'oklch(0.06 0.004 250 / 0.08)', color: c.id === s.channel ? 'oklch(0.893 0.004 250)' : 'oklch(0.105 0.004 250)' })),
      hasPinned: Object.values(s.pinned || {}).some(Boolean),
      isRopa: s.screen === 'ropa', isIdentidad: s.screen === 'identidad',
      ropaTitle: s.ropaView === 'donar' ? 'Donar' : s.ropaView === 'inspira' ? 'Inspírate' : 'Ropa',
      ropaHub: s.ropaView === 'hub', ropaDonar: s.ropaView === 'donar', ropaInspira: s.ropaView === 'inspira',
      ropaBack: () => s.ropaView === 'hub' ? this.setState({ screen: 'home' }) : this.setState({ ropaView: 'hub' }),
      idenBack: () => this.setState({ screen: 'home' }),
      ropaCards: [['donar', 'Donar'], ['inspira', 'Inspírate']].map(([k, t]) => ({ t, go: () => this.setState({ ropaView: k, donDone: false }) })),
      donItems: s.closet.filter(c => c.img).map(c => { const on = !!s.donSel[c.id]; return { name: c.name, bg: 'url(' + c.img + ')', bd: on ? 'oklch(0.078 0.004 250)' : 'oklch(0.06 0.004 250 / 0.14)', chk: on ? 1 : 0, tog: () => this.setState(st => ({ donSel: { ...st.donSel, [c.id]: !st.donSel[c.id] } })) }; }),
      donDests: ['Punto KHAOS', 'Fundación aliada', 'Intercambio entre khaosers'].map(d => { const on = s.donDest === d; return { label: d, go: () => this.setState({ donDest: d }), col: on ? 'oklch(0.874 0.004 250)' : 'oklch(0.078 0.004 250)', bg: on ? 'oklch(0.078 0.004 250)' : 'oklch(0.06 0.004 250 / 0.06)', bd: on ? 'transparent' : 'oklch(0.06 0.004 250 / 0.2)' }; }),
      donForm: !s.donDone, donDone: s.donDone,
      donLabel: (() => { const n = Object.values(s.donSel).filter(Boolean).length; return n ? 'Donar ' + n + (n === 1 ? ' prenda' : ' prendas') : 'Elige prendas para donar'; })(),
      donBg: Object.values(s.donSel).some(Boolean) ? 'oklch(0.078 0.004 250)' : 'oklch(0.06 0.004 250 / 0.08)', donCol: Object.values(s.donSel).some(Boolean) ? 'oklch(0.874 0.004 250)' : 'oklch(0.332 0.004 250)',
      donConfirm: () => { const n = Object.values(s.donSel).filter(Boolean).length; if (n) this.setState({ donDone: true, donLast: n }); },
      donMsg: s.donLast + (s.donLast === 1 ? ' prenda va' : ' prendas van') + ' a: ' + s.donDest + '. Te avisamos cuando lleguen.',
      donMore: () => this.setState({ donDone: false, donSel: {} }),
      donPoints: DON_POINTS.map((p, i) => ({ ...p, n: i + 1 })),
      inspTabs: Object.keys(LOOKS).map(k => { const on = s.inspTab === k; return { label: k, go: () => this.setState({ inspTab: k }), col: on ? 'oklch(0.874 0.004 250)' : 'oklch(0.078 0.004 250)', bg: on ? 'oklch(0.078 0.004 250)' : 'oklch(0.06 0.004 250 / 0.06)', bd: on ? 'transparent' : 'oklch(0.06 0.004 250 / 0.2)' }; }),
      inspLooks: (LOOKS[s.inspTab] || []).map((l, li) => { const ps = l.cats.map(cat => { const list = s.closet.filter(c => c.cat === cat && c.img); return list.length ? list[li % list.length] : null; }).filter(Boolean); return { name: l.name, pieces: ps.map(p => ({ bg: 'url(' + p.img + ')' })), use: () => { const o = { ...s.outfit }; ps.forEach(p => { o[SLOT_OF[p.cat]] = p.id; }); this.setState({ outfit: o, screen: 'closet' }); } }; }),
      idenColors: [{ name: 'Negro', role: 'Fondo', bg: '#f2f0ec', w: 70 }, { name: 'Blanco', role: 'Texto y botón sólido', bg: 'oklch(0.078 0.004 250)', w: 14 }, { name: 'Gris', role: 'Superficies glass', bg: 'oklch(0.694 0.004 250)', w: 10 }, { name: 'Azul grisáceo', role: 'Acento', bg: 'oklch(0.313 0.061 230)', w: 5 }, { name: 'Rojo', role: 'Un destello puntual', bg: 'oklch(0.404 0.24 25)', w: 1 }],
      idenPics: [rs('assets/s-closet-hoodie.png'), rs('assets/s-closet-jeans-fixed.png'), rs('assets/closet-gorro.png')].map(u => ({ bg: 'url(' + u + ')' })),
      idenRules: ['Fondo negro liso, sin ruido.', 'La prenda va recortada y flotando, con sombra suave.', 'Luz de borde blanca y fría.', 'Sin rostros: tu cara nunca se publica.'],
      idenMotion: ['Entrada: 0,5 s, aparece y sube un poco.', 'Hover: 0,25 s, el glass se vuelve blanco.', 'Prendas: flotan despacio y giran en 3D.', 'Un solo destello rojo, solo en momentos clave.'],
      motionX: s.motionOn ? 220 : 0, motionPlay: () => { this.setState({ motionOn: true }); clearTimeout(this._mt); this._mt = setTimeout(() => this.setState({ motionOn: false }), 900); },
      safeOpen: s.comSafe, openSafe: () => this.setState({ comSafe: true }), closeSafe: () => this.setState({ comSafe: false }),
      goNormas: () => this.setState({ comSafe: false, channel: 'normas' }),
      safeRules: [{ t: 'Entras con permiso', d: 'Los canales cerrados se abren solo con JOIN. Nadie entra sin que lo decidas.' }, { t: 'Tu cara no se publica', d: 'Las fotos del asesor y del probador son privadas y no se guardan.' }, { t: 'Tú decides qué ves', d: 'Silencia, bloquea o sal de un canal cuando quieras.' }, { t: 'Reportar es anónimo', d: 'Cada publicación se puede reportar y el equipo la revisa.' }, { t: 'Cero burlas', d: 'No se permiten comentarios sobre cuerpos, tallas ni identidades.' }],
      showTabs: mainScreens.includes(s.screen) || s.screen === 'probador' || s.screen === 'closet' || s.screen === 'pagos' || s.screen === 'ayuda' || s.screen === 'ropa' || s.screen === 'identidad',
      isAyuda: s.screen === 'ayuda', helpQ: s.helpQ, onHelpQ: (e) => this.setState({ helpQ: e.target.value, helpOpen: -1 }),
      helpItems: (() => { const q = s.helpQ.trim().toLowerCase(); return [['¿Cómo uso el asesor de imagen?','Ve a Asesor, escribe lo que buscas o comparte una foto con tu permiso. Te sugiere looks según tu estilo.'],['¿Cómo entro a un canal?','En Comunidad elige un canal y toca JOIN. Los canales cerrados son de KHAOS+.'],['¿Cómo funciona My closet?','Desde Perfil abre My closet. Toca una prenda para verla en 3D o usa Combinar para armar un outfit.'],['¿Cómo compro la membresía?','Perfil → Membresía KHAOS+. Elige un plan, un método de pago y toca Pagar y activar.'],['¿Cómo cancelo mi membresía?','Perfil → Membresía KHAOS+ → Cancelar membresía.'],['¿Cómo cierro sesión?','Perfil → Cerrar sesión. Te pedimos confirmar con un segundo toque.']].filter(([a, b]) => !q || (a + ' ' + b).toLowerCase().includes(q)).map(([a, b], i) => ({ q: a, a: b, go: () => this.setState({ helpOpen: s.helpOpen === i ? -1 : i }), sign: s.helpOpen === i ? '−' : '+', disp: s.helpOpen === i ? 'block' : 'none', bg: s.helpOpen === i ? 'oklch(0.06 0.004 250 / 0.1)' : 'oklch(0.06 0.004 250 / 0.04)' })); })(),
      helpEmpty: [['¿Cómo uso el asesor de imagen?','Ve a Asesor, escribe lo que buscas o comparte una foto con tu permiso. Te sugiere looks según tu estilo.'],['¿Cómo entro a un canal?','En Comunidad elige un canal y toca JOIN. Los canales cerrados son de KHAOS+.'],['¿Cómo funciona My closet?','Desde Perfil abre My closet. Toca una prenda para verla en 3D o usa Combinar para armar un outfit.'],['¿Cómo compro la membresía?','Perfil → Membresía KHAOS+. Elige un plan, un método de pago y toca Pagar y activar.'],['¿Cómo cancelo mi membresía?','Perfil → Membresía KHAOS+ → Cancelar membresía.'],['¿Cómo cierro sesión?','Perfil → Cerrar sesión. Te pedimos confirmar con un segundo toque.']].some(([a, b]) => !s.helpQ.trim() || (a + ' ' + b).toLowerCase().includes(s.helpQ.trim().toLowerCase())) ? 'none' : 'block',
      isPagos: s.screen === 'pagos', paid: s.paid, notPaid: !s.paid, resetPay: () => this.setState({ paid: false, paying: false, plan: 'mensual', payStep: false }), planStep: !s.payStep, sumShort: ({ free: 'Para empezar', mensual: 'Acceso completo', anual: 'Acceso completo + merch' })[s.plan], sumPrice: ({ free: '$0', mensual: '$14.900', anual: '$119.900' })[s.plan], sumPer: ({ free: 'siempre', mensual: '/mes', anual: '/año' })[s.plan], sumBill: ({ free: 'Sin costo, sin tarjeta obligatoria.', mensual: 'Facturación mensual a partir de hoy.', anual: 'Facturación anual a partir de hoy.' })[s.plan], isCardPay: (s.payM || 'card') === 'card', payOpts: [{ id: 'card', name: 'Tarjeta', i1: 'url(' + rs('assets/logo-visa.svg') + ')', i2: 'url(' + rs('assets/logo-mastercard.svg') + ')', w1: 36, w2: 36 }, { id: 'apple', name: 'Apple Pay', i1: 'url(' + rs('assets/logo-apple.svg') + ')', i2: 'none', w1: 18, w2: 0 }, { id: 'gpay', name: 'Google Pay', i1: 'url(' + rs('assets/logo-gpay.svg') + ')', i2: 'none', w1: 22, w2: 0 }].map(o => { const on = (s.payM || 'card') === o.id; return { ...o, go: () => this.setState({ payM: o.id }), dot: on ? 1 : 0, ring: on ? 'oklch(0.078 0.004 250)' : 'oklch(0.06 0.004 250 / 0.4)', bg: on ? 'oklch(0.06 0.004 250 / 0.1)' : 'oklch(0.06 0.004 250 / 0.03)', bd: on ? 'oklch(0.06 0.004 250 / 0.5)' : 'oklch(0.06 0.004 250 / 0.14)' }; }), payStep: !!s.payStep, backPlans: () => this.setState({ payStep: false }),
      plans: [{ id: 'free', name: 'Free', tag: 'Actual', sub: 'Asesor básico y canales abiertos', price: '$0', per: 'siempre', amt: 0 }, { id: 'mensual', name: 'Plus', tag: 'Popular', sub: 'Canales cerrados, asesor sin límite y My closet ilimitado', price: '$14.900', per: 'COP / mes', amt: 14900 }, { id: 'anual', name: 'Pro', tag: 'Ahorra 33%', sub: 'Todo Plus y un drop de merch al año', price: '$119.900', per: 'COP / año', amt: 119900 }].map(p => ({ ...p, go: () => this.setState({ plan: p.id, payStep: true }), short: ({ free: 'Para empezar', mensual: 'Acceso completo', anual: 'Acceso completo + merch' })[p.id], per2: ({ free: 'siempre', mensual: '/mes', anual: '/año' })[p.id], items: ({ free: ['Asesor básico', 'Canales abiertos', 'My closet hasta 10 prendas', 'Sin costo, cancela cuando quieras.'], mensual: ['Canales cerrados: #expertos, #retos, #drops', 'Asesor sin límite y My closet ilimitado', 'Facturación mensual a partir de hoy.', 'Cancela cuando quieras.'], anual: ['Todo lo de Mensual', 'Un drop de merch al año y eventos para miembros', 'Facturación anual a partir de hoy.', 'Cancela cuando quieras.'] })[p.id].map(x => ({ t: x })), cta: p.id === 'free' ? 'Continuar gratis' : 'Obtener ' + p.name.replace('KHAOS+ ', ''), tint: 'oklch(0.694 0.004 250)', col: 'oklch(0.078 0.004 250)', delay: (['mensual','anual','free'].indexOf(p.id) >= 0 ? ['mensual','anual','free'].indexOf(p.id) : 0) * 0.12 + 's', enter: () => this.setState({ hovPlan: p.id }), leave: (e) => { if (e && e.currentTarget) this.untilt(e); this.setState({ hovPlan: null }); }, hintO: s.hovPlan === p.id ? 0 : 1, perkH: s.hovPlan === p.id ? '160px' : '0px', perkO: s.hovPlan === p.id ? 1 : 0, perkList: ({ free: ['Asesor básico', 'Canales abiertos', 'My closet hasta 10 prendas', 'Con anuncios de colecciones'], mensual: ['Canales cerrados: #expertos, #retos, #drops', 'Asesor sin límite', 'My closet ilimitado', 'Acceso anticipado a colecciones'], anual: ['Todo lo de Mensual', 'Un drop de merch al año', 'Eventos solo para miembros', 'Ahorras 33%'] })[p.id].map(x => '✓  ' + x).join('\n'), tagOp: p.id === 'free' ? 0 : 1, bg: s.plan === p.id ? 'linear-gradient(135deg, oklch(0.06 0.004 250 / 0.2), oklch(0.06 0.004 250 / 0.05))' : 'oklch(0.06 0.004 250 / 0.04)', bd: s.plan === p.id ? 'oklch(0.06 0.004 250 / 0.45)' : 'oklch(0.06 0.004 250 / 0.12)' })),
      perks: ['Canales cerrados: #expertos, #retos y #drops', 'Asesor de imagen sin límite de consultas', 'My closet ilimitado y combinaciones guardadas', 'Acceso anticipado a colecciones y eventos'],
      sumPlan: [{ id: 'free', name: 'Free', tag: 'Actual', sub: 'Asesor básico y canales abiertos', price: '$0', per: 'siempre', amt: 0 }, { id: 'mensual', name: 'Plus', tag: 'Popular', sub: 'Canales cerrados, asesor sin límite y My closet ilimitado', price: '$14.900', per: 'COP / mes', amt: 14900 }, { id: 'anual', name: 'Pro', tag: 'Ahorra 33%', sub: 'Todo Plus y un drop de merch al año', price: '$119.900', per: 'COP / año', amt: 119900 }].find(p => p.id === s.plan).name, sumTotal: (() => { const a = [{ id: 'free', name: 'Free', tag: 'Actual', sub: 'Asesor básico y canales abiertos', price: '$0', per: 'siempre', amt: 0 }, { id: 'mensual', name: 'Plus', tag: 'Popular', sub: 'Canales cerrados, asesor sin límite y My closet ilimitado', price: '$14.900', per: 'COP / mes', amt: 14900 }, { id: 'anual', name: 'Pro', tag: 'Ahorra 33%', sub: 'Todo Plus y un drop de merch al año', price: '$119.900', per: 'COP / año', amt: 119900 }].find(p => p.id === s.plan).amt; return '$' + a.toLocaleString('es-CO') + ' COP'; })(),
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
      payMethods: [...s.payCards.map(c => ({ id: c.id, tag: c.brand.slice(0, 4), name: c.brand + ' •••• ' + c.last, sub: '' })), { id: 'nequi', tag: 'NEQ', name: 'Nequi', sub: 'Aprueba desde tu app' }, { id: 'pse', tag: 'PSE', name: 'PSE', sub: 'Débito desde tu banco' }].map(m => ({ ...m, logo: m.tag === 'VISA' ? 'url(' + rs(rs('assets/logo-visa.svg')) + ')' : m.tag === 'MAST' ? 'url(' + rs(rs('assets/logo-mastercard.svg')) + ')' : 'none', tagT: (m.tag === 'VISA' || m.tag === 'MAST') ? '' : m.tag, logoC: 'oklch(0.078 0.004 250)', go: () => this.setState({ payId: m.id }), dot: s.payId === m.id ? 1 : 0, bg: s.payId === m.id ? 'linear-gradient(135deg, oklch(0.06 0.004 250 / 0.2), oklch(0.06 0.004 250 / 0.05))' : 'oklch(0.06 0.004 250 / 0.04)', bd: s.payId === m.id ? 'oklch(0.06 0.004 250 / 0.4)' : 'oklch(0.06 0.004 250 / 0.12)' })),
      payStatus: 'Método elegido: ' + ((s.payCards.find(c => c.id === s.payId) && (s.payCards.find(c => c.id === s.payId).brand + ' •••• ' + s.payCards.find(c => c.id === s.payId).last)) || { nequi: 'Nequi', pse: 'PSE', pay: 'Apple Pay / Google Pay', cod: 'Contra entrega' }[s.payId]),
      isProbador: s.screen === 'probador', goProbador: go('probador'),
      tryStageRef: this.tryStageRef, videoRef: this.videoRef, tryCamOn: s.tryConsent === 'cam', tryErr: s.tryErr || '', tryCam: this.startCam, stopCam: this.stopCam, tryPhotoOn: s.tryConsent === true, tryAsk: s.tryConsent === null,
      tryYes: () => this.setState({ tryConsent: true }), tryNo: () => this.setState({ tryConsent: false }),
      tryHint: Object.keys(s.tryOn).length ? 'Arrastra para mover · − / + para el tamaño' : 'Toca una prenda para probártela',
      tryLayers: ['shoes', 'bottom', 'top', 'bag', 'watch', 'eyes', 'head'].filter(k => s.tryOn[k]).map(k => { const g = s.tryOn[k]; const it = s.closet.find(c => c.id === g.id); return { img: it.img, x: g.x, y: g.y, w: g.w, ol: s.trySel === k ? '1.5px dashed oklch(0.06 0.004 250 / 0.8)' : 'none', down: (e) => { e.preventDefault(); e.currentTarget.setPointerCapture(e.pointerId); this._tryDrag = k; this.setState({ trySel: k }); } }; }),
      tryMove: (e) => { const k = this._tryDrag; if (!k || !s.tryOn[k]) return; const r = this.tryStageRef.current.getBoundingClientRect(); const x = Math.max(0, Math.min(100, (e.clientX - r.left) / r.width * 100)); const y = Math.max(0, Math.min(100, (e.clientY - r.top) / r.height * 100)); this.setState({ tryOn: { ...s.tryOn, [k]: { ...s.tryOn[k], x, y } } }); },
      tryUp: () => { this._tryDrag = null; },
      tryTabs: [['all', 'Todo'], ...SLOTS.map(([id, l]) => [id, l])].map(([id, label]) => ({ label, go: () => this.setState({ tryTab: id }), bg: s.tryTab === id ? 'oklch(0.06 0.004 250 / 0.22)' : 'oklch(0.06 0.004 250 / 0.05)', bd: s.tryTab === id ? 'oklch(0.06 0.004 250 / 0.5)' : 'oklch(0.06 0.004 250 / 0.14)' })),
      tryItems: s.closet.filter(c => c.img && SLOT_OF[c.cat] && (s.tryTab === 'all' || SLOT_OF[c.cat] === s.tryTab)).map(c => { const on = s.tryOn[SLOT_OF[c.cat]] && s.tryOn[SLOT_OF[c.cat]].id === c.id; return { go: tryPick(c), bg: 'url(' + c.img + ') center / 80% no-repeat', bd: on ? 'oklch(0.06 0.004 250 / 0.9)' : 'oklch(0.06 0.004 250 / 0.2)' }; }),
      tryMinus: tryResize(-6), tryPlus: tryResize(6),
      tryClear: () => this.setState({ tryOn: {}, trySel: null, trySaved: false }),
      trySave: () => this.setState({ trySaved: true }), trySaveLabel: s.trySaved ? 'Look guardado ✓' : 'Guardar look',
      isCloset: s.screen === 'closet', goCloset: go('closet'), closetCount: s.closet.length,
      closetPeek: s.closet.filter(c => c.img).slice(0, 4).map(c => ({ bg: 'url(' + c.img + ') center / 82% no-repeat, linear-gradient(160deg, oklch(0.712 0.004 250), oklch(0.893 0.004 250))' })),
      canvasRef: this.canvasRef, dragMove: this.dragMove, dragEnd: this.dragEnd,
      floatItems: s.closet.map((c, i) => { const p = s.pos[c.id] || c; const on = s.outfit[SLOT_OF[c.cat]] === c.id; const dragging = s.drag && s.drag.id === c.id && s.drag.moved; return { ...c, x: p.x, y: p.y, on, z: dragging ? 9 : on ? 3 : 2, scale: dragging ? 1.12 : on ? 1.06 : 1, dur: 5 + i * 0.7, delay: -i * 1.3, filter: on ? 'drop-shadow(0 14px 18px oklch(0.829 0.05 250 / 0.55))' : 'drop-shadow(0 8px 10px oklch(0.829 0.05 250 / 0.25))', down: (e) => this.dragStart(c, e) }; }),
      closetCats: CLOSET_CATS.map(c => ({ label: c, count: s.closet.filter(i => c === 'Todo' || i.cat === c).length, go: () => this.setState({ closetCat: c }), bg: (s.closetCat || 'Todo') === c ? 'oklch(0.313 0.061 230 / 0.2)' : 'transparent', border: (s.closetCat || 'Todo') === c ? 'oklch(0.313 0.061 230 / 0.7)' : 'oklch(0.06 0.004 250 / 0.15)' })),
      closetItems: s.closet.filter(c => !s.closetCat || s.closetCat === 'Todo' || c.cat === s.closetCat).map(c => { const on = s.outfit[SLOT_OF[c.cat]] === c.id; const f = !!s.favs[c.id]; const hv = s.hov === c.id; return { ...c, on, open: () => this.wearItem(c), enter: () => this.setState({ hov: c.id }), leave: (e) => { e.currentTarget.style.transform = ''; this.setState({ hov: null }); }, infoOp: hv ? 1 : 0, infoY: hv ? '0' : '8px', imgScale: hv || on ? 1.06 : 1, imgFilter: on ? 'drop-shadow(0 0 18px oklch(0 0 0 / 0.35)) drop-shadow(0 14px 16px oklch(0 0 0 / 0.6))' : 'drop-shadow(0 12px 14px oklch(0 0 0 / 0.55))', mark: c.cat[0], markShow: c.img ? 'none' : 'block', imgShow: c.img ? 'block' : 'none', imgSrcBg: c.img ? 'url(' + c.img + ')' : 'none', wearLabel: c.worn ? 'usado ' + c.worn + ' veces' : 'nuevo', wear: () => this.wearItem(c), border: on ? 'oklch(0.06 0.004 250 / 0.6)' : 'oklch(0.06 0.004 250 / 0.08)', glow: on ? '0 0 0 1px oklch(0 0 0 / 0.35), 0 12px 30px oklch(0 0 0 / 0.6)' : 'none', fav: () => this.setState({ favs: { ...s.favs, [c.id]: !f } }), favColor: f ? 'oklch(0.377 0.2 15)' : 'oklch(0.15 0.004 250)', favFill: f ? 'currentColor' : 'none' }; }),
      outfitSlots: SLOTS.map(([k, label]) => { const it = s.closet.find(c => c.id === s.outfit[k]); return { slot: label, name: it ? it.name : '—', bg: it ? (it.img ? 'center / 85% no-repeat url(' + it.img + '), linear-gradient(160deg, oklch(0.694 0.004 250), oklch(0.92 0.004 250))' : 'linear-gradient(160deg, oklch(0.694 0.004 250), oklch(0.92 0.004 250))') : 'transparent', borderStyle: it ? 'solid' : 'dashed', scale: it ? 'scale(1)' : 'scale(0.96)', clear: () => this.setState({ shared: false, outfit: { ...s.outfit, [k]: null } }) }; }),
      openAdd: this.openAdd, closeAdd: this.closeAdd, addOpen: !!s.add, addConsent: !!s.add && s.add.step === 'consent', addCam: !!s.add && s.add.step === 'cam', addForm: !!s.add && s.add.step === 'form',
      addErr: s.add ? s.add.err : '', fileRef: this.fileRef, addVideoRef: this.addVideoRef, addFile: this.addFile, addPickFile: this.addPickFile, addCamStart: this.addCamStart, addSnap: this.addSnap, saveAdd: this.saveAdd,
      addImgBg: s.add && s.add.img ? 'url(' + s.add.img + ')' : 'none', addName: s.add ? s.add.name : '', onAddName: (e) => { const v = e.target.value.slice(0, 28); this.setState(st => ({ add: { ...st.add, name: v } })); },
      addCats: CLOSET_CATS.filter(c => c !== 'Todo').map(c => { const on = s.add && s.add.cat === c; return { label: c, go: () => this.setState(st => ({ add: { ...st.add, cat: c } })), bg: on ? 'oklch(0.078 0.004 250)' : 'oklch(0.06 0.004 250 / 0.06)', bd: on ? 'transparent' : 'oklch(0.06 0.004 250 / 0.2)' }; }),
      openBuild: this.openBuild, closeBuild: this.closeBuild, buildOpen: !!s.build, buildClear: this.buildClear, buildUse: this.buildUse,
      buildRows: [['head', 'Cabeza', 64], ['eyes', 'Gafas', 40], ['top', 'Arriba', 140], ['bottom', 'Abajo', 150], ['shoes', 'Pies', 56]].map(([sl, label, h]) => { const b = s.build || { slot: 'top', picks: {} }; const it = s.closet.find(c => c.id === b.picks[sl]); const on = b.slot === sl; return { label, h, bg: it && it.img ? 'url(' + it.img + ')' : 'none', lblShow: it ? 'none' : 'block', hl: on ? 'oklch(0.06 0.004 250 / 0.1)' : 'transparent', bs: it ? 'solid' : 'dashed', bc: on ? 'oklch(0.06 0.004 250 / 0.7)' : 'oklch(0.06 0.004 250 / 0.18)', sel: () => this.setState(st => ({ build: { ...st.build, slot: sl } })) }; }),
      buildTabs: [['head', 'Cabeza'], ['eyes', 'Gafas'], ['top', 'Arriba'], ['bottom', 'Abajo'], ['shoes', 'Pies']].map(([sl, label]) => { const on = s.build && s.build.slot === sl; return { label, go: () => this.setState(st => ({ build: { ...st.build, slot: sl } })), bg: on ? 'oklch(0.078 0.004 250)' : 'oklch(0.06 0.004 250 / 0.06)', bd: on ? 'transparent' : 'oklch(0.06 0.004 250 / 0.2)' }; }).map(t => ({ ...t, bg: t.bg, bd: t.bd })),
      buildItems: (() => { const b = s.build; if (!b) return []; return s.closet.filter(c => SLOT_OF[c.cat] === b.slot).map(c => { const on = b.picks[b.slot] === c.id; return { bg: (c.img ? 'center / 84% no-repeat url(' + c.img + '), ' : '') + 'linear-gradient(160deg, oklch(0.73 0.004 250), oklch(0.902 0.004 250))', bd: on ? 'oklch(0.06 0.004 250 / 0.9)' : 'oklch(0.06 0.004 250 / 0.12)', pick: () => this.setState(st => ({ build: { ...st.build, picks: { ...st.build.picks, [st.build.slot]: on ? null : c.id } } })) }; }); })(),
      buildEmptyShow: s.build && !s.closet.some(c => SLOT_OF[c.cat] === s.build.slot) ? 'block' : 'none',
      startCombo: this.startCombo, closeCombo: this.closeCombo, wearCombo: this.wearCombo, comboOpen: !!s.combo, comboDone: !!(s.combo && s.combo.done), comboTitle: s.combo && s.combo.done ? 'Tu combinación' : 'Combinando…',
      comboRows: [['head', 'Cabeza', 78, 'contain'], ['eyes', 'Gafas', 46, 'contain'], ['top', 'Arriba', 180, 'contain'], ['bottom', 'Abajo', 200, 'contain'], ['shoes', 'Pies', 70, 'contain']].map(([sl, label, h]) => { const co = s.combo || { picks: {}, locked: {}, final: {} }; const it = s.closet.find(c => c.id === co.picks[sl]); const lk = !!co.locked[sl]; return { label, h, bg: it && it.img ? 'url(' + it.img + ')' : 'none', name: it ? it.name : 'Sin ' + label.toLowerCase(), scale: lk ? 1 : 0.94, op: lk ? 1 : 0.55, blur: lk ? '0px' : '2px', nameOp: lk ? 1 : 0 }; }),
      shuffleOutfit: this.shuffleOutfit, shareOutfit: this.shareOutfit, addItem: this.addItem, shareLabel: s.shared ? 'Publicado en #looks ✓' : 'Compartir fit',
      goOnb: go('onb'), goReg: go('reg'), goHome: go('home'), goAsesor: go('asesor'), goComunidad: go('comunidad'), goPerfil: go('perfil'),
      onbNum: s.onb + 1, onb0: s.onb === 0, onb1: s.onb === 1, onb2: s.onb === 2, onbTitle: onbItem.t, onbText: onbItem.x, onbCta: s.onb === 2 ? 'Empezar' : 'Siguiente',
      onbDots: ONB.map((_, i) => ({ w: i === s.onb ? '22px' : '6px', bg: i === s.onb ? 'oklch(0.078 0.004 250)' : 'oklch(0.06 0.004 250 / 0.25)' })),
      onb0Img: 'url(' + rs('assets/hoodie-skeleton-black.png') + ')',
      onbImg1: 'url(' + rs('assets/hoodie-skeleton-black.png') + ')', onbImg2: 'url(' + rs('assets/jeans-black-wide.png') + ')',
      onb2Img1: 'url(' + rs('assets/s-closet-hoodie.png') + ')', onb2Img2: 'url(' + rs('assets/closet-tee2.png') + ')',
      onb2Img3: 'url(' + rs('assets/s-closet-jeans-fixed.png') + ')', onb2Img4: 'url(' + rs('assets/s-closet-tenis2.png') + ')',
      homeHeroImg: 'url(' + rs('assets/hat-2.png') + ')',
      moodNotes: [
        { t: MOOD_QUOTES[0].t, u: MOOD_QUOTES[0].u, bg: '#fff1a8', left: '2%', top: '4%', r0: '-5deg', r1: '3deg', r2: '-6deg', x0: '-8px', y0: '6px', x1: '14px', y1: '-10px', x2: '-10px', y2: '-22px', dur: '17s', delay: '-2s' },
        { t: MOOD_QUOTES[1].t, u: MOOD_QUOTES[1].u, bg: '#ffd3e0', left: '48%', top: '0%', r0: '4deg', r1: '-3deg', r2: '6deg', x0: '10px', y0: '-6px', x1: '-14px', y1: '14px', x2: '18px', y2: '20px', dur: '21s', delay: '-9s' },
        { t: MOOD_QUOTES[2].t, u: MOOD_QUOTES[2].u, bg: '#c9f3d6', left: '6%', top: '54%', r0: '-3deg', r1: '5deg', r2: '-4deg', x0: '-12px', y0: '-8px', x1: '10px', y1: '16px', x2: '-16px', y2: '8px', dur: '19s', delay: '-5s' },
        { t: MOOD_QUOTES[4].t, u: MOOD_QUOTES[4].u, bg: '#cfe3ff', left: '50%', top: '52%', r0: '5deg', r1: '-4deg', r2: '7deg', x0: '12px', y0: '10px', x1: '-10px', y1: '-14px', x2: '14px', y2: '-18px', dur: '23s', delay: '-14s' }
      ],
      swDown: (e) => { this._sx = e.clientX; },
      swCancel: () => { this._sx = null; },
      swUp: (e) => { if (this._sx == null) return; const dx = e.clientX - this._sx; this._sx = null; if (Math.abs(dx) < 40) return; if (dx < 0) { s.onb < 2 ? this.setState({ onb: s.onb + 1 }) : this.setState({ screen: 'reg' }); } else if (s.onb > 0) this.setState({ onb: s.onb - 1 }); },
      onbNext: () => { s.onb < 2 ? this.setState({ onb: s.onb + 1 }) : this.setState({ screen: 'reg' }); },
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
        ? { text: m.text, align: 'flex-end', bg: 'oklch(0.078 0.004 250)', color: 'oklch(0.874 0.004 250)', border: 'none', radius: '20px 20px 4px 20px', typing: false, plain: true, pct: 0, tip: '', hasTip: false }
        : { text: m.text, hasSw: !!m.sw, sw: m.sw || [], align: 'flex-start', bg: 'linear-gradient(135deg, oklch(0.06 0.004 250 / 0.2), oklch(0.06 0.004 250 / 0.05))', color: 'oklch(0.078 0.004 250)', border: '1px solid oklch(0.06 0.004 250 / 0.2)', radius: '20px 20px 20px 4px', typing: !!m.typing, plain: !m.typing, pct: m.pct || 0, tip: m.tip || '', hasTip: !!(m.typing && m.tip) }),
      colorAsk: !!s.colorAsk, onColorPhoto: this.onColorPhoto, denyColor: this.denyColor, showQuick: s.phase === 'done' && !s.colorAsk, quickReplies: ['Analizar otra foto', '¿Qué me pongo hoy?', 'Look para salir', 'Look cómodo', 'Qué colores combinar', 'Abrir probador'].map(label => ({ label, go: () => this.quick(label) })), showOptions: s.phase === 'q', showPermission: s.phase === 'perm', showResultCard: s.phase === 'done' && s.identity != null,
      options: s.phase === 'q' ? QUESTIONS[s.step].o.map((l, i) => ({ label: l, pick: () => this.pick(l, i) })) : [],
      onPhoto: this.onPhoto, denyPhoto: this.denyPhoto, resetAsesor: this.resetAsesor,
      draft: s.draft, setDraft: e => this.setState({ draft: e.target.value }), sendText: this.sendText,
      resultName: idObj ? idObj.n : '', resultText: idObj ? idObj.t : '', shareResult: this.shareResult,
      channels: CHANNELS.map(c => ({ name: c.name, go: () => this.setState({ channel: c.id }), bg: c.id === s.channel ? 'oklch(0.313 0.061 230 / 0.18)' : 'transparent', color: c.id === s.channel ? 'oklch(0.105 0.05 230)' : 'oklch(0.332 0.004 250)', weight: c.id === s.channel ? '700' : '400' })),
      chName: ch.name, chDesc: ch.desc, canPost: !ch.ro && !!s.joined[ch.id], readOnly: !!ch.ro,
      isMember: !!s.joined[ch.id] || !!ch.ro, notMember: !s.joined[ch.id] && !ch.ro,
      chTint: ch.tint, chOnline: ch.online || '', chAccess: ch.approval ? 'Requiere aprobación' : 'Canal abierto',
      toggleRules: () => this.setState({ rulesOk: !s.rulesOk }), rulesMark: s.rulesOk ? '✓' : '', rulesBg: s.rulesOk ? 'oklch(0.286 0.15 160)' : 'transparent', rulesBorder: s.rulesOk ? 'oklch(0.286 0.15 160)' : 'oklch(0.06 0.004 250 / 0.35)',
      joinChannel: this.joinChannel, joinLabel: s.pending[ch.id] ? 'SOLICITUD ENVIADA…' : (ch.approval ? 'SOLICITAR JOIN' : 'JOIN'),
      joinBg: s.rulesOk && !s.pending[ch.id] ? 'linear-gradient(135deg, oklch(0.06 0.004 250 / 0.25), oklch(0.06 0.004 250 / 0.07))' : 'oklch(0.06 0.004 250 / 0.05)', joinColor: s.rulesOk && !s.pending[ch.id] ? 'oklch(0.078 0.004 250)' : 'oklch(0.467 0.004 250)', joinCursor: s.rulesOk ? 'pointer' : 'not-allowed',
      joinHint: s.pending[ch.id] ? 'Un moderador está revisando tu solicitud.' : (ch.approval ? 'Un moderador aprueba cada solicitud para cuidar el espacio.' : 'Solo los miembros ven y publican en este canal.'),
      posts: s.posts[s.channel].map((p, i) => {
        const key = s.channel + i; const on = !!s.liked[key]; const r = !!s.rted[key];
        const likesN = p.likes + (on ? 1 : 0);
        return { ...p, circle: !!p.circle, likesL: p.mine ? likesN + ' · solo tú' : '', rtsL: '', repliesL: '', handle: p.anon ? 'kh-' + (1000 + i * 37) : p.user.toLowerCase().replace(/[^a-z0-9_.]/g, ''), initial: p.anon ? '?' : p.user[0].toUpperCase(), tint: p.anon ? 'oklch(0.694 0.004 250)' : p.user === 'KHAOS' ? 'linear-gradient(135deg, oklch(0.422 0.064 230), oklch(0.603 0.16 20))' : 'oklch(0.694 0.04 250)', likes: p.likes + (on ? 1 : 0), likeColor: on ? 'oklch(0.377 0.2 15)' : 'inherit', replies: Math.round(p.likes / 4), rts: Math.round(p.likes / 3) + (r ? 1 : 0), rtColor: r ? 'oklch(0.286 0.15 160)' : 'inherit', react: () => this.setState({ liked: { ...s.liked, [key]: !on } }), doRt: () => this.setState({ rted: { ...s.rted, [key]: !r } }), doReply: () => this.setState({ postDraft: '@' + p.user.toLowerCase().replace(/[^a-z0-9_.]/g, '') + ' ' }) };
      }),
      postDraft: s.postDraft, setPostDraft: e => this.setState({ postDraft: e.target.value }), sendPost: this.sendPost,
      profileIdentity: idObj ? idObj.n : 'Identidad sin descubrir', myPosts: s.myPosts,
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
      logout: () => { if (!s.confirmOut) { this.setState({ confirmOut: true }); setTimeout(() => this.setState({ confirmOut: false }), 3000); return; } KhaosStore.signOut(); this.stopSync(); this.setState((st) => ({ confirmOut: false, helpQ: '', helpOpen: -1, screen: 'splash', onb: 0, regMode: 'login', authed: false, fPass: '', posts: JSON.parse(JSON.stringify(SEED)), myPosts: 0, closet: st.closet.filter((c) => !c.synced) })); },
      tabs: [['comunidad', '#', 'Comunidad'], ['asesor', '✦', 'Asesor'], ['home', '⌂', 'Inicio'], ['articulos', '▤', 'Historias'], ['perfil', '◉', 'Perfil']].map(([k, icon, label]) => ({ icon, label, go: go(k), color: s.screen === k ? 'oklch(0.078 0.004 250)' : 'oklch(0.404 0.004 250)', weight: s.screen === k ? '700' : '400', bar: 'transparent', bg: s.screen === k ? 'linear-gradient(135deg, oklch(0.06 0.004 250 / 0.2), oklch(0.06 0.004 250 / 0.05))' : 'transparent', bd: s.screen === k ? 'oklch(0.06 0.004 250 / 0.25)' : 'transparent', sh: s.screen === k ? 'inset 0 1px 0 oklch(0.06 0.004 250 / 0.3)' : 'none' }))
    };
    v.tabs.forEach((x, i) => { v['t' + i] = x; });
    return v;
  }
}

