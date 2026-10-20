# 03 · Planejamento da aplicação

> Pedir ao Claude um plano completo antes de qualquer linha de código, revisar e só então aprovar. No modo Plan ele lê, pensa e propõe, mas não edita nada até você dizer "pode fazer".
>
> Ao vivo no workshop: sim (slide P2, cerca de 4 min). O Roberto planeja o Projeto B no modo Plan, com Opus 5.5 e effort high, e só salva o `docs/plano.md` depois de aprovar. Para os alunos é opcional: rodar a versão curta sobre o próprio brief e só ler o plano; aprovar fica para casa.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Opus 5.5 | high | Plan | nenhuma | nenhum |

Por quê:

- **Opus 5.5:** planejar é decidir arquitetura, ordem e riscos. Um erro aqui se repete em todo o código, então vale o modelo mais forte do dia a dia.
- **Effort high:** o plano pede raciocínio longo (ligar requisitos, arquivos, animação e testes). Use high no planejamento e volte para medium na construção.
- **Modo Plan:** separa pensar de fazer. O Claude lê os arquivos e propõe, mas só edita depois da sua aprovação.
- **Fable 5.1** fica para um problema muito difícil (é o mais caro: US$ 10/50 por milhão de tokens na API). Um site de uma página não precisa dele. O acesso ao Fable pode não estar liberado em toda conta: conferir antes de contar com ele.
- **Para economizar (conferir na sua versão):** o alias `opusplan` usa Opus no modo Plan e Sonnet na execução. Na CLI: `/model opusplan`.

Como entrar no modo Plan:

| Onde | Como |
|---|---|
| Claude Desktop | seletor de modo, abaixo da caixa de prompt › **Plan**. No Desktop, Plan vale só para a sessão atual. |
| Claude Code CLI | `Shift+Tab` até aparecer "plan", ou digite `/plan`. `/plan <tarefa>` já começa planejando. No Windows sem suporte a VT, o atalho é `Alt+M`. |

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [OBJETIVO_DO_SITE] | levar à lista de espera (demonstrativa) | levar a pedir orçamento pelo WhatsApp |
| [FUNCIONALIDADES] | hero; exploded view; seção Engenharia; especificações; chamada final | destinos em cards; roteiro dia a dia; mapa da rota; perguntas frequentes; botão de orçamento |
| [ANIMAÇÃO_DESEJADA] | canvas fixado com cerca de 120 quadros do fone se desmontando, com scrub; blueprint em SVG que se desenha | linha da rota que se desenha no mapa; fotos com parallax leve |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 com ScrollTrigger (npm), fontes locais, Playwright, GitHub Pages | Vite + JavaScript puro + GSAP pelo npm, GitHub Pages |
| [CRITÉRIOS_DE_ACEITAÇÃO] | `npm run build` sem erro; console sem erros; exploded view nos dois sentidos; reduced-motion com composição estática; sem rolagem horizontal em 375 px | `npm run build` sem erro; console sem erros; botão de orçamento na primeira tela do celular; fotos com texto alternativo |

## Prompt (copiar e colar)

```text
CONTEXTO
Projeto: site de [NOME_DA_MARCA]. Objetivo: [OBJETIVO_DO_SITE].
Leia docs/brief.md e docs/requisitos.md, se existirem, e a estrutura atual da pasta.
Funcionalidades: [FUNCIONALIDADES].
Animação principal: [ANIMAÇÃO_DESEJADA].
Stack obrigatória: [STACK].
Sou iniciante: prefira a solução mais simples que cumpre os requisitos.

OBJETIVO
Propor um plano de implementação que eu possa revisar e aprovar.
Não edite nenhum arquivo antes da minha aprovação.

RESTRIÇÕES
- Use só a stack informada. Não proponha React, Tailwind, Three.js, Lenis
  ou outra biblioteca sem me perguntar e explicar por quê.
- Nada de CDN: dependências pelo npm, fontes e imagens dentro do projeto.
- Divida o trabalho em passos pequenos (de 10 a 20 minutos cada), em que
  cada passo termina com algo que eu consiga ver ou testar.
- Se algum requisito exigir backend, diga e proponha a alternativa estática.
- Se faltar informação, faça as perguntas ANTES do plano (no máximo 5).

FERRAMENTAS PERMITIDAS
- Ler arquivos e pastas do projeto.
- Consultar documentação oficial (vite.dev, gsap.com, developer.mozilla.org)
  se precisar confirmar uma API.
- Depois da aprovação: salvar o plano em docs/plano.md como primeiro passo.

REQUISITOS TÉCNICOS
O plano deve conter:
1. Mapa de seções: ordem, objetivo de cada seção, conteúdo e ativo visual.
2. Árvore de arquivos proposta (index.html, src/main.js, src/sections/,
   src/styles/, public/...) e a responsabilidade de cada arquivo.
3. Estratégia da animação: técnica escolhida, por que ela, como fica no
   celular e qual a versão estática para prefers-reduced-motion.
4. Lista de ativos (imagens, vídeo, fontes): nome do arquivo, formato,
   tamanho em pixels e quem gera.
5. Passos de implementação numerados, cada um com "como testar".
6. Riscos e plano B (ex.: se a animação travar no celular, o que entra no lugar).
7. O que fica fora desta versão.

RESULTADO ESPERADO
Um plano na tela, curto o bastante para eu ler em 3 minutos,
terminando com a pergunta "posso começar pelo passo 1?".

CRITÉRIOS DE ACEITAÇÃO
- Todo item de [FUNCIONALIDADES] aparece em pelo menos um passo.
- Todo passo tem "como testar".
- Nenhuma dependência fora de [STACK].
- O plano atende a [CRITÉRIOS_DE_ACEITAÇÃO] e diz em que passo cada um é conferido.

COMO VALIDAR
- Termine o plano com uma tabela: critério de aceitação → passo em que é testado.
- Liste as decisões que você tomou sozinho, para eu confirmar.
```

