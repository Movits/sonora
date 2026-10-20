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
- [ ] Sonnet 5.5 aparece no seletor de modelo. Haiku 5.5 também, como opção mais leve.
- [ ] Conectores do Notion e do Google Drive ligados e respondendo.
- [ ] Conectores que não vão aparecer na aula (Gmail, Agenda etc.) desligados na sessão de aula. Assim nada pessoal surge numa resposta.

**GitHub**

- [ ] `gh auth status` mostra a conta Movits logada, com os escopos `repo` e `workflow`.
- [ ] https://github.com/Movits/sonora abre e está público.
- [ ] Settings → Pages com a origem "GitHub Actions".
- [ ] Um push numa branch de teste dispara o CI, e o CI fica verde.

**Notion**

- [ ] Página privada "Workshop IA · SONORA" existe, separada de tudo do MMM.
- [ ] Quadro "Trabalho | SONORA" com as propriedades: Item, Status, Responsável, Prioridade, Prazo, Concluído em, Comprovação, Próxima ação e Observações.
- [ ] Status com as opções: Não iniciado, Em andamento, Feito (a validar), Concluído e Bloqueado.
- [ ] 4 ou 5 cartões ligados às PRs do SONORA, com a URL da PR na Comprovação.
- [ ] Pelo menos 1 cartão em "Feito (a validar)", para a demo de validação.
- [ ] Teste no Claude: "leia o quadro Trabalho | SONORA e liste os cartões". Ele encontra a página demo e nada do MMM aparece na resposta.

**Higgsfield**

- [ ] Login funcionando e saldo de créditos conferido.
- [ ] Nenhuma parte da aula depende de gerar ao vivo. Tudo o que vai aparecer já está baixado (bloco 4).

**Google Drive**

- [ ] Deck abre no Google Slides pelo **link direto**. A tela inicial do Drive mostra arquivos recentes: evitar.

**Termos**

- [ ] Idade mínima de cada serviço (Claude, GitHub, Notion) conferida nos termos, para os alunos que vão criar conta própria. Conferir antes da aula.

---

## 2. Máquina do palco

*Manhã, 10h00–12h00 · R*

### 2.1 App e projeto

- [ ] App Claude Desktop atualizado. Se houver atualização pendente, instalar e reiniciar agora.
- [ ] Versão do Claude Code anotada (aparece nas configurações do app; conferir na sua versão onde).
- [ ] Aba **Code** aberta no **clone limpo do SONORA**. Nunca no clone do MMM: ele tem muitas branches e worktrees e dados internos.
- [ ] Sessão nova, sem histórico de outros projetos à vista. Se a barra lateral do app mostrar títulos de sessões antigas, recolher.

### 2.2 Configuração de aula no projeto

As configurações pessoais da máquina usam um modelo mais pesado, effort alto e modo Auto. Para a aula, o projeto sobrescreve isso com um `.claude/settings.json`:

```json
{
  "model": "sonnet",
  "effortLevel": "medium",
  "permissions": {
    "defaultMode": "default"
  }
}
```

- `"default"` é o modo **Manual**: o Claude pergunta antes de editar arquivo ou rodar comando. É o certo para mostrar a iniciantes.
- Na hora de construir, dá para trocar para **Accept edits** pelo seletor abaixo do prompt.
- **Plan** serve para "pensar antes de mexer". **Auto** não é o modo da aula. **Bypass permissions** não será usado.
- Quer que isso valha só na sua máquina? Use `.claude/settings.local.json`, que é pessoal e fica fora do git. Conferir se ele está no `.gitignore`.

Checagem:

- [ ] Arquivo criado (ou conferido) no projeto.
- [ ] Sessão **nova** aberta depois de salvar. O seletor mostra Sonnet 5.5, effort medium e modo Manual.
- [ ] Teste de troca de modo: Manual → Accept edits → Plan → Manual. (O app tem atalhos para modelo, effort e modo; conferir na sua versão.)

### 2.3 Hooks pessoais e envio automático de sessões

A configuração pessoal (`~/.claude/settings.json`) tem coisas que aparecem na tela ou mudam o ritmo da demo:

- um hook que sincroniza skills no início da sessão e pode levar até 60 s;
- um canário que faz a primeira resposta começar com seu nome completo. Ele também vem do CLAUDE.md da pasta de usuário: CLAUDE.md de pastas acima do projeto também são lidos;
- um aviso de tokens e de contexto no fim de cada resposta;
- `remoteControlAtStartup` e `autoUploadSessions` ligados.

| Opção | A favor | Contra |
|---|---|---|
| Manter e avisar a turma | Vira exemplo real de hook, o "guarda-corpo" automático | Mais texto na tela; até 60 s de espera ao abrir sessão |
| Desligar só durante a aula | Tela limpa e início rápido | Precisa religar depois (bloco 9) |

