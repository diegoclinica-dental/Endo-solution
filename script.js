// Menú móvil
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
document.getElementById("formulario-contacto").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
  this.reset();
});
