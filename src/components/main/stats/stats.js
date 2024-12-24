import "odometer/themes/odometer-theme-default.css";
import Odometer from "odometer";

new Odometer({
  el: document.querySelector(".odometor-stats--1"),
  value: 11,
  format: "",
  theme: "default",
});

new Odometer({
  el: document.querySelector(".odometor-stats--2"),
  value: 9,
  format: "(,ddd),d",
  theme: "default",
});

new Odometer({
  el: document.querySelector(".odometor-stats--3"),
  value: 111,
  format: "(,ddd)",
  theme: "default",
});
