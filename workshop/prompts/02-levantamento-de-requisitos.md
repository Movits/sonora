# 02 · Levantamento de requisitos

> Transformar o brief numa lista do que o site precisa fazer, com prioridade e com um jeito de testar cada item. É a "lista de compras" que impede o projeto de crescer sem controle.
>
> Ao vivo no workshop: material de apoio do P1. Se der tempo, a versão curta gera o `docs/requisitos.md` do Projeto B logo depois do brief; se atrasar, fica de fora. No seu projeto, faça a versão completa em casa.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Sonnet 5.5 | medium | Manual (ou Plan) | nenhuma | nenhum (Notion opcional, para virar cartões depois) |

Por quê:

- **Sonnet 5.5, medium:** é trabalho de organizar e escrever, ainda sem arquitetura. Sai rápido e barato.
- **Suba para Opus 5.5, high** se o projeto tiver regra de negócio complicada (login, pagamento, agenda, estoque). Aí um requisito errado custa caro depois.
- **Manual:** o Claude só cria o arquivo depois que você aprova. Você lê a lista antes de ela virar plano.
- **Notion (opcional):** cada requisito "Precisa" pode virar um cartão do quadro. Faça isso depois de aprovar a lista, não antes.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [PÚBLICO_ALVO] | adultos de 25 a 40 anos que trabalham com foco ou viajam muito | adultos de 28 a 45 anos que querem natureza com conforto |
| [OBJETIVO_DO_SITE] | levar à lista de espera (demonstrativa, sem coletar dados) | levar a pedir orçamento pelo WhatsApp |
| [FUNCIONALIDADES] | hero com o produto; exploded view; seção Engenharia; especificações; chamada final para a lista de espera | destinos em cards; roteiro dia a dia; mapa da rota; perguntas frequentes; botão de orçamento pelo WhatsApp |
| [ANIMAÇÃO_DESEJADA] | o fone se desmonta conforme o scroll; blueprint em SVG que se desenha | linha da rota que se desenha no mapa conforme o scroll |
| [CRITÉRIOS_DE_ACEITAÇÃO] | `npm run build` sem erro; console sem erros; exploded view acompanha o scroll nos dois sentidos; com reduced-motion aparece a composição estática; sem rolagem horizontal em 375 px | `npm run build` sem erro; console sem erros; botão de orçamento visível na primeira tela do celular; todas as fotos com texto alternativo; sem rolagem horizontal em 375 px |

## Prompt (copiar e colar)

```text
CONTEXTO
Projeto: site de [NOME_DA_MARCA]. Leia docs/brief.md antes de começar.
Público: [PÚBLICO_ALVO]. Objetivo do site: [OBJETIVO_DO_SITE].
Funcionalidades que imagino: [FUNCIONALIDADES].
Animação que imagino: [ANIMAÇÃO_DESEJADA].
Critérios que já sei que quero: [CRITÉRIOS_DE_ACEITAÇÃO].
Sou iniciante. Explique termos técnicos em uma linha.

OBJETIVO
Escrever docs/requisitos.md: o que o site precisa fazer, em que ordem de importância,
e como testar cada item.

RESTRIÇÕES
- Não escreva código e não escolha bibliotecas agora.
- Cada requisito tem de ser testável: alguém consegue dizer "passou" ou "não passou".
  Proibido "bonito", "moderno", "rápido" sem um jeito de medir.
- Priorize com quatro níveis: Precisa, Deveria, Poderia, Fora (agora não).
  No máximo 6 itens em "Precisa".
- Se algum item exigir servidor (formulário que guarda dados, login, pagamento,
  área do cliente), marque [precisa de backend] e sugira uma alternativa
  para um site estático (ex.: link de WhatsApp, e-mail, serviço externo).
- Se o site coletar dado pessoal (nome, e-mail, telefone), escreva isso como requisito
  e marque [LGPD: confirmar].
- Não invente meta numérica sem explicar de onde veio; marque [proposta].

FERRAMENTAS PERMITIDAS
- Ler arquivos do projeto.
- Criar um único arquivo: docs/requisitos.md (peça licença).
- Nada de instalar pacotes ou rodar comandos.

REQUISITOS TÉCNICOS
- Markdown com tabelas. IDs: RF-01, RF-02... (funcionais) e RNF-01... (não funcionais).
- Critérios no formato "Dado / Quando / Então".

RESULTADO ESPERADO (docs/requisitos.md)
1. Escopo: o que está dentro e o que está fora desta versão.
2. Requisitos funcionais (tabela): ID, descrição, prioridade, critério de aceitação.
3. Requisitos não funcionais (tabela), cobrindo pelo menos:
   celular e desktop (375 px a 1920 px), acessibilidade (teclado, contraste,
   texto alternativo, prefers-reduced-motion), desempenho percebido,
   navegadores (Chrome, Edge, Safari, Firefox), funcionamento sem CDN.
4. Conteúdo necessário: textos, imagens, vídeo, ícones. Quem fornece e até quando.
5. Dependências externas (WhatsApp, mapa, formulário, analytics) e o risco de cada uma.
6. Riscos e perguntas em aberto.

CRITÉRIOS DE ACEITAÇÃO
- Todo item de [FUNCIONALIDADES] aparece em RF, com prioridade.
- Todo item de [CRITÉRIOS_DE_ACEITAÇÃO] aparece em RF ou RNF.
- Nenhum requisito "Precisa" depende de backend sem alternativa indicada.
- No máximo 6 itens em "Precisa".

COMO VALIDAR
- Mostre a tabela de "Precisa" primeiro e pergunte se concordo.
- Liste o que você deduziu sozinho (sem eu ter pedido), para eu aprovar ou cortar.
```

## Versão curta (para o slide)

```text
Leia docs/brief.md. Crie docs/requisitos.md com: escopo (dentro/fora), requisitos funcionais e não funcionais com ID, prioridade (Precisa/Deveria/Poderia/Fora, no máximo 6 "Precisa") e critério "Dado/Quando/Então". Funcionalidades: [FUNCIONALIDADES]. Critérios: [CRITÉRIOS_DE_ACEITAÇÃO]. Marque o que exige backend. Sem código.
```

## Resultado esperado e validação

O que deve aparecer:

- Uma tabela curta de "Precisa" para você aprovar, depois o arquivo `docs/requisitos.md`.
- Um exemplo de requisito bem escrito:

| ID | Requisito | Prioridade | Critério de aceitação |
|---|---|---|---|
| RF-03 | Botão principal leva ao WhatsApp com mensagem pronta | Precisa | Dado que estou no celular, quando toco em "Pedir orçamento", então o WhatsApp abre com o texto preenchido |
| RNF-02 | Respeitar prefers-reduced-motion | Precisa | Dado que o sistema pede menos movimento, quando rolo a página, então nenhum conteúdo depende da animação para aparecer |

Como conferir:

- Conte os itens "Precisa". Mais de 6: o projeto não cabe no tempo. Corte.
- Para cada linha, pergunte: "eu consigo testar isso em 1 minuto?". Se não, reescreva.
- Procure as marcas [precisa de backend] e [LGPD: confirmar]. Decida agora o que fazer com elas.

## Quando adaptar

- **Restaurante ou cafeteria:** cardápio (que muda de preço com frequência), horário, endereço com mapa e link de delivery viram "Precisa". Pense em quem atualiza o cardápio: se muda toda semana, ele deve sair de um arquivo de dados fácil de editar, não do HTML.
- **Loja virtual real:** carrinho, estoque, frete e pagamento são requisitos de backend. Para um site estático, a alternativa é catálogo + botão para uma plataforma de loja ou para o WhatsApp.
- **Agência de viagens ou serviço sob orçamento:** o requisito central é capturar o pedido. Formulário que guarda dados exige servidor ou serviço externo e envolve LGPD; um link de WhatsApp com texto pronto resolve no site estático.
- **Portfólio:** o requisito central é cada projeto ter problema, solução e resultado. A animação é "Poderia".
- **Site com muito vídeo ou animação pesada:** inclua requisito de celular com internet lenta (imagem estática no lugar do vídeo, por exemplo).
- **Site em mais de um idioma:** vira requisito desde o início. Adicionar depois obriga a refazer textos e estrutura.

## Problemas comuns

- **Vira uma lista de 40 itens** → peça "no máximo 6 em Precisa; o resto vai para Deveria, Poderia ou Fora".
- **Requisito vago ("site rápido e bonito")** → peça para reescrever com critério "Dado / Quando / Então".
- **O Claude já escolhe React, Tailwind ou um banco de dados** → lembre que stack é a etapa 04. Aqui só entra o "o quê", não o "como".
- **Esqueceu acessibilidade e celular** → cole de novo o item 3 do resultado esperado.
