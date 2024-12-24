import "./js/handleSearch";

import { handleDropdown } from "./js/handleDropdown";
import { handleScroll } from "./js/handleScroll";
import { closeSearchInput } from "./js/closeSearchInput";
import { closeContacts } from "./js/closeContacts";

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

document.addEventListener("click", function (e) {
  if (!contacts.contains(e.target) && e.target !== dropdown) {
    closeContacts();
  }
  if (!searchInput.contains(e.target) && !searchBtn.contains(e.target)) {
    closeSearchInput();
  }
});

// header__burger--active

const burgerBtn = document.querySelector(".header__burger");

burgerBtn.addEventListener("click", (e) => {
  if (burgerBtn.contains(e.target)) {
    burgerBtn.classList.toggle("header__burger--active");
  }
});
