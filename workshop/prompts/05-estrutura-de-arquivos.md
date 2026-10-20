# 05 · Estrutura de arquivos (e o CLAUDE.md)

> Deixar as pastas do projeto organizadas antes de construir e criar o CLAUDE.md: o "manual da casa" que o Claude lê no começo de toda sessão (comandos, estrutura e regras do projeto).
>
> Ao vivo no workshop: sim (slide P2, junto com a etapa 04). O Roberto organiza as pastas e roda o `/init` no Projeto B; para os alunos é opcional.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Sonnet 5.5 (ou Opus 5.5) | medium | Plan → Accept edits | nenhuma | nenhum |

Por quê:

- **Sonnet 5.5 ou Opus 5.5, medium:** é construção simples (criar pastas, mover arquivos, escrever um texto curto). Não precisa de raciocínio longo.
- **Plan → Accept edits:** primeiro você vê a árvore proposta (Plan). Depois de aprovar, o modo Accept edits deixa o Claude criar pastas e editar arquivos sem pedir a cada um. Comandos como `npm run build` ou apagar arquivos continuam pedindo licença.
- **Sem skill:** o `/init` já vem no Claude Code.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [FUNCIONALIDADES] | hero; exploded view; Engenharia; especificações; chamada final | destinos; roteiro; mapa da rota; perguntas frequentes; botão de orçamento |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 com ScrollTrigger (npm), fontes locais, Playwright, GitHub Pages | Vite + JavaScript puro + GSAP pelo npm, GitHub Pages |
| [CRITÉRIOS_DE_ACEITAÇÃO] | `npm run dev` e `npm run build` sem erro; console limpo | `npm run dev` e `npm run build` sem erro; console limpo |

## Prompt (copiar e colar)

Esta etapa tem três passos: **A** organiza as pastas, **/init** cria o CLAUDE.md e **B** enxuga o CLAUDE.md.

### Passo A: estrutura (comece no modo Plan)

```text
CONTEXTO
Projeto do site de [NOME_DA_MARCA], criado com
"npm create vite@latest <pasta> -- --template vanilla", com gsap já instalado.
Stack: [STACK].
Leia package.json, index.html, a pasta src/ e docs/plano.md (se existir).
Seções previstas: [FUNCIONALIDADES].

OBJETIVO
Deixar a estrutura de pastas pronta para o plano, com cada seção vazia
no lugar certo. Ainda não implemente o visual nem a animação.

RESTRIÇÕES
- Não instale nada e não use CDN.
- Antes de apagar arquivos de exemplo do template (contador, logos),
  liste quais são e espere meu OK.
- Nomes de arquivo e pasta em minúsculas, sem acento e sem espaço
  (ex.: perguntas-frequentes.js). O servidor do GitHub Pages diferencia
  maiúsculas de minúsculas; o Windows não.
- Não mexa em node_modules nem edite package-lock.json à mão.
- Não leia nem crie .env.

FERRAMENTAS PERMITIDAS
- Ler e editar arquivos desta pasta; criar pastas.
- Rodar npm run dev e npm run build.

REQUISITOS TÉCNICOS
- Árvore:
  index.html                uma <section id="..."> por seção prevista
  src/main.js               importa os estilos e chama init() de cada seção
  src/sections/<secao>.js   um arquivo por seção; cada um exporta init()
  src/styles/tokens.css     variáveis CSS (cores, fontes, espaços)
  src/styles/base.css       reset leve e estilos gerais
  src/styles/sections.css   estilos das seções
  src/lib/                  funções reutilizáveis
  public/img/  public/frames/  public/fonts/   arquivos servidos como estão
  docs/                     brief, requisitos, plano
- vite.config.js com base "/<nome-do-repositório>/" para o GitHub Pages.
  Pergunte o nome do repositório se não souber.
- .gitignore com node_modules, dist, .env e _originais/
  (pasta das imagens e vídeos originais, pesados demais para o git).
- Arquivos de public/: no HTML e no CSS, caminho absoluto ("/img/foto.webp"),
  que o Vite ajusta ao base no build. No JavaScript, sempre com
  import.meta.env.BASE_URL (ali o Vite não ajusta nada).

RESULTADO ESPERADO
A árvore proposta para eu aprovar. Depois da aprovação, as pastas criadas
e um index.html com as seções vazias, cada uma com um título provisório.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- Cada seção de [FUNCIONALIDADES] tem um <section id> e um arquivo em src/sections/.
- Nenhuma dependência nova no package.json.

COMO VALIDAR
- Rode npm run build e mostre o final da saída.
- Inicie npm run dev e me diga o endereço (com o base, ele termina em /<nome-do-repositório>/).
- Se você tiver ferramenta de navegador, abra a página e leia o console;
  se não tiver, me diga exatamente o que conferir.
```

### Passo intermediário: rode o `/init`

Digite `/init` na caixa do Claude (Desktop ou CLI). Ele lê o projeto e cria o `CLAUDE.md` na raiz. Se já existir um, confira com `/diff` o que ele mudou antes de seguir.

### Passo B: enxugar o CLAUDE.md

