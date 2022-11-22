const radio = document.querySelectorAll('.menu__list__input')
const title = document.querySelector('.dev__title')
const skills = document.querySelector('.dev__skills')
const skillsNames = document.querySelectorAll('.dev__skills__name')
const form = document.querySelector('#form')
const aboutDescription = document.querySelector('#about-description')
const skillsDescription = document.querySelector('#skills-description')
const projectsDescription = document.querySelector('#projects-description')
const contactDescription = document.querySelector('#contact-description')
const imageContainer = document.querySelector('.image')
const projectContainer = document.querySelector('.projects')

const hi = `Hi! I'm Braian!`

const showNames = opt => {
  skillsNames.forEach(skill =>
    opt ? skill.classList.add('show') : skill.classList.remove('show')
  )
}

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
        document.querySelector('.projects').classList.toggle('show')
        break
      case 'contact':
        contactDescription.classList.remove('hidden')
        setTimeout(() => {
          document.querySelector('.form__name').focus()
        }, 400)
        break

      default:
        break
    }

    item.id === 'about'
      ? (title.innerHTML = hi)
      : (title.innerHTML = item.dataset.title)
    item.id === 'skills'
      ? (skills.classList.add('on'),
        imageContainer.classList.add('show'),
        showNames(true))
      : (skills.classList.remove('on'),
        imageContainer.classList.remove('show'),
        showNames(false))
    item.id === 'contact'
      ? (form.classList.remove('hidden'), imageContainer.classList.add('show'))
      : form.classList.add('hidden')
    item.id === 'projects'
      ? projectContainer.classList.add('show')
      : projectContainer.classList.remove('show')
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
