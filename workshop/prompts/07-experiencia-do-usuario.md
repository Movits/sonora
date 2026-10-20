# 07 · Experiência do usuário

> Desenhar o caminho do visitante, do primeiro segundo até o clique no botão principal, antes de pensar em efeitos. UX (experiência do usuário) é como uma boa loja física: a pessoa entra, entende onde está, acha o que quer e sabe onde é o caixa.
>
> Ao vivo no workshop: não (material de apoio / para casa). Faça antes de construir a landing page, ou use como revisão depois dela.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Opus 5.5 | medium | Plan → Accept edits | web-design-guidelines (vercel-labs/agent-skills, MIT) ou frontend-design (anthropics/skills, Apache 2.0) | nenhum |

Por quê:

- **Opus 5.5, medium:** é trabalho de design (organizar informação e prioridades), mas sem código complexo. Medium dá conta.
- **Plan → Accept edits:** primeiro o Claude propõe a jornada e o rascunho das telas; depois de aprovar, ele salva o documento.
- **web-design-guidelines:** traz uma lista de regras de interface para revisar o que for proposto. Atenção: ela baixa as regras da internet quando roda, então precisa de conexão. Sem internet, use a frontend-design.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [PÚBLICO_ALVO] | adultos de 25 a 40 anos, muitas vezes chegando por anúncio no celular | adultos de 28 a 45 anos, chegando pelo Instagram no celular |
| [OBJETIVO_DO_SITE] | entrar na lista de espera (demonstrativa) | pedir orçamento pelo WhatsApp |
| [FUNCIONALIDADES] | hero; exploded view; Engenharia; especificações; chamada final | destinos; roteiro dia a dia; mapa da rota; perguntas frequentes; botão de orçamento |
| [ANIMAÇÃO_DESEJADA] | o fone se desmonta conforme o scroll (seção fixada por algumas telas) | linha da rota que se desenha no mapa |
| [CRITÉRIOS_DE_ACEITAÇÃO] | a mensagem principal aparece sem rolar; dá para pular a animação; reduced-motion mostra tudo | botão de orçamento visível na primeira tela do celular; perguntas frequentes abrem pelo teclado |

## Prompt (copiar e colar)

```text
CONTEXTO
Leia docs/brief.md, docs/requisitos.md e docs/plano.md, se existirem.
Público: [PÚBLICO_ALVO]. Ação principal do site: [OBJETIVO_DO_SITE].
Seções: [FUNCIONALIDADES]. Animação: [ANIMAÇÃO_DESEJADA].

OBJETIVO
Desenhar a experiência do visitante e salvar em docs/ux.md,
para guiar a construção da página.

RESTRIÇÕES
- Não escreva código nesta etapa (só o documento).
- Pense primeiro no celular (375 px de largura), depois no desktop (1280 px).
- Uma mensagem principal por tela. Se uma seção tenta dizer três coisas, divida ou corte.
- A animação nunca pode esconder conteúdo essencial nem impedir a pessoa de seguir:
  deve existir um jeito de pular (link ou âncora) e uma versão para
  prefers-reduced-motion.
- Seção fixada (pin) por mais de 2 ou 3 telas cansa. Justifique se passar disso.
- Textos de botão dizem o que acontece ("Pedir orçamento no WhatsApp"),
  nunca só "Clique aqui".

FERRAMENTAS PERMITIDAS
- Ler arquivos do projeto; ativar a skill de design se estiver instalada.
- Depois da aprovação: criar docs/ux.md.

REQUISITOS TÉCNICOS
O documento deve ter:
1. Jornada em 5 momentos: de onde a pessoa chega, o que vê no primeiro
   segundo, qual dúvida surge, que prova a convence, onde ela age.
2. Ordem das seções e por que cada uma está ali (qual dúvida ela responde).
3. Rascunho de cada tela em texto (wireframe em caixas ASCII),
   para celular e desktop.
4. Onde fica o botão principal em cada ponto da página.
5. Navegação: menu, âncoras, voltar ao topo, pular animação.
6. Estados: carregando (ex.: imagens da animação), erro de imagem,
   lista vazia, texto muito longo.
7. Acessibilidade: ordem do Tab, foco visível, texto alternativo de cada
   imagem, contraste, prefers-reduced-motion.
8. Microtextos: títulos, botões e mensagens curtas, no tom do brief.
9. Três testes rápidos para fazer com uma pessoa real (ex.: "em 5 segundos,
   diga o que este site vende").

RESULTADO ESPERADO
A jornada e os rascunhos na tela para eu aprovar; depois, docs/ux.md.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- A ação principal aparece na primeira tela do celular e no fim da página.
- Toda imagem do plano tem texto alternativo proposto (ou alt="" se for decorativa).
- Existe um caminho para pular a animação.

COMO VALIDAR
- Termine com uma lista de verificação que eu possa usar no navegador
  depois que a página estiver pronta.
```

