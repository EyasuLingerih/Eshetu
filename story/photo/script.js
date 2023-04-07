function getPics() {} //just for this demo
const imgs = document.querySelectorAll(#carousel figure img');
const fullPage = document.querySelector('#full');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});