const menuIcon = document.getElementById('menu');
const list = document.querySelector('.nav');

menuIcon.addEventListener('click', function () {
  list.classList.toggle('show');
});
