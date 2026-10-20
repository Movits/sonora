# 14 · Interações

> Colocar na página as interações que o visitante usa com as mãos (botões, menu, acordeão, formulário, estados de hover e foco), com resposta clara, uso pelo teclado e bom comportamento no celular.
>
> Ao vivo no workshop: sim (slide P7, junto com a etapa 13). O Roberto pede uma ou duas interações no Projeto B; quem tem notebook escolhe uma da própria lista.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI), com o navegador ao lado rodando `npm run dev` | Sonnet 5.5 (Opus 5.5 se a interação tiver animação complexa) | medium | Accept edits | opcional: `frontend-design` (anthropics/skills, Apache 2.0) | nenhum |

Por quê:

- **Sonnet 5.5, medium:** é trabalho de construção (HTML, CSS e um pouco de JavaScript). O Sonnet resolve bem e gasta menos. Suba para Opus 5.5 se a interação envolver animação encadeada ou muito estado.
- **Accept edits:** o Claude edita os arquivos sem pedir licença a cada um, mas ainda pergunta antes de rodar comandos. Você confere cada interação no navegador.
- **Effort não é temperatura:** ele controla quanto o modelo pensa antes de responder. Temperatura não se ajusta no Claude Code.
- **`frontend-design`:** ajuda a fugir do visual "padrão de IA" nos estados de botão e de foco. É opcional.
- **Nunca use Bypass.**

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [SEGMENTO] | áudio premium | turismo de natureza |
| [PÚBLICO_ALVO] | adultos de 25 a 40 anos que trabalham com foco ou viajam muito | adultos de 28 a 45 anos que querem natureza com conforto |
| [FUNCIONALIDADES] | menu que vira botão no celular; botão da lista de espera com estados de hover e foco; especificações técnicas em acordeão; botão "voltar ao topo" | cards de destino que abrem o roteiro dia a dia; perguntas frequentes em acordeão; botão de orçamento que abre o WhatsApp com mensagem pronta |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 com ScrollTrigger (npm) | Vite + JavaScript puro + GSAP com ScrollTrigger (npm) |
| [CRITÉRIOS_DE_ACEITAÇÃO] | o acordeão abre e fecha com Enter; o menu fecha com Esc | o botão de orçamento abre o WhatsApp com o nome do destino na mensagem |

## Prompt (copiar e colar)

```text
CONTEXTO
Estou construindo o site de [NOME_DA_MARCA], do segmento [SEGMENTO].
Público: [PÚBLICO_ALVO]. Stack: [STACK].
A página já tem as seções principais e os ativos (imagens, vídeo, fontes) integrados.
Antes de mexer, leia o CLAUDE.md, o index.html e os arquivos de src/.
Sou iniciante: explique termos técnicos em uma linha.

OBJETIVO
Adicionar estas interações: [FUNCIONALIDADES].
Cada interação deve dar resposta visual imediata e funcionar com mouse, toque e teclado,
respeitando quem prefere menos movimento.

RESTRIÇÕES
- Não mude textos, cores, fontes nem a animação principal de scroll, a menos que eu peça.
- Não instale bibliotecas novas. Use HTML semântico, CSS e JavaScript puro.
  Se o projeto já usa GSAP, ele pode ser usado em micro-animações.
- Use <button> para ações e <a> para navegação. Nada de <div> clicável.
- Não sequestre o scroll: nada de travar a rolagem ou mudar a velocidade dela.
- Uma interação por vez: faça, me explique como testar e espere meu OK antes da próxima.

FERRAMENTAS PERMITIDAS
- Ler e editar arquivos do projeto.
- Rodar npm run dev e npm run build.
- Não rodar git commit, git push nem instalar pacotes sem me perguntar.

REQUISITOS TÉCNICOS
- Estados visíveis em todo elemento interativo: hover (só em telas com mouse, dentro de
  @media (hover: hover)), :focus-visible, ativo e desabilitado.
- Teclado: ordem de Tab lógica; Enter e Espaço acionam botões; Esc fecha menu e modal e
  devolve o foco ao botão que abriu.
- Botões que abrem e fecham conteúdo usam aria-expanded e aria-controls.
- Toque: área de clique de pelo menos 44 x 44 px no celular.
- Movimento: transições curtas (150 a 300 ms) em transform e opacity. Dentro de
  @media (prefers-reduced-motion: reduce), a mudança acontece sem animação.
- Acordeão: prefira <details> e <summary> se atenderem ao visual.
- Formulário (se houver): rótulo visível em cada campo, validação nativa (required,
  type="email"), mensagem de erro em texto. Site estático não tem servidor: o envio vai
  para um link (WhatsApp, e-mail) ou para um serviço de formulário que eu vou escolher.
  Nunca coloque chave de API no front-end.
- Organização: uma função ou um arquivo por interação em src/, seguindo a estrutura que
  já existe. Sem variáveis globais soltas.

RESULTADO ESPERADO
- As interações funcionando na página.
- Um resumo curto: o que mudou, em quais arquivos e como testar cada interação.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- Tudo funciona só com teclado (Tab, Shift+Tab, Enter, Espaço, Esc).
- Nenhum erro no console do navegador.
- Funciona em 390 px (celular) e 1440 px (notebook), sem rolagem horizontal.
- Com "reduzir movimento" ligado, nada pula nem some: só não anima.
- npm run build termina sem erro.

COMO VALIDAR
Depois de cada interação, me diga exatamente o que clicar, o que apertar no teclado e o
que eu devo ver. Rode o build e me mostre o fim da saída.
```

