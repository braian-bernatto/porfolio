const radio = document.querySelectorAll('.menu__list__input')
const title = document.querySelector('.dev__title')
const skills = document.querySelector('.dev__skills')
const form = document.querySelector('#form')
const aboutDescription = document.querySelector('#about-description')
const skillsDescription = document.querySelector('#skills-description')
const projectsDescription = document.querySelector('#projects-description')
const contactDescription = document.querySelector('#contact-description')

const hi = `Hi! I'm Braian!`

radio.forEach(item => {
  item.addEventListener('click', () => {
    document
      .querySelectorAll('.dev__description')
      .forEach(el => el.classList.add('hidden'))

    switch (item.id) {
      case 'about':
        aboutDescription.classList.remove('hidden')
        break
      case 'skills':
        skillsDescription.classList.remove('hidden')
        break
      case 'projects':
        break
      case 'contact':
        contactDescription.classList.remove('hidden')
        break

      default:
        break
    }

    item.id === 'about'
      ? (title.innerHTML = hi)
      : (title.innerHTML = item.dataset.title)
    item.id === 'skills'
      ? skills.classList.add('on')
      : skills.classList.remove('on')
    item.id === 'contact'
      ? form.classList.remove('hidden')
      : form.classList.add('hidden')
  })
})

const sendEmail = e => {
  e.preventDefault()
  const form_name = document.querySelector('.form__name').value
  const form_message = document.querySelector('.form__message').value

  console.log({ form_name, form_message })
  window.open(
    `mailto:braianbernatto@hotmail.com?subject=website contact&body=${form_message}. ${form_name}`
  )
}

form.addEventListener('submit', sendEmail)
