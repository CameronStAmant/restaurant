function contactUs() {

  let bodyDiv = document.querySelector('#content');

  let header = document.createElement('h1');
  header.innerHTML = 'Contact Us';
  bodyDiv.appendChild(header);

  let bio = document.createElement('p');
  bio.innerHTML = 'Feel free to contact us with any questions. We can be reached via phone or text.';
  bodyDiv.appendChild(bio);
}

export default contactUs