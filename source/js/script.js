var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');
var sectionDownload = document.querySelector('.download');
var wrapperDownload = document.querySelector('.download__wrapper');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--opened-menu');
    pageHeader.classList.remove('page-header--closed-menu');
    sectionDownload.classList.add('download--opened-menu');
    sectionDownload.classList.remove('download--closed-menu');
    wrapperDownload.classList.add('download__wrapper--opened-menu');
    wrapperDownload.classList.remove('download__wrapper--closed-menu');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageHeader.classList.add('page-header--closed-menu');
    pageHeader.classList.remove('page-header--opened-menu');
    sectionDownload.classList.add('download--closed-menu');
    sectionDownload.classList.remove('download--opened-menu');
    wrapperDownload.classList.add('download__wrapper--closed-menu');
    wrapperDownload.classList.remove('download__wrapper--opened-menu');
  }
});
