var nombreNovios = " Novio / Novia ";
var fechaBoda = "04 Mayo 2025";
var colorBoda = "---";

var elementos = document.querySelectorAll(".fade-up");

document.addEventListener("DOMContentLoaded", function () {
  document.title = "Boda " + nombreNovios;

  document
    .querySelectorAll(".novios")
    .forEach((el) => (el.textContent = nombreNovios));
  document
    .querySelectorAll(".fecha")
    .forEach((el) => (el.textContent = fechaBoda));
  document
    .querySelectorAll(".colorBoda")
    .forEach((el) => (el.textContent = colorBoda));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elementos.forEach((el) => observer.observe(el));
});
