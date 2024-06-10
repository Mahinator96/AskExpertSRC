(function(){
  const classFile = '.form__file';                // класс обёрки для превью и label>input
  const classPreview = '.form__file-preview img'; // превью
  const classInput = '.form__file-input'          // input type="file"

  const file = document.querySelector(classFile);
  const preview = file.querySelector(classPreview)
  const input = file.querySelector(classInput);
  
  input.addEventListener('change', (event) => {

    if (event.target.files.length > 0) {                        // Если загружен хоть 1 файл
      const src = URL.createObjectURL(event.target.files[0]);   // задать переменной путь до картинки
      file.classList.add('.file--active');                      // Добавить обёртке активный класс
      preview.src = src;                                        // Задать src для preview
      
      preview.style.display = "block";                          // Показываем preview
    } else {                                                    // Иначе 
      file.classList.remove('.file--active');                   // Удалить активный класс
      preview.src = '';                                         // Почистить путь 
      preview.style.display = "none";                           // скрыть preview
    }
  })
}())