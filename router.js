const CLASS_SHOW = 'show';
const TAG_HEADER = 'header';
const ID_CONTENT = 'content-';

const PATH = {
  HOME: 'home',
  ABOUT_ME: 'aboutme',
  FASHION_HOME: 'fashion-home',
  FASHION_TMB: 'fashion-tmb',
  FASHION_NIKE: 'fashion-nike',
  FASHION_GLOWNY: 'fashion-glowny',
};

function routing(page) {
  const pages = document.querySelectorAll('.page-content');

  // hide page
  pages.forEach(function (pageContent) {
    pageContent.classList.remove(CLASS_SHOW);
  });

  // show page
  document.getElementById(ID_CONTENT + page).classList.add(CLASS_SHOW);

  // hide header on homepage
  if (page === PATH.HOME) {
    document.querySelector(TAG_HEADER).style.display = 'none';
  } else {
    document.querySelector(TAG_HEADER).style.display = 'block';
  }
}

window.onload = function () {
  routing(PATH.HOME);
};
