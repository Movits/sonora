---
name: revisar-textos
description: Revisa os textos visíveis do site em português (ortografia, gramática, acentuação, clareza, tom da marca, tamanho de títulos e botões, textos alternativos das imagens) e devolve uma tabela por seção com o texto atual, o problema e a sugestão. Só propõe; edita apenas os itens que a pessoa aprovar. Use quando pedirem /revisar-textos ou "revisa os textos", "tem erro de português no site?", "melhora a escrita da página", "o texto tá bom?".
---

# Revisar os textos

Leia o site como um revisor de texto que conhece a marca: aponte o que está errado, o que está confuso e o que
foge do tom, com sugestão pronta para copiar.

**Primeiro só leitura.** Não edite nada até a pessoa aprovar itens. Depois, mude só o texto aprovado: nada de
mexer em estrutura, classe, estilo ou animação.
Por quê: texto é a voz da marca. Quem decide a voz é a pessoa, não a revisão.

## Passo a passo

**1. Conhecer o tom.** Leia `CLAUDE.md` e `docs/brief.md` (se existirem): público, "você" ou "vocês", palavras
proibidas, nível de formalidade.

**2. Juntar os textos visíveis.** Em `index.html` e `src/sections/`: títulos, parágrafos, botões, legendas,
mensagens de formulário, `alt` das imagens, `<title>` e `<meta name="description">`.

**3. Revisar com estes critérios**, nesta ordem:

| Tipo | O que procurar | Marca |
|---|---|---|
| Erro | ortografia, acentuação, crase, concordância, pontuação | [erro] |
| Clareza | frase com mais de 25 palavras, jargão sem explicação, duplo sentido | [clareza] |
| Tom | palavra proibida pelo projeto, mudança de "você" para "vocês", exagero | [tom] |
| Tamanho | título com mais de 8 palavras, botão com mais de 4 | [tamanho] |
| Consistência | a mesma coisa com nomes diferentes (ex.: "lista de espera" e "pré-cadastro") | [consistência] |
| Acessibilidade | imagem com informação e `alt` vazio, `alt` que repete a legenda, botão sem texto | [acessibilidade] |

Por quê da ordem: erro é fato e sempre entra; tom e tamanho são escolha e podem ser recusados.

**4. Limites.** No máximo 12 itens, erros primeiro. Não mude nome da marca, preço, data nem dado técnico: se
parecer errado, pergunte. Sugestão sempre com o texto inteiro pronto, não "melhore esta frase".
Em "Texto atual", copie o trecho exato do arquivo, inteiro e sem "…": é ele que vai ser trocado. Não use posição na
tela ("ao lado", "abaixo") na sugestão: no celular a ordem muda. Não diga que um texto repete outro sem citar os dois.

## Formato da resposta

```markdown
## Revisão de textos: <projeto> (<data>)

| # | Seção | Texto atual | Problema | Sugestão | Tipo |
|---|---|---|---|---|---|
| 1 | hero | "..." | ... | "..." | [erro] |

**Está bom e deve ficar:** <2 ou 3 textos que funcionam, e por quê>

Quais itens eu aplico? (ex.: "1, 2 e 5")
```

Pare aí. Quando a pessoa aprovar, aplique só os itens escolhidos, um por vez, e rode `npm run build` no fim
(o comando sozinho, sem pipe nem variável, para o pedido de licença ficar legível) para conferir que nada quebrou. Diga em uma linha onde ver cada mudança no navegador.
