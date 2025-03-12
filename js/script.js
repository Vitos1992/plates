$(document).ready(function () {
$(".slick_role").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    speed: 1000,
    easing: "ease",
    autoplay: false,
    autoplaySpeed: 500,
    pauseOnHover: true,
    variableWidth: true,
});
});

$(document).ready(function () {
$(".slider_row").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    adaptiveHeight: true,
    speed: 1000,
    easing: "ease",
    variableWidth: true,
});
});

$(document).ready(function () {
$(".slider_line").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    adaptiveHeight: true,
    speed: 1000,
    easing: "ease",
    variableWidth: true,
});
});

// form section_five

(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    drop_menu: document.querySelector("[data-modal]"),
    body: document.querySelector("body")
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.drop_menu.classList.toggle("closed");
    refs.body.classList.toggle("no-scroll");
    }
})();

// menu_mobile

(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      mobile: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
        refs.mobile.classList.toggle("is-hidden");
    }
})();


