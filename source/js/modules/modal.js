const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]')

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault()
        }

        windows.forEach((item) => {
          item.style.display = 'none'
        })

        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden'
      })
    })

    close.addEventListener('click', () => {
      windows.forEach((item) => {
        item.style.display = 'none'
      })

      modal.style.display = 'none'
      document.body.style.overflow = ''
    })

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        windows.forEach((item) => {
          item.style.display = 'none'
        })

        modal.style.display = 'none'
        document.body.style.overflow = ''
      }
    })
  }


  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'flex'
      document.body.style.overflow = 'hidden'
    }, time)
  }

  bindModal(
    '.apply-button',
    '.popup__engineer',
    '.popup__engineer .popup__close',
  )
  showModalByTime(".popup", 60000);
}

export default modals
