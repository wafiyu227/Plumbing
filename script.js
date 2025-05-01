// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

const slides = document.querySelector(".slides");
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showNextTestimonial() {
  index = (index + 1) % testimonials.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextTestimonial, 5000); // change every 3 seconds
