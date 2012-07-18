var filmroll = document.getElementById('the-film-roll');

function scroll(start, end) {
  var current = start;

  var move = function () {
    filmroll.style.left = current + 'px';

    if (current == end)
      clearInterval(loop);

    if (end > start) {
      current = Math.min(current + 20, end);
    } else {
      current = Math.max(current - 20, end);
    }
  }

  var loop = setInterval(move, 50);
}

function handleEvent(e) {
  backAndForth(e.keyCode);
}

function backAndForth(keyCode) {
  if (keyCode == 37)
    scroll(500, 0);

  if (keyCode == 39)
    scroll(0, 500);
}

document.addEventListener('keydown', handleEvent);
