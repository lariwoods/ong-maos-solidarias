import { iniciarNavegacao } from "./modules/navigation.js";
import { iniciarFormulario } from "./modules/form.js";

function setModal(aberto) {
  const modal = document.querySelector(".modal-backdrop");
  if (!modal) return;
  modal.classList.toggle("ativo", aberto);
  modal.setAttribute("aria-hidden", String(!aberto));
  if (aberto) modal.querySelector(".modal-close")?.focus();
}

function iniciarEventosGlobais() {
  const app = document.getElementById("app");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  toggle?.addEventListener("click", () => {
    const ativo = nav.classList.toggle("ativo");
    toggle.setAttribute("aria-expanded", String(ativo));
  });
  app.addEventListener("click", (event) => {
    if (event.target.closest("[data-abrir-modal]")) setModal(true);
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-fechar-modal]")) setModal(false);
    if (event.target.classList.contains("modal-backdrop")) setModal(false);
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") setModal(false); });
}

document.addEventListener("DOMContentLoaded", () => {
  iniciarEventosGlobais();
  iniciarFormulario();
  iniciarNavegacao();
});
