(function() {
  if (document.querySelector('.button__form-plan')) {
    let buttonsFormPlan = document.querySelectorAll('.button__form-plan');
    let modalPlan = document.querySelector('.modal__plan');
    let body = document.querySelector('body');

    buttonsFormPlan.forEach(button => {
      button.addEventListener('click', () => {
        modalPlan.style.display = 'flex';
        body.classList.add('_lock');
      })
    });
  } 
}())