const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-vertical");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

function mostrarSeccion(nombre) {
    // Oculta el menú principal
    document.getElementById("inicio").style.display = "none";

    // Oculta todas las secciones
    document.querySelectorAll(".seccion").forEach(seccion => {
      seccion.classList.add("oculto");
    });

    // Muestra la sección correspondiente
    const seccionMostrar = document.getElementById(`seccion-${nombre}`);
    if (seccionMostrar) {
      seccionMostrar.classList.remove("oculto");
    }
  }

  function volverMenu() {
    // Muestra el menú principal
    document.getElementById("inicio").style.display = "block";

    // Oculta todas las secciones
    document.querySelectorAll(".seccion").forEach(seccion => {
      seccion.classList.add("oculto");
    });
  }

  let mensajes = [];

// Evento del formulario de chat
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("chatForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener datos
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!mensaje) {
      alert("Por favor, completa ambos campos.");
      return;
    }

    // Guardar el mensaje
    const nuevoMensaje = {
      mensaje,
      hora: new Date().toLocaleTimeString(),
    };
    mensajes.push(nuevoMensaje);

    // Mostrar en pantalla
    mostrarMensajes();

    // Limpiar campos
    form.reset();
  });
});

function mostrarMensajes() {
  const lista = document.getElementById("listaMensajes");
  lista.innerHTML = "";

  mensajes.forEach((msg) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>Mensajero</strong> <em>(${msg.hora})</em>: ${msg.mensaje}`;
    lista.appendChild(li);
  });
}


