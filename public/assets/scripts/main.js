// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-horizontal");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Evento al enviar el formulario de contacto
/*document
  .getElementById("formularioContacto")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío real del formulario

    // Muestra el mensaje de confirmación
    const mensaje = document.getElementById("mensajeEnviado");
    mensaje.style.display = "block";

    // Opcional: limpiar el formulario
    //this.reset();

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 5000);
  });
*/
// VALIDACION DE FORMULARIO
const form = document.querySelector('form[name="frm"]');

form.addEventListener("submit", (event) => {
    const fname = form.elements["nombres"].value;
    const flastname = form.elements["apellidos"].value;
    const femail = form.elements["email"].value;
    const fphone = form.elements["telefono"].value;

    if (!fname || !flastname || !femail || !fphone) {
        event.preventDefault();
        alert("Por favor, complete todos los campos del formulario");
    } else if (!validateEmail(femail)) {
        event.preventDefault();
        alert("Por favor, ingrese un correo válido");
    } else {
        const confirmation = confirm(
            "Está a punto de enviar el formulario, ¿Desea continuar?"
        );
        if (!confirmation) {
            event.preventDefault();
        } else {
            event.preventDefault();
            const mensaje = document.getElementById("mensajeEnviado");
            mensaje.style.display = "block";
            setTimeout(() => {
                mensaje.style.display = "none";
            }, 5000);
            form.reset();
        }
    }
});
//CREAR FUNCION validateEmail(femail)
function validateEmail(femail) {
    const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return re.test(femail);
}
