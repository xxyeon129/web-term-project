function routing(page) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', page, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('content').innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

function loadHomePage() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'pages/home.html', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('content').innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

window.onload = function () {
  loadHomePage();
};
