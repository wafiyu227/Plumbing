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

// Testimonial Slider
const testimonialsContainer = document.querySelector('.testimonials-container');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function moveToSlide(index) {
    testimonialsContainer.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentIndex = index;
}

// Add click event to dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        moveToSlide(index);
    });
});

// Auto slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    moveToSlide(currentIndex);
}, 5000);
