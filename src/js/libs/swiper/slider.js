// Подключение swiper 
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function() {

	const initSliders = () => { // Инициализация слайдеров
		if (document.querySelector('.services__slider')) { // Проверка на наличие слайдера
			
			new Swiper('.services__slider', { // Создание слайдера
				modules: [Navigation],
				observer: true,
				observerParents: true,
				slidesPerView: 3,
				spaceBetween: 30,
				speed: 800,

				// Кнопки влево-вправо
				navigation: {
					prevEl: '.services__slider-button--prev',
					nextEl: '.services__slider-button--next',
				},


				breakpoints: {
					1200: {
						slidesPerView: 3,
					},
					640.9: {
						slidesPerView: 2,
					},
					320: {
						slidesPerView: 1,
					}
				},
			});
		}

		if (document.querySelector('.review__slider')) {
			new Swiper('.review__slider', { // Создание слайдера
				modules: [Navigation],
				observer: true,
				observerParents: true,
				slidesPerView: 3,
				spaceBetween: 40,
				autoHeight: true,
				speed: 800,


				// Кнопки влево-вправо
				navigation: {
					prevEl: '.review__slider-button--prev',
					nextEl: '.review__slider-button--next',
				},

				breakpoints: {
					1200: {
						slidesPerView: 3,
					},
					640.9: {
						slidesPerView: 2,
					},
					320: {
						slidesPerView: 1,
					}
				},
			});
		}

		if (document.querySelector('.single__slider')) { // Проверка на наличие слайдера
			
			new Swiper('.single__slider', { // Создание слайдера
				modules: [Navigation],
				observer: true,
				observerParents: true,
				slidesPerView: 3,
				spaceBetween: 30,
				autoHeight: true,
				speed: 800,

				// Кнопки влево-вправо
				navigation: {
					prevEl: '.single__slider-button--prev',
					nextEl: '.single__slider-button--next',
				},

				breakpoints: {
					1200: {
						slidesPerView: 3,
						// slidesOffsetBefore: 90,
						// slidesOffsetAfter: 90,
					},
					640.9: {
						slidesPerView: 2,
					},
					320: {
						slidesPerView: 1,
					}
				},
			});
		}
	}

	initSliders();
}())