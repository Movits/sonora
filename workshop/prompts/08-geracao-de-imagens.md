# 08 · Geração de imagens

> Planejar e gerar com IA as imagens do site (hero, detalhes, versão explodida) de forma que o produto pareça o mesmo em todas, na proporção certa e dentro de um orçamento de créditos.
>
> Ao vivo no workshop: sim (slide P5, cerca de 4 min), só como demonstração. O Roberto mostra as imagens do SONORA já geradas, os prompts usados e o kit pronto do tema da turma (viagens, hamburgueria ou relógio). Nada é gerado na aula: custa créditos e depende da fila do serviço.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code (planeja os prompts e organiza os arquivos) + Higgsfield, no site ou pelo conector (gera as imagens) | Claude: Sonnet 5.5 (Opus 5.5 se a direção de arte for complexa) · Imagem: GPT Image 2.5 ou Nano Banana Pro (no Higgsfield) | medium | Manual (Plan opcional para o plano e o orçamento) | nenhuma obrigatória | Higgsfield (opcional; cada geração gasta créditos) |

Por quê:

- **Sonnet 5.5, medium:** o Claude só escreve prompts curtos e organiza arquivos; quem "pinta" é o modelo de imagem. Suba para Opus 5.5 quando a direção de arte tiver muitas peças que precisam combinar (vários ângulos, cenas e detalhes do mesmo produto).
- **Plan (opcional) primeiro:** o Claude monta a lista de imagens e o custo total antes de gastar qualquer crédito.
- **Manual na hora de gerar:** cada chamada ao Higgsfield gasta créditos, então cada uma precisa da sua aprovação. Nunca use Auto nem Bypass com conector pago.
- **Conector opcional:** dá para fazer tudo copiando o prompt para o site do Higgsfield. O conector economiza cliques, mas exige atenção redobrada ao custo.

### Conceitos rápidos

| Conceito | O que é | Quando usar |
|---|---|---|
| Texto → imagem | você descreve e o modelo cria do zero | a imagem-mestra (a primeira e mais importante) |
| Imagem → imagem | você envia uma imagem de referência e uma instrução | variações da mestra: versão explodida, outro ângulo, detalhe |
| Consistência de produto | manter o mesmo objeto em todas as imagens | sempre. Três ferramentas: (1) imagem → imagem a partir da mestra; (2) "bloco de identidade" repetido igual em todo prompt; (3) **Elements** do Higgsfield: uma referência salva que entra no prompt como `<<<id>>>` (funciona em Nano Banana Pro e 2, GPT Image 2, Seedream, Seedance 2.0 e Kling 3.0; no Kling, exige imagem inicial) |
| Proporção (aspect ratio) | a relação largura × altura da imagem | gere já na proporção de uso. Os modelos aceitam de 1:1 até 21:9 |

| Uso no site | Proporção sugerida |
|---|---|
| Hero no desktop | 16:9 (ou 21:9 para faixa larga) |
| Hero no celular | 9:16 ou 4:5 |
| Cartão (produto, destino, prato) | 1:1 ou 4:5 |
| Detalhe dentro de texto | 3:2 ou 4:3 |

### Custo (Higgsfield, consultado em 19/10/2026)

| Modelo | Resolução | Créditos | Em dólar (crédito a US$ 0,033–0,059) |
|---|---|---|---|
| GPT Image 2.5 | 2K, qualidade medium | 1 | US$ 0,03–0,06 |
| GPT Image 2.5 | 4K, qualidade high | 4,25 | US$ 0,14–0,25 |
| Nano Banana Pro | 2K / 4K | 2 / 4 | US$ 0,07–0,12 / 0,13–0,24 |
| Nano Banana 2 | 2K | 2 | US$ 0,07–0,12 |

