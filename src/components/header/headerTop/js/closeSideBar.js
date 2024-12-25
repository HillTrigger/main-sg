const burgerBtn = document.querySelector(".header__burger");
const sideMenu = document.querySelector(".header__side-menu");
let headerTopInner = document.querySelector(".header__top-inner");

export function closeSideBar() {
  if (window.scrollY == 0) {
    headerTopInner.classList.remove("header__top-inner--active");
  }

  burgerBtn.classList.remove("header__burger--active");
  sideMenu.classList.remove("header__side-menu--active");
}
