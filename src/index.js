'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from  'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

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