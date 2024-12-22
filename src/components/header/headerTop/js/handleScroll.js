let lastScrollTop = 0; // Запоминаем предыдущую позицию прокрутки
let headerTop = document.querySelector(".header__top");

export function handleScroll() {
  /*  НАСТРОЙКИ ВИДИМОСТИ HEADER TOP */
  let currentScroll = window.scrollY; // Текущая позиция прокрутки

  if (currentScroll > lastScrollTop) {
    headerTop.classList.add("hidden-top");
    // console.log("Прокрутка вниз");
  } else if (currentScroll < lastScrollTop) {
    headerTop.classList.remove("hidden-top");
    // headerTop.classList.add("visible-top");
    // console.log("Прокрутка вверх");
  }

  lastScrollTop = currentScroll;

  if (currentScroll > 0) {
    headerTop.style.backgroundColor = "white";
  } else {
    headerTop.style.backgroundColor = "transparent";
  }

  /*  НАСТРОЙКИ ВИДИМОСТИ HEADER CONTACTS */
  document.querySelector(".header__contacts").classList.add("hidden");
}
