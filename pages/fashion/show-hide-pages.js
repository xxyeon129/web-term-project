const mainPage = document.querySelector('.main-page');
const detailPage = document.querySelector('.detail-page');
const detailImage = detailPage.querySelector('.detail-image');
const detailTitle = detailPage.querySelector('.detail-title');

function goDetailPage() {
  mainPage.style.display = 'none';
  detailPage.style.display = 'block';

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function goMainPage() {
  mainPage.style.display = 'block';
  detailPage.style.display = 'none';

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
