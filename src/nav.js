function navigation () {
  
  let navDiv = document.createElement('div')
  navDiv.id = 'nav';
  let bodyDiv = document.querySelector('#content');
  document.body.insertBefore(navDiv, bodyDiv);

  let navHome = document.createElement('BUTTON');
  navHome.innerHTML = 'Home';
  navHome.id = 'home';
  navDiv.appendChild(navHome);

  let navMenu = document.createElement('BUTTON');
  navMenu.innerHTML = 'Menu';
  navMenu.id = 'menu';
  navDiv.appendChild(navMenu);

  let navContact = document.createElement('BUTTON');
  navContact.id = 'contact';
  navContact.innerHTML = 'Contact Us';
  navDiv.appendChild(navContact);
}

export default navigation