// Menú móvil (si lo agregas)
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

if (mobileMenu && navbar) {
  mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

// Formulario de contacto
const form = document.getElementById("formulario-contacto");

if (form) {
  form.addEventListener("submit", function(e) {
    // No necesitas e.preventDefault() si quieres que se envíe
    // Pero si usas solo alert(), sí lo necesitas
    e.preventDefault();

    // Aquí puedes agregar un spinner o mensaje de carga
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Enviando...";

    // Enviar el formulario usando fetch
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert("Gracias por tu mensaje. Nos contactaremos contigo pronto.");
        form.reset();
        submitBtn.innerHTML = originalText;
      } else {
        throw new Error("Error al enviar");
      }
    })
    .catch(error => {
      alert("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.");
      submitBtn.innerHTML = originalText;
    });
  });
}
