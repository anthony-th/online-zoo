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

const petCards = [
  {
    "id": "01",
    "imageLink": "./assets/images/red_panda.jpg",
    "title": "Red panda",
    "home": "Native to Southwest China",
    "iconLink": "./assets/svg/banana-bamboo_icon.svg",
  },
  {
    "id": "02",
    "imageLink": "./assets/images/manul.jpg",
    "title": "Pallas's cat",
    "home": "Native to Lake Baikal",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "03",
    "imageLink": "./assets/images/beaver.jpg",
    "title": "Beaver",
    "home": "Native to temp. N.Hemisphere",
    "iconLink": "./assets/svg/banana-bamboo_icon.svg",
  },
  {
    "id": "04",
    "imageLink": "./assets/images/rabbit.jpg",
    "title": "Rabbit",
    "home": "Native to southwestern Europe",
    "iconLink": "./assets/svg/banana-bamboo_icon.svg",
  },
  {
    "id": "05",
    "imageLink": "./assets/images/sand_cat.jpg",
    "title": "Sand cat",
    "home": "Native to Africa",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "06",
    "imageLink": "./assets/images/prionailurus_bengalensis_euptilurus.jpg",
    "title": "Leopard cat",
    "home": "Native to Asia",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "07",
    "imageLink": "./assets/images/lynx_canadensis.jpg",
    "title": "Canada lynx",
    "home": "Native to Canada",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "08",
    "imageLink": "./assets/images/pandas.jpg",
    "title": "Giant Pandas",
    "home": "Native to Southwest China",
    "iconLink": "./assets/svg/banana-bamboo_icon.svg",
  },
  {
    "id": "09",
    "imageLink": "./assets/images/eagls.jpg",
    "title": "Eagles",
    "home": "Native to South America",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "10",
    "imageLink": "./assets/images/gorillas.jpg",
    "title": "Gorillas",
    "home": "Native to Congo",
    "iconLink": "./assets/svg/banana-bamboo_icon.svg",
  },
  {
    "id": "11",
    "imageLink": "./assets/images/twotoed.jpg",
    "title": "Two-toed Sloth",
    "home": "Mesoamerica, South America",
    "iconLink": "./assets/svg/banana-bamboo_icon.svg",
  },
  {
    "id": "12",
    "imageLink": "./assets/images/cheetas.jpg",
    "title": "Cheetahs",
    "home": "Native to Africa",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "13",
    "imageLink": "./assets/images/peng.jpg",
    "title": "Penguins",
    "home": "Native to Antarctica",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "14",
    "imageLink": "./assets/images/alligator.jpg",
    "title": "Alligators",
    "home": "Native to Southeastern U.S.",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "15",
    "imageLink": "./assets/images/bison.jpg",
    "title": "Bison",
    "home": "Native to North America",
    "iconLink": "./assets/svg/banana-bamboo_icon.svg",
  },
  {
    "id": "16",
    "imageLink": "./assets/images/grizzly.jpg",
    "title": "Grizzly bear",
    "home": "Native to North America",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "17",
    "imageLink": "./assets/images/hydrochaeris.jpg",
    "title": "Capybara",
    "home": "Native to South America",
    "iconLink": "./assets/svg/banana-bamboo_icon.svg",
  },
  {
    "id": "18",
    "imageLink": "./assets/images/camel.jpg",
    "title": "Bactrian camel",
    "home": "Native to Asia",
    "iconLink": "./assets/svg/banana-bamboo_icon.svg",
  },
  {
    "id": "19",
    "imageLink": "./assets/images/arctic_fox.jpg",
    "title": "Arctic fox",
    "home": "Native to Arctic",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "20",
    "imageLink": "./assets/images/eurasian_hobby.jpg",
    "title": "Eurasian hobby",
    "home": "Native to South Africa",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  },
  {
    "id": "21",
    "imageLink": "./assets/images/bat-eared-fox.jpg",
    "title": "Bat-eared fox",
    "home": "Native to African savanna",
    "iconLink": "./assets/svg/meet-fish_icon.svg",
  }
]

let counter = 6;
cards[0].style.order = '1';
cards[1].style.order = '2';
cards[2].style.order = '3';