- [ ] Decisão tomada: ( ) manter e avisar a turma  ( ) desligar durante a aula
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
- [ ] `npm test` (Playwright) passa na máquina do palco.
- [ ] https://movits.github.io/sonora/ abre no notebook e no celular pelo 4G, fora do Wi-Fi. É a mesma versão da `main`.
- [ ] `git tag -n` lista os pontos de recuperação, de `v0.1-estrutura` a `v1.0-publicavel` (tabela no plano de contingência; os nomes são os planejados, e se as tags reais tiverem outros nomes, atualizar a tabela). As tags estão no GitHub (`git push origin --tags`).

**Fluxo de trabalho (PR ao vivo)**

- [ ] Uma branch `feat/` com uma mudança pequena e segura (por exemplo, um texto de seção), já testada, pronta para virar PR ao vivo.
- [ ] Uma **PR de reserva** já aberta ou mesclada, com CI verde, para mostrar se a ao vivo falhar.
- [ ] Cartão correspondente no quadro demo, pronto para receber o link da PR.

**Deck**

- [ ] Versão no Google Slides (online).
- [ ] `.pptx` e **PDF** baixados no notebook e no pendrive.
- [ ] O PDF abre sem internet.
- [ ] Conferido no Google Slides: fontes, imagens e notas do apresentador sobreviveram à conversão.

**Vídeos de reserva (MP4)**

- [ ] MP4 1: scroll completo do SONORA (hero → exploded view → Engenharia → fim), em 1920×1080.
- [ ] MP4 2: ciclo completo cartão → branch → commit → PR → CI verde → merge → deploy no Pages → cartão em "Feito (a validar)".
- [ ] Os dois abrem no player do notebook **sem internet**. Não deixar só na nuvem.

**Projeto B**

- [ ] Kits de imagens para os temas mais prováveis (agência de viagens, hamburgueria, relógio, cafeteria). Cada kit: 1 imagem de hero e mais 3 a 6 imagens, já em tamanho de web (WebP ou JPG). Cópia no pendrive.
- [ ] **Pasta pronta** do Projeto B, plano B do `npm install`: um projeto Vite com o `gsap` já instalado, compactado em `.zip`.
  - Atenção: o `node_modules` tem partes que dependem do sistema. Um zip feito no Windows serve só para Windows. Para Mac, gerar outro num Mac, ou o aluno roda `npm install`.
- [ ] `workshop/prompts/` no repositório, com os prompts de cada etapa para os alunos refazerem em casa.

**Para você**

- [ ] Este checklist e o plano de contingência abertos numa aba, ou impressos.

---

## 5. Ensaio das demos

*Tarde, 16h00–17h30 · R*

Rode cada demo na máquina do palco, com a configuração de aula e um cronômetro. Se passar de 7 min ou travar, anote o motivo e qual reserva usar.

| | Demo (cerca de 5 min) | O que mostra | Pronto quando | Reserva |
|---|---|---|---|---|
| [ ] | 1. Tour do SONORA | site publicado, exploded view, Engenharia, versão com movimento reduzido | o scroll vai do começo ao fim sem engasgo | MP4 1 |
| [ ] | 2. Claude Code por dentro | aba Code; seletor de modelo, effort e modo; CLAUDE.md do SONORA | a troca de modo funciona; Sonnet 5.5 e medium visíveis | prints |
| [ ] | 3. Skill do projeto | `.claude/skills/review-landing/` e o `/review-landing` rodando | a skill aparece e devolve o relatório | print da saída |
| [ ] | 4. Projeto B, começo | `npm create vite@latest meu-site -- --template vanilla`, `npm install`, `npm install gsap`, `npm run dev` | página no navegador em menos de 5 min | pasta pronta (.zip) |
| [ ] | 5. Projeto B, primeira animação | prompt → seção com GSAP + ScrollTrigger + movimento reduzido → commit | a animação aparece e o commit foi feito | kit do tema + tag do passo |
| [ ] | 6. Fluxo de trabalho | cartão → branch → commit → PR com template → CI → merge → deploy → cartão | Pages atualizado e cartão com a Comprovação | MP4 2 + PR de reserva |
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

- [ ] Sessão nova do Claude no SONORA: Sonnet 5.5, effort medium, modo Manual.
- [ ] Abas na ordem da aula: deck, site publicado, GitHub (repositório e PR), Notion (página demo).
- [ ] Terminal já na pasta onde o Projeto B vai nascer.
- [ ] `npm run preview` do SONORA rodando em segundo plano, como reserva local.
- [ ] Não incomodar ligado, celular no silencioso, hotspot pronto para ligar.
- [ ] Água por perto.

---

## 9. Depois da aula

*R*

- [ ] Restaurar `~/.claude/settings.json` a partir do backup, se mexeu nele.
- [ ] Religar Windows Update e notificações.
- [ ] Decidir se o `.claude/settings.json` de aula fica no repositório ou sai (por PR, como qualquer mudança).
- [ ] Atualizar os cartões do quadro demo e registrar na Próxima ação o que foi feito ao vivo.
- [ ] Anotar o que deu errado e qual plano B funcionou, para a próxima turma.