```text
Revise o CLAUDE.md que o /init criou.
- No máximo 60 linhas. Corte o que for óbvio ou repetido.
- Seções: Comandos, Estrutura, Regras, Compact instructions.
- Só cite comandos que existem no package.json.
- Regras que devem estar lá:
  não adicionar dependências sem perguntar; nada de CDN;
  animar só transform e opacity (além de canvas e traço de SVG);
  respeitar prefers-reduced-motion;
  no JavaScript, arquivos de public/ via import.meta.env.BASE_URL;
  antes de dizer que terminou, rodar npm run build e conferir o console;
  não fazer commit nem push sem pedido;
  commits em português no padrão Conventional Commits (feat:, fix:, docs:, chore:);
  nunca ler nem exibir .env.
- Em "Compact instructions", diga o que manter ao resumir a conversa:
  passo atual de docs/plano.md, decisões tomadas e erros ainda abertos.
Mostre o diff antes de salvar.
```

## Versão curta (para o slide)

```text
(Plan) Organize o projeto: index.html com uma <section id> por seção; src/main.js; src/sections/<secao>.js com init(); src/styles/tokens.css; public/img, frames, fonts; docs/. vite.config.js com base do GitHub Pages. Nada novo no package.json. Rode npm run build. Depois: /init e enxugue o CLAUDE.md (até 60 linhas: comandos, estrutura, regras).
```

## Resultado esperado e validação

A árvore final do Projeto B fica parecida com a do SONORA:

```text
meu-site/
├── CLAUDE.md
├── index.html
├── package.json
├── vite.config.js
├── docs/
├── public/
│   ├── fonts/
│   ├── frames/
│   └── img/
└── src/
    ├── main.js
    ├── lib/
    ├── sections/
    └── styles/
```

Um `vite.config.js` mínimo para o GitHub Pages:

```js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/meu-site/", // troque pelo nome do seu repositório
});
```

Um CLAUDE.md enxuto, como exemplo:

```markdown
# meu-site

Site estático de ANDARA Viagens (Vite + JavaScript puro + GSAP com ScrollTrigger).

## Comandos
- `npm run dev`: servidor local
- `npm run build`: gera dist/
- `npm run preview`: serve dist/ para conferir o build

## Estrutura
- index.html: uma <section id> por seção
- src/sections/*.js: uma seção por arquivo, cada uma exporta init()
- src/styles/tokens.css: cores, fontes e espaços
- public/: imagens, quadros e fontes servidos como estão
- docs/: brief, requisitos e plano

## Regras
- Não adicionar dependências sem perguntar. Nada de CDN.
- Animar só transform e opacity (além de canvas e traço de SVG). Respeitar prefers-reduced-motion.
- No JavaScript, arquivos de public/ via import.meta.env.BASE_URL. No HTML e no CSS, caminho absoluto (/img/...).
- Antes de dizer que terminou: npm run build e console do navegador limpo.
- Não fazer commit nem push sem pedido. Conventional Commits em português.
- Nunca ler nem exibir .env.

## Compact instructions
Manter: passo atual de docs/plano.md, decisões tomadas e erros abertos.
```

Como conferir:

- `npm run dev`: a página abre com as seções vazias e o console (F12 › Console) sem erros vermelhos.
- `npm run build`: termina sem erro e cria a pasta `dist/`.
- Abra o CLAUDE.md e conte as linhas. Leia as regras: estão certas para o seu projeto?
- Comece uma sessão nova (`/clear`) e pergunte "quais são as regras deste projeto?". Ele deve responder com o CLAUDE.md.

Onde ficam as outras memórias:

| Arquivo | Para quê | Vai para o git? |
|---|---|---|
| `./CLAUDE.md` (ou `.claude/CLAUDE.md`) | regras do projeto, para todo mundo | sim |
| `./CLAUDE.local.md` | preferências suas neste projeto | não (fica no .gitignore) |
| `~/.claude/CLAUDE.md` | preferências suas em todos os projetos | não |

Para editar depois, use `/memory` ou peça ao Claude. Dentro do CLAUDE.md, `@caminho/arquivo.md` importa outro arquivo.

## Quando adaptar

- **Projeto com front e back:** separe em pastas (`client/`, `server/`), com um CLAUDE.md em cada uma. O CLAUDE.md de subpasta é carregado quando o Claude trabalha nela.
- **Site com várias páginas (blog, cardápio separado):** o Vite precisa saber de cada HTML extra no build. Peça ao Claude para configurar as páginas no `vite.config.js` conforme a documentação do Vite ("multi-page app") e conferir se todas aparecem em `dist/`.
- **Hospedagem na raiz de um domínio próprio** (ex.: `meusite.com.br`): o `base` passa a ser `"/"`.
- **Trabalho em equipe:** o CLAUDE.md vira contrato do time. Mudança nele passa por revisão, como código.
- **Projeto que já existe:** rode `/init` primeiro, para o Claude descrever o que encontrou, e só depois reorganize, em lotes pequenos.

## Problemas comuns

- **O `/init` gera um CLAUDE.md enorme** → use o passo B. Arquivo longo ocupa contexto em toda sessão e as regras importantes se perdem.
- **Imagens funcionam no computador e somem depois de publicar** → caminho escrito à mão no JavaScript (`"/img/foto.webp"`), que ignora o `base`, ou diferença entre maiúscula e minúscula no nome. No JavaScript, use `import.meta.env.BASE_URL`; em todo lugar, nomes em minúsculas.
- **O Claude apagou um arquivo que você queria** → no Passo A ele precisa listar antes de apagar. Se já apagou, `/rewind` volta o código (os checkpoints não desfazem o que foi feito por comando no terminal; no app desktop, conferir se o `/rewind` aparece), e o git é a rede de segurança definitiva.
- **As regras do CLAUDE.md são ignoradas** → confira se o arquivo está na raiz da pasta aberta no Claude e se a regra está escrita como ordem clara ("Não adicionar dependências sem perguntar"), não como sugestão.
