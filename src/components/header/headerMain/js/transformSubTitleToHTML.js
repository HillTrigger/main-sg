export function transformSubTitleToHTML(text) {
  return text.replace(/(\+ [\d.,]+%)/, "<span>$1</span>");
}
