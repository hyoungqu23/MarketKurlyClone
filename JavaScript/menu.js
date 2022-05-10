const menu = document.querySelector('#menu');

window.addEventListener("scroll", () => {
  let y = window.pageYOffset;

  console.log(y)
  if (y > 150) {
    menu.classList.add('stickyToTop');
  } else {
    menu.classList.remove('stickyToTop');
  }
});

const menuItems = document.querySelectorAll('.main-menu-item');
const subMenu = document.querySelectorAll('.sub-menu');

menuItems[0].addEventListener('mouseover', () => {
  subMenu[0].classList.remove('hidden');
})

menuItems[0].addEventListener('mouseleave', () => {
  subMenu[0].classList.add('hidden');
})

const anchor = document.querySelectorAll('.sub-menu-item > a');

for (let i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener('mouseover', (e) => {
    e.target.parentNode.childNodes[5].classList.toggle('hidden2');
  })

  anchor[i].addEventListener('mouseleave', (e) => {
    e.target.parentNode.childNodes[5].classList.toggle('hidden2');
  })
}

const address = document.querySelector('.addressIcon');
const popup = document.querySelector('.popup');

address.addEventListener('mouseover', (e) => {
    popup.classList.toggle('hidden');
})

address.addEventListener('mouseleave', (e) => {
    popup.classList.toggle('hidden');
})