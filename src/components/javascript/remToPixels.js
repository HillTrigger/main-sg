export function remToPixels(rem) {
  // Получаем размер шрифта в пикселях для корневого элемента (обычно это 'html')
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  // Переводим значение rem в пиксели
  return rem * rootFontSize;
}
