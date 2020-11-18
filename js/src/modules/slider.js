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
export default slider;