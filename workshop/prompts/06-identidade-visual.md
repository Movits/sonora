# 06 · Identidade visual

> Definir como a marca "se veste": cores, fontes, espaços, estilo de imagem e um logotipo simples. Tudo vira variáveis CSS (design tokens) que o resto do site usa, para que mudar uma cor seja mudar uma linha.
>
> Ao vivo no workshop: sim (slide P3). O Roberto cria a identidade do Projeto B com a skill frontend-design. Quem tem notebook pode só preencher [ESTILO_VISUAL] e [PALETA_DE_CORES] e levar direto para a landing page (etapa 10); a versão completa fica para casa.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Opus 5.5 | high na proposta; medium nos ajustes | Plan → Accept edits | frontend-design (anthropics/skills, Apache 2.0) | nenhum (Google Drive opcional, se já existir manual de marca) |

Por quê:

- **Opus 5.5:** identidade é decisão de design com muitas variáveis (contraste, legibilidade, personalidade). O modelo mais forte erra menos no "gosto".
- **High na proposta, medium nos ajustes:** pensar as duas direções pede mais raciocínio; trocar um tom de cor, não.
- **Plan → Accept edits:** você escolhe a direção antes de qualquer arquivo ser criado. Depois, o Claude cria os arquivos sem pedir a cada um.
- **frontend-design:** skill oficial da Anthropic que orienta escolhas visuais menos genéricas. Para instalar, copie a pasta da skill do repositório `github.com/anthropics/skills` para `.claude/skills/frontend-design/` do projeto (conferir o passo a passo no README antes da aula). Confira com `/skills` se ela apareceu.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [SEGMENTO] | áudio premium | turismo de natureza |
| [PÚBLICO_ALVO] | adultos de 25 a 40 anos que valorizam design e engenharia | adultos de 28 a 45 anos que querem natureza com conforto |
| [ESTILO_VISUAL] | escuro, técnico e cinematográfico; muito espaço vazio; o produto é o protagonista | claro, editorial e fotográfico; calmo, com sensação de ar livre |
| [PALETA_DE_CORES] | grafite quase preto, cobre polido (destaque), cinza quente claro (texto) | areia, verde-musgo, azul-profundo e um laranja de pôr do sol só para o botão principal |
| [REFERÊNCIAS] | páginas de produto da Apple (AirPods Pro e Max), Sonos Ace, Nothing Headphone (1) | sites de turismo premiados no Awwwards, revistas de viagem impressas |

## Prompt (copiar e colar)

```text
CONTEXTO
Site de [NOME_DA_MARCA], do segmento [SEGMENTO], para [PÚBLICO_ALVO].
Leia docs/brief.md (tom de voz) e docs/plano.md, se existirem.
Estilo que imagino: [ESTILO_VISUAL].
Paleta que imagino: [PALETA_DE_CORES].
Referências: [REFERÊNCIAS]. Use como inspiração de qualidade; não copie
layout, logotipo nem cores características de marcas reais.

OBJETIVO
Criar a identidade visual do site e transformá-la em design tokens
(variáveis CSS) que o resto do projeto vai usar.

RESTRIÇÕES
- Primeiro proponha 2 direções (A e B) e espere eu escolher. Não crie arquivos antes.
- No máximo 2 famílias de fonte, com licença que permita embutir no site
  (ex.: OFL). Informe a licença e de onde baixar. Não baixe nada sem minha licença.
- Fontes dentro do projeto (.woff2 em public/fonts, ou um pacote @fontsource
  instalado pelo npm depois da minha aprovação), nada de link para CDN.
- Contraste mínimo (WCAG AA): 4,5:1 para texto normal; 3:1 para texto grande
  e para bordas de botão. Calcule e mostre a razão de cada par texto/fundo.
- Evite os clichês de "site feito por IA": degradê roxo, vidro fosco em tudo,
  emoji como ícone, sombra exagerada.
- Logotipo só tipográfico (o nome escrito com a fonte da marca), feito em HTML/CSS.

FERRAMENTAS PERMITIDAS
- Ler arquivos do projeto; ativar a skill frontend-design se estiver instalada.
- Depois da escolha: criar e editar src/styles/tokens.css, docs/identidade.md
  e estilo.html.
- Rodar npm run dev e npm run build.

REQUISITOS TÉCNICOS
Cada direção deve ter:
1. Conceito em uma frase.
2. Paleta de 5 a 7 cores com nome, hex e papel (fundo, superfície, texto,
   texto secundário, destaque, borda, erro).
3. Tipografia: fonte de título e de texto, pesos usados, escala de tamanhos.
4. Espaços (escala de 4 ou 8 px), raio dos cantos, sombras (se houver).
5. Direção de arte das imagens: luz, fundo, enquadramento, materiais.
   Ela vai guiar a geração de imagens depois.
6. Um exemplo de botão principal e de cartão descritos em palavras.

Depois que eu escolher:
- src/styles/tokens.css com variáveis CSS em :root
  (ex.: --cor-fundo, --cor-destaque, --fonte-titulo, --espaco-4).
- @font-face com font-display: swap apontando para public/fonts
  (ou, se usar @fontsource, o import do pacote no src/main.js).
- docs/identidade.md com as decisões e as razões de contraste.
- estilo.html: página de conferência (só para o npm run dev) mostrando
  cores, títulos, parágrafo, botão, link e cartão usando os tokens.

RESULTADO ESPERADO
Duas direções para eu escolher; depois, os três arquivos criados e o endereço
do estilo.html no servidor local.

CRITÉRIOS DE ACEITAÇÃO
- Todos os pares texto/fundo passam no contraste informado, com a conta mostrada.
- Nenhuma cor ou fonte usada fora de tokens.css.
- estilo.html abre no npm run dev sem erro no console e com as fontes carregadas.

COMO VALIDAR
- Mostre a tabela de contraste.
- Diga como eu confiro no DevTools se a fonte carregou (aba Network, filtro Font).
- Rode npm run build e mostre o fim da saída.
```

