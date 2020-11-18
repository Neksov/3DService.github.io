//меню, откртие/закрытие 
const toggleMenu = ()=>{
  const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

  document.addEventListener('click', (elem) =>{
    if(elem.target.closest('.menu')){
      menu.classList.add('active-menu');
    }else if(elem.target.matches('.close-btn') || elem.target.closest('li>a') || !elem.target.closest('menu')){
      menu.classList.remove('active-menu');
    }
  });
};
export default toggleMenu;