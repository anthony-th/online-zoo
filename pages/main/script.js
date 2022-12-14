'use strict';

const burgerLines = document.querySelectorAll('.burger-line');
const activeColorMenu = document.querySelectorAll('.active');
const cards = document.querySelectorAll('.cards');
const testimonialsCard = document.querySelectorAll('.testimonials__card');
const cardLeft = document.getElementById('cards-left');
const cardCenter = document.getElementById('cards-center');
const cardRight = document.getElementById('cards-right');
const NAV = document.querySelector('.nav');
const BURGER_MENU = document.querySelector('.burger-menu');
const SHADOW = document.querySelector('.shadow');
const PREV_ARROW = document.getElementById('prev');
const NEXT_ARROW = document.getElementById('next');
const MODAL = document.querySelector('.modal');

SHADOW.addEventListener('click', closeShadow);
BURGER_MENU.addEventListener('click', openBurger);

function closeShadow() {
  NAV.classList.remove('burger-open');
  SHADOW.classList.remove('display-block');
  BURGER_MENU.classList.remove('burger-open-now');
  MODAL.style.display = 'none';
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
  inputRange.value = 0;
  testimonialsCard.forEach(e => {
    e.style.transform = 'translateX(0)';
  })
  if (window.innerWidth < 1000) {
    counter = 4;
    changeValue();
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

let inputRange = document.querySelector('input[type="range"]');
inputRange.addEventListener('input', changeValue);

function changeValue() {
  let newValue = inputRange.value;
  if (window.innerWidth >= 1600) {
    if (newValue == 0) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(0)';
      })
    }
    if (newValue == 1) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-297px)';
      })
    }
    if (newValue == 2) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-594px)';
      })
    }
    if (newValue == 3) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-891px)';
      })
    }
    if (newValue == 4) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-1186px)';
      })
    }
    if (newValue == 5) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-1483px)';
      })
    }
    if (newValue == 6) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-1780px)';
      })
    }
    if (newValue == 7) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-2077px)';
      })
    }
    if (newValue == 8) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-2372px)';
      })
    }
  }
  if ((window.innerWidth < 1600) & (window.innerWidth > 999)) {
    if (newValue == 0) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(0)';
      })
    }
    if (newValue == 1) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-323px)';
      })
    }
    if (newValue == 2) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-646px)';
      })
    }
    if (newValue == 3) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-969px)';
      })
    }
    if (newValue == 4) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-1292px)';
      })
    }
    if (newValue == 5) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-1615px)';
      })
    }
    if (newValue == 6) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-1938px)';
      })
    }
    if (newValue == 7) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-2261px)';
      })
    }
    if (newValue == 8) {
      testimonialsCard.forEach(e => {
        e.style.transform = 'translateX(-2630px)';
      })
    }
  } else if (window.innerWidth <= 999) {
    testimonialsCard.forEach(e => {
      e.style.transform = 'translateX(0)';
    })
  }
}

let cancel = document.createElement('img');
cancel.style.width = '24px';
cancel.style.height = '24px';
cancel.style.position = 'absolute';
cancel.style.right = '10px';
cancel.style.top = '10px';
cancel.src = './assets/images/cancel.png';
cancel.style.cursor = 'pointer';

testimonialsCard.forEach(e => {
  e.addEventListener('click', clickTesti);
})

function clickTesti() {
  MODAL.innerHTML = this.innerHTML;
  MODAL.style.display = 'flex';
  SHADOW.classList.add('display-block');
  MODAL.appendChild(cancel);
}

cancel.addEventListener('click', closeShadow);

console.log(`Dont forget about: "???When we check conditions for different screen widths, we don't just stretch the screen to the desired width, but do a page reload!": https://github.com/rolling-scopes-school/js-fe-course-en/blob/main/tasks/online-zoo/online-zoo.md#general-3`);
alert(`Dont forget about: "???When we check conditions for different screen widths, we don't just stretch the screen to the desired width, but do a page reload!": https://github.com/rolling-scopes-school/js-fe-course-en/blob/main/tasks/online-zoo/online-zoo.md#general-3`);