 // Mobile menu toggle
 const menuToggle = document.querySelector('.menu-toggle');
 const mobileMenu = document.getElementById('mobileMenu');
 menuToggle.addEventListener('click', () => {
     mobileMenu.classList.toggle('open');
 });
 // Optional: Close menu when clicking a link
 mobileMenu.querySelectorAll('a').forEach(link => {
     link.addEventListener('click', () => {
         mobileMenu.classList.remove('open');
     });
 });