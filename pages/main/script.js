'use strict';

const burgerLines = document.querySelectorAll('.burger-line');
const activeColorMenu = document.querySelectorAll('.active');
const cards = document.querySelectorAll('.cards');
const cardLeft = document.getElementById('cards-left');
const cardCenter = document.getElementById('cards-center');
const cardRight = document.getElementById('cards-right');
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

cards[0].style.order = 1;
cards[1].style.order = 2;
cards[2].style.order = 3;

// O___________O
const CARD_1 = document.getElementById('card1')
const CARD_2 = document.getElementById('card2')
const CARD_3 = document.getElementById('card3')
const CARD_4 = document.getElementById('card4')
const CARD_5 = document.getElementById('card5')
const CARD_6 = document.getElementById('card6')
const CARD_7 = document.getElementById('card7')
const CARD_8 = document.getElementById('card8')
const CARD_9 = document.getElementById('card9')
const CARD_10 = document.getElementById('card10')
const CARD_11 = document.getElementById('card11')
const CARD_12 = document.getElementById('card12')
const CARD_13 = document.getElementById('card13')
const CARD_14 = document.getElementById('card14')
const CARD_15 = document.getElementById('card15')
const CARD_16 = document.getElementById('card16')
const CARD_17 = document.getElementById('card17')
const CARD_18 = document.getElementById('card18')
const CARD_19 = document.getElementById('card19')
const CARD_20 = document.getElementById('card20')
const CARD_21 = document.getElementById('card21')

let cardsWithoutDisplayNone = [CARD_1, CARD_2, CARD_3, CARD_5, CARD_6, CARD_7, CARD_8, CARD_9, CARD_10,  CARD_12, CARD_13, CARD_14, CARD_15, CARD_16, CARD_17, CARD_19, CARD_20, CARD_21];
let cardsWithoutDisplayNone640 = [CARD_1, CARD_2, CARD_3, CARD_7, CARD_8, CARD_9, CARD_10, CARD_14, CARD_15, CARD_16, CARD_17, CARD_21];

function prevClick() {
  if (window.innerWidth > 999) {
    cardsWithoutDisplayNone.forEach(e => {
      e.style.order = Math.floor(Math.random() * (cardsWithoutDisplayNone.length));
    })
    setTimeout(() => {
      cardLeft.classList.add('animationLeft');
      cardCenter.classList.add('animationLeft');
      PREV_ARROW.removeEventListener('click', prevClick);
      NEXT_ARROW.removeEventListener('click', nextClick);
    }, 500);
  } else {
    cardsWithoutDisplayNone640.forEach(e => {
      e.style.order = Math.floor(Math.random() * (cardsWithoutDisplayNone640.length));
    })
    setTimeout(() => {
      cardLeft.classList.add('animationLeft1000');
      cardCenter.classList.add('animationLeft1000');
      PREV_ARROW.removeEventListener('click', prevClick);
      NEXT_ARROW.removeEventListener('click', nextClick);
    }, 500);
  }
  console.log('prev');
}

cardLeft.addEventListener('animationend', animationEnd);
function animationEnd() {
  if (window.innerWidth > 999) {
    cardCenter.innerHTML = cardLeft.innerHTML;
    cardLeft.classList.remove('animationLeft');
    cardCenter.classList.remove('animationLeft');
    PREV_ARROW.addEventListener('click', prevClick);
    NEXT_ARROW.addEventListener('click', nextClick);
  } else {
    cardCenter.innerHTML = cardLeft.innerHTML;
    cardLeft.classList.remove('animationLeft1000');
    cardCenter.classList.remove('animationLeft1000');
    PREV_ARROW.addEventListener('click', prevClick);
    NEXT_ARROW.addEventListener('click', nextClick);
  }
}
cardRight.addEventListener('animationend', animationEndRight);
function animationEndRight() {
  if (window.innerWidth > 999) {
    cardCenter.innerHTML = cardRight.innerHTML;
    cardRight.classList.remove('animationRight');
    cardCenter.classList.remove('animationRight');
    NEXT_ARROW.addEventListener('click', nextClick);
    PREV_ARROW.addEventListener('click', prevClick);
  } else {
    cardCenter.innerHTML = cardRight.innerHTML;
    cardRight.classList.remove('animationRight1000');
    cardCenter.classList.remove('animationRight1000');
    NEXT_ARROW.addEventListener('click', nextClick);
    PREV_ARROW.addEventListener('click', prevClick);
  }
}

function nextClick() {
  if (window.innerWidth > 999) {
    setTimeout(() => {
      PREV_ARROW.removeEventListener('click', prevClick);
      NEXT_ARROW.removeEventListener('click', nextClick);
      cardRight.classList.toggle('animationRight');
      cardCenter.classList.toggle('animationRight');
    }, 500);
    cardsWithoutDisplayNone.forEach(e => {
      e.style.order = Math.floor(Math.random() * (cardsWithoutDisplayNone.length));
    })
  } else {
    setTimeout(() => {
      PREV_ARROW.removeEventListener('click', prevClick);
      NEXT_ARROW.removeEventListener('click', nextClick);
      cardRight.classList.toggle('animationRight1000');
      cardCenter.classList.toggle('animationRight1000');
    }, 500);
    cardsWithoutDisplayNone640.forEach(e => {
      e.style.order = Math.floor(Math.random() * (cardsWithoutDisplayNone640.length));
    })
  }
  console.log('nextArrow');
}