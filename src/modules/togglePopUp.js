//popup 
const togglePopUp = () =>{
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        formName = document.getElementById('form3-name'),
        formEmail = document.getElementById('form3-email'),
        formTel = document.getElementById('form3-phone');

        popupBtn.forEach((elem) =>{
          elem.addEventListener('click', () =>{
            popup.style.display = 'block';
          });
        });

        popup.addEventListener('click', (event) =>{
          let target = event.target;
          if(target.classList.contains('popup-close')){//закрытие онка по крестику 
            popup.style.display = 'none'; 
            formName.value = '';
            formEmail.value = '';
            formTel.value = '';
          }else{
            target = target.closest('.popup-content');
              if(!target){
                popup.style.display = 'none';
                formName.value = '';
                formEmail.value = '';
                formTel.value = '';
              }
          }
        });
};
export default togglePopUp;