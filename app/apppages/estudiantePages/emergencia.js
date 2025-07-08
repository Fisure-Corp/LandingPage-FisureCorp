document.addEventListener("DOMContentLoaded", function () {
  const textoElemento = document.querySelector(".informacion h3");
  const botonAyuda = document.querySelector(".boton-ayuda");
  const botonEstoyBien = document.querySelector(".boton-estoybien");

  botonAyuda.addEventListener("click", function () {
    textoElemento.textContent = "¡AYUDA!";
  });

  botonEstoyBien.addEventListener("click", function () {
    textoElemento.textContent = "Estoy bien";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const textoElemento = document.querySelector(".informacion h3");
  const botonAyuda = document.querySelector(".boton-ayuda");
  const botonEstoyBien = document.querySelector(".boton-estoybien");
  const botonUbicacion = document.querySelector(".boton-ubicacion");
  const botonChat = document.querySelector(".boton-chat");

  // Botones simples
  botonAyuda.addEventListener("click", function () {
    textoElemento.textContent = "¡AYUDA!";
  });

  botonEstoyBien.addEventListener("click", function () {
    textoElemento.textContent = "Estoy bien";
  });

  // Botones con navegación interna
  botonUbicacion.addEventListener("click", function () {
    mostrarSeccion("seccion-ubicacion");
  });

  botonChat.addEventListener("click", function () {
    mostrarSeccion("seccion-chat");
  });
});

function mostrarSeccion(id) {
  // Oculta la sección principal
  document.getElementById("seccion-principal").classList.add("oculto");

  // Oculta otras secciones
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach((sec) => sec.classList.add("oculto"));

  // Muestra la sección seleccionada
  document.getElementById(id).classList.remove("oculto");
}

function volverMenu() {
  // Oculta todas las secciones
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach((sec) => sec.classList.add("oculto"));

  // Muestra pantalla principal
  document.getElementById("seccion-principal").classList.remove("oculto");
}
function enviarMensaje(e) {
  if (e) e.preventDefault(); // Evita que el formulario recargue la página

  const input = document.getElementById("mensajeChat");
  const lista = document.getElementById("listaMensajes"); 

  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
    input.value = "";
  }
}