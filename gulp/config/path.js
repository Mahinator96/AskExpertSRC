import * as nodePath from 'path';

const srcFolder 	= `./src`; 	// Путь к папке с исходниками
const buildFolder = `./dist`; // Путь к папке с результатом
const rootFolder 	= nodePath.basename(nodePath.resolve()); // Получаем имя папки проекта

// Общий объект 'path' в котором хранится вся информация о пути к тем или иным файлам или папкам
export const path = {
  build: {
		html: 		`${buildFolder}/`,
    js: 			`${buildFolder}/js/`,
    css: 			`${buildFolder}/css/`,
    images: 	`${buildFolder}/img/`,
    files: 		`${buildFolder}/files/`,
    fonts: 		`${buildFolder}/fonts/`,
  },
  src: {
    html: 		`${srcFolder}/html/*.html`,
    js: 			`${srcFolder}/js/*.js`,
    files: 		`${srcFolder}/files/**/*.*`,
    svg: 			`${srcFolder}/img/**/*.svg`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
    scss: 		`${srcFolder}/scss/*.scss`,
    images: 	`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
  },
  watch: {
		html: 		`${srcFolder}/**/*.html`,
    js: 			`${srcFolder}/js/**/*.js`,
    files: 		`${srcFolder}/files/**/*.*`,
    scss: 		`${srcFolder}/scss/**/*.scss`,
    images: 	`${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  ftp: 					`test`, //папка на удалённом ftp-сервере
  srcFolder: 		srcFolder,
  rootFolder: 	rootFolder,
  buildFolder: 	buildFolder,
  clean: 				buildFolder,
}