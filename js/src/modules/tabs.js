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
export default tabs;