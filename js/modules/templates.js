const projetos = [
  { titulo:"Alimentação para Todos", descricao:"Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.", categoria:"Doações", status:"Em andamento", destaque:false, imagem:true },
  { titulo:"Campanha do Agasalho", descricao:"Arrecadação de roupas e agasalhos para pessoas que necessitam de apoio durante o inverno.", categoria:"Voluntariado", status:"Campanha sazonal", destaque:true, imagem:false }
];

export function gerarCardsProjetos() {
  return projetos.map((projeto, indice) => `
    <article class="card" id="${indice === 0 ? "alimentacao" : "agasalho"}">
      <div>
        <span class="badge ${projeto.destaque ? "badge-destaque" : ""}">${projeto.status}</span>
        <h2>${projeto.titulo}</h2>
        ${projeto.imagem ? `<picture><source srcset="../imagens/projeto-voluntariado.png" type="image/png"><img src="../imagens/projeto-voluntariado.jpg" alt="Voluntários da ONG Mãos Solidárias organizando doações de alimentos"></picture>` : ""}
        <p>${projeto.descricao}</p><p><strong>Categoria:</strong> ${projeto.categoria}</p>
      </div>
      <div class="actions"><a class="btn ${projeto.destaque ? "btn-secondary" : ""}" href="#cadastro">${projeto.destaque ? "Ser voluntário" : "Quero contribuir"}</a></div>
    </article>`).join("");
}

export function templateInicio() {
  return `<section class="grid-12 hero"><div class="hero-copy"><span class="eyebrow">Solidariedade que transforma</span><h1>ONG Mãos Solidárias</h1><p class="muted">Promovemos ações sociais para apoiar pessoas em situação de vulnerabilidade e aproximar voluntários de iniciativas que fazem diferença.</p><div class="actions"><a class="btn" href="#projetos">Conheça os projetos</a><a class="btn btn-secondary" href="#cadastro">Quero participar</a></div></div><div class="hero-media"><picture><source srcset="../imagens/ong-maos-solidarias.png" type="image/png"><img src="../imagens/ong-maos-solidarias.jpg" alt="Voluntários da ONG Mãos Solidárias participando de uma ação social"></picture></div></section>
  <section class="section grid-12"><article class="col-6"><h2>Quem Somos</h2><p>A ONG Mãos Solidárias é dedicada a promover ações sociais e ajudar pessoas em situação de vulnerabilidade.</p></article><article class="col-6"><h2>Nossa Missão</h2><p>Transformar vidas por meio da solidariedade, da inclusão social e do trabalho voluntário.</p></article></section>
  <section class="section"><div class="alert" role="status"><strong>Campanha ativa:</strong> estamos recebendo alimentos não perecíveis para o projeto Alimentação para Todos.</div><button class="btn" type="button" data-abrir-modal>Como posso ajudar?</button></section>
  <section class="section"><h2>Contato</h2><p>E-mail: contato@maossolidarias.org.br<br>Telefone: (11) 99999-9999<br>São Paulo - SP</p></section>`;
}

export function templateProjetos() {
  return `<section class="section"><span class="eyebrow">Nossas iniciativas</span><h1>Projetos Sociais</h1><p class="muted">Conheça algumas das ações desenvolvidas pela ONG e descubra como participar.</p></section><section class="cards">${gerarCardsProjetos()}</section><section class="section"><div class="alert" role="status"><strong>Doações e voluntariado:</strong> escolha sua forma de participação no cadastro para que nossa equipe possa entrar em contato.</div></section>`;
}

const erro = (id) => `<p class="mensagem-erro" id="erro-${id}" aria-live="polite"></p>`;
export function templateCadastro() {
  return `<section class="section"><span class="eyebrow">Faça parte</span><h1>Cadastro de Apoiadores</h1><p class="muted">Preencha os dados abaixo. A validação em JavaScript fornece feedback durante o preenchimento.</p></section>
  <form id="form-cadastro" novalidate>
    <fieldset><legend>Dados Pessoais</legend><div class="grid-12">
      <div class="field col-6"><label for="nome">Nome completo</label><input type="text" id="nome" name="nome" placeholder="Seu nome completo" required>${erro("nome")}</div>
      <div class="field col-6"><label for="cpf">CPF</label><input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>${erro("cpf")}</div>
      <div class="field col-6"><label for="email">E-mail</label><input type="email" id="email" name="email" placeholder="nome@exemplo.com" required>${erro("email")}</div>
      <div class="field col-6"><label for="telefone">Telefone</label><input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999" required>${erro("telefone")}</div>
      <div class="field col-6"><label for="nascimento">Data de nascimento</label><input type="date" id="nascimento" name="nascimento" required>${erro("nascimento")}</div>
    </div></fieldset>
    <fieldset><legend>Endereço</legend><div class="grid-12">
      <div class="field col-4"><label for="cep">CEP</label><input type="text" id="cep" name="cep" placeholder="00000-000" required>${erro("cep")}</div>
      <div class="field col-8"><label for="endereco">Endereço</label><input type="text" id="endereco" name="endereco" placeholder="Rua e número" required>${erro("endereco")}</div>
      <div class="field col-6"><label for="cidade">Cidade</label><input type="text" id="cidade" name="cidade" placeholder="Cidade" required>${erro("cidade")}</div>
      <div class="field col-6"><label for="estado">Estado</label><input type="text" id="estado" name="estado" placeholder="Estado" required>${erro("estado")}</div>
    </div></fieldset>
    <fieldset><legend>Forma de Participação</legend><div class="radio-group"><input type="radio" id="doador" name="participacao" value="Doador" required><label for="doador">Doador</label><input type="radio" id="voluntario" name="participacao" value="Voluntário"><label for="voluntario">Voluntário</label></div><p class="mensagem-erro" id="erro-participacao" aria-live="polite"></p></fieldset>
    <div class="actions"><button class="btn" type="submit">Enviar cadastro</button><button class="btn" type="button" disabled>Em breve: área do apoiador</button></div>
  </form>
  <section class="section"><h2>Cadastros armazenados neste navegador</h2><p class="muted">Esta lista demonstra a recuperação dos dados persistidos com localStorage.</p><ul id="lista-cadastros" class="lista-cadastros"></ul></section>`;
}
