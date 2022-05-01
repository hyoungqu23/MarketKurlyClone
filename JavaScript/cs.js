const csCenter = document.querySelector('#csCenter');
const downBtn = document.querySelector('#downBtn');
const subList = document.querySelector('.sub-links');

const showList = () => {
  subList.classList.remove('hidden');
}

const hideList = () => {
  subList.classList.add('hidden');
}

csCenter.addEventListener('mouseover', showList);

csCenter.addEventListener('mouseleave', hideList);