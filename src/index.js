'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import animatePopup from './modules/animatePopup';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import countDot from './modules/countDot';
import slider from './modules/slider';
import imgChange from './modules/imgChange';
import сalc from './modules/сalc';
import sendForm from './modules/sendForm';


//Tаймер 
countTimer('30 November 2020');
//меню, откртие/закрытие 
toggleMenu();
//popup
togglePopUp();
//Анимация popup
animatePopup();
// Скролл
scroll();
//Табы  
tabs();
//подсчет моих слайдов и добавление точек 
countDot();
//Слайдер
slider();
//Смена картинки при наведение
imgChange();
//калькулятор
сalc(100);//при вызове калькулятора передаем сразу цену
//send-Ajax-form
sendForm();