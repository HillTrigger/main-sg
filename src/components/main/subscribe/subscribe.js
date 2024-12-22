const slider = document.querySelector(".switch__input");
const checkboxes = document.querySelectorAll(".checkbox__inp");

const settings = document.querySelector(".subscribe__settings");

slider.addEventListener("change", function () {
  if (this.checked) {
    for (let el of checkboxes) {
      el.checked = true;
    }
  } else {
    for (let el of checkboxes) {
      el.checked = false;
    }
  }
});

settings.addEventListener("click", (e) => {
  if (e.target.closest(".subscribe__switch")) return;
  const allChecked = Array.from(checkboxes).every((el) => el.checked);
  const allNoChecked = Array.from(checkboxes).every((el) => !el.checked);

  if (allChecked) {
    slider.checked = true;
    // } else if (allNoChecked) {
    //   slider.checked = false;
  } else {
    slider.checked = false;
  }
});
