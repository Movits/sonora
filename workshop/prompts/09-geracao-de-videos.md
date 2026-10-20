# 09 · Geração de vídeos

> Gerar com IA um vídeo curto a partir das imagens aprovadas (por exemplo, o produto montado se desmontando) e prepará-lo com ffmpeg para ser "rebobinado" pelo scroll. É como um flipbook: o vídeo vira uma pilha de quadros, e o scroll vira o dedo que passa as páginas.
>
> Ao vivo no workshop: não (material para casa). Gerar vídeo custa créditos e depende de fila. Os quadros do SONORA, em `public/frames/`, servem de exemplo do resultado.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code (planeja, escreve o prompt e roda o ffmpeg) + Higgsfield, no site ou pelo conector (gera o vídeo) | Claude: Sonnet 5.5 (Opus 5.5 se o preparo travar) · Vídeo: Kling 3.0 ou Seedance (no Higgsfield) | medium | Manual (Plan opcional para o plano e o custo) | nenhuma obrigatória | Higgsfield (opcional; gasta créditos) |

Por quê:

- **Sonnet 5.5, medium:** o prompt do vídeo é curto e os comandos do ffmpeg são conhecidos. Suba para Opus 5.5 se o preparo der problema (quadros fora de ordem, tamanho errado, erro do ffmpeg que você não entende).
- **Plan (opcional) primeiro:** vídeo é o ativo mais caro do projeto. O plano mostra custo, duração e número de tentativas antes de gastar.
- **Manual depois:** cada geração gasta créditos e cada comando do ffmpeg cria ou apaga arquivos. Aprove um por um.
- **ffmpeg** precisa estar instalado. No Windows: `winget install Gyan.FFmpeg`; no Mac: `brew install ffmpeg` (conferir antes da aula). Teste com `ffmpeg -version`.

### Conceitos rápidos

| Conceito | O que é | Dica para scroll |
|---|---|---|
| Imagem → vídeo | o modelo anima uma imagem que você já aprovou | comece sempre da imagem-mestra da etapa 08 |
| Quadro inicial e final (start/end frame) | você dá a primeira e a última imagem; o modelo inventa o meio | perfeito para "montado → explodido". O Seedance 2.0 aceita os dois quadros; no Kling 3.0, conferir o modo de quadros na interface |
| Movimento de câmera | como a "câmera" se mexe no vídeo | câmera parada (locked-off) ou uma única órbita lenta. Nada de cortes, zoom rápido ou câmera tremida |
| Quadros por segundo (fps) | quantas imagens por segundo | quadros = duração × fps. 10 s × 12 fps = 120 quadros |

### Custo (Higgsfield, consultado em 19/10/2026)

| Modelo | Duração e resolução | Créditos | Em dólar (crédito a US$ 0,033–0,059) |
|---|---|---|---|
| Kling 3.0 std | 5 s | 7,5 | US$ 0,25–0,44 |
| Kling 3.0 pro | 10 s | 17,5 | US$ 0,58–1,03 |
| Seedance 2.0 fast | 5 s, 720p | 12,5 | US$ 0,41–0,74 |
| Seedance 2.5 | 10 s, 720p | 70 | US$ 2,31–4,13 |
| Seedance 2.5 | 10 s, 1080p | 160 | US$ 5,28–9,44 |

Durações aceitas: Kling 3.0 de 3 a 15 s; Seedance 2.0 de 4 a 15 s; Seedance 2.5 até 30 s. Orce 2 ou 3 tentativas: é comum a primeira sair com peças "derretendo".

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [PRODUTO_OU_SERVIÇO] | headphone over-ear (montado no início, explodido no fim) | roteiro pela Patagônia |
| [ESTILO_VISUAL] | estúdio escuro, cinematográfico, sem cortes | luz de fim de tarde, calmo, contemplativo |
| [PALETA_DE_CORES] | fundo quase preto, cobre, grafite | azul-profundo, areia, laranja de pôr do sol |
| [ANIMAÇÃO_DESEJADA] | o fone se desmonta conforme o scroll (canvas fixado, cerca de 120 quadros, scrub) | vídeo curto em loop no topo, sem scrub (a rota no mapa é SVG, não vídeo) |

## Prompt (copiar e colar)

