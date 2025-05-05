var nombre = " Cumpleañer@ ";
var fecha = "04 Mayo 2025";

var elementosUp = document.querySelectorAll(".fade-up");
var elementosDown = document.querySelectorAll(".fade-down");
var elementosIn = document.querySelectorAll(".fade-in");
var elementosRight = document.querySelectorAll(".fade-right");
var elementosLeft = document.querySelectorAll(".fade-left");
var elementosFlip = document.querySelectorAll(".fade-flip");

document.addEventListener("DOMContentLoaded", function () {
  document.title = "Cumpleaño " + nombre;

  document
    .querySelectorAll(".namecumple")
    .forEach((el) => (el.textContent = nombre));
  document.querySelectorAll(".fecha").forEach((el) => (el.textContent = fecha));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elementosUp.forEach((el) => observer.observe(el));
  elementosDown.forEach((el) => observer.observe(el));
  elementosIn.forEach((el) => observer.observe(el));
  elementosRight.forEach((el) => observer.observe(el));
  elementosLeft.forEach((el) => observer.observe(el));
  elementosFlip.forEach((el) => observer.observe(el));
});
