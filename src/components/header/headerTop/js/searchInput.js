import { closeSearchInput } from "./closeSearchInput";

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