```text
CONTEXTO
Leia docs/plano.md e docs/imagens.md, se existirem.
Produto ou cena: [PRODUTO_OU_SERVIÇO]. Estilo: [ESTILO_VISUAL].
Paleta: [PALETA_DE_CORES]. Animação no site: [ANIMAÇÃO_DESEJADA].
As imagens aprovadas estão em _originais/img/.
Preços de referência (créditos, 19/10/2026): Kling 3.0 pro 10 s = 17,5;
Seedance 2.5 10 s = 70 (720p) ou 160 (1080p). Crédito: US$ 0,033 a 0,059.
Orçamento: até 60 créditos, contando novas tentativas.

OBJETIVO
1. Planejar e escrever o prompt do vídeo.
2. Depois que eu gerar e salvar o vídeo, prepará-lo para o site com ffmpeg.

RESTRIÇÕES
- Use quadro inicial e final quando a animação for "estado A → estado B"
  (ex.: montado → explodido), a partir das imagens aprovadas.
- Para scroll: uma tomada contínua, sem cortes, câmera parada ou uma única
  órbita lenta, luz e exposição constantes, fundo liso, sem texto, sem logos,
  sem partículas, sem câmera tremida. Peças rígidas, movendo em linha reta,
  sem deformar e sem surgirem peças novas.
- Não gere nada sem minha aprovação. Com o conector Higgsfield,
  consulte o custo antes e gere um por vez.
- Não instale nada. Use o ffmpeg que já está instalado (confira com ffmpeg -version).
- Mostre cada comando do ffmpeg antes de rodar e explique cada opção em uma linha.
- Vídeo original fica em _originais/video/ (fora do git).

FERRAMENTAS PERMITIDAS
- Ler arquivos do projeto; criar docs/video.md.
- Conector Higgsfield (se houver): só consulta de custo e gerações que eu aprovar.
- Rodar ffprobe e ffmpeg, criar pastas em public/.

REQUISITOS TÉCNICOS
Plano (em docs/video.md):
- modelo, duração, resolução, quadro inicial, quadro final, movimento de câmera,
  custo estimado com tentativas;
- prompt do vídeo em inglês;
- quantos quadros o site vai usar (meta: cerca de 120, de 1280 a 1600 px de largura).
Preparo (depois que eu salvar o vídeo):
1. ffprobe: duração, largura, altura e fps do original.
2. Escolher o fps de extração para chegar perto de 120 quadros.
3. Extrair para public/frames/frame_0001.webp, frame_0002.webp...
   (WebP, qualidade por volta de 75).
4. Se o plano pedir vídeo com scrub em vez de quadros: MP4 H.264 sem áudio,
   keyframes densos (-g 8; no celular, 720p e -g 4), -sc_threshold 0
   e +faststart.
5. Indicar qual quadro (ou imagem) vira a composição estática para
   prefers-reduced-motion.

RESULTADO ESPERADO
docs/video.md com o plano e o prompt; depois, a pasta public/frames/ pronta
e um resumo: número de quadros, tamanho total e largura.

CRITÉRIOS DE ACEITAÇÃO
- Custo estimado dentro do orçamento.
- Número de quadros entre 90 e 150 e pasta public/frames/ com menos de 15 MB.
- Nomes em sequência, sem buracos (frame_0001 até frame_N).
- Nenhum quadro com corte de cena, salto de luz ou peça deformada
  (eu confiro olhando a sequência).

COMO VALIDAR
- Mostre a contagem de arquivos e o tamanho da pasta.
- Diga quais quadros eu devo abrir para conferir (início, meio, fim e
  os pontos onde as peças mais se mexem).
```

## Versão curta (para o slide)

```text
Planeje um vídeo de [PRODUTO_OU_SERVIÇO] para scroll: quadro inicial e final das imagens aprovadas, uma tomada sem cortes, câmera parada, luz constante, fundo liso, sem texto. Escreva o prompt e o custo. Depois que eu gerar: ffprobe, extraia cerca de 120 quadros WebP para public/frames/ e mostre contagem e tamanho. Nada sem minha aprovação.
```

## Resultado esperado e validação

Um prompt de vídeo no estilo do SONORA:

```text
Single continuous shot, no cuts. Start frame: the assembled headphone (reference 1).
End frame: the same headphone in exploded view (reference 2).
Locked-off static camera. The parts slowly separate in straight lines along clear axes,
rigid, no morphing, no melting, no new parts appearing.
Constant studio lighting, locked exposure, plain near-black background.
No text, no logos, no particles, no camera shake.
```

Os comandos do preparo (iguais no PowerShell e no Git Bash, exceto o passo 0):