## Versão curta (para o slide)

```text
Crie a identidade de [NOME_DA_MARCA]: estilo [ESTILO_VISUAL], paleta [PALETA_DE_CORES]. Proponha 2 direções (cores com hex e papel, 2 fontes com licença, espaços, direção de arte das imagens) e espere eu escolher. Depois: src/styles/tokens.css, estilo.html para conferir. Contraste AA calculado, fontes locais, sem clichês de IA.
```

## Resultado esperado e validação

O que deve aparecer:

1. Duas direções lado a lado, em texto. Escolha uma ou misture ("A, mas com o destaque da B").
2. `src/styles/tokens.css`, por exemplo:

```css
:root {
  --cor-fundo: #0e0e10;
  --cor-texto: #ece8e1;
  --cor-destaque: #b87333;
  --fonte-titulo: "Nome da Fonte", system-ui, sans-serif;
  --espaco-4: 1rem;
}
```

3. `docs/identidade.md` e `estilo.html`.

Como conferir:

- Rode `npm run dev` e abra `estilo.html` no endereço que aparecer (ex.: `http://localhost:5173/<base>/estilo.html`). O `estilo.html` serve só para conferir: o build padrão do Vite publica apenas o `index.html`.
- F12 › Network › filtro **Font**: as fontes devem vir do seu servidor local, não de outro site.
- Confira o contraste no DevTools: inspecione um texto e veja a razão de contraste no seletor de cor.
- Mostre no projetor ou numa tela ruim: fundo muito escuro e degradês escuros "embarram" com pouco brilho.

## Quando adaptar

- **Marca que já existe:** não invente identidade. Dê o manual de marca ao Claude (arquivo no projeto ou pelo Google Drive) e peça só para converter em tokens. As decisões já estão tomadas.
- **Restaurante e cafeteria:** a comida é a estrela. Cores quentes, fundo que não brigue com as fotos e cardápio muito legível (preço alinhado, fonte de texto grande) valem mais que uma fonte de título ousada.
- **Turismo:** as fotos dominam a página, então a paleta pode sair delas. Peça ao Claude para propor cores a partir de 3 fotos do destino.
- **Portfólio:** identidade discreta. O trabalho é o protagonista; a marca pessoal aparece na tipografia e no tom do texto.
- **Público mais velho ou com baixa visão:** texto-base maior, contraste acima do mínimo e botões grandes entram como regra, não como ajuste.
- **Modo escuro e claro:** se o site tiver os dois, defina os tokens para os dois desde já (um bloco para cada tema). Adaptar depois dá o dobro de trabalho.

## Problemas comuns

- **Ficou com "cara de IA" (degradê roxo, vidro, ícones de emoji)** → mostre referências concretas e repita a lista do que é proibido. Peça "mais contido, menos efeitos".
- **Contraste reprovado** → peça para ajustar só os tokens (clarear o texto ou escurecer o fundo) e recalcular. Não aceite "fica bom no meu monitor".
- **O Claude colou um link do Google Fonts no HTML** → peça para baixar os `.woff2` (com sua licença), colocar em `public/fonts` e usar `@font-face`, ou para instalar o pacote `@fontsource` da fonte pelo npm. Link externo quebra sem internet.
- **A paleta lembra demais uma marca famosa** → peça outra cor de destaque. Em marca fictícia, parecer cópia confunde e pode dar problema.
