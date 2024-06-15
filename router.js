function routing(page) {
  const pages = document.querySelectorAll('.page-content');
  pages.forEach(function (pageContent) {
    pageContent.classList.remove('active');
  });

  document.getElementById('content-' + page).classList.add('active');

  if (page === 'home') {
    document.querySelector('header').style.display = 'none';
  } else {
    document.querySelector('header').style.display = 'block';
  }
}

window.onload = function () {
  routing('home');
};
