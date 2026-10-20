# 13 · Integração de ativos

> Levar imagens, quadros, vídeos e fontes para dentro do site do jeito certo: no formato e no tamanho certos, na pasta certa, com texto alternativo e sem quebrar depois de publicar. É a diferença entre "funciona no meu computador" e "funciona para todo mundo".
>
> Ao vivo no workshop: não como prática própria (material de apoio / para casa). No P6 (landing page), o kit de imagens do tema já vai para `public/img`; formatos, pesos, quadros e fontes ficam para casa.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Sonnet 5.5 (ou Opus 5.5) | medium | Accept edits (comandos do ffmpeg continuam pedindo licença) | nenhuma | nenhum (Google Drive opcional, se os originais estiverem lá) |

Por quê:

- **Sonnet 5.5 ou Opus 5.5, medium:** é construção com regras claras (converter, renomear, referenciar). O raciocínio pesado não está aqui.
- **Accept edits:** o Claude edita HTML, CSS e JS sem pedir a cada arquivo. Os comandos de conversão (ffmpeg) continuam pedindo licença, e é bom que peçam: eles criam e sobrescrevem arquivos.
- **Google Drive (opcional):** se as imagens aprovadas estiverem no Drive, o conector pode buscá-las. Baixe só o que você aprovou.

### Onde cada arquivo mora

| Pasta | O que vai | Como o código aponta para ele |
|---|---|---|
| `_originais/` (fora do git) | originais pesados: PNG de 4 MB, vídeo bruto | não aponta. É o seu cofre |
| `public/img/`, `public/frames/`, `public/video/` | arquivos servidos como estão (sequências numeradas, vídeos, imagens usadas no HTML) | no HTML e no CSS: `/img/hero.webp` (no build, o Vite acrescenta o `base` sozinho). No JS: `import.meta.env.BASE_URL + "img/hero.webp"` (ali o Vite não mexe) |
| `public/fonts/` | fontes `.woff2` | `@font-face` no CSS. Alternativa: um pacote `@fontsource/<fonte>` instalado pelo npm e importado no `main.js` (é o que o SONORA usa); o Vite empacota os arquivos no build |
| `src/assets/` | poucas imagens usadas por CSS ou JS | `import foto from "./assets/foto.webp"`: o Vite cuida do caminho e do cache |

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [ANIMAÇÃO_DESEJADA] | sequência de cerca de 120 quadros WebP em public/frames/desktop/ (e 60 em public/frames/mobile/) para o canvas fixado | rota em SVG no mapa (sem quadros); fotos dos destinos com parallax leve |
| [STACK] | Vite + JavaScript puro + GSAP, publicado no GitHub Pages em subcaminho (`/sonora/`) | Vite + JavaScript puro + GSAP, GitHub Pages |
| [CRITÉRIOS_DE_ACEITAÇÃO] | nenhum 404; pasta de quadros com menos de 15 MB; hero aparece rápido; build sem erro | nenhum 404; todas as fotos com texto alternativo; nenhuma foto acima de 400 KB; build sem erro |

## Prompt (copiar e colar)

