// Menú móvil (hamburguesa)
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
    e.preventDefault(); // Evita recarga

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;

    // Cambiar texto del botón
    submitBtn.innerHTML = "Enviando...";

    // Enviar datos a Formspree
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
        form.reset(); // Limpia el formulario
        submitBtn.innerHTML = originalText; // Restaura botón
      } else {
        throw new Error("Error en la respuesta");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Hubo un error al enviar el mensaje. Por favor, intenta más tarde.");
      submitBtn.innerHTML = originalText;
    });
  });
}
