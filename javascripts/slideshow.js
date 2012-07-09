var filmroll = document.getElementById('the-filmroll');

function setStyleAttr(element, attr, value) {
  element.style[attr] = value;
}

function setLeft(element, pixels) {
  var value = pixels + 'px';
  setStyleAttr(element, 'left', value);
}

function scroll(element, from, to, speed) {
  // speed is how many pixels to move every 20 milliseconds
  var curr = from;

  function move() {
    setLeft(element, curr);

    curr += speed;

    if (curr == to)
      clearInterval(loop);

    if (curr > to)
      curr = to;
  }

  var loop = setInterval(move, 20);
}

/*
Try:
> scroll(filmroll, 0, 300, 10);
> scroll(filmroll, 0, 300, -10);
> scroll(filmroll, 0, -300, 10);
*/
