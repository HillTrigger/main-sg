function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      let element = change.target;
      element.classList.add("element-show");
      if (element.classList.contains("stats__stat")) {
        console.log(element);
        switch (+element.dataset.index) {
          case 1:
            element.querySelector(".odometor-stats--1").innerHTML = 25;
            return;
          case 2:
            element.querySelector(".odometor-stats--2").innerHTML = 1.2;
            break;
          case 3:
            element.querySelector(".odometor-stats--3").innerHTML = 378;
            return;
          default:
            return;
        }
      }
      if (element.classList.contains("strategies__title")) {
        element
          .querySelector(".strategies__line")
          .classList.add("element-show");
      }
      if (element.classList.contains("populars__main-title")) {
        element.querySelector(".populars__line").classList.add("element-show");
      }
      if (element.classList.contains("forecast__card-title")) {
        element.querySelector(".populars__line").classList.add("element-show");
      }
    }
  });
} // populars__line
let options = {
  threshold: [0.3],
};
let observer = new IntersectionObserver(onEntry, options);

let elements = [
  ...document.querySelectorAll(".stats__stat"),
  document.querySelector(".strategies__title"),
  ...document.querySelectorAll(".strategies__card"),
  document.querySelector(".populars__main-title"),
  ...document.querySelectorAll(".populars__card"),
  document.querySelector(".populars__all-products"),
  document.querySelector(".forecast__top"),
  ...document.querySelectorAll(".forecast__card"),
  document.querySelector(".main__subscribe"),
  document.querySelector(".main__question"),
];
console.log(elements);
for (let elm of elements) {
  observer.observe(elm);
}
