# Guia do instrutor · Workshop de IA WRW

20/10/2026, à noite · cerca de 3 h · PT-BR · iniciantes · Projeto A: SONORA (pronto) · Projeto B: ao vivo, tema da turma.

**Como usar.** H é o minuto em que a aula começa: H+1:05 é uma hora e cinco minutos depois. Ordem e tempos vêm do deck (51 slides, 180 min, sem intervalo). As falas completas estão nas notas de cada slide; aqui fica o que fazer, o comando e a pergunta. **[Turma]** marca interação. **[Checagem]** é pergunta rápida, com a resposta entre parênteses. Configuração escrita como modelo · effort · modo.

**Regras fixas da noite**

- Sonnet 5.5 constrói e faz tarefa simples. Opus 5.5 planeja (Plan), depura e revisa. Fable só em problema muito difícil. Bypass, nunca.
- Modos: Manual para push, PR, merge e Notion; Accept edits para construir; Plan para pensar. Auto eu explico no slide 12, mas não uso na aula.
- Plano B: no máximo 2 min. Erro ao vivo: no máximo 5 min. Passou disso, plano C e sigo ([plano-de-contingencia.md](plano-de-contingencia.md)).
- Às H+2:55 o encerramento começa, custe o que custar.

---

## 1. Antes da aula (T-60 a T-0)

### T-60 · repositório, pastas e reservas

