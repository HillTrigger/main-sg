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
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);

let elements = [...document.querySelectorAll(".stats__stat")];

for (let elm of elements) {
  observer.observe(elm);
}
