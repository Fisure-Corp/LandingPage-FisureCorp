const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-vertical");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

function mostrarSeccion(nombre) {
  const inicio = document.getElementById("inicio");
  if (inicio) inicio.style.display = "none";

  document.querySelectorAll(".seccion").forEach((seccion) => {
    seccion.classList.add("oculto");
  });

  const seccionMostrar = document.getElementById(`seccion-${nombre}`);
  if (seccionMostrar) {
    seccionMostrar.classList.remove("oculto");
  }
}

function volverMenu() {
  const inicio = document.getElementById("inicio");
  if (inicio) inicio.style.display = "";

  document.querySelectorAll(".seccion").forEach((seccion) => {
    seccion.classList.add("oculto");
  });
}

const mensajes = [];

function mostrarMensajes() {
  const lista = document.getElementById("listaMensajes");
  if (!lista) return;

  lista.innerHTML = "";
  mensajes.forEach((msg) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>Echosafe</strong> <em>(${msg.hora})</em>: ${msg.mensaje}`;
    lista.appendChild(li);
  });
}

function showInlineMessage(target, message) {
  if (!target) return;
  target.textContent = message;
  target.classList.add("visible");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chatForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("mensaje");
      const mensaje = input ? input.value.trim() : "";

      if (!mensaje) {
        alert("Escribe un mensaje para tus contactos.");
        return;
      }

      mensajes.push({
        mensaje,
        hora: new Date().toLocaleTimeString("es-PE", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
      mostrarMensajes();
      form.reset();
    });
  }

  document.querySelectorAll("[data-risk-filter]").forEach((select) => {
    select.addEventListener("change", () => {
      document.querySelectorAll(".risk-zone").forEach((zone, index) => {
        zone.classList.toggle("pulse", index % 2 === 0);
      });
    });
  });

  document.querySelectorAll("[data-refresh-risk]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-live-clock]").forEach((clock) => {
        clock.textContent = new Date().toLocaleTimeString("es-PE", {
          hour: "2-digit",
          minute: "2-digit",
        });
      });
      const timer = document.getElementById("liveTimer");
      if (timer) timer.textContent = "ahora";
      button.textContent = "Mapa actualizado";
    });
  });

  document.querySelectorAll("[data-route-select]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".ruta-card").forEach((card) => {
        card.classList.remove("selected");
      });
      const card = button.closest(".ruta-card");
      if (card) card.classList.add("selected");
      button.textContent = "Ruta seleccionada";
    });
  });

  document.querySelectorAll("[data-share-location]").forEach((button) => {
    button.addEventListener("click", () => {
      const result = document.querySelector("[data-contact-result]");
      showInlineMessage(result, "Ubicacion en tiempo real compartida con tu contacto.");
    });
  });

  document.querySelectorAll("[data-emergency-alert]").forEach((button) => {
    button.addEventListener("click", () => {
      const result = document.querySelector("[data-contact-result]");
      showInlineMessage(result, "Alerta rapida enviada con tu ubicacion actual.");
    });
  });

  document.querySelectorAll("[data-safe-arrival]").forEach((button) => {
    button.addEventListener("click", () => {
      const result = document.querySelector("[data-contact-result]");
      showInlineMessage(result, "Llegada segura confirmada automaticamente.");
    });
  });

  document.querySelectorAll("[data-validate-report], [data-discard-report]").forEach((button) => {
    button.addEventListener("click", () => {
      const article = button.closest("article");
      if (!article) return;
      const action = button.hasAttribute("data-validate-report") ? "confirmado" : "descartado";
      article.classList.add("validated");
      const span = article.querySelector("span");
      if (span) span.textContent = `Reporte ${action} por la comunidad.`;
    });
  });

  document.querySelectorAll("[data-report-form]").forEach((reportForm) => {
    reportForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const result = document.querySelector("[data-report-result]");
      showInlineMessage(result, "Reporte anonimo enviado. La ubicacion fue detectada automaticamente.");
      reportForm.reset();
    });
  });
});
