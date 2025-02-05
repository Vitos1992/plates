// $(document).ready(function(){
//     $('.slider').slick();
// });


// /---------------section_six-----------------/ 

const contBox =document.querySelector('.cont_box');
const sliderLlineComp = document.querySelectorAll('.slider_line_comp');
const sliderRow = document.querySelector('.slider_row');

const sliderBtnLeft = document.querySelector('.slider_btn_left');
const sliderBtnRight = document.querySelector('.slider_btn_right');

let sliderCount = 0;
let sliderWidth = contBox.affsetWidth;

// перемотка слайда у перед при натиску кнопки NEXT
sliderBtnRight.addEventListener('click', nextSlide);

//перемотка слайда у перед при натиску кнопки NEXT
sliderBtnLeft.addEventListener('click', leftSlider);

function nextSlide() {
    sliderCount++;
    console.log(sliderCount);

    rollSlider();
}

function leftSlider() {
    sliderCount--;
    console.log(sliderCount);

    rollSlider();
}

function rollSlider() {
    sliderRow.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}