// menu_mobile

(() => {
    const mobileMenu = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    mobileMenu.openMenuBtn.addEventListener("click", toggleMenu);
    mobileMenu.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
        mobileMenu.menu.classList.toggle("open_mob");
    }
})();


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("burger").addEventListener("click", function() {
//         document.querySelector("header").classList.toggle("open_mob")
//     })
// })
