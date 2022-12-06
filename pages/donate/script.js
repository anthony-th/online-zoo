'use strict';

const burgerLines = document.querySelectorAll('.burger-line');
const activeColorMenu = document.querySelectorAll('.active');
const NAV = document.querySelector('.nav');
const BURGER_MENU = document.querySelector('.burger-menu');
const SHADOW = document.querySelector('.shadow');

SHADOW.addEventListener('click', closeShadow);
BURGER_MENU.addEventListener('click', openBurger);

function closeShadow() {
  NAV.classList.remove('burger-open');
  SHADOW.classList.remove('display-block');
  BURGER_MENU.classList.remove('burger-open-now');
  activeColorMenu.forEach(e => {
    e.classList.remove('active');
    e.classList.remove('orange');
  })
  burgerLines.forEach((element) => {
    element.classList.remove('burger-color');
  })
}

function openBurger() {
  NAV.classList.toggle('burger-open');
  SHADOW.classList.toggle('display-block');
  BURGER_MENU.classList.toggle('burger-open-now');
  activeColorMenu.forEach(e => {
    e.classList.remove('active');
    e.classList.remove('orange');
  })
  burgerLines.forEach((element) => {
    element.classList.toggle('burger-color');
  })
}