(function() {
  var embedModal = document.createElement('div')
  embedModal.classList.add('EmbedModal')
  var embedModalVideo = document.createElement('div')
  embedModalVideo.classList.add('EmbedModal-video')
  embedModal.appendChild(embedModalVideo)
  document.body.appendChild(embedModal)

  var isActive = false

  document.body.querySelectorAll('[js-video]').forEach(function(videoLink) {
    videoLink.addEventListener('click', function(event) {
      if (window.innerWidth < 700) 
        return;
      event.preventDefault()
      handleVideoLink(videoLink)
    })
  })

  embedModal.addEventListener('click', function () {
    toggle()
    setTimeout(function () {
      embedModalVideo.innerHTML = ''
    }, 300)
  })

  var ESC_KEY = 27

  window.addEventListener('keyup', function(event) {
    if (isActive && event.keyCode === ESC_KEY) {
      toggle()
    }
  })

  function toggle() {
    isActive = !isActive
    if (isActive) {
      embedModal.classList.add('isActive')
    } else {
      embedModal.classList.remove('isActive')
    }
  }

  function handleVideoLink(element) {
    var href = element.getAttribute('href')
    var videoId = href.match(/v=([^&]+)/)[1]

    embedModalVideo.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?autoplay=true" frameborder="0" allowfullscreen></iframe>`

    toggle()
  }
})();

(function (i, s, o, g, r, a, m) {i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {(i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date();a = s.createElement(o),m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');ga('create', 'UA-71097907-1', 'auto');
ga('send', 'pageview');