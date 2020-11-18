//калькулятор
const сalc = (price = 100) =>{
  const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total'); 

  //проверка вводимых дынных-ТОЛЬКО ЦИФРЫ
  calcBlock.addEventListener('input', (e) =>{
    let target = e.target;
    if(target.matches('.calc-square') || target.matches('.calc-count') || target.matches('.calc-day')){
      target.value = target.value.replace(/\D/g, ''); // ограничиваем ввод всего кроме цифр
    }
  });

  //реализация расчетов калькулятора
  const countSum = () =>{
    let total = 0,
    countValue = 1,
    dayValue = 1;

    const typeValue = calcType.options[calcType.selectedIndex].value,//получаем наше value 
          squareValue = +calcSquare.value;

    if(calcCount.value > 1){ //количество помещений 
      countValue += (calcCount.value - 1) / 10; //получаем десятую долю и ее прибавляем
    }

    if(calcDay.value && calcDay.value < 5){//количество дней  
      dayValue *= 2;
    }else if(calcDay.value && calcDay.value < 10){
      dayValue *= 1.5;
    }

    if(typeValue && squareValue){// проверка и умножение введеных данных площадь и обьект
      total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
    }

    totalValue.textContent = total; //вывод итоговая цена
  };
  
  calcBlock.addEventListener('change', (e) =>{
    let target = e.target;
    if(target === calcType || target === calcSquare || target === calcCount || target === calcDay ){
      countSum();
    }
  });
};

export default сalc;