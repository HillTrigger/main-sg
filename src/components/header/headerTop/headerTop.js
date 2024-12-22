import { handleDropdown } from "./js/handleDropdown";
import { handleScroll } from "./js/handleScroll";

window.addEventListener("scroll", handleScroll); // УПРАВЛЕНИЕ ВИДИМОСТЬЮ HEADER TOP

let dropdown = document.querySelector(".header__dropdown");
let dropdownArrow = document.querySelector(".header__dropdown-arrow");
let contacts = document.querySelector(".header__contacts");

dropdown.addEventListener("click", (e) =>
  handleDropdown(e, contacts, dropdownArrow)
);

/**ЗАКРЫТИЕ DROPDOWN */
document.addEventListener("click", function (e) {
  if (!contacts.contains(e.target) && e.target !== dropdown) {
    contacts.classList.add("hidden"); // Закрываем дропдаун, если клик был вне его
    dropdownArrow.classList.remove("header__dropdown-arrow--open");
  }
});
