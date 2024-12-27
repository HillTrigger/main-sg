const burgerBtn = document.querySelector(".header__burger");
const sideMenu = document.querySelector(".header__side-menu");
const headerTopInner = document.querySelector(".header__top-inner");
const body = document.querySelector("body");

export function openSideBar() {
  const paddingOffSet = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;

  burgerBtn.classList.add("header__burger--active");
  sideMenu.classList.add("header__side-menu--active");
  headerTopInner.classList.add("header__top-inner--active");
  body.classList.add("lock");
  headerTopInner.style.paddingRight = paddingOffSet;
  body.style.paddingRight = paddingOffSet;
}
