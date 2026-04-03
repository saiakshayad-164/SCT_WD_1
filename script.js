// Enhanced navigation, accessibility, scroll effects, and contact handling
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  // Toggle mobile nav with aria updates and animation
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks && navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Navbar style on scroll
  const onScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 48) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form: basic validation and mock submit
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submit = form.querySelector('button[type="submit"]');
      if (submit) { submit.disabled = true; submit.textContent = 'Sending…'; }

      // front-end validation (simple)
      const formData = new FormData(form);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();
      if (!name || !email || !message) {
        alert('Please complete all fields.');
        if (submit) { submit.disabled = false; submit.textContent = 'Send message'; }
        return;
      }

      // simulate network
      setTimeout(() => {
        alert('Thanks — your message was received.');
        form.reset();
        if (submit) { submit.disabled = false; submit.textContent = 'Send message'; }
      }, 900);
    });
  }
});