Preços mudam: confira na tela do Higgsfield antes de gerar. O tempo de espera depende da fila do serviço. Gere com antecedência, nunca na hora da apresentação.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [SEGMENTO] | áudio premium | turismo de natureza |
| [PRODUTO_OU_SERVIÇO] | headphone over-ear sem fio: arco de alumínio grafite, conchas ovais foscas, anel de cobre polido, almofadas de couro vegano | roteiros em grupos pequenos pela Patagônia, por Portugal e pelo Japão (os destinos do kit) |
| [ESTILO_VISUAL] | estúdio escuro, cinematográfico, produto flutuando, muito espaço vazio | fotografia editorial de natureza, luz de fim de tarde, pessoas pequenas na paisagem, de costas |
| [PALETA_DE_CORES] | grafite quase preto, cobre, cinza quente | areia, verde-musgo, azul-profundo, laranja de pôr do sol |
| [REFERÊNCIAS] | fotos de lançamento de produto premium (fundo preto, luz de recorte) | revistas de viagem impressas |

## Prompt (copiar e colar)

```text
CONTEXTO
Site de [NOME_DA_MARCA] ([SEGMENTO]). Produto ou serviço: [PRODUTO_OU_SERVIÇO].
Leia docs/plano.md (lista de ativos) e docs/identidade.md (direção de arte),
se existirem.
Estilo: [ESTILO_VISUAL]. Paleta: [PALETA_DE_CORES]. Referências: [REFERÊNCIAS].
Vou gerar as imagens no Higgsfield. Preços de referência, em créditos
(conferidos em 19/10/2026): GPT Image 2.5 a 2K medium = 1; a 4K high = 4,25;
Nano Banana Pro a 2K = 2, a 4K = 4. Um crédito custa de US$ 0,033 a 0,059.
Orçamento desta etapa: até 30 créditos, contando novas tentativas.

OBJETIVO
Planejar o conjunto de imagens do site e escrever os prompts, de modo que
o produto (ou o lugar) pareça o mesmo em todas as imagens.

RESTRIÇÕES
- Comece pela imagem-mestra (ex.: hero). As outras derivam dela por
  imagem → imagem, usando a mestra como referência.
- Escreva um "bloco de identidade" (descrição fixa: formato, materiais, cores,
  detalhes) e repita esse bloco IGUAL em todos os prompts.
- Nada de texto, logotipo, marca d'água ou marca real dentro da imagem.
  Texto vai no HTML.
- Nada de pessoa reconhecível e nada de foto pessoal como referência.
- Cada imagem já na proporção em que será usada, com espaço vazio onde
  o texto do site vai ficar.
- Se for um lugar, prato ou produto real que o cliente vende, avise:
  imagem gerada pode enganar quem compra. Nesse caso, sugira foto real.
- Não gere nada sozinho. Se tiver o conector Higgsfield, consulte o custo
  antes e peça minha aprovação para cada geração, uma por vez.

FERRAMENTAS PERMITIDAS
- Ler arquivos do projeto.
- Criar docs/imagens.md.
- Conector Higgsfield (se houver): consulta de custo e só as gerações que eu aprovar.
- Salvar os originais em _originais/img/ (fora de public/ e fora do git).

REQUISITOS TÉCNICOS
1. Tabela de imagens: nome do arquivo (minúsculas, sem acento), onde aparece,
   proporção, resolução, tipo (texto → imagem ou imagem → imagem, e qual
   a referência), modelo sugerido, custo estimado.
2. Prompt completo de cada imagem, em inglês, nesta ordem:
   assunto → bloco de identidade → enquadramento e ângulo → luz → fundo →
   acabamento (ex.: photorealistic, ultra detailed) → proibições
   (no text, no logos, no watermark).
3. Para as derivadas, comece com "the exact same [objeto] shown in the
   reference image: identical design, materials, colors, camera angle,
   lighting and background", e só então descreva o que muda.

RESULTADO ESPERADO
docs/imagens.md com: bloco de identidade, tabela, prompts, custo total
estimado (com 1 nova tentativa por imagem) e ordem de geração.

CRITÉRIOS DE ACEITAÇÃO
- Custo total estimado dentro do orçamento.
- O bloco de identidade aparece idêntico em todos os prompts.
- Toda imagem tem proporção ligada a um uso no site.

COMO VALIDAR
- Diga o que eu devo comparar entre as imagens geradas (formato, cor,
  detalhes, ângulo) para aprovar a consistência.
- Diga o que fazer se a imagem-mestra sair errada, antes de gerar as derivadas.
```

