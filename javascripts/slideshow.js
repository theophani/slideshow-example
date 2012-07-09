var filmroll = document.getElementById('the-filmroll');

function setStyleAttr(element, attr, value) {
  element.style[attr] = value;
}

function setLeft(element, pixels) {
  var value = pixels + 'px';
  setStyleAttr(element, 'left', value);
}

function scroll(element, from, to, speed) {
  // speed is how many pixels to move every 50 milliseconds
  var curr = from;
  var direction = (from < to ? 1 : -1);

  function move() {
    setLeft(element, curr);

    if (curr == to)
      clearInterval(loop);

    curr = curr + direction * Math.min(speed, Math.abs(to - curr));
  }

  var loop = setInterval(move, 50);
}

/*
Try:
> scroll(filmroll, 0, 300, 10);
> scroll(filmroll, 0, 300, -10);
> scroll(filmroll, 0, -300, 10);
*/
