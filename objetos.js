document.addEventListener('DOMContentLoaded', () => {

  /* =====================================
      VARIABLES
  ===================================== */
  let cart = [];

  /* =====================================
      CARRITO
  ===================================== */
  const cartBtn       = document.querySelector('#cart-btn');
  const cartModal     = document.querySelector('#cart-modal');
  const closeCartBtn  = document.querySelector('#close-cart');
  const addToCartBtns = document.querySelectorAll('.add-to-cart');

  function openCart()  { cartModal?.classList.add('active'); }
  function closeCart() { cartModal?.classList.remove('active'); }

  cartBtn?.addEventListener('click', () => cartModal?.classList.toggle('active'));
  closeCartBtn?.addEventListener('click', closeCart);

  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    if (
      cartModal?.classList.contains('active') &&
      !cartModal.contains(e.target) &&
      !cartBtn?.contains(e.target) &&
      !document.querySelector('#checkout-modal')?.contains(e.target)
    ) closeCart();
  });

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(
        btn.getAttribute('data-name'),
        parseInt(btn.getAttribute('data-price'))
      );
      const orig = btn.textContent;
      btn.textContent = '✓ AÑADIDO';
      btn.style.background = 'var(--accent)';
      btn.style.color = 'var(--bg)';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
      }, 1800);
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
        <button class="cart-item-remove" onclick="removeCartItem('${item.name}')">ELIMINAR</button>
      </div>
    `).join('');
  }

  window.removeCartItem = (name) => removeFromCart(name);

  /* =====================================
      CHECKOUT MODAL
  ===================================== */
  const checkoutModal   = document.querySelector('#checkout-modal');
  const checkoutBg      = document.querySelector('#checkout-bg');
  const checkoutClose   = document.querySelector('#checkout-close');
  const openCheckoutBtn = document.querySelector('#open-checkout');
  const checkoutForm    = document.querySelector('#checkout-form');
  const checkoutBody    = document.querySelector('#checkout-body');
  const checkoutSuccess = document.querySelector('#checkout-success');
  const orderNumberEl   = document.querySelector('#order-number');
  const summaryEl       = document.querySelector('#checkout-summary');
  const paymentSelect   = document.querySelector('#payment-method');
  const cardFields      = document.querySelector('#card-fields');
  const successCloseBtn = document.querySelector('#success-close-btn');

  function openCheckout() {
    if (cart.length === 0) {
      // Agitar el carrito si está vacío
      cartModal?.classList.add('active');
      return;
    }
    closeCart();
    renderCheckoutSummary();
    checkoutModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckout() {
    checkoutModal?.classList.remove('active');
    document.body.style.overflow = '';
    // Reset del form
    setTimeout(() => {
      checkoutForm?.reset();
      if (checkoutBody)  checkoutBody.style.display = 'block';
      if (checkoutSuccess) checkoutSuccess.classList.remove('show');
      if (cardFields) cardFields.style.display = 'none';
    }, 400);
  }

  function renderCheckoutSummary() {
    if (!summaryEl) return;
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

    summaryEl.innerHTML = `
      ${cart.map(item => `
        <div class="checkout-summary-item">
          <span>${item.name} <small style="color:var(--gray);font-size:.72rem;">×${item.quantity}</small></span>
          <span>$${(item.price * item.quantity).toLocaleString('es-CO')}</span>
        </div>
      `).join('')}
      <div class="checkout-summary-total">
        <span>TOTAL</span>
        <span>$${total.toLocaleString('es-CO')} COP</span>
      </div>
    `;
  }

  openCheckoutBtn?.addEventListener('click', openCheckout);
  checkoutClose?.addEventListener('click', closeCheckout);
  checkoutBg?.addEventListener('click', closeCheckout);
  successCloseBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    closeCheckout();
  });

  // Mostrar/ocultar campos tarjeta según método de pago
  paymentSelect?.addEventListener('change', () => {
    if (!cardFields) return;
    if (paymentSelect.value === 'card') {
      cardFields.style.display = 'flex';
    } else {
      cardFields.style.display = 'none';
    }
  });

  // Formatear número de tarjeta
  const cardNumberInput = document.querySelector('#card-number');
  cardNumberInput?.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '').substring(0, 16);
    e.target.value = v.match(/.{1,4}/g)?.join(' ') || v;
  });

  // Formatear fecha tarjeta
  const cardExpiryInput = document.querySelector('#card-expiry');
  cardExpiryInput?.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 3) v = v.substring(0, 2) + '/' + v.substring(2);
    e.target.value = v;
  });

  // Solo números en CVV
  document.querySelector('#card-cvv')?.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  });

  // Submit del formulario
  checkoutForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validación básica de campos requeridos
    const required = checkoutForm.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = 'var(--danger)';
        valid = false;
        setTimeout(() => { field.style.borderColor = ''; }, 2500);
      }
    });

    const emailInput = checkoutForm.querySelector('input[type="email"]');
    if (emailInput && !emailInput.checkValidity()) {
      emailInput.style.borderColor = 'var(--danger)';
      emailInput.value = '';
      emailInput.placeholder = 'EMAIL INVÁLIDO';
      valid = false;
      setTimeout(() => {
        emailInput.style.borderColor = '';
        emailInput.placeholder = 'tu@email.com';
      }, 2500);
    }

    // Validar método de pago seleccionado
    if (paymentSelect && !paymentSelect.value) {
      paymentSelect.style.borderColor = 'var(--danger)';
      valid = false;
      setTimeout(() => { paymentSelect.style.borderColor = ''; }, 2500);
    }

    if (!valid) return;

    // Simular procesamiento
    const submitBtn = checkoutForm.querySelector('.checkout-submit');
    submitBtn.textContent = 'PROCESANDO...';
    submitBtn.style.opacity = '.6';
    submitBtn.disabled = true;

    setTimeout(() => {
      // Generar número de orden
      const orderNum = 'ORD-KHAOS-' + Math.floor(100000 + Math.random() * 900000);
      if (orderNumberEl) orderNumberEl.textContent = orderNum;

      // Mostrar pantalla de éxito
      if (checkoutBody) checkoutBody.style.display = 'none';
      if (checkoutSuccess) checkoutSuccess.classList.add('show');

      // Limpiar carrito
      cart = [];
      updateCartUI();

      // Resetear botón
      submitBtn.textContent = 'CONFIRMAR ORDEN →';
      submitBtn.style.opacity = '';
      submitBtn.disabled = false;
    }, 1800);
  });

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
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
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
      ANIMACIONES FADE-UP
  ===================================== */
  const animTargets = document.querySelectorAll(
    '.product-card, .gender-card, .faq-item, .hero-content'
  );

  animTargets.forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${i * 70}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  animTargets.forEach(el => observer.observe(el));

  /* =====================================
      PARALLAX SUTIL — HERO
  ===================================== */
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroContent.style.transform = `translateY(${y * 0.1}px)`;
      heroContent.style.opacity   = Math.max(0, 1 - y / 600);
    }, { passive: true });
  }

  /* =====================================
      SMOOTH SCROLL
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
  console.log('%cKHAOS', 'color:#009dff;font-family:monospace;font-size:2rem;font-weight:900;letter-spacing:0.4em;');
  console.log('%cSistema online.', 'color:#6a6a72;font-family:monospace;letter-spacing:0.2em;font-size:.8rem;');

});