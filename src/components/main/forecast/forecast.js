import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { remToPixels } from "../../javascript/remToPixels";

let mobileWidth = remToPixels(36);
console.log(mobileWidth);
const swiper = new Swiper(".forecast__cards", {
  modules: [Navigation],
  slidesPerView: 1,
  width: remToPixels(16.375),
  navigation: {
    nextEl: ".forecast__right-btn",
    prevEl: ".forecast__left-btn",
  },
  simulateTouch: false,
  spaceBetween: remToPixels(2.75),
  slidesPerGroup: 1,
  centeredSlides: false,

  breakpoints: {
    [+mobileWidth]: {
      width: remToPixels(26.75),
    },
    // [remToPixels(36)]: {
    //   slidesPerView: 2, // Количество слайдов, которые будут отображаться
    //   spaceBetween: remToPixels(3), // Пространство между слайдами
    // },
  },
});
