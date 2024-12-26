function remToPixels(rem) {
  // Получаем размер шрифта в пикселях для корневого элемента (обычно это 'html')
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  // Переводим значение rem в пиксели
  return rem * rootFontSize;
}

let minHeight = remToPixels(17.625);
let debounceTimeout;

export function changeHeight() {
  // Очищаем предыдущий таймер, если он существует
  clearTimeout(debounceTimeout);
  let cards = document.querySelectorAll(".populars__card");
  // Устанавливаем новый таймер
  debounceTimeout = setTimeout(() => {
    for (let card of cards) {
      let width = card.offsetWidth;
      let height = width * 0.73;
      let filter = card.querySelector(".populars__filter");

      if (height <= minHeight) {
        card.style.height = `${minHeight}px`;
        filter.style.height = `${minHeight}px`;
      } else {
        card.style.height = `${height}px`;
        filter.style.height = `${height}px`;
      }
    }
  }, 200); // 200 миллисекунд задержка (можно настроить)
}
