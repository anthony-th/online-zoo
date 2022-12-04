'use strict';

const burgerLines = document.querySelectorAll('.burger-line');
const activeColorMenu = document.querySelectorAll('.active');
const card = document.querySelectorAll('.card');
const NAV = document.querySelector('.nav');
const BURGER_MENU = document.querySelector('.burger-menu');
const SHADOW = document.querySelector('.shadow');
const PREV_ARROW = document.getElementById('prev');
const NEXT_ARROW = document.getElementById('next');

SHADOW.addEventListener('click', openBurger);
BURGER_MENU.addEventListener('click', openBurger);

function openBurger() {
  NAV.classList.toggle('burger-open');
  SHADOW.classList.toggle('display-block');
  BURGER_MENU.classList.toggle('burger-open-now');
  activeColorMenu.forEach(e => {
    e.classList.toggle('active');
    e.classList.toggle('orange');
  })
  burgerLines.forEach((element) => {
    element.classList.toggle('burger-color');
  })
}

PREV_ARROW.addEventListener('click', prevClick);
NEXT_ARROW.addEventListener('click', nextClick);

function prevClick() {
  // card.forEach(e => {
  //   // console.log(e.style.display === 'flex');
  //   console.log(e);
  //     // return e.style.display == 'flex' ? e.style.order = Math.floor(Math.random() * (e.length + 1)) : e.style.display == 'none';
  //   e.style.order = Math.floor(Math.random() * (card.length + 1));
  // })

  // let filtCard = [].filter.call(card, function(e) {
  //   let style = window.getComputedStyle(e);
  //   if (style.display === 'flex') {
  //     let correct = style.display === 'flex';
  //     console.log(correct);
  //     console.log(style.order);
  //     e.style.order = Math.floor(Math.random() * style.length);
  //   }


  // card.forEach(e => {
  //   let filtCard = [].filter.call(card, function(e) {
  //     let style = window.getComputedStyle(e);
  //     if (style.display === 'flex') {
  //       let correct = style.display === 'flex';
  //       console.log(correct);
  //       console.log(style.order);
  //       // style.order = Math.floor(Math.random() * style.length);
  //     }
  //     // if (e.display !== 'none') {
  //     //   console.log(e.display !== 'none');
  //     // }      
  //     // return (style.display !== 'none');
  //   });
    // console.log(correct);
    // console.log(e.style.display == 'none');
    // e.style.order = Math.floor(Math.random() * (card.length + 1));
  // })
  console.log('prev');
}

function nextClick() {
  // card.forEach(e => {
  //   console.log(e.style.display == 'none');
  //   e.style.order = Math.floor(Math.random() * (card.length + 1));
  // })
  console.log('nextArrow');
}