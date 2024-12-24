import "odometer/themes/odometer-theme-default.css";
import Odometer from "odometer";

new Odometer({
  el: document.querySelector(".odometor-stats--1"),
  value: 11,
  format: "",
  theme: "default",
});

document.querySelector(".odometor-stats--1").innerHTML = 25;

new Odometer({
  el: document.querySelector(".odometor-stats--2"),
  value: 9,
  format: "(,ddd),d",
  theme: "default",
});

document.querySelector(".odometor-stats--2").innerHTML = 1.2;

new Odometer({
  el: document.querySelector(".odometor-stats--3"),
  value: 111,
  format: "(,ddd)",
  theme: "default",
});

document.querySelector(".odometor-stats--3").innerHTML = 378;
