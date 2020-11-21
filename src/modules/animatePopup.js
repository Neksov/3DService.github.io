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
              requestAnimationFrame(animate);//если меньше то рисуется анимация дальше 
            }
          });
        };

        popupBtn.forEach((elem) =>{
          elem.addEventListener('click', () =>{
            animate(function(timePassed){
              popupContent.style.top = timePassed / 70 + '%';
            },500);
          });
        });

};
export default animatePopup;