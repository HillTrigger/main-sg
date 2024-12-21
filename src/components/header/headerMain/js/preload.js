export function preloadBackImg() {
  const images = [
    "./assests/header/headerMain/back1.jpg",
    "./assests/header/headerMain/back2.jpg",
    "./assests/header/headerMain/back3.jpg",
    "./assests/header/headerMain/back4.jpg",
  ];

  // Проходим по всем изображениями и предзагружаем их
  images.forEach((src) => {
    const img = new Image(); // Создаем новый объект Image
    img.src = src; // Устанавливаем путь к изображению
  });
}
