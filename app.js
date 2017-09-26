function getWiki (str) {
 const request = new XMLHttpRequest();
 //xhr.setRequestHeader( 'Api-User-Agent', 'kingi.pra@gmail.com' );
 request.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&titles=tesla&prop=revisions&rvprop=content&format=json#query/pages/2029013/revisions/0/*');
 request.addEventListener('load', () => {
   let response = JSON.parse('request.responseText');
   console.log(response);
 });
 request.send();
}

const mag = document.querySelector('.magnifying');
const circle = document.querySelector('.circle');
const handle = document.querySelector('.handle');
const x = document.querySelector('.x');
const searchBox = document.querySelector('.text');

circle.addEventListener('click', () => {
  circle.style = 'animation: .3s slide-out';
  circle.classList.add('search_bar');
  x.classList.add('show');
  handle.style = 'animation: .4s shrink';
  setTimeout(function () {
    searchBox.classList.remove('hide');
    handle.classList.add('hide');
  }, 300);
});

x.addEventListener('click', () => {
  circle.classList.toggle('search_bar');
  circle.style = 'animation: .4s slide-in';
  x.classList.remove('show');
  searchBox.classList.add('hide');
  setTimeout(function () {
    handle.classList.remove('hide');
    handle.style = 'animation: .3s grow';
  }, 300);
});

function getText () {
  let text = document.querySelector('.text');
  if (text.value !== '') {
    console.log(text.value);
    getWiki();
  } else {
    text.placeholder = 'Please enter keyword';
  }
};

document.addEventListener('keypress', (e) => {
  const key = e.which || e.keyCode;
  if (key === 13) {
    getText();
  }
});
