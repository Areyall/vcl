/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// import css from './styles.css';
var btnOpenPopup = document.querySelector('.ham-con');
var btnClodePopup = document.querySelector('.pop-ham-con');
var mobileNavigation = document.querySelector('.pop-nav-block');

// btnOpenPopup.addEventListener('click', popupMobMenu);
// btnClodePopup.addEventListener('click', popupMobMenu);

// console.log(btnOpenPopup.classList)

// function popupMobMenu() {
//   let curentPopupDisplay = mobileNavigation.classList;

//   // console.log(!curentPopupDisplay.contains("pop-flex"))
//   if (curentPopupDisplay.contains('pop-flex-inactive')) {
//     mobileNavigation.classList.remove('pop-flex-inactive');
//     btnOpenPopup.classList.add('navDisplayInactive');
//   } else {
//     mobileNavigation.classList.add('pop-flex-inactive');
//     btnOpenPopup.classList.remove('navDisplayInactive');
//   }
// }

// const uaTextSum = document.querySelector('.wel-lower-two');
// const engLangBtn = document.querySelector('.en-lang-box');
// const uaLangBtn = document.querySelector('.ua-lang-box');

// console.dir(engLangBtn)
// engLangBtn.addEventListener('click', changeLangEn)

// function changeLangEn(){
//   window.location.reload()
// }

// uaLangBtn.addEventListener('click', changeLangUa)

// function changeLangUa(){

//   uaTextSum.innerHTML = `<h3>Привіт</h3>`;
// }

// Black and white

var colorButton = document.querySelector('.bl-wh-box');
var styleColors = document.querySelector('[data-styles]');
colorButton.addEventListener('click', changeColor);
function changeColor() {
  // styleColors.setAttribute('href', 'white-style.css')
  styleColors.getAttribute('href') == '' ? styleColors.setAttribute('href', 'white-style.css') : styleColors.setAttribute('href', '');
}
/******/ })()
;