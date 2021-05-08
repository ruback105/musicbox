const hamburgerClick = () => {
  if (document.querySelector('.hamburger')) {
    const hamburger = document.querySelector('.hamburger')
    const menu = document.querySelector('.nav-links')

    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active')
      hamburger.classList.toggle('active')
    })
  } else {
    setTimeout(() => {
      hamburgerClick()
    }, 500)
  }
}

hamburgerClick()
