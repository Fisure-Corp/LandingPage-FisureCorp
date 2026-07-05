let tipoUsuario = "";

function mostrarCampos(tipo) {
  document.querySelectorAll(".campo-pasajero").forEach((campo) => {
    campo.style.display = tipo === "pasajero" ? "block" : "none";
  });

  document.querySelectorAll(".campo-conductor").forEach((campo) => {
    campo.style.display = tipo === "conductor" ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btnPasajero = document.getElementById("btnPasajero");
  const btnConductor = document.getElementById("btnConductor");
  const opciones = document.getElementById("opciones");
  const formulario = document.getElementById("registerForm");
  const btnVolver = document.getElementById("btnVolver");
  const titulo = document.getElementById("tituloRegistro");

  btnPasajero.addEventListener("click", () => {
    tipoUsuario = "pasajero"; // guardamos el tipo
    opciones.style.display = "none";
    formulario.style.display = "block";
    titulo.textContent = "Registro de Pasajero";
    mostrarCampos(tipoUsuario);
  });

  btnConductor.addEventListener("click", () => {
    tipoUsuario = "conductor"; // guardamos el tipo
    opciones.style.display = "none";
    formulario.style.display = "block";
    titulo.textContent = "Registro de Conductor";
    mostrarCampos(tipoUsuario);
  });

  btnVolver.addEventListener("click", () => {
    formulario.style.display = "none";
    opciones.style.display = "block";
    titulo.textContent = "Registrarse";
    formulario.reset();
  });

  mostrarCampos(tipoUsuario);
});

const form = document.querySelector('form[name="registerForm"]');

if (form) {
  form.addEventListener("submit", (event) => {
    const nombre = form.elements["nombre"].value.trim();
    const celular = form.elements["celular"].value.trim();
    let formularioCompleto = false;

    if (tipoUsuario === "pasajero") {
      const apellidos = form.elements["apellidos"].value.trim();
      const ocupacion = form.elements["ocupacion"].value.trim();
      formularioCompleto = nombre && apellidos && ocupacion && celular;
    } else if (tipoUsuario === "conductor") {
      const apellido = form.elements["apellido"].value.trim();
      const modeloCarro = form.elements["modeloCarro"].value.trim();
      const placa = form.elements["placa"].value.trim();
      formularioCompleto = nombre && apellido && modeloCarro && placa && celular;
    }

    if (!formularioCompleto) {
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

        // Redirigir dependiendo del tipo de usuario
        let destino = "dashboard.html"; // fallback
        if (tipoUsuario === "pasajero") {
          destino = "apppages/pasajero-index.html";
        } else if (tipoUsuario === "conductor") {
          destino = "apppages/conductor-index.html";
        }

        setTimeout(() => {
          window.location.href = destino;
        }, 2000);
      }
    }
  });
}