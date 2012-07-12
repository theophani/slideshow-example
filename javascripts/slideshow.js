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

    if (curr == to) {
      clearInterval(loop);
      scrolling = false;
    }

    curr = curr + direction * Math.min(speed, Math.abs(to - curr));
  }

  var loop = setInterval(move, 50);
  scrolling = true;
}

var curr = 0;
var width = 800;
var speed = 30;
var scrolling = false;

function backForth(e) {
  if (e.keyCode == 39)
    scroll(filmroll, curr, curr += width, speed);

  if (e.keyCode == 37)
    scroll(filmroll, curr, curr -= width, speed);
}

document.addEventListener('keyup', function (e) {
  if (!scrolling)
    backForth(e);
});
