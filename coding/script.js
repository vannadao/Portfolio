const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const bottomtoggleButton = document.getElementsByClassName('bottom-toggle-button')[0]
const bottomnavbarLinks = document.getElementsByClassName('bottom_nav_links')[0]

toggleButton.addEventListener('click',() => {
  navbarLinks.classList.toggle('active')
})

bottomtoggleButton.addEventListener('click',() => {
  bottomnavbarLinks.classList.toggle('active')
})
