import homepage from './home';
import contactUs from './contactUs';
import navigation from './nav';
import menu from './menu';

console.log('testing 1234');
homepage();
navigation();

let contactButton = document.querySelector('#contact');

contactButton.addEventListener('click', function() {
  let bodyDiv = document.querySelector('#content');
  bodyDiv.innerHTML = '';
  contactUs();
});

let homeButton = document.querySelector('#home');

homeButton.addEventListener('click', function() {
  let bodyDiv = document.querySelector('#content');
  bodyDiv.innerHTML = '';
  homepage();
});

let menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', function() {
  let bodyDiv = document.querySelector('#content');
  bodyDiv.innerHTML = '';
  menu();
});