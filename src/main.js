console.log("hello world");
import "./css/main.css";
import "./css/servicio.css";

// animacion texto servicio
document.addEventListener("DOMContentLoaded", () => {
  const fadeUps = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Deja de observar una vez que aparece
        }
      });
    },
    {
      threshold: 0.35, // Aparece cuando el 15% del elemento es visible
    }
  );

  fadeUps.forEach((el) => {
    observer.observe(el);
  });
});