```bash
# 0. Criar a pasta de destino (o ffmpeg não cria pastas)
#    Git Bash: mkdir -p public/frames   ·   PowerShell: mkdir public/frames
mkdir -p public/frames

# 1. Ver duração, largura, altura e fps do original
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate:format=duration -of default=noprint_wrappers=1 _originais/video/explodido.mp4

# 2. Extrair 12 quadros por segundo (10 s → 120 quadros), 1600 px de largura, em WebP
ffmpeg -i _originais/video/explodido.mp4 -vf "fps=12,scale=1600:-2" -c:v libwebp -quality 75 public/frames/frame_%04d.webp

# 3. (Só se for usar vídeo com scrub em vez de quadros) MP4 com keyframes densos
#    Crie antes a pasta public/video, como no passo 0.
ffmpeg -i _originais/video/explodido.mp4 -an -vf "scale=1920:-2" -c:v libx264 -pix_fmt yuv420p -crf 20 -g 8 -sc_threshold 0 -movflags +faststart public/video/explodido-scrub.mp4
```

No PowerShell, `mkdir public/frames` cria as pastas do caminho.

Como ficou no SONORA: o vídeo `midia/explosao.mp4` tem 10 s a 24 fps (1912 × 1080). O script `scripts/extrair-quadros.mjs`, chamado por `npm run frames`, roda o mesmo ffmpeg duas vezes: 12 fps a 1600 px para o desktop (121 quadros, cerca de 4,3 MB, em `public/frames/desktop/`) e 6 fps a 900 px para o celular (60 quadros, cerca de 1 MB, em `public/frames/mobile/`). Guardar o comando num script é o jeito de refazer igual depois.

Como conferir:

- Contagem e tamanho. PowerShell: `Get-ChildItem public/frames -Filter *.webp | Measure-Object -Property Length -Sum` (mostra a quantidade e a soma em bytes). Git Bash: `ls public/frames | wc -l` e `du -sh public/frames`.
- Abra o primeiro, o do meio e o último quadro. Depois, os quadros onde as peças mais se mexem: é ali que a IA costuma deformar.
- Passe os quadros rápido no visualizador de imagens (seta para a direita). Pulo de luz ou "tremida" aparece na hora.

Quadros ou vídeo com scrub?

| Caminho | Prós | Contras |
|---|---|---|
| Quadros WebP num canvas (o SONORA usa) | igual em todo navegador; rola para trás sem engasgar | de 5 a 15 MB para 90 a 150 quadros; usa memória (180 quadros em 1080p podem passar de 1 GB decodificados) |
| MP4 com keyframes densos | um arquivo só, em geral menor | instável no celular; depende do decodificador do aparelho |

## Quando adaptar

- **Nem todo site precisa de vídeo.** Na agência de viagens, a rota que se desenha é SVG: zero crédito, leve e nítida. Vídeo entra quando o movimento é o produto (montagem, rotação, transformação).
- **Vídeo de fundo em loop (restaurante, turismo):** não precisa de scrub. Use `<video autoplay muted loop playsinline>` com uma imagem `poster`, 720p, poucos segundos e sem áudio. No celular com internet lenta, mostre só o `poster`.
- **Lugar ou prato real:** vídeo gerado do destino ou da comida pode enganar o cliente. Prefira filmagem real; a IA entra em transições ou ilustrações.
- **Celular:** use menos quadros e menores (o SONORA usa 60 quadros de 900 px no celular) ou só a imagem estática. Peça ao Claude duas pastas de quadros e a escolha pelo tamanho da tela.
- **Vídeo ao contrário (explodido → montado):** em vez de reprocessar o vídeo, inverta a ordem dos quadros no código. É mais barato.
- **3D de verdade (objeto que o visitante gira com o mouse):** aí o caminho é modelo 3D e Three.js, não vídeo. Um modelo 3D gerado por IA costuma vir numa peça só, sem as partes separadas.

## Problemas comuns

- **Peças derretem, mudam de forma ou surgem do nada** → reforce "rigid parts, no morphing, no new parts", encurte a duração e gere de novo. Orce 2 ou 3 tentativas desde o início.
- **A câmera se mexe e o scrub fica enjoativo** → peça "locked-off static camera". O movimento deve vir do objeto, não da câmera.
- **`ffmpeg` não é reconhecido** → ele não está instalado ou não está no PATH. Instale, feche e abra o terminal de novo e rode `ffmpeg -version`.
- **Pasta de quadros pesada demais (mais de 15 MB)** → diminua a largura (`scale=1280:-2`), o fps de extração ou a qualidade (`-quality 65`). Confira de novo a nitidez.
