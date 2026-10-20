# Glossário do Workshop de IA

Workshop de IA · 20/10/2026 · Projeto A: SONORA · Projeto B: o site da turma

Este glossário explica, em português simples, as palavras que vão aparecer na tela durante a aula. Não precisa decorar nada. Volte aqui quando travar numa palavra.

## Como usar este glossário

- Os termos estão agrupados por tema. No fim há um [índice alfabético](#indice).
- Cada termo traz: o nome técnico (com a tradução, quando houver), uma definição curta, uma analogia, um exemplo e onde ele aparece no workshop.
- Os termos de inteligência artificial seguem sempre os mesmos campos: **Definição simples**, **Analogia**, **Exemplo** e **Aplicação prática**.
- Muitos termos ficam em inglês porque é assim que você vai vê-los nos programas. A tradução vem entre parênteses.
- **"Conferir na sua versão"** quer dizer que o recurso depende da versão do programa instalado. Teste antes de confiar.
- Os comandos aparecem em blocos de código. Copie com cuidado: um espaço ou um hífen a mais muda tudo.

<a id="sumario"></a>
## Sumário

1. [Computador e arquivos](#sec-computador)
2. [Web e programação](#sec-web)
3. [Arquitetura e internet](#sec-arquitetura)
4. [Banco de dados e segurança](#sec-seguranca)
5. [Git e GitHub](#sec-git)
6. [Inteligência artificial](#sec-ia)
7. [Claude e Claude Code](#sec-claude)
8. [Ferramentas e fluxo de trabalho](#sec-fluxo)
9. [Design e animação](#sec-design)
10. [Custos e limites](#sec-custos)
11. [Índice alfabético](#indice)

---

<a id="sec-computador"></a>
## 1. Computador e arquivos

<a id="sistema-operacional"></a>
### Sistema operacional (operating system, SO)

O programa principal do computador. Ele liga as peças da máquina aos outros programas e cuida de arquivos, janelas e memória.

- **Analogia:** o síndico do prédio. Ninguém mora nele, mas sem ele nada funciona.
- **Exemplo:** Windows 11, macOS e Linux.
- **No workshop:** os comandos mudam um pouco de um sistema para outro. No Windows os caminhos usam `\`; no macOS e no Linux, `/`.

<a id="arquivo"></a>
### Arquivo (file)

Um conjunto de dados salvo com um nome. Pode ser texto, código, imagem, vídeo ou fonte.

- **Analogia:** uma folha guardada dentro de uma gaveta.
- **Exemplo:** `index.html`, `package.json` e `src/main.js`.
- **No workshop:** o site SONORA inteiro é feito de arquivos de texto (código), imagens e fontes.

<a id="pasta"></a>
### Pasta (folder)

Um lugar para agrupar arquivos e outras pastas.

- **Analogia:** uma gaveta com divisórias.
- **Exemplo:** `src/sections/` guarda um arquivo JavaScript para cada seção do site.
- **No workshop:** o SONORA separa o código em `src/`, as imagens em `public/` e os testes em `tests/`. O Projeto B segue a mesma ideia.

<a id="diretorio"></a>
### Diretório (directory)

O nome técnico de pasta. No terminal você sempre "está" dentro de algum diretório, o **diretório atual** (working directory).

- **Analogia:** o cômodo da casa onde você está agora. Os comandos valem para esse cômodo.
- **Exemplo:** `cd meu-site` entra no diretório; `pwd` mostra onde você está (funciona no PowerShell, no Git Bash e no macOS).
- **No workshop:** `npm run dev` só funciona dentro do diretório do projeto, onde fica o `package.json`.

<a id="extensao"></a>
### Extensão (file extension)

As letras depois do último ponto no nome do arquivo. Elas dizem que tipo de arquivo é e qual programa o abre.

- **Analogia:** a etiqueta colorida na pasta do escritório.
- **Exemplo:** `.html` (página), `.css` (estilo), `.js` (código), `.json` (dados), `.md` (texto em Markdown), `.webp` (imagem), `.svg` (desenho vetorial), `.yml` (configuração).
- **No workshop:** o Windows esconde as extensões por padrão. No Explorador de Arquivos, ative Exibir > Mostrar > Extensões de nomes de arquivos.

<a id="caminho-absoluto"></a>
### Caminho absoluto (absolute path)

O endereço completo de um arquivo, a partir da raiz do disco.

- **Analogia:** um endereço com rua, número, cidade e CEP. Funciona de qualquer lugar.
- **Exemplo:** `C:\Users\seu-nome\projetos\meu-site\index.html` (Windows) ou `/Users/seu-nome/projetos/meu-site/index.html` (macOS).
- **No workshop:** é útil para dizer ao Claude exatamente qual arquivo abrir. Dentro do código do site é uma armadilha: só funciona no seu computador.

<a id="caminho-relativo"></a>
### Caminho relativo (relative path)

O endereço de um arquivo a partir de onde você está. `./` quer dizer "esta pasta" e `../`, "a pasta de cima".

- **Analogia:** "segunda porta à esquerda". Depende de onde você está parado.
- **Exemplo:** `src/main.js` importa as seções com caminhos como `./sections/nome-da-secao.js`.
- **No workshop:** o código do site usa caminhos relativos para funcionar igual no seu PC e no GitHub Pages. Nunca deixe `C:\...` dentro do código.

<a id="arquivo-de-configuracao"></a>
### Arquivo de configuração (configuration file)

Um arquivo que guarda ajustes de um programa ou de um projeto, em vez de código que roda.

- **Analogia:** os ajustes de banco e espelho salvos no carro para o próximo motorista.
- **Exemplo:** `package.json` (scripts e dependências), os arquivos `.yml` em `.github/workflows/` (automação no GitHub), `.claude/settings.json` (permissões do Claude Code) e `.gitignore`.
- **No workshop:** o Claude lê e edita esses arquivos. Quando ele mexer em configuração, leia o diff com atenção redobrada.

<a id="executavel"></a>
### Executável (executable)

Um arquivo que o sistema consegue rodar como programa.

- **Analogia:** o eletrodoméstico pronto para ligar na tomada. O manual de instruções você só lê.
- **Exemplo:** no Windows, arquivos `.exe`, como `node.exe` e `git.exe`.
- **No workshop:** no computador do instrutor, o executável do Claude Code vem dentro do app desktop e não está no PATH. Por isso a demo acontece no app.

<a id="path"></a>
### PATH (caminho de busca)

Uma lista de pastas onde o sistema procura executáveis quando você digita o nome de um comando.

- **Analogia:** a agenda de contatos do terminal. Se o nome não está lá, ele não sabe para quem ligar.
- **Exemplo:** digitar `claude` e receber uma mensagem dizendo que o termo não é reconhecido quase sempre é problema de PATH ou de instalação.
- **No workshop:** se `node`, `npm` ou `git` não funcionarem, confira a instalação. Feche e abra o terminal depois de instalar.

<a id="terminal"></a>
### Terminal (linha de comando, command line)

Uma janela onde você conversa com o computador digitando comandos de texto.

- **Analogia:** pedir direto ao garçom em vez de apontar o cardápio. É mais rápido quando você sabe o que pedir.
- **Exemplo:** PowerShell e Git Bash no Windows; o app Terminal no macOS; o terminal que vem dentro do editor de código.
- **No workshop:** rodamos `npm install`, `npm run dev` e os comandos `git` no terminal. O Claude Code também roda comandos de terminal, com a sua permissão.

<a id="comando"></a>
### Comando (command)

Uma instrução de texto que o terminal executa. Costuma ter um nome, argumentos e opções (flags).

- **Analogia:** uma receita curta: "faça isto, com isto, deste jeito".
- **Exemplo:** em `npm install gsap`, `npm` é o programa, `install` é a ação e `gsap` é o argumento. Em `git commit -m "mensagem"`, `-m` é uma flag.
- **No workshop:** os comandos do Projeto B estão nos materiais. Copie e cole em vez de digitar de memória.

<a id="editor-de-codigo"></a>
### Editor de código (code editor)

Um programa para escrever e ler código, com cores, sugestões, busca e terminal embutido.

- **Analogia:** um editor de texto com corretor ortográfico feito para programação.
- **Exemplo:** VS Code.
- **No workshop:** o Claude Code edita os arquivos por você, mas é no editor que você confere o resultado com calma.

<a id="projeto"></a>
### Projeto (project)

A pasta que reúne tudo de um trabalho: código, imagens, configuração, testes e documentação.

- **Analogia:** a caixa do quebra-cabeça, com todas as peças e a foto da tampa.
- **Exemplo:** `sonora/` (Projeto A) e `meu-site/` (Projeto B).
- **No workshop:** abra o Claude Code sempre na pasta do projeto. Ele lê o `CLAUDE.md` dali e começa a trabalhar a partir dela.

<a id="markdown"></a>
### Markdown (.md)

Um jeito simples de formatar texto com símbolos: `#` vira título, `-` vira lista e `**texto**` vira negrito.

- **Analogia:** anotações com marca-texto que qualquer programa entende.
- **Exemplo:** `README.md`, `CLAUDE.md`, `SKILL.md` e este glossário.
- **No workshop:** as instruções para o Claude (CLAUDE.md e skills) são escritas em Markdown.

---

<a id="sec-web"></a>
## 2. Web e programação

<a id="navegador"></a>
### Navegador (browser)

O programa que busca páginas na internet e as desenha na tela.

- **Analogia:** o músico que transforma a partitura (código) em música (a página que você vê).
- **Exemplo:** Chrome, Edge, Safari e Firefox.
- **No workshop:** usamos o Chrome. Os testes do SONORA abrem o Chrome instalado no computador.

<a id="devtools"></a>
### DevTools (ferramentas do desenvolvedor)

Um painel do navegador para inspecionar a página: elementos, estilos, erros e downloads.

- **Analogia:** abrir o capô do carro.
- **Exemplo:** no Chrome, `F12` ou `Ctrl+Shift+I`. A aba Console mostra os erros de JavaScript.
- **No workshop:** se a animação não aparece, o Console costuma dizer por quê. Copie o erro inteiro e cole no Claude.

<a id="html"></a>
### HTML (HyperText Markup Language, linguagem de marcação)

A linguagem da estrutura da página: títulos, parágrafos, imagens, botões e seções.

- **Analogia:** o esqueleto e as paredes da casa.
- **Exemplo:** `<h1>SONORA</h1>`, `<section>` e `<canvas>`.
- **No workshop:** `index.html` é a porta de entrada do SONORA e do Projeto B.

<a id="css"></a>
### CSS (Cascading Style Sheets, folhas de estilo)

A linguagem da aparência: cores, fontes, espaçamentos e posição das coisas na tela.

- **Analogia:** a pintura, os móveis e a iluminação da casa.
- **Exemplo:** `h1 { color: white; font-size: 4rem; }`
- **No workshop:** os estilos do SONORA ficam em `src/styles/*.css`.

<a id="javascript"></a>
### JavaScript (JS)

A linguagem do comportamento: o que acontece quando você clica, rola a página ou espera.

- **Analogia:** a parte elétrica e hidráulica. É ela que faz a casa funcionar.
- **Exemplo:** `src/main.js` liga as seções e as animações do SONORA.
- **No workshop:** todas as animações são escritas em JavaScript com a biblioteca GSAP.

<a id="javascript-puro"></a>
### JavaScript puro (vanilla JS)

JavaScript sem framework por cima. Você escreve direto, sem React, Vue ou similares.

- **Analogia:** cozinhar com ingredientes, sem kit pronto.
- **Exemplo:** o template `vanilla` do Vite, usado no Projeto B.
- **No workshop:** é uma escolha didática. Com menos peças, dá para entender tudo em 3 horas.

<a id="nodejs"></a>
### Node.js

Um programa que roda JavaScript fora do navegador, direto no seu computador.

- **Analogia:** um motor que tira o JavaScript do navegador e o põe para trabalhar na oficina.
- **Exemplo:** `node --version` mostra se o Node.js está instalado.
- **No workshop:** Vite, npm e Playwright precisam do Node.js.

<a id="npm"></a>
### npm (Node Package Manager, gerenciador de pacotes)

A ferramenta que baixa pacotes (código pronto de outras pessoas) e roda os scripts do projeto.

- **Analogia:** um aplicativo de entrega de peças prontas.
- **Exemplo:**

  ```bash
  npm install        # instala tudo o que o projeto pede
  npm install gsap   # adiciona a biblioteca GSAP
  npm run dev        # liga o site no seu computador
  npm run build      # gera a versão final para publicar
  npm test           # roda os testes
  ```

- **No workshop:** o `package.json` do SONORA tem os scripts `dev`, `build`, `preview`, `test` e `frames`.

<a id="package-json"></a>
### package.json e package-lock.json

O `package.json` é a ficha do projeto: nome, scripts e dependências. O `package-lock.json` registra as versões exatas que foram instaladas.

- **Analogia:** a lista de compras (`package.json`) e a nota fiscal com marca e lote de cada item (`package-lock.json`).
- **Exemplo:** no SONORA, `"gsap": "^3.15.0"` aparece nas dependências.
- **No workshop:** os dois arquivos vão para o Git. A pasta `node_modules/` não vai.

<a id="dependencia"></a>
### Dependência (dependency)

Um pacote externo de que o seu projeto precisa para funcionar ou para ser construído.

- **Analogia:** o fermento do bolo. Você não fabrica, mas sem ele não dá certo.
- **Exemplo:** GSAP é dependência do SONORA. Vite e Playwright são dependências de desenvolvimento (`devDependencies`): só servem para construir e testar.
- **No workshop:** cada dependência é código de terceiros dentro do seu projeto. Prefira poucas, conhecidas e de fonte confiável.

<a id="node-modules"></a>
### node_modules

A pasta onde o npm guarda as dependências baixadas. É grande e pode ser recriada a qualquer hora com `npm install`.

- **Analogia:** o estoque do depósito. Dá para repor tudo com a lista de compras.
- **Exemplo:** depois de `npm install`, a pasta `node_modules/` aparece no projeto.
- **No workshop:** nunca edite nem envie essa pasta ao GitHub. Ela fica no `.gitignore`.

<a id="biblioteca"></a>
### Biblioteca (library)

Um conjunto de código pronto que você chama quando precisa.

- **Analogia:** uma caixa de ferramentas. Você decide quando usar cada uma.
- **Exemplo:** GSAP é uma biblioteca de animação.
- **No workshop:** `npm install gsap` adiciona a biblioteca ao Projeto B.

<a id="framework"></a>
### Framework (estrutura de trabalho)

Uma estrutura pronta que define como o projeto se organiza. Você preenche as partes que faltam.

- **Analogia:** a biblioteca é a caixa de ferramentas; o framework é a casa com as paredes já de pé, esperando acabamento.
- **Exemplo:** React, Vue e Next.js. O SONORA não usa framework.
- **No workshop:** projetos de equipe costumam usar framework. Para aprender, o JavaScript puro deixa tudo à vista.

<a id="vite"></a>
### Vite

Uma ferramenta de construção (build tool) com servidor de desenvolvimento. Liga o projeto rápido e atualiza a página quando você salva.

- **Analogia:** a bancada da oficina: monta, testa e embala.
- **Exemplo:** os comandos do Projeto B:

  ```bash
  npm create vite@latest meu-site -- --template vanilla
  cd meu-site
  npm install
  npm install gsap
  npm run dev
  ```

- **No workshop:** é a base do SONORA e do Projeto B.

<a id="servidor-de-desenvolvimento"></a>
### Servidor de desenvolvimento e localhost (dev server)

Um servidor que roda no seu próprio computador para você ver o site enquanto programa. `localhost` é o nome que o computador usa para falar consigo mesmo.

- **Analogia:** o ensaio geral antes da estreia, só para a equipe.
- **Exemplo:** `npm run dev` mostra um endereço como `http://localhost:5173/`. Use o endereço exato que o terminal mostrar.
- **No workshop:** deixe esse terminal aberto. Fechar o terminal desliga o site local. Ninguém fora do seu computador consegue abrir esse endereço.

<a id="hot-reload"></a>
### Hot reload (HMR, recarga automática)

A página se atualiza sozinha quando você salva um arquivo, sem apertar F5.

- **Analogia:** um espelho: mexeu, viu.
- **Exemplo:** o Claude muda a cor do título no CSS e o navegador mostra a nova cor na hora.
- **No workshop:** é assim que a turma acompanha ao vivo as mudanças do Projeto B.

<a id="build"></a>
### Build (construção, empacotamento)

O processo que transforma o código de trabalho em arquivos finais, menores e prontos para publicar.

- **Analogia:** arrumar a cozinha bagunçada e montar as marmitas para entrega.
- **Exemplo:** `npm run build` gera a pasta `dist/`.
- **No workshop:** o deploy publica o resultado do build. Se o build falha, nada vai para o ar.

<a id="teste-automatizado"></a>
### Teste automatizado (automated test)

Um código que confere sozinho se outra parte do código funciona.

- **Analogia:** o checklist do piloto antes de decolar, feito por um robô, sempre do mesmo jeito.
- **Exemplo:** "a página abre, o título aparece e o canvas existe".
- **No workshop:** o SONORA tem testes em `tests/`. Eles rodam com `npm test` e também no CI.

<a id="playwright"></a>
### Playwright

Uma ferramenta que abre um navegador de verdade, sozinha, e clica, rola e confere a página.

- **Analogia:** um robô que usa o site como um visitante e anota o que deu errado.
- **Exemplo:** o SONORA usa `@playwright/test` com o Chrome instalado.
- **No workshop:** é o que roda por baixo do `npm test` no Projeto A.

<a id="json"></a>
### JSON (JavaScript Object Notation)

Um formato de texto para guardar e trocar dados, organizado em chaves e valores.

- **Analogia:** uma ficha de cadastro com campos e respostas.
- **Exemplo:** trecho do `package.json` do SONORA:

  ```json
  {
    "name": "sonora",
    "private": true,
    "dependencies": { "gsap": "^3.15.0" }
  }
  ```

- **No workshop:** `package.json` e `.claude/settings.json` são JSON. Uma vírgula fora do lugar quebra o arquivo inteiro.

<a id="bug"></a>
### Bug e debugging (defeito e depuração)

Bug é um defeito no código. Debugging é investigar a causa e corrigir.

- **Analogia:** o barulho estranho no carro e o mecânico procurando de onde vem.
- **Exemplo:** "a animação trava na metade" → abrir o Console, achar o erro, corrigir, testar de novo.
- **No workshop:** cole a mensagem de erro inteira no Claude e peça primeiro a causa, depois a correção.

---

<a id="sec-arquitetura"></a>
## 3. Arquitetura e internet

<a id="cliente"></a>
### Cliente (client)

Quem pede algo a um servidor. Na web, quase sempre é o navegador.

- **Analogia:** o cliente do restaurante que faz o pedido.
- **Exemplo:** o seu Chrome pedindo a página do SONORA.
- **No workshop:** quando você abre um site, o seu navegador é o cliente.

<a id="servidor"></a>
### Servidor (server)

Um computador, ou programa, que fica esperando pedidos e responde com páginas, dados ou arquivos.

- **Analogia:** a cozinha do restaurante.
- **Exemplo:** os servidores do GitHub Pages entregam os arquivos do SONORA. O `npm run dev` liga um servidor pequeno no seu PC.
- **No workshop:** um site estático só precisa de um servidor que entregue arquivos.

<a id="frontend"></a>
### Frontend

A parte do sistema que a pessoa vê e usa. Roda no navegador.

- **Analogia:** o salão do restaurante: mesas, cardápio, decoração.
- **Exemplo:** o HTML, o CSS e o JavaScript do SONORA.
- **No workshop:** os dois projetos são só frontend.

<a id="backend"></a>
### Backend

A parte que roda no servidor, longe dos olhos: regras de negócio, banco de dados, login e pagamentos.

- **Analogia:** a cozinha e o estoque do restaurante.
- **Exemplo:** o sistema da hamburgueria que recebe o pedido e o grava num banco de dados.
- **No workshop:** não construímos backend hoje. Ele entra quando o site precisa guardar ou processar dados.

<a id="full-stack"></a>
### Full stack (pilha completa)

Quem trabalha com frontend e backend, ou o sistema que tem as duas partes.

- **Analogia:** quem atende no salão e também cozinha.
- **Exemplo:** um app com tela de login, banco de dados e painel de administração.
- **No workshop:** projetos de equipe costumam ser full stack. O SONORA não é.

<a id="url"></a>
### URL (endereço web)

O endereço completo de algo na internet.

- **Analogia:** o endereço postal com rua, número e apartamento.
- **Exemplo:** em `https://movits.github.io/sonora/`, `https` é o protocolo, `movits.github.io` é o domínio e `/sonora/` é o caminho.
- **No workshop:** o link do site publicado e o link de uma pull request são URLs.

<a id="http"></a>
### HTTP (HyperText Transfer Protocol, protocolo de transferência)

As regras da conversa entre navegador e servidor. O navegador pede; o servidor responde com um código e o conteúdo.

- **Analogia:** o combinado entre cliente e garçom: pedido anotado, prato entregue, ou "esse acabou".
- **Exemplo:** código `200` quer dizer que deu certo; `404`, que o arquivo não foi encontrado.
- **No workshop:** um `404` no site publicado costuma ser caminho de arquivo errado.

<a id="https"></a>
### HTTPS (HTTP seguro)

HTTP com cadeado: a conversa vai criptografada, e ninguém no caminho consegue ler.

- **Analogia:** carta em envelope lacrado, em vez de cartão-postal.
- **Exemplo:** o cadeado ao lado do endereço `https://movits.github.io/sonora/`.
- **No workshop:** o GitHub Pages já entrega os sites em HTTPS. Nunca digite senha em site sem HTTPS.

<a id="api"></a>
### API (Application Programming Interface, interface de programação)

Uma porta combinada para um programa pedir coisas a outro, com regras claras de pedido e resposta.

- **Analogia:** o cardápio com o balcão. Você não entra na cozinha; pede pelo cardápio e recebe o prato.
- **Exemplo:** um site de clima pede a previsão a uma API e recebe JSON. O Claude também é oferecido por API, com cobrança por token.
- **No workshop:** aparece nos conectores (que conversam com a API do Notion, por exemplo) e na parte de custos.

<a id="site-estatico"></a>
### Site estático (static site)

Um site feito só de arquivos prontos (HTML, CSS, JavaScript e imagens), iguais para todo mundo, sem backend.

- **Analogia:** um folheto impresso. Todos recebem o mesmo.
- **Exemplo:** o SONORA.
- **No workshop:** por ser estático, o site pode ficar no GitHub Pages sem custo.

<a id="cdn"></a>
### CDN (Content Delivery Network, rede de entrega de conteúdo)

Uma rede de servidores espalhados pelo mundo que entrega arquivos a partir do ponto mais perto de quem pede.

- **Analogia:** filiais de uma loja em vários bairros.
- **Exemplo:** muitos tutoriais carregam o GSAP por um link de CDN.
- **No workshop:** o SONORA não usa CDN. O GSAP vem pelo npm e as fontes ficam no projeto, para nada quebrar se a internet cair.

<a id="deploy"></a>
### Deploy (publicação, implantação)

Colocar uma versão do site ou do sistema no ar para outras pessoas acessarem.

- **Analogia:** tirar o bolo da cozinha e pôr na vitrine.
- **Exemplo:** no SONORA, o GitHub Actions faz o build e publica o resultado no GitHub Pages. O gatilho fica no arquivo do workflow, em `.github/workflows/`.
- **No workshop:** o deploy automático é a etapa técnica final do fluxo de trabalho. Ninguém sobe arquivos à mão.

<a id="hosting"></a>
### Hosting (hospedagem)

O serviço que guarda o seu site num servidor ligado o tempo todo.

- **Analogia:** alugar uma vitrine num shopping.
- **Exemplo:** GitHub Pages, Netlify, Vercel e Cloudflare Pages.
- **No workshop:** o SONORA está no GitHub Pages, grátis porque o repositório é público.

<a id="dominio"></a>
### Domínio (domain)

O nome fácil de lembrar de um site.

- **Analogia:** o nome da loja escrito na fachada.
- **Exemplo:** `movits.github.io` é um subdomínio grátis do GitHub. Um domínio próprio seria algo como `seunome.com.br`.
- **No workshop:** um `.com.br` custa R$40 por ano no Registro.br; um `.com`, cerca de US$10 por ano.

<a id="dns"></a>
### DNS (Domain Name System, sistema de nomes de domínio)

O sistema que traduz o nome do site para o endereço numérico (IP) do servidor.

- **Analogia:** a lista telefônica da internet: você procura pelo nome e recebe o número.
- **Exemplo:** ao digitar `movits.github.io`, o DNS diz ao navegador qual servidor procurar.
- **No workshop:** para pôr um domínio próprio no GitHub Pages, você configura registros DNS no site onde comprou o domínio.

---

<a id="sec-seguranca"></a>
## 4. Banco de dados e segurança

<a id="banco-de-dados"></a>
### Banco de dados (database)

Um sistema para guardar dados de forma organizada e encontrá-los depois com rapidez.

- **Analogia:** um arquivo de fichas bem catalogado.
- **Exemplo:** os pedidos de uma hamburgueria ou as reservas de uma agência de viagens. Serviços como Supabase e Firebase oferecem bancos de dados com plano grátis e limites.
- **No workshop:** o SONORA não tem banco de dados. O quadro do Notion funciona como um banco de dados simples: cada cartão é um registro.

<a id="sql"></a>
### SQL (Structured Query Language, linguagem de consulta estruturada)

A linguagem mais usada para pedir coisas a um banco de dados.

- **Analogia:** o jeito padronizado de pedir uma ficha ao arquivista.
- **Exemplo:**

  ```sql
  SELECT nome, preco FROM produtos WHERE preco < 50;
  ```

- **No workshop:** é só conceito. Não usamos SQL hoje.

<a id="crud"></a>
### CRUD (Create, Read, Update, Delete)

As quatro operações básicas com dados: criar, ler, atualizar e apagar.

- **Analogia:** numa agenda: anotar, consultar, corrigir e riscar.
- **Exemplo:** no quadro do Notion: criar um cartão, ler o cartão, mudar o Status, arquivar.
- **No workshop:** o conector do Notion faz essas operações a seu pedido. Apagar é a que mais pede cuidado.

<a id="autenticacao"></a>
### Autenticação (authentication)

Provar quem você é para um sistema.

- **Analogia:** mostrar o documento na portaria.
- **Exemplo:** entrar no GitHub com sua conta; rodar `gh auth login` no terminal.
- **No workshop:** cada pessoa entra com a própria conta no GitHub, no Claude e no Notion. Não compartilhe senha nem códigos de verificação.

<a id="autorizacao"></a>
### Autorização (authorization)

Decidir o que quem já entrou pode fazer.

- **Analogia:** o crachá. Você entrou no prédio, mas só abre algumas salas.
- **Exemplo:** no GitHub, quem pode fazer merge na `main`. No Claude Code, os modos de permissão decidem o que ele faz sem perguntar.
- **No workshop:** aparece nos modos de permissão do Claude Code e nas permissões dos conectores.

<a id="credencial"></a>
### Credencial (credential)

Qualquer coisa que prova a sua identidade a um sistema: senha, token de acesso, chave de API, código de verificação.

- **Analogia:** a chave de casa.
- **Exemplo:** o token que o `gh` guarda depois do login; a chave de API de um serviço de IA.
- **No workshop:** credencial não vai em prompt, em código, em print de tela nem em repositório.

<a id="chave-de-api"></a>
### Chave de API (API key) e token de acesso (access token)

Um texto secreto e longo que funciona como senha para um programa usar uma API. Não confunda com o [token de IA](#token), que é um pedaço de texto.

- **Analogia:** a chave do cofre entregue a um funcionário de confiança.
- **Exemplo:** a skill scroll-craft aceita uma chave opcional, `KIE_AI_API_KEY`, para gerar imagens num serviço pago.
- **No workshop:** se uma chave vazar, revogue no painel do serviço e crie outra. Apagar o commit não basta.

<a id="variavel-de-ambiente"></a>
### Variável de ambiente (environment variable)

Um valor guardado fora do código, no ambiente onde o programa roda, e lido pelo nome.

- **Analogia:** um recado preso na geladeira. Quem precisa lê, mas ele não está escrito no livro de receitas.
- **Exemplo:** `CLAUDE_CODE_EFFORT_LEVEL` define o effort do Claude Code; `KIE_AI_API_KEY` guarda uma chave.
- **No workshop:** é o lugar certo para segredos, junto com um arquivo `.env` que fica fora do Git.

<a id="arquivo-env"></a>
### .env (arquivo de ambiente)

Um arquivo de texto com variáveis de ambiente, quase sempre com segredos. Ele nunca vai para o Git.

- **Analogia:** o envelope lacrado na gaveta, que não sai do escritório.
- **Exemplo:** uma linha como `API_KEY=...` dentro de `.env`, e `.env` listado no `.gitignore`.
- **No workshop:** é um caso de estudo. A skill scroll-craft procura `.env` em até 8 pastas acima da atual, e o servidor dela serve arquivos ocultos (há uma issue aberta sobre isso). Uma chave pode vazar. Por isso se inspeciona antes de instalar.

<a id="menor-privilegio"></a>
### Princípio do menor privilégio (least privilege)

Dar a cada pessoa ou programa só as permissões necessárias para a tarefa, e nada mais.

- **Analogia:** o manobrista recebe a chave do carro, não a chave de casa.
- **Exemplo:** usar o modo Manual ou Plan enquanto o Claude explora; ligar só os conectores que a tarefa pede.
- **No workshop:** é o critério para escolher modo de permissão, skill, plugin e conector.

---

<a id="sec-git"></a>
## 5. Git e GitHub

<a id="git"></a>
### Git

Um sistema de controle de versões. Ele guarda "fotos" do projeto ao longo do tempo e deixa voltar a qualquer uma.

- **Analogia:** o "salvar jogo" do videogame, com todos os pontos salvos guardados.
- **Exemplo:** `git status` mostra o que mudou; `git log --oneline` mostra o histórico.
- **No workshop:** todo trabalho do Projeto B vira commits no Git.

<a id="github"></a>
### GitHub

Um site que guarda repositórios Git na nuvem e acrescenta colaboração: pull requests, issues, Actions e Pages.

- **Analogia:** o Git é o caderno; o GitHub é a biblioteca onde a equipe guarda e discute os cadernos.
- **Exemplo:** <https://github.com/Movits/sonora>
- **No workshop:** é onde mora o SONORA e onde o Projeto B pode morar.

<a id="repository"></a>
### Repository (repositório, repo)

A pasta do projeto junto com todo o histórico do Git.

- **Analogia:** o álbum com todas as versões do projeto.
- **Exemplo:** `Movits/sonora`, um repositório público.
- **No workshop:** repositório público permite GitHub Pages grátis. Repositório privado precisa de plano pago para usar o Pages.

<a id="local"></a>
### Local (cópia local)

A cópia do repositório que está no seu computador.

- **Analogia:** o rascunho no seu caderno.
- **Exemplo:** a pasta `meu-site/` no seu PC.
- **No workshop:** você e o Claude trabalham na cópia local. O GitHub só muda quando você faz push.

<a id="remote"></a>
### Remote (remoto)

A cópia do repositório que está no servidor, normalmente no GitHub. O nome padrão é `origin`.

- **Analogia:** a cópia oficial guardada na biblioteca.
- **Exemplo:** `git remote -v` mostra para onde o seu repositório envia e de onde recebe.
- **No workshop:** o remoto é a fonte da verdade da equipe.

<a id="clone"></a>
### Clone (clonar)

Baixar uma cópia completa de um repositório remoto, com todo o histórico.

- **Analogia:** tirar uma cópia completa do álbum, com todas as páginas.
- **Exemplo:**

  ```bash
  git clone https://github.com/Movits/sonora.git
  cd sonora
  npm install
  npm run dev
  ```

- **No workshop:** quem quiser explorar o SONORA em casa começa por aqui.

<a id="branch"></a>
### Branch (ramo)

Uma linha paralela de trabalho. Você muda à vontade sem estragar a versão principal.

- **Analogia:** uma cópia do documento para testar ideias. Se ficar bom, junta; se não, descarta.
- **Exemplo:** `git switch -c feat/secao-cardapio`. Prefixos do fluxo: `feat/` (novidade), `fix/` (correção), `docs/` (documentação), `chore/` (manutenção).
- **No workshop:** cada cartão do Notion vira uma branch.

<a id="main"></a>
### main (branch principal)

A branch oficial do projeto. Em muitos projetos, o que está na `main` é o que está no ar.

- **Analogia:** a edição impressa do jornal.
- **Exemplo:** no SONORA, a `main` é a versão publicada no GitHub Pages.
- **No workshop:** ninguém trabalha direto na `main`. Mudança chega por pull request.

<a id="working-tree"></a>
### Working tree (árvore de trabalho)

Os arquivos como estão agora na sua pasta, incluindo mudanças que ainda não viraram commit.

- **Analogia:** a mesa de trabalho com papéis espalhados.
- **Exemplo:** `git status` lista o que mudou no working tree.
- **No workshop:** depois que o Claude edita, as mudanças ficam no working tree. O comando `/diff` do Claude Code mostra quais são.

<a id="staging"></a>
### Staging (área de preparação, index)

O lugar onde você separa o que vai entrar no próximo commit.

- **Analogia:** a caixa onde você põe o que vai mandar pelo correio, antes de lacrar.
- **Exemplo:** `git add index.html` põe um arquivo; `git add .` põe tudo o que mudou.
- **No workshop:** confira o que está no staging antes do commit. É assim que se evita mandar um `.env` por engano.

<a id="commit"></a>
### Commit (registro)

Uma foto salva do projeto, com uma mensagem que explica o que mudou.

- **Analogia:** carimbar e datar uma página do diário.
- **Exemplo:** `git commit -m "feat: adiciona seção de cardápio"`
- **No workshop:** commits em português, no padrão Conventional Commits, com a coautoria do Claude.

<a id="conventional-commits"></a>
### Conventional Commits (commits convencionais)

Um padrão para a mensagem de commit: `tipo: descrição curta`. O tipo diz que tipo de mudança é.

- **Analogia:** etiquetas padronizadas nas caixas de uma mudança: "cozinha", "quarto", "frágil".
- **Exemplo:**

  ```text
  feat: adiciona seção de cardápio com revelação ao rolar

  Como verificar: npm run dev e rolar até "Cardápio".

  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
  ```

  Tipos mais usados: `feat` (novidade), `fix` (correção), `docs` (documentação) e `chore` (manutenção).
- **No workshop:** é o mesmo padrão do fluxo de trabalho do projeto WRW/MMM.

<a id="push"></a>
### Push (enviar)

Mandar os seus commits da cópia local para o remoto.

- **Analogia:** pôr a carta no correio.
- **Exemplo:** `git push -u origin feat/secao-cardapio`
- **No workshop:** depois do push, dá para abrir a pull request.

<a id="pull"></a>
### Pull (puxar)

Trazer os commits novos do remoto e juntar na sua cópia local. É um fetch seguido de um merge.

- **Analogia:** atualizar o seu caderno com o que a equipe escreveu.
- **Exemplo:** `git switch main` e depois `git pull`.
- **No workshop:** antes de começar uma tarefa nova, atualize a `main`.

<a id="fetch"></a>
### Fetch (buscar)

Baixar as novidades do remoto sem mexer nos seus arquivos.

- **Analogia:** olhar a caixa de correio sem abrir as cartas.
- **Exemplo:** `git fetch`
- **No workshop:** é o jeito seguro de ver o que mudou antes de juntar.

<a id="diff"></a>
### Diff (diferença)

A comparação linha a linha entre duas versões. Linhas com `+` entraram; linhas com `-` saíram.

- **Analogia:** o "controlar alterações" do editor de texto.
- **Exemplo:** `git diff` no terminal; `/diff` no Claude Code; a aba "Files changed" da pull request.
- **No workshop:** regra de ouro: leia o diff antes de aceitar a mudança e antes do commit.

<a id="pull-request"></a>
### Pull request (PR, pedido de integração)

Um pedido para juntar uma branch na `main`, com descrição, discussão, revisão e CI.

- **Analogia:** entregar o trabalho ao professor antes de ele ir para o mural.
- **Exemplo:** `gh pr create`. A descrição segue o template: O que muda / Por quê / Como verifiquei / Como validar / Riscos.
- **No workshop:** o link da PR vai para o campo Comprovação do cartão no Notion.

<a id="review"></a>
### Review (revisão)

Outra pessoa, ou outro LLM, lê a PR, testa e aprova ou pede mudanças.

- **Analogia:** o revisor do jornal antes da impressão.
- **Exemplo:** comentários na aba "Files changed" da PR. No Claude Code, `/code-review` faz uma revisão (`/review` é apelido do mesmo comando).
- **No workshop:** quem fez não aprova o próprio trabalho.

<a id="merge"></a>
### Merge (mesclar, juntar)

Juntar o trabalho de uma branch em outra.

- **Analogia:** colar o capítulo revisado no livro oficial.
- **Exemplo:** o botão "Merge pull request" no GitHub, ou `gh pr merge` no terminal.
- **No workshop:** o merge é manual, feito por uma pessoa, depois de CI verde e revisão.

<a id="merge-conflict"></a>
### Merge conflict (conflito de merge)

Acontece quando duas branches mudaram as mesmas linhas e o Git não sabe qual versão manter.

- **Analogia:** duas pessoas corrigiram a mesma frase de jeitos diferentes.
- **Exemplo:** o arquivo ganha marcas assim:

  ```text
  <<<<<<< HEAD
  <h1>Hamburgueria do Bairro</h1>
  =======
  <h1>Burger do Bairro</h1>
  >>>>>>> feat/novo-titulo
  ```

- **No workshop:** peça ao Claude para explicar os dois lados antes de resolver. A decisão é sua.

<a id="issue"></a>
### Issue (ocorrência)

Um registro de problema, ideia ou tarefa no GitHub, com espaço para discussão.

- **Analogia:** um post-it no mural da equipe, com comentários embaixo.
- **Exemplo:** a skill scroll-craft tem uma issue aberta dizendo que o servidor dela entrega arquivos ocultos.
- **No workshop:** no nosso fluxo as tarefas vivem no Notion. Issues servem para bugs e discussões técnicas no próprio repositório.

<a id="revert"></a>
### Revert (reverter)

Cria um commit novo que desfaz um commit antigo. O histórico fica intacto.

- **Analogia:** publicar uma errata em vez de arrancar a página do jornal.
- **Exemplo:** `git revert <hash-do-commit>`
- **No workshop:** é o jeito seguro de desfazer algo que já chegou à `main`.

<a id="restore"></a>
### Restore (restaurar)

Descarta mudanças ainda não commitadas num arquivo, ou tira o arquivo do staging.

- **Analogia:** passar a borracha no rascunho.
- **Exemplo:** `git restore index.html` descarta as mudanças; `git restore --staged index.html` só tira do staging.
- **No workshop:** útil quando o Claude mexeu num arquivo que não devia. Cuidado: o que foi descartado não volta.

<a id="reset"></a>
### Reset (redefinir)

Move a branch para outro commit. Com `--soft`, mantém as mudanças; com `--hard`, apaga tudo o que não foi salvo.

- **Analogia:** voltar o marcador do livro. Com `--hard`, você também arranca as páginas seguintes.
- **Exemplo:** `git reset --soft HEAD~1` desfaz o último commit e mantém os arquivos mudados. Só use antes do push: depois que o commit foi para o GitHub, reescrever o histórico atrapalha a equipe.
- **No workshop:** não use `--hard` em aula, nem como "atalho" para desfazer. Prefira revert (depois do push) ou restore (antes do commit). Na dúvida, peça ajuda antes.

<a id="tag"></a>
### Tag (etiqueta)

Um rótulo fixo num commit, normalmente para marcar uma versão.

- **Analogia:** um marcador de página com nome.
- **Exemplo:** `git tag v1.0.0` e depois `git push origin v1.0.0`.
- **No workshop:** você poderia marcar a versão apresentada no fim da aula, por exemplo `v1.0.0`.

<a id="gitignore"></a>
### .gitignore

Uma lista do que o Git deve ignorar e nunca enviar.

- **Analogia:** a lista de "não levar" de uma mudança.
- **Exemplo:**

  ```text
  node_modules/
  dist/
  .env
  ```

- **No workshop:** o template do Vite já cria um `.gitignore` com `node_modules` e `dist`. Se o projeto tiver segredos, acrescente `.env` antes do primeiro commit.

<a id="github-actions"></a>
### GitHub Actions (ações do GitHub)

O serviço do GitHub que roda tarefas automáticas (workflows) quando algo acontece no repositório. Os workflows ficam em arquivos `.yml` dentro de `.github/workflows/`.

- **Analogia:** um funcionário-robô que, toda vez que chega um pacote, confere e despacha.
- **Exemplo:** no SONORA, o Actions roda os testes e publica o site no GitHub Pages.
- **No workshop:** é a esteira automática do fluxo de trabalho. O resultado aparece na aba Actions e dentro da PR.

<a id="ci-cd"></a>
### CI/CD (integração contínua e entrega contínua)

**CI** (Continuous Integration): a cada PR, testes e build rodam sozinhos. **CD** (Continuous Delivery ou Deployment): depois do merge, o deploy sai sozinho.

- **Analogia:** a inspeção de qualidade de cada peça da linha de montagem, e o caminhão que sai assim que a peça é aprovada.
- **Exemplo:** no fluxo do WRW/MMM, o CI obrigatório roda testes, checagem de tipos (em projetos TypeScript) e build. Sem CI verde, não tem merge.
- **No workshop:** CI verde é pré-requisito do merge, e o deploy automático vem depois.

<a id="github-pages"></a>
### GitHub Pages (páginas do GitHub)

A hospedagem de sites estáticos do GitHub, em endereços como `usuario.github.io/repositorio`.

- **Analogia:** uma vitrine grátis no shopping do GitHub.
- **Exemplo:** <https://movits.github.io/sonora/>
- **No workshop:** é grátis em repositório público. O Projeto B pode ser publicado do mesmo jeito.

<a id="gh"></a>
### gh (GitHub CLI)

Um programa de terminal para usar o GitHub sem abrir o site.

- **Analogia:** o controle remoto do GitHub.
- **Exemplo:**

  ```bash
  gh auth login     # entra na sua conta
  gh repo create    # cria um repositório
  gh pr create      # abre uma pull request
  gh pr view --web  # abre a PR no navegador
  gh pr merge       # faz o merge
  ```

- **No workshop:** o Claude Code usa o `gh` para abrir PRs, sempre com a sua permissão.

---

<a id="sec-ia"></a>
## 6. Inteligência artificial

<a id="ia"></a>
### IA (Inteligência Artificial, Artificial Intelligence, AI)

- **Definição simples:** programas que fazem tarefas que pareciam exigir inteligência humana, como entender texto, reconhecer imagens e tomar decisões simples.
- **Analogia:** um estagiário muito rápido, que leu muita coisa, mas não conhece o seu projeto até você explicar.
- **Exemplo:** o corretor do teclado do celular, a recomendação de vídeos, o Claude.
- **Aplicação prática:** no workshop, a IA escreve código, gera imagens e organiza tarefas. Quem decide, confere e assina é você.

<a id="ia-generativa"></a>
### IA generativa (Generative AI)

- **Definição simples:** IA que cria conteúdo novo (texto, código, imagem, vídeo, áudio) a partir de um pedido.
- **Analogia:** um ilustrador que desenha na hora o que você descreve.
- **Exemplo:** o vídeo do fone montado se abrindo em peças, usado no SONORA, foi gerado no Higgsfield. O código foi escrito com o Claude.
- **Aplicação prática:** use para gerar rascunhos rápidos e depois refinar. Gerar custa créditos ou tokens: planeje antes de apertar o botão.

<a id="llm"></a>
### LLM (Large Language Model, modelo de linguagem grande)

- **Definição simples:** um tipo de IA treinada com enormes quantidades de texto para entender e escrever texto e código. É o "cérebro" de assistentes como o Claude.
- **Analogia:** um autocompletar gigante, que aprendeu padrões de linguagem, de código e de raciocínio.
- **Exemplo:** Claude Opus 5.5 e Claude Sonnet 5.5 são LLMs.
- **Aplicação prática:** o que o LLM sabe do seu projeto vem do que está no contexto: o CLAUDE.md, os arquivos que ele leu e a sua mensagem. Se não está lá, ele não sabe.

<a id="modelo"></a>
### Modelo (model)

- **Definição simples:** uma versão específica de uma IA, com nome, velocidade, qualidade e preço próprios.
- **Analogia:** os modelos de carro de uma mesma marca: compacto, sedã, esportivo.
- **Exemplo:** a família atual do Claude:

  | Modelo | Indicado para |
  |---|---|
  | Fable 5.1 | raciocínio difícil e trabalho longo de agente |
  | Opus 5.5 | código de agente em tarefas longas, trabalho de conhecimento |
  | Sonnet 5.5 | equilíbrio entre velocidade e inteligência |
  | Haiku 5.5 | volume alto e tarefas simples: classificar, extrair, rotear |

- **Aplicação prática:** troque com `/model` no terminal (por exemplo, `/model sonnet`) ou pelo seletor de modelo no app. No dia a dia, Sonnet 5.5 costuma dar o melhor custo-benefício; Opus 5.5 vale para planejar e para tarefas difíceis.

<a id="prompt"></a>
### Prompt (instrução)

- **Definição simples:** a mensagem que você manda para a IA: o pedido, com o contexto e as regras.
- **Analogia:** o briefing que você entrega a um fornecedor. Quanto mais claro, melhor o resultado.
- **Exemplo:**

  ```text
  Crie a seção "Cardápio" do site da hamburgueria em src/sections/.
  Seis itens em grade, com foto, nome e preço.
  Use GSAP para revelar os cards ao rolar e respeite prefers-reduced-motion.
  Não instale nenhuma dependência nova.
  No fim, rode npm run build e me diga o resultado.
  ```

- **Aplicação prática:** um bom prompt diz o objetivo, onde mexer, o que não fazer e como conferir. Para tarefa grande, peça um plano antes.

<a id="token"></a>
### Token (unidade de texto)

- **Definição simples:** o pedacinho de texto que o modelo lê e escreve. Pode ser uma palavra, parte de uma palavra ou um símbolo. Preços e limites são contados em tokens.
- **Analogia:** as fichas do fliperama. Tudo o que entra e tudo o que sai gasta ficha.
- **Exemplo:** uma palavra curta e comum pode ser um token só; uma palavra longa ou um trecho de código vira vários.
- **Aplicação prática:** arquivos enormes e conversas longas gastam mais tokens. `/context` mostra quanto do contexto está ocupado; `/usage` mostra o uso da sessão e do plano.

<a id="contexto"></a>
### Contexto (context)

- **Definição simples:** tudo o que o modelo tem "na mesa" naquele momento: a conversa, as instruções do CLAUDE.md, os arquivos lidos e os resultados das ferramentas.
- **Analogia:** os papéis abertos na mesa do estagiário. O que não está na mesa, ele não vê.
- **Exemplo:** se você não disse que o site é de uma hamburgueria e não há CLAUDE.md, o Claude não tem como saber.
- **Aplicação prática:** dê o contexto útil (objetivo, arquivos, restrições) e corte o inútil. Ao trocar de tarefa, use `/clear` para começar com a mesa limpa.

<a id="janela-de-contexto"></a>
### Janela de contexto (context window)

- **Definição simples:** o tamanho máximo de contexto que o modelo aguenta de uma vez, medido em tokens.
- **Analogia:** o tamanho da mesa. Cabe muita coisa, mas não infinita.
- **Exemplo:** os quatro modelos atuais do Claude têm janela de 1 milhão de tokens. Perto do limite, o Claude Code compacta a conversa sozinho.
- **Aplicação prática:** mesa lotada custa mais, porque tudo é relido a cada pedido. Muitos tokens não fazem o modelo alucinar sozinhos; o risco é de organização: a regra importante fica enterrada, resumida pela compactação ou misturada com outro assunto. Acompanhe com `/context` e compacte ou limpe quando precisar.

<a id="inferencia"></a>
### Inferência (inference)

- **Definição simples:** o momento em que o modelo, já treinado, processa a sua mensagem e gera a resposta.
- **Analogia:** o chef cozinhando o seu pedido. O treino foi a escola de culinária; a inferência é o prato de hoje.
- **Exemplo:** cada vez que o Claude responde ou decide usar uma ferramenta, acontece uma inferência nos servidores da Anthropic, não no seu computador.
- **Aplicação prática:** inferência custa tokens, leva tempo e precisa de internet. Pedidos objetivos economizam as três coisas.

<a id="alucinacao"></a>
### Alucinação (hallucination)

- **Definição simples:** quando a IA afirma algo falso com confiança: um comando que não existe, uma função inventada, um preço errado.
- **Analogia:** o colega que não sabe a resposta e "chuta bonito" em vez de dizer "não sei".
- **Exemplo:** inventar uma opção do GSAP que não existe ou um comando de barra que o Claude Code não tem.
- **Aplicação prática:** peça a fonte, rode o código, rode os testes, consulte a documentação oficial. Regra do workshop: sem prova, escreva "conferir".

<a id="raciocinio"></a>
### Raciocínio (reasoning, thinking)

- **Definição simples:** a etapa em que o modelo "pensa" antes de responder, quebrando o problema em passos.
- **Analogia:** fazer a conta no rascunho antes de passar a limpo.
- **Exemplo:** antes de editar três arquivos, o Claude planeja a ordem das mudanças e o que pode quebrar.
- **Aplicação prática:** mais raciocínio ajuda em tarefas difíceis (bug estranho, decisão de estrutura), mas custa mais tokens e tempo. No Claude Code, quem regula isso é o effort.

<a id="temperatura"></a>
### Temperatura (temperature)

- **Definição simples:** em muitos sistemas de IA, um ajuste de quanta variação a resposta tem. Baixa, mais previsível; alta, mais variada.
- **Analogia:** o botão de "improviso" de um músico.
- **Exemplo:** nos modelos atuais do Claude, a API recusa valores de temperatura fora do padrão, e o Claude Code não tem esse ajuste.
- **Aplicação prática:** no workshop, temperatura é só conceito. Não confunda com effort: temperatura mexe na variação; effort mexe em quanto o modelo pensa e trabalha.

<a id="effort"></a>
### Effort (nível de esforço)

- **Definição simples:** no Claude Code, o quanto o modelo pensa e trabalha em cada resposta. Os níveis são `low`, `medium`, `high`, `xhigh` e `max`.
- **Analogia:** escolher entre uma resposta rápida no corredor e uma reunião de uma hora com quadro branco.
- **Exemplo:** `/effort medium` no terminal; `/effort` sozinho abre um controle deslizante no terminal; no app desktop, o effort fica num seletor da interface. O `max` vale só para a sessão atual.
- **Aplicação prática:** `low` ou `medium` para tarefas simples; `high` para planejar e depurar; `xhigh` e `max` só quando precisar, porque custam mais. O padrão muda por modelo e por versão: confira na sua (`/effort status` mostra o nível atual). Effort não é temperatura.

<a id="agente"></a>
### Agente (agent)

- **Definição simples:** uma IA que não só responde, mas age em ciclos: entende o pedido, usa ferramentas (ler, editar, rodar comandos), confere o resultado e continua até terminar.
- **Analogia:** a diferença entre o consultor que dá conselho por telefone (o chat) e o técnico que vem à sua casa e conserta (o agente).
- **Exemplo:** o Claude Code lê o projeto, cria a seção, roda `npm run build`, vê um erro, corrige e roda de novo.
- **Aplicação prática:** como o agente age no seu computador, você controla o quanto ele faz sozinho com os modos de permissão.

<a id="ferramenta"></a>
### Ferramenta (tool)

- **Definição simples:** uma ação concreta que o modelo pode pedir para executar: ler um arquivo, editar, rodar um comando, buscar na web, chamar um conector.
- **Analogia:** as ferramentas no cinto do técnico. O modelo escolhe qual usar; o programa executa.
- **Exemplo:** no modo Manual, o Claude Code pede licença antes de editar um arquivo ou de rodar `git push`.
- **Aplicação prática:** leia o que a ferramenta vai fazer antes de aprovar, principalmente quando o comando apaga, publica ou envia algo.

<a id="skill"></a>
### Skill (habilidade)

- **Definição simples:** um pacote de instruções (às vezes com scripts) que ensina o Claude a fazer um tipo de tarefa do seu jeito. É uma pasta com um arquivo `SKILL.md`, que traz `name` e `description` no topo (o frontmatter).
- **Analogia:** a receita de família guardada no livro de receitas. O cozinheiro abre quando vai fazer aquele prato.
- **Exemplo:** o SONORA tem `.claude/skills/review-landing/SKILL.md`. Skills do projeto ficam em `.claude/skills/`; as pessoais, em `~/.claude/skills/`. Você chama com `/review-landing`, ou o Claude usa sozinho quando a descrição combina com o pedido. `/skills` lista as instaladas. Um `SKILL.md` mínimo se parece com isto (exemplo simplificado):

  ```markdown
  ---
  name: review-landing
  description: Revisa a landing page antes da PR. Use quando pedirem revisão do site.
  ---
  Passos da revisão...
  ```

- **Aplicação prática:** skills recomendadas, com origem e licença conferidas:

  | Repositório | Skills | Licença |
  |---|---|---|
  | anthropics/skills | frontend-design, webapp-testing, skill-creator | Apache 2.0 |
  | vercel-labs/agent-skills | web-design-guidelines, react-best-practices | MIT |
  | greensock/gsap-skills | skills oficiais da GSAP (ScrollTrigger, performance etc.) | MIT |

  Antes de instalar qualquer skill, leia o que ela faz. A scroll-craft (MIT) é o nosso caso de estudo: procura `.env` em até 8 pastas acima, tem um servidor que entrega arquivos ocultos (issue aberta) e envia imagens a um serviço de terceiros (kie.ai).

<a id="conector"></a>
### Conector (connector)

- **Definição simples:** uma integração pronta que liga o Claude a um serviço externo, como Notion ou Google Drive, usando o seu login e as suas permissões. Por baixo, funciona com MCP.
- **Analogia:** o adaptador de tomada que você liga uma vez e passa a usar sempre.
- **Exemplo:** o conector do Notion deixa o Claude ler e atualizar o quadro "Trabalho | SONORA".
- **Aplicação prática:** ligue só o que a tarefa pede, revise as permissões e confirme cada escrita (criar ou mudar um cartão). Os conectores do claude.ai aparecem em `/mcp` quando a sessão usa o login do claude.ai.

<a id="mcp"></a>
### MCP (Model Context Protocol, protocolo de contexto de modelo)

- **Definição simples:** um padrão aberto que define como uma IA conversa com ferramentas e serviços externos. Cada serviço que segue o padrão vira um "servidor MCP".
- **Analogia:** o USB das IAs: um encaixe padrão para ligar qualquer acessório.
- **Exemplo:**

  ```bash
  claude mcp add --transport http <nome> <url>
  ```

  adiciona um servidor MCP no Claude Code; `/mcp` mostra quais estão conectados e o status de cada um.
- **Aplicação prática:** no workshop, Notion, Google Drive e Higgsfield chegam ao Claude por conector/MCP. Só adicione servidores de fonte confiável: eles leem e escrevem dados em seu nome.

<a id="automacao"></a>
### Automação (automation)

- **Definição simples:** fazer o computador executar sozinho uma tarefa repetitiva, sempre do mesmo jeito, quando algo acontece.
- **Analogia:** o regador automático do jardim, que liga todo dia no mesmo horário.
- **Exemplo:** o GitHub Actions publica o site depois de cada mudança na `main`; um hook do Claude Code roda um script sempre que uma sessão começa.
- **Aplicação prática:** automatize o que é repetitivo e fácil de conferir (testes, build, deploy). Decisões, como aprovar uma PR e fazer o merge, ficam com pessoas.

---

<a id="sec-claude"></a>
## 7. Claude e Claude Code

<a id="claude"></a>
### Claude

O assistente de IA da Anthropic e também o nome da família de modelos (Fable, Opus, Sonnet e Haiku).

- **Analogia:** a marca; os modelos são os produtos da linha.
- **Exemplo:** o Claude no site claude.ai, no app desktop, no celular e por API.
- **No workshop:** usamos o Claude dentro do Claude Code e com conectores.

<a id="claude-code"></a>
### Claude Code

A versão do Claude que trabalha como agente dentro do seu projeto: lê arquivos, edita, roda comandos e usa `git` e `gh`.

- **Analogia:** o Claude do chat é o consultor; o Claude Code é o técnico com a chave da oficina.
- **Exemplo:** existe como CLI (no terminal), no app Claude Desktop (aba Code), no VS Code, no JetBrains, na web (claude.ai/code) e no celular.
- **No workshop:** o Projeto B é construído ao vivo com o Claude Code no app desktop.

<a id="claude-desktop"></a>
### Claude Desktop (aba Code)

O aplicativo do Claude para computador. Ele tem as abas Chat, Cowork e Code. Na aba Code você escolhe a pasta do projeto e conversa com o Claude Code.

- **Analogia:** a mesma oficina, só que com painel de botões em vez de comandos digitados.
- **Exemplo:** modelo, modo de permissão e effort ficam em seletores na interface. Alguns comandos que abrem painel no terminal, como `/permissions` sem argumento, não funcionam no app.
- **No workshop:** no computador do instrutor, o comando `claude` não está no PATH, então a demo é no app. Atalhos de teclado e menus: conferir na sua versão.

<a id="cli"></a>
### CLI (Command Line Interface, interface de linha de comando)

Um programa que você usa pelo terminal, digitando.

- **Analogia:** o painel de botões trocado por um interfone: você fala o que quer.
- **Exemplo:** dentro da pasta do projeto:

  ```bash
  cd meu-site
  claude
  ```

- **No workshop:** quem instalar o Claude Code CLI pode acompanhar pelo terminal. Alguns painéis, como o controle deslizante do `/effort`, só existem lá.

<a id="sessao"></a>
### Sessão (session)

Uma conversa de trabalho com o Claude Code, com o seu próprio contexto.

- **Analogia:** um turno de trabalho com anotações próprias.
- **Exemplo:** `/clear` começa uma sessão nova; `/resume` retoma uma antiga.
- **No workshop:** uma sessão por tarefa deixa o contexto limpo e o uso mais barato.

<a id="comando-de-barra"></a>
### Comando de barra (slash command)

Atalhos digitados na caixa de mensagem do Claude Code, sempre começando com `/`.

- **Analogia:** os botões de atalho do controle remoto.
- **Exemplo:** os mais úteis na aula (conferir na sua versão; alguns abrem painel só no terminal):

  | Comando | Para que serve |
  |---|---|
  | `/help` | ajuda e lista de comandos |
  | `/init` | cria um CLAUDE.md a partir do projeto |
  | `/model` | troca o modelo |
  | `/effort` | ajusta o effort (`/effort status` mostra o atual) |
  | `/plan` | entra no Plan mode |
  | `/skills` | lista as skills |
  | `/mcp` | mostra os servidores MCP e conectores |
  | `/diff` | mostra as mudanças nos arquivos |
  | `/context` | mostra a ocupação do contexto |
  | `/compact` | resume a conversa (aceita instruções) |
  | `/clear` | começa uma conversa nova |
  | `/usage` | mostra o uso e os limites (`/cost` é apelido) |
  | `/permissions` | regras do que pode, do que pergunta e do que é proibido |
  | `/memory` | edita o CLAUDE.md |
  | `/resume` | retoma uma sessão antiga |
  | `/rewind` | volta a um checkpoint |
  | `/config` | abre as configurações |
  | `/status` | abre as configurações na aba Status |
  | `/code-review` | revisa as mudanças (`/review` é apelido) |

  O `/doctor` virou skill empacotada. O `/agents` hoje só mostra um lembrete: subagentes se criam pedindo ao Claude ou em `.claude/agents/`.
- **No workshop:** você não precisa decorar. `/help` lista tudo.

<a id="modos-de-permissao"></a>
### Modos de permissão (permission modes)

Os níveis de liberdade do Claude Code: o que ele faz sozinho e o que precisa perguntar antes.

- **Analogia:** o quanto você deixa o manobrista fazer com o seu carro.
- **Exemplo:**

  | Modo | O que roda sem perguntar |
  |---|---|
  | Manual | só leitura; pede licença para editar e para rodar comandos |
  | Accept edits | leitura, edição de arquivos e comandos simples de pasta (`mkdir`, `mv`, `cp`) |
  | Plan | só leitura; edita depois que você aprova o plano |
  | Auto | quase tudo, com um classificador revisando as ações |
  | Bypass permissions | tudo, sem perguntar; feito para contêiner ou máquina virtual |

  No terminal, `Shift+Tab` alterna entre os modos. No app desktop, o seletor fica abaixo da caixa de mensagem.
- **No workshop:** começamos em Manual ou Plan, passamos para Accept edits quando o plano está claro e não usamos Bypass permissions.

<a id="manual"></a>
### Manual (antes chamado "Ask permissions")

O modo mais cuidadoso: o Claude lê à vontade, mas pede licença antes de editar arquivos e de rodar comandos. Na configuração, o valor dele é `default`.

- **Analogia:** o manobrista pergunta antes de cada manobra.
- **Exemplo:** aparece uma pergunta do tipo "permitir `npm install gsap`?" e você aprova ou recusa.
- **No workshop:** é o modo para depurar e para qualquer ação externa (push, merge, escrita no Notion).

<a id="accept-edits"></a>
### Accept edits (aceitar edições)

O Claude edita arquivos sem perguntar, mas ainda pede licença para a maioria dos comandos.

- **Analogia:** o manobrista pode estacionar, mas não pode sair com o carro do pátio.
- **Exemplo:** o Claude cria `src/sections/` e escreve o CSS direto; quando quiser rodar `git push`, pergunta.
- **No workshop:** é o modo de construção do Projeto B, depois de aprovar o plano. Confira o resultado com `/diff`.

<a id="plan-mode"></a>
### Plan mode (modo de planejamento)

O Claude só lê e propõe um plano. Ele só edita depois que você aprova.

- **Analogia:** o arquiteto entrega a planta antes de começar a obra.
- **Exemplo:** `/plan criar a seção de cardápio com animação de entrada`. No terminal, também dá para entrar com `Shift+Tab`; no app, pelo seletor de modo (lá, o Plan vale só para a sessão). Ao aprovar, você escolhe o modo da execução.
- **No workshop:** é o primeiro passo de toda tarefa grande do Projeto B.

<a id="auto"></a>
### Auto (modo automático)

O Claude age sem pedir licença, e um classificador revisa cada ação. A própria documentação diz que isso não garante segurança.

- **Analogia:** o manobrista dirige sozinho, com um fiscal no banco do passageiro que pode falhar.
- **Exemplo:** nas versões recentes da CLI, a sessão pode já começar em Auto. Olhe o modo antes de mandar a primeira tarefa. Existe em todos os planos, mas exige modelo compatível e pode estar desligado pelo administrador.
- **No workshop:** só numa pasta de demonstração, sem segredos e com tudo no Git.

<a id="bypass"></a>
### Bypass permissions (pular permissões)

O modo que pula todas as perguntas. É feito para rodar dentro de um contêiner ou de uma máquina virtual isolada.

- **Analogia:** entregar a chave do carro e ir embora.
- **Exemplo:** no app desktop, precisa ser ligado nas configurações.
- **No workshop:** existe, mas não usamos. Fica aqui só para você reconhecer o nome.

<a id="regras-de-permissao"></a>
### Regras de permissão (allow, ask, deny)

Listas no arquivo `.claude/settings.json` que dizem quais ações o Claude pode fazer sem perguntar (allow), quais sempre pergunta (ask) e quais são proibidas (deny).

- **Analogia:** a lista da portaria: entra direto, liga antes de deixar subir, não entra de jeito nenhum.
- **Exemplo:** permitir `npm run build` sem perguntar, sempre perguntar antes de `git push` e proibir `git push --force`.
- **No workshop:** é o guarda-corpo que projetos de equipe usam. No terminal, `/permissions` mostra as regras.

<a id="claude-md"></a>
### CLAUDE.md

Um arquivo Markdown com as instruções permanentes do projeto. O Claude Code lê esse arquivo no começo de cada sessão.

- **Analogia:** o manual de boas-vindas do funcionário novo.
- **Exemplo:** fica em `./CLAUDE.md` (do projeto, vai para o Git), `~/.claude/CLAUDE.md` (pessoal, vale para todos os projetos) ou `CLAUDE.local.md` (pessoal, só neste projeto e fora do Git). `/init` cria um a partir do projeto; `/memory` edita. Dá para importar outro arquivo com `@caminho`.

  ```markdown
  # Site da hamburgueria
  - Stack: Vite + JavaScript puro + GSAP. Sem React, sem CDN.
  - Rodar: npm run dev. Antes de terminar: npm run build.
  - Toda animação respeita prefers-reduced-motion.
  - Textos em português do Brasil.
  ```

- **No workshop:** o SONORA tem o seu CLAUDE.md. No Projeto B, rodamos `/init` logo no começo. Mantenha curto: o que não muda de uma tarefa para outra.

<a id="compactacao"></a>
### Compactação (compaction)

Resumir a conversa para liberar espaço na janela de contexto.

- **Analogia:** passar a ata da reunião a limpo e jogar fora os rascunhos.
- **Exemplo:** acontece sozinha perto do limite (auto-compact) ou à mão:

  ```text
  /compact mantenha as decisões de design e a lista de pendências
  ```

  Depois de compactar, o CLAUDE.md da raiz é relido do disco, mas detalhes antigos da conversa podem se perder.
- **No workshop:** útil em sessão longa do Projeto B. O que não pode se perder vai para o CLAUDE.md.

<a id="checkpoint"></a>
### Checkpoint (ponto de restauração)

Uma foto automática que o Claude Code tira antes de cada mensagem sua. Dá para voltar o código, a conversa ou os dois.

- **Analogia:** o "desfazer" com histórico.
- **Exemplo:** `/rewind` abre a lista de pontos. No terminal, `Esc` duas vezes com a caixa vazia também abre. No app desktop: conferir na sua versão.
- **No workshop:** se o Claude estragou a seção, volte com o rewind. Atenção: checkpoints não cobrem mudanças feitas por comandos de terminal nem edições fora do Claude, e não substituem o Git. Para valer de verdade, faça commit.

<a id="subagente"></a>
### Subagente (subagent)

Um ajudante que o Claude principal chama para uma tarefa separada. Ele trabalha com contexto próprio e devolve só o resultado.

- **Analogia:** mandar um estagiário pesquisar na biblioteca e voltar com um resumo de uma página.
- **Exemplo:** "use um subagente para listar todas as animações do projeto, sem editar nada". Já vêm prontos o Explore (só leitura), o Plan e o general-purpose. Para criar um seu, peça ao Claude ou crie um arquivo em `.claude/agents/`.
- **No workshop:** economiza o contexto da conversa principal. É conceito, não prática obrigatória.

<a id="hook"></a>
### Hook (gancho)

Um comando que roda sozinho num momento definido do Claude Code (começo da sessão, antes de uma ferramenta, fim da resposta), sem depender de o modelo decidir.

- **Analogia:** o alarme da porta. Toca sempre que ela abre; ninguém precisa lembrar.
- **Exemplo:** bloquear qualquer `git push` direto na `main`; rodar o formatador de código depois de cada edição.
- **No workshop:** é o guarda-corpo de projetos de equipe. Tema avançado: só para reconhecer.

<a id="plugin"></a>
### Plugin (extensão)

Um pacote que junta skills, hooks, subagentes e servidores MCP para instalar tudo de uma vez.

- **Analogia:** um kit de ferramentas fechado, em vez de ferramentas avulsas.
- **Exemplo:** a scroll-craft é distribuída como o plugin `nateherk-design`. Os comandos de instalação começam com `/plugin` (conferir na sua versão).
- **No workshop:** um plugin traz várias permissões de uma vez. Inspecione antes de instalar, como qualquer skill.

---

<a id="sec-fluxo"></a>
## 8. Ferramentas e fluxo de trabalho

<a id="fluxo-de-trabalho"></a>
### Fluxo de trabalho (workflow)

A sequência combinada de passos que toda mudança segue, do pedido até o site no ar.

- **Analogia:** a linha de montagem: cada estação tem uma tarefa e um responsável.
- **Exemplo:** o fluxo usado no projeto WRW/MMM, que reproduzimos no workshop:

  ```text
  1. Ideia ou pedido
  2. Cartão no Notion
  3. Branch: feat/, fix/, docs/ ou chore/
  4. Commits: Conventional Commits em português, com coautoria do Claude
  5. Pull request com template (O que muda / Por quê / Como verifiquei / Como validar / Riscos)
  6. CI obrigatório: testes, tipos e build
  7. Revisão por outro LLM ou por outra pessoa
  8. Merge manual
  9. Deploy automático
  10. Cartão atualizado: link da PR na Comprovação → "Feito (a validar)" → outra pessoa valida → "Concluído"
  ```

- **No workshop:** é o fio condutor da aula. A IA ajuda em quase todas as etapas, mas aprovar, fazer o merge e validar são decisões humanas.

<a id="notion"></a>
### Notion

Um aplicativo de páginas, notas e quadros de tarefas, usado pela equipe para organizar o trabalho.

- **Analogia:** o caderno da equipe, com um mural de tarefas dentro.
- **Exemplo:** a página privada "Workshop IA · SONORA", separada de qualquer projeto real.
- **No workshop:** o Claude lê e atualiza o quadro pelo conector do Notion, sempre pedindo confirmação para escrever.

<a id="quadro"></a>
### Quadro (board, banco de dados do Notion)

Uma tabela de cartões com campos fixos, que pode ser vista como lista, quadro de colunas ou calendário.

- **Analogia:** o mural de post-its da equipe, com colunas por situação.
- **Exemplo:** o quadro "Trabalho | SONORA" tem estes campos:

  | Campo | Para que serve |
  |---|---|
  | Item | título da tarefa |
  | Status | em que pé está (ver [Status](#status)) |
  | Responsável | quem está fazendo |
  | Prioridade | o que vem primeiro |
  | Prazo | até quando |
  | Concluído em | quando terminou de verdade |
  | Comprovação | o link da PR |
  | Próxima ação | registro datado, o mais novo em cima |
  | Observações | contexto e decisões |

- **No workshop:** é a fonte única de status das tarefas.

<a id="cartao"></a>
### Cartão (card)

Um registro do quadro, que representa uma tarefa.

- **Analogia:** um post-it com todos os detalhes da tarefa no verso.
- **Exemplo:** "Criar seção Cardápio", Status "Em andamento", Prioridade alta, Comprovação com o link da PR.
- **No workshop:** cada cartão vira uma branch e uma PR.

<a id="status"></a>
### Status (situação)

O campo que diz em que pé está a tarefa.

- **Analogia:** o semáforo da tarefa.
- **Exemplo:** os valores do quadro "Trabalho | SONORA":

  | Status | Quer dizer |
  |---|---|
  | Não iniciado | ninguém começou |
  | Em andamento | alguém está trabalhando (já tem branch) |
  | Feito (a validar) | quem fez terminou e pôs o link da PR na Comprovação; falta outra pessoa conferir |
  | Concluído | outra pessoa validou |
  | Bloqueado | parado esperando algo; explique o motivo em Próxima ação |

- **No workshop:** quem fez nunca marca "Concluído" no próprio cartão.

<a id="comprovacao"></a>
### Comprovação (evidência)

O campo do cartão que guarda a prova do trabalho: o link da pull request.

- **Analogia:** o recibo da entrega.
- **Exemplo:** `https://github.com/<usuario>/<repositorio>/pull/12`
- **No workshop:** sem link na Comprovação, o cartão não vai para "Feito (a validar)".

<a id="proxima-acao"></a>
### Próxima ação (registro datado)

O campo que funciona como diário da tarefa, com data, e o registro mais novo no topo.

- **Analogia:** o livro de ocorrências da portaria.
- **Exemplo:**

  ```text
  20/10: PR aberta, CI verde, aguardando revisão.
  19/10: branch feat/secao-cardapio criada.
  ```

- **No workshop:** quem pega o cartão depois entende a história em 10 segundos.

<a id="validacao"></a>
### Validação (validation)

A conferência feita por outra pessoa: ela abre o link, testa o que foi pedido e só então marca "Concluído".

- **Analogia:** o cliente prova o prato antes de pagar.
- **Exemplo:** abrir o site publicado, rolar até a seção nova e conferir no celular e no computador.
- **No workshop:** quem fez não valida. É o último passo do fluxo.

<a id="template-de-pr"></a>
### Template de PR (modelo de pull request)

Um roteiro fixo para a descrição de toda pull request.

- **Analogia:** o formulário padrão de entrega.
- **Exemplo:**

  ```markdown
  ## O que muda
  Nova seção "Cardápio" com seis itens e revelação ao rolar.

  ## Por quê
  Cartão "Criar seção Cardápio" no Notion.

  ## Como verifiquei
  npm run build sem erros; testei no Chrome com e sem reduced-motion.

  ## Como validar
  Abrir o site, rolar até "Cardápio" e conferir no celular.

  ## Riscos
  Imagens pesadas podem deixar a página lenta no 4G.
  ```

- **No workshop:** o Claude preenche o template, e você confere se é verdade.

<a id="revisao-por-outro-llm"></a>
### Revisão por outro LLM (cross-review)

Pedir que outro modelo, ou o Claude de outra pessoa, revise a PR antes do merge.

- **Analogia:** pedir a um colega de outra equipe para revisar o seu texto; ele vê o que você já não enxerga.
- **Exemplo:** rodar `/code-review` numa sessão nova, sem a conversa que gerou o código, e colar o parecer como comentário na PR.
- **No workshop:** a revisão por IA ajuda, mas mudança visual precisa de olho humano.

<a id="coautoria"></a>
### Coautoria (Co-Authored-By)

Uma linha no fim da mensagem do commit que registra quem também participou dele.

- **Analogia:** "com a colaboração de" na capa do livro.
- **Exemplo:** `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`
- **No workshop:** é transparência: fica registrado no histórico que a IA ajudou.

<a id="readme"></a>
### README

O arquivo de apresentação do repositório: o que é o projeto, como rodar e como contribuir. O GitHub mostra esse arquivo na página inicial do repositório.

- **Analogia:** a orelha do livro.
- **Exemplo:** o `README.md` na raiz do repositório do SONORA.
- **No workshop:** o README é para pessoas; o CLAUDE.md é para o Claude.

<a id="higgsfield"></a>
### Higgsfield

Uma plataforma de IA generativa para imagem, vídeo e 3D, paga em créditos.

- **Analogia:** um estúdio de foto e filmagem que você aluga por minuto.
- **Exemplo:** o vídeo do fone montado se abrindo em peças, base da animação principal do SONORA, foi gerado lá.
- **No workshop:** os arquivos foram gerados antes, porque a fila pode demorar e cada geração gasta créditos. Por padrão, a plataforma pode usar o conteúdo enviado para treinar modelos: não suba fotos pessoais.

<a id="ffmpeg"></a>
### ffmpeg

Um programa de terminal, gratuito, que converte, corta e extrai partes de vídeo e áudio.

- **Analogia:** a ilha de edição de vídeo, só que por comando.
- **Exemplo:** o SONORA usou o ffmpeg para extrair cerca de 120 quadros WebP do vídeo gerado. O script `frames` do `package.json` (`npm run frames`) automatiza essa extração.
- **No workshop:** é o que transforma um vídeo numa sequência de imagens para animar com o scroll.

<a id="google-drive"></a>
### Google Drive

O armazenamento de arquivos na nuvem do Google, com Docs, Planilhas e Apresentações.

- **Analogia:** um armário compartilhado na nuvem.
- **Exemplo:** guardar os slides e os materiais do workshop.
- **No workshop:** também pode ser ligado ao Claude por conector.

---

<a id="sec-design"></a>
## 9. Design e animação

<a id="landing-page"></a>
### Landing page (página de destino)

Uma página única, feita para apresentar um produto ou uma ideia e levar a uma ação: comprar, reservar, cadastrar.

- **Analogia:** a vitrine da loja.
- **Exemplo:** o SONORA é a landing page de um fone fictício.
- **No workshop:** o Projeto B também é uma landing page, com o tema escolhido pela turma.

<a id="hero"></a>
### Hero (seção de abertura)

A primeira tela do site, a que aparece antes de qualquer rolagem. Costuma ter título forte, imagem e um botão.

- **Analogia:** a capa da revista.
- **Exemplo:** no SONORA, o fone montado em destaque com o nome da marca.
- **No workshop:** é a primeira seção que construímos no Projeto B.

<a id="scrollytelling"></a>
### Scrollytelling (narrativa por rolagem)

Contar uma história conforme a pessoa rola a página: cada trecho da rolagem revela uma parte.

- **Analogia:** um livro ilustrado em que virar a página é rolar o mouse.
- **Exemplo:** no SONORA, rolar abre o fone peça por peça e depois mostra a engenharia.
- **No workshop:** é a ideia de design por trás dos dois projetos.

<a id="scroll-driven-animation"></a>
### Scroll-driven animation (animação guiada pela rolagem)

Uma animação cujo andamento depende de quanto a página foi rolada, e não do relógio.

- **Analogia:** um flip book: quem controla a velocidade é o seu dedo.
- **Exemplo:** com GSAP e ScrollTrigger, ou com o recurso nativo do CSS `animation-timeline`, que ainda não funciona em todos os navegadores.
- **No workshop:** o SONORA usa GSAP com ScrollTrigger, que funciona igual nos navegadores principais.

<a id="gsap"></a>
### GSAP (GreenSock Animation Platform)

Uma biblioteca JavaScript de animação, rápida e muito usada. É gratuita, inclusive para uso comercial, com licença própria.

- **Analogia:** uma mesa de som para movimento: você controla volume, tempo e ordem de cada elemento.
- **Exemplo:** `gsap.to(".titulo", { opacity: 1, y: 0, duration: 1 })` faz o título aparecer subindo.
- **No workshop:** a versão 3.15 é instalada pelo npm (`npm install gsap`), sem CDN.

<a id="scrolltrigger"></a>
### ScrollTrigger (gatilho de rolagem)

O plugin do GSAP que liga animações à rolagem: começa, pausa, fixa e avança conforme a página rola.

- **Analogia:** o sensor de presença que acende a luz quando você passa.
- **Exemplo:**

  ```js
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".card", {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    scrollTrigger: { trigger: ".cardapio", start: "top 80%" }
  });
  ```

- **No workshop:** é o motor do pin e do scrub no SONORA.

<a id="timeline"></a>
### Timeline (linha do tempo de animação)

Uma sequência de animações em ordem, controlada como uma coisa só.

- **Analogia:** a partitura de uma música: cada instrumento entra na hora certa.
- **Exemplo:** `gsap.timeline()` com o título entrando, depois a imagem e depois o botão.
- **No workshop:** uma timeline ligada ao ScrollTrigger vira uma cena inteira controlada pela rolagem.

<a id="easing"></a>
### Easing (curva de aceleração)

O jeito como a velocidade muda durante a animação: começa devagar, termina devagar, quica.

- **Analogia:** um carro que arranca e freia suave, em vez de sair do zero a 100 e parar de uma vez.
- **Exemplo:** `ease: "power2.out"` no GSAP: sai rápido e chega devagar.
- **No workshop:** é o detalhe que faz a animação parecer natural em vez de robótica.

<a id="pin"></a>
### Pin (fixar)

Prender um elemento na tela enquanto a página continua rolando, até a animação dele terminar.

- **Analogia:** o palco fica parado enquanto as cenas mudam.
- **Exemplo:** no SONORA, o canvas do fone fica fixo enquanto a rolagem avança a explosão das peças.
- **No workshop:** aparece junto com o scrub. É o efeito "a página parou, mas a animação continua".

<a id="scrub"></a>
### Scrub (avançar pela rolagem)

Ligar o avanço da animação diretamente à rolagem: rolou para baixo, ela avança; rolou para cima, ela volta.

- **Analogia:** arrastar a barra de um vídeo com o dedo.
- **Exemplo:** `scrollTrigger: { scrub: true, pin: true }` no GSAP.
- **No workshop:** a animação principal do SONORA é um scrub de cerca de 120 quadros.

<a id="exploded-view"></a>
### Exploded view (vista explodida)

Uma imagem ou animação em que as peças de um objeto aparecem separadas, como se ele se abrisse no ar, mostrando como é montado.

- **Analogia:** o desenho do manual de montagem de um móvel.
- **Exemplo:** no SONORA, o fone vai de montado a explodido conforme você rola. Os quadros vieram de um vídeo gerado no Higgsfield.
- **No workshop:** é a animação principal do Projeto A.

<a id="canvas"></a>
### Canvas (tela de desenho)

Um elemento HTML (`<canvas>`) onde o JavaScript desenha pixel a pixel, por exemplo imagens trocadas em sequência.

- **Analogia:** um quadro branco onde o código desenha e apaga muito rápido.
- **Exemplo:** o SONORA desenha no canvas o quadro certo da sequência para cada ponto da rolagem.
- **No workshop:** é a forma mais previsível de fazer o exploded view ficar igual em todo navegador.

<a id="sequencia-de-imagens"></a>
### Sequência de imagens (image sequence, frames)

Uma série de imagens (quadros, ou frames) que, mostradas em ordem, viram movimento.

- **Analogia:** o flip book de novo: cada página é um quadro.
- **Exemplo:** cerca de 120 quadros WebP em `public/frames`, extraídos do vídeo com o ffmpeg.
- **No workshop:** é a técnica do exploded view. Mais quadros deixam o movimento mais suave, mas a página fica mais pesada.

<a id="webp"></a>
### WebP

Um formato de imagem moderno, que costuma ficar menor que JPEG e PNG com qualidade parecida.

- **Analogia:** uma mala a vácuo: a mesma roupa ocupando menos espaço.
- **Exemplo:** os quadros do SONORA são `.webp`.
- **No workshop:** imagem menor quer dizer site mais rápido, principalmente no celular.

<a id="svg"></a>
### SVG (Scalable Vector Graphics, gráfico vetorial)

Um formato de desenho feito de formas e linhas descritas em texto. Pode crescer à vontade sem perder qualidade.

- **Analogia:** uma receita do desenho, em vez de uma foto do desenho.
- **Exemplo:** o blueprint da seção "Engenharia" do SONORA é um SVG animado por código.
- **No workshop:** é ótimo para ícones, linhas técnicas e desenhos que se "desenham" na tela.

<a id="microinteracao"></a>
### Microinteração (microinteraction)

Uma pequena resposta visual a uma ação da pessoa: o botão que muda ao passar o mouse, o ícone que gira ao clicar.

- **Analogia:** o "clique" que a caneta faz. É pequeno, mas confirma que deu certo.
- **Exemplo:** o botão do Projeto B que cresce um pouco e muda de cor no hover.
- **No workshop:** dá acabamento sem pesar. Bom exercício curto para a prática.

<a id="responsividade"></a>
### Responsividade (responsive design)

Fazer o site se adaptar bem a qualquer tamanho de tela: celular, tablet, notebook e monitor grande.

- **Analogia:** água, que toma a forma do copo.
- **Exemplo:** a grade de seis itens vira duas colunas no celular.
- **No workshop:** sempre confira o Projeto B na largura de celular. Nas DevTools, o modo de dispositivo simula telas menores.

<a id="viewport"></a>
### Viewport (área visível)

A parte da página que cabe na tela naquele momento, sem rolar.

- **Analogia:** a janela do trem: a paisagem é a página, a janela é o viewport.
- **Exemplo:** "a seção ocupa 100% da altura do viewport" quer dizer que ela enche a tela.
- **No workshop:** aparece nos ajustes de ScrollTrigger (`start: "top 80%"` = quando o topo do elemento chega a 80% da altura do viewport).

<a id="media-query"></a>
### Media query e breakpoint (consulta de mídia e ponto de quebra)

Uma regra de CSS que só vale em certas condições, como "tela com menos de 768 px". O breakpoint é a largura em que o layout muda.

- **Analogia:** a roupa muda conforme o clima.
- **Exemplo:**

  ```css
  @media (max-width: 768px) {
    .cardapio { grid-template-columns: 1fr 1fr; }
  }
  ```

- **No workshop:** é como a responsividade é escrita no CSS.

<a id="prefers-reduced-motion"></a>
### prefers-reduced-motion (preferência por menos movimento)

Uma configuração do sistema operacional em que a pessoa pede menos animação. O site consegue ler essa preferência e respeitar.

- **Analogia:** a placa de "silêncio" no hospital: o site baixa o volume do movimento.
- **Exemplo:**

  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
  ```

  No SONORA, quem ativa essa preferência vê uma composição estática no lugar da explosão animada.
- **No workshop:** é regra: toda animação do Projeto B precisa respeitar essa preferência. Algumas pessoas sentem enjoo ou tontura com movimento na tela.

<a id="acessibilidade"></a>
### Acessibilidade (accessibility, a11y)

Fazer o site funcionar para todas as pessoas, inclusive quem usa leitor de tela, teclado, lupa ou prefere menos movimento.

- **Analogia:** a rampa ao lado da escada.
- **Exemplo:** texto alternativo nas imagens (`alt`), contraste suficiente entre texto e fundo, navegação pelo teclado, respeito ao `prefers-reduced-motion`.
- **No workshop:** é critério de qualidade, não enfeite. Peça ao Claude para revisar acessibilidade antes da PR.

<a id="fonte-local"></a>
### Fonte local (self-hosted font)

Uma fonte cujos arquivos ficam dentro do próprio projeto, em vez de vir de um serviço externo.

- **Analogia:** levar o próprio microfone para o show, em vez de depender do da casa.
- **Exemplo:** as fontes do SONORA (Unbounded e Onest) vêm dos pacotes `@fontsource` instalados pelo npm e são empacotadas junto com o site no build. Outra forma comum é guardar os arquivos `.woff2` em `public/fonts/`.
- **No workshop:** junto com o GSAP pelo npm, garante que o site funcione mesmo se a internet do local cair.

---

<a id="sec-custos"></a>
## 10. Custos e limites

<a id="assinatura"></a>
### Assinatura (subscription)

Um plano mensal (como Pro, Max ou Team) que inclui uso do Claude e do Claude Code dentro de limites.

- **Analogia:** o plano de celular com franquia: paga fixo e usa até o limite.
- **Exemplo:** os valores dos planos não foram confirmados para este material: confira em claude.com/pricing antes de decidir.
- **No workshop:** quem usa assinatura não paga por token, mas tem limites de uso.

<a id="cobranca-por-uso"></a>
### Cobrança por uso (pay-as-you-go, API)

Pagar exatamente pelo que usar, contado em tokens. É o modelo da API.

- **Analogia:** o taxímetro: o preço depende da corrida.
- **Exemplo:** preços da API em US$ por milhão de tokens:

  | Modelo | Entrada | Saída |
  |---|---|---|
  | Fable 5.1 | 10 | 50 |
  | Opus 5.5 | 4 | 20 |
  | Sonnet 5.5 | 2 | 10 |
  | Haiku 5.5 | 0,10 | 0,50 (até 100 mil tokens de prompt; acima disso o preço sobe) |

- **No workshop:** serve para entender a ordem de grandeza. Por token, o Sonnet 5.5 custa 20 vezes o Haiku 5.5, e o Fable 5.1 custa 100 vezes.

<a id="preco-por-milhao"></a>
### Preço por milhão de tokens (MTok)

A unidade de preço da API: quanto custa processar um milhão de tokens.

- **Analogia:** o preço do quilo no mercado.
- **Exemplo hipotético, sem cache:** uma tarefa no Sonnet 5.5 que lê 200 mil tokens e escreve 20 mil custaria 0,2 × US$2 + 0,02 × US$10 = US$0,60.
- **No workshop:** é a conta por trás da escolha de modelo.

<a id="tokens-entrada-saida"></a>
### Tokens de entrada e de saída (input e output tokens)

Entrada é tudo o que o modelo lê (sua mensagem, arquivos, histórico). Saída é o que ele escreve. A saída costuma custar bem mais caro.

- **Analogia:** na gráfica, ler o original é barato; imprimir é caro.
- **Exemplo:** no Opus 5.5, entrada a US$4 e saída a US$20 por milhão de tokens.
- **No workshop:** pedir "responda curto" economiza saída; não colar arquivos inteiros sem necessidade economiza entrada.

<a id="cache"></a>
### Cache (prompt caching, memória temporária)

Guardar por um tempo o começo da conversa que se repete, para cobrar menos quando ele é reenviado.

- **Analogia:** a cozinha que já deixou o molho pronto: o próximo prato sai mais rápido e mais barato.
- **Exemplo:** cada nova mensagem reenvia a conversa inteira; com cache, a parte repetida sai bem mais barata.
- **No workshop:** é por isso que sessão longa gasta mais, mesmo com cache. `/clear` entre tarefas não custa nada.

<a id="limite-de-uso"></a>
### Limite de uso (usage limit)

O teto de uso dentro de um período. Ao chegar nele, o uso para até a janela renovar.

- **Analogia:** a franquia de dados do celular.
- **Exemplo:** nos planos Team e Enterprise, cada assento tem uma janela de 5 horas e outra semanal. `/usage` mostra o uso da sessão e do plano.
- **No workshop:** se a turma inteira usar o modelo mais caro, o limite pode acabar no meio da aula. Prefira Sonnet 5.5 no dia a dia.

<a id="credito"></a>
### Crédito (credit)

Uma moeda interna de plataformas como o Higgsfield. Cada geração custa um número de créditos.

- **Analogia:** as fichas do parque de diversões: cada brinquedo custa um número de fichas.
- **Exemplo:** preços no Higgsfield:

  | Geração | Créditos |
  |---|---|
  | Imagem | 1 a 4,25 |
  | Vídeo de 10 s, Kling 3.0 pro | 17,5 |
  | Vídeo de 10 s, Seedance 2.5, 720p | 70 |
  | Vídeo de 10 s, Seedance 2.5, 1080p | 160 |

  Um crédito custa entre cerca de US$0,033 e US$0,059, conforme o plano. Assim, o vídeo de 17,5 créditos sai entre US$0,58 e US$1,03, mais ou menos. Créditos comprados avulsos vencem em 90 dias.
- **No workshop:** gere com plano e reaproveite. Refazer um vídeo três vezes triplica o custo.

<a id="plano-gratuito"></a>
### Plano gratuito (free tier)

A camada grátis de um serviço, com limites. Ótima para aprender e para projetos pequenos.

- **Analogia:** a amostra grátis: dá para provar, não para abastecer a festa.
- **Exemplo:** GitHub Pages é grátis em repositório público. Supabase Free e Firebase Spark oferecem banco de dados com limites (o Supabase Free pausa o projeto depois de 7 dias sem uso). O Vercel Hobby é grátis, mas só para uso não comercial.
- **No workshop:** o SONORA custa zero de hospedagem.

<a id="custo-de-dominio"></a>
### Custo de domínio (domain cost)

O valor anual para manter um nome de site seu.

- **Analogia:** o aluguel anual do nome da loja.
- **Exemplo:** `.com.br` por R$40 por ano no Registro.br; `.com` por cerca de US$10 por ano.
- **No workshop:** é opcional. O subdomínio grátis (`usuario.github.io`) resolve para aprender.

<a id="peso-da-pagina"></a>
### Peso da página (page weight)

A soma do tamanho de todos os arquivos que o navegador precisa baixar para mostrar a página.

- **Analogia:** o peso da mochila: quanto mais pesada, mais devagar você anda.
- **Exemplo:** uma sequência de imagens para animação pode pesar de 5 a 15 MB. Por isso os quadros do SONORA são WebP.
- **No workshop:** no celular e no 4G, o peso vira espera. Confira o tamanho das imagens antes de colocar no site.

---

<a id="indice"></a>
## Índice alfabético

Total: 176 termos. Clique no termo para ir até a explicação.

**A** · [Accept edits](#accept-edits) · [Acessibilidade](#acessibilidade) · [Agente](#agente) · [Alucinação](#alucinacao) · [API](#api) · [Arquivo](#arquivo) · [Arquivo de configuração](#arquivo-de-configuracao) · [Assinatura](#assinatura) · [Autenticação](#autenticacao) · [Auto](#auto) · [Automação](#automacao) · [Autorização](#autorizacao)

**B** · [Backend](#backend) · [Banco de dados](#banco-de-dados) · [Biblioteca](#biblioteca) · [Branch](#branch) · [Bug e debugging](#bug) · [Build](#build) · [Bypass permissions](#bypass)

**C** · [Cache](#cache) · [Caminho absoluto](#caminho-absoluto) · [Caminho relativo](#caminho-relativo) · [Canvas](#canvas) · [Cartão](#cartao) · [CDN](#cdn) · [Chave de API](#chave-de-api) · [Checkpoint](#checkpoint) · [CI/CD](#ci-cd) · [Claude](#claude) · [Claude Code](#claude-code) · [Claude Desktop](#claude-desktop) · [CLAUDE.md](#claude-md) · [CLI](#cli) · [Cliente](#cliente) · [Clone](#clone) · [Coautoria](#coautoria) · [Cobrança por uso](#cobranca-por-uso) · [Comando](#comando) · [Comando de barra](#comando-de-barra) · [Commit](#commit) · [Compactação](#compactacao) · [Comprovação](#comprovacao) · [Conector](#conector) · [Contexto](#contexto) · [Conventional Commits](#conventional-commits) · [Credencial](#credencial) · [Crédito](#credito) · [CRUD](#crud) · [CSS](#css) · [Custo de domínio](#custo-de-dominio)

**D** · [Dependência](#dependencia) · [Deploy](#deploy) · [DevTools](#devtools) · [Diff](#diff) · [Diretório](#diretorio) · [DNS](#dns) · [Domínio](#dominio)

**E** · [Easing](#easing) · [Editor de código](#editor-de-codigo) · [Effort](#effort) · [.env](#arquivo-env) · [Executável](#executavel) · [Exploded view](#exploded-view) · [Extensão](#extensao)

**F** · [Ferramenta](#ferramenta) · [Fetch](#fetch) · [ffmpeg](#ffmpeg) · [Fluxo de trabalho](#fluxo-de-trabalho) · [Fonte local](#fonte-local) · [Framework](#framework) · [Frontend](#frontend) · [Full stack](#full-stack)

**G** · [gh](#gh) · [Git](#git) · [GitHub](#github) · [GitHub Actions](#github-actions) · [GitHub Pages](#github-pages) · [.gitignore](#gitignore) · [Google Drive](#google-drive) · [GSAP](#gsap)

**H** · [Hero](#hero) · [Higgsfield](#higgsfield) · [Hook](#hook) · [Hosting](#hosting) · [Hot reload](#hot-reload) · [HTML](#html) · [HTTP](#http) · [HTTPS](#https)

**I** · [IA](#ia) · [IA generativa](#ia-generativa) · [Inferência](#inferencia) · [Issue](#issue)

**J** · [Janela de contexto](#janela-de-contexto) · [JavaScript](#javascript) · [JavaScript puro](#javascript-puro) · [JSON](#json)

**L** · [Landing page](#landing-page) · [Limite de uso](#limite-de-uso) · [LLM](#llm) · [Local](#local)

**M** · [main](#main) · [Manual](#manual) · [Markdown](#markdown) · [MCP](#mcp) · [Media query e breakpoint](#media-query) · [Merge](#merge) · [Merge conflict](#merge-conflict) · [Microinteração](#microinteracao) · [Modelo](#modelo) · [Modos de permissão](#modos-de-permissao)

**N** · [Navegador](#navegador) · [node_modules](#node-modules) · [Node.js](#nodejs) · [Notion](#notion) · [npm](#npm)

**P** · [package.json e package-lock.json](#package-json) · [Pasta](#pasta) · [PATH](#path) · [Peso da página](#peso-da-pagina) · [Pin](#pin) · [Plan mode](#plan-mode) · [Plano gratuito](#plano-gratuito) · [Playwright](#playwright) · [Plugin](#plugin) · [Preço por milhão de tokens](#preco-por-milhao) · [prefers-reduced-motion](#prefers-reduced-motion) · [Princípio do menor privilégio](#menor-privilegio) · [Projeto](#projeto) · [Prompt](#prompt) · [Próxima ação](#proxima-acao) · [Pull](#pull) · [Pull request](#pull-request) · [Push](#push)

**Q** · [Quadro](#quadro)

**R** · [Raciocínio](#raciocinio) · [README](#readme) · [Regras de permissão](#regras-de-permissao) · [Remote](#remote) · [Repository](#repository) · [Reset](#reset) · [Responsividade](#responsividade) · [Restore](#restore) · [Revert](#revert) · [Review](#review) · [Revisão por outro LLM](#revisao-por-outro-llm)

**S** · [Scroll-driven animation](#scroll-driven-animation) · [ScrollTrigger](#scrolltrigger) · [Scrollytelling](#scrollytelling) · [Scrub](#scrub) · [Sequência de imagens](#sequencia-de-imagens) · [Servidor](#servidor) · [Servidor de desenvolvimento e localhost](#servidor-de-desenvolvimento) · [Sessão](#sessao) · [Sistema operacional](#sistema-operacional) · [Site estático](#site-estatico) · [Skill](#skill) · [SQL](#sql) · [Staging](#staging) · [Status](#status) · [Subagente](#subagente) · [SVG](#svg)

**T** · [Tag](#tag) · [Temperatura](#temperatura) · [Template de PR](#template-de-pr) · [Terminal](#terminal) · [Teste automatizado](#teste-automatizado) · [Timeline](#timeline) · [Token](#token) · [Tokens de entrada e de saída](#tokens-entrada-saida)

**U** · [URL](#url)

**V** · [Validação](#validacao) · [Variável de ambiente](#variavel-de-ambiente) · [Viewport](#viewport) · [Vite](#vite)

**W** · [WebP](#webp) · [Working tree](#working-tree)

[Voltar ao sumário](#sumario)
