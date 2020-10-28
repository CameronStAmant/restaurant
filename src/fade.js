let bodyDiv = document.querySelector('#content');

function fade() {
  let i = 0;
  bodyDiv.style.opacity = 0;
  let k = window.setInterval(function() {
    if (i >= 11) {
      clearInterval();
    } else {
      bodyDiv.style.opacity = i / 10;
      i++;
    }
  }, 50);
};

export default fade