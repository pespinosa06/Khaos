document.addEventListener('DOMContentLoaded', () => {

  /* =====================================
      VARIABLES GENERALES
  ===================================== */
  const body = document.body;
  let cart = [];

  /* =====================================
      CARRITO
  ===================================== */
  const cartBtn = document.querySelector('#cart-btn');
  const cartModal = document.querySelector('#cart-modal');
  const closeCartBtn = document.querySelector('#close-cart');
  const addToCartBtns = document.querySelectorAll('.add-to-cart');

  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      cartModal.classList.toggle('active');
    });
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
      cartModal.classList.toggle('active');
    });
  }

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.getAttribute('data-name');
      const productPrice = parseInt(btn.getAttribute('data-price'));
      
      addToCart(productName, productPrice);
    });
  });

  function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    
    updateCartUI();
  }

  function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartUI();
  }

  function updateCartUI() {
    const cartItemsContainer = document.querySelector('#cart-items');
    const cartCountSpan = document.querySelector('.cart-count');
    const cartTotalSpan = document.querySelector('#cart-total');

    // Actualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = totalItems;

    // Actualizar contenido del carrito
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p class="empty-cart">Carrito vacío</p>';
      cartTotalSpan.textContent = '$0';
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>$${item.price.toLocaleString('es-CO')} x ${item.quantity}</p>
          </div>
          <button class="cart-item-remove" onclick="removeCartItem('${item.name}')">
            ELIMINAR
          </button>
        </div>
      `).join('');

      // Calcular total
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      cartTotalSpan.textContent = '$' + total.toLocaleString('es-CO');
    }
  }

  window.removeCartItem = function(name) {
    removeFromCart(name);
  };

  /* =====================================
      NAV SCROLL
  ===================================== */
  const nav = document.querySelector('.nav');

  if (nav) {

    window.addEventListener('scroll', () => {

      nav.classList.toggle(
        'scrolled',
        window.scrollY > 40
      );

    }, { passive: true });

  }

  /* =====================================
      FAQ ACCORDION
  ===================================== */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {

    question.addEventListener('click', () => {

      const currentItem = question.parentElement;

      const isOpen = currentItem.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
      });

      if (!isOpen) {
        currentItem.classList.add('open');
      }

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

      if (
        email === '' ||
        !email.includes('@') ||
        !email.includes('.')
      ) {

        emailInput.value = '';
        emailInput.placeholder = 'EMAIL INVÁLIDO';

        emailInput.style.border = '1px solid #ff3c3c';

        setTimeout(() => {

          emailInput.placeholder = 'tu@email.com';
          emailInput.style.border = '';

        }, 2500);

        return;
      }

      const button = newsletterForm.querySelector('button');

      button.textContent = '✓ UNIDO';

      setTimeout(() => {
        button.textContent = 'UNIRME';
      }, 2500);

      emailInput.value = '';

    });

  }

  /* =====================================
      ANIMACIONES FADE UP
  ===================================== */
  const animatedElements = document.querySelectorAll(
    '.product-card, .gender-card, .faq-item, .hero-content'
  );

  animatedElements.forEach(el => {
    el.classList.add('fade-up');
  });

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.15
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  /* =====================================
      STAGGER EN PRODUCTOS
  ===================================== */
  document.querySelectorAll('.product-card').forEach((card, index) => {

    card.style.transitionDelay = `${index * 100}ms`;

  });

  /* =====================================
      PARALLAX HERO
  ===================================== */
  const heroContent = document.querySelector('.hero-content');

  if (heroContent) {

    window.addEventListener('scroll', () => {

      const scrollY = window.scrollY;

      heroContent.style.transform = `
        translateY(${scrollY * 0.15}px)
      `;

      heroContent.style.opacity = 1 - (scrollY / 700);

    }, { passive: true });

  }

  /* =====================================
      EFECTO EN PRODUCT CARDS
  ===================================== */
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {

    card.addEventListener('mouseenter', () => {
      card.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('active');
    });

  });

  /* =====================================
      SCROLL SUAVE LINKS
  ===================================== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', (e) => {

      const targetId = link.getAttribute('href');

      if (targetId === '#') return;

      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth'
      });

    });

  });

  /* =====================================
      TITULO CONSOLA
  ===================================== */
  console.log(
    '%cKHAOS',
    `
      color:#4ecdc4;
      font-size:2rem;
      font-weight:bold;
      letter-spacing:0.3em;
    `
  );

  console.log(
    '%cBienvenido al caos.',
    `
      color:#b8c4c4;
      letter-spacing:0.15em;
    `
  );

});