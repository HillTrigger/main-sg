export function handleDropdown(e, contacts, dropdownArrow) {
  e.stopPropagation();
  if (!!e.target.closest(".header__contacts")) return;

  if (contacts.classList.contains("hidden")) {
    contacts.classList.remove("hidden");
    dropdownArrow.classList.add("header__dropdown-arrow--open");
  } else {
    contacts.classList.add("hidden");
    dropdownArrow.classList.remove("header__dropdown-arrow--open");
  }
}
