//Tаймер 
function countTimer(deadline) {
  let timerHourd = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSecond = document.querySelector('#timer-seconds');

  function getTimeRemaiming() {
      let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = Math.max(((dateStop - dateNow) / 1000), 0),
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);
      return {timeRemaining, hours, minutes, seconds};
  }
  // подстовляет нули
  function oneZero(num) {
      if (num >= 0 && num < 10) {
          return `0${num}`;
      } else {
          return num;
      }
  }
  // выводим deadline  в дом
  let idInterval = setInterval(updateClock, 1000);
  function updateClock () {
      let timer = getTimeRemaiming();
      timerHourd.textContent = oneZero(timer.hours);
      timerMinutes.textContent = oneZero(timer.minutes);
      timerSecond.textContent = oneZero(timer.seconds);
      if (timer.timeRemaining <= 0) { 
          clearInterval(idInterval);
      } 
      
  }
  
};
export default countTimer;
