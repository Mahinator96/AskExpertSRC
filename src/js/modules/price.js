(function(){

  if (document.querySelector('.plan')) {
  
    const plan = document.querySelector('.plan');                             // Родитель 
    const planCheck = plan.querySelector('.plan__check');                     // Блок с input
    const planChecksRadio = planCheck.querySelectorAll('.plan__check-radio'); // Каждыый input
    const priceItems = plan.querySelectorAll('.price__money p');              // Цены 
    const priceLonger = plan.querySelectorAll('.price__money span');          // Блоки с прододжительностью
    const prices = [];                                                        // Сохраняем цены
    
    priceItems.forEach(item => prices.push(item.textContent));  // Пушим все цены в переменную
    
    // Обработчик на клик с делегированием
    planCheck.addEventListener('click', (e) => {  
        if (e.target.classList.contains('plan__check-label')) { // Проверка на нажатый элемент
          
        setTimeout(() => {                                      // Для правильной работы
          planChecked()
        }, 10);
      }
    })
    
    // Ф-ия смены значений
    function planChecked() {
      planChecksRadio.forEach((item) => {                                     // Перебираем все input[type="radio"]
        
        if (item.checked && item.getAttribute('id') === 'plan-mounth') {      // Если input:checked и id='plan-mounth'
          priceItems.forEach((priceItem, i) => {                              // Перебираем все цены
            priceItem.innerHTML = prices[i];                                  // Меняем цены на месяц
            priceLonger[i].innerHTML = 'Monthly';                             // Установить значение 'Monthly'
          })
        } else if (item.checked && item.getAttribute('id') === 'plan-year') { // Если input:checked и id='plan-year'
          priceItems.forEach((priceItem, i) => {                              // Перебираем все цены
            priceItem.innerHTML = '$' + prices[i].replace(/\D/g, "") * 11;     // Меняем цены на год;
            priceLonger[i].innerHTML = 'Yearly';                              // Установить значение 'Yearly'
          })
        }
      })
    }
  }
}())
