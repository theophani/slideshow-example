var filmroll = document.getElementById('the-film-roll');

var scrolling = false;

function scroll(start, end) {
  var current = start;

  var move = function () {
    filmroll.style.left = current + 'px';

    if (current == end) {
      clearInterval(loop);
      scrolling = false;
    }

    if (end > start) {
      current = Math.min(current + 20, end);
    } else {
      current = Math.max(current - 20, end);
    }
  }

  var loop = setInterval(move, 50);
  scrolling = true;
}

function handleEvent(e) {
  if (!scrolling) {
    backAndForth(e.keyCode);
  }
}

var current = 0;

function backAndForth(keyCode) {
  if (keyCode == 37)
    scroll(current, current -= 500);

  if (keyCode == 39)
    scroll(current, current += 500);
}

document.addEventListener('keydown', handleEvent);
