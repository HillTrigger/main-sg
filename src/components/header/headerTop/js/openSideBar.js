const burgerBtn = document.querySelector(".header__burger");
const sideMenu = document.querySelector(".header__side-menu");
let headerTopInner = document.querySelector(".header__top-inner");

export function openSideBar() {
  burgerBtn.classList.add("header__burger--active");
  sideMenu.classList.add("header__side-menu--active");
  headerTopInner.classList.add("header__top-inner--active");
}
