if (document.querySelector('.icon-menu')) {

	const burger = document.querySelector('.icon-menu');
	const menuBody = document.querySelector('.menu__body');
	const menuList = menuBody.querySelector('.menu__list');
	
	burger.addEventListener('click', () => {
		burger.classList.toggle('menu-open');
		menuBody.classList.toggle('menu-open');
	
		if(burger.classList.contains('menu-open')) {
			document.querySelector('body').classList.add('_lock');
		} else {
			document.querySelector('body').classList.remove('_lock');
		}
	});
	
	menuList.addEventListener('click', (e) => {
		if (e.target.classList.contains('menu__link')) {
			burger.classList.remove('menu-open');
			menuBody.classList.remove('menu-open');
			document.querySelector('body').classList.remove('_lock');
		}
	});
}
