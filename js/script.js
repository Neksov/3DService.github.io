window.addEventListener('DOMContentLoaded' , () =>{//load дожидается загрузки всей страницы, DOMContentLoaded дожидает только загрузки DOM дерево
  'use strict';
//timer
function countTimer(deadline){
  let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');
      
  function getTimeRemaining() { 
    let dateStop = new Date(deadline).getTime(),//создаем экземпляр класса Date, заносим дедлайн,миллисекунды от этих дат
      dateNow = new Date().getTime(),//создаем экземпляр класса Date, получаем текущую дату,миллисекунды от этих дат
      timeRemaining = (dateStop - dateNow) / 1000, //получаем разницу между датами(кол-во милсек) и делим на 1000 получая секунды
      seconds = Math.floor(timeRemaining % 60),// округляем и берем остаток от деления минуты, не выходя за рамки минуты 59-60 и 0 и тд
      minutes = Math.floor((timeRemaining / 60) % 60),// округляем и делим на 60 получая минуты и берем остаток от деления для получения минут не выходя за рамки минуты 59-60 и 0 и тд 
      hours = Math.floor(timeRemaining / 60 / 60) % 24, // жедим на кол секунд  и минут и получаем количество часов и берем остаток от деления для определения дней
      day = Math.floor(timeRemaining / 60 / 60/ 24); 

      return {//возвращаем значения 
        hours,//свойства 
        minutes,
        seconds,
        timeRemaining
      };
  }
  function updateClock(){
    let timer = getTimeRemaining();

    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;

    if(timer.timeRemaining > 0){
      setTimeout(updateClock, 1000);
    }
  }

  updateClock()
}

countTimer('12 November 2020');

// setInterval(countTimer , 1000, ('12 November 2020')); //устанавливаем таймер через 1с и передаем аргумент дедлайна

}); 