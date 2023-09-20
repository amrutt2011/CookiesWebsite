history.scrollRestoration = "manual";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.7,
  }
);

const backInUp = document.querySelectorAll(".backInUp");
backInUp.forEach((el) => observer.observe(el));

const rotateInLeft = document.querySelectorAll(".slideInLeft");
rotateInLeft.forEach((el) => observer.observe(el));

const zoomInUp = document.querySelectorAll(".zoomInUp");
zoomInUp.forEach((el) => observer.observe(el));