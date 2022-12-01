'use strict';

const burgerMenu = document.querySelector('.burger-menu');
const burgerLines = document.querySelectorAll('.burger-line');
const nav = document.querySelector('.nav');
const activeColorMenu = document.querySelectorAll('.active');

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('burger-open');
  burgerMenu.classList.toggle('burger-open-now');
  activeColorMenu.forEach(e => {
    e.classList.toggle('active');
    e.classList.toggle('orange');
  })
  burgerLines.forEach((element) => {
    element.classList.toggle('burger-color');
  })
})