## Versão curta (para o slide)

```text
Planeje as imagens de [NOME_DA_MARCA] em docs/imagens.md: imagem-mestra primeiro, derivadas por imagem→imagem. Um "bloco de identidade" igual em todo prompt. Para cada imagem: arquivo, uso, proporção, modelo, custo. Prompts em inglês, sem texto nem logos, estilo [ESTILO_VISUAL]. Orçamento: 30 créditos. Não gere nada sem minha aprovação.
```

## Resultado esperado e validação

O que deve aparecer: `docs/imagens.md` com a tabela, os prompts e o custo total. Depois, as imagens geradas, salvas em `_originais/img/`.

Como o SONORA fez (para comparar com o seu):

| Imagem | Tipo | Modelo e ajustes | Ideia central do prompt |
|---|---|---|---|
| Hero (fone montado) | texto → imagem | GPT Image 2.5, 16:9, 2K, qualidade high | fone fictício, sem logos, flutuando em três quartos de frente, fundo quase preto, luz suave de cima à esquerda e recorte quente na silhueta, muito espaço vazio |
| Explodida | imagem → imagem (referência: o hero aprovado) | GPT Image 2.5, 16:9, 2K, qualidade high | "the exact same headphone shown in the reference image", mesmo ângulo, mesma luz, mesmo fundo; peças separadas com espaços iguais, alinhadas em eixos, rígidas, sem texto |

Repare na estrutura do prompt do hero: assunto → design (arco, conchas, anel de cobre, almofadas) → enquadramento → luz → acabamento → proibições.

Como conferir as imagens:

- Ponha a mestra e as derivadas lado a lado. Formato, cor e detalhes (ex.: o anel de cobre) estão iguais?
- Dê zoom nas bordas e nos detalhes pequenos. A IA costuma errar texto, mãos, simetria e peças pequenas.
- Coloque a imagem no lugar dela no site (mesmo que provisório) e veja se o texto cabe no espaço vazio.
- Anote em `docs/imagens.md` o prompt e o modelo da versão aprovada. Assim dá para refazer depois.

Direitos e privacidade: segundo a central de ajuda do Higgsfield, o resultado é seu e o uso comercial não é restringido. Por padrão, o serviço pode usar o conteúdo para treinar modelos, então não envie fotos pessoais nem rostos de colegas.

## Quando adaptar

- **Turismo real:** o cliente vai comparar com o lugar de verdade. Use fotos reais e licenciadas do destino; a IA serve para ilustração ou moodboard (painel de referências visuais), não para "provar" como o lugar é.
- **Restaurante:** foto de prato gerada pode mostrar algo que a cozinha não entrega. Fotografe os pratos de verdade; a IA pode ajudar com fundo ou composição (imagem → imagem a partir da foto real).
- **Produto físico que já existe:** a referência é a foto do produto real. A IA cria cenário e luz, mas sem mudar o produto.
- **Portfólio:** use capturas de tela reais dos seus projetos. Imagem gerada no lugar de trabalho real é propaganda enganosa.
- **Peças em camadas (para animar separado):** você vai precisar de fundo transparente. Alguns modelos têm opção de remover o fundo (conferir na interface) ou gere sobre fundo liso para recortar.
- **Ícones e ilustrações simples:** um SVG feito por código sai mais leve, mais nítido e de graça.

## Problemas comuns

- **O produto muda de uma imagem para outra** → gere as derivadas por imagem → imagem a partir da mestra aprovada, repita o bloco de identidade e, se possível, crie um Element no Higgsfield.
- **Aparecem letras tortas ou logotipos inventados** → reforce "no text, no logos, no watermark" e gere de novo. Não tente consertar texto na imagem: texto vai no HTML.
- **A imagem foi cortada no lugar errado no celular** → gere uma versão própria para o celular (9:16 ou 4:5) em vez de recortar a de 16:9.
- **Os créditos acabaram rápido** → aprove a composição numa versão barata (GPT Image 2.5 a 2K medium = 1 crédito) e só depois gere a versão final em qualidade maior.
