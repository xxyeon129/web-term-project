const mainPage = document.querySelector('.main-page');

function goDetailPage(brandName, magazineNumber) {
  const detailPage = document.querySelector(`.${brandName}-detail-page-${magazineNumber}`);
  mainPage.style.display = 'none';
  detailPage.style.display = 'block';

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function goMainPage(brandName, magazineNumber) {
  const detailPage = document.querySelector(`.${brandName}-detail-page-${magazineNumber}`);
  mainPage.style.display = 'block';
  detailPage.style.display = 'none';

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
