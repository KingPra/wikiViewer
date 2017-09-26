console.log('hello friends')


const mag = document.querySelector('.magnifying');
const circle = document.querySelector('.circle');
const handle = document.querySelector('.handle');
const x = document.querySelector('.x');
const div = document.createElement('div');
const searchBox = document.querySelector('.text');

circle.addEventListener('click', () => {
  circle.style = 'animation: .5s slide-out';
  circle.classList.add('search_bar');
  x.classList.add('show');
  handle.style = 'animation: .5s shrink';
  setTimeout(function () {
    searchBox.classList.remove('hide');
    handle.classList.add('hide');
  }, 300);
});

x.addEventListener('click', () => {
  circle.classList.toggle('search_bar');
  circle.style = 'animation: .5s slide-in';
  x.classList.remove('show');
  searchBox.classList.add('hide');
  setTimeout(function () {
    handle.classList.remove('hide');
    handle.style = 'animation: .5s grow';
  }, 300);
})
