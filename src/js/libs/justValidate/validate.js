/* 
  Для валидации формы нужно задать класс формы "classForm"

  Структура для input:
    <div class="form__input-wrapper">
      <input class="form__input form-win__input" type="email" placeholder="Твой e-mail" id="email" required>
      <label class="error-container error-container--email" for="name"></label>
    </div>
*/

// (function() {
//   const classForm = '.win__form';

//   const form = document.querySelector(classForm);
//   const validate = new JustValidate(form, {});


//   validate
//   .addField(  
//     '#name',                                                                                        // Валидация input#name
//     [
//       {rule: 'required', errorMessage: 'Введите ваше имя'},                                         // обязательноае поле
//       {rule: 'customRegexp', value: /[а-яА-ЯёЁ]+/gi, errorMessage: 'Используйте только кириллица'}  // валидация регулярным выражением
//     ], 
//     {
//       errorsContainer: document.querySelector('.error-container--name'),                            // container для вывода ошибки
//     }
//   )
//   .addField(
//     '#email',
//     [ 
//       {rule: 'required', errorMessage: 'Введите ваш e-mail'}, 
//       {rule: 'email', errorMessage: 'Введите email корректно'}
//     ], 
//     {
//       errorsContainer: document.querySelector('.error-container--email'),
//     }
//     )
//   .addField(
//     '#file', 
//     [
//       {rule: 'minFilesCount', value: 1, errorMessage: 'Загрузите скриншот'},
//       {
//         rule: 'files',
//         value: {
//           files: {
//             extensions: ['jpeg', 'png', 'pdf'],
//             types: ['image/jpeg', 'image/png', 'image/pdf'],
//           },
//         },
//       },
//     ],
//     {
//       errorsContainer: document.querySelector('.error-container.error-container--file'),
//     }
//     )
//   .addField(
//     '#data', 
//     [
//       {rule: 'required', errorMessage: 'Обязательный пункт'}
//     ],
//     {
//       errorsContainer: document.querySelector('.error-container.error-container--check'),
//     }
//   )
// }())