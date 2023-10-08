'use strict';
const mainNav = document.querySelector('.nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const header = document.querySelector('header');

function toggleMenuMobile() {
  if (mainNav.classList.contains('nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
}

function openMenu() {
  mainNav.classList.remove('nav--closed');
  mainNav.classList.add('nav--opened');
  mainNavToggle.style.backgroundImage = 'url("../assets/icons/burger-close.svg")';
  mainNavToggle.style.backgroundSize = '16px 16px';
  document.body.style.overflowX = 'hidden';
}

function closeMenu() {
  mainNav.classList.add('nav--closed');
  mainNav.classList.remove('nav--opened');
  mainNavToggle.style.backgroundImage = 'url("../assets/icons/burger-open.svg")';
  document.body.style.overflowX = 'visible';
}

mainNavToggle.addEventListener('click', toggleMenuMobile);
mainNnavLinkActive.addEventListener('click', closeMenu);
