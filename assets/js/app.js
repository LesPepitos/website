document.addEventListener('DOMContentLoaded', function() {
  var timerMask = window.setTimeout(showMask, 2000);

  function showMask() {
    var random = getRandomArbitrary(1, 16),
        span = document.querySelector('h1 span'),
        duration = 0.125 * random;

    span.style.transitionDuration = duration;
    span.style.backgroundPositionY = -90 * random + 'px';
  }

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
});
