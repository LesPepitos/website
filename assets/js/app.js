window.onload = function() {
  var random = getRandomArbitrary(1, 16);
  showMask(random);
  switchFavicon(random);

  function showMask(num) {
    var span = document.querySelector('h1 span'),
        duration = 0.125 * (num - 1) + 's',
        position = -1 * getSize(span) * (num - 1) + 'px';

    span.style.transitionDuration = duration;
    span.style.backgroundPosition = '0 ' + position;
  }

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function getSize(elt) {
    var width = document.defaultView.getComputedStyle(elt, null).getPropertyValue("width");
    return parseInt(width);
  }

  function switchFavicon(num) {
    var link = getLink();
    link.href = '/images/favicons/mask_' + num + '.ico';
  }

  function getLink() {
    var link = document.getElementsByTagName('head')[0].getElementsByTagName('link');
    for (var l = link.length, i = (l - 1); i >= 0; i--) {
      if ((/(^|\s)icon(\s|$)/i).test(link[i].getAttribute('rel'))) {
        return link[i];
      }
    }
    return false;
  }
}
