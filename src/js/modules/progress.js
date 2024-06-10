/* 
  Анимация заполнения кругов и %.

  Обязательные 
    data-percent          - считает до этого % заполнения
    data-strokedasharray  - указывается stroke-dasharray круга svg circle
    data-anim             - добавить класс для запуска анимации
*/

if (document.querySelector('.experiance__progress')) {                  // Если есть список кругов для анимации
  
  const progessList = document.querySelector('.experiance__progress');  // Находим список кругов
  let progressItems = progessList.querySelectorAll('.progress__item');  // Находим все круги
  

  document.addEventListener('scroll', () => {                           // При скролле
      scrollAnimationProgress();                                        // Запускаем анимацию
  })

  // Функция запуска анимации
  function scrollAnimationProgress() {

    if (progessList.classList.contains('experiance__progress--show') && !progressItems[0].classList.contains('progress__item-show')) {
      progressItems.forEach((item) => {                                                     // Перебираем все круги
    
        
        item.classList.add('progress__item-show')
        let itemDataPercent = item.dataset.percent;                                         // Находим % заполнения круга (указан в data-percent)
        let itemDataStrokeDashArray = item.dataset.strokedasharray;                         // Диаметр круга svg cirle stroke-dasharray (указан в data-strokedasharray)
        let itemNumber = item.querySelector('.progress__item-number');                      // Находим поле которое будет показывать % заполнения
        let itemCircle = item.querySelector('.progress__item-circle circle');               // Находим svg circle
        let itemCircleStrokedashoffset = 
          (itemDataStrokeDashArray - (itemDataStrokeDashArray * (itemDataPercent / 100))); // Выисчитываем stroke-dashoffset
        let itemCirlcePercentStep = 
          (itemDataStrokeDashArray - itemCircleStrokedashoffset) / itemDataPercent;        // Высчитываем шаг заполнения svg cirlce анимации
        let counterPercent = itemDataStrokeDashArray;                                      // Значение нужно кок нулевое положение svg circle
    
        // Запуск анимации для svg circle
        setInterval(() => { 
          if (counterPercent <= itemCircleStrokedashoffset) {   // Если stroke-dasharray меньше или равно stroke-dashoffset
            clearInterval();                                    // Удаляем анимацию
          } else {                                              // Иначе
            counterPercent -= itemCirlcePercentStep;            // Отнимаем от stroke-dasharray - stroke-dashoffset
            itemCircle.style.strokeDashoffset = counterPercent; // В css заполняем stroke-dashoffset
          }
        }, 30)
    
    
        let counter = 0; // Задаём нулевое положение счётчика
    
        // Запуск анимации для %
        setInterval(() => { 
    
          if (counter == itemDataPercent) {       // Если счётчик равен %
            clearInterval();                      // Удаляем анимацию
          } else {                                // Иначе
            counter += 1;                         // Прибавляем +1
            itemNumber.innerHTML = counter + '%'; // в HTML записываем значение %
          }
        }, 30)
      })
      progessList.classList.remove('experiance__progress--show')
    }
  }

  // scrollAnimationProgress();
}