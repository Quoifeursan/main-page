const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.style.width = sidebar.style.width === '200px' ? '0' : '200px';
});
