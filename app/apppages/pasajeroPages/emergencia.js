document.addEventListener("DOMContentLoaded", () => {
  const estado = document.querySelector(".informacion h3");
  const detalle = document.querySelector(".informacion p");
  const botonAyuda = document.querySelector(".boton-ayuda");
  const botonEstoyBien = document.querySelector(".boton-estoybien");
  const botonUbicacion = document.querySelector(".boton-ubicacion");
  const botonChat = document.querySelector(".boton-chat");

  if (botonAyuda) {
    botonAyuda.addEventListener("click", () => {
      estado.textContent = "SOS enviado";
      detalle.textContent = "Tus contactos recibieron una alerta con ubicacion en tiempo real.";
    });
  }

  if (botonEstoyBien) {
    botonEstoyBien.addEventListener("click", () => {
      estado.textContent = "Llegada segura confirmada";
      detalle.textContent = "Tus contactos fueron notificados automaticamente.";
    });
  }

  if (botonUbicacion) {
    botonUbicacion.addEventListener("click", () => mostrarSeccion("seccion-ubicacion"));
  }

  if (botonChat) {
    botonChat.addEventListener("click", () => mostrarSeccion("seccion-chat"));
  }
});

function mostrarSeccion(id) {
  document.getElementById("seccion-principal").classList.add("oculto");
  document.querySelectorAll(".seccion").forEach((sec) => sec.classList.add("oculto"));
  document.getElementById(id).classList.remove("oculto");
}

function volverMenu() {
  document.querySelectorAll(".seccion").forEach((sec) => sec.classList.add("oculto"));
  document.getElementById("seccion-principal").classList.remove("oculto");
}

function enviarMensaje(e) {
  if (e) e.preventDefault();

  const input = document.getElementById("mensajeChat");
  const lista = document.getElementById("listaMensajes");
  const mensaje = input ? input.value.trim() : "";

  if (!mensaje || !lista) return;

  const li = document.createElement("li");
  li.textContent = `Contacto de confianza: ${mensaje}`;
  lista.appendChild(li);
  input.value = "";
}
