const arrowUp = document.querySelector(".footer__arrow-up");
const mobileArrowUp = document.querySelector(".footer__mobile-arrow-up");
// Добавляем обработчик события клика для прокрутки вверх
arrowUp.addEventListener("click", goTop);
mobileArrowUp.addEventListener("click", goTop);
// Добавляем обработчик события прокрутки
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    arrowUp.style.display = "none"; // Скрываем кнопку
  } else {
    arrowUp.style.display = "block"; // Показываем кнопку
  }
});

// Скрываем кнопку при загрузке страницы, если позиция вверху
if (window.scrollY === 0) {
  arrowUp.style.display = "none";
}

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавный переход
  });
}
