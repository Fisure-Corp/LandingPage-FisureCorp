const form = document.querySelector('form[name="loginForm"]');

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita el envío por defecto desde el inicio

  const fuser = form.elements["usuario"].value.trim().toLowerCase();
  const fpassword = form.elements["contraseña"].value;

  if (!fuser || !fpassword) {
    alert("Por favor, complete todos los campos del formulario");
    return;
  }

  const confirmation = confirm("Está a punto de enviar el formulario, ¿Desea continuar?");
  if (!confirmation) return;

  if (fuser === "alumno") {
    window.location.href = "apppages/alumno-index.html";
  } else if (fuser === "familiar") {
    window.location.href = "apppages/familiar-index.html";
  } else {
    alert("Usuario no reconocido. Use 'alumno' o 'familiar'.");
  }
});
