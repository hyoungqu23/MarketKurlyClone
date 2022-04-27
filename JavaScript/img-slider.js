// img move function
const SLIDER = document.querySelector(".slide-wrapper")
const IMAGE = document.querySelectorAll(".slide-item");
let intervalId;
let currentImg = 0;

moveLeft(0);

function moveLeft(currentImg) {
  intervalId = setInterval(() => {
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
  let stopImg = 0;

  SLIDER.addEventListener("mouseover", () =>{
    clearInterval(intervalId);
    stopImg = currentImg;
    
    SLIDER.addEventListener("mouseleave", () =>{
      moveLeft(stopImg);
    })
  })
}




