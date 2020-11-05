window.addEventListener('DOMContentLoaded' , () =>{//load дожидается загрузки всей страницы, DOMContentLoaded дожидает только загрузки DOM дерево
  'use strict';
//Tаймер 
function countTimer(deadline){
  let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');
      
  function getTimeRemaining() { 
    let dateStop = new Date(deadline).getTime(),//создаем экземпляр класса Date, заносим дедлайн,миллисекунды от этих дат
      dateNow = new Date().getTime(),//создаем экземпляр класса Date, получаем текущую дату,миллисекунды от этих дат
      timeRemaining = (dateStop - dateNow) / 1000, //получаем разницу между датами(кол-во милсек) и делим на 1000 получая секунды
      seconds = ('0' + Math.floor(timeRemaining % 60)).slice(-2),// округляем и берем остаток от деления минуты, не выходя за рамки минуты 59-60 и 0 и тд
      minutes = ('0' + Math.floor((timeRemaining / 60) % 60)).slice(-2),// округляем и делим на 60 получая минуты и берем остаток от деления для получения минут не выходя за рамки минуты 59-60 и 0 и тд 
      hours = ('0' + Math.floor(timeRemaining / 60 / 60) % 24).slice(-2), // делим на кол секунд  и минут и получаем количество часов и берем остаток от деления для определения дней
      day = Math.floor(timeRemaining / 60 / 60/ 24);//вывод дня 

      return {//возвращаем значения 
        hours,//свойства 
        minutes,
        seconds,
        timeRemaining
      };
  };

  function updateClock(){//обновляем время динамически через setInterval
    let timer = getTimeRemaining();

    //выводим на экран
    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;

    if(timer.timeRemaining > 0){
      setInterval(updateClock, 1000);
    }else if(timer.timeRemaining <= 0){
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }

  };
  updateClock();
};
countTimer('30 November 2020');

//Меню
const toggleMenu = ()=>{
  const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

  const handlerMenu = () =>{
    // if(!menu.style.transform || menu.style.transform ===  `translate(-100%)`){
    //   menu.style.transform = `translate(0)`;
    // }else
    // menu.style.transform = `translate(-100%)`;

    menu.classList.toggle('active-menu');
  };

  btnMenu.addEventListener('click', handlerMenu);
  closeBtn.addEventListener('click', handlerMenu);
  
  // for (let i = 0; i < menuItems.length; i++) { //перебираем все пункты в меню
  //   menuItems[i].addEventListener('click', handlerMenu);// перебираем 
  // }; 
  menuItems.forEach((element) => element.addEventListener('click', handlerMenu)); // перебираем 

};
toggleMenu();

//popup 
const togglePopUp = () =>{
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popUpClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) =>{
          elem.addEventListener('click', () =>{
            popup.style.display = 'block';
          });
        });

        popUpClose.addEventListener('click', () =>{
          popup.style.display = 'none';
        });

};
togglePopUp();

//Анимация popup
const animatePopup = () =>{
  const popupContent = document.querySelector('.popup-content'),
        popupBtn = document.querySelectorAll('.popup-btn');
        
        function animate( draw, duration) { // передает в функцую 2 параметра
          let start = performance.now(); //начало загрузки страницы
          requestAnimationFrame(function animate(time) {//time с начало вызова функции 
            let timePassed = time - start;//время которое прошло с начало страницы
            if (timePassed > duration || screen.width < 768) timePassed = duration;//время больше чем длительность анимации, то анимация прекращается 
            draw(timePassed); // отрисовать её
            if (timePassed < duration) {
              requestAnimationFrame(animate);//если меньше то рисуется анимация
            }
          });
        };

        popupBtn.forEach((elem) =>{
          elem.addEventListener('click', () =>{
            animate(function(timePassed){
              popupContent.style.left = timePassed / 50 + '%';
            },2000);
          });
        });
};
animatePopup();


//Скролл
const scroll = () =>{
  const anchors = document.querySelectorAll('a[href*="#"]')//собираем все ссылки

  anchors.forEach((elem) =>{
    elem.addEventListener('click', function (e) {//вешаем события на все наши ссылки
      e.preventDefault();// убираем стандартное поведение
      
      const block = elem.getAttribute('href').substr(1);
      
      document.getElementById(block).scrollIntoView({//scrollIntoView метод для прокрутки 
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    });
  });
};
scroll();



}); 

