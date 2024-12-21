let count = document.querySelector(".header__pagination-current");

let headerBg = document.querySelector(".header__bg");
let lastPage = 2;

export function handleClick(e) {
  let target = e.target.closest(".header__pagination-page");
  if (target) {
    let page = target.dataset.page;
    // console.log(page);

    headerBg.classList.remove(`header__bg--${lastPage}`);
    void headerBg.offsetWidth;
    headerBg.classList.add(`header__bg--${page}`);
    lastPage = page;

    // Меняем активный page
    document
      .querySelector(".header__pagination-page--active")
      .classList.remove("header__pagination-page--active");
    target.classList.add("header__pagination-page--active");

    //меняем счётчик страницы
    count.textContent = "0" + page;

    //меняем текст
    let lastTitle = document.querySelector(`.header__title--active`);
    let currentTitle = document.querySelector(`.header__title--${page}`);
    lastTitle.classList.remove("header__title--active");
    currentTitle.classList.add("header__title--active");

    //меняем саб-текст
    let lastSubTitle = document.querySelector(`.header__sub-title--active`);
    let currentSubTitle = document.querySelector(`.header__sub-title--${page}`);
    lastSubTitle.classList.remove("header__sub-title--active");
    currentSubTitle.classList.add("header__sub-title--active");
  }
}
// function chooseBg(page) {
//   document.querySelector('.header__bg--')
// }
