const logInputValues = () => {
  const userNameInput = document.querySelector('input[name="user_name"]'), 
        userPhoneInput = document.querySelector('input[name="user_phone"]')

  if (userNameInput && userPhoneInput) {

    userNameInput.addEventListener('input', () => {
      console.log('User Name:', userNameInput.value)
    })

    userPhoneInput.addEventListener('input', () => {
      console.log('User Phone:', userPhoneInput.value)
    })
  } else {
    console.error('Не удалось найти поля ввода.')
  }
}

export default logInputValues
