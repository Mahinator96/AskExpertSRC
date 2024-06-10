// import { log } from "gulp-util";

(function() {
  const headerMenu = document.querySelector('.menu__list');
  const headerMenuItem = headerMenu.querySelectorAll('.menu__item');
  
  const location = window.location.href;

  headerMenuItem.forEach((item) => {
    let itemHref = item.querySelector('a').getAttribute('href');

    if (location.includes(itemHref)) {
      headerMenuItem.forEach((itemRemoveClass) => itemRemoveClass.classList.remove('menu__item--active'))
      item.classList.add('menu__item--active');
    }
  })
}())