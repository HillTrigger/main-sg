import { transformSubTitleToHTML } from "./transformSubTitleToHTML";

export function changeSubTitle() {
  let currentBgActive = document.querySelector(".header__bg.active");
  const currentSubTitleEl = document.querySelector(".header__sub-title");
  let currentSubTitle = currentBgActive.dataset.subtitle;
  currentSubTitleEl.innerHTML = transformSubTitleToHTML(currentSubTitle);
  currentSubTitleEl.classList.remove("active");
  void currentSubTitleEl.offsetWidth;
  currentSubTitleEl.classList.add("active");
}
