export function handleDropdown(e, contacts, dropdownArrow) {
  e.stopPropagation();
  if (!!e.target.closest(".header__contacts")) return;

  if (contacts.classList.contains("hidden")) {
    openDropdown(contacts, dropdownArrow);
  } else {
    closeDropdown(contacts, dropdownArrow);
  }
}

function openDropdown(contacts, dropdownArrow) {
  contacts.classList.remove("hidden");
  dropdownArrow.classList.add("header__dropdown-arrow--open");
}

function closeDropdown(contacts, dropdownArrow) {
  contacts.classList.add("hidden");
  dropdownArrow.classList.remove("header__dropdown-arrow--open");
}
