export function closeContacts() {
  let dropdownArrow = document.querySelector(".header__dropdown-arrow");
  let contacts = document.querySelector(".header__contacts");
  contacts.classList.add("hidden"); // Закрываем дропдаун, если клик был вне его
  dropdownArrow.classList.remove("header__dropdown-arrow--open");
}
