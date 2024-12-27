import "./js/handleSearch";

import { handleDropdown } from "./js/handleDropdown";
import { handleScroll } from "./js/handleScroll";
import { closeSearchInput } from "./js/closeSearchInput";
import { closeContacts } from "./js/closeContacts";
import { openSideBar } from "./js/openSideBar";
import { closeSideBar } from "./js/closeSideBar";

window.addEventListener("scroll", handleScroll); // УПРАВЛЕНИЕ ВИДИМОСТЬЮ HEADER TOP

/* ======================= HEADER DROPDOWN ======================= */
let dropdown = document.querySelector(".header__dropdown");
let dropdownArrow = document.querySelector(".header__dropdown-arrow");
let contacts = document.querySelector(".header__contacts");

dropdown.addEventListener("click", (e) =>
  handleDropdown(e, contacts, dropdownArrow)
);
/* ======================= HEADER DROPDOWN ======================= */

/* ======================= SEARCH INPUT ======================= */
const searchBtn = document.querySelector(".header__search");
const searchInput = document.querySelector(".header__top-input");
const closeSearchInputBtn = document.querySelector(".header__search-close");

searchBtn.addEventListener("click", () => {
  searchInput.classList.add("header__top-input--active");
  setTimeout(() => {
    searchInput.focus();
  }, 1000);
});

closeSearchInputBtn.addEventListener("click", () => {
  closeSearchInput();
});
/* ======================= SEARCH INPUT ======================= */

/* ======================= SIDE BAR MENU ======================= */

const burgerBtn = document.querySelector(".header__burger");
const sideMenu = document.querySelector(".header__side-menu");

burgerBtn.addEventListener("click", (e) => {
  if (burgerBtn.contains(e.target)) {
    if (!burgerBtn.classList.contains("header__burger--active")) {
      openSideBar();
    } else {
      closeSideBar();
    }
  }
});

/* ======================= SIDE BAR MENU ======================= */
const headerTopInner = document.querySelector(".header__top-inner");

document.addEventListener("click", function (e) {
  if (!contacts.contains(e.target) && e.target !== dropdown) {
    closeContacts();
  }
  if (!searchInput.contains(e.target) && !searchBtn.contains(e.target)) {
    closeSearchInput();
  }
  if (
    !sideMenu.contains(e.target) &&
    !burgerBtn.contains(e.target) &&
    !headerTopInner.contains(e.target)
  ) {
    closeSideBar();
  }
});
