const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-vertical");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});