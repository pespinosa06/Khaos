document.addEventListener('DOMContentLoaded', () => {

  /* =====================================
      VARIABLES
  ===================================== */
  let cart = [];

  /* =====================================
      CARRITO
  ===================================== */
  const cartBtn        = document.querySelector('#cart-btn');
  const cartModal      = document.querySelector('#cart-modal');
  const closeCartBtn   = document.querySelector('#close-cart');
  const addToCartBtns  = document.querySelectorAll('.add-to-cart');

  function openCart()  { cartModal?.classList.add('active'); }
  function closeCart() { cartModal?.classList.remove('active'); }

  cartBtn?.addEventListener('click', () => cartModal?.classList.toggle('active'));
  closeCartBtn?.addEventListener('click', closeCart);

  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    if (
      cartModal?.classList.contains('active') &&
      !cartModal.contains(e.target) &&
      !cartBtn?.contains(e.target)
    ) closeCart();
  });

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(
        btn.getAttribute('data-name'),
        parseInt(btn.getAttribute('data-price'))
      );
      // Feedback visual
      btn.textContent = '✓ AÑADIDO';
      setTimeout(() => { btn.textContent = '+ AGREGAR'; }, 1800);
      openCart();
    });
  });

  function addToCart(name, price) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
  }

  function removeFromCart(name) {
    cart = cart.filter(i => i.name !== name);
    updateCartUI();
  }

  function updateCartUI() {
    const container = document.querySelector('#cart-items');
    const countEl   = document.querySelector('.cart-count');
    const totalEl   = document.querySelector('#cart-total');

    if (!container || !countEl || !totalEl) return;

    const totalQty   = cart.reduce((s, i) => s + i.quantity, 0);
    const totalPrice = cart.reduce((s, i) => s + i.price * i.quantity, 0);

    countEl.textContent = totalQty;
    totalEl.textContent = '$' + totalPrice.toLocaleString('es-CO');

    if (cart.length === 0) {
      container.innerHTML = '<p class="empty-cart">Carrito vacío</p>';
      return;
    }

    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>$${item.price.toLocaleString('es-CO')} × ${item.quantity}</p>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem('${item.name}')">
          ELIMINAR
        </button>
      </div>
    `).join('');
  }

  window.removeCartItem = (name) => removeFromCart(name);

  /* =====================================
      NAV SCROLL
  ===================================== */
  const nav = document.querySelector('.nav');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* =====================================
      FAQ ACCORDION
  ===================================== */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Cierra todos
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

      // Abre este si estaba cerrado
      if (!isOpen) item.classList.add('open');
    });
  });

  /* =====================================
      NEWSLETTER
  ===================================== */
  const newsletterForm = document.querySelector('.newsletter-form');

  if (newsletterForm) {
    const emailInput = newsletterForm.querySelector('input');

    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const valid = email !== '' && email.includes('@') && email.includes('.');

      if (!valid) {
        emailInput.value = '';
        emailInput.placeholder = 'EMAIL INVÁLIDO';
        emailInput.style.borderColor = '#ff3030';
        setTimeout(() => {
          emailInput.placeholder = 'tu@email.com';
          emailInput.style.borderColor = '';
        }, 2500);
        return;
      }

      const btn = newsletterForm.querySelector('button');
      btn.textContent = '✓ LISTO';
      emailInput.value = '';
      setTimeout(() => { btn.textContent = 'UNIRME'; }, 2500);
    });
  }

  /* =====================================
      ANIMACIONES FADE-UP (Intersection Observer)
  ===================================== */
  const animTargets = document.querySelectorAll(
    '.product-card, .gender-card, .faq-item, .hero-content'
  );

  animTargets.forEach((el, i) => {
    el.classList.add('fade-up');
    // Stagger por índice
    el.style.transitionDelay = `${i * 70}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animTargets.forEach(el => observer.observe(el));

  /* =====================================
      PARALLAX SUTIL — HERO
  ===================================== */
  const heroContent = document.querySelector('.hero-content');

  if (heroContent) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroContent.style.transform = `translateY(${y * 0.12}px)`;
      heroContent.style.opacity   = Math.max(0, 1 - y / 650);
    }, { passive: true });
  }

  /* =====================================
      SMOOTH SCROLL — links ancla internos
  ===================================== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* =====================================
      CONSOLA
  ===================================== */
  console.log('%cKHAOS', 'color:#c8ff00;font-family:monospace;font-size:2rem;font-weight:900;letter-spacing:0.4em;');
  console.log('%cSistema online.', 'color:#6a6a72;font-family:monospace;letter-spacing:0.2em;font-size:.8rem;');

});