## Versão curta (para o slide)

```text
(Modo Plan) Leia o projeto e docs/brief.md. Planeje o site de [NOME_DA_MARCA] com [STACK]: seções, árvore de arquivos, estratégia de [ANIMAÇÃO_DESEJADA] com versão reduced-motion, lista de ativos, passos de 10-20 min com "como testar", riscos. Sem bibliotecas extras, sem CDN. Não edite nada antes da minha aprovação.
```

## Resultado esperado e validação

O que deve aparecer:

1. Talvez algumas perguntas. Responda.
2. Um plano com as 7 partes e a tabela "critério → passo".
3. Um pedido de aprovação. No Desktop e na CLI, aprovar o plano troca para o modo que você escolher. Para construir, escolha **Accept edits**.

Antes de aprovar, confira:

- [ ] Cada funcionalidade tem um passo.
- [ ] Cada passo tem "como testar".
- [ ] Não apareceu biblioteca nova (procure por "npm install" no plano).
- [ ] Existe versão para prefers-reduced-motion.
- [ ] O passo 1 é pequeno: algo visível em menos de 20 minutos.
- [ ] O primeiro passo depois da aprovação é salvar `docs/plano.md`. Assim o plano sobrevive a um `/clear` ou a uma nova sessão.

Se algo estiver errado, **não aprove**: responda com a correção ("troque o passo 3 por...", "tire o Lenis") e peça um plano novo.

## Quando adaptar

- **Projeto com backend (login, pagamento, agenda):** o plano ganha partes de API, banco de dados, segredos (`.env` fora do git) e deploy do servidor. Peça um plano por camada e comece pela parte mais arriscada.
- **Restaurante:** o plano precisa dizer de onde vem o cardápio (arquivo de dados fácil de editar) e como o mapa entra. Um link para o app de mapas é mais leve e mais privado que um mapa embutido.
- **Projeto que já existe:** comece pedindo um mapa do que já está lá ("leia e descreva a arquitetura") e só depois o plano da mudança. Nunca planeje em cima de suposição sobre código que o Claude não leu.
- **Animação pesada (vídeo, centenas de imagens, 3D):** peça um passo 0 de "prova de conceito": a técnica funcionando sozinha, numa página de teste, antes de entrar no site.
- **Pouco tempo (como no workshop):** peça "MVP em 4 passos" e mande o resto para "fora desta versão".

## Problemas comuns

- **O Claude começa a editar arquivos** → você não está no modo Plan. Confira o seletor de modo (Desktop) ou o indicador na CLI e use `/rewind` (ou `Esc Esc`) para desfazer, se precisar. Conferir na sua versão se os checkpoints aparecem no Desktop.
- **Plano gigante, com 20 passos** → "Corte para no máximo 6 passos. O resto vai para 'fora desta versão'."
- **O plano traz biblioteca que você não pediu** → "Use só [STACK]. Se acha que precisa de X, explique o problema que X resolve e qual seria a alternativa sem X."
- **O plano se perdeu depois de `/clear` ou de uma sessão nova** → por isso ele vai para `docs/plano.md`. Comece a sessão nova com "leia docs/plano.md e continue do passo N".

## Exemplo ruim × bom

**Ruim:**

```text
Planeja meu site de viagens e já faz tudo.
```

**Bom:**

```text
(Modo Plan) Leia o projeto e docs/brief.md. Planeje o site da ANDARA Viagens com Vite + JavaScript puro + GSAP pelo npm: seções, árvore de arquivos, estratégia da linha da rota que se desenha no mapa com versão reduced-motion, lista de ativos, passos de 10-20 min com "como testar", riscos. Sem bibliotecas extras, sem CDN. Não edite nada antes da minha aprovação.
```

Por que o bom funciona melhor:

- **"Já faz tudo" mistura pensar e fazer.** Se a direção estiver errada, você só descobre depois de muito código gerado, e corrigir custa mais tokens e mais tempo.
- **O bom fixa a stack.** Sem isso, o Claude pode escolher React, Tailwind ou bibliotecas que você não sabe manter.
- **Passos pequenos com "como testar"** viram um checklist. Você sabe onde está e o que conferir.
- **A versão reduced-motion entra desde o plano.** Acessibilidade planejada é barata; remendada no fim, é cara.
- **"Não edite antes da aprovação"** reforça o modo Plan. Você continua no controle.
