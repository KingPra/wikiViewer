(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function getWiki (str) {
 const request = new XMLHttpRequest();
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

},{}]},{},[1]);
