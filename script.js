// ===== Mobile menu toggle =====
const menuBtn = document.getElementById('menuBtn');
const tabs = document.getElementById('tabs');

menuBtn.addEventListener('click', () => {
  const isOpen = tabs.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu after choosing a section
tabs.querySelectorAll('.tab').forEach(link => {
  link.addEventListener('click', () => {
    tabs.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// ===== Active tab highlighting on scroll =====
const sections = document.querySelectorAll('main section[id]');
const tabLinks = document.querySelectorAll('.tab');

const setActive = (id) => {
  tabLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActive(entry.target.id);
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Contact form: client-side validation + mailto handoff =====
// Static hosting (Vercel) has no backend by default, so this opens the
// visitor's email client pre-filled with their message. Swap this for a
// form service (e.g. Formspree) or a Vercel Serverless Function if you
// want messages delivered without the visitor's own mail client.
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill in every field before sending.';
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:gaganisewsenanayake03@gmail.com?subject=${subject}&body=${body}`;

  status.textContent = 'Opening your email client…';
  form.reset();
});
