const slider = document.querySelector('.slider');
const slider_img = document.querySelectorAll('.slider_img'); 
const slider_line = document.querySelector('.slider_line');
const slider_btn_prev = document.querySelector('.slider_btn_prev');
const slider_btn_next = document.querySelector('.slider_btn_next');
const dots = document.querySelectorAll(".dot");

 //Счетчик
let slider_count = 0;

 //Ширина слайдера
let slider_width = slider.offsetWidth;//берет ширину слайдера

 //обработчик события нажатия на кнопку
slider_btn_next.addEventListener('click', nextSlider);
slider_btn_prev.addEventListener('click', prevSlider);

 //Функция для следующего слайда
function nextSlider(){
    slider_count++;
    if(slider_count >= slider_img.length){
        slider_count = 0;
    }
    rollSlider();
    updateActiveDot(slider_count);
}

 //Функция для предыдущего слайда
function prevSlider(){
    slider_count--;
    if(slider_count < 0){ 
        slider_count = slider_img.length-1;
    }
    rollSlider();
    updateActiveDot(slider_count);
}

 //Функция для номера слайда
function rollSlider(){
    slider_line.style.transform = `translateX(${-slider_count * slider_width}px)`; //счетчик умножаем на ширину, чтобы понять какой это слайд по счету
}

 //Метод для автоматического перелистывания
setInterval(() => {
    nextSlider()
}, 3000); 

 //Маркер
function updateActiveDot(currentNum) {
    dots.forEach((dot, index) => {
      dot.classList.remove("dot_active");
      if (index === currentNum) {
        dot.classList.add("dot_active");
      }
    });
  }
