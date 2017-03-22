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
})()
