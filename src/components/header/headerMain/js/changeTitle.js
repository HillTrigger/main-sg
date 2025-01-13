import { transformTitleToHTML } from "./transformTitleToHtml";

export function changeTitle() {
  let currentBgActive = document.querySelector(".header__bg.active");
  const currentTitleEl = document.querySelector(".header__title");
  let currentTitle = currentBgActive.dataset.title;
  currentTitleEl.innerHTML = transformTitleToHTML(currentTitle);
}
