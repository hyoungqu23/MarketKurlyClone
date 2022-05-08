const quickMenu = document.querySelector('#quick-menu');

window.onresize = () => {
  let x = window.innerWidth;
  x < 1250 ? quickMenu.style.display = "none" : quickMenu.style.display = "block";
}
