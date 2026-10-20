# Guia de comandos (guia de bolso)

Workshop de IA · 20/10/2026 · Projeto A (SONORA) e Projeto B (ao vivo)

Este guia junta, em um lugar só, os comandos que aparecem na aula. Não precisa decorar nada: deixe aberto ao lado e consulte quando travar.

**Como ler:**

- `assim` = o que você digita. Troque o que estiver entre `< >` pelo seu valor (sem os sinais `< >`).
- **(conferir na sua versão)** = o comportamento muda entre versões ou entre a CLI e o app desktop. Teste antes de contar com ele.
- Comandos e recursos conferidos em 19/10/2026 na documentação oficial de cada ferramenta.

## Sumário

1. [Claude Code](#1-claude-code)
2. [Terminal](#2-terminal)
3. [Node e npm](#3-node-e-npm)
4. [Git e GitHub](#4-git-e-github)
5. [DevTools do navegador](#5-devtools-do-navegador)
6. [Socorro rápido](#6-socorro-rápido)

---

## 1. Claude Code

### 1.1 Onde você digita

| Superfície | Como abrir | Observação |
|---|---|---|
| **App Claude Desktop, aba Code** | Abra o app e clique na aba **Code** | É onde a demo da aula acontece. Seletor de modelo, de modo e de effort ficam na própria interface. |
| **CLI (terminal)** | Digite `claude` dentro da pasta do projeto | Só para quem instalou. Alguns comandos abrem painéis interativos que só existem no terminal. |

Os comandos começam com `/` e são digitados na caixa de mensagem, como se fosse uma conversa.

### 1.2 Comandos

| Comando | Para que serve | Quando usar | Exemplo | Resultado esperado | Limitações / disponibilidade (CLI x app desktop) |
|---|---|---|---|---|---|
| `/help` | Mostra a ajuda e a lista de comandos | Quando esquecer um comando | `/help` | Lista de comandos da sua versão | CLI e app. A lista muda entre versões. |
| `/init` | Cria o `CLAUDE.md`, o "manual do projeto" que o Claude lê no início de cada sessão | Uma vez, logo depois de criar o projeto | `/init` | Arquivo `CLAUDE.md` na raiz, com stack, comandos e estrutura | Leia e corrija o texto gerado: ele pode errar. No app: conferir na sua versão. |
| `/model` | Troca o modelo | Para equilibrar velocidade, capacidade e custo | `/model sonnet` | As próximas respostas usam o modelo escolhido | Aliases: `default`, `sonnet`, `opus`, `haiku`, `fable`, `opusplan` (Opus no Plan e Sonnet na execução). No app há seletor de modelo na interface. O acesso ao Fable pode ser restrito na sua conta. |
| `/effort` | Ajusta quanto o modelo raciocina antes de agir | Subir em tarefa difícil; baixar em tarefa simples | `/effort medium` e `/effort status` | Novo nível vale para as próximas respostas; `status` mostra o nível atual | Níveis: `low`, `medium`, `high`, `xhigh`, `max`. `max` vale só na sessão. `/effort auto` limpa o nível salvo. Sem argumento abre um controle deslizante (terminal). No app há menu de effort. |
| `/plan` | Entra no modo Plan: o Claude lê, pesquisa e propõe um plano antes de mexer em arquivos | Antes de qualquer mudança grande | `/plan crie a seção de cardápio com 3 cards e animação de entrada` | Um plano para você aprovar; nada é editado antes da aprovação | Também entra pelo ciclo do Shift+Tab. No app, o Plan vale só para a sessão. |
| `/skills` | Lista as skills disponíveis (pessoais e do projeto) | Para ver o que está instalado e o nome para chamar | `/skills` | Lista de skills | No terminal, a tecla `t` ordena por tokens. No app: conferir na sua versão. |
| `/mcp` | Mostra os servidores MCP (conectores, como o Notion) e o estado de cada um | Quando um conector não responde | `/mcp` | Lista com status; permite reconectar, ativar e desativar | Conectores do claude.ai aparecem quando você entra com a conta claude.ai. O painel se comporta diferente no app. |
| `/diff` | Mostra o que mudou nos arquivos e ainda não foi commitado | Antes de commitar, para revisar | `/diff` | Diferenças linha a linha | Parecido com `git diff`. No app: conferir na sua versão. |
| `/context` | Mostra quanto da janela de contexto (a "memória de curto prazo" da conversa) está ocupada | Sessão longa ou respostas confusas | `/context` e `/context all` | Grade de uso por tipo (conversa, arquivos, skills...) | `all` expande a grade. No app, o anel ao lado do seletor de modelo mostra contexto e uso do plano. |
| `/compact [instruções]` | Resume a conversa para liberar contexto, mantendo o que importa | Ao fechar uma etapa, ou quando o `/context` mostrar a janela quase cheia | Veja o bloco [1.3](#13-compact-com-instruções) | Conversa resumida; você continua de onde parou | Funciona no app. Sem instruções, o Claude decide o que manter. Também acontece sozinho perto do limite (auto-compact). |
| `/clear` | Começa uma conversa nova, do zero | Ao trocar de tarefa | `/clear` | Contexto vazio; os arquivos continuam como estão | Aliases `/reset` e `/new`. Não desfaz edições. Não custa nada. |
| `/usage` (alias `/cost`) | Mostra o uso da sessão e os limites do plano | Para acompanhar o consumo | `/usage` | Uso da sessão e quanto resta do limite | `/cost` e `/stats` são aliases. Com chave de API, a cobrança é por token. |
| `/permissions` | Mostra e edita as regras de permissão (`allow`, `ask`, `deny`) | Para liberar ou bloquear um comando específico | `/permissions` | Painel de regras | Alias `/allowed-tools`. No app, sem argumento, responde que não está disponível. |
| `/memory` | Abre o `CLAUDE.md` para editar e liga ou desliga a memória automática | Para registrar uma regra do projeto | `/memory` | Escolha de qual `CLAUDE.md` editar | No app: conferir na sua versão. |
| `/resume` | Retoma uma sessão anterior | Para voltar a uma tarefa de outro dia | `/resume` | Lista de sessões para escolher | Alias `/continue`. O painel se comporta diferente no app (conferir na sua versão). |
| `/rewind` | Volta a um ponto anterior da sessão (checkpoint) | O Claude estragou algo nos últimos passos | `/rewind` (ou Esc Esc com a caixa vazia) | Opções: restaurar código e conversa, só a conversa, só o código, ou resumir a partir de um ponto | Aliases `/checkpoint` e `/undo`. **Não desfaz** comandos de terminal nem edições feitas fora do Claude. Não substitui o Git. No app: não confirmado (conferir na sua versão). |
| `/config` | Abre as configurações (Settings) | Mudar tema, modelo padrão e outras opções | `/config` | Painel de configurações | Alias `/settings`. Na CLI aceita `chave=valor`; no app abre Settings e ignora argumentos. |
| `/status` | Abre as configurações na aba Status | Conferir a situação da instalação e da conta | `/status` | Aba Status das configurações | O conteúdo exato da aba: conferir na sua versão. |
| `/code-review` (alias `/review`) | Revisa as mudanças atuais (ou uma PR) em busca de bugs | Antes de abrir ou de mesclar uma PR | `/code-review` | Lista de achados, do mais grave ao menos grave | É uma skill. `--fix` aplica as correções; `--comment` comenta na PR. Para só revisar, use **sem** `--fix`. Funciona no app. |
| `/doctor` | Checkup da instalação e da configuração | Quando algo parece quebrado na instalação | `/doctor` | Diagnóstico com correções propostas; só aplica depois da sua confirmação | Hoje é uma skill empacotada (alias `/checkup`). |
| `/agents` | (reduzido) Só mostra um lembrete de como criar subagentes | Raramente | `/agents` | Um aviso curto | Para criar um subagente: peça ao Claude ("crie um subagente revisor que só lê arquivos") ou crie um arquivo em `.claude/agents/` com `name` e `description`. |

> **Dica de modelo para a aula:** use Sonnet 5.5 com effort `medium` como padrão. Para planejar algo grande, Opus 5.5 com effort `high` no modo Plan (ou o alias `opusplan`). É uma orientação, não uma regra oficial.

### 1.3 `/compact` com instruções

Quando a conversa ficar longa, diga ao Claude o que guardar e o que jogar fora:

```text
/compact Preserve decisões arquiteturais, estrutura do projeto, bugs conhecidos, critérios de aceitação, comandos importantes, pendências e próximos passos. Descarte tentativas abandonadas e explicações repetidas.
```

O que volta sozinho depois de compactar:

- o `CLAUDE.md` da raiz e a memória automática (relidos do disco);
- até 5 arquivos usados por último;
- as skills que você chamou na sessão (com limite de tamanho: até 5 mil tokens cada).

O resto vira resumo e pode perder detalhes. As regras com `paths:` também não voltam como estavam.

Analogia: é como passar a limpo o caderno. Você reescreve só o que importa e joga fora os rascunhos.

> Instruções de compactação que valem sempre podem ficar numa seção "Compact instructions" do `CLAUDE.md`.

### 1.4 Atalhos

| Atalho | O que faz | Onde funciona |
|---|---|---|
| **Shift+Tab** | Troca o modo de permissão, em ciclo: Manual → Accept edits → Plan → Auto → Manual (o Bypass só entra no ciclo se for ativado) | CLI. Se não funcionar no terminal do Windows, tente **Alt+M**. No app, use o seletor abaixo da caixa de mensagem. |
| **Esc** | Interrompe o Claude no meio da ação. O que já foi feito fica. | CLI. No app: conferir na sua versão. |
| **Esc Esc** | Com texto digitado, limpa a caixa. Com a caixa vazia, abre o menu de rewind. | CLI. No app: conferir na sua versão. |
| **Ctrl+Shift+I / Ctrl+Shift+E / Ctrl+Shift+M** | Abrem o seletor de modelo / de effort / de modo | App desktop no Windows (no macOS, Cmd no lugar de Ctrl). Conferir na sua versão. |

### 1.5 Modos de permissão

Analogia: o Claude é um estagiário muito rápido. O modo define o que ele pode fazer sem pedir a sua licença.

| Modo (nome na interface) | O que roda sem perguntar | Quando usar na aula |
|---|---|---|
| **Manual** (antes chamado "Ask permissions") | Só leitura. Pede licença antes de editar arquivo ou rodar comando. | `git push`, PR, merge, escrita no Notion e depuração: você aprova cada passo. |
| **Accept edits** | Leitura, edição de arquivos e comandos simples de pasta (`mkdir`, `mv`, `cp`) | Construir o site dentro da pasta do projeto. Outros comandos continuam pedindo licença. |
| **Plan** | Só leitura. Edita só depois que você aprova o plano. | No começo de cada tarefa, para ver o plano antes de qualquer mudança. |
| **Auto** | Tudo, mas um classificador revisa cada ação antes | Só em pasta de demonstração, sem senhas nem segredos. A própria documentação diz que ele **não garante segurança**. Existe em todos os planos, mas exige modelo compatível e pode estar desligado pelo administrador (Team ou Enterprise). |

**Fluxo recomendado:** Plan (pensar) → aprovar o plano → Accept edits (construir) → Manual (enviar para o GitHub e atualizar o Notion).

> **Atenção:** a partir da versão 2.1.283, sessões novas no terminal e no VS Code começam em **Auto**. Antes do primeiro pedido, confira o modo e troque para Manual ou Accept edits se preferir mais controle.

**Por que não usar Bypass permissions:**

- Ele roda **tudo** sem perguntar e sem revisão.
- A documentação indica usar só em contêiner ou máquina virtual isolada, nunca no seu computador do dia a dia.
- Um comando errado pode apagar arquivos, rodar algo destrutivo ou ler segredos (como um `.env`).
- No app, ele só aparece se você ativar uma opção nas configurações. Na aula: **não ative**.

> Existe ainda o modo Don't ask, só na CLI, para automação. Também não vamos usar.

### 1.6 Effort x temperatura

São duas ideias diferentes. Muita gente confunde.

| | Effort | Temperatura |
|---|---|---|
| **O que é** | Quanto o modelo raciocina e confere antes de responder | Quanto de sorteio existe na escolha das palavras |
| **Analogia** | Quanto tempo o aluno pensa antes de responder a prova | Quanto o aluno improvisa: mesma pergunta, respostas diferentes |
| **Dá para mudar no Claude Code?** | Sim: `/effort`, o seletor do app ou `claude --effort <nível>` | **Não.** O Claude Code não tem esse controle. Nos modelos atuais, a API recusa valores fora do padrão (erro 400). |
| **Efeito** | Mais effort = mais tokens, resposta mais lenta e mais cara | Não se aplica no Claude Code |

Sugestão de uso dos níveis (orientação, não regra oficial):

| Nível | Quando usar |
|---|---|
| `low` | Perguntas rápidas e trocas simples (um texto, uma cor) |
| `medium` | Padrão do dia a dia. É o padrão do Claude Code para Opus 5.5, Sonnet 5.5 e Haiku 5.5. |
| `high` | Planejar, depurar um bug difícil, revisar código |
| `xhigh` | Tarefas longas (mais de meia hora de trabalho do Claude) |
| `max` | Casos raros. Vale só na sessão e é o mais lento. |

> A documentação diverge sobre o padrão do Sonnet 5.5 (`medium` no Claude Code, `high` na API). Para não depender disso, fixe o nível com `/effort medium` e confira com `/effort status`.

---

## 2. Terminal

Analogia: o terminal é uma conversa por texto com o computador. Em cada momento você está "parado" dentro de uma pasta, e os comandos valem para aquela pasta.

Qual terminal usar:

- **Windows:** PowerShell (já vem no Windows) ou Git Bash (vem junto com o Git para Windows).
- **macOS:** o app Terminal.
- Git Bash e o Terminal do macOS usam os mesmos comandos.

### 2.1 Comandos básicos

| Ação | PowerShell (Windows) | Git Bash (Windows) e macOS |
|---|---|---|
| Onde estou? | `Get-Location` (ou `pwd`) | `pwd` |
| Listar arquivos | `ls` (ou `dir`) | `ls` |
| Listar, incluindo ocultos (como `.git`) | `ls -Force` | `ls -la` |
| Entrar numa pasta | `cd meu-site` | `cd meu-site` |
| Voltar uma pasta | `cd ..` | `cd ..` |
| Ir para a sua pasta de usuário | `cd ~` | `cd ~` |
| Criar pasta | `mkdir projetos` | `mkdir projetos` |
| Abrir a pasta atual no VS Code | `code .` | `code .` |
| Limpar a tela | `cls` (ou `clear`) | `clear` |
| Interromper o que está rodando (ex.: `npm run dev`) | **Ctrl+C** | **Ctrl+C** (no macOS também é Ctrl, não Cmd) |
| Repetir um comando anterior | Seta para cima | Seta para cima |
| Completar nome de pasta ou arquivo | Tab | Tab |

> Se `code .` não funcionar: no Windows, reinstale o VS Code marcando a opção de adicionar ao PATH. No macOS, abra o VS Code, aperte Cmd+Shift+P e rode **Shell Command: Install 'code' command in PATH**.

### 2.2 Copiar o caminho da pasta

Pelo terminal:

```powershell
# PowerShell: copia o caminho da pasta atual
(Get-Location).Path | Set-Clipboard
```

```bash
# Git Bash (Windows): copia no formato C:/Users/...
pwd -W | clip

# macOS: copia o caminho da pasta atual
pwd | pbcopy
```

Pelo explorador de arquivos:

- **Windows 11:** clique com o botão direito na pasta e escolha **Copiar como caminho**.
- **macOS (Finder):** selecione a pasta e aperte **Option+Cmd+C**.
- **Atalho universal:** arraste a pasta para dentro da janela do terminal. O caminho aparece escrito.

### 2.3 Caminho absoluto x relativo

Analogia: o absoluto é o endereço completo, com cidade e CEP. O relativo é "duas casas para a esquerda daqui".

| Tipo | Windows (PowerShell) | Git Bash | macOS |
|---|---|---|---|
| Absoluto (funciona de qualquer lugar) | `C:\Users\ana\projetos\meu-site` | `/c/Users/ana/projetos/meu-site` | `/Users/ana/projetos/meu-site` |
| Relativo (estando em `projetos`) | `meu-site` ou `.\meu-site` | `./meu-site` | `./meu-site` |
| Pasta de cima | `..` | `..` | `..` |
| Pasta atual | `.` | `.` | `.` |
| Pasta do usuário | `~` | `~` | `~` |

Exemplos:

```powershell
cd C:\Users\ana\projetos\meu-site   # absoluto: funciona de qualquer pasta
cd ..\outro-site                    # relativo: sobe uma pasta e entra em outro-site
```

```bash
cd /Users/ana/projetos/meu-site     # absoluto no macOS
cd ../outro-site                    # relativo
```

### 2.4 Dica: nomes de pasta de projeto

- Use letras minúsculas e hífen: `meu-site`, `hamburgueria-do-ze`, `cafe-aurora`.
- **Evite espaço, acento e ç.** Muitas ferramentas quebram com eles.
- Crie os projetos numa pasta simples: `C:\Users\<você>\projetos` (Windows) ou `~/projetos` (macOS).
- Evite a Área de Trabalho e pastas sincronizadas (OneDrive, iCloud): o nome tem acento e espaço, e a `node_modules` tem milhares de arquivos que a sincronização tenta copiar.
- Se não tiver jeito e o caminho tiver espaço, use aspas:

```powershell
cd "C:\Users\ana\Área de Trabalho\projeto"
```

---

## 3. Node e npm

Analogia: o **Node** é o motor que roda JavaScript fora do navegador. O **npm** é a loja de peças: baixa e organiza os pacotes que o projeto usa (como o GSAP).

### 3.1 Comandos

| Comando | O que faz | Resultado esperado |
|---|---|---|
| `node -v` | Mostra a versão do Node | Algo como `v22...` ou mais novo. No workshop, use 22 ou mais novo. A versão mínima exata que o Vite exige está na documentação dele (conferir antes da aula). |
| `npm -v` | Mostra a versão do npm | Um número de versão. Se der erro, o Node não está instalado. |
| `npm create vite@latest meu-site -- --template vanilla` | Cria um projeto Vite com JavaScript puro, na pasta `meu-site` | Pasta nova com `index.html`, `package.json` e `src/` (a lista exata muda entre versões) |
| `cd meu-site` | Entra na pasta do projeto | O terminal passa a "estar" no projeto |
| `npm install` | Instala as dependências listadas no `package.json` | Aparecem a pasta `node_modules/` e o `package-lock.json` |
| `npm install gsap` | Adiciona o GSAP ao projeto | `"gsap"` aparece em `dependencies` no `package.json` |
| `npm run dev` | Liga o servidor de desenvolvimento, que recarrega a página a cada mudança | Endereço `http://localhost:5173/` no terminal (se a porta estiver ocupada, ele usa outra). No SONORA, o endereço termina em `/sonora/` por causa da opção `base` do `vite.config.js`. Pare com Ctrl+C. |
| `npm run build` | Gera a versão final, otimizada, para publicar | Pasta `dist/` |
| `npm run preview` | Serve a pasta `dist/` no seu computador, para testar o build | Endereço `http://localhost:4173/` (no SONORA, `http://localhost:4173/sonora/`) |
| `npm test` | Roda o script `test` do `package.json` | No SONORA, roda os testes do Playwright. Num projeto Vite recém-criado não existe esse script e aparece o erro `Missing script: "test"`. |

Observações:

- O `--` no meio do `npm create` serve para passar a opção `--template` para o criador do Vite, e não para o npm.
- Se o criador do Vite fizer alguma pergunta extra (por exemplo, se quer instalar e iniciar agora), conferir na sua versão. Os passos da tabela funcionam de qualquer jeito.
- Para publicar no GitHub Pages, o Vite costuma precisar da opção `base: '/nome-do-repo/'` no `vite.config.js`. Conferir antes do deploy.

Sequência completa do Projeto B:

```bash
npm create vite@latest meu-site -- --template vanilla
cd meu-site
npm install
npm install gsap
npm run dev
```

Como o GSAP entra no código (em `src/main.js`):

```js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

### 3.2 Os três arquivos que confundem

| Arquivo ou pasta | Analogia | O que é | Vai para o Git? |
|---|---|---|---|
| `package.json` | A receita | Nome do projeto, scripts (`dev`, `build`...) e lista de dependências | **Sim** |
| `package-lock.json` | A nota fiscal | Versões exatas de tudo que foi instalado, para todo mundo instalar igual | **Sim** |
| `node_modules/` | A despensa cheia | Os pacotes baixados. É enorme e se recria com `npm install`. | **Não** (vai no `.gitignore`) |

> Baixou um projeto de alguém (ou clonou do GitHub)? O primeiro comando é sempre `npm install`.

---

## 4. Git e GitHub

Analogia: o **Git** é o "salvar jogo" do projeto, com histórico. Cada **commit** é uma foto do projeto naquele momento. Uma **branch** é um rascunho paralelo, onde você testa sem estragar a versão oficial. O **GitHub** guarda tudo na nuvem, e uma **PR** (pull request) é o pedido para juntar o rascunho na versão oficial, depois que alguém revisou.

### 4.1 Configurar (uma vez por computador)

```bash
git --version                                       # confere se o Git está instalado
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
git config --global init.defaultBranch main         # opcional: a branch inicial se chama main
gh auth login                                       # entra na conta GitHub (abre o navegador)
gh auth status                                      # confere se está logado
```

Use no `user.email` o mesmo e-mail da sua conta GitHub.

### 4.2 Comandos seguros do dia a dia

| Comando | O que faz | Exemplo | Cuidado |
|---|---|---|---|
| `git init` | Transforma a pasta atual num repositório Git (cria a pasta oculta `.git`) | `git init` | Rode uma vez, dentro da pasta do projeto, nunca na pasta de usuário inteira. |
| `git status` | Mostra o que mudou, o que está pronto para o commit e em qual branch você está | `git status` | Nenhum. Use o tempo todo. |
| `git add` | Coloca mudanças na "caixa" do próximo commit (stage) | `git add index.html` ou `git add .` | `git add .` pega tudo. Rode `git status` antes e confira o `.gitignore`. |
| `git commit -m` | Grava a foto do projeto com uma mensagem | `git commit -m "feat: adiciona seção de cardápio"` | Mensagem curta, em português, com o tipo na frente (veja 4.3). |
| `git switch -c` | Cria uma branch nova e já muda para ela | `git switch -c feat/secao-cardapio` | Para voltar à principal: `git switch main`. |
| `git diff` | Mostra as mudanças que ainda não foram para o stage | `git diff` e `git diff --staged` | `--staged` mostra o que já está na caixa do commit. |
| `git log --oneline` | Histórico resumido, um commit por linha | `git log --oneline` | Se a tela "travar" numa lista, aperte `q` para sair. |
| `git push -u origin` | Envia a branch para o GitHub e liga a branch local à remota | `git push -u origin feat/secao-cardapio` | Depois da primeira vez, basta `git push`. Nunca envie direto para a `main`: use PR. |
| `git pull` | Baixa as mudanças do GitHub e junta na branch atual | `git pull` | Faça com o `git status` limpo (sem mudanças pendentes). |
| `git fetch` | Só baixa as informações do GitHub, sem mexer nos seus arquivos | `git fetch` | Nenhum. É a versão "só olhar" do `pull`. |
| `git restore <arquivo>` | Descarta as mudanças não commitadas de um arquivo | `git restore src/main.js` | **Apaga** essas mudanças sem volta. Veja 4.5. |
| `git revert <commit>` | Cria um commit novo que desfaz um commit antigo | `git revert --no-edit a1b2c3d` | Seguro, mesmo depois do push. Veja 4.5. |
| `git tag` | Marca uma versão importante | `git tag v1.0` e depois `git push origin v1.0` | A tag não sobe sozinha: precisa do `git push origin <tag>`. |

### 4.3 Nomes de branch e mensagens de commit

| Tipo | Quando | Branch | Mensagem de commit |
|---|---|---|---|
| `feat` | Coisa nova | `feat/secao-cardapio` | `feat: adiciona seção de cardápio` |
| `fix` | Correção de erro | `fix/menu-mobile` | `fix: corrige menu que não fechava no celular` |
| `docs` | Documentação | `docs/readme` | `docs: explica como rodar o projeto` |
| `chore` | Manutenção (dependências, configuração) | `chore/atualiza-gsap` | `chore: atualiza o gsap` |

Quando o Claude faz o commit, ele acrescenta no fim da mensagem uma linha de coautoria. O nome do modelo muda conforme o que você usou (conferir na sua versão):

```text
feat: adiciona seção de cardápio com animação de entrada

Como verificar: npm run dev e rolar até "Cardápio".

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
```

### 4.4 GitHub pelo terminal (`gh`)

| Comando | O que faz | Exemplo |
|---|---|---|
| `gh auth status` | Mostra se você está logado e em qual conta | `gh auth status` |
| `gh repo create` | Cria o repositório no GitHub a partir da pasta atual e envia os commits | `gh repo create meu-site --public --source=. --push` |
| `gh pr create` | Abre uma PR da branch atual | `gh pr create --base main --title "feat: adiciona seção de cardápio" --body-file corpo-pr.md` |
| `gh pr view` | Mostra a PR da branch atual | `gh pr view` ou `gh pr view --web` (abre no navegador) |
| `gh pr checks` | Mostra se o CI (os testes automáticos) passou | `gh pr checks` |
| `gh pr merge` | Junta a PR na `main` | `gh pr merge --merge --delete-branch` |

Notas:

- `gh repo create ... --push` precisa de pelo menos um commit feito.
- Repositório **público** publica no GitHub Pages sem plano pago.
- `gh pr merge` é **manual** e vem por último: só depois do CI verde e da revisão de outra pessoa (ou de outro LLM).

Modelo do corpo da PR (salve como `corpo-pr.md` ou peça ao Claude para preencher):

```markdown
## O que muda

## Por quê

## Como verifiquei

## Como validar

## Riscos
```

**Roteiro de uma tarefa, do cartão ao deploy:**

```bash
# 1. Notion: crie ou pegue o cartão e mude o Status para "Em andamento"
git switch main
git pull
git switch -c feat/secao-cardapio

# 2. Trabalhe com o Claude (Plan -> aprovar -> Accept edits)

# 3. Revise e grave
git status
git diff
git add src/main.js src/style.css
git commit -m "feat: adiciona seção de cardápio"
npm test            # se o projeto tiver testes
npm run build       # o build precisa passar

# 4. Envie e abra a PR
git push -u origin feat/secao-cardapio
gh pr create --base main --title "feat: adiciona seção de cardápio" --body-file corpo-pr.md
gh pr checks        # espere o CI ficar verde

# 5. Notion: cole o link da PR em "Comprovação" e mude para "Feito (a validar)"
# 6. Outra pessoa revisa e valida. Depois do OK:
gh pr merge --merge --delete-branch
git switch main
git pull

# 7. O deploy sai sozinho. Notion: mude o cartão para "Concluído"
```

### 4.5 Recuperação: restore x revert x reset

| Situação | Comando | O que acontece | Risco |
|---|---|---|---|
| Estraguei um arquivo e **ainda não commitei** | `git restore <arquivo>` | O arquivo volta a ser igual ao último commit | As mudanças não commitadas daquele arquivo somem **sem volta** |
| Coloquei um arquivo no stage sem querer | `git restore --staged <arquivo>` | Tira da caixa do commit e mantém o conteúdo | Nenhum |
| Um commit **já enviado** quebrou algo | `git revert --no-edit <commit>` | Cria um commit novo que desfaz aquele. Depois, `git push`. | Seguro: o histórico continua inteiro |
| (só alerta) | `git reset` | Move a branch para trás, reescrevendo o histórico | Com `--hard`, apaga trabalho não commitado sem volta. **Não use sem entender, e nunca em branch já enviada.** Peça ajuda antes. |

Como achar o código do commit: rode `git log --oneline` e copie os 7 caracteres do começo da linha (ex.: `a1b2c3d`).

> **Rede de segurança:** antes de um pedido grande ao Claude, faça um commit. Se der errado, o Git desfaz. O `/rewind` ajuda, mas não cobre comandos de terminal e não substitui o Git.

> **Abriu uma tela estranha no terminal** (o editor Vim, depois de um `git commit` sem `-m`)? Digite `:wq` e Enter para salvar e sair, ou `:q!` e Enter para sair sem salvar.

### 4.6 `.gitignore`: o que não versionar

O `.gitignore` é a lista do que o Git deve fingir que não existe. O projeto criado pelo Vite já vem com um. Abra e confira se tem pelo menos isto:

```gitignore
# dependências (recria com npm install)
node_modules/

# build (recria com npm run build)
dist/

# segredos: nunca no Git
.env
.env.*
!.env.example

# relatórios de teste do Playwright
test-results/
playwright-report/

# arquivos do sistema
.DS_Store
Thumbs.db
```

| Não versione | Por quê |
|---|---|
| `node_modules/` | É enorme e se recria com `npm install` |
| `dist/` | É gerado pelo `npm run build` (o deploy gera de novo) |
| `.env` | Guarda senhas e chaves. Repositório público é visível para o mundo inteiro. |

Se algo já entrou por engano:

```bash
# tira a node_modules do Git, sem apagar a pasta do seu computador
git rm -r --cached node_modules
git commit -m "chore: remove node_modules do repositório"

# descobre qual regra do .gitignore está ignorando um arquivo
git check-ignore -v src/algum-arquivo.js
```

> **Segredo commitado?** Apagar num commit novo não resolve: ele continua no histórico. Troque a chave ou senha no serviço de origem imediatamente e avise o instrutor.

---

## 5. DevTools do navegador

Analogia: o DevTools é o raio X do site. Mostra o HTML, o CSS, os erros e tudo que a página baixou. Os exemplos abaixo são do Chrome; se ele estiver em português, os nomes aparecem traduzidos.

### 5.1 Atalhos

| Ação | Windows | macOS |
|---|---|---|
| Abrir o DevTools | **F12** ou Ctrl+Shift+I | Cmd+Option+I |
| Abrir direto no Console | Ctrl+Shift+J | Cmd+Option+J |
| Inspecionar um elemento (clicar na página) | Ctrl+Shift+C | Cmd+Shift+C |
| Modo responsivo (celular, tablet) | **Ctrl+Shift+M** (com o DevTools aberto) | Cmd+Shift+M |
| Menu de comandos do DevTools | Ctrl+Shift+P | Cmd+Shift+P |
| Recarregar ignorando o cache | Ctrl+Shift+R | Cmd+Shift+R |

Também funciona: botão direito em qualquer parte da página → **Inspecionar**.

### 5.2 Painéis que vamos usar

| Painel | Para que serve | Dica prática |
|---|---|---|
| **Console** | Mostra erros (em vermelho) e avisos | Copie a mensagem de erro inteira e cole para o Claude. Erro `404` = arquivo não encontrado (caminho errado). Erro de `import` = pacote faltando (rode `npm install`). |
| **Elements** | Mostra o HTML e o CSS de cada parte da página | Dá para mudar o CSS ao vivo para testar. Isso **não salva** no arquivo: depois, peça a mudança ao Claude. |
| **Network** | Lista tudo que a página baixou (imagens, fontes, scripts) | Filtre por **Img** para ver os quadros `.webp` da animação. Marque **Disable cache** e escolha uma rede lenta no seletor de velocidade para simular um celular. |
| **Modo responsivo** | Mostra o site em larguras de celular e tablet | Teste pelo menos em 390 px (celular), 768 px (tablet) e 1440 px (notebook). |
| **Lighthouse** | Dá notas de 0 a 100 para desempenho, acessibilidade, boas práticas e SEO | Pode estar escondido no `>>` da barra de painéis. Escolha Mobile e clique em analisar. Rode numa janela anônima, sobre o `npm run preview` ou o site publicado, não no `npm run dev`. A nota varia um pouco a cada rodada. |

### 5.3 Testar o modo com menos movimento

O SONORA mostra uma composição estática para quem pede menos movimento no sistema (`prefers-reduced-motion`). Para simular:

1. Abra o DevTools e aperte **Ctrl+Shift+P** (Cmd+Shift+P no macOS).
2. Digite `reduced motion`.
3. Escolha **Emulate CSS prefers-reduced-motion: reduce**.
4. Recarregue a página. As animações de rolagem devem dar lugar à versão estática.

---

## 6. Socorro rápido

| Sintoma | Provável causa | O que fazer |
|---|---|---|
| `claude` não é reconhecido como comando | A CLI não está instalada ou não está no PATH | Use o app Claude Desktop, aba Code. |
| `npm` ou `node` não é reconhecido | Node não instalado, ou terminal aberto antes da instalação | Instale o Node 22+ e abra um terminal novo. |
| PowerShell diz que a execução de scripts está desabilitada ao rodar `npm` | Política de segurança do Windows | Use o Git Bash, ou troque `npm` por `npm.cmd` (ex.: `npm.cmd install`). Peça ajuda antes de mudar configurações de segurança. |
| `npm run dev` abriu em outra porta | A 5173 já estava em uso | Use o endereço que aparece no terminal. |
| Página em branco | Erro de JavaScript | F12 → Console → copie o erro para o Claude. |
| `Missing script: "test"` | O projeto não tem testes configurados | Normal num projeto Vite novo. |
| `git push` pede login | O Git ainda não conhece sua conta | Rode `gh auth login` e tente de novo. |
| Mudanças "sumiram" depois do `/clear` | O `/clear` só limpa a conversa | Os arquivos continuam lá: confira com `git status`. |
| O Claude está fazendo algo que você não pediu | Pedido vago ou modo muito solto | Esc para interromper, `/rewind` ou Git para desfazer, e mude para Plan. |
