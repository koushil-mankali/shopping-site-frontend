// --------------nav menu --------------------
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  // Toggle menu-toggle button class
  menuToggle.classList.toggle('open');

  // Toggle nav visibility class
  nav.classList.toggle('show');
});


// --------------nav menu --------------------