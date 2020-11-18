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
export default scroll;