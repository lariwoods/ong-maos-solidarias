import { templateInicio, templateProjetos, templateCadastro } from "./templates.js";
import { restaurarCadastros } from "./form.js";

const routes = { inicio: templateInicio, projetos: templateProjetos, cadastro: templateCadastro };

export function renderizarRota() {
  const app = document.getElementById("app");
  const rota = window.location.hash.replace("#", "") || "inicio";
  const template = routes[rota] || routes.inicio;
  app.innerHTML = "";
  app.innerHTML = template();
  if (rota === "cadastro") restaurarCadastros();
  document.querySelector(".main-nav")?.classList.remove("ativo");
  document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
}

export function iniciarNavegacao() {
  window.addEventListener("hashchange", renderizarRota);
  renderizarRota();
}
