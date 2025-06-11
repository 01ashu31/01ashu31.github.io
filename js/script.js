const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dark mode handling
const toggle = document.getElementById('dark-toggle');
toggle.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark', toggle.checked);
});
