# 12 · Animações de scroll

> Ligar o movimento da página ao scroll do visitante: a seção fica fixa enquanto algo acontece (pin) e a animação anda para a frente e para trás junto com a rolagem (scrub). Pense num controle de vídeo: o scroll vira a barra de tempo.
>
> Ao vivo no workshop: sim (slide P6, 10 min). O Roberto anima o Projeto B e mostra a exploded view do SONORA como referência.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Opus 5.5 | high | Accept edits | gsap-skills (greensock/gsap-skills, oficial da GSAP, MIT) | nenhum |

Por quê:

- **Opus 5.5, high:** animação junta várias coisas que quebram juntas: tempo, layout, carregamento de imagens, celular e acessibilidade. O erro costuma ser sutil, e o modelo mais forte com mais raciocínio erra menos.
- **Na prática da aula (10 min):** Sonnet 5.5 com effort medium também serve e poupa o limite do plano. Guarde o Opus 5.5 high para quando a animação travar.
- **Accept edits:** você vai iterar rápido (mudar, olhar no navegador, mudar de novo). Os comandos continuam pedindo licença.
- **gsap-skills:** skill oficial da GSAP, com orientações de ScrollTrigger e de desempenho. Para instalar, copie a skill do repositório `github.com/greensock/gsap-skills` para `.claude/skills/` (conferir o passo a passo no README antes da aula) e confira com `/skills`.
- **Fable 5.1** só se você travar num bug muito difícil depois de duas tentativas sérias. É o mais caro (US$ 10/50 por milhão de tokens na API); use numa sessão curta. O acesso ao Fable pode não estar liberado na sua conta: conferir.

### Qual técnica usar

| Técnica | Bom para | Custo e risco | Evite quando |
|---|---|---|---|
| CSS scroll-driven (`animation-timeline: view()` ou `scroll()`) | títulos e cartões entrando, barra de progresso | zero JavaScript. Funciona no Chrome e no Edge 115+ e no Safari 26+; no Firefox, só a partir da versão 159 (lançamento previsto para 27/10/2026). Use dentro de `@supports` | a sequência precisa de várias etapas coordenadas |
| GSAP + ScrollTrigger (pin, scrub, timeline) | narrativa com várias etapas, seção fixada, sincronizar texto e imagem | biblioteca madura e gratuita (licença própria da Webflow, permite uso comercial) | um simples "aparecer ao rolar" resolveria |
| Sequência de imagens num canvas (o SONORA usa) | produto se desmontando ou girando, transformação de objeto | o mesmo resultado em todo navegador; de 5 a 15 MB para 90 a 150 quadros e uso alto de memória | celular fraco ou internet lenta, sem versão leve |
| Vídeo com scrub (`video.currentTime`) | o mesmo efeito com um arquivo só | precisa de keyframes densos (etapa 09); instável no celular | a maior parte do público usa celular |
| SVG animado (linha que se desenha) | rota no mapa, blueprint, gráfico | leve e nítido em qualquer tamanho. Feito com `stroke-dashoffset` ou com o DrawSVGPlugin, que já vem no pacote `gsap` | a imagem é uma foto |
| 3D (Three.js, WebGL) | objeto que o visitante gira ou configura | depende da GPU, exige modelo 3D separado por peças e mais estudo | é só para "parecer 3D": uma sequência de imagens resolve |

Vocabulário do ScrollTrigger:

| Termo | Significado |
|---|---|
| `trigger` | o elemento que dispara a animação |
| `start` / `end` | quando começa e termina. `"top top"` = quando o topo da seção encosta no topo da tela; `"+=250%"` = dura 2,5 telas de scroll |
| `pin` | a seção fica parada na tela enquanto a animação acontece |
| `scrub` | a animação segue o scroll. `true` = colada; `0.5` = com meio segundo de suavização |
| `markers` | marcas visuais de início e fim para depurar. Desligue antes de terminar |
| `gsap.matchMedia()` | cria animações só para certas condições (ex.: só sem reduced-motion) e desfaz sozinho quando a condição muda |

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [ANIMAÇÃO_DESEJADA] | exploded view: canvas fixado com cerca de 120 quadros WebP (public/frames/desktop; 60 quadros menores em public/frames/mobile), o fone se desmonta com scrub; na seção Engenharia, um blueprint em SVG se desenha por código | a linha da rota se desenha no mapa (SVG) conforme o scroll; as fotos dos destinos têm parallax leve |
| [ESTILO_VISUAL] | movimento lento, preciso e técnico | movimento calmo, como uma caminhada |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 com ScrollTrigger (npm) | Vite + JavaScript puro + GSAP pelo npm |
| [CRITÉRIOS_DE_ACEITAÇÃO] | a exploded view acompanha o scroll nos dois sentidos; com reduced-motion aparece a composição estática; console limpo; build sem erro | a rota termina de se desenhar no último destino; com reduced-motion a rota aparece completa; console limpo; build sem erro |

