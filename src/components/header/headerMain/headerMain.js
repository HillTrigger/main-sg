import { changeSubTitle } from "./js/changeSubTitle";
import { changeTitle } from "./js/changeTitle";
import { handleClick } from "./js/handleClick";
import { preloadBackImg } from "./js/preload";

let pagination = document.querySelector(".header__pagination");
// let paginationActive = document.querySelector(
//   ".header__pagination-page--active"
// );

pagination.addEventListener("click", handleClick);

preloadBackImg();

document.addEventListener("DOMContentLoaded", function () {
  changeTitle();
  changeSubTitle();
});