- [ ] Projetor: Win + P › Duplicar, resolução mais nítida, zoom de 150% no app, no VS Code e no terminal.
- [ ] SONORA limpo: `cd C:\Users\rober\workshop-ia\sonora`, `git switch main`, `git pull`, `git status` deve dizer "nothing to commit". O `.claude/settings.json` (Sonnet) e os prompts do ensaio entram na `main` pela PR #2, a dos materiais do workshop: depois do merge dela, não sobra arquivo modificado. Se ainda aparecer algum, guardo com `git stash push -u -m "ensaio"`. Com a árvore suja, o `git switch` da P9 leva tudo para a branch da PR e o "git status limpo" da P8 falha.
- [ ] `git tag -n` lista as 6 tags reais: v0.1-estrutura, v0.2-landing, v0.3-design, v0.4-animacao-simples, v0.5-animacao-avancada e v1.0-publicavel (as mesmas da tabela do plano de contingência).
- [ ] `git log --oneline --no-merges main..origin/fix/achados-review-landing` mostra 3 commits. `gh auth status`: conta Movits, escopos repo e workflow. `gh pr list --state all`: a #1 (skill /review-landing), a #2 (materiais do workshop) e a #3 (ajustes da verificação final), todas MERGED, e nenhuma aberta. A PR ao vivo vai ser a **#4**. Se a lista mostrar outra coisa, anoto na cola o número que vem depois do último e uso esse número na seção 4c.
- [ ] Pasta do Projeto B: `C:\Users\rober\projetos\projeto-b`, criada vazia na preparação. Confiro com `dir`: nada dentro. Se não existir: `New-Item -ItemType Directory -Force C:\Users\rober\projetos\projeto-b`.
- [ ] Pasta base: `C:\Users\rober\workshop-ia\projeto-b-base`, a origem da cópia do P3. Tem Vite 8.3.4 (template vanilla, sem os exemplos), gsap 3.15.0 e @playwright/test 1.64.1 em node_modules; `index.html` em pt-BR com `<main>` vazio; `src/main.js`, `tokens.css` e `base.css`; `src/sections`, `src/lib`, `public/img`, `public/frames`, `public/fonts` e `docs` vazias (só com .gitkeep); `vite.config.js` com base `/meu-site/` e appType `mpa`; `npm test` com 2 testes de fumaça (porta 4174); .gitignore, .gitattributes, .env.example, a skill review-landing e `.claude/settings.json` (Sonnet · medium · Accept edits). Git na `main` com 1 commit, sem remoto. Não tem CLAUDE.md: ele nasce com `/init` no P3. `git -C C:\Users\rober\workshop-ia\projeto-b-base status` precisa dar limpo, senão o commit do P3 leva junto o que estiver modificado. Detalhes em `C:\Users\rober\workshop-ia\LEIA-ME-projeto-b-base.md` (fica fora da base, para não ir para o repositório público `meu-site`).
- [ ] Zip da base: `C:\Users\rober\workshop-ia\projeto-b-base.zip`, gerado em 19/10 da base limpa (116,8 KB) e testado: extraí numa pasta temporária, `npm install`, a sequência do P3, `npm run build` e os 2 testes passaram. Com o .git, sem node_modules nem dist, arquivos na raiz. Cópia na pasta WRW - Workshop do OneDrive (conferir na preparação) e no pendrive. Depois de extrair, precisa de `npm install`, e isso pede internet.
- [ ] Kits: `C:\Users\rober\workshop-ia\_geracoes\kits\{viagens,hamburgueria,relogio}`, 6 WebP cada. A pasta também tem .png, .json e .err: copio só `*.webp`.
- [ ] Reservas na pasta WRW - Workshop do OneDrive (conferir na preparação): o .pptx e o PDF do deck (também em `C:\Users\rober\workshop-ia\deck\saida\`), `reservas\sonora-scroll.mp4` (a rolagem do SONORA), `reservas\ciclo-da-pr.mp4` (a PR #1, os checks, a aba Actions e o site publicado; não mostra o Notion), o zip do dist do SONORA, o projeto-b-base.zip e o LEIA-ME.md com os links privados (Drive e Notion). Os dois MP4 abrem no player sem internet. O site do ensaio, com a rota funcionando, fica em `C:\Users\rober\workshop-ia\ensaio-viagens\site`. Cópia de tudo no pendrive.
- [ ] Canário: o CLAUDE.md da pasta de usuário faz a 1ª resposta de cada sessão começar com o meu nome completo, inclusive no projeto-b. Decido (checklist 2.3): aviso a turma ou desligo.

### T-45 · cola da aula

Bloco de Notas em `C:\Users\rober\projetos\cola-da-aula.txt` (fora do projeto-b), com as três fichas de variáveis da seção 4b, o link do cartão "PR ao vivo na aula" (Notion › ⋯ › Copiar link), o número da PR ao vivo (#4, conferido com `gh pr list --state all`) e a linha do `/compact` da seção 4d. Os links privados (Drive e Notion) ficam só aqui e no LEIA-ME do OneDrive, nunca num arquivo do repositório.

### T-30 · Chrome, perfil da aula, abas nesta ordem

1. Google Slides pelo link direto do arquivo (link no LEIA-ME do OneDrive). O deck fica na pasta do Drive "Workshop IA WRW · 20-10-2026", que não abro na tela.
2. https://movits.github.io/sonora/, parado no topo.
3. https://github.com/Movits/sonora
4. https://github.com/Movits/sonora/compare/main...fix/achados-review-landing: a branch da PR ao vivo. Abrir a PR por aqui já preenche o template.
5. https://github.com/Movits/sonora/pull/1: a PR de reserva, mesclada, com o check "testes" verde.
6. https://github.com/Movits/sonora/actions
7. Notion: página privada "Workshop IA · SONORA (demo)" (link no LEIA-ME do OneDrive), quadro "Trabalho | SONORA" na view Quadro, barra lateral recolhida (Ctrl + \\), cartão "PR ao vivo na aula" à vista.
8. `file:///C:/Users/rober/workshop-ia/ensaio-viagens/comparativo/sem-skill.png` (slide 33).
9. https://github.com/nateherkai/scroll-craft (slide 50).

Fechados: tudo do MMM, e-mail, WhatsApp, gerenciador de senhas e qualquer `.env`.

**Modo apresentador.** No Slides: seta ao lado de "Apresentação de slides" › "Visualização do apresentador". Ele só esconde as notas da turma com a tela estendida (Win + P › Estender), e aí cada demo exige arrastar a janela para o projetor (Win + Shift + →). Com Duplicar, a turma vê as notas. Recomendo Duplicar, slides em tela cheia e este guia impresso: a aula alterna slide e demo a cada 2 ou 3 minutos. Decido e testo até T-30.

### T-15 · app, terminal e VS Code

- [ ] App Claude Desktop, aba Code, pasta `C:\Users\rober\workshop-ia\sonora`, sessão nova: **Sonnet 5.5 · medium · Manual**. O `.claude/settings.json` abre em Sonnet · medium · Accept edits: troco só o modo, no seletor. Barra lateral sem sessões antigas. `/skills` lista a review-landing; `/mcp` mostra o Notion conectado.
- [ ] PowerShell, aba 1, no SONORA: `npm run preview` (reserva offline em http://localhost:4173/sonora/). Paro com Ctrl + C antes do P10.
- [ ] PowerShell, aba 2: `cd C:\Users\rober\projetos\projeto-b`, pasta vazia (`dir`). A cópia da base só acontece ao vivo, no P3.
- [ ] PowerShell, aba 3: `cd C:\Users\rober\workshop-ia\sonora`, livre para git (do P8 em diante). Aba 4: aberta no P3 em `projeto-b\meu-site`, para Copy-Item e git. Os servidores (preview e dev) rodam sozinhos nas abas 1 e 2.
- [ ] VS Code aberto só no SONORA, sem a tela de boas-vindas. Hotspot pareado e desligado. Mouse com roda.

### T-5 · última volta

Não incomodar ligado, celular no silencioso, água por perto. Slide 1 no projetor. Cronômetro no celular, com o H anotado.

---

## 2. Tabela-resumo da aula

| Horário | Slides | O que acontece | Quem | Plano B | Alerta de tempo |
|---|---|---|---|---|---|
| H+0:00 | 1–2 | Capa e SONORA rolando na tela (momento 4a) | Roberto | hotspot; localhost:4173/sonora/ | slide 3 até 0:07 |
| H+0:06 | 3–5 | Por trás da SONORA, método, agenda; ideias de tema | Roberto, turma | pastas no Explorador | 0:15 sem começar o Bloco 1: tema vira votação de 60 s |
| H+0:15 | 6–17 | IA e Claude: LLM, token, erro, modelos, effort, modos, comandos, prompt | Roberto, Claude | seletor no lugar do comando | início depois de 0:20: corte 2 |
| H+0:35 | 18 | Exercício 1: melhore o prompt | turma | preencher o Contexto juntos | 0:40 começa o Bloco 2 |
| H+0:40 | 19–24 | Fundamentos: pastas, HTML/CSS/JS, anatomia, web, Git | Roberto | npm run preview | 0:56 começa o exercício |
| H+0:56 | 25 | Exercício 2: ache o arquivo | turma, em dupla | acompanhar pela tela | **1:00 Projeto B começou** |
| H+1:00 | 26–27 | Tema e variáveis (momento 4b) | turma decide, Roberto digita | viagens, ficha pronta | 1:04 começa o P1 |
| H+1:04 | 28 | P1: brief e requisitos | Claude; turma responde | pular o requisitos.md | 1:10 sem brief: pula |
| H+1:13 | 29 | P2: plano no modo Plan | Claude; Roberto aprova | Sonnet; até 6 passos | 2 min pensando: P3 em paralelo |
| H+1:17 | 30 | P3: projeto e CLAUDE.md | Roberto (terminal), Claude | sem a base: npm create vite e git init -b main | 1:20 sem CLAUDE.md: /init para casa |
| H+1:20 | 31–34 | P4 identidade, com e sem skill, P5 imagens | Claude; turma escolhe | aceitar uma direção; P5 em 1 min | 1:35 começa o P6 |
| H+1:35 | 35 | P6: landing page | Claude | stash e último commit | 1:47 começa o P7 |
| H+1:47 | 36–37 | P7: animação de scroll; técnicas | Claude | site do ensaio; stash | 1:50 fim da prática dos alunos |
| H+2:00 | 38 | Debugging com erro plantado | Roberto planta, Claude diagnostica | git restore src/main.js | **2:05 fluxo de trabalho começou** |
| H+2:05 | 39–40 | P8: /review-landing no SONORA | Claude | Sonnet, 5 itens, sem skill | 2:12 começa o P9 |
| H+2:12 | 41 | P9: branch pronta, log e diff | Roberto | — | 2:18 começa o P10 |
| H+2:18 | 42–43 | P10: PR, CI, /code-review, merge, Pages; Errei! (momento 4c) | Claude; Roberto mescla; turma no celular | PR #1; aba compare | 2:28 começa o P11 |
| H+2:28 | 44–45 | P11: cartão no Notion; fluxo do WRW | Claude, conector; Roberto aprova | cartão à mão; print | 2:35 começa o Bloco 6 |
| H+2:35 | 46–47 | P12: deploy do Projeto B | Claude; Roberto mescla | build + preview | 2:38 sem começar: corte 6 |
| H+2:44 | 48–50 | Custos, /compact e /context (momento 4d), segurança | Roberto, Claude | só o slide | **2:55 encerramento** |
| H+2:55 | 51 | Leve para casa e QR codes | Roberto, turma | ditar a URL | 3:00 fim |

---

## 3. Roteiro detalhado

### Abertura · H+0:00 a 0:15

- **H+0:00 · slide 1 · Do zero a um projeto profissional com IA** · 2 min
  Capa no ar enquanto a turma chega. "A IA constrói coisas sofisticadas; quem entende o pedido, confere o resultado e organiza o trabalho somos nós." **[Turma]** Quem já usou uma IA de conversa? E quem já pediu um site inteiro?
- **H+0:02 · slide 2 · Hoje vamos construir algo deste nível** · 4 min
  Momento crítico 4a. **[Turma]** QR do site na tela. **[Checagem]** Esse fone existe? (Não: as imagens foram geradas por IA.)
- **H+0:06 · slide 3 · O que tem por trás da SONORA** · 3 min
  Quatro ferramentas, cada uma faz uma parte. No GitHub: public › frames › desktop (q001.webp em diante) e midia/explosao.mp4. "É um flip-book." **[Checagem]** Quais partes usaram IA? (O código e a mídia.)
- **H+0:09 · slide 4 · Nosso método** · 3 min
  "Só um dos seis passos é da IA." Abro https://github.com/Movits/sonora/tree/main/workshop/prompts. **[Checagem]** Qual passo mais gente pula? (A verificação.)
- **H+0:12 · slide 5 · Agenda de hoje** · 3 min
  Cada bloco entrega algo concreto. **[Turma]** Anoto ideias de tema na cola (kits: viagens, hamburgueria, relógio) e conto as mãos de quem tem notebook com Node e Git, para formar duplas.

### Bloco 1 · IA e Claude · H+0:15 a 0:40 · demos na aba Code do SONORA, Sonnet 5.5 · medium · Manual

- **H+0:15 · slide 6 · Entender a ferramenta antes de pedir** · 0,5 min
  Confiro o seletor na frente da turma. Começou depois de 0:20: corto as demos de /context, /compact e /rewind.
- **H+0:16 · slide 7 · IA, IA generativa e LLM** · 1,5 min
  "Provável não é verdadeiro." Agente é LLM com ferramentas. **[Checagem]** Se o Claude não leu o arquivo, ele sabe o que tem dentro? (Não.)
- **H+0:17 · slide 8 · Token e janela de contexto** · 2 min
  Mouse no anel de uso; `/context` (a grade) e `/usage`. A mesa de 100 folhas lida 10 vezes. Aviso: "o /compact de verdade eu mostro no fim, numa sessão longa". **[Checagem]** /usage alto e /context em 30%: é contradição? (Não.)
- **H+0:19 · slide 9 · A IA erra, e com confiança** · 2 min
  Terminal do SONORA: `npm view gsap version` (3.15.0) e `npm view gsap-scroll-magic-pro` (E404: pacote inventado). **[Checagem]** O Claude disse "pronto, testei". O que vocês perguntam? (Qual comando rodou e qual foi a saída.)
- **H+0:21 · slide 10 · Modelos Claude: qual usar** · 2 min
  "Sonnet constrói; Opus planeja e depura; Fable só em problema muito difícil." Seletor com Ctrl + Shift + I. **[Checagem]** Planejar o site de uma agência? (Opus, no Plan.) Trocar o texto de um botão? (Sonnet.)
- **H+0:23 · slide 11 · Effort não é temperatura** · 1,5 min
  `/effort status`; eu fixo `/effort medium`. **[Checagem]** Subir para high deixa a resposta mais criativa? (Não: mais cuidadosa, lenta e cara.)
- **H+0:25 · slide 12 · Modos de permissão** · 2 min
  Seletor com Ctrl + Shift + M. Em Manual peço "crie o arquivo teste.txt", mostro o pedido de licença e recuso. "Bypass, nunca." **[Checagem]** Quero aprovar cada comando: qual modo? (Manual.) Quero um plano antes de mexer? (Plan.)
- **H+0:27 · slide 13 · Claude no navegador × Desktop × Claude Code** · 1,5 min
  Clico na aba Chat e volto para a Code. "No meu PC o claude não está no PATH: a noite toda é na aba Code." **[Checagem]** Para criar pasta e rodar npm, qual porta? (A aba Code.)
- **H+0:28 · slide 14 · Comandos que vamos usar hoje** · 2 min
  Digito só a barra e mostro a lista; rodo `/diff`. Não compacto agora, porque a sessão está vazia. **[Checagem]** Terminei o hero e commitei: /clear ou /compact? (/clear.)
- **H+0:30 · slide 15 · O ecossistema do Claude Code** · 1,5 min
  VS Code: CLAUDE.md e `.claude/skills/review-landing`. No app: `/skills` e `/mcp`. **[Checagem]** Roda depois de cada edição, sem o Claude lembrar: skill ou hook? (Hook.)
- **H+0:32 · slide 16 · Onde a informação vive** · 1,5 min
  CLAUDE.md e README.md lado a lado; aba do Notion com um cartão que tem a PR na Comprovação. **[Checagem]** "Textos sempre em português do Brasil" vai onde? (No CLAUDE.md.)
- **H+0:33 · slide 17 · Anatomia de um bom prompt** · 2 min
  "Troque adjetivo por decisão que dá para conferir." VS Code: `workshop/prompts/README.md` (Estrutura recomendada) e `10-landing-page.md` (Exemplo ruim × bom). **[Checagem]** "Bonito" é critério? (Não: não responde sim ou não.)
- **H+0:35 · slide 18 · Exercício 1: melhore este prompt** · 5 min
  **[Turma]** Cronômetro na tela: 3 min para escrever, 2 para comparar, em dupla ou no papel. Correção pela apostila, seção 17 (resposta do Capítulo 6). **[Checagem]** Alguém lê um critério que responde sim ou não.

### Bloco 2 · Fundamentos · H+0:40 a 1:00 · PowerShell e VS Code no SONORA

- **H+0:40 · slide 19 · Como um projeto de verdade é organizado** · 1 min
  "Quem não sabe onde as coisas ficam não sabe se o Claude mexeu no lugar certo." **[Turma]** Quem já abriu um terminal?
- **H+0:41 · slide 20 · Pastas, caminhos e terminal** · 3 min
  `pwd`, `ls`, `cd src`, `ls`, `cd ..`, `pwd` e `dir`. **[Checagem]** Estou em src/sections: qual o caminho de src/styles/base.css? (../styles/base.css.)
- **H+0:44 · slide 21 · HTML, CSS e JavaScript** · 3 min
  Inspecionar no título "Na caixa" (h2) e no botão "Reservar o meu" (background: var(--accent)); depois `src/sections/hero.js`. **[Checagem]** Quero o botão azul: mexo em qual? (CSS.) E para abrir uma janela? (JavaScript.)
- **H+0:47 · slide 22 · Anatomia do projeto SONORA** · 3 min
  package.json (scripts e dependencies), .gitignore (só mostro a linha .env; nunca abro um .env) e CLAUDE.md, seção "Onde fica cada coisa". **[Checagem]** Apagar o package-lock.json tem problema? (Tem: ele garante as mesmas versões.)
- **H+0:50 · slide 23 · Do navegador ao banco de dados** · 3 min
  No SONORA: F12 › Network › F5. Nenhuma chamada de API. **[Checagem]** Loja com estoque atualizado precisa de banco? (Sim.)
- **H+0:53 · slide 24 · Git em uma imagem** · 3 min
  `git status` e `git log --oneline` (feat:, chore:); GitHub › Commits. **[Checagem]** Ponha em ordem: push, commit, add. (add, commit, push.)
- **H+0:56 · slide 25 · Exercício 2: ache o arquivo** · 4 min
  **[Turma]** Em dupla, Ctrl + Shift + F. Correção: título no index.html, linhas 34 a 37 (h1 com dois span); botão class="botao" (linha 245) → `src/styles/base.css` linha 117 → `tokens.css` linha 15 (--accent: #d6a062); reserva nas linhas 226 e 227. **[Checagem]** Mudei o --accent: o que mais muda? (Todo o cobre do site.)

### Bloco 3 · Planejar ao vivo · H+1:00 a 1:20 · pasta C:\Users\rober\projetos\projeto-b

- **H+1:00 · slide 26 · Planejar antes de construir** · 1 min
  Aba 2 do PowerShell: `dir`, pasta vazia. "Nos próximos 20 minutos eu não escrevo nenhuma linha de código." **[Checagem]** Por que planejar, se a IA gera código em segundos? (Código errado também sai em segundos.)
- **H+1:01 · slide 27 · Escolha o tema e preencha as variáveis** · 3 min
  Momento crítico 4b.
- **H+1:04 · slide 28 · P1 · Definir o negócio e os requisitos** · 9 min · Sonnet 5.5 · medium · Manual
  Sessão nova na pasta projeto-b. A pasta não tem .claude/settings.json: a sessão abre no meu padrão pessoal (Fable · xhigh · Auto). Antes de colar o prompt, troco os três no seletor: Sonnet 5.5 · medium · Manual. Colo a versão curta de `01-pesquisa-e-definicao-do-negocio.md` com a ficha. Leio as perguntas em voz alta; **[Turma]** responde e eu digito. Aprovo `docs/brief.md` e abro. `/clear` e a versão curta de `02-levantamento-de-requisitos.md`; conto os itens Precisa. **[Checagem]** Só pelo item 1 do brief, dá para entender o negócio? No ensaio, com a turma respondendo, levou de 8 a 10 min.
- **H+1:13 · slide 29 · P2 · Planejar no modo Plan, sem editar nada** · 4 min · Opus 5.5 · high · Plan
  `/clear`. Versão curta de `03-planejamento-da-aplicacao.md` + "MVP em 4 passos. Depois da aprovação, salve só docs/plano.md e pare." Antes de aprovar: cada passo tem "como testar" e nenhuma biblioteca fora da stack. Aprovo escolhendo Manual. Atenção: o 03 não foi ensaiado. **[Checagem]** Apareceu React no plano: aprovo? (Não; peço o porquê e a alternativa.)
- **H+1:17 · slide 30 · P3 · Criar o projeto e o CLAUDE.md** · 3 min · Sonnet 5.5 · medium · Plan → Accept edits
  Terminal, aba 2, em `C:\Users\rober\projetos\projeto-b`. Ali só existe `docs\`, com o que o P1 e o P2 gravaram (brief.md, requisitos.md e plano.md). Copio a base, ponho os docs dentro dela e salvo o jogo:

  ```powershell
  Copy-Item -Recurse C:\Users\rober\workshop-ia\projeto-b-base .\meu-site
  cd meu-site
  Move-Item ..\docs\* .\docs\
  git add -A
  git commit -m "docs: brief, requisitos e plano do projeto"
  git tag passo-1
  ```

  Não rodo `git init`: a base já tem git na `main`, com 1 commit. O `..\docs\*` move só os arquivos, porque a base já tem `docs\` (com .gitkeep); `Move-Item ..\docs .\docs` criaria `docs\docs`. A pasta `..\docs` fica vazia e não atrapalha. Confiro com `git log --oneline`: 2 commits, o de cima com a tag passo-1. Os avisos "CRLF will be replaced by LF" são normais. Esta sequência foi ensaiada em 19/10 numa pasta temporária, com docs falsos e a base sem nada modificado: cópia em menos de 1 s, commit e tag na `main`, `npm run build` sem erro e `npm test` com 2 testes passando.

  App: sessão nova na pasta meu-site, Sonnet 5.5 · medium · Plan. Mostro a árvore da base e o `vite.config.js` com base `/meu-site/`. Versão curta de `05-estrutura-de-arquivos.md`. Na base já existem o git, o `vite.config.js` e as pastas, e não há exemplo para apagar: o plano só deve criar uma `<section id>` por seção no index.html e um `src/sections/<secao>.js` para cada uma. Se ele propuser `git init`, trocar a base ou apagar arquivos, respondo "isso já existe; só as seções". Aprovo em Accept edits e libero o `npm run build`. `/init` + "enxugue o CLAUDE.md, até 60 linhas; mostre o diff antes de salvar". Commit "chore: estrutura das seções e CLAUDE.md". Sem a base (plano B, uns 3 min): `npm create vite@latest meu-site -- --template vanilla`, `cd meu-site`, `npm install`, `npm install gsap`, `Move-Item ..\docs .\docs` (aqui ainda não existe docs\) e `git init -b main` antes do primeiro commit. O `-b main` importa: o git desta máquina cria a branch master, e o deploy do P12 espera a main. Nesse caso, deixo o 05 criar tudo: o vite.config.js com base '/meu-site/' e appType 'mpa', e as pastas public\img, frames e fonts. No P6, se faltar a pasta, rodo antes `New-Item -ItemType Directory -Force public\img`. **[Checagem]** Por que nomes em minúsculas e sem acento? (O GitHub Pages diferencia maiúsculas.)

### Bloco 4 · Construir · H+1:20 a 2:05 · pasta meu-site

- **H+1:20 · slide 31 · Do visual à animação** · 1 min
  Terminal, aba 2: `npm run dev` (endereço terminado em /meu-site/); aba 4: `git status` limpo. **[Checagem]** Por que a animação fica para o fim? (Sem página não há o que animar.)
- **H+1:21 · slide 32 · P4 · Identidade visual com uma skill** · 7 min · Opus 5.5 · high · Plan → Sonnet 5.5 · medium · Accept edits
  `/skills` mostra a frontend-design. Versão curta de `06-identidade-visual.md` com estilo e paleta da ficha. Leio as duas direções; **[Turma]** escolhe com a mão: A, B ou misturar. Troco para Sonnet e aprovo. Abro estilo.html no endereço do dev e confiro F12 › Network › Font (tudo do localhost). No ensaio, o botão reprovou no 1º cálculo de contraste: confiro o par texto do botão sobre a cor de destaque. Commit "feat: identidade visual". **[Checagem]** O que é contraste AA? (Pelo menos 4,5:1 no texto normal.)
- **H+1:28 · slide 33 · Com e sem skill de design** · 3 min
  Mostro o slide e a aba do sem-skill.png. "A skill orienta; quem decide e confere sou eu." **[Checagem]** O que vocês ainda criticariam na versão com skill? (Fontes do Windows; o visual comum de turismo.)
- **H+1:31 · slide 34 · P5 · Gerar imagens (demonstração)** · 4 min · nada ao vivo
  No SONORA: o anel de cobre é o mesmo do topo à cena. Abro o `08-geracao-de-imagens.md` e leio a ordem do prompt; 112 créditos no total, contando os kits de reserva. Abro o kit do tema no Explorador, direto na pasta do kit. **[Checagem]** Por que não gerar ao vivo? (Custa créditos, tem fila, depende da internet.)
- **H+1:35 · slide 35 · P6 · Construir a landing page** · 12 min · Sonnet 5.5 · medium · Accept edits
  Terminal: `Copy-Item C:\Users\rober\workshop-ia\_geracoes\kits\<tema>\*.webp public\img\` (a base já tem `public\img`; as 6 WebP têm de 40 a 340 KB). Versão curta de `10-landing-page.md` + "as fotos estão em public/img; use-as direto, sem espaço reservado" (evita o retrabalho do ensaio). Aprovo o `npm run build`. Confiro: Console limpo, Ctrl + Shift + M em 375 px sem rolagem lateral, Tab chega ao botão, `/diff` e package.json sem dependência nova. `git add -A`, `git commit -m "feat: landing page"`, `git tag passo-landing`. **[Checagem]** Como eu sei que ficou pronto? (Build, console, celular; não porque o Claude disse.)
- **H+1:47 · slide 36 · P7 · Animação de scroll** · 10 min · Sonnet 5.5 · medium · Accept edits
  Referência: rolo a cena do SONORA e emulo reduced-motion (F12 › Ctrl + Shift + P › "reduced motion"). No Projeto B: versão curta de `12-animacoes-de-scroll.md` com a animação da ficha + "antes de codar, diga a técnica em até 5 linhas e espere meu OK". Testo devagar, rápido, F5 no meio e reduced-motion. A gsap-skills não está instalada: sigo sem ela. Commit "feat: animação de scroll" e `git tag passo-animacao`. Falhou em 5 min: `git stash push -u` e, se o tema for viagens, `npm run dev` em `C:\Users\rober\workshop-ia\ensaio-viagens\site` (a rota ensaiada; o endereço termina em `/andara-viagens/` e, com o dev do meu-site ainda aberto, sobe na porta 5174). **[Checagem]** Para que serve a versão reduced-motion? (Quem é sensível a movimento vê tudo, parado.)
- **H+1:57 · slide 37 · Técnicas de animação: quando usar cada** · 3 min
  Linha por linha. No SONORA: F12 › Network › Img › Ctrl + Shift + R: os quadros q001.webp chegam todos na carga. "Guardem este número, uns 4,4 MB: às 2:27 ele cai." **[Checagem]** A rota se desenhando no mapa: qual técnica? (SVG com o traço animado pelo GSAP.)
- **H+2:00 · slide 38 · Debugging: erro controlado** · 5 min · Opus 5.5 · high · Manual
  Tudo commitado. Troco uma letra no import da animação em `src/main.js`; aparece a caixa vermelha do Vite; copio o erro do Console. Versão curta de `16-debugging.md` com o erro. Leio as hipóteses, escolho uma, aprovo a menor correção e o build. **[Checagem]** O que o erro já está dizendo? (Qual import não foi achado e onde.) Teto de 5 min: Esc e `git restore src/main.js`.

### Bloco 5 · Revisar, GitHub e Notion · H+2:05 a 2:35 · pasta do SONORA

- **H+2:05 · slide 39 · Revisar, versionar e registrar a entrega** · 1 min
  Volto para o SONORA: aba Code, terminal aba 1, GitHub e Notion na view Quadro. **[Checagem]** Se já funciona no meu PC, por que não publicar direto? (Ninguém conferiu e não fica registrado.)
- **H+2:06 · slide 40 · P8 · Revisar o design com a skill /review-landing** · 6 min · Opus 5.5 · high · Plan
  Ctrl + C no preview da aba 1 e `npm run dev`. Sessão nova no SONORA. `/skills` e abro o SKILL.md: "skill é texto que dá para ler". Versão curta de `15-revisao-de-design.md` com as variáveis do SONORA (tabela do arquivo 15). Leio a tabela. Se ela trouxer o hero no tablet, o peso da 1ª carga ou as miniaturas: "é exatamente isso que vou entregar agora". `git status`: nada modificado. **[Checagem]** Contraste de 3:1 é fato ou opinião? (Fato: se mede.)
- **H+2:12 · slide 41 · P9 · Branch, diff e commits que contam o porquê** · 6 min
  Momento crítico 4c, passos 1 e 2. **[Checagem]** O que há de errado em `git commit -m "update"`? (Não diz o quê nem por quê.)
- **H+2:18 · slide 42 · P10 · Pull request, review por outro LLM e merge** · 8 min
  Momento crítico 4c, passos 3 a 8. **[Turma]** Acompanham no celular em github.com/Movits/sonora/pulls. **[Checagem]** Quem aperta o merge? (Uma pessoa, com CI verde e revisão.)
- **H+2:26 · slide 43 · Errei! restore, revert e reset** · 2 min
  Enquanto o Pages publica. Na main: apago uma palavra do index.html, `git status`, `git diff`, `git restore index.html`, `git status` limpo. **[Checagem]** Commit com bug já no ar: qual comando? (git revert, por PR.)
- **H+2:28 · slide 44 · P11 · Registrar a entrega no Notion** · 4 min · Sonnet 5.5 · low · Manual
  Momento crítico 4c, passo 9. **[Checagem]** Por que o Claude não marca Concluído? (Quem fez não confere o próprio trabalho.)
- **H+2:32 · slide 45 · Como a equipe do WRW trabalha** · 3 min
  Aponto cada caixa e onde ela apareceu hoje: cartão (P9 e P11), commits (P9), PR, CI, revisão e merge (P10), deploy na aba Actions. **[Checagem]** Onde a IA não decide? (No merge e no Concluído.)

### Bloco 6 · Publicar e fechar · H+2:35 a 3:00

- **H+2:35 · slide 46 · Do seu computador para a internet** · 1 min
  **[Turma]** Quanto custa deixar o SONORA no ar? (Zero de hospedagem: o repositório é público.) Passou de 2:38: o P12 vira só build e preview (corte 6).
- **H+2:36 · slide 47 · P12 · Publicar no GitHub Pages** · 8 min · Sonnet 5.5 · medium · Manual
  Aba Code em meu-site. Antes: `git status` limpo e `.env` listado no .gitignore (a base já traz), porque o repositório vai ser público. Aprovo `gh repo create meu-site --public --source=. --push` (o nome estava livre em 19/10). Prompt completo de `25-deploy.md` com Movits e meu-site. GitHub › Settings › Pages › Source: GitHub Actions. No diff: o workflow. A base `'/meu-site/'` já veio da pasta base: confiro no `vite.config.js` que ela continua igual ao nome do repositório. Aprovo build e preview (http://localhost:4173/meu-site/), push e PR; eu clico em Merge. Actions verde, https://movits.github.io/meu-site/ e F12. **[Checagem]** Por que o base leva o nome do repositório? (O site mora numa subpasta do endereço.)
- **H+2:44 · slide 48 · Custos e limites** · 4 min
  Anel de uso e `/usage`. Preço de plano não chuto: claude.com/pricing. **[Checagem]** Vídeo de 17,5 créditos, a US$ 0,033 a 0,059 o crédito: quanto? (De uns 58 centavos a 1 dólar e 3 centavos.)
- **H+2:48 · slide 49 · Contexto longo: /compact ou sessão nova** · 3 min
  Momento crítico 4d.
- **H+2:51 · slide 50 · Segurança: antes de instalar uma skill** · 4 min
  Aba do scroll-craft, sem instalar: SKILL.md (Bash liberado) e Issues. Falo só do código. "Popular não quer dizer seguro." **[Checagem]** Um script lê process.env e envia arquivo para um domínio desconhecido: o que vocês fazem? (Não instalam; leem o trecho e as issues.)
- **H+2:55 · slide 51 · Leve para casa** · 5 min
  Seção 6.

---

## 4. Os 4 momentos críticos

### 4a. Abertura com o SONORA rolando · slide 2, H+0:02 (2 min de tela, 2 de conversa)

Preparo: aba 2 no topo, F12 fechado, mouse com roda, preview rodando na aba 1 como reserva.

1. **0:00–0:20.** Alt + Tab para o Chrome. "Este é o Projeto A. A marca não existe e nada é vendido." Espero uma troca de cor no topo (acontece a cada 5,6 s).
2. **0:20–1:00.** Rolo devagar até a cena: o fone se desmonta. Paro no meio. "Isto não é um vídeo tocando: é a rolagem folheando 121 quadros." Rolo para cima: ele se monta de novo.
3. **1:00–1:20.** Sigo até o painel Inverter: "esta onda é desenhada por código, sem imagem".
4. **1:20–1:40.** Na reserva, troco uma opção e o recibo muda. Clico em "Reservar o meu": a janela "Reserva demonstrativa" aparece. "Nada é cobrado."
5. **1:40–2:00.** F12 e Ctrl + Shift + M: rolo um pouco no modo celular. Fecho o F12 e volto ao slide com o QR.

Não explico código agora: "o capô abre no próximo slide". Wi-Fi lento: hotspot e http://localhost:4173/sonora/. Animação engasgando: fecho abas, baixo para 1280×720 ou toco o `sonora-scroll.mp4` (pasta WRW - Workshop do OneDrive, em reservas; conferir na preparação).

### 4b. Tema da turma e variáveis · slide 27, H+1:01 (3 min)

1. **0:00–0:30.** "Três temas têm kit de imagens pronto. Outro tema vale, mas entra sem foto, com blocos no lugar."
2. **0:30–1:15.** Uma rodada de mão levantada: viagens, hamburgueria, relógio ou outro. Maioria simples. Empate ou silêncio: **viagens**, o único ensaiado do começo ao fim. Não abro debate.
3. **1:15–2:30.** Colo a ficha do tema na cola, ao lado do app. **[Turma]** muda só dois campos: o nome da marca e o público-alvo. "Me deem um público concreto: idade e lugar." Ninguém sabe: escrevo "não sei, me pergunte". Marca real, não: o site vai ao ar em público, então o nome é inventado.
4. **2:30–3:00.** Leio as linhas em voz alta e sigo para o P1. [STACK] é fixa: Vite + JavaScript puro + GSAP pelo npm, GitHub Pages.

| Variável | Viagens (ensaiado) | Hamburgueria (não ensaiado) | Relógio (não ensaiado) |
|---|---|---|---|
| [NOME_DA_MARCA] | ANDARA Viagens (fictícia) | Brasa (fictícia, do Exercício 1) | a turma batiza (fictícia) |
| [SEGMENTO] | turismo de natureza | hamburgueria artesanal | relógio mecânico, lançamento |
| [PRODUTO_OU_SERVIÇO] | roteiros de 7 a 10 dias, grupos pequenos: Patagônia, Portugal e Japão | smash burger, batata e milkshake, num salão de bairro | relógio de aço com mostrador verde e 3 pulseiras trocáveis |
| [PÚBLICO_ALVO] | adultos de 28 a 45 que querem natureza com conforto | a turma define (ex.: universitários de 18 a 25 do bairro) | a turma define (ex.: adultos de 30 a 50 que gostam de mecânica) |
| [OBJETIVO_DO_SITE] | pedir orçamento pelo WhatsApp | ver o cardápio e pedir pelo WhatsApp | entrar na lista de espera, demonstrativa, sem coletar dados |
| [FUNCIONALIDADES] | destinos, roteiro, mapa da rota, perguntas frequentes, orçamento | hero com "Ver cardápio", cardápio, a chapa, o salão e o endereço | hero, o relógio por dentro, mostrador, pulseiras, na caixa, lista de espera |
| [ANIMAÇÃO_DESEJADA] | linha da rota que se desenha no mapa | o hambúrguer se desmonta: hero.webp → explodido.webp com pin e scrub | o relógio se abre: hero.webp → explodido.webp com pin e scrub |
| [CRITÉRIOS_DE_ACEITAÇÃO] | build sem erro; console limpo; botão na 1ª tela do celular; 390 px sem rolagem lateral | igual | igual |
| Estilo e paleta (P4) | claro e editorial; areia, verde-musgo, azul-profundo, laranja só no botão | escuro e divertido; fundo #1a1a1a, destaque #ff6b1a | escuro e técnico; grafite, verde do mostrador e aço |
| Kit (6 WebP) | hero, destino-montanha, destino-cidade, destino-templo, viajantes, essenciais | hero, explodido, chapa, batata, milkshake, salao | hero, explodido, mostrador, pulseiras, pulso, estojo |

Tema sem kit: blocos reservados no lugar das fotos e animação simples (títulos e cartões entrando). Nunca foto do rosto de alguém da turma.

### 4c. A PR ao vivo · slides 41 a 44, H+2:12 a 2:32 (20 min)

Preparo: branch `fix/achados-review-landing` no GitHub, 3 commits, sem PR; main limpa, já com as PRs #2 e #3 (materiais) mescladas; cola com o link do cartão e o número da PR ao vivo. Ela vai ser a **#4**: confiro com `gh pr list --state all` na preparação e, ao vivo, uso o número que o `gh pr create` devolver. Não refaço ao vivo o que já está pronto: "a branch é a obra; agora vem a entrega". A P9 leva uns 3 min dos 6 previstos: a sobra vira folga do P10. A branch foi atualizada com a `main` por merge em 20/10, sem reescrever a história, para o `git switch` não levar a pasta de volta a antes das PRs #2 e #3 (o guia, os relatórios e o `settings.json` em Sonnet continuam no disco). Por isso os comandos usam `--no-merges` e a aba Commits da PR mostra 4 itens: os 3 commits e o merge da `main`.

1. **H+2:12 · Notion.** Arrasto o cartão "PR ao vivo na aula" para Em andamento. "Primeiro o cartão, depois a branch, só então o código."
2. **H+2:13 · Terminal, aba 3.** `git switch fix/achados-review-landing`, `git log --oneline --no-merges main..HEAD` (os 3 commits), `git log -1 --no-merges --format=%B` (Por quê e Co-Authored-By; sem `--format` aparece a linha Author com o meu e-mail) e `git diff main...HEAD --stat`. No Chrome, no dev: Ctrl + Shift + M em 768 px, o texto do topo não cobre mais a foto.
3. **H+2:18 · Abrir a PR.** Na sessão do P8, troco para Sonnet 5.5 · medium · Manual. Confiro que o preview da porta 4173 está parado (senão o `npm test` testa a versão velha). Colo a versão curta de `21-pull-request.md`. O Claude roda `npm test` e `npm run build` e mostra título e corpo nas seções do template. Leio em voz alta e confiro: link do cartão em "Por quê"; "Como verifiquei" só com o que rodou. "OK." Aprovo o `git push` (vai dizer que já está atualizado) e o `gh pr create`.
4. **H+2:20 · Na PR (#4).** Descrição, aba Files changed (só os 3 arquivos) e o check "Testes" rodando (levou de 0,5 a 1,5 min nos runs de 19/10).
5. **H+2:20 · Review por outro LLM, enquanto o CI roda.** Sessão nova no SONORA · Opus 5.5 · high · Plan: `/code-review 4` (sem --fix) e a linha de triagem da versão curta de `22-revisao-de-codigo.md`. Para cada achado: é verdade? importa? cabe nesta PR? Padrão da noite: achado real que não bloqueia vira cartão. Bloqueante de verdade: commit novo na branch, e o CI roda de novo (+3 min, só se o relógio deixar).
6. **H+2:24 · Merge.** `gh pr checks 4` verde. Na sessão Sonnet, versão curta de `23-merge.md`: checklist com OK ou FALTA. "Quem aperta o merge sou eu." Clico em Merge pull request › Confirm merge (ou aprovo `gh pr merge 4 --merge --delete-branch`). A main não tem proteção: com CI vermelho, não mesclo; a regra é nossa.
7. **H+2:25 · Deploy.** `git switch main` e `git pull`. Aba Actions: "Publicar no GitHub Pages" (uns 30 s em 19/10). Enquanto roda: slide 43, Errei!.
8. **H+2:27 · Prova no ar.** https://movits.github.io/sonora/ com Ctrl + Shift + R. F12 › Network: a 1ª carga agora fica perto de 437 KB, e os quadros só chegam quando a cena entra na tela. Em 768 px, o hero empilhado. "Sem prova, não está pronto."
9. **H+2:28 · Notion (P11).** Mesma sessão, Sonnet 5.5 · low · Manual. Copio o link da PR da barra. Versão curta de `24-documentacao-no-notion.md` com o quadro "Trabalho | SONORA", o cartão "PR ao vivo na aula" e o link. O Claude lê e mostra o antes e o depois; leio campo por campo e digo "pode gravar"; aprovo a ferramenta de escrita do Notion. Confiro: view Quadro, cartão em Feito (a validar); abro o cartão e clico na Comprovação; view Entregue. "Quem faz não conclui: Concluído só quando outra pessoa conferir o site no ar."

Planos B: CI vermelho, clico em Details, colo o erro no Claude e corrijo com commit novo na branch (até 5 min); depois disso, PR #1 e `ciclo-da-pr.mp4` (pasta WRW - Workshop do OneDrive; conferir na preparação). `gh pr create` falha: abro pela aba compare (o template preenche sozinho). `gh` pede login: `gh auth status` e login com a projeção cortada (Win + P › Somente tela do PC). Pages não atualiza: aba Actions, Ctrl + F5 ou janela anônima. Notion falha: arrasto o cartão e colo o link à mão (2 min).

### 4d. /compact e /context · slide 49, H+2:48 (3 min)

Onde: na sessão Sonnet do SONORA usada do P8 ao P11, a mais longa da noite (revisão, PR e Notion). Abro pela barra lateral.

1. **0:00–0:30.** Mouse no anel de uso. `/context`: leio a grade em voz alta, o que ocupa a mesa (instruções, CLAUDE.md, ferramentas e o MCP do Notion, mensagens) e falo o percentual.
2. **0:30–1:00.** VS Code: CLAUDE.md, seção "Compact instructions". "Isto é relido do disco depois de compactar."
3. **1:00–2:00.** Digito numa linha só: `/compact Preserve decisões arquiteturais, estrutura do projeto, bugs conhecidos, critérios de aceitação, comandos importantes, pendências e próximos passos. Descarte tentativas abandonadas e explicações repetidas.` Enquanto resume: "é passar o caderno a limpo".
4. **2:00–2:30.** `/context` de novo: a fatia de mensagens encolheu. Pergunto ao Claude: "Qual é o número da PR de hoje e em que status ficou o cartão?" Lembrou: o resumo guardou o essencial. Não lembrou: "por isso o que importa vai para o CLAUDE.md, o commit e o cartão".
5. **2:30–3:00.** **[Checagem]** Terminei a animação e vou fazer o deploy: compacto ou sessão nova? (Sessão nova: outra tarefa.) "/clear não desfaz edição nenhuma."

`/context` não abre no app: uso o anel de uso. `/compact` não responde: mostro o texto do slide e a seção do CLAUDE.md, e sigo. Atrasado: só o slide, em 1 min (corte 2).

---

## 5. Se atrasar, se sobrar

**Ordem de corte**, de cima para baixo. É a do plano de contingência, com os itens do deck encaixados em 5 e 6.

| # | O que sai | Como fica | Ganho |
|---|---|---|---|
| 1 | P5 imagens (slide 34) | kit e custos em 1 min | 3 min |
| 2 | Comandos extras (slides 8, 14 e 49) | sem /context, /usage, /compact nem /rewind ao vivo; só o slide | 4 min |
| 3 | Detalhe técnico do SONORA (slides 3 e 37) | sem abrir os quadros no GitHub nem a aba Network | 3 min |
| 4 | Skills: comparativo e segurança (slides 33 e 50) | 1 min cada, só a regra "leia antes de instalar" | 5 min |
| 5 | Debugging (slide 38) | só o slide, 1 min | 4 min |
| 6 | P12 deploy do Projeto B (slide 47) | `npm run build` e `npm run preview`; o deploy já foi visto no SONORA | 6 min |
| 7 | Notion pelo MCP (slide 44) | cartão arrastado e link colado à mão | 2 min |
| 8 | Ciclo PR ao vivo (slides 41 e 42) | `ciclo-da-pr.mp4` (PR #1, checks, Actions e site; 2 min) e a PR #1 | 10 min |
| 9 | Prática dos alunos e exercícios (18 e 25) | 3 e 2 min, só os primeiros passos; o resto para casa | 4 min |

Cortes dentro do Projeto B, sem mexer na ordem acima: P1 sem o requisitos.md; P2 com Sonnet e até 6 passos; P3 com o /init para casa; P4 aceitando uma direção como veio.

**Nunca cortar:** o Projeto B no navegador com pelo menos uma animação (mesmo que venha do site do ensaio); o fluxo inteiro explicado, de ideia a cartão atualizado (mesmo que pelo slide 45); a segurança básica (nada de segredo na tela, Manual para iniciante, ler antes de aprovar e de instalar); o encerramento de 5 min com os links.

**Se sobrar tempo**, nesta ordem:

1. P7: ligar `markers: true` e mostrar onde o pin começa e termina (2 min).
2. Uma interação com `14-interacoes.md`: perguntas frequentes em `<details>`, com `ScrollTrigger.refresh()` no evento toggle (5 min, Sonnet · medium · Accept edits).
3. P9: aplicar ao vivo mais um item da revisão como 4º commit da branch, com a versão curta de `20-commits.md`, plano de commits e OK (4 min, antes do P10).
4. Validação pela turma: alguém abre o SONORA no celular e confere os critérios da PR. Com o "conferi" dela, eu movo o cartão para Concluído: quem fez não concluiu (2 min).
5. `/usage` no fim: quanto a noite gastou.
6. Perguntas abertas.

---

## 6. Encerramento · slide 51, H+2:55 (5 min)

"Se vocês lembrarem de uma coisa só: a IA deixa a gente construir coisas sofisticadas, mas quem entende o pedido, verifica o resultado e organiza o trabalho somos nós."

1. **Método antes de prompt.** Explicação, demonstração, prompt, execução, verificação e reflexão.
2. **Verifique antes de aceitar.** Build, console, celular e diff. "Pronto" sem prova não está pronto.
3. **Versione tudo.** Commit pequeno, branch e PR.
4. **Documente a entrega.** Cartão com o link da PR; quem faz não conclui.
5. **Comece pequeno e itere.** Uma seção, uma animação, um deploy; depois, a próxima.

QR codes na tela por pelo menos 1 minuto:

| QR | Endereço |
|---|---|
| Site SONORA | https://movits.github.io/sonora/ |
| Repositório | https://github.com/Movits/sonora |
| Prompts | https://github.com/Movits/sonora/tree/main/workshop/prompts |
| Apostila | https://github.com/Movits/sonora/blob/main/workshop/apostila.md |

Abro o SONORA no meu celular para mostrar que o link funciona. Se o P12 saiu, falo também https://movits.github.io/meu-site/. Sem QR: dito github.com/Movits/sonora e escrevo no quadro. **[Turma]** Qual é o primeiro passo em casa? (Refazer o Projeto B num repositório seu e publicar: a semana 1 da apostila.) Dúvidas?

"Obrigado pela noite. Bom trabalho, e até a próxima."

Depois da aula: checklist, bloco 9 (restaurar as configurações, atualizar os cartões, anotar o que deu errado).