## Prompt (copiar e colar)

```text
CONTEXTO
Site de [NOME_DA_MARCA], já construído. Stack: [STACK] (GSAP já instalado pelo npm).
Leia CLAUDE.md, docs/plano.md (estratégia da animação) e, se existir, docs/video.md.
Os ativos ficam em public/ (ex.: public/img/ e, se houver sequência de quadros,
public/frames/).
Animação desejada: [ANIMAÇÃO_DESEJADA].
Estilo do movimento: [ESTILO_VISUAL].

OBJETIVO
Implementar a animação ligada ao scroll, com versão estática para
prefers-reduced-motion e versão leve para celular.

RESTRIÇÕES
- Antes de codar, diga em até 5 linhas qual técnica vai usar (CSS scroll-driven,
  GSAP ScrollTrigger, sequência em canvas, vídeo com scrub ou SVG) e por quê.
  Se for diferente do plano, espere meu OK.
- Use só o GSAP do npm:
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
  Não use Lenis, ScrollSmoother, Three.js nem outra biblioteca sem me perguntar.
  Nada de CDN.
- Anime só transform, opacity, o desenho do canvas e o traço de SVG
  (stroke-dashoffset). Nada de animar width, height, top ou left.
- Não sequestre o scroll: nada de rolagem suave forçada nem página travada.
- Seção fixada (pin) por no máximo 3 telas. Todo texto importante legível
  mesmo sem a animação.
- prefers-reduced-motion: sem pin e sem scrub; mostrar a composição final
  estática com todo o conteúdo visível. Use gsap.matchMedia().
- Sequência de imagens: pré-carregar com indicador de progresso; desenhar só
  quadros já carregados; nunca deixar o canvas em branco.
- Depois que imagens e fontes carregarem, chame ScrollTrigger.refresh()
  se o layout mudar.
- markers: true só enquanto desenvolve. Remova no fim.
- Não faça commit.

FERRAMENTAS PERMITIDAS
- Ler e editar arquivos desta pasta.
- Rodar npm run dev, npm run build, npm run preview (e npm test, se existir).
- Ferramenta de navegador, se você tiver, para rolar a página, tirar capturas
  e ler o console.
- Documentação oficial: gsap.com/docs e developer.mozilla.org.

REQUISITOS TÉCNICOS
- Código em src/sections/<nome-da-secao>.js exportando init(), chamado no src/main.js.
- No JavaScript, caminhos de public/ com import.meta.env.BASE_URL (o site roda num subcaminho
  no GitHub Pages).
- Canvas nítido: considerar devicePixelRatio (limite 2) e redimensionar com a janela.
- Detalhes pequenos (títulos entrando) com CSS animation-timeline dentro de
  @supports, ou com GSAP. Escolha um e justifique.
- No celular (largura até 768 px): menos quadros, pin mais curto ou imagem
  estática. Explique a escolha.

RESULTADO ESPERADO
A animação funcionando nos dois sentidos, um resumo da técnica e do que foi
alterado, e a lista do que eu devo testar.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- Nenhum erro no console e nenhum 404 de imagem (aba Network).
- npm run build termina sem erro.
- Rolar rápido para cima e para baixo não deixa quadro em branco nem salto.
- Recarregar a página no meio da animação mostra o estado certo.
- Com reduced-motion, todo o conteúdo aparece sem precisar rolar a animação.

COMO VALIDAR
- Mostre o final da saída do npm run build.
- Inicie o npm run dev e me diga o endereço.
- Se tiver ferramenta de navegador: capture o início, o meio e o fim da
  animação, emule prefers-reduced-motion e leia o console. Se não tiver,
  me diga exatamente onde clicar no DevTools para conferir.
```

## Versão curta (para o slide)

```text
Implemente [ANIMAÇÃO_DESEJADA] com GSAP ScrollTrigger do npm: seção fixada (pin) por até 3 telas, scrub, só transform, opacity, canvas e traço de SVG. Pré-carregue as imagens. prefers-reduced-motion: composição estática com gsap.matchMedia(). Sem Lenis, sem CDN, sem bibliotecas novas. Teste nos dois sentidos e em 375 px, rode npm run build e confira o console.
```

## Resultado esperado e validação

O núcleo de uma sequência de imagens com ScrollTrigger (para você reconhecer no código que o Claude escrever):

```js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
  gsap.to(estado, {
    quadro: TOTAL - 1,      // do primeiro ao último quadro
    snap: "quadro",         // só números inteiros
    ease: "none",           // velocidade constante: quem manda é o scroll
    onUpdate: desenhar,     // desenha o quadro atual no canvas
    scrollTrigger: {
      trigger: "#exploded", // a seção que dispara
      start: "top top",     // quando o topo da seção encosta no topo da tela
      end: "+=250%",        // dura 2,5 telas de scroll
      pin: true,            // a seção fica parada enquanto isso
      scrub: 0.5,           // segue o scroll, com 0,5 s de suavização
    },
  });
});
```

