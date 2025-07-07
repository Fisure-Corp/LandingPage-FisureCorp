document.addEventListener("DOMContentLoaded", () => {
  const btnAlumno = document.getElementById("btnAlumno");
  const btnFamiliar = document.getElementById("btnFamiliar");
  const opciones = document.getElementById("opciones");
  const formulario = document.getElementById("registerForm");
  const btnVolver = document.getElementById("btnVolver");
  const titulo = document.getElementById("tituloRegistro");

  btnAlumno.addEventListener("click", () => {
    opciones.style.display = "none";
    formulario.style.display = "block";
    titulo.textContent = "Registro de Alumno";
  });

  btnFamiliar.addEventListener("click", () => {
    opciones.style.display = "none";
    formulario.style.display = "block";
    titulo.textContent = "Registro de Familiar";
  });

  btnVolver.addEventListener("click", () => {
    formulario.style.display = "none";
    opciones.style.display = "block";
    titulo.textContent = "Registrarse";
    formulario.reset(); // Limpiar campos si deseas
  });
});


const form = document.querySelector('form[name="registerForm"]');

if (form) {
  form.addEventListener("submit", (event) => {
    const nombre = form.elements["nombre"].value.trim();
    const email = form.elements["email"].value.trim();
    const contraseña = form.elements["contraseña"].value.trim();

    if (!nombre || !email || !contraseña) {
      event.preventDefault();
      alert("Por favor, complete todos los campos del formulario");
    } else {
      const confirmation = confirm(
        "Está a punto de enviar el formulario, ¿Desea continuar?"
      );
      if (!confirmation) {
        event.preventDefault();
      } else {
        event.preventDefault();

        alert("Formulario enviado correctamente. Redirigiendo...");

        // Simula envío y redirige a otra página
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 2000);
      }
    }
  });
}

