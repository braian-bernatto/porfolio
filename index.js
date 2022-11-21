const radio = document.querySelectorAll('.menu__list__input')
let title = document.querySelector('.dev__title')
let skills = document.querySelector('.dev__skills')
const hi = `Hi! I'm Braian!`

radio.forEach(item => {
  item.addEventListener('click', e => {
    item.id === 'skills'
      ? skills.classList.add('on')
      : skills.classList.remove('on')
    item.id === 'about'
      ? (title.innerHTML = hi)
      : (title.innerHTML = item.dataset.title)
  })
})