E um "aparecer ao rolar" só com CSS, que não quebra onde não há suporte:

```css
@keyframes aparecer {
  from { opacity: 0; translate: 0 2rem; }
  to   { opacity: 1; translate: 0 0; }
}

@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .revelar {
      animation: aparecer linear both;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
    }
  }
}
```

Como conferir:

| O que fazer | O que esperar |
|---|---|
| Rolar devagar até o fim e voltar | a animação anda e volta junto com o scroll |
| Rolar muito rápido nos dois sentidos | nenhum quadro em branco, nenhum salto do layout |
| Recarregar (F5) no meio da animação | a página volta no estado certo |
| F12 › menu ⋮ › More tools › **Rendering** › "Emulate CSS media feature prefers-reduced-motion" › reduce | sem pin, sem scrub, composição final visível |
| F12 › **Network** › filtro Img › recarregar | nenhum 404 nos quadros |
| F12 › ícone de celular › 375 px | a versão leve aparece e nada sai da tela |
| `npm run build` e `npm run preview` | igual ao `npm run dev` |
| Procurar `markers: true` no código | não deve sobrar nenhum |

## Quando adaptar

- **Produto físico (como o SONORA):** a sequência de imagens num canvas é o caminho mais previsível. A seção Engenharia mostra que nem tudo precisa de imagem: um blueprint em SVG desenhado por código é leve e nítido.
- **Turismo:** linha da rota em SVG que se desenha e parallax leve nas fotos. As fotos pesam: carregue as de baixo só quando estiverem perto da tela (`loading="lazy"`).
- **Restaurante e cafeteria:** quem chega quer cardápio e endereço. Use só detalhes curtos (títulos e fotos entrando) e nenhum pin longo.
- **Portfólio:** transições discretas entre projetos. A animação não pode competir com o trabalho mostrado.
- **Objeto que o visitante gira ou configura (cor, peças):** aí o 3D com Three.js se justifica. Considere a GPU do aparelho, um modelo 3D separado por peças e o carregamento local dos arquivos (alguns carregadores de modelo baixam partes da internet por padrão e quebram sem conexão).
- **Celular e internet lenta:** troque a sequência inteira por uma versão com menos quadros ou por uma imagem estática. Movimento é bônus; conteúdo é obrigação.
- **Acessibilidade:** pessoas com sensibilidade a movimento ativam reduced-motion no sistema. Para elas, a versão estática é a página. Teste sempre.

## Problemas comuns

- **A seção fixada "pula" ou o espaçamento fica errado** → ligue `markers: true` para ver início e fim e chame `ScrollTrigger.refresh()` depois que imagens e fontes carregarem. Confira se algum elemento pai tem `transform` no CSS, o que atrapalha o pin.
- **Quadros em branco ao rolar rápido** → as imagens não estavam carregadas. Pré-carregue, desenhe só quadros completos e mantenha o último desenhado na tela até o próximo ficar pronto.
- **Funciona no `npm run dev` e quebra depois de publicar** → caminho dos quadros sem o `base`. Veja os 404 na aba Network e use `import.meta.env.BASE_URL`.
- **O Claude tenta a quinta correção e nada muda** → pare. Peça uma página de teste só com a animação, para isolar o problema, ou comece uma sessão nova (`/clear`) colando o erro exato do console. Se mesmo assim travar, uma sessão curta com Fable 5.1.

## Exemplo ruim × bom

**Ruim:**

```text
Coloca umas animações de scroll bem legais, tipo Apple.
```

**Bom:**

```text
Implemente a linha da rota que se desenha no mapa (SVG) conforme o scroll, com GSAP ScrollTrigger do npm: seção fixada por até 2 telas, scrub, animando só o traço do SVG (stroke-dashoffset), transform e opacity. prefers-reduced-motion: rota completa e estática, com gsap.matchMedia(). Sem Lenis, sem CDN, sem bibliotecas novas. Teste nos dois sentidos e em 375 px, rode npm run build e confira o console.
```

Por que o bom funciona melhor:

- **"Tipo Apple" não é especificação.** O bom diz qual elemento anima, com qual técnica e por quanto tempo de scroll.
- **"Umas animações" vira animação em tudo.** Muito movimento cansa, pesa no celular e esconde o conteúdo. O bom anima uma coisa, bem feita.
- **Sem limite de ferramenta, o Claude pode trazer Lenis, Three.js ou bibliotecas de "animar ao rolar".** O bom fixa o GSAP do npm e proíbe o resto.
- **O bom inclui acessibilidade (reduced-motion) e celular desde o pedido**, em vez de remendar no fim.
- **O bom define como testar:** dois sentidos, 375 px, build e console.
