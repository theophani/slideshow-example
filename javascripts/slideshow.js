var filmroll = document.getElementById('the-filmroll');

function setStyleAttr(element, attr, value) {
  element.style[attr] = value;
}

function scroll(element, from, to, speed) {
  // speed is how many pixels to move every 10 milliseconds
  var curr = from;

  function move() {
    var position = curr + 'px';
    setStyleAttr(element, 'left', position);
    curr = curr + speed;
    if (curr >= to)
      clearInterval(loop);
  }

  var loop = setInterval(move, 10);
}
