window.onload = function() {
  var timerMask = window.setTimeout(showMask, 2000);

  function showMask() {
    var random = getRandomArbitrary(1, 16),
        span = document.querySelector('h1 span'),
        duration = 0.125 * random + 's',
        position = -90 * random + 'px';

    span.style.transitionDuration = duration;
    span.style.backgroundPosition = '0 ' + position;
  }

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
