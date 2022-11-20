const button = document.querySelector('.dev__name')

let skills = document.querySelector('.dev__skills')

button.addEventListener('click', () => {
  console.log('click en boton')
  skills.classList.toggle('on')
})
