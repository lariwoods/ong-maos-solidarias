import { obterCadastros, salvarCadastro } from "./storage.js";

const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
const regexCEP = /^\d{5}-\d{3}$/;

function atualizarEstado(campo, valido, mensagem = "") {
  const erro = campo.parentElement?.querySelector(".mensagem-erro");
  campo.classList.toggle("campo-erro", !valido);
  campo.classList.toggle("campo-sucesso", valido);
  campo.setAttribute("aria-invalid", String(!valido));
  if (erro) erro.textContent = valido ? "" : mensagem;
  return valido;
}

export function validarCampo(campo) {
  const valor = campo.value.trim();
  if (!valor) return atualizarEstado(campo, false, "Este campo é obrigatório.");
  if (campo.name === "cpf" && !regexCPF.test(valor)) return atualizarEstado(campo, false, "Informe o CPF no formato 000.000.000-00.");
  if (campo.name === "telefone" && !regexTelefone.test(valor)) return atualizarEstado(campo, false, "Informe o telefone no formato (11) 99999-9999.");
  if (campo.name === "cep" && !regexCEP.test(valor)) return atualizarEstado(campo, false, "Informe o CEP no formato 00000-000.");
  if (campo.name === "email" && !campo.validity.valid) return atualizarEstado(campo, false, "Informe um e-mail válido.");
  return atualizarEstado(campo, true);
}

export function validarFormulario(form) {
  const campos = [...form.querySelectorAll("input:not([type='radio'])")];
  const camposValidos = campos.map(validarCampo).every(Boolean);
  const participacao = form.querySelector("input[name='participacao']:checked");
  const erroParticipacao = form.querySelector("#erro-participacao");
  if (erroParticipacao) erroParticipacao.textContent = participacao ? "" : "Escolha uma forma de participação.";
  return camposValidos && Boolean(participacao);
}

export function restaurarCadastros() {
  const lista = document.getElementById("lista-cadastros");
  if (!lista) return;
  const cadastros = obterCadastros();
  lista.innerHTML = "";
  if (cadastros.length === 0) {
    const item = document.createElement("li"); item.textContent = "Nenhum cadastro armazenado ainda."; lista.appendChild(item); return;
  }
  cadastros.forEach((cadastro) => {
    const item = document.createElement("li");
    item.textContent = `${cadastro.nome} - ${cadastro.formaParticipacao}`;
    lista.appendChild(item);
  });
}

export function iniciarFormulario() {
  const app = document.getElementById("app");
  app.addEventListener("input", (event) => {
    if (event.target.matches("#form-cadastro input:not([type='radio'])")) validarCampo(event.target);
  });
  app.addEventListener("submit", (event) => {
    if (!event.target.matches("#form-cadastro")) return;
    event.preventDefault();
    const form = event.target;
    if (!validarFormulario(form)) return;
    const dados = new FormData(form);
    const cadastro = {
      nome: dados.get("nome"), cpf: dados.get("cpf"), email: dados.get("email"), telefone: dados.get("telefone"),
      nascimento: dados.get("nascimento"), cep: dados.get("cep"), endereco: dados.get("endereco"), cidade: dados.get("cidade"), estado: dados.get("estado"),
      formaParticipacao: dados.get("participacao")
    };
    salvarCadastro(cadastro);
    restaurarCadastros();
    form.reset();
    form.querySelectorAll(".campo-sucesso,.campo-erro").forEach(el => el.classList.remove("campo-sucesso","campo-erro"));
    if (window.Swal) Swal.fire({icon:"success",title:"Cadastro realizado!",text:"Seus dados foram salvos com sucesso.",confirmButtonText:"Continuar"});
    else alert("Cadastro realizado! Seus dados foram salvos com sucesso.");
  });
}
