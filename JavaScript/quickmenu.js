const quickMenu = document.querySelector('#quick-menu');

window.onresize = () => {
  let x = window.innerWidth;
  x < 1250 ? quickMenu.style.display = "none" : quickMenu.style.display = "block";
}

window.addEventListener("scroll", () => {
  let y = +window.scrollY;
  (y > 720) ? quickMenu.style.top = y + 320 + "px" : quickMenu.style.top = "730px"
})