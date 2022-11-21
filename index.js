const radio = document.querySelectorAll('.menu__list__input')

let skills = document.querySelector('.dev__skills')

radio.forEach(item => {
  console.log(item)
  item.addEventListener('click', e => {
    console.log('click en menu', e.target.id)
    item.id === 'skills'
      ? skills.classList.toggle('on')
      : skills.classList.remove('on')
  })
})
