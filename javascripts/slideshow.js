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

  function move() {
    var delta = Math.min(speed, to - curr);
    var pixels = curr + delta;

    setLeft(element, pixles);

    curr += speed;

    if (curr >= to)
      clearInterval(loop);
  }

  var loop = setInterval(move, 50);
}

/*
Try:
> scroll(filmroll, 0, 300, 10);
> scroll(filmroll, 0, 300, -10);
> scroll(filmroll, 0, -300, 10);
*/
