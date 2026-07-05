const form = document.querySelector('form[name="loginForm"]');
const recoverPassword = document.getElementById("recoverPassword");

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

  if (fuser === "pasajero") {
    window.location.href = "apppages/pasajero-index.html";
  } else if (fuser === "conductor") {
    window.location.href = "apppages/conductor-index.html";
  } else {
    alert("Usuario no reconocido. Use 'pasajero' o 'conductor'.");
  }
});

if (recoverPassword) {
  recoverPassword.addEventListener("click", () => {
    alert("Se envio un enlace de recuperacion al correo asociado a tu cuenta.");
  });
}
