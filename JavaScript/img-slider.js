// img move function
function moveLeft() {
  const SLIDER = document.querySelector(".slide-wrapper")
  const IMAGE = document.querySelectorAll(".slide-item");
  
  let currentImg = 0;

  setInterval(() => {
    let from = -(innerWidth * currentImg);
    let to = from - innerWidth;

    SLIDER.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });

    currentImg++;

    if (currentImg === (IMAGE.length - 1)) {
      currentImg = 0;
    }

  }, 2000)
}

moveLeft();