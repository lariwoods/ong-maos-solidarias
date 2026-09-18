const CHAVE = "cadastrosMaosSolidarias";

export function obterCadastros() {
  const dados = localStorage.getItem(CHAVE);
  if (!dados) return [];
  try {
    const cadastros = JSON.parse(dados);
    return Array.isArray(cadastros) ? cadastros : [];
  } catch (erro) {
    console.error("Não foi possível ler os cadastros armazenados:", erro);
    return [];
  }
}

export function salvarCadastro(novoCadastro) {
  const cadastros = obterCadastros();
  cadastros.push(novoCadastro);
  localStorage.setItem(CHAVE, JSON.stringify(cadastros));
}
