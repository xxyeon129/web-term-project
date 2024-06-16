const mainPage = document.querySelector('.main-page');
const detailPage = document.querySelector('.detail-page');
const detailImage = detailPage.querySelector('.detail-image');
const detailTitle = detailPage.querySelector('.detail-title');

function goDetailPage(brandName, productNumber) {
  mainPage.style.display = 'none';
  detailPage.style.display = 'block';

  detailImage.src = `images/${brandName}/${brandName}-${productNumber}.jpg`;
  detailTitle.textContent = `DETAIL PAGE ${productNumber}`;
}

function goMainPage() {
  mainPage.style.display = 'block';
  detailPage.style.display = 'none';
}