## Versão curta (para o slide)

```text
Adicione ao site de [NOME_DA_MARCA]: [FUNCIONALIDADES].
Uma interação por vez. Use <button> e <a>, estados de hover e foco,
teclado (Tab, Enter, Esc), área de toque de 44 px, transições curtas
e versão sem movimento. Sem bibliotecas novas.
No fim, diga como testar cada uma.
```

## Resultado esperado e validação

Ao final, cada interação da lista funciona e o Claude explica como testar. Confira você mesmo:

| O que conferir | Como |
|---|---|
| Mouse | Passe o mouse e clique em cada elemento. Deve haver mudança visível (cor, sombra, leve movimento). |
| Teclado | Clique na barra de endereço e aperte Tab várias vezes. O contorno de foco aparece em cada item, na ordem da página. Enter abre, Esc fecha. |
| Celular | No Chrome, F12 e depois Ctrl+Shift+M (modo responsivo). Escolha 390 px de largura. Nada pode passar da borda. |
| Menos movimento | No DevTools, Ctrl+Shift+P, digite `reduced motion` e escolha **Emulate CSS prefers-reduced-motion: reduce**. As interações continuam funcionando, sem animar. |
| Console | Aba Console do DevTools sem mensagens vermelhas. |
| Build | Rode no terminal e veja se termina sem erro. |

```bash
npm run build
```

Para ver o que mudou no código: `git diff --stat` (lista de arquivos) e `git diff` (linhas alteradas), ou `/diff` dentro do Claude Code. Os atalhos do DevTools estão em [`../guia-de-comandos.md`](../guia-de-comandos.md), seção 5.

## Quando adaptar

- **Loja de verdade (carrinho e pagamento):** o carrinho precisa guardar o estado e o pagamento precisa de servidor e de um provedor de pagamento. Isso não é "um botão a mais": muda a arquitetura (veja a etapa 26).
- **Restaurante:** o botão de pedido costuma levar a um app de delivery. Um mapa embutido (iframe) pesa e rouba o scroll no celular: use `loading="lazy"` ou só um link "Como chegar".
- **Portfólio com galeria:** a imagem ampliada (lightbox) precisa funcionar com setas e Esc e prender o foco dentro dela. O elemento nativo `<dialog>` ajuda.
- **Formulário com dados pessoais:** peça só o necessário e avise para onde os dados vão (LGPD). Um serviço de formulário de terceiros também recebe esses dados.
- **Site já muito animado (como o SONORA):** as interações devem ser discretas para não competir com a animação principal.
- **Muitos itens filtráveis (destinos, cardápio, produtos):** guarde os dados num arquivo JSON separado do HTML. Se a lista mudar toda semana, pense numa planilha ou num CMS como fonte (etapa 26).

## Problemas comuns

- **O hover "gruda" no celular depois do toque** → peça para colocar os estilos de hover dentro de `@media (hover: hover)`.
- **O menu abre, mas não fecha com Esc, ou o foco fica escondido atrás dele** → peça um ouvinte de Esc e que o foco volte ao botão que abriu o menu.
- **O clique não faz nada no elemento novo** → abra o Console. Em geral o script rodou antes de o elemento existir, ou o seletor está errado. Cole o erro para o Claude (etapa 16).
- **Funciona no mouse e é impossível no teclado** → alguém tirou o contorno de foco (`outline: none`). Peça para restaurar com `:focus-visible`.
