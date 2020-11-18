//popup 
const togglePopUp = () =>{
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach((elem) =>{
          elem.addEventListener('click', () =>{
            popup.style.display = 'block';
          });
        });

        popup.addEventListener('click', (event) =>{
          let target = event.target;
          if(target.classList.contains('popup-close')){//закрытие онка по крестику 
            popup.style.display = 'none';
          }else{
            target = target.closest('.popup-content');
              if(!target){
                popup.style.display = 'none';
              }
          }
        });
};
export default togglePopUp;