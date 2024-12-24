import { closeContacts } from "./closeContacts";
import { closeSearchInput } from "./closeSearchInput";

let lastScrollTop = 0; // Запоминаем предыдущую позицию прокрутки
let headerTop = document.querySelector(".header__top");
let headerTopInner = document.querySelector(".header__top-inner");

export function handleScroll() {
  let currentScroll = window.scrollY; // Текущая позиция прокрутки

  if (currentScroll > lastScrollTop) {
    headerTop.classList.add("hidden-top");
  } else if (currentScroll < lastScrollTop) {
    headerTop.classList.remove("hidden-top");
  }

  lastScrollTop = currentScroll;

  if (currentScroll > 0) {
    headerTopInner.style.backgroundColor = "white";
    headerTopInner.style.borderBottom = "1px #e0e0e0 solid";
  } else {
    headerTopInner.style.backgroundColor = "transparent";
    headerTopInner.style.borderBottom = "none";
  }

  closeContacts();
  closeSearchInput();
}
