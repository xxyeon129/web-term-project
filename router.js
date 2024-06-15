const CLASS_SHOW = 'show';
const TAG_HEADER = 'header';
const ID_CONTENT = 'content-';

const PATH = {
  HOME: 'home',
  ABOUT_ME: 'aboutme',
};

function routing(page) {
  const pages = document.querySelectorAll('.page-content');
  pages.forEach(function (pageContent) {
    pageContent.classList.remove(CLASS_SHOW);
  });

  document.getElementById(ID_CONTENT + page).classList.add(CLASS_SHOW);

  if (page === PATH.HOME) {
    document.querySelector(TAG_HEADER).style.display = 'none';
  } else {
    document.querySelector(TAG_HEADER).style.display = 'block';
  }
}

window.onload = function () {
  routing(PATH.HOME);
};
