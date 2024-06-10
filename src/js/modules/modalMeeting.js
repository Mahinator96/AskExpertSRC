(function() {
  if (document.querySelector('.button__form-meeting')) {
    let buttonsFormMeeting = document.querySelectorAll('.button__form-meeting');
    let body = document.querySelector('body');
    
    if (document.querySelector('.modal__meeting')) {
      let modalMeeting = document.querySelector('.modal__meeting');

      buttonsFormMeeting.forEach(button => {
        button.addEventListener('click', () => {
          modalMeeting.style.display = 'flex';
          body.classList.add('_lock');
        })
      });
    }

    if (document.querySelector('.modal')) {
      let modals = document.querySelectorAll('.modal')

      modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
          if (event.target.classList.contains('modal') || event.target.classList.contains('modal__close')) {
            modal.style.display = 'none';
            body.classList.remove('_lock');
          }
        });
      });
    };
  } 
}())