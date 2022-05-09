const scrollTop = document.querySelector('.scrollTop');

window.addEventListener("scroll", () => {
  let y = window.pageYOffset;

  console.log(y)
  if (y > 700) {
    scrollTop.style.bottom = 15 + 'px';
  } else {
    scrollTop.style.bottom = -58 + 'px';
  }
});