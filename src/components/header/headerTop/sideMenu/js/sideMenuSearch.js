import { searchClose } from "./searchClose";
import { searchOpen } from "./searchOpen";

const searchCloseBtn = document.querySelector(".side-menu__search-close");
const searchOpenBtn = document.querySelector(".header__search-mobile");

searchCloseBtn.addEventListener("click", searchClose);
searchOpenBtn.addEventListener("click", searchOpen);
