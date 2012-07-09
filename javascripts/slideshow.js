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
  var max = Math.abs(to);

  function move() {
    var delta = Math.min(speed, Math.abs(to - curr));
    var pixels = curr + delta;

    setLeft(element, direction * pixels);

    curr += speed;

    if (curr >= max)
      clearInterval(loop);
  }

  var loop = setInterval(move, 50);
}

/*
Try:
> scroll(filmroll, 0, 300, 10);
> scroll(filmroll, 0, 300, -10); // should not allow negative speed
> scroll(filmroll, 0, -300, 10);
*/