```text
CONTEXTO
Site de [NOME_DA_MARCA]. Stack: [STACK].
Leia CLAUDE.md, docs/plano.md (lista de ativos), docs/imagens.md e docs/video.md,
se existirem.
Os originais aprovados estão em _originais/ (imagens e vídeos). Se não estiverem,
pergunte onde estão e copie para _originais/ (sem mover nem alterar a origem)
antes de começar.
Animação que usa ativos: [ANIMAÇÃO_DESEJADA].

OBJETIVO
Integrar os ativos ao site: converter, otimizar, colocar na pasta certa,
referenciar no código e registrar a origem de cada um.

RESTRIÇÕES
- Antes de converter, mostre uma tabela: arquivo de origem → arquivo de destino,
  formato, largura, peso estimado. Espere meu OK.
- Use o ffmpeg que já está instalado (confira com ffmpeg -version).
  Não instale sharp, imagemin nem outra ferramenta sem perguntar.
- Nunca altere nem apague os originais em _originais/.
- Nomes em minúsculas, sem acento e sem espaço (ex.: destino-patagonia.webp).
  O GitHub Pages diferencia maiúsculas de minúsculas; o Windows não.
- Nenhuma imagem de site de terceiros, nem link direto (hotlink) para ela.
- Caminhos de public/: no HTML e no CSS, absolutos ("/img/hero.webp"), que o
  Vite ajusta ao base no build. No JavaScript, sempre com
  import.meta.env.BASE_URL ("/img/..." escrito no JS ignora o subcaminho
  do GitHub Pages).
- Não faça commit.

FERRAMENTAS PERMITIDAS
- Ler e editar arquivos desta pasta; criar pastas em public/.
- Rodar ffprobe, ffmpeg, npm run dev, npm run build e npm run preview.
- Ferramenta de navegador, se você tiver, para conferir 404 e console.

REQUISITOS TÉCNICOS
- Imagens: WebP. Hero com duas larguras (1920 e 960 px) usando srcset e sizes.
  Outras imagens na maior largura em que aparecem (no máximo 2x para telas nítidas).
- Se a proporção de uso (ex.: cartão 4:5) for diferente da foto, recorte com crop,
  não só com scale. Mostre na tabela o deslocamento de cada recorte e confira a
  imagem gerada, para não cortar o assunto principal (pessoa, prédio, produto).
- Toda <img> com width e height (evita a página "pular" ao carregar), iguais às
  medidas reais do arquivo gerado (confira com ffprobe: a foto nem sempre é 16:9
  exato), e alt descritivo (alt="" se for decorativa).
- Hero: sem loading="lazy" e com fetchpriority="high".
  As demais: loading="lazy" e decoding="async".
- Sequência de quadros: conferir que a numeração não tem buracos e que o código
  usa o mesmo total de quadros que existe na pasta.
- Vídeo (se houver): sem áudio, com poster; nunca autoplay com som.
- Fontes: só locais, com font-display: swap: .woff2 em public/fonts ou o pacote
  @fontsource que o projeto já usa (veja o package.json). Nada de link para CDN.
- docs/ativos.md: tabela com arquivo, origem (Higgsfield, foto própria, banco
  de imagens), licença ou termo de uso, data e prompt (se for gerado por IA).
- .gitignore com _originais/.

RESULTADO ESPERADO
A tabela de conversão para eu aprovar; depois, os ativos em public/,
o código atualizado, docs/ativos.md e um resumo dos 10 maiores arquivos do build.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- Nenhum 404 na aba Network, nem no npm run dev nem no npm run preview.
  Se o vite.config.js não tiver appType: "mpa", o arquivo que falta aparece como
  200 com content-type text/html: me avise e confira também o content-type.
- Nenhum arquivo de dist/ acima de 25 MiB (limite de alguns serviços de
  hospedagem) e nada perto de 50 MB (o GitHub alerta acima disso).
- Toda imagem tem alt (ou alt="" justificado).

COMO VALIDAR
- Mostre a lista dos 10 maiores arquivos de dist/ depois do npm run build.
- Inicie o npm run preview e me diga o endereço, para eu testar com o
  subcaminho do GitHub Pages.
- Diga o que eu devo olhar na aba Network (filtro Img e coluna Status).
```

## Versão curta (para o slide)

```text
Integre os ativos de _originais/ ao site de [NOME_DA_MARCA]: mostre antes a tabela origem → destino (formato, largura, peso). Converta com ffmpeg para WebP, nomes em minúsculas, pasta public/. Caminhos com import.meta.env.BASE_URL, width, height e alt em toda imagem, lazy fora do hero. Registre a origem em docs/ativos.md. Rode build e preview: nenhum 404.
```

## Resultado esperado e validação

Comandos que o Claude deve propor (você aprova cada um):

```bash
# Converter um PNG grande em WebP de 1920 px (e uma versão de 960 px para o celular)
ffmpeg -i _originais/img/hero.png -vf "scale=1920:-2" -c:v libwebp -quality 80 public/img/hero-1920.webp
ffmpeg -i _originais/img/hero.png -vf "scale=960:-2" -c:v libwebp -quality 80 public/img/hero-960.webp

# Foto 16:9 num cartão 4:5: recorta a largura (ih*4/5) e escolhe de onde cortar.
# 0.3 = 30% do que sobra fica à esquerda; ajuste olhando a foto (0 = borda esquerda, 1 = direita).
ffmpeg -i _originais/img/destino.png -vf "crop=ih*4/5:ih:(iw-ow)*0.3:0,scale=800:-2" -c:v libwebp -quality 80 public/img/destino-800.webp

# Medidas reais do arquivo gerado (para o width e o height do HTML)
ffprobe -v error -show_entries stream=width,height -of csv=p=0 public/img/hero-1920.webp
```

Como a imagem principal fica no HTML:

```html
<img
  src="/img/hero-1920.webp"
  srcset="/img/hero-960.webp 960w, /img/hero-1920.webp 1920w"
  sizes="100vw"
  width="1920" height="1080"
  alt="Headphone SONORA flutuando sobre fundo escuro, em três quartos de frente"
  fetchpriority="high">
```

O `width` e o `height` informam a proporção da imagem (aqui, 16:9), mesmo que ela apareça menor na tela. No HTML, o caminho começa com `/` e o Vite acrescenta o `base` no build (`/img/...` vira `/sonora/img/...`). Em JavaScript isso não acontece: lá, use `import.meta.env.BASE_URL`. Confira no `npm run preview`.

Como conferir:

| O que fazer | O que esperar |
|---|---|
| F12 › **Network** › filtro **Img** › recarregar | todas as linhas com Status 200; nenhum 404. Se uma imagem não aparece mas está com 200, clique na linha › Headers: `content-type: text/html` quer dizer arquivo que não existe (Vite sem `appType: "mpa"`) |
| F12 › **Network** › coluna **Size** | hero com algumas centenas de KB, não vários MB |
| `npm run build` e listar os maiores arquivos (abaixo) | nada perto dos limites; a pasta de quadros como esperado |
| `npm run preview` e abrir o endereço | tudo igual ao `npm run dev`, com o subcaminho |
| Aba **Lighthouse** (opcional) › Performance | dicas de imagem grande ou sem tamanho |
| Abrir `docs/ativos.md` | toda imagem tem origem e licença |

Listar os 10 maiores arquivos do build:

```bash
# Git Bash
du -ah dist | sort -rh | head -10
```

```powershell
# PowerShell
Get-ChildItem dist -Recurse -File | Sort-Object Length -Descending | Select-Object -First 10 Name, Length
```

## Quando adaptar

- **Fotos reais do cliente (restaurante, turismo, loja):** venham de celular ou de fotógrafo, elas chegam com 5 a 10 MB e às vezes de lado. Peça ao Claude para corrigir a orientação, cortar na proporção do uso e converter. Confira a autorização de uso de imagem de pessoas que aparecem nas fotos.
- **Banco de imagens:** cada banco tem a sua licença. Registre a licença e o link em `docs/ativos.md`. "Achei no Google" não é licença.
- **Muitas imagens que mudam com frequência (catálogo, cardápio com foto):** guardar no repositório deixa o projeto pesado. Pense num serviço de imagens ou num CMS (sistema para editar conteúdo sem mexer no código).
- **Vídeo pesado:** acima de alguns MB, hospede o vídeo num serviço próprio de vídeo ou entregue uma versão menor no celular. O GitHub alerta para arquivos acima de 50 MB e o Cloudflare Pages recusa arquivos acima de 25 MiB.
- **Site publicado na raiz de um domínio próprio:** o `base` vira `"/"`, mas a regra de usar `import.meta.env.BASE_URL` continua valendo e não atrapalha.
- **Imagens geradas por IA:** registre o prompt e o modelo em `docs/ativos.md`. Ajuda a refazer e deixa claro o que é gerado.

## Problemas comuns

- **Imagem aparece no computador e some depois de publicar** → caminho montado no JavaScript sem `import.meta.env.BASE_URL`, ou maiúscula no nome (`Hero.webp` × `hero.webp`). Veja o 404 na aba Network e corrija o caminho ou o nome.
- **A imagem não aparece, mas a Network não mostra 404** → no modo padrão, o Vite devolve o `index.html` com status 200 no lugar do arquivo que falta. Clique na linha da imagem › Headers (`content-type: text/html` numa imagem = arquivo inexistente) ou ponha `appType: "mpa"` no `vite.config.js` (etapa 05).
- **O cartão cortou a cabeça da pessoa ou metade do prédio** → o recorte foi feito só com `scale` ou com o corte no centro. Peça um `crop` com deslocamento escolhido olhando a foto.
- **A página "pula" enquanto carrega** → falta `width` e `height` nas imagens (ou `aspect-ratio` no CSS). Peça para adicionar em todas.
- **`git push` recusado ou muito lento por causa de arquivo grande** → um original foi parar fora de `_originais/` ou o `.gitignore` não pegou. Tire o arquivo do commit antes de enviar e peça ajuda ao Claude para conferir o `.gitignore`.
- **A sequência de quadros não bate (animação acaba antes ou fica parada)** → o total de quadros no código é diferente do número de arquivos na pasta. Conte os arquivos e alinhe o número no código.

## Notas do ensaio (19/10/2026)

- Tema agência de viagens: 3,1 min, com 7 WebP feitos com ffmpeg (o maior, o hero de 1920 px, com 368 KB), `docs/ativos.md` e nenhum 404 no dev nem no preview. Os originais não estavam em `_originais/` e foram copiados do kit.
- Os cartões pedem 4:5 e as fotos são 16:9. Foi preciso usar `crop` com um deslocamento escolhido para cada foto, para não cortar a pessoa nem o templo. O hero saiu com 1920×1086, porque o original (2688×1520) não é 16:9 exato.
- Sem `appType: "mpa"`, o Vite responde 200 (text/html) para imagem que não existe, e o "nenhum 404" não prova nada (achado da etapa 17).
