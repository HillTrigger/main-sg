import { remToPixels } from "../../../javascript/remToPixels";

const burgerBtn = document.querySelector(".header__burger");
const sideMenu = document.querySelector(".header__side-menu");
const headerTopInner = document.querySelector(".header__top-inner");
const headerMenu = document.querySelector(".header__menu");
const body = document.querySelector("body");

export function openSideBar() {
  const paddingOffSet =
    window.innerWidth - document.documentElement.clientWidth;

  burgerBtn.classList.add("header__burger--active");
  sideMenu.classList.add("header__side-menu--active");
  headerTopInner.classList.add("header__top-inner--active");
  headerMenu.classList.add("header__menu--side-bar-open");
  body.classList.add("lock");
  headerMenu.style.paddingRight = `${paddingOffSet + remToPixels(1.125)}px`;
  body.style.paddingRight = `${paddingOffSet}px`;
}
