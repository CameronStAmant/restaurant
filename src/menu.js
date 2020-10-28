function menu() {

  let bodyDiv = document.querySelector('#content');

  let header = document.createElement('h1');
  header.innerHTML = 'Menu';
  bodyDiv.appendChild(header);

  let bio = document.createElement('p');
  bio.id = 'menuBox';
  bio.innerHTML = 'Have a relaxing night out while enjoying fresh produce.';
  bodyDiv.appendChild(bio);

  let menuDisplay = document.createElement('div');
  menuDisplay.id = 'menuDisplay';

  bodyDiv.appendChild(menuDisplay);

  let menuItem1 = document.createElement('div');
  menuItem1.innerHTML = 'Roasted Vegetables <br> 8';
  menuItem1.id = 'menuItem1';
  menuDisplay.appendChild(menuItem1);

  let menuItem2 = document.createElement('div');
  menuItem2.innerHTML = 'Hummus Dip <br> 11';
  menuItem2.id = 'menuItem2';
  menuDisplay.appendChild(menuItem2);

  let menuItem3 = document.createElement('div');
  menuItem3.innerHTML = 'Seasonal Soup <br> 7';
  menuItem3.id = 'menuItem3';
  menuDisplay.appendChild(menuItem3);

  // let menuItem3Img = document.createElement('img');
  // menuItem3Img.src = '../dist/soup.jpg';
  // menuItem3Img.height = '100';
  // menuItem3.appendChild(menuItem3Img);
}

export default menu