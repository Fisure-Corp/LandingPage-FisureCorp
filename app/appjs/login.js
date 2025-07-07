const form = document.querySelector('form[name="loginForm"]');

form.addEventListener("submit", (event) => {
  const fuser = form.elements["usuario"].value;
  const fpassword = form.elements["contraseña"].value;

  if (!fuser || !fpassword) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else {
    const confirmation = confirm("Está a punto de enviar el formulario, ¿Desea continuar?");
    if (!confirmation) {
      event.preventDefault();
    } else {
      event.preventDefault();
      window.location.href = "apppages/alumno-index.html";
    }
  }
});