## Versão curta (para o slide)

```text
Leia docs/. Desenhe a experiência do visitante em docs/ux.md: jornada em 5 momentos, ordem das seções e por quê, rascunho em texto de cada tela (celular 375 px e desktop), posição do botão "[OBJETIVO_DO_SITE]", como pular a animação, estados de carregamento, acessibilidade e microtextos. Sem código.
```

## Resultado esperado e validação

O que deve aparecer: a jornada, os rascunhos das telas e, depois da aprovação, `docs/ux.md`. Um rascunho de tela em texto fica assim:

```text
CELULAR 375 px · Tela 1 (hero)
┌─────────────────────────┐
│ ANDARA          [menu]  │
│                         │
│  [foto do destino]      │
│                         │
│ Patagônia sem pressa,   │
│ em grupo de até 12.     │
│                         │
│ [Pedir orçamento ▸]     │  ← ação principal visível sem rolar
│ ver roteiros ↓          │
└─────────────────────────┘
```

Como conferir:

- Faça o "teste dos 5 segundos" com alguém: mostre a primeira tela e pergunte o que o site vende e o que dá para fazer nele.
- Leia só os títulos das seções, em ordem. Eles contam uma história que leva ao botão?
- Ache no documento o caminho para pular a animação. Se não houver, peça.
- Quando a página existir: navegue só com `Tab` e `Enter`. Dá para chegar ao botão principal? O foco aparece?

## Quando adaptar

- **Restaurante:** a jornada é curta e com pressa. Cardápio, horário, endereço e "pedir" precisam estar a no máximo um toque. Animação longa atrapalha quem está com fome.
- **Loja virtual:** a jornada inclui buscar, comparar, colocar no carrinho e pagar. Cada passo vira tela própria, e confiança (frete, troca, segurança) entra cedo. Isso já é aplicação, não landing page.
- **Turismo e serviços sob orçamento:** a dúvida principal é "quanto custa e como funciona". Faixa de preço, o que está incluído e perguntas frequentes vêm antes do botão.
- **Portfólio:** recrutador olha rápido. Os 3 melhores projetos aparecem logo, cada um com resultado em uma linha.
- **Storytelling com scroll (como o SONORA):** a história é a experiência, mas a pessoa precisa saber quanto falta (indicador de progresso) e poder sair dela.
- **Público com acesso lento ou celular simples:** imagem estática no lugar da sequência pesada e conteúdo principal em texto, não dentro de imagem.

## Problemas comuns

- **O documento vira um ensaio sobre UX** → peça "formato de checklist e rascunhos, no máximo 2 páginas".
- **Tudo é importante, tudo no topo** → pergunte "qual é a UMA coisa que a pessoa precisa entender na primeira tela?" e reorganize a partir dela.
- **A animação domina a jornada** → lembre a regra: a animação serve à mensagem. Se tirar a animação e a página não fizer sentido, a estrutura está errada.
- **A skill web-design-guidelines falha** → ela precisa de internet para baixar as regras. Use a frontend-design ou peça a revisão sem skill.
