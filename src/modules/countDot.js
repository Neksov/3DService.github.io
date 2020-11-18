//подсчет моих слайдов и добавление точек 
const countDot = () =>{
  const slide = document.querySelectorAll('.portfolio-item');

  slide.forEach((elem, i) =>{
    let parent = document.querySelector(".portfolio-dots"),
        li = document.createElement("li");

      elem = parent.appendChild(li);
      elem.classList.add('dot');
  });

  let count = document.querySelectorAll(".dot");
      count[0].classList.add('dot-active');
};
export default countDot;