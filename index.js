const menuButton = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close');

menuButton.addEventListener('click', () => {
  menu.classList.add('menu-active');
});
closeButton.addEventListener('click', () => {
  menu.classList.remove('menu-active');
});

const containerMobile = document.querySelector('#mobile-list');
const navMobile = document.querySelector('#mobile-nav');
const btnLeft = document.querySelector('#arrow-left-mobile');
const btnRight = document.querySelector('#arrow-right-mobile');
let currentPositionMobile = containerMobile.offsetWidth;
btnRight.addEventListener('click', () => {
  containerMobile.scrollBy(100, 0);
  currentPositionMobile += 100;
  btnLeft.style.opacity = '1'
});
btnLeft.addEventListener('click', () => {
  containerMobile.scrollBy(-100, 0);
  currentPositionMobile += 100;
  btnRight.style.opacity = '1'
})
const containerDesktop = document.querySelector('#desktop-list');
const navDesktop = document.querySelector('#desktop-nav');
const buttonLeft = document.querySelector('#arrow-left-desktop')
let currentPositionDesktop = containerDesktop.offsetWidth;
const buttonRight = document.querySelector('#arrow-right-desktop');
clickRight = buttonRight.addEventListener('click', () => { 
  containerDesktop.scrollBy(100, 0);
  currentPositionDesktop += 100;
  buttonLeft.style.opacity = '1'
  
});
clickLeft = buttonLeft.addEventListener('click', () => {
  containerDesktop.scrollBy(-100, 0);
  currentPositionDesktop += 100;
  buttonRight.style.opacity = '1'
})
if(currentPositionDesktop <= containerDesktop.scrollWidth) {
  buttonLeft.style.opacity = '0'
  buttonRight.style.opacity = '1'
} else {
  buttonLeft.style.opacity = '1'
  buttonRight.style.opacity = '0'
}
