import { remToPixels } from "../../../javascript/remToPixels";
import { searchClose } from "../sideMenu/js/searchClose";
import { headerTopInnerRemove } from "./headerTopInnerRemove";

const burgerBtn = document.querySelector(".header__burger");
const sideMenu = document.querySelector(".header__side-menu");
const headerTopInner = document.querySelector(".header__top-inner");
const headerMenu = document.querySelector(".header__menu");
const body = document.querySelector("body");

export function closeSideBar() {
  if (window.scrollY == 0) {
    headerTopInnerRemove(headerTopInner);
  }

  burgerBtn.classList.remove("header__burger--active");
  sideMenu.classList.remove("header__side-menu--active");
  headerMenu.classList.remove("header__menu--side-bar-open");
  searchClose();
  body.classList.remove("lock");
  headerMenu.style.paddingRight = `${remToPixels(1.125)}px`;
  body.style.paddingRight = 0;
}
