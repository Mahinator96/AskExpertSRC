(function() {
  if (document.querySelector('.video')) {
    const videoParent = document.querySelector('.video'),             // Обёртка для <video>
          video       = videoParent.querySelector('video'),           // <video>
          btnPlay     = videoParent.querySelector('#play'),           // Кнопка play
          btnPause    = videoParent.querySelector('#pause'),          // Кнопка pause
          progressBar = videoParent.querySelector('#progress-bar'),   // Поле для продолжительности видео
          progress    = videoParent.querySelector('#progress');       // Полоска проигранного видео
    
    // Ф-я проигрования видео
    const play = () => {
      video.play()                         // Включаем видео
      btnPlay.style.display='none';        // Прячем кнопку play
      progressBar.style.display='block';   // Показываем поле для продолжительности видео
      btnPause.style.display='flex';       // Показываем кнопку pause (в css при ховере на обёртку для <video>)
    }
    // Ф-я паузы видео
    const pause = () => {
      video.pause();                  // Ставим на паузу
      btnPause.style.display='none';  // Прячем кнопку pause
      btnPlay.style.display='block';  // Показываем кнопку play
    }
  
      /* При клике на прогрессбар воспроизводит видео на момент клика */
    function videoRewind(event) {
      let widthProgress = video.offsetWidth,                                  // Находим ширину <video>
          positionOffset = event.offsetX                                      // Отслеживаем клик по оси Х
    
      video.pause();                                                          // Ставим на паузу
      video.currentTime = video.duration * (positionOffset / widthProgress);  // Считаем с какого места будет проигываться видео
      video.play();                                                           // Проигрываем видео
    }

	// Обновляет полосу просмотренного видео
	function progressUpdate() {
		let duration = video.duration,                      // Продолжительность видео
				currentTime = video.currentTime;                // Проигранное время видео 

    if (duration == currentTime) {                      // Если продолжительность видео равно проигранному времени
      btnPlay.style.display='block';                    // Полявление кнопки play  
      btnPause.style.display='none';                    // Прячем кнопку pause

        progressBar.style.display='none';               // Прячем поле для продолжительности видео
    }
	
		if (!currentTime == 0) {                            // Если проигранное время не равно 0
			progress.value = (currentTime / duration) * 100;  // Считаем и отображаем полосу проигрывания
		}	
	}
  video.ontimeupdate = progressUpdate;                // При изменения позиции воспроизведения обновляем полосу видео

    btnPlay.addEventListener('click', play);          // При клике на play - воспроизваодим   
    btnPause.addEventListener('click', pause);        // При клике на pause - пауза 
    progress.addEventListener('click', videoRewind);  // При клике на полосу проигрываания - перематываем видео
  }
}())