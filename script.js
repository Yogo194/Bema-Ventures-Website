/* ============================================================
   BEMA VENTURES — Interactions
   ============================================================ */

/* ---------- Mobile Menu ---------- */
(function () {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  // Create mobile menu overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu';
  overlay.innerHTML = `
    <div class="mobile-menu-top">
      <div class="logo">
        <div class="logo-text">
          <span class="logo-name" style="color:#02264f;font-family:Inter,sans-serif;font-weight:700;font-size:18px;">BEMA VENTURES</span>
        </div>
      </div>
      <button class="mobile-menu-close" aria-label="Close menu">&#x2715;</button>
    </div>
    <nav class="mobile-nav">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#blog">Insights</a>
      <a href="#contact">Contact</a>
    </nav>
  `;
  document.body.appendChild(overlay);

  const closeBtn = overlay.querySelector('.mobile-menu-close');

  menuBtn.addEventListener('click', () => {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', closeMenu);

  overlay.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
})();

/* ---------- FAQ Accordion ---------- */
(function () {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.display = 'none';
        const ic = i.querySelector('.faq-icon');
        ic.src = 'assets/caret-down.svg';
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        answer.style.display = 'block';
        icon.src = 'assets/caret-up.svg';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Open second item by default
  const defaultOpen = items[1];
  if (defaultOpen) {
    defaultOpen.classList.add('open');
    defaultOpen.querySelector('.faq-answer').style.display = 'block';
    defaultOpen.querySelector('.faq-icon').src = 'assets/caret-up.svg';
    defaultOpen.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
  }
})();

/* ---------- Testimonials Slider ---------- */
(function () {
  const track = document.getElementById('testiTrack');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');
  if (!track) return;

  const cards = track.querySelectorAll('.testi-card');
  let current = 0;
  const total = cards.length;

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function getCardWidth() {
    if (isMobile()) return track.parentElement.offsetWidth + 32;
    return (track.parentElement.offsetWidth / 2) + 16;
  }

  function update() {
    const offset = current * (isMobile()
      ? track.parentElement.offsetWidth + 32
      : (track.parentElement.offsetWidth / 2) + 16);
    track.style.transform = `translateX(-${offset}px)`;

    prevBtn.classList.toggle('active', current > 0);
    nextBtn.classList.toggle('active', current < total - (isMobile() ? 1 : 2));
  }

  nextBtn.addEventListener('click', () => {
    const max = isMobile() ? total - 1 : total - 2;
    if (current < max) { current++; update(); }
  });

  prevBtn.addEventListener('click', () => {
    if (current > 0) { current--; update(); }
  });

  window.addEventListener('resize', update);
  update();
})();

/* ---------- Active Nav on Scroll ---------- */
(function () {
  const sections = document.querySelectorAll('section[id], header[id]');
  const links = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
})();

/* ---------- Scroll-in animations ---------- */
(function () {
  const targets = document.querySelectorAll(
    '.service-card, .value-card, .blog-card, .testi-card, .faq-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => observer.observe(t));
})();
