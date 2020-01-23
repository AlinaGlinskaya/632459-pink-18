var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');
pageHeader.classList.remove('page-header--nojs');
pageHeader.classList.add('page-header--closed');


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    pageHeader.classList.remove('page-header--closed');
} else {
  navMain.classList.add('main-nav--closed');
  pageHeader.classList.add('page-header--closed');
}
});
