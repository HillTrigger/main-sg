import { searchClose } from "../sideMenu/js/searchClose";
import { closeContacts } from "./closeContacts";
import { closeSearchInput } from "./closeSearchInput";
import { headerTopInnerActive } from "./headerTopInnerActive";
import { headerTopInnerRemove } from "./headerTopInnerRemove";

let lastScrollTop = 0; // Запоминаем предыдущую позицию прокрутки
let headerTop = document.querySelector(".header__top");
let headerTopInner = document.querySelector(".header__top-inner");
const burgerBtn = document.querySelector(".header__burger");

export function handleScroll() {
  let currentScroll = window.scrollY; // Текущая позиция прокрутки

  if (currentScroll > lastScrollTop) {
    headerTop.classList.add("hidden-top");
  } else if (currentScroll < lastScrollTop) {
    headerTop.classList.remove("hidden-top");
  }

  lastScrollTop = currentScroll;

  if (currentScroll > 0) {
    headerTopInnerActive(headerTopInner);
  } else if (!burgerBtn.classList.contains("header__burger--active")) {
    headerTopInnerRemove(headerTopInner);
  }

  closeContacts();
  closeSearchInput();
  // searchClose();
  // closeSideBar();
}
