// Formulario de contacto
const form = document.getElementById("formulario-contacto");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Enviando...";

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
        throw new Error("Error");
      }
    })
    .catch(() => {
      alert("Hubo un error. Intenta más tarde.");
      submitBtn.innerHTML = originalText;
    });
  });
}
