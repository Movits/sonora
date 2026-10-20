# CLAUDE.md — SONORA

Instruções para o Claude Code neste projeto. O Claude lê este arquivo no começo de cada sessão.

## O que é

Site de lançamento da **SONORA Arc**, um fone over-ear de uma **marca fictícia**, feito como exemplo do
Workshop de IA da WRW. Nada é vendido: o botão de compra abre uma janela "loja demonstrativa".
Publicado em https://movits.github.io/sonora/.

## Stack (não trocar sem pedir)

- Vite + **JavaScript puro** (sem React), HTML e CSS separados por seção.
- GSAP 3.15 + ScrollTrigger **pelo npm** (nunca por CDN: o site precisa funcionar sem internet).
- Fontes locais pelo npm (`@fontsource/unbounded`, `@fontsource/onest`).
- Testes com Playwright usando o Chrome instalado (`channel: 'chrome'`).

## Comandos

- `npm run dev` → http://localhost:5173/sonora/ (o `/sonora/` é a `base` do Vite, igual ao GitHub Pages)
- `npm run build` → gera `dist/`
- `npm run preview` → serve o `dist/` em http://localhost:4173/sonora/
- `npm test` → build + preview + testes no Chrome (desktop e celular)
- `npm run frames` → refaz os quadros da animação a partir de `midia/explosao.mp4` (precisa do ffmpeg)
- `node scripts/capturas.mjs` → capturas de tela em `capturas/` (com o site rodando)

## Onde fica cada coisa

- `index.html` — todo o conteúdo (textos, seções, imagens). Mudar texto = aqui.
- `src/styles/tokens.css` — cores, fontes, tamanhos e espaços. Mudar a cor de destaque = `--accent`.
- `src/styles/<seção>.css` — a aparência de cada seção (hero, cena, detalhes, ruido, caixa, numeros, reserva, rodape).
- `src/sections/<seção>.js` — o comportamento: `hero.js` (troca de cor), `cena.js` (animação de scroll),
  `onda.js` (onda desenhada no canvas), `reserva.js` (recibo e janela).
- `src/lib/` — utilidades compartilhadas (`movimento.js`, `entradas.js`).
- `public/` — arquivos copiados como estão: `img/` (fotos) e `frames/` (quadros da animação).
- `workshop/` — materiais do workshop (prompts, apostila, glossário etc.). Não faz parte do site.

## Regras

1. Antes de dizer "pronto": rode `npm run build` e `npm test`, e abra no navegador. Diga o que rodou.
2. Não adicione biblioteca nova sem perguntar. Nada de CDN.
3. Toda animação precisa ter versão para `prefers-reduced-motion` e não pode esconder conteúdo se o JS falhar.
4. Anime só `transform` e `opacity`. Hover com movimento só dentro de `@media (hover: hover) and (pointer: fine)`.
5. Textos em português do Brasil. A marca é fictícia: não invente avaliações, clientes ou prêmios.
6. Caminhos de arquivos de `public/` dentro do JavaScript usam `import.meta.env.BASE_URL` (veja `src/lib/movimento.js`).
7. Nunca leia nem faça commit de `.env`. Este site não precisa de segredo nenhum.
8. Commits em português no formato `tipo: o que muda` (feat, fix, docs, style, test, chore). Uma mudança por commit.
9. Trabalhe numa branch (`feat/...`, `fix/...`) e abra PR; a `main` publica no GitHub Pages automaticamente.

## Compact instructions

Ao compactar, preserve: decisões de design (paleta, fontes, direção "o objeto, grande"), a estrutura de pastas,
os comandos acima, bugs conhecidos e o que falta fazer. Descarte tentativas abandonadas.
