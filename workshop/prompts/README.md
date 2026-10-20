# Biblioteca de prompts do workshop

Workshop de IA · 20/10/2026 · Projeto A (SONORA, pronto) e Projeto B (construído ao vivo)

Esta pasta guarda **26 prompts prontos**, um por etapa da construção de um site: da ideia do negócio até o deploy e as melhorias futuras. Eles foram escritos para o SONORA (headphones premium, marca fictícia), mas servem para qualquer site: landing page, portfólio, restaurante, turismo, produto.

**Analogia:** cada arquivo é uma receita. As **variáveis** são os ingredientes do seu projeto. O **prompt** é o modo de preparo. A **validação** é o palito no bolo: só tira do forno quando sai limpo.

Sumário:

1. [Como usar](#como-usar)
2. [As 26 etapas](#as-26-etapas)
3. [Configuração por tipo de tarefa](#configuração-por-tipo-de-tarefa)
4. [Variáveis](#variáveis)
5. [Estrutura recomendada de prompt](#estrutura-recomendada-de-prompt)
6. [Regras de segurança](#regras-de-segurança)
7. [Skills recomendadas](#skills-recomendadas)
8. [Prática na aula (30 a 40 min)](#prática-na-aula-30-a-40-min)
9. [Arquivos relacionados](#arquivos-relacionados)

---

## Como usar

1. **Escolha a etapa** na tabela abaixo. Faça uma etapa por vez, na ordem, ou pule para a que você precisa.
2. **Configure o Claude** como manda a seção "Configuração recomendada" do arquivo: modelo, effort e modo.
   - **App Claude Desktop, aba Code:** use os seletores abaixo da caixa de mensagem (atalhos Ctrl+Shift+I, Ctrl+Shift+E e Ctrl+Shift+M; conferir na sua versão).
   - **Claude Code no terminal (CLI):** `/model sonnet`, `/effort medium`, Shift+Tab para trocar o modo, `/plan` para entrar no Plan.
   - **Atenção:** nem todo comando de barra se comporta igual no app e no terminal. Pelo levantamento feito para a aula, `/permissions`, `/config`, `/mcp`, `/resume` e `/rewind` funcionam diferente no app desktop. Se um comando não responder no app, use o seletor ou o menu equivalente (conferir na sua versão).
3. **Copie o prompt** do bloco "Prompt (copiar e colar)". Com pressa, use a "Versão curta".
4. **Preencha as variáveis:** troque cada `[VARIÁVEL]` pelo dado do seu projeto (tabela [Variáveis](#variáveis)). Os campos entre `< >` (número da PR, erro do console, nome do cartão) são dados do momento: preencha na hora. Se não souber algo, escreva "não sei, me pergunte"; não deixe o colchete vazio.
5. **Rode:** cole na conversa, com a pasta do projeto aberta. Uma etapa por conversa; use `/clear` ao trocar de etapa (não custa nada e não apaga arquivos). No app desktop, abrir uma sessão nova tem o mesmo efeito.
6. **Valide:** siga "Resultado esperado e validação". Nada está pronto sem prova: build, testes, navegador, diff.
7. **Registre:** commit (etapa 20), PR (etapa 21) e cartão no Notion (etapa 24).

> **Dica:** guarde as variáveis preenchidas num lugar só (por exemplo, no brief da etapa 01 ou no `CLAUDE.md` do projeto). Assim você cola as mesmas respostas em todas as etapas.

---

## As 26 etapas

A coluna **Bloco** diz se a etapa entra ao vivo no workshop e em qual prática do deck (P1 a P12). São 12 práticas, uma por arquivo; "apoio do PX" = arquivo usado de passagem naquela prática; "apoio / em casa" = material para continuar no seu projeto.

| Nº | Etapa | Para que serve | Tipo de tarefa | Bloco |
|---|---|---|---|---|
| 01 | [Pesquisa e definição do negócio](01-pesquisa-e-definicao-do-negocio.md) | Transformar a ideia num brief de uma página | pesquisa | P1 (negócio e requisitos) |
| 02 | [Levantamento de requisitos](02-levantamento-de-requisitos.md) | Lista priorizada e testável do que o site precisa fazer | pesquisa | apoio do P1 (se der tempo) |
| 03 | [Planejamento da aplicação](03-planejamento-da-aplicacao.md) | Plano de construção no modo Plan, antes de editar | planejamento | P2 (plano no modo Plan) |
| 04 | [Escolha de stack](04-escolha-de-stack.md) | Decidir as ferramentas (Vite, GSAP, hospedagem) | planejamento | apoio / em casa (stack já decidida) |
| 05 | [Estrutura de arquivos](05-estrutura-de-arquivos.md) | Pastas do projeto, `/init` e o `CLAUDE.md` | construção | P3 (pasta base e `CLAUDE.md`) |
| 06 | [Identidade visual](06-identidade-visual.md) | Cores, fontes e direção de arte, com uma skill de design | construção | P4 (identidade e skill) |
| 07 | [Experiência do usuário](07-experiencia-do-usuario.md) | Caminho do visitante e ordem das seções | planejamento | apoio / em casa |
| 08 | [Geração de imagens](08-geracao-de-imagens.md) | Imagens no Higgsfield: texto→imagem, imagem→imagem, consistência do produto, proporção, custo | mídia | P5 (imagens, só demonstração) |
| 09 | [Geração de vídeos](09-geracao-de-videos.md) | Imagem→vídeo, quadro inicial e final, câmera, preparo para scrub com ffmpeg | mídia | apoio / em casa |
| 10 | [Landing page](10-landing-page.md) | Construir a página principal | construção | P6 (landing) |
| 11 | [Componentes](11-componentes.md) | Peças reutilizáveis (cards, botões, seções) | construção | apoio / em casa |
| 12 | [Animações de scroll](12-animacoes-de-scroll.md) | GSAP ScrollTrigger (pin, scrub), CSS scroll-driven, sequência de imagens, quando usar 3D | animação | P7 (animação) |
| 13 | [Integração de ativos](13-integracao-de-ativos.md) | Colocar imagens, vídeo, quadros e fontes no site, leves e no lugar certo | construção | apoio / em casa (o kit entra no P6) |
| 14 | [Interações](14-interacoes.md) | Botões, menu, acordeão, formulário, hover e foco, teclado | construção | apoio / em casa |
| 15 | [Revisão de design](15-revisao-de-design.md) | Lista priorizada do que melhorar, com a skill `/review-landing` | revisão | P8 (revisão, no SONORA) |
| 16 | [Debugging](16-debugging.md) | Problema → Investigação → Hipótese → Correção → Teste → Validação, com DevTools | debugging | slide 38 (erro plantado, fora das P1 a P12) |
| 17 | [Testes](17-testes.md) | Testes com Playwright: carregamento, console, celular, reduced-motion | construção | apoio / em casa |
| 18 | [Revisão de segurança](18-revisao-de-seguranca.md) | Segredos, `.env`, dependências, skills de terceiros | revisão | apoio / em casa |
| 19 | [Organização do Git](19-organizacao-do-git.md) | `.gitignore`, repositório e branch por tarefa | GitHub | apoio do P9 (branch) |
| 20 | [Commits](20-commits.md) | Conventional Commits em português, com o porquê | GitHub | P9 (branch e commits, no SONORA) |
| 21 | [Pull request](21-pull-request.md) | PR com template: O que muda, Por quê, Como verifiquei, Como validar, Riscos | GitHub | P10 (PR, revisão e merge, no SONORA) |
| 22 | [Revisão de código](22-revisao-de-codigo.md) | `/code-review` e triagem dos comentários antes de aceitar | revisão | apoio do P10 (`/code-review`) |
| 23 | [Merge](23-merge.md) | Checklist e merge manual, `main` atualizada, deploy acompanhado | GitHub | apoio do P10 (merge) |
| 24 | [Documentação no Notion](24-documentacao-no-notion.md) | Cartão atualizado pelo conector: Comprovação, Próxima ação, Status | Notion | P11 (Notion) |
| 25 | [Deploy](25-deploy.md) | GitHub Pages via Actions, `base` do Vite, alternativa Netlify Drop | GitHub | P12 (deploy do Projeto B) |
| 26 | [Melhorias futuras](26-melhorias-futuras.md) | Backlog priorizado, separando ajuste simples de mudança de arquitetura | planejamento | apoio / em casa |

Mapa rápido das 12 práticas do deck: P1 = 01 · P2 = 03 · P3 = 05 · P4 = 06 · P5 = 08 · P6 = 10 · P7 = 12 · P8 = 15 · P9 = 20 · P10 = 21 · P11 = 24 · P12 = 25.

O fluxo de trabalho por trás das etapas 19 a 25:

```text
ideia ou pedido → cartão no Notion → branch (feat/, fix/, docs/, chore/)
→ commits (Conventional Commits em português, com coautoria do Claude)
→ PR com template → CI obrigatório (testes e build) → revisão por outro LLM ou pessoa
→ merge manual → deploy automático → cartão atualizado → outra pessoa valida → Concluído
```

---

## Configuração por tipo de tarefa

Cada arquivo traz a configuração exata da etapa. Esta é a regra geral (orientação da aula, não receita oficial):

| Tipo de tarefa | Modelo | Effort | Modo | Por quê |
|---|---|---|---|---|
| Pesquisa | Sonnet 5.5 | low ou medium | Manual (ou Plan) | Ler e organizar texto é barato; não precisa editar |
| Planejamento | Opus 5.5 | high | Plan | Pensar antes de mexer; nada é editado sem aprovação |
| Construção | Sonnet 5.5 (ou Opus 5.5) | medium | Accept edits | Edita rápido; você confere no navegador |
| Animação | Opus 5.5 (Sonnet 5.5 na prática da aula) | high (medium no Sonnet) | Accept edits | Timing, pin e scrub erram fácil; vale mais raciocínio. Na aula, o Sonnet poupa o limite do plano |
| Debugging | Opus 5.5 | high | Manual | Diagnóstico antes da correção; você aprova cada passo |
| Revisão (design, segurança, código) | Opus 5.5 | high | Plan ou Manual | Revisão aponta; não edita |
| GitHub, Notion, documentação | Sonnet 5.5 | medium ou low | Manual | Ações externas e públicas: você confirma cada uma |
| Mídia (etapas 08 e 09) | Sonnet 5.5 para escrever o prompt | medium | Manual | A geração acontece no Higgsfield e custa créditos |

O que você precisa saber:

- **Effort não é temperatura.** Effort é quanto o modelo pensa antes de responder (`low`, `medium`, `high`, `xhigh`, `max`). Temperatura (o "sorteio" na escolha das palavras) não se ajusta no Claude Code.
- **Modos:** Manual (antes chamado "Ask permissions"), Accept edits, Plan e Auto. **Nunca use Bypass.** Na aula, evite o Auto: ele decide sozinho com um classificador que, segundo a própria documentação, não garante segurança. Em versões novas do terminal (ou se a configuração pedir), a sessão pode começar em Auto: confira o modo e troque antes do primeiro pedido.
- **Preço na API** (US$ por milhão de tokens, entrada/saída): Haiku 5.5 0,10/0,50 (prompt de até 100 mil tokens) · Sonnet 5.5 2/10 · Opus 5.5 4/20 · Fable 5.1 10/50. Em assinatura, o uso entra nos limites do plano (os valores dos planos não foram confirmados para esta aula: conferir).
- Comandos, atalhos e modos em detalhe: [`../guia-de-comandos.md`](../guia-de-comandos.md), seção 1.

---

## Variáveis

As mesmas 12 variáveis aparecem em todos os prompts. Cada arquivo lista só as que usa.

| Variável | O que é | Exemplo: SONORA | Exemplo: agência de viagens (ANDARA Viagens, fictícia) |
|---|---|---|---|
| `[NOME_DA_MARCA]` | Nome do negócio ou do projeto | SONORA (marca fictícia) | ANDARA Viagens |
| `[SEGMENTO]` | Ramo de atuação | áudio premium (eletrônicos de consumo) | turismo de natureza |
| `[PRODUTO_OU_SERVIÇO]` | O que o negócio vende ou oferece | headphone over-ear sem fio, com cancelamento de ruído | roteiros de 7 a 10 dias em grupos pequenos pela Patagônia, por Portugal (Lisboa e trilha costeira) e pelo Japão (Kyoto no outono) |
| `[PÚBLICO_ALVO]` | Para quem é o site | adultos de 25 a 40 anos que trabalham com foco ou viajam muito | adultos de 28 a 45 anos que querem natureza com conforto |
| `[OBJETIVO_DO_SITE]` | A ação principal que o visitante deve tomar | apresentar o fone e levar à lista de espera (demonstrativa, sem coletar dados) | levar o visitante a pedir orçamento pelo WhatsApp |
| `[ESTILO_VISUAL]` | Clima e linguagem visual | escuro, técnico e cinematográfico; o produto é o protagonista | claro, editorial e fotográfico; sensação de ar livre |
| `[PALETA_DE_CORES]` | Cores principais e o papel de cada uma | grafite quase preto, cobre polido (destaque), cinza quente claro (texto) | areia, verde-musgo, azul-profundo e laranja de pôr do sol só no botão principal |
| `[REFERÊNCIAS]` | Sites ou peças de que você gosta | páginas de produto da Apple (AirPods Pro e Max), Sonos Ace, Nothing Headphone (1) | sites de turismo premiados no Awwwards (ex.: Tourisme Sumène Artense) |
| `[ANIMAÇÃO_DESEJADA]` | O efeito principal de movimento | o fone se desmonta conforme o scroll (exploded view); blueprint em SVG que se desenha | linha da rota que se desenha no mapa conforme o scroll |
| `[FUNCIONALIDADES]` | Seções e funções do site (ou da etapa) | hero; exploded view; seção Engenharia; especificações; chamada para a lista de espera | destinos em cards; roteiro dia a dia; mapa da rota; perguntas frequentes; botão de orçamento |
| `[STACK]` | Ferramentas técnicas | Vite + JavaScript puro + GSAP 3.15 com ScrollTrigger (npm), fontes locais, Playwright, GitHub Pages | a mesma stack do workshop (ou "não sei, me recomende" na etapa 04) |
| `[CRITÉRIOS_DE_ACEITAÇÃO]` | Como saber que ficou pronto (sim ou não) | `npm run build` sem erro; console limpo; exploded view nos dois sentidos; reduced-motion com composição estática | `npm run build` sem erro; console limpo; botão de orçamento na primeira tela do celular; fotos com texto alternativo |

Regras para preencher:

- **Seja concreto.** "Jovens" é vago; "universitários de 18 a 25 anos do bairro" ajuda.
- **Critério de aceitação responde sim ou não.** "Bonito" não é critério; "o botão aparece na primeira tela do celular" é.
- **Não invente número.** Preço, estatística e especificação só com fonte. Sem fonte, escreva "a confirmar".

---

## Estrutura recomendada de prompt

Todo prompt desta pasta segue a mesma espinha, em seis partes:

**Contexto → Objetivo → Restrições → Recursos → Critérios de aceitação → Verificação**

| Parte | Pergunta que responde | Exemplo curto | Nos arquivos aparece como |
|---|---|---|---|
| Contexto | Onde estamos? O que já existe? | "Site da ANDARA Viagens, Vite + JS. Leia o CLAUDE.md." | CONTEXTO |
| Objetivo | O que deve existir no fim? | "Adicionar perguntas frequentes em acordeão." | OBJETIVO |
| Restrições | O que não pode? | "Sem bibliotecas novas. Não mude as cores." | RESTRIÇÕES |
| Recursos | Com o quê? Como, tecnicamente? | "Pode editar src/ e rodar npm run build. Use `<details>`." | FERRAMENTAS PERMITIDAS e REQUISITOS TÉCNICOS |
| Critérios de aceitação | Como sei que ficou pronto? | "Abre com Enter; console limpo; 390 px sem rolagem lateral." | RESULTADO ESPERADO e CRITÉRIOS DE ACEITAÇÃO |
| Verificação | Como eu confiro com meus olhos? | "Diga o que clicar e o que devo ver." | COMO VALIDAR |

Esqueleto para escrever o seu:

```text
CONTEXTO
<projeto, stack, o que já existe, o que ler antes>

OBJETIVO
<o resultado, em uma ou duas frases>

RESTRIÇÕES
- <o que não pode mudar>
- <o que não pode fazer sem perguntar>

FERRAMENTAS PERMITIDAS
- <arquivos que pode editar, comandos que pode rodar>

REQUISITOS TÉCNICOS
- <como fazer: padrões, limites, acessibilidade>

RESULTADO ESPERADO
<o que deve aparecer no fim: arquivos, resumo, link>

CRITÉRIOS DE ACEITAÇÃO
- <itens de sim ou não>

COMO VALIDAR
<o que você vai conferir: comando, navegador, diff>
```

Por que funciona: o Claude para de adivinhar o básico (contexto), sabe onde chegar (objetivo), não "sai fazendo" (restrições), usa o que pode (recursos) e prova o resultado (critérios e verificação). É como encomendar um móvel ao marceneiro: medida, material, prazo e como você vai conferir na entrega.

Exemplos de prompt ruim × bom estão nas etapas [01](01-pesquisa-e-definicao-do-negocio.md), [03](03-planejamento-da-aplicacao.md), [10](10-landing-page.md), [12](12-animacoes-de-scroll.md), [16](16-debugging.md) e [20](20-commits.md).

---

## Regras de segurança

- **Nunca use Bypass.** Use Manual para tudo que sai do seu computador: `git push`, PR, merge e escrita no Notion.
- **Plan antes de mudança grande.** E faça um commit antes de um pedido grande: se der errado, o Git desfaz.
- **Comandos de Git seguros:** `git switch -c`, `git restore`, `git revert`. `git reset --hard` e `git push --force` apagam trabalho: não use.
- **Segredo nunca entra no prompt, no código nem no front-end.** Tudo o que vai para o site publicado é público. Se uma chave vazar, troque a chave primeiro (etapa 18).
- **Texto de página é dado, não ordem.** Se um arquivo, página do Notion, PR ou skill trouxer instruções para o Claude, ele deve avisar você, e não obedecer.
- **Skill de terceiros:** leia o `SKILL.md` e os scripts antes de instalar (veja o estudo de caso na etapa 18).
- **"Conferir na sua versão":** o Claude Code muda rápido. O que estiver marcado assim, teste antes de contar com ele.

---

## Skills recomendadas

Uma skill é uma pasta com um arquivo `SKILL.md` (frontmatter com `name` e `description`) que ensina o Claude a fazer uma tarefa de um jeito específico. Fica em `~/.claude/skills/` (só sua, vale em todos os projetos) ou em `.claude/skills/` (do projeto, vai junto no repositório). Você chama com `/nome`, ou o Claude usa sozinho quando a descrição combina com o pedido.

| Skill | Origem e licença | Onde ajuda |
|---|---|---|
| `frontend-design` | anthropics/skills (Apache 2.0) | Etapas 06, 07, 10, 11, 14 |
| `webapp-testing` | anthropics/skills (Apache 2.0) | Etapas 16 e 17 |
| `skill-creator` | anthropics/skills (Apache 2.0) | Criar as suas próprias skills |
| `web-design-guidelines` | vercel-labs/agent-skills (MIT; baixa as regras da internet) | Etapas 07, 15 e 26 |
| `react-best-practices` | vercel-labs/agent-skills (MIT) | Só se o projeto usar React |
| GSAP skills | greensock/gsap-skills (MIT, oficial da GSAP) | Etapa 12 |
| `/review-landing` | skill do projeto SONORA, em `.claude/skills/review-landing/` | Etapa 15 |
| scroll-craft | nateherkai/scroll-craft (MIT) | **Estudo de caso de segurança** (etapa 18): inspecione antes de instalar |

---

## Prática na aula (30 a 40 min)

Sugestão para quem está com notebook: enquanto o Roberto constrói o Projeto B na tela, adapte a **versão curta** destes blocos para a sua ideia. Cada passo leva de 5 a 10 minutos.

| Bloco | Etapa | Tempo | O que você faz |
|---|---|---|---|
| P1 | [01](01-pesquisa-e-definicao-do-negocio.md) | 8 a 10 min | Preenche as variáveis e gera o brief |
| P3 | [05](05-estrutura-de-arquivos.md) | 5 min | Cria a pasta do site com o passo 1 do [capítulo 3 da apostila](../apostila.md#3-anatomia-de-um-projeto-vite) (npm create vite@latest meu-site -- --template vanilla, cd meu-site, npm install, npm install gsap, git init -b main), move a pasta docs para dentro de meu-site e roda /init |
| P4 | [06](06-identidade-visual.md) | 5 min | Preenche só `[ESTILO_VISUAL]` e `[PALETA_DE_CORES]` e guarda para a landing |
| P6 | [10](10-landing-page.md) | 10 a 12 min | Gera a landing da sua ideia |
| P7 | [12](12-animacoes-de-scroll.md) | 10 min | Adiciona uma animação de scroll, com reduced-motion |
| P8 | [15](15-revisao-de-design.md) | 5 a 7 min | Pede a revisão (sem a linha `/review-landing`) e escolhe 1 ou 2 itens |

Quem não tem notebook acompanha na tela e refaz em casa com esta pasta.

---

## Arquivos relacionados

- [`../apostila.md`](../apostila.md): a apostila da aula, capítulo por capítulo.
- [`../glossario.md`](../glossario.md): os termos explicados em português simples.
- [`../guia-de-comandos.md`](../guia-de-comandos.md): comandos do Claude Code, terminal, npm, Git, GitHub e DevTools.
- [`../notion-template.md`](../notion-template.md): como montar o quadro **Trabalho | [PROJETO]** e prompts prontos para o conector do Notion.
- `CLAUDE.md` (na raiz do repositório): o "manual do projeto" que o Claude lê no início de cada sessão.
- `.claude/skills/review-landing/SKILL.md`: a skill de revisão usada na etapa 15.
