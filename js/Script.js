// --------------nav menu --------------------
const menuButton = document.getElementById('menu-button');
const sideMenu = document.getElementById('side-menu');
const closeButton = document.getElementById('close-button');

menuButton.addEventListener('click', function() {
  sideMenu.classList.toggle('open');
});

closeButton.addEventListener('click', function() {
  sideMenu.classList.remove('open');
});
// --------------nav menu --------------------