cardLeft.addEventListener('animationend', animationEnd);
function animationEnd() {
  if (window.innerWidth > 1599) {
    cardCenter.innerHTML = cardLeft.innerHTML;
    cardLeft.innerHTML = createCards().innerHTML;
    cardLeft.classList.remove('animationLeft1600');
    cardCenter.classList.remove('animationLeft1600');
    PREV_ARROW.addEventListener('click', prevClick);
    NEXT_ARROW.addEventListener('click', nextClick);
  } else if (window.innerWidth > 999) {
    cardCenter.innerHTML = cardLeft.innerHTML;
    cardLeft.innerHTML = createCards().innerHTML;
    cardLeft.classList.remove('animationLeft');
    cardCenter.classList.remove('animationLeft');
    PREV_ARROW.addEventListener('click', prevClick);
    NEXT_ARROW.addEventListener('click', nextClick);
  } else {
    cardCenter.innerHTML = cardLeft.innerHTML;
    cardLeft.innerHTML = createCards().innerHTML;
    cardLeft.classList.remove('animationLeft1000');
    cardCenter.classList.remove('animationLeft1000');
    PREV_ARROW.addEventListener('click', prevClick);
    NEXT_ARROW.addEventListener('click', nextClick);
  }
}
cardRight.addEventListener('animationend', animationEndRight);
function animationEndRight() {
  if (window.innerWidth > 1599) {
    cardRight.classList.remove('animationRight1600');
    cardCenter.classList.remove('animationRight1600');
    NEXT_ARROW.addEventListener('click', nextClick);
    PREV_ARROW.addEventListener('click', prevClick);
    cardCenter.innerHTML = cardRight.innerHTML;
    cardRight.innerHTML = createCards().innerHTML;
  } else if (window.innerWidth > 999) {
    cardRight.classList.remove('animationRight');
    cardCenter.classList.remove('animationRight');
    NEXT_ARROW.addEventListener('click', nextClick);
    PREV_ARROW.addEventListener('click', prevClick);
    cardCenter.innerHTML = cardRight.innerHTML;
    cardRight.innerHTML = createCards().innerHTML;
  } else {
    cardRight.classList.remove('animationRight1000');
    cardCenter.classList.remove('animationRight1000');
    NEXT_ARROW.addEventListener('click', nextClick);
    PREV_ARROW.addEventListener('click', prevClick);
    cardCenter.innerHTML = cardRight.innerHTML;
    cardRight.innerHTML = createCards().innerHTML;
  }
}

function nextClick() {
  if (window.innerWidth > 1599) {
    setTimeout(() => {
      PREV_ARROW.removeEventListener('click', prevClick);
      NEXT_ARROW.removeEventListener('click', nextClick);
      cardRight.classList.add('animationRight1600');
      cardCenter.classList.add('animationRight1600');
    }, 500);
  } else if (window.innerWidth > 999) {
    setTimeout(() => {
      PREV_ARROW.removeEventListener('click', prevClick);
      NEXT_ARROW.removeEventListener('click', nextClick);
      cardRight.classList.add('animationRight');
      cardCenter.classList.add('animationRight');
    }, 500);
  } else {
    setTimeout(() => {
      PREV_ARROW.removeEventListener('click', prevClick);
      NEXT_ARROW.removeEventListener('click', nextClick);
      cardRight.classList.add('animationRight1000');
      cardCenter.classList.add('animationRight1000');
    }, 500);
  }
}

function prevClick() {
  if (window.innerWidth > 1599) {
    setTimeout(() => {
      cardLeft.classList.add('animationLeft1600');
      cardCenter.classList.add('animationLeft1600');
      PREV_ARROW.removeEventListener('click', prevClick);
      NEXT_ARROW.removeEventListener('click', nextClick);
    }, 500);
  } else if (window.innerWidth > 999) {
    setTimeout(() => {
      cardLeft.classList.add('animationLeft');
      cardCenter.classList.add('animationLeft');
      PREV_ARROW.removeEventListener('click', prevClick);
      NEXT_ARROW.removeEventListener('click', nextClick);
    }, 500);
  } else {
    setTimeout(() => {
      cardLeft.classList.add('animationLeft1000');
      cardCenter.classList.add('animationLeft1000');
      PREV_ARROW.removeEventListener('click', prevClick);
      NEXT_ARROW.removeEventListener('click', nextClick);
    }, 500);
  }
}

if (window.innerWidth < 1000) {
  counter = 4;
}

window.addEventListener('resize', resize);

cardCenter.innerHTML = createCards().innerHTML;
cardLeft.innerHTML = createCards().innerHTML;
cardRight.innerHTML = createCards().innerHTML;

function resize() {
  if (window.innerWidth < 1000) {
    counter = 4;
  } else {
    counter = 6;
  }
}

function createCards() {
  let newArr = [];
  let newCards = document.createElement("div");
  for (let i = 0; i < counter; i++) {
    let num = Math.floor(Math.random() * petCards.length);
    if (!newArr.includes(petCards[num].title)) {
      newArr.push(petCards[num].title);
      let card = document.createElement("div");
      card.classList = 'card noselect cursor-pointer';
      card.innerHTML = `<img src="${petCards[num].imageLink}" alt="" class="card__img">
                        <div class="card__block">
                          <div class="card__text">
                            <p class="btn">${petCards[num].title}</p>
                            <p class="smallParagraph">${petCards[num].home}</p>
                          </div>
                          <div class="card__icons">
                            <img class="icon" src="${petCards[num].iconLink}" alt="">
                          </div>
                        </div>`;
      newCards.appendChild(card);
    } else {
      i--;
    }
  }
  return newCards;
}

// alert('Dear Checker! Please check my work on Thursday! I am a little undone. Thank you so much!');
// console.log('Dear Checker! Please check my work on Thursday! I am a little undone. Thank you so much!');

let inputRange = document.querySelector('input[type="range"]');
inputRange.addEventListener('input', changeValue);

function changeValue() {
  let newValue = inputRange.value;
  console.log(newValue);
}