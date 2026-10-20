# 10 · Landing page

> Construir a página principal do site: estrutura, textos, visual e versão para celular, testada no navegador. A animação fica para a etapa 12; aqui a seção dela já existe, mas em versão estática.
>
> Ao vivo no workshop: sim (slide P5, 10 min). O Roberto constrói a landing do Projeto B e quem tem notebook adapta para a própria ideia.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Sonnet 5.5 na aula (Opus 5.5 em casa, se quiser) | medium | Accept edits | frontend-design (anthropics/skills, Apache 2.0) | nenhum |

Por quê:

- **Sonnet 5.5 ou Opus 5.5, medium:** construção com plano aprovado. O Opus acerta mais na primeira tentativa; o Sonnet 5.5 custa metade (na API) e dá conta de uma landing page. No workshop, para não esgotar o limite de uso do plano no meio da aula, o Sonnet é a escolha segura.
- **Effort medium:** o raciocínio pesado já foi feito no plano. Medium deixa a construção mais rápida.
- **Accept edits:** o Claude cria e edita arquivos sem pedir a cada um, mas ainda pede licença para comandos (como `npm run build`). Você acompanha pelo diff.
- **frontend-design:** ajuda a fugir do visual "padrão de IA". Confira com `/skills` se está instalada.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [SEGMENTO] | áudio premium | turismo de natureza |
| [PRODUTO_OU_SERVIÇO] | headphone over-ear sem fio, com cancelamento de ruído | roteiros de 7 a 10 dias em grupos de até 12 pessoas |
| [PÚBLICO_ALVO] | adultos de 25 a 40 anos que valorizam design e engenharia | adultos de 28 a 45 anos que querem natureza com conforto |
| [OBJETIVO_DO_SITE] | entrar na lista de espera (demonstrativa, sem coletar dados) | pedir orçamento pelo WhatsApp |
| [ESTILO_VISUAL] | escuro, técnico e cinematográfico; muito espaço vazio | claro, editorial e fotográfico; calmo |
| [PALETA_DE_CORES] | grafite quase preto, cobre polido, cinza quente claro | areia, verde-musgo, azul-profundo, laranja só no botão |
| [ANIMAÇÃO_DESEJADA] | exploded view no scroll (por enquanto, imagem estática do fone explodido) | rota que se desenha no mapa (por enquanto, o mapa com a rota completa) |
| [FUNCIONALIDADES] | hero; exploded view; Engenharia; especificações; chamada final | hero; destinos em cards; roteiro dia a dia; mapa da rota; perguntas frequentes; chamada final |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 com ScrollTrigger (npm), fontes locais | Vite + JavaScript puro + GSAP pelo npm |
| [CRITÉRIOS_DE_ACEITAÇÃO] | build sem erro; console limpo; sem rolagem horizontal em 375 px; um único h1 | build sem erro; console limpo; botão de orçamento na primeira tela do celular; fotos com texto alternativo |

## Prompt (copiar e colar)

```text
CONTEXTO
Projeto: site de [NOME_DA_MARCA] ([SEGMENTO]), que oferece [PRODUTO_OU_SERVIÇO]
para [PÚBLICO_ALVO]. Ação principal: [OBJETIVO_DO_SITE].
Stack: [STACK]. As dependências já estão instaladas.
Leia antes: CLAUDE.md, docs/brief.md, docs/plano.md, docs/identidade.md
e docs/ux.md (os que existirem).
Estilo: [ESTILO_VISUAL]. Paleta: [PALETA_DE_CORES].

OBJETIVO
Construir a landing page completa (estrutura, textos, visual e responsivo)
com as seções: [FUNCIONALIDADES].
A seção de [ANIMAÇÃO_DESEJADA] deve ficar pronta para receber a animação
depois: por enquanto, mostre a versão estática dela.

RESTRIÇÕES
- Use só o que está no package.json. Não instale nada e não use CDN.
  Se achar que precisa de uma biblioteca, pare e me pergunte.
- Não invente bibliotecas, funções ou propriedades. Se não tiver certeza
  de que algo existe, confira na documentação oficial ou não use.
- HTML semântico: header, nav, main, section (com id e aria-labelledby),
  footer. Um único h1 e títulos em ordem (h2, h3...).
- Textos reais em português, no tom do brief. Nada de lorem ipsum.
  Depoimentos, números e prêmios só se eu fornecer; senão, marque como "exemplo".
- CSS mobile-first, usando as variáveis de src/styles/tokens.css.
  Se o arquivo não existir, crie a partir da paleta.
- Imagens que ainda não existem: bloco reservado com aspect-ratio e a
  legenda "imagem: <descrição>". Nunca use imagem de site de terceiros.
- O botão principal precisa funcionar (link real ou âncora).
- Ainda sem animação de scroll. Só transições leves de hover e foco.
- Não faça commit.

FERRAMENTAS PERMITIDAS
- Ler e editar arquivos só dentro desta pasta.
- Rodar npm run dev, npm run build e npm run preview.
- Ferramenta de navegador, se você tiver, para abrir a página e ler o console.
- Documentação oficial (developer.mozilla.org, vite.dev).

REQUISITOS TÉCNICOS
- index.html com lang="pt-BR", meta viewport, title e meta description.
- Seções na ordem de docs/ux.md (ou do plano).
- JavaScript só onde precisa (ex.: menu do celular), em src/sections/<secao>.js
  com uma função init() chamada pelo src/main.js.
- Foco visível em links e botões; área de toque de pelo menos 44 × 44 px.
- Imagens com width, height e alt (alt="" se for decorativa).
- Trabalhe em 4 passos e rode npm run build no fim de cada um:
  1) estrutura HTML; 2) estilos base e tipografia; 3) cada seção; 4) celular e desktop.

RESULTADO ESPERADO
- A página rodando no npm run dev, com o endereço informado.
- Resumo: arquivos criados ou alterados e o que ainda é provisório.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- npm run build termina sem erro.
- Console do navegador sem erros vermelhos.
- Sem rolagem horizontal de 320 px a 1920 px de largura.
- Com Tab, dá para chegar ao botão principal e o foco aparece.

COMO VALIDAR
- Mostre o final da saída do npm run build. Não diga que terminou sem ela.
- Inicie o npm run dev e me diga o endereço.
- Se tiver ferramenta de navegador: abra em 375 px e em 1280 px, leia o console
  e me conte o que viu. Se não tiver: liste exatamente o que eu devo conferir.
```

## Versão curta (para o slide)

```text
Construa a landing page de [NOME_DA_MARCA] com [STACK], seguindo docs/plano.md: seções [FUNCIONALIDADES], estilo [ESTILO_VISUAL], paleta [PALETA_DE_CORES]. HTML semântico, CSS mobile-first com tokens, textos reais em português, botão para [OBJETIVO_DO_SITE]. Sem bibliotecas novas, sem CDN, sem animação ainda. Rode npm run build e confira o console.
```

## Resultado esperado e validação

O que deve aparecer:

- `index.html`, `src/styles/*.css` e talvez `src/sections/*.js` criados ou alterados.
- A saída do `npm run build` terminando sem erro e o endereço do servidor local.

Como conferir (5 minutos):

| O que fazer | O que esperar |
|---|---|
| `npm run dev` e abrir o endereço (padrão do Vite: `http://localhost:5173`, mais o `base`, se houver) | a página abre com todas as seções |
| F12 › aba **Console** | nenhum erro vermelho |
| F12 › ícone de celular (`Ctrl+Shift+M`) › largura 375 | nada sai da tela; sem barra de rolagem horizontal |
| Navegar só com `Tab` e `Enter` | o foco aparece e chega ao botão principal |
| Clicar no botão principal | abre o WhatsApp, a lista de espera ou a âncora certa |
| `npm run build` e depois `npm run preview` (padrão: `http://localhost:4173`) | a versão de produção abre igual à de desenvolvimento |
| `/diff` no Claude | só mudaram os arquivos esperados; `package.json` sem dependência nova |

## Quando adaptar

- **Restaurante:** o cardápio deve sair de um arquivo de dados (ex.: `src/data/cardapio.js`), para mudar preço sem mexer no layout. Para o endereço, um link para o app de mapas é mais leve e mais privado que um mapa embutido (o mapa embutido carrega o serviço de terceiros em toda visita).
- **Loja virtual real:** a landing pode ser a vitrine, mas carrinho e pagamento ficam numa plataforma de loja ou num backend. Não simule checkout numa página estática.
- **Portfólio:** a landing vira uma grade de projetos e cada projeto ganha uma página própria (site de várias páginas; veja a etapa 05).
- **Evento ou curso:** data, local, programação e inscrição. Inscrição que guarda dados precisa de serviço externo ou backend, e de aviso de privacidade (LGPD).
- **Negócio local que depende de busca:** inclua nome, endereço e telefone em texto (não em imagem) e peça ao Claude os dados estruturados de negócio local (schema.org).
- **Site em dois idiomas:** decida agora se serão duas páginas ou troca de idioma por JavaScript. A estrutura muda.

## Problemas comuns

- **Apareceu React, Tailwind ou uma tag `<script>` de CDN** → peça para desfazer ("use só o package.json, sem CDN") ou use `/rewind` (no app desktop, conferir se aparece; o git também desfaz). Confira o `package.json` depois.
- **Ficou genérico, com cara de template** → aponte para `docs/identidade.md` e para as referências, e peça duas alternativas só para o hero. Escolha uma antes de seguir.
- **Rolagem horizontal no celular** → peça "ache o elemento mais largo que a tela em 375 px e corrija". Culpados comuns: `width: 100vw`, imagem sem `max-width: 100%`, palavra muito longa sem quebra.
- **O Claude diz "pronto" sem testar** → responda "mostre a saída do npm run build e o que aparece no console". Prova antes de afirmação.

## Exemplo ruim × bom

**Ruim:**

```text
Cria uma landing page moderna e bonita para minha hamburgueria, com animações incríveis.
```

**Bom:**

```text
Construa a landing page da Brasa Rasa com Vite + JavaScript puro, seguindo docs/plano.md: seções hero, cardápio, como pedir, horário e endereço, chamada final. Estilo: rústico e quente, fotos grandes. Paleta: carvão, mostarda, creme. HTML semântico, CSS mobile-first com tokens, textos reais em português, botão para pedir pelo WhatsApp. Sem bibliotecas novas, sem CDN, sem animação ainda. Rode npm run build e confira o console.
```

Por que o bom funciona melhor:

- **"Moderna", "bonita" e "incríveis" não dão para conferir.** O bom troca adjetivos por decisões: seções, estilo, paleta e ação principal.
- **Sem stack, o Claude escolhe por você** (às vezes React, Tailwind ou CDN). O bom fixa a stack e proíbe dependência nova.
- **"Com animações incríveis" mistura duas etapas.** Construir e animar ao mesmo tempo dobra a chance de erro. O bom deixa a animação para depois.
- **O bom exige prova:** build e console. Você não depende de "confia, está pronto".
- **O bom aponta para o plano**, então o resultado segue o que você já aprovou.
