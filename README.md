````markdown
# ONG Mãos Solidárias

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento Front-End do curso de Análise e Desenvolvimento de Sistemas.

A aplicação apresenta a ONG fictícia Mãos Solidárias e reúne informações institucionais, projetos sociais e uma área de cadastro para participação como doador ou voluntário.

## Funcionalidades

- Navegação dinâmica no formato SPA (Single Page Application).
- Apresentação dos projetos sociais da ONG.
- Formulário para cadastro de doadores e voluntários.
- Validação de dados com JavaScript.
- Persistência dos cadastros no navegador com localStorage.
- Feedback visual após o envio do formulário.
- Interface responsiva para diferentes tamanhos de tela.
- Recursos de acessibilidade em desenvolvimento conforme WCAG 2.1 nível AA.

## Tecnologias utilizadas

- HTML5 para estruturação semântica do conteúdo.
- CSS3 para estilização, responsividade e estados visuais.
- JavaScript ES6+ para interatividade e manipulação do DOM.
- ES Modules para organização e modularização do código.
- localStorage para persistência de dados no navegador.
- SweetAlert2 para mensagens de confirmação.
- Git e GitHub para versionamento e gerenciamento do projeto.

## Estrutura do projeto

```text
ong-maos-solidarias/
├── css/
│   └── style.css
├── html/
│   └── index.html
├── imagens/
├── js/
│   ├── main.js
│   └── modules/
│       ├── navigation.js
│       ├── templates.js
│       ├── form.js
│       └── storage.js
└── README.md
```

## Execução local

O projeto não utiliza gerenciador de pacotes nem possui dependências que precisem ser instaladas localmente.

Como a aplicação utiliza ES Modules, recomenda-se executá-la por meio de um servidor HTTP local em vez de abrir o arquivo diretamente pelo protocolo `file://`.

Passos:

1. Obtenha uma cópia dos arquivos do repositório.
2. Mantenha a estrutura de pastas do projeto.
3. Utilize um servidor HTTP local de sua preferência.
4. Acesse o arquivo `html/index.html` pelo endereço fornecido pelo servidor.
5. Navegue entre as páginas e funcionalidades da aplicação pelo navegador.

A biblioteca SweetAlert2 é carregada por CDN e, por isso, não exige instalação no projeto.

## Versionamento

O projeto utiliza Git e GitHub para controle de versões, com uma estratégia baseada no GitFlow.

- `main`: destinada à versão estável e às versões de lançamento.
- `develop`: concentra o código em desenvolvimento e a integração das alterações.
- `feature/`: utilizada para desenvolver funcionalidades e melhorias específicas separadamente.
- `hotfix/`: prevista para correções urgentes em versões estáveis quando necessário.

As alterações são registradas por meio de commits descritivos e semânticos. Pull Requests são utilizados para documentar e revisar integrações entre branches antes do merge.

## Acessibilidade

O projeto está passando por melhorias de acessibilidade com base nas recomendações da WCAG 2.1 nível AA.

Entre os pontos planejados estão navegação por teclado, foco visível, aprimoramento de atributos ARIA, mensagens acessíveis em formulários, gerenciamento de foco, verificação de contraste e revisão da estrutura semântica.

## Armazenamento de dados

Os cadastros realizados na aplicação são armazenados no `localStorage` do navegador. Os dados permanecem disponíveis após o recarregamento da página no mesmo navegador, até que o armazenamento local seja removido.

## Biblioteca externa

O projeto utiliza SweetAlert2 para apresentar uma mensagem de confirmação após a realização de um cadastro. A biblioteca é carregada diretamente por CDN.

## Autoria

Projeto acadêmico desenvolvido por Larissa dos Santos Soares no curso de Análise e Desenvolvimento de Sistemas.
````
