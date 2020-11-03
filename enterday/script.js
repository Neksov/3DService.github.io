window.addEventListener('DOMContentLoaded' , () =>{//load дожидается загрузки всей страницы, DOMContentLoaded дожидает только загрузки DOM дерево
'use strict';
// получим текущее время пользователя и компоненты этого времени
function countTimer(deadline){

  let messageText = document.querySelector('#message'),
  dayOfWeekText = document.querySelector('#dayOfWeek'),
  timeText = document.getElementById('time'),
  dayText = document.querySelector('#day');

function data1(){

    let now = new Date(),
        hour = ('0' + now.getHours()).slice(-2),
        // minute = ('0' + now.getMinutes()).slice(-2),
        // second = ('0' + now.getSeconds()).slice(-2),
        times = new Date().toLocaleTimeString(),
        message = '',
        time = '',
        day = '',
        dayOfWeek = '',
        days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        dayTime = Math.floor(timeRemaining / 60 / 60/ 24);//вывод дня 

        dayOfWeek = 'Сегодня: ' + days[now.getDay()];

        return {
          hour,
          times,
          message,
          time,
          day,
          dayOfWeek,
          days,
          dayTime,
          timeRemaining
        };

};

function enterData(){
  let dat = data1();
      // определим фразу приветствия в зависимости от местного времени пользователя 
      if (dat.hour <= 6) {
        dat.message = 'Доброе время суток';
      } else if (dat.hour <= 12) {
        dat.message = 'Доброе утро';
      } else if (dat.hour <= 18) {
        dat.message = 'Добрый день';
      } else {
        dat.message = 'Добрый вечер';
      }

      if(dat.timeRemaining > 0){
        setInterval(enterData, 1000);
      }

      if(dat.times >= 12 ){
        dat.time = 'Текущее время: ' + dat.times +' PM';
      }else{
        dat.time = 'Текущее время: ' + dat.times +' AM';
      }

      dat.day = 'До нового года осталось: ' + dat.dayTime + ' дней';

      
      //выводим на экран 
      messageText.innerHTML = dat.message;
      dayOfWeekText.innerHTML = dat.dayOfWeek;
      timeText.innerHTML = dat.time;
      dayText.innerHTML = dat.day;
};
enterData();
};


  countTimer('31 December 2020');
}); 