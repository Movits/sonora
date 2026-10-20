# Checklist pré-workshop (instrutor)

> Workshop de IA, 20/10/2026, à noite, cerca de 3 h.
> Projeto A: SONORA (pronto). Projeto B: construído ao vivo, com tema escolhido pela turma.
> Marque a caixa só quando tiver **conferido de verdade**. "Acho que está" não conta.

**Legenda**

- **R** = Roberto (instrutor). **A** = apoio: alguém da equipe que ajude na sala. Se não houver apoio, o item fica com o R.
- **H** = horário de início da aula. "H−90 min" quer dizer noventa minutos antes.
- **Conferir na sua versão**: depende da versão do app ou não foi confirmado no diagnóstico de 19/10.

Os planos B e C de cada problema estão em [plano-de-contingencia.md](plano-de-contingencia.md).

## Resumo do dia

| Quando (20/10) | Bloco | Resp. |
|---|---|---|
| Manhã, 9h00–10h00 | [1. Contas e acessos](#1-contas-e-acessos) | R |
| Manhã, 10h00–12h00 | [2. Máquina do palco](#2-máquina-do-palco) | R |
| Tarde, 13h30–14h00 | [3. Rede](#3-rede) | R |
| Tarde, 14h00–16h00 | [4. Arquivos e reservas](#4-arquivos-e-reservas) | R (A ajuda nas cópias) |
| Tarde, 16h00–17h30 | [5. Ensaio das demos](#5-ensaio-das-demos) | R |
| Tarde, 17h30–18h00 | [6. Material dos alunos](#6-material-dos-alunos) | A |
| Tarde, antes de sair, e no local (H−90 min) | [7. Projetor](#7-projetor) | R + A |
| H−10 min | [8. Última volta](#8-última-volta) | R |
| Depois da aula | [9. Restaurar a máquina](#9-depois-da-aula) | R |

---

## 1. Contas e acessos

*Manhã, 9h00–10h00 · R*

**Claude**

- [ ] App Claude Desktop logado na conta da aula.
- [ ] Uso do plano com folga para cerca de 3 h de demo. Ver no anel de uso, ao lado do seletor de modelo, ou com `/usage`. Se estiver perto do limite, resolver agora, não à noite.
- [ ] Sonnet 5.5 aparece no seletor de modelo (constrói e faz as tarefas simples), e Opus 5.5 também (planeja no Plan, depura e revisa: P2, P4, P8 e `/code-review`). Haiku 5.5 como opção mais leve. Fable só em problema muito difícil; Bypass nunca.
- [ ] Conector do Notion ligado e respondendo. Conector do Google Drive desligado na sessão de aula: o deck abre pelo navegador, pelo link do LEIA-ME do OneDrive.
- [ ] Conectores que não vão aparecer na aula (Gmail, Agenda etc.) desligados na sessão de aula. Assim nada pessoal surge numa resposta.

**GitHub**

- [ ] `gh auth status` mostra a conta Movits logada, com os escopos `repo` e `workflow`.
- [ ] https://github.com/Movits/sonora abre e está público.
- [ ] Settings → Pages com a origem "GitHub Actions".
- [ ] Em Actions › Testes › Run workflow, rodar na `main` e conferir que fica verde (prova que o CI funciona). Para a branch da PR ao vivo, rodar `npm test` local depois de `git switch fix/achados-review-landing` e voltar para a main. Um run manual nessa branch também serve, mas pode aparecer como um segundo check 'Testes' na PR #3. Não abrir PR de teste: ela tomaria o número #3, o da PR ao vivo.

**Notion**

- [ ] Página privada "Workshop IA · SONORA (demo)" existe, separada de tudo do MMM, e abre pelo link direto (o link fica só no LEIA-ME da pasta WRW - Workshop do OneDrive, nunca no repositório).
- [ ] Quadro "Trabalho | SONORA" com as views **Quadro** e **Entregue**, e o cartão **"PR ao vivo na aula"** (é ele que o P9 arrasta para Em andamento e o P11 atualiza).
- [ ] Quadro "Trabalho | SONORA" com as propriedades: Item, Status, Responsável, Prioridade, Prazo, Concluído em, Comprovação, Próxima ação e Observações.
- [ ] Status com as opções: Não iniciado, Em andamento, Feito (a validar), Concluído e Bloqueado.
- [ ] 7 cartões. Os 6 já feitos têm a Comprovação preenchida (PR, run, tag, relatório ou deck); os da skill e dos materiais apontam para as PRs #1 e #2. O cartão "PR ao vivo na aula" fica em Não iniciado, sem Comprovação, até o P11.
- [ ] Pelo menos 1 cartão em "Feito (a validar)", para a demo de validação.
- [ ] Teste no Claude: "leia o quadro Trabalho | SONORA e liste os cartões". Ele encontra a página demo e nada do MMM aparece na resposta.

**Higgsfield**

- [ ] Login funcionando e saldo de créditos conferido.
- [ ] Nenhuma parte da aula depende de gerar ao vivo. Tudo o que vai aparecer já está baixado (bloco 4).

**Google Drive**

- [ ] Deck abre no Google Slides pelo **link direto** do arquivo, na pasta do Drive "Workshop IA WRW · 20-10-2026". O link fica só no LEIA-ME da pasta WRW - Workshop do OneDrive. A tela inicial do Drive mostra arquivos recentes: evitar.

**Termos**

- [ ] Idade mínima de cada serviço (Claude, GitHub, Notion) conferida nos termos, para os alunos que vão criar conta própria. Conferir antes da aula.

---

## 2. Máquina do palco

*Manhã, 10h00–12h00 · R*

### 2.1 App e projeto

- [ ] App Claude Desktop atualizado. Se houver atualização pendente, instalar e reiniciar agora.
- [ ] Versão do Claude Code anotada (aparece nas configurações do app; conferir na sua versão onde).
- [ ] Aba **Code** aberta no **clone limpo do SONORA**. Nunca no clone de outro projeto real: ele tem branches, worktrees e dados que não são da aula.
- [ ] Sessão nova, sem histórico de outros projetos à vista. Se a barra lateral do app mostrar títulos de sessões antigas, recolher.

### 2.2 Configuração de aula no projeto

As configurações pessoais da máquina usam um modelo mais pesado, effort alto e modo Auto. Para a aula, o projeto sobrescreve isso com o `.claude/settings.json` do SONORA:

```json
{
  "model": "sonnet",
  "effortLevel": "medium",
  "permissions": {
    "defaultMode": "acceptEdits",
    "allow": ["Bash(npm run dev)", "Bash(npm run build)", "Bash(npm test)", "Bash(npm run preview)", "Bash(git status)", "Bash(git diff:*)", "Bash(git log:*)"],
    "deny": ["Read(./.env)", "Read(./.env.*)", "Bash(git push --force:*)", "Bash(git push -f:*)", "Bash(git reset --hard:*)"]
  }
}
```

- `"sonnet"` é o modelo padrão: Sonnet 5.5 constrói e faz as tarefas simples. Para planejar (Plan), depurar e revisar, troque para Opus 5.5 pelo seletor, como cada prática do deck indica.
- `"acceptEdits"` é o modo **Accept edits**: o Claude edita arquivos sem pedir a cada um, mas pede licença para comandos fora da lista `allow`. Nas práticas que pedem **Manual** (P9 a P12: commit, push, PR, merge, Notion, deploy) ou **Plan** (P8), troque pelo seletor abaixo da caixa de mensagem.
- **Auto** não é o modo da aula. **Bypass permissions** nunca.
- Quer que isso valha só na sua máquina? Use `.claude/settings.local.json`, que é pessoal e fica fora do git (já está no `.gitignore`).

Checagem:

- [ ] Arquivo conferido no projeto, com `"model": "sonnet"` (antes era `"opus"`). A troca entra na `main` pela PR #2, a dos materiais do workshop, junto com os prompts. Depois do merge, `git status` do SONORA fica limpo.
- [ ] Sessão **nova** aberta depois de salvar. O seletor mostra Sonnet 5.5, effort medium e modo Accept edits.
- [ ] Teste de troca de modo: Accept edits → Plan → Manual → Accept edits. (O app tem atalhos para modelo, effort e modo; conferir na sua versão.)

### 2.3 Hooks pessoais e envio automático de sessões

A configuração pessoal (`~/.claude/settings.json`) tem coisas que aparecem na tela ou mudam o ritmo da demo:

- um hook que sincroniza skills no início da sessão e pode levar até 60 s;
- o **"vigia"**: escreve o seu nome e a contagem de tokens e de contexto em **toda** resposta, na tela do projetor;
- um canário que faz a primeira resposta começar com seu nome completo. Ele também vem do CLAUDE.md da pasta de usuário: CLAUDE.md de pastas acima do projeto também são lidos;
- `remoteControlAtStartup` e `autoUploadSessions` (upload automático das sessões) ligados.

| Opção | A favor | Contra |
|---|---|---|
| Manter e avisar a turma | Vira exemplo real de hook, o "guarda-corpo" automático | Mais texto na tela; até 60 s de espera ao abrir sessão |
| Desligar só durante a aula | Tela limpa e início rápido | Precisa religar depois (bloco 9) |

- [ ] Decisão sobre os hooks pessoais (vigia, canário e sincronização): ( ) manter e avisar a turma  ( ) desligar durante a aula
- [ ] Decisão sobre o upload automático de sessões (`autoUploadSessions`) e o `remoteControlAtStartup`: ( ) manter  ( ) desligar durante a aula
- [ ] Se for desligar: **antes de editar**, copiar `~/.claude/settings.json` para `~/.claude/settings.backup-2010.json`.
- [ ] Existe uma opção de settings que desliga todos os hooks de uma vez. Conferir o nome exato na documentação antes de usar.
- [ ] Sessão nova aberta depois da mudança, para ver o efeito.

### 2.4 Tela limpa: nada sensível no projetor

- [ ] Fechados: qualquer `.env`, o clone e as abas do MMM/WRW, o Notion do MMM, e-mail, WhatsApp (web e app), Slack, Discord e gerenciador de senhas.
- [ ] Notion: na página demo, barra lateral recolhida com Ctrl + `\`. Ela lista as outras páginas do workspace.
- [ ] Chrome: um **perfil só para a aula**, logado apenas em GitHub, Notion, Drive e Higgsfield. Sem histórico nem favoritos pessoais. A barra de endereço não pode sugerir nada pessoal.
- [ ] VS Code: aberto só na pasta do SONORA. A tela de boas-vindas lista projetos recentes: fechar.
- [ ] Explorador de Arquivos: não abrir a pasta de usuário na tela, porque ela mostra os outros projetos.
- [ ] Área de trabalho do Windows limpa: papel de parede neutro e ícones ocultos.

### 2.5 Notificações, energia e leitura

- [ ] Windows em **Não incomodar** (Configurações → Sistema → Notificações). Celular no silencioso.
- [ ] Windows Update pausado até amanhã. Nada de reinício no meio da aula.
- [ ] Notebook na tomada, modo de energia de melhor desempenho e tela sem apagar sozinha.
- [ ] Zoom de pelo menos 150% em tudo que vai ao projetor:
  - app Claude: Ctrl + `=` (conferir na sua versão);
  - VS Code: Ctrl + `=` e o tamanho da fonte do terminal integrado;
  - Chrome: Ctrl + `=`.
- [ ] Mouse com roda conectado. O scroll da animação fica mais estável que no trackpad.

---

## 3. Rede

*Tarde, 13h30–14h00 · R*

- [ ] Hotspot do celular configurado e o notebook já pareado com ele.
- [ ] Teste do hotspot: Wi-Fi de casa desligado, hotspot ligado, GitHub abre e o Claude responde.
- [ ] Franquia de dados do celular suficiente. O Claude e o site gastam pouco; vídeo e `npm install` gastam mais.
- [ ] Teste offline: com o Wi-Fi desligado, o `npm run preview` do SONORA abre e a animação funciona. O GSAP e as fontes vêm do projeto, não da internet.
- [ ] Cache do npm "aquecido": criar hoje um projeto Vite de teste e instalar o `gsap` nele. Assim, com rede ruim, `npm install --prefer-offline` usa o que já está no computador.
- [ ] Perguntado ao local: nome e senha do Wi-Fi, se há página de login (portal) e se o GitHub abre nessa rede.

---

## 4. Arquivos e reservas

*Tarde, 14h00–16h00 · R (A ajuda nas cópias para o pendrive)*

**SONORA**

- [ ] `npm run build` e depois `npm run preview` abrem o site sem erro no console (F12). O endereço é o que o terminal mostrar: em geral `http://localhost:4173/`; se o projeto usa `base: '/sonora/'`, termina em `/sonora/`.
- [ ] `npm test` (Playwright) do SONORA passa **na máquina do palco**. Antes, pare qualquer `npm run preview` na porta 4173: fora do CI o teste reaproveita o servidor que já estiver lá e testaria a versão velha.
- [ ] https://movits.github.io/sonora/ abre no notebook e no celular pelo 4G, fora do Wi-Fi. É a mesma versão da `main`.
- [ ] `git tag -n` lista as 6 tags reais: `v0.1-estrutura`, `v0.2-landing`, `v0.3-design`, `v0.4-animacao-simples`, `v0.5-animacao-avancada` e `v1.0-publicavel` (tabela no plano de contingência). Conferir que estão também no GitHub (aba Tags do repositório).

**Fluxo de trabalho (PR ao vivo, P10)**

- [ ] No GitHub, a branch `fix/achados-review-landing` existe com os 3 commits (hero empilhado no tablet; quadros da cena só baixam quando ela entra na tela, 1ª carga de 4,4 MB para 437 KB; miniaturas com lazy e `og:image` completo) e **sem PR aberta**: a PR nasce ao vivo no P10. Conferir em Branches e em Pull requests.
- [ ] Número da PR ao vivo: `gh pr list --state all` mostra da #1 à #4 (a skill, os materiais e dois ajustes de documentação), todas mescladas. A ao vivo vai ser a **#5**. Anotar na cola o número que vier depois do último.
- [ ] **PR de reserva:** a PR #1 (skill `/review-landing`), já mesclada com CI verde, para mostrar com o histórico se a ao vivo falhar.
- [ ] Cartão **"PR ao vivo na aula"** no quadro demo, pronto para receber o link da PR.

**Deck**

- [ ] Versão no Google Slides (online), na pasta do Drive "Workshop IA WRW · 20-10-2026".
- [ ] `.pptx` e **PDF** na pasta WRW - Workshop do OneDrive (conferir na preparação), no notebook e no pendrive. Os gerados ficam também em `C:\Users\rober\workshop-ia\deck\saida\`.
- [ ] O PDF abre sem internet.
- [ ] Conferido no Google Slides: fontes, imagens e notas do apresentador sobreviveram à conversão.

**Vídeos de reserva (MP4)**

Ficam na pasta `reservas` dentro da pasta WRW - Workshop do OneDrive (conferir na preparação).

- [ ] `sonora-scroll.mp4`: a gravação da rolagem do SONORA. Conferir que vai do topo ao fim sem engasgo.
- [ ] `ciclo-da-pr.mp4`: a navegação pela PR #1, os checks, a aba Actions e o site publicado. Ele **não mostra o Notion**: se for preciso, o cartão entra pelo print.
- [ ] Os dois abrem no player do notebook **sem internet**. Copiar para o notebook e o pendrive, não deixar só na nuvem.

**Projeto B**

- [ ] Kits de imagens prontos (6 WebP cada) em `C:\Users\rober\workshop-ia\_geracoes\kits\`: `viagens`, `hamburgueria` e `relogio`. Cópia no pendrive. Tema sem kit: blocos reservados no lugar das fotos.
- [ ] Pasta da aula `C:\Users\rober\projetos\projeto-b` existe e está **vazia** (criada na preparação). Se não existir: `New-Item -ItemType Directory -Force C:\Users\rober\projetos\projeto-b`. O P1 e o P2 gravam ali `docs\`; a cópia da base para `projeto-b\meu-site` só acontece ao vivo, no P3.
- [ ] **Pasta base** do Projeto B, `C:\Users\rober\workshop-ia\projeto-b-base`: Vite 8.3.4 (vanilla, sem exemplos), gsap 3.15.0 e `@playwright/test` 1.64.1 em `node_modules`; `index.html` pt-BR com `<main>` vazio; `src/main.js`, `tokens.css` e `base.css`; `src/sections`, `src/lib`, `public/img`, `public/frames`, `public/fonts` e `docs` vazias (com `.gitkeep`); `vite.config.js` com base `/meu-site/` e appType `mpa`; `npm test` com 2 testes; `.gitignore`, `.gitattributes`, `.env.example`, a skill `/review-landing` e `.claude/settings.json` (Sonnet, medium, Accept edits). Git na `main` com 1 commit, sem remoto. Sem `CLAUDE.md`: ele nasce com `/init` no P3.
  - `git -C C:\Users\rober\workshop-ia\projeto-b-base status` limpo. Se houver algo modificado, o commit do P3 leva junto.
  - Em 19/10 a base foi fechada com 1 commit (o LEIA-ME do instrutor saiu dela e ficou em `C:\Users\rober\workshop-ia\LEIA-ME-projeto-b-base.md`, fora da base, para não ir para o repositório público `meu-site`). Conferir `status` limpo e `git log --oneline` com 1 commit.
  - Ensaiar a sequência do P3 (guia do instrutor) numa pasta de teste, nunca na `projeto-b` da aula, e apagar a pasta de teste depois.
- [ ] `.zip` da base: `C:\Users\rober\workshop-ia\projeto-b-base.zip`, gerado em 19/10 da base limpa (116,8 KB) e testado: extraí numa pasta temporária, `npm install`, a sequência do P3, `npm run build` e os 2 testes passaram. Vai com o `.git`, sem `node_modules` nem `dist`, arquivos na raiz. Se a base mudar, gerar de novo e repetir o teste. Trocar as cópias na pasta WRW - Workshop do OneDrive (conferir na preparação) e no pendrive pela nova.
  - Depois de extrair, precisa de `npm install`, e isso pede internet. Já a pasta base copiada inteira leva o `node_modules`, que tem partes que dependem do sistema: ela serve só para Windows.
- [ ] `workshop/prompts/` no repositório, com os prompts de cada etapa para os alunos refazerem em casa.

**Para você**

- [ ] Este checklist e o plano de contingência abertos numa aba, ou impressos.

---

## 5. Ensaio das demos

*Tarde, 16h00–17h30 · R*

Rode cada demo na máquina do palco, com a configuração de aula e um cronômetro. Se passar de 7 min ou travar, anote o motivo e qual reserva usar.

| | Demo (cerca de 5 min) | O que mostra | Pronto quando | Reserva |
|---|---|---|---|---|
| [ ] | 1. Tour do SONORA | site publicado, exploded view, Engenharia, versão com movimento reduzido | o scroll vai do começo ao fim sem engasgo | `sonora-scroll.mp4` |
| [ ] | 2. Claude Code por dentro | aba Code; seletor de modelo, effort e modo; CLAUDE.md do SONORA | a troca de modo funciona; Sonnet 5.5 e medium visíveis | prints |
| [ ] | 3. Skill do projeto | `.claude/skills/review-landing/` e o `/review-landing` rodando | a skill aparece e devolve o relatório | print da saída |
| [ ] | 4. Projeto B, começo | numa pasta de teste: cópia da base para `.\meu-site`, `Move-Item ..\docs\* .\docs\`, commit e tag `passo-1`, `npm run dev` e `/init` (plano B: `npm create vite@latest meu-site -- --template vanilla`, `npm install`, `npm install gsap`, `git init -b main`) | página no navegador em menos de 5 min | `.zip` da pasta base + `npm install` |
| [ ] | 5. Projeto B, primeira animação | prompt → seção com GSAP + ScrollTrigger + movimento reduzido → commit | a animação aparece e o commit foi feito | kit do tema + tag do passo |
| [ ] | 6. Fluxo de trabalho | cartão → branch → commit → PR com template → CI → merge → deploy → cartão | Pages atualizado e cartão com a Comprovação | `ciclo-da-pr.mp4` + PR #1, já mesclada, e o histórico (o cartão, pelo print) |
| [ ] | 7. Notion pelo MCP | o Claude lê e atualiza um cartão do quadro demo | o cartão muda na tela | print do cartão |
| [ ] | 8. Mídia e custos | assets do Higgsfield já gerados (sem gerar ao vivo) e a tabela de custos | as imagens abrem offline | slide |

Também ensaiar:

- [ ] Quais comandos de barra funcionam no app Desktop (ex.: `/init`, `/context`, `/compact`, `/usage`). Alguns se comportam diferente no app; conferir na sua versão e ajustar o deck.
- [ ] Uma volta de checkpoint: estragar algo de propósito e voltar com `git stash` ou pela tag (passo a passo no plano de contingência).
- [ ] O caso "porta ocupada": rodar dois `npm run dev` e ver o Vite trocar de porta sozinho.
- [ ] Tempo total das demos comparado com o roteiro do deck. Anotar o que cortar primeiro se atrasar.

---

## 6. Material dos alunos

*Tarde, 17h30–18h00 · A*

- [ ] QR codes em PNG grande, com margem branca, para:
  - o repositório: https://github.com/Movits/sonora
  - o site: https://movits.github.io/sonora/
  - o guia de instalação: `workshop/guia-de-instalacao-alunos.md` no repositório
- [ ] Cada QR testado com 2 celulares diferentes (Android e iPhone), pela câmera, a uns 3 m da tela.
- [ ] Endereço curto escrito embaixo de cada QR, para quem não conseguir ler.
- [ ] Guia de instalação enviado antes, se possível, para quem vai levar notebook.
- [ ] (Opcional) Folha de uma página com os links e os 4 comandos do Vite.

---

## 7. Projetor

**Antes de sair · R**

- [ ] Simular 1280×720 e 1920×1080: Configurações → Sistema → Tela → Resolução, ou o modo dispositivo do Chrome (Ctrl + Shift + M com as DevTools abertas).
- [ ] Nas duas resoluções: site sem corte, slides 16:9 sem corte, terminal e app Claude legíveis.
- [ ] Cabo HDMI e adaptador USB-C na mochila, mais um de reserva.

**No local, H−90 min · R + A**

- [ ] Projetor ligado e Win + P → **Duplicar**.
- [ ] Testar 1280×720 e 1920×1080 no projetor real. Ficar na resolução mais nítida.
- [ ] Do fundo da sala dá para ler o app Claude, o VS Code e o terminal. Se não der, subir o zoom.
- [ ] Partes escuras do site e dos vídeos não viram um borrão. Se virarem, ajustar brilho e contraste do projetor.
- [ ] Scroll do SONORA no projetor sem engasgo. Se engasgar, ver o plano de contingência.
- [ ] Wi-Fi do local testado: GitHub abre, o Claude responde e um `git push` de teste passa.

---

## 8. Última volta

*H−10 min · R*

- [ ] Sessão nova do Claude no SONORA: Sonnet 5.5, effort medium, modo Accept edits (o padrão do projeto). Trocar pelo seletor quando a prática pedir Manual ou Plan.
- [ ] Abas na ordem da aula: deck no Google Slides (link direto, no LEIA-ME do OneDrive), site publicado, GitHub (repositório, branch `fix/achados-review-landing` e PR #1), Notion demo ("Workshop IA · SONORA (demo)", link no LEIA-ME do OneDrive, view Quadro, barra lateral recolhida).
- [ ] Terminal já em `C:\Users\rober\projetos\projeto-b`, ainda **vazia**: a cópia da pasta base só acontece ao vivo, no P3.
- [ ] `npm run preview` do SONORA rodando em segundo plano, como reserva local. Parar com Ctrl + C antes do `npm test` do P10.
- [ ] Projetor testado (bloco 7): Duplicar, resolução nítida, leitura do fundo da sala.
- [ ] Não incomodar ligado, celular no silencioso, hotspot do celular pareado e pronto para ligar (bloco 3).
- [ ] Água por perto.

---

## 9. Depois da aula

*R*

- [ ] Restaurar `~/.claude/settings.json` a partir do backup, se mexeu nele.
- [ ] Religar Windows Update e notificações.
- [ ] Decidir se o `.claude/settings.json` de aula fica no repositório ou sai (por PR, como qualquer mudança).
- [ ] Atualizar os cartões do quadro demo e registrar na Próxima ação o que foi feito ao vivo.
- [ ] Anotar o que deu errado e qual plano B funcionou, para a próxima turma.
