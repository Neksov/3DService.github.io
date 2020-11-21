function countTimer(deadline) {
    let timerHourd = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSecond = document.querySelector('#timer-seconds');
    function getTimeRemaiming() {
        let dateStop = new Date(deadline).getTime(),//создаем экземпляр класса Date, заносим дедлайн,миллисекунды от этих дат
        dateNow = new Date().getTime(),//создаем экземпляр класса Date, получаем текущую дату,миллисекунды от этих дат
        timeRemaining = (dateStop - dateNow) / 1000, //получаем разницу между датами(кол-во милсек) и делим на 1000 получая секунды
        seconds = (Math.floor(timeRemaining % 60)),// округляем и берем остаток от деления минуты, не выходя за рамки минуты 59-60 и 0 и тд
        minutes = (Math.floor((timeRemaining / 60) % 60)),// округляем и делим на 60 получая минуты и берем остаток от деления для получения минут не выходя за рамки минуты 59-60 и 0 и тд 
        hours = (Math.floor(timeRemaining / 60 / 60) % 24), // делим на кол секунд  и минут и получаем количество часов и берем остаток от деления для определения дней
        day = Math.floor(timeRemaining / 60 / 60/ 24);//вывод дня 
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