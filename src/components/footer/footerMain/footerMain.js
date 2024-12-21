const footerMain = document.querySelector(".footer__main");
const footerText = document.querySelector(".footer__inner");

// Функция для обновления высоты родителя
function updateFooterHeight() {
  const footerHeight = footerText.offsetHeight; // Высота дочернего элемента
  footerMain.style.height = `${footerHeight}px`; // Устанавливаем padding-bottom на родителе
  const windowHeight = window.innerHeight;

  // Если высота футера больше высоты окна, добавляем прокрутку
  if (footerHeight > windowHeight) {
    footerText.style.position = "relative";
  } else {
    footerText.style.position = "fixed";
  }
}

document.addEventListener("DOMContentLoaded", updateFooterHeight);

// Также можно вызвать эту функцию при изменении размера окна
window.addEventListener("resize", updateFooterHeight);
//568px для мобилок
