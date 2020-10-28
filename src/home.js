function homepage() {
  
  let bodyDiv = document.querySelector('#content');

  let header = document.createElement('h1');
  header.innerHTML = 'Tomatoes of Paradise';
  bodyDiv.appendChild(header);

  let bio = document.createElement('p');
  bio.innerHTML = 'At Tomatoes of Paradise we indulge you with the beautiful tomatoe in unique and fun dishes.';
  bodyDiv.appendChild(bio);
}

export default homepage