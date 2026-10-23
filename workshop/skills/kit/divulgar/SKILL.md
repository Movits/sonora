---
name: divulgar
description: Escreve textos de divulgação do site a partir do que está de fato na página (index.html, seções e docs/brief.md) - um post para Instagram, um para LinkedIn e uma mensagem de WhatsApp, com sugestão de imagem e texto alternativo - e salva tudo em docs/divulgacao.md. Use quando pedirem /divulgar ou "escreve um post do site", "divulga a página", "texto para o Instagram", "mensagem para mandar no WhatsApp", mesmo sem citar a skill. Não inventa preço, data nem número; não publica nada em rede social.
---

# Divulgar o site

Escreva a divulgação como quem trabalha na marca: só promete o que o site mostra, no tom que o projeto
combinou, e deixa claro o que ainda falta confirmar.

**O que esta skill pode mudar:** só o arquivo `docs/divulgacao.md`. Não edite o site, não instale nada, não
rode git e não publique em rede social nenhuma.
Por quê: divulgar é escrever. Publicar e mexer no site são decisões da pessoa, em outro momento.

## Passo a passo

**1. Ler o que o site diz.** Leia `CLAUDE.md`, `docs/brief.md` (se existir), `index.html` e os arquivos de
`src/sections/`. Anote: nome da marca, o que é, para quem, a ação principal (o botão) e as regras de tom
(palavras proibidas, "você" ou "vocês", formal ou leve).
Por quê: post que promete o que a página não tem frustra quem clica e queima a marca.

**2. Achar o endereço.** Procure o link publicado no `README.md` ou no `CLAUDE.md`. Se não achar, monte
pelo `base` do `vite.config.js` e pelo remoto do git (`git remote get-url origin`, só leitura):
`https://<usuário>.github.io/<repositório>/`. Se não der, escreva `[link do site]`.

**3. Escolher uma mensagem central.** Uma frase que resume por que alguém deveria abrir o site. Todos os
textos giram em torno dela.
Por quê: três textos com três promessas diferentes confundem.

**4. Escrever os três textos.**

| Canal | Tamanho | Forma |
|---|---|---|
| Instagram | até 120 palavras | 1ª linha forte (é o que aparece antes do "mais"), parágrafos curtos, chamada "link na bio", 3 a 5 hashtags no fim |
| LinkedIn | até 120 palavras | tom profissional, o problema que o site resolve, uma pergunta no fim, o link |
| WhatsApp | até 50 palavras | direto, como quem manda para um amigo, o link no fim |

Regras dos três:
- Siga o tom do `CLAUDE.md` e do brief. Palavra proibida lá é proibida aqui.
- Nada de número, preço, data, prêmio ou depoimento que não esteja escrito no site. O que faltar vira
  `[a confirmar]`.
- Se o site disser que a marca é fictícia ou que a ação é demonstrativa, o texto também diz.
- No máximo 2 emojis por texto, e nenhum no lugar de palavra.

**5. Sugerir a imagem.** Escolha uma imagem de `public/img/` que combine com a mensagem, diga o caminho e
escreva o texto alternativo (o que a imagem mostra, em até 125 caracteres).
Por quê: post com imagem certa chama mais atenção, e o texto alternativo é o que o leitor de tela fala.

**6. Conferir os fatos.** Faça a lista de cada afirmação dos textos e de onde ela veio (`arquivo:linha`).
Afirmação sem origem: tire do texto ou marque `[a confirmar]`.

**7. Salvar.** Escreva em `docs/divulgacao.md`. Se o arquivo já existir, acrescente uma seção nova com a
data no título (não apague as anteriores).

## Formato da resposta

```markdown
## Divulgação: <marca> (<data>)
Mensagem central: <uma frase>
Link: <endereço ou [link do site]>

### Instagram
<texto>

### LinkedIn
<texto>

### WhatsApp
<texto>

### Imagem sugerida
public/img/<arquivo> · texto alternativo: "<...>"

### De onde veio cada afirmação
| Afirmação | Origem |
|---|---|
| ... | index.html:42 |

Salvo em docs/divulgacao.md. Quer outra versão (mais curta, mais formal, outro público)?
```
