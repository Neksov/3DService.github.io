//send-Ajax-form
const sendForm = () =>{

  let errorMessage = 'Что-то пошло не так...',
      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  
  const form1 = document.getElementById('form1'),// форм главная
        form2 = document.getElementById('form2'),// форма вопросы 
        form3 = document.getElementById('form3'),// форма модалка 
        input = document.querySelectorAll('input'),
        topForm = document.querySelector('.top-form'),
        mess = document.querySelector('.mess'),
        formName = document.getElementById('form1-name'),
        formEmail = document.getElementById('form1-email'),
        formTel = document.getElementById('form1-phone'),

        formName2 = document.getElementById('form2-name'),
        formEmail2 = document.getElementById('form2-email'),
        formTel2 = document.getElementById('form2-phone'),

        formName3 = document.getElementById('form3-name'),
        formEmail3 = document.getElementById('form3-email'),
        formTel3 = document.getElementById('form3-phone'),
        popup = document.querySelector('.popup');

        // formEmail = document.querySelectorAll('.form-email');

  let statusMessage = document.createElement('div'),//добавялем элемент на страницу
      load = document.createElement('div');//добавялем элемент на страницу

  statusMessage.style.cssText = 'font-size: 2rem;';
  statusMessage.style.cssText = 'color: white;';

  input.forEach((elem) =>{
    topForm.classList.add('form-name');//добавили класс к input с классом top-form
    mess.classList.add('form-name');//добавили класс к input с классом mess

    elem.addEventListener('input', (e) =>{  //проверка вводимых дынных-ТОЛЬКО кир и пробелы в инпут ваше имя 
      let target = e.target;
      if(target.matches('.form-name')){
        target.value = target.value.replace(/[^а-яё\s]/ig, ''); // ограничиваем ввод всего кроме цифр
      }else if(target.matches('.form-phone')){
        target.value = target.value.replace(/[^\+\d]/g, '').substring(0,12); // ограничиваем ввод всего кроме цифр 
      }else if(target.matches('.form-email')){
        target.value = target.value.replace(/\s/g, ''); // ограничиваем ввод всего кроме пробелы
      }
    });
  });

  form1.addEventListener('submit', (event) =>{
    event.preventDefault();//отменяем стандарное поведение браузера
    form1.appendChild(statusMessage);// добавляем элемент на страницу    
    form1.appendChild(load);// добавляем элемент на страницу

    if(!formTel.value.match(/[0-9+]{7,13}/ig)) {
      alert('Номер введен не верно');
      statusMessage.remove();//удаляем сообщение под формой
      return;
    }else if(formEmail.value === ''){ 
      alert('Заполните все поля');
      statusMessage.remove();//удаляем сообщение под формой
      return;
    }
    load.classList.add('sk-spinner-pulse');//вывод сообщения загрузка
    
    const formData = new FormData(form1);//создаем экземпляр класса и в эту функцию передаем форму с которой получаем данные
    let body = {}; //обект в который помещаем наши данные

    //для отправки JSON перебираем и записываем каждый цикл
    formData.forEach((val, key) =>{
      body[key] = val;
    });

    postData(body) 
    .then((response) =>{
      if(response.status !==200){
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
      load.remove(load);//удаляем прилоадер

      // let timerId = () =>{//таймер
      //   statusMessage.remove();//удаляем сообщение под формой
      // };
      // setTimeout(timerId, 3000);
    })
    .catch((error) =>{
      statusMessage.textContent = errorMessage;
      console.error(error); 
      load.remove(load);//удаляем прилоадер

      // let timerId = () =>{//таймер
      //   statusMessage.remove();//удаляем сообщение под формой
      // };
      // setTimeout(timerId, 3000);
    });

    formName.value = '';
    formEmail.value = '';
    formTel.value = '';
    statusMessage.textContent ='';
  });

  form2.addEventListener('submit', (event) =>{
    event.preventDefault();//отменяем стандарное поведение браузера
    form2.appendChild(statusMessage);// добавляем элемент на страницу
    form2.appendChild(load);// добавляем элемент на страницу    

    if(!formTel2.value.match(/[0-9+]{7,13}/ig)) {
      statusMessage.remove();//удаляем сообщение под формой
      alert('Номер введен не верно');
      return;
    }else if(formEmail2.value === '' || mess.value === ''){ 
      statusMessage.remove();//удаляем сообщение под формой
      alert('Заполните все поля');
        return;
    }

    load.classList.add('sk-spinner-pulse');//вывод сообщения загрузка

    const formData = new FormData(form2);//создаем экземпляр класса и в эту функцию передаем форму с которой получаем данные
    let body = {}; //обект в который помещаем наши данные

    //для отправки JSON перебираем и записываем каждый цикл
    formData.forEach((val, key) =>{
      body[key] = val;
    });

    postData(body) 
    .then((response) =>{
      if(response.status !==200){
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
      load.remove(load);//удаляем прилоадер

      // let timerId = () =>{//таймер
      //   statusMessage.remove();//удаляем сообщение под формой
      // };
      // setTimeout(timerId, 3000);
    })
    .catch((error) =>{
      statusMessage.textContent = errorMessage;
      console.error(error);
      load.remove(load);//удаляем прилоадер

      // let timerId = () =>{//таймер
      //   statusMessage.remove();//удаляем сообщение под формой
      // };
      // setTimeout(timerId, 3000);
    });

    formName2.value = '';
    formEmail2.value = '';
    formTel2.value = '';
    mess.value = '';
    statusMessage.textContent ='';
  });

  form3.addEventListener('submit', (event) =>{
    event.preventDefault();//отменяем стандарное поведение браузера
    form3.appendChild(statusMessage);// добавляем элемент на страницу
    form3.appendChild(load);// добавляем элемент на страницу    

    if(!formTel3.value.match(/[0-9+]{7,13}/ig)) {
      statusMessage.remove();//удаляем сообщение под формой
      alert('Номер введен не верно');
      return;
    }else if(formEmail3.value === ''){ 
      statusMessage.remove();//удаляем сообщение под формой
      alert('Заполните все поля');
        return;
    }

    load.classList.add('sk-spinner-pulse');//вывод сообщения загрузка

    const formData = new FormData(form3);//создаем экземпляр класса и в эту функцию передаем форму с которой получаем данные
    let body = {}; //обект в который помещаем наши данные

    //для отправки JSON перебираем и записываем каждый цикл
    formData.forEach((val, key) =>{
      body[key] = val;
    });

     postData(body) //обработка сообщения 
    .then((response) =>{
      if(response.status !==200){
        throw new Error('status network not 200');
      }
      statusMessage.textContent = successMessage;
      load.remove(load);//удаляем прилоадер

      // let timerId = () =>{//таймер
      //   popup.style.display = 'none';//закрываем модалку
      //   statusMessage.remove();//удаляем сообщение под формой
      // };
      // setTimeout(timerId, 3000);
    })
    .catch((error) =>{
      statusMessage.textContent = errorMessage;
      console.error(error);   
      load.remove(load);//удаляем прилоадер

      // let timerId = () =>{//таймер
      //   popup.style.display = 'none';//закрываем модалку
      //   statusMessage.remove();//удаляем сообщение под формой
      // };
      // setTimeout(timerId, 3000);

    });

    formName3.value = '';
    formEmail3.value = '';
    formTel3.value = '';
    statusMessage.textContent ='';
  });
  
  const postData = (body) =>{
    //запрос к серверу через fetch
    return fetch ('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //свойство и значение
      },
      body: JSON.stringify(body),
      credentials: 'include' //проверка подлинности
    });
  };
};

export default sendForm;