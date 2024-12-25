import { closeContacts } from "./closeContacts";
import { closeSearchInput } from "./closeSearchInput";
import { closeSideBar } from "./closeSideBar";

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
    headerTopInner.classList.add("header__top-inner--active");
  } else if (!burgerBtn.classList.contains("header__burger--active")) {
    headerTopInner.classList.remove("header__top-inner--active");
  }

  closeContacts();
  closeSearchInput();
  closeSideBar();
}
