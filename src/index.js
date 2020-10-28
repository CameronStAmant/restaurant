import homepage from './home';
import contactUs from './contactUs';
import navigation from './nav';
import menu from './menu';
import fade from './fade';

console.log('testing 1234');
homepage();
navigation();

let contactButton = document.querySelector('#contact');

contactButton.addEventListener('click', function() {
  let bodyDiv = document.querySelector('#content');
  bodyDiv.innerHTML = '';
  bodyDiv.classList.toggle('fadein');
  contactUs();
  fade();
});

let homeButton = document.querySelector('#home');

homeButton.addEventListener('click', function() {
  let bodyDiv = document.querySelector('#content');
  bodyDiv.innerHTML = '';
  bodyDiv.classList.toggle('fadein');
  homepage();
  fade();
});

let menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', function() {
  let bodyDiv = document.querySelector('#content');
  bodyDiv.innerHTML = '';
  menu();
  fade();
});