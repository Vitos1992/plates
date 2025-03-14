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


// amimeits 

let animItems = document.querySelectorAll('._anim_items');

if (animItems.length > 0) {
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItems = animItems[index];
      const
    }
  }
}