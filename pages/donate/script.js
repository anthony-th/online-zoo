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

const BTN_AMOUNTS = document.querySelectorAll('.progress-bar__radio-button');
const LABELS_PROGRESS = document.querySelectorAll('.progress-bar__label');
const arrayPrBar = Array.from(BTN_AMOUNTS);
const arrayPrLabes = Array.from(LABELS_PROGRESS);
const AMOUNT_INPUT = document.getElementById('anotheramount');

arrayPrBar.forEach(el => {
  el.addEventListener('input', () => {
    if (el.checked) {
      AMOUNT_INPUT.value = el.value;
      arrayPrLabes.forEach(e => {
        e.parentElement.classList.remove('or3');
      })
      if (AMOUNT_INPUT.value == '100') {
        arrayPrLabes[5].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '5000') {
        arrayPrLabes[0].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '2000') {
        arrayPrLabes[1].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '1000') {
        arrayPrLabes[2].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '500') {
        arrayPrLabes[3].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '250') {
        arrayPrLabes[4].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '50') {
        arrayPrLabes[6].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '25') {
        arrayPrLabes[7].parentElement.classList.add('or3');
      }
    };
  });
})

window.addEventListener('load', loadFunction);
window.addEventListener('resize', reset);

function loadFunction() {
  arrayPrBar.forEach(el => {
    if (el.checked) {
      AMOUNT_INPUT.value = el.value;
      arrayPrLabes.forEach(e => {
        e.parentElement.classList.remove('or3');
      })
      if (AMOUNT_INPUT.value == '100') {
        arrayPrLabes[5].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '5000') {
        arrayPrLabes[0].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '2000') {
        arrayPrLabes[1].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '1000') {
        arrayPrLabes[2].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '500') {
        arrayPrLabes[3].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '250') {
        arrayPrLabes[4].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '50') {
        arrayPrLabes[6].parentElement.classList.add('or3');
      }
      if (AMOUNT_INPUT.value == '25') {
        arrayPrLabes[7].parentElement.classList.add('or3');
      }
    };
  })
}

function reset() {
  arrayPrBar.forEach(el => {
    if (el.checked) {
      AMOUNT_INPUT.value = '';
      el.checked = false;
      arrayPrLabes.forEach(e => {
        e.parentElement.classList.remove('or3');
      })
    };
  })
}

AMOUNT_INPUT.addEventListener('input', amountInput);

function amountChange() {
  switch (AMOUNT_INPUT.value) {
    case '25':
      arrayPrLabes[7].parentElement.classList.add('or3');
      arrayPrBar[7].checked = 'true';
      break;
    case '50':
      arrayPrLabes[6].parentElement.classList.add('or3');
      arrayPrBar[6].checked = 'true';
      break;
    case '100': 
      arrayPrLabes[5].parentElement.classList.add('or3');
      arrayPrBar[5].checked = 'true';
      break; 
    case '250': 
      arrayPrLabes[4].parentElement.classList.add('or3');
      arrayPrBar[4].checked = 'true';
      break; 
    case '500': 
      arrayPrLabes[3].parentElement.classList.add('or3');
      arrayPrBar[3].checked = 'true';
      break; 
    case '1000': 
      arrayPrLabes[2].parentElement.classList.add('or3');
      arrayPrBar[2].checked = 'true';
      break; 
    case '2000': 
      arrayPrLabes[1].parentElement.classList.add('or3');
      arrayPrBar[1].checked = 'true';
      break; 
    case '5000': 
      arrayPrLabes[0].parentElement.classList.add('or3');
      arrayPrBar[0].checked = 'true';
      break; 
  }
}

function amountInput() {
  arrayPrBar.forEach(el => {
    el.checked = false;
    arrayPrLabes.forEach(e => {
      e.parentElement.classList.remove('or3');
    })
  })
  this.value = this.value.replace(/[^0-9]/g, "").slice(0, 4);
  amountChange();
}

console.log(`Dont forget about: "❗When we check conditions for different screen widths, we don't just stretch the screen to the desired width, but do a page reload!": https://github.com/rolling-scopes-school/js-fe-course-en/blob/main/tasks/online-zoo/online-zoo.md#general-3`);
alert(`Dont forget about: "❗When we check conditions for different screen widths, we don't just stretch the screen to the desired width, but do a page reload!": https://github.com/rolling-scopes-school/js-fe-course-en/blob/main/tasks/online-zoo/online-zoo.md#general-3`);