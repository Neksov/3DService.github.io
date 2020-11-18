//Смена картинки при наведение
const imgChange = () =>{

  const command = document.querySelectorAll('.command__photo');
  command.forEach((elem) =>{
    let img = elem.src;//начальное изображение 
    elem.addEventListener('mouseover', (event) =>{//меняем при наведении
        event.target.src = event.target.dataset.img;
    });
    elem.addEventListener('mouseout', (event) =>{//меняем когда убираем мышь
      event.target.src = img;
    });
  });
};
export default imgChange;