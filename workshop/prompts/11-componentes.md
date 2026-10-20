# 11 · Componentes

> Transformar as partes que se repetem (botão, cartão, menu, perguntas frequentes) em componentes: peças de Lego com um formato fixo, que você encaixa em vários lugares e altera num lugar só.
>
> Ao vivo no workshop: não. Faça em casa ou se sobrar tempo depois da landing page.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Sonnet 5.5 (ou Opus 5.5) | medium | Accept edits | frontend-design (anthropics/skills, Apache 2.0) | nenhum |

Por quê:

- **Sonnet 5.5 ou Opus 5.5, medium:** é construção e reorganização de código que já existe, com regras claras. Não pede raciocínio longo.
- **Accept edits:** a mudança mexe em vários arquivos de uma vez. Você revisa tudo no fim com `/diff`, em vez de aprovar arquivo por arquivo.
- **frontend-design:** ajuda a manter os estados visuais (hover, foco, desabilitado) coerentes com a identidade.

O que é componente em JavaScript puro (sem React): uma função que recebe dados e devolve o HTML pronto, com o próprio CSS e, se precisar, o próprio comportamento.

Aqui o foco é reaproveitar. O comportamento em detalhe de menu, acordeão e formulário (teclado, foco, estados) está na etapa 14 · Interações.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [FUNCIONALIDADES] | botão; cartão de recurso; lista de especificações; menu; chamada final | botão; cartão de destino; dia do roteiro; perguntas frequentes; menu; botão de WhatsApp |
| [ESTILO_VISUAL] | escuro, técnico, cantos pouco arredondados | claro, editorial, fotos grandes nos cartões |
| [CRITÉRIOS_DE_ACEITAÇÃO] | build sem erro; console limpo; menu abre e fecha pelo teclado; nenhum componente quebra com texto longo | build sem erro; console limpo; perguntas frequentes abrem pelo teclado; cartão sem foto não quebra |

## Prompt (copiar e colar)

```text
CONTEXTO
Site de [NOME_DA_MARCA], já construído (Vite + JavaScript puro).
Leia CLAUDE.md, index.html, src/ e docs/identidade.md (se existir).
Partes que imagino como componentes: [FUNCIONALIDADES].
Estilo: [ESTILO_VISUAL].

OBJETIVO
Encontrar o que se repete na página e transformar em componentes reutilizáveis,
sem mudar a aparência do site.

RESTRIÇÕES
- Antes de mexer, liste os componentes que você propõe, com os dados que
  cada um recebe (ex.: cartão: título, texto, imagem, alt, link), e espere meu OK.
- Sem framework e sem biblioteca nova. JavaScript puro e CSS.
- O conteúdo principal (h1, textos de venda, botão principal) continua escrito
  no index.html. Só listas repetidas (cartões, roteiro, perguntas) podem vir
  de um arquivo de dados.
- Texto vindo de dados entra com textContent ou com escape, nunca montando
  innerHTML com texto sem tratamento.
- Use elementos nativos sempre que existirem: <button> para ações,
  <a> para navegação, <details>/<summary> para perguntas frequentes.
- Não mude cores nem fontes: use os tokens.
- Não faça commit.

FERRAMENTAS PERMITIDAS
- Ler e editar arquivos desta pasta.
- Rodar npm run dev e npm run build.
- Ferramenta de navegador, se você tiver, para conferir a página e o console.

REQUISITOS TÉCNICOS
- src/components/<nome>.js: cada arquivo exporta uma função que recebe um
  objeto de dados e devolve um elemento (ou HTML seguro).
- src/data/<lista>.js: os dados das listas repetidas.
- src/styles/components.css: estilos dos componentes, com classes de nome claro
  (ex.: .card, .card__titulo).
- Menu do celular: <button> com aria-expanded e aria-controls; fecha com Esc;
  o foco volta para o botão ao fechar.
- Cada componente tem estados: normal, hover, foco, desabilitado (se fizer
  sentido), texto muito longo e dado ausente (ex.: cartão sem imagem).
- componentes.html: página de catálogo (só para o npm run dev) mostrando cada
  componente em todos os estados, inclusive com texto longo e sem imagem.

RESULTADO ESPERADO
A lista proposta para eu aprovar; depois, os componentes criados, a página
usando os componentes e o catálogo componentes.html.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- A página principal fica visualmente igual a antes (compare em 375 px e 1280 px).
- Nenhum trecho de HTML repetido para a mesma peça.
- Mudar um item em src/data/ muda a página sem tocar no HTML.

COMO VALIDAR
- Rode npm run build e mostre o fim da saída.
- Me dê os endereços da página e do catálogo no npm run dev.
- Liste o que eu devo testar com o teclado (Tab, Enter, Esc).
```

## Versão curta (para o slide)

```text
Encontre o que se repete no site de [NOME_DA_MARCA] e transforme em componentes (JavaScript puro): [FUNCIONALIDADES]. Liste antes os dados de cada um e espere meu OK. Listas vêm de src/data/, textos com textContent, elementos nativos (button, details). Crie componentes.html com estados (foco, texto longo, sem imagem). Visual igual ao de antes. Rode npm run build.
```

## Resultado esperado e validação

Árvore depois desta etapa:

```text
src/
├── components/
│   ├── botao.js
│   ├── cartao.js
│   └── menu.js
├── data/
│   └── destinos.js
└── styles/
    └── components.css
componentes.html        (catálogo, só para o npm run dev)
```

A ideia de um componente, em poucas linhas:

```js
// src/components/cartao.js
export function cartao({ titulo, texto, imagem, alt }) {
  const el = document.createElement("article");
  el.className = "card";
  if (imagem) {
    const img = document.createElement("img");
    img.src = imagem;
    img.alt = alt ?? "";
    img.loading = "lazy";
    el.append(img);
  }
  const h3 = document.createElement("h3");
  h3.className = "card__titulo";
  h3.textContent = titulo;
  const p = document.createElement("p");
  p.textContent = texto;
  el.append(h3, p);
  return el;
}
```

Como conferir:

- Compare a página antes e depois em 375 px e 1280 px. Tem de estar igual.
- Abra `componentes.html` no `npm run dev`: cada estado aparece? O cartão com texto enorme quebra a linha sem estourar?
- Teclado: `Tab` até o menu, `Enter` abre, `Esc` fecha e o foco volta para o botão.
- Mude um título em `src/data/` e salve: a página atualiza sozinha no `npm run dev`.
- `/diff`: nenhuma dependência nova.

## Quando adaptar

- **Restaurante:** o componente central é o item do cardápio (nome, descrição, preço, selo de vegano ou picante). O preço deve vir do arquivo de dados, com formatação de moeda feita num lugar só.
- **Loja ou catálogo grande:** se a lista tem centenas de itens ou muda todo dia, ela deve vir de um servidor ou de uma plataforma, não de um arquivo no projeto.
- **Formulário de contato:** site estático não recebe envio. As opções são link de WhatsApp ou e-mail, um serviço externo de formulários ou um backend próprio. As duas últimas coletam dado pessoal: precisam de aviso de privacidade (LGPD).
- **Site que precisa aparecer bem no Google:** mantenha os textos importantes no HTML. Conteúdo montado só por JavaScript pode demorar mais para ser lido por buscadores.
- **Equipe usando React ou outro framework:** a lógica é a mesma (dados entram, interface sai). Muda só a sintaxe.
- **Poucas repetições:** se uma peça aparece uma vez só, não vire componente. Componente sem repetição só adiciona arquivo.

## Problemas comuns

- **O visual mudou depois da refatoração** → peça para comparar com a versão anterior (`/diff` ou o git) e restaurar as classes e os tokens originais.
- **O menu abre mas não fecha pelo teclado, ou o leitor de tela não entende** → confira `aria-expanded` mudando entre `true` e `false`, o `Esc` e a volta do foco.
- **Texto com acento ou símbolo aparece estranho (ex.: `&amp;`)** → é dupla conversão de texto. Use `textContent` e não monte HTML com texto de dados.
- **A página ficou em branco** → erro de JavaScript. F12 › Console mostra arquivo e linha; copie a mensagem inteira para o Claude.
