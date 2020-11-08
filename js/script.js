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

//меню, откртие/закрытие 
const toggleMenu = ()=>{
  const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

  document.addEventListener('click', (elem) =>{
    if(elem.target.closest('.menu')){
      menu.classList.add('active-menu');
    }else if(elem.target.matches('.close-btn') || elem.target.closest('li>a') || !elem.target.closest('menu')){
      menu.classList.remove('active-menu');
    }
  });
};
toggleMenu();

//popup 
const togglePopUp = () =>{
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach((elem) =>{
          elem.addEventListener('click', () =>{
            popup.style.display = 'block';
          });
        });

        popup.addEventListener('click', (event) =>{
          let target = event.target;
          if(target.classList.contains('popup-close')){//закрытие онка по крестику 
            popup.style.display = 'none';
          }else{
            target = target.closest('.popup-content');
              if(!target){
                popup.style.display = 'none';
              }
          }
        });

};
togglePopUp();

//Анимация popup
const animatePopup = () =>{
  const popupContent = document.querySelector('.popup-content'),
        popupBtn = document.querySelectorAll('.popup-btn');
        // popUpClose = document.querySelector('.popup-close');

        function animate( draw, duration) { // передает в функцую 2 параметра
          let start = performance.now(); //начало загрузки страницы
          requestAnimationFrame(function animate(time) {//time с начало вызова функции 
            let timePassed = time - start;//время которое прошло с начало страницы
            if (timePassed > duration || screen.width < 768) timePassed = duration;//время больше чем длительность анимации, то анимация прекращается 
            draw(timePassed); // отрисовать её
            if (timePassed < duration) {
              requestAnimationFrame(animate);//если меньше то рисуется анимация дальше 
            }
          });
        };

        popupBtn.forEach((elem) =>{
          elem.addEventListener('click', () =>{
            animate(function(timePassed){
              popupContent.style.top = timePassed / 70 + '%';
            },2000);
          });
        });

};
animatePopup();

// Скролл
const scroll = () =>{
  const anchors = document.querySelectorAll('a[href*="#"]')//собираем все ссылки

  anchors.forEach((elem) =>{
    elem.addEventListener('click', function (e) {//вешаем события на все наши ссылки
      e.preventDefault();// убираем стандартное поведение
      
  if(elem !== 'a[href="#"]'){
    const block = elem.getAttribute('href').substr(1);
    document.getElementById(block).scrollIntoView({//scrollIntoView метод для прокрутки 
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
}
    });
  });
};
scroll();

//Табы 
const tabs = () =>{
  const tabHeader = document.querySelector('.service-header'),
        tabContent = document.querySelectorAll('.service-tab'),
        tab = document.querySelectorAll('.service-header-tab');

  const toggleTabContent = (index) =>{
    for(let i=0; i < tabContent.length; i++){
      if(index === i){
        tab[i].classList.add('active');//добавляем класс active
        tabContent[i].classList.remove('d-none'); 
      }else{
        tab[i].classList.remove('active');
        tabContent[i].classList.add('d-none'); 
      }
    }
  };

  tabHeader.addEventListener('click', (event) =>{

          //1-ый вариант

          // let target = event.target; //записываем в таргет элемент на котором произошло событие.

          // while(target !== tabHeader){//провермяем евляется ли наш target tabHeaderом

          //   if (target.classList.contains('service-header-tab')){

          //     tab.forEach((item, i ) =>{ // колбэк функция принимает 2 аргумента
          //       if (item === target){
          //         toggleTabContent(i);//вывзов функции сраниваем индекс который получили с индексем tabContent
          //       }
          //     });
          //   return;//если выполнилось завершили
          //   }

          //   target = target.parentNode; //присваиваем родителя если не выполняется условие if(target.classList.contains('service-header-tab')
          
    let target = event.target; //записываем в таргет элемент на котором произошло событие.
      target = target.closest('.service-header-tab');// проверяем есть ли утаргета селектор .service-header-tab, если нет то подымается вверх пока не найдет, либо null 
        if (target){
          tab.forEach((item, i ) =>{ // колбэк функция принимает 2 аргумента
            if (item === target){
              toggleTabContent(i);//вывзов функции сраниваем индекс который получили с индексем tabContent
            }
          });
        }

  target = target.parentNode; //присваиваем родителя если не выполняется условие if(target.classList.contains('service-header-tab')
  });
};  
tabs();

//подсчет моих слайдов 
const count = () =>{
  const slide = document.querySelectorAll('.portfolio-item');

  slide.forEach((elem, i) =>{
    let parent = document.querySelector(".portfolio-dots"),
        li = document.createElement("li");

      elem = parent.appendChild(li);
      elem.classList.add('dot');
  });

  let count = document.querySelectorAll(".dot");
      count[0].classList.add('dot-active');
};
count();

//Слайдер
const slider = () =>{
  const slider = document.querySelector('.portfolio-content'),
        slide = document.querySelectorAll('.portfolio-item'),
        dot = document.querySelectorAll('.dot'),
        btn = document.querySelectorAll('.portfolio-btn');

  let currentSlide = 0,
      interval;
  
  const prevSlide = (elem, index, strClass) =>{//elem - принимаем элемент у которого необ уд класс, index - индекс наш currentSlide, strClass - и класс который хоти удалить
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) =>{
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () =>{
    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');//предаем точки, текущий слайд и активныую класс

    currentSlide++;
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }

    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) =>{
    interval = setInterval(autoPlaySlide, time);//счетчик 
  };

  const stopSlide = () =>{
    clearInterval(interval);
  };

  slider.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;

    if(!target.matches('.portfolio-btn, .dot')){//ограничить вход если не попадаем на точки и на стрелки то возвращаем 
      return;
    }
//убираем активные классы 
    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');//предаем точки, текущий слайд и активныую класс

    if(target.matches('.next')){
      currentSlide++;
    }else if(target.matches('.prev')){
      currentSlide--;
    }else if(target.matches('.dot')){
      dot.forEach((elem, index,) =>{//elem-наши точки,index- их индикс
        if(elem === target){ //елси точка совпадает с той точкой на которую мы кликнули 
          currentSlide = index; //этот элемент инлекс присваиваем currentSlide-ру
        }
      });
    }
    
    if(currentSlide >= slide.length){//делаем проверку на последний слайд, чтоб возвращался к первому
      currentSlide = 0;
    }
    if(currentSlide < 0){
      currentSlide = slide.length - 1;
    }

    //добавляем активные классы 
    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');

  });

  slider.addEventListener('mouseover', (event) =>{
    if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
      stopSlide();
    }
  });
  slider.addEventListener('mouseout', (event) =>{
    if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
      startSlide();
    }
  });

  startSlide();
};
slider();
}); 

