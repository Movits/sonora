# SONORA — site demonstrativo

**SONORA Arc** é um fone over-ear de uma **marca fictícia**. Este site foi construído com inteligência artificial
(Claude Code + Higgsfield) para o **Workshop de IA da WRW** (20/10/2026), como exemplo do nível de resultado que
dá para alcançar com um bom processo.

- Site no ar: **https://movits.github.io/sonora/**
- Materiais do workshop (prompts, apostila, glossário, guias): [`workshop/`](workshop/)

> Nenhum produto é vendido. O botão "Reservar o meu" abre uma janela explicando que a loja é demonstrativa.

## Rodar no seu computador

Pré-requisitos: [Node.js](https://nodejs.org) 22 ou mais novo e Google Chrome (para os testes).

```bash
git clone https://github.com/Movits/sonora.git
cd sonora
npm install
npm run dev
```

Abra http://localhost:5173/sonora/ no navegador.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento: salva o arquivo, a página atualiza sozinha |
| `npm run build` | Gera a versão final otimizada em `dist/` |
| `npm run preview` | Abre a versão final (`dist/`) em http://localhost:4173/sonora/ |
| `npm test` | Gera o build e testa o site num Chrome de verdade (desktop e celular) |
| `npm run frames` | Refaz os quadros da animação a partir do vídeo (precisa do [ffmpeg](https://ffmpeg.org)) |

## Como o projeto está organizado

```text
sonora/
├── index.html              ← conteúdo: textos, seções e imagens (HTML = estrutura)
├── package.json            ← nome do projeto, scripts e dependências
├── package-lock.json       ← versões exatas instaladas (gerado pelo npm; versionar)
├── vite.config.js          ← configuração do Vite (base /sonora/ do GitHub Pages)
├── playwright.config.js    ← configuração dos testes
├── src/
│   ├── main.js             ← ponto de entrada: junta estilos e scripts
│   ├── styles/             ← aparência (CSS): tokens.css + um arquivo por seção
│   ├── sections/           ← comportamento (JavaScript) de cada seção
│   └── lib/                ← utilidades compartilhadas
├── public/
│   ├── img/                ← fotos (WebP) geradas no Higgsfield
│   └── frames/             ← 121 quadros (desktop) e 60 (celular) da animação de scroll
├── midia/explosao.mp4      ← vídeo original da explosão (fonte dos quadros)
├── scripts/                ← ferramentas: extrair quadros, tirar capturas
├── tests/                  ← testes de ponta a ponta (Playwright)
├── .github/workflows/      ← CI (testes em toda PR) e deploy no GitHub Pages
├── .claude/                ← configurações do Claude Code para este projeto + skill /review-landing
├── CLAUDE.md               ← instruções permanentes para o Claude neste projeto
└── workshop/               ← materiais do workshop (não fazem parte do site)
```

Não editar à mão: `node_modules/` (instalado pelo npm) e `dist/` (gerado pelo build). Nenhum dos dois vai para o Git.

## Como a animação de scroll funciona

1. **Conteúdo:** uma foto do fone montado e outra dele "explodido" (peças separadas) foram geradas no Higgsfield
   (GPT Image 2.5, a segunda a partir da primeira, para manter o mesmo produto).
2. **Vídeo:** um vídeo de 10 s (Kling 3.0) foi gerado usando a foto montada como **primeiro quadro** e a explodida
   como **último quadro**.
3. **Quadros:** `npm run frames` usa o ffmpeg para transformar o vídeo em imagens WebP.
4. **Interação:** `src/sections/cena.js` desenha num `<canvas>` o quadro que corresponde à posição da rolagem
   (GSAP ScrollTrigger). De 0% a 62% o fone desmonta, fica parado aberto e depois se monta de volta.
5. **Acessibilidade:** com "reduzir movimento" ligado no sistema (ou sem JavaScript), a cena vira uma imagem
   parada com todos os textos visíveis.

Gerar o conteúdo (imagens e vídeo) e programar a interação (scroll, canvas) são trabalhos diferentes; a seção
"Inverter" mostra o segundo sozinho: a onda é desenhada inteira por código, sem imagem.

## Pontos de recuperação (tags)

Versões estáveis para voltar no tempo ou estudar a evolução. Foram recriadas a partir da versão final, em ordem
didática:

| Tag | O que tem |
| --- | --- |
| `v0.1-estrutura` | HTML com todo o conteúdo, configuração do Vite, tokens e base |
| `v0.2-landing` | Todas as seções com aparência (CSS), sem JavaScript |
| `v0.3-design` | Design completo + configurador da reserva funcionando |
| `v0.4-animacao-simples` | Entradas das seções e troca de cor no topo |
| `v0.5-animacao-avancada` | Cena de scroll com canvas e onda desenhada por código |
| `v1.0-publicavel` | Testes, CI, deploy e documentação |

Para ver o site como estava numa tag, sem perder nada: `git switch --detach v0.3-design` (volte com `git switch main`).

## Créditos

- Imagens e vídeo: gerados com IA no [Higgsfield](https://higgsfield.ai) (GPT Image 2.5 e Kling 3.0) para fins didáticos.
- Fontes: Unbounded e Onest (licença SIL Open Font License), via Fontsource.
- Animação: [GSAP](https://gsap.com) (licença gratuita da Webflow).
- Código: licença MIT (veja [LICENSE](LICENSE)).
