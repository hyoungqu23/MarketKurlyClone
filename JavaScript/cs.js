const csCenter = document.querySelector('#csCenter');
const downBtn = document.querySelector('#downBtn');
const subList = document.querySelector('.sub-links');

const showList = () => {
  subList.classList.remove('hidden');
}


csCenter.addEventListener('hover', showList);
downBtn.addEventListener('hover', showList);
