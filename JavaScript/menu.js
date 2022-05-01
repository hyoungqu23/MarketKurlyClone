const menuItems = document.querySelectorAll('.main-menu-item');
const subMenu = document.querySelectorAll('.sub-menu');

menuItems[0].addEventListener('mouseover', () => {
  subMenu[0].classList.remove('hidden');
})

menuItems[0].addEventListener('mouseleave', () => {
  subMenu[0].classList.add('hidden');
})