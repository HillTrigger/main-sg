import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".forecast__cards", {
  modules: [Navigation],
  slidesPerView: 3,

  navigation: {
    nextEl: ".forecast__right-btn",
    prevEl: ".forecast__left-btn",
  },
  simulateTouch: false,
  spaceBetween: 44,
  slidesPerGroup: 1,
  centeredSlides: true,
});
