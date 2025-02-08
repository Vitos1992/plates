$(document).ready(function(){
    $('.slick_role').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        speed:1000,
        easing:'ease',
    });
});

$(document).ready(function(){
    $('.slider_row').slick({
        arrows:true,
        dots:false,
        slidesToShow:5,
        adaptiveHeight:true,
        speed:1000,
        easing:'ease'
    });
});

$(document).ready(function(){
    $('.slider_line').slick({
        arrows:true,
        dots:false,
        slidesToShow:4,
        adaptiveHeight:true,
        speed:1000,
        easing:'ease'
    });
});

const open = document.querySelector('#open');
const menu = document.querySelector('#menu');

open.addEventListener('click', () => {
    if (menu.classList.contains('.closed') == true) {
        menu.classList.remove('.closed');
    }  else {
        menu.classList.add('.closed');
    }
})

// ---------------------------------

