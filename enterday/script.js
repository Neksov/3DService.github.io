window.addEventListener('DOMContentLoaded' , () =>{//load дожидается загрузки всей страницы, DOMContentLoaded дожидает только загрузки DOM дерево
'use strict';

let messageText = document.querySelector('#message'),
    dayOfWeekText = document.querySelector('#dayOfWeek'),
    timeText = document.getElementById('time'),
    dayText = document.querySelector('#day');

// получим текущее время пользователя и компоненты этого времени
function countTimer(deadline){
  let now = new Date(),
      hour = ('0' + now.getHours()).slice(-2),
      // minute = ('0' + now.getMinutes()).slice(-2),
      // second = ('0' + now.getSeconds()).slice(-2),
      times = new Date().toLocaleTimeString(),
      message = '',
      time = '',
      day = '',
      dayOfWeek = '',
      days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      dayTime = Math.floor(timeRemaining / 60 / 60/ 24);//вывод дня 

      // определим фразу приветствия в зависимости от местного времени пользователя 
      if (hour <= 6) {
        message = 'Доброе время суток';
      } else if (hour <= 12) {
        message = 'Доброе утро';
      } else if (hour <= 18) {
        message = 'Добрый день';
      } else {
        message = 'Добрый вечер';
      }

      //присваеваем значения
      if(times >= 12 ){
        time = 'Текущее время: ' + times +' PM';
      }else{
        time = 'Текущее время: ' + times +' AM';

      }
      day = 'До нового года осталось: ' + dayTime + ' дней';
      dayOfWeek = 'Сегодня: ' + days[now.getDay()];
      //выводим на экран 

      messageText.innerHTML = message;
      dayOfWeekText.innerHTML = dayOfWeek;
      timeText.innerHTML = time;
      dayText.innerHTML = day;
}
  countTimer('31 December 2020');
}); 