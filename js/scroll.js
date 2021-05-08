class Reveal {
  constructor(selector) {
    this.selector = selector
  }

  init = () => {
    const scrollObjects = document.querySelectorAll(this.selector)

    scrollObjects.forEach((scrollObject) => {
      let revealDuration = scrollObject.dataset.revealDuration
      const scrollXside = scrollObject.dataset.scrollX
      const scrollYside = scrollObject.dataset.scrollY
      const minWidth = scrollObject.dataset.minWidth
      const maxWidth = scrollObject.dataset.maxWidth

      const objectOffestTop = scrollObject.offsetTop

      const self = this

      if (self.checkMediaMatches(minWidth, maxWidth)) {
        if (typeof scrollXside !== 'undefined') {
          scrollXside == 'right'
            ? (scrollObject.style.transform = 'translateX(-200%)')
            : scrollXside == 'left'
            ? (scrollObject.style.transform = 'translateX(200%)')
            : (scrollObject.style.transform = 'translateX(0%)')
        }

        self.scrollToView(objectOffestTop, scrollObject, revealDuration)

        document.addEventListener('scroll', function () {
          self.scrollToView(objectOffestTop, scrollObject, revealDuration)
        })
      }
    })
  }

  scrollToView = (objectOffestTop, scrollObject, revealDuration) => {
    if (
      window.pageYOffset + window.innerHeight / 1.5 > objectOffestTop &&
      window.pageYOffset < objectOffestTop + window.innerHeight / 1.5
    ) {
      scrollObject.classList.add('reveal')
      scrollObject.style.animation = `slide ${revealDuration}s ease forwards`
    }
  }

  checkMediaMatches(minWidth = null, maxWidth = null) {
    let matches = true
    if (minWidth !== null) {
      let x = window.matchMedia(`(min-width: ${minWidth}px)`)
      x.matches ? (matches = matches) : (matches = !matches)
    }
    if (maxWidth !== null) {
      let y = window.matchMedia(`(max-width: ${maxWidth}px)`)
      y.matches && matches ? (matches = matches) : (matches = false)
    }

    return matches
  }
}
