import checkNumInputs from './checkNumInputs.js'

const logInputValues = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const userNameInput = document.querySelector('input[name="user_name"]')
    const userPhoneInput = document.querySelector('input[name="user_phone"]')

    if (userNameInput && userPhoneInput) {
      console.log('User Name:', userNameInput.value)
      console.log('User Phone:', userPhoneInput.value)
    }

    const modal = document.querySelectorAll('.modal') 
    modal.forEach((item) => {
      if (item) {
        item.style.display = 'none'
      }
    })

    if (userNameInput && userPhoneInput) {
      userNameInput.value = ''
      userPhoneInput.value = ''
    }

    const modalSelector = document.querySelector('.popup__engineer')
    if (modalSelector) {
      modalSelector.style.display = 'none'
    }

    if (userNameInput && userPhoneInput) {
      userNameInput.value = ''
      userPhoneInput.value = ''
    }
  }

  const form = document.querySelector('.form')
  if (form) {
    form.addEventListener('submit', handleFormSubmit)
  } else {
    console.error('Не удалось найти форму.')
  }

  checkNumInputs('input[name="user_phone"]')
}

export default logInputValues
