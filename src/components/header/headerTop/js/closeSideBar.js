const burgerBtn = document.querySelector(".header__burger");
const sideMenu = document.querySelector(".header__side-menu");
const headerTopInner = document.querySelector(".header__top-inner");
const body = document.querySelector("body");

export function closeSideBar() {
  if (window.scrollY == 0) {
    headerTopInner.classList.remove("header__top-inner--active");
  }

  burgerBtn.classList.remove("header__burger--active");
  sideMenu.classList.remove("header__side-menu--active");
  body.classList.remove("lock");
  headerTopInner.style.paddingRight = 0;
  body.style.paddingRight = 0;
}
