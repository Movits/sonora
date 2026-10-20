# 15 · Revisão de design

> Olhar a página pronta com olho de revisor (hierarquia, tipografia, contraste, espaçamento, movimento, celular) e sair com uma lista curta e priorizada do que mudar, antes de mexer em qualquer arquivo.
>
> Ao vivo no workshop: sim (slide P8). O Roberto roda a skill `/review-landing` no SONORA e o prompt abaixo no Projeto B.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, numa sessão nova, na pasta do projeto (ou Claude Code CLI), com o site rodando em `npm run dev` | Opus 5.5 | high | Plan (ou Manual) | `/review-landing` (skill do projeto SONORA); opcional: `web-design-guidelines` (vercel-labs, MIT) | nenhum |

Por quê:

- **Opus 5.5, high:** revisar é julgar e justificar, não só listar. Vale o modelo mais forte e mais tempo de raciocínio.
- **Plan:** a revisão não deve editar nada. No Plan, o Claude lê e propõe; só edita depois que você aprova. No Manual, ele pede licença antes de qualquer edição.
- **Sessão nova:** quem construiu a página tende a defender o que fez. Uma conversa limpa (`/clear` ou sessão nova) revisa com olhos de fora.
- **`/review-landing`:** é uma skill do projeto, uma "receita de revisão" escrita em `.claude/skills/review-landing/SKILL.md`. Abra o arquivo antes de usar para ver exatamente o que ela confere. Para usar no seu projeto, copie a pasta `review-landing/` para o `.claude/skills/` do seu projeto e abra uma sessão nova; ela deve aparecer em `/skills` (conferir na sua versão).
- **`web-design-guidelines`:** opcional. Baixa as regras da internet quando roda, então precisa de rede.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [PÚBLICO_ALVO] | adultos de 25 a 40 anos que trabalham com foco ou viajam muito | adultos de 28 a 45 anos que querem natureza com conforto |
| [OBJETIVO_DO_SITE] | apresentar o fone e levar o visitante à lista de espera (demonstrativa, sem coletar dados) | levar o visitante a pedir orçamento pelo WhatsApp |
| [ESTILO_VISUAL] | escuro, técnico e cinematográfico; muito espaço vazio; o produto é o protagonista | claro, editorial e fotográfico; calmo, com sensação de ar livre |
| [PALETA_DE_CORES] | grafite quase preto, cobre polido (destaque), cinza quente claro (texto) | areia, verde-musgo, azul-profundo e um laranja de pôr do sol só para o botão principal |
| [REFERÊNCIAS] | páginas de produto da Apple (AirPods Pro e Max), Sonos Ace, Nothing Headphone (1) | sites de turismo premiados no Awwwards (ex.: Tourisme Sumène Artense) |
| [CRITÉRIOS_DE_ACEITAÇÃO] | o visitante entende o produto e acha o botão da lista de espera em 5 segundos; texto legível sobre o fundo escuro | o botão de orçamento aparece na primeira tela do celular; fotos não cortam o assunto principal |

## Prompt (copiar e colar)

Se você tem a skill no projeto, mantenha a primeira linha (`/review-landing`). Se não tem, apague essa linha: o prompt funciona sozinho.

```text
/review-landing

CONTEXTO
Site de [NOME_DA_MARCA]. Público: [PÚBLICO_ALVO]. Objetivo: [OBJETIVO_DO_SITE].
Estilo combinado: [ESTILO_VISUAL]. Paleta: [PALETA_DE_CORES]. Referências: [REFERÊNCIAS].
O site roda em npm run dev. Você não construiu esta página: revise como alguém de fora.

OBJETIVO
Fazer uma revisão de design da landing page e me entregar uma lista priorizada de
melhorias, com o motivo de cada uma. Ainda não altere nenhum arquivo.

RESTRIÇÕES
- Só leitura nesta fase. Não edite arquivos do projeto e não rode git. A única exceção é uma
  pasta de capturas ignorada pelo git (a skill /review-landing usa review-landing/).
- No máximo 10 itens. Prefira poucos itens com impacto a muitos detalhes.
- Respeite a identidade combinada (estilo, paleta, fontes). Não proponha redesenho
  completo nem troca de marca.
- Seja específico: diga onde (seção, elemento, arquivo:linha se souber), o valor atual
  e o valor proposto (tamanho em px ou rem, cor em hex, espaçamento, duração).
- Separe fato (medido ou visto) de opinião (gosto). Marque a opinião como [opinião].

FERRAMENTAS PERMITIDAS
- Ler o código (index.html, src/, estilos) e os prints que eu anexar.
- Se o projeto tiver a skill /review-landing, siga o passo a passo dela (ela roda um script
  de checagem com Playwright; em Plan ou Manual o Claude pede licença antes de rodar).
- Sem a skill, mas com Playwright: você pode me propor um script para tirar prints em
  390, 768 e 1440 px, salvos numa pasta ignorada pelo git. Peça antes de rodar.

REQUISITOS TÉCNICOS (o que revisar)
1. Primeira impressão: em 5 segundos dá para entender o que é, para quem é e o que fazer?
2. Hierarquia: um título principal por seção, ordem de leitura clara, uma ação principal.
3. Tipografia: tamanhos, peso, altura de linha, títulos com mais de 2 linhas,
   linhas de texto longas demais.
4. Contraste: texto sobre fundo e sobre imagem; aponte pares que pareçam abaixo do
   mínimo da WCAG AA (4,5:1 para texto normal) e diga como medir.
5. Espaçamento e alinhamento: ritmo entre seções, margens laterais no celular.
6. Consistência: botões, cores e cantos iguais em toda a página.
7. Imagens e vídeo: qualidade, recorte no celular, peso aparente.
8. Movimento: cada animação tem propósito? Há excesso? Com prefers-reduced-motion
   o conteúdo continua todo visível?
9. Celular: 390 px sem rolagem horizontal, botões fáceis de tocar.
10. Estados de interação: hover, foco visível, links que parecem links.

RESULTADO ESPERADO
Com a skill /review-landing: o relatório no formato dela (Área | Nota 0-10 | Evidência |
Correção sugerida, as 3 prioridades e o que não deu para verificar).
Sem a skill: uma tabela com as colunas
# | Prioridade (alta/média/baixa) | Onde | Antes | Depois | Por quê
Depois da tabela: 3 coisas que estão boas e devem ficar como estão.
Termine perguntando quais itens devo aprovar. Pare aí.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- Todo item tem local, valor atual, valor proposto e motivo.
- Nenhum arquivo do projeto foi alterado (só a pasta de capturas, ignorada pelo git).

COMO VALIDAR
Para cada item, diga como eu confiro no navegador (onde olhar, que largura usar,
que ferramenta do DevTools abrir).
```

Depois que você escolher os itens, troque o modo para **Accept edits** e peça: *"Aplique só os itens 1, 3 e 4, um de cada vez. Depois de cada um, me diga o que conferir."*

## Versão curta (para o slide)

```text
/review-landing
Revise a landing de [NOME_DA_MARCA] para [PÚBLICO_ALVO]. Só leitura.
Até 10 itens numa tabela: Prioridade | Onde | Antes | Depois | Por quê.
Respeite [ESTILO_VISUAL] e [PALETA_DE_CORES]. Valores exatos (px, hex, ms).
Inclua celular (390 px) e reduced-motion. Pare e espere eu aprovar.
```

## Resultado esperado e validação

O que deve aparecer:

1. Uma tabela de até 10 itens, com prioridade, local, antes, depois e motivo.
2. Três pontos fortes que devem ficar.
3. Uma pergunta final: quais itens aplicar. Nenhum arquivo alterado.

Como conferir:

- Rode `git status`. Depois da revisão, nada deve aparecer como modificado.
- Abra o site e confira 2 ou 3 itens da tabela com seus próprios olhos. Se um item não bate com o que você vê, peça a evidência.
- **Contraste:** no DevTools, aba Elements, clique no texto e passe o mouse sobre a cor no painel Styles. O Chrome mostra a razão de contraste (conferir na sua versão). Outra opção: a auditoria de acessibilidade do Lighthouse.
- **Celular:** F12, Ctrl+Shift+M, 390 px.
- **Menos movimento:** Ctrl+Shift+P no DevTools, `reduced motion`.
- **Antes e depois:** tire um print antes de aplicar e outro depois. Ponha os dois lado a lado na PR (etapa 21).

Depois de aplicar os itens aprovados, rode o build e faça um commit por item ou por grupo pequeno (etapa 20):

```bash
npm run build
git status
```

## Quando adaptar

- **Marca com manual de identidade:** revise contra o manual (cores, fontes, uso do logo), não contra o gosto do modelo. Cole as regras do manual no CONTEXTO.
- **Restaurante:** cardápio legível no celular, preço visível, horário e endereço fáceis de achar. Foto de comida pede cor fiel: cuidado com filtros escuros.
- **Loja:** a revisão precisa olhar sinais de confiança (preço, frete, troca, contato). Beleza não compensa falta de informação.
- **Portfólio:** o trabalho é a estrela. A interface deve aparecer menos que os projetos.
- **Público mais velho ou leitura longa (blog, institucional):** aumente o peso dos itens de tipografia e contraste.
- **Site muito animado (como o SONORA):** confira o desempenho no notebook mais fraco que você tiver e a versão com menos movimento. Um projetor com pouco brilho apaga fundos muito escuros.

## Problemas comuns

- **Revisão genérica ("melhore a tipografia")** → responda "diga o elemento, o valor atual e o valor proposto".
- **O Claude quer redesenhar tudo** → reforce "no máximo 10 itens, mantendo a identidade" e use o modo Plan.
- **Duas skills de design com regras opostas** (uma pede degradês, outra proíbe) → use uma só skill de design por projeto.
- **A revisão fala de algo que você já mudou** → o navegador mostrou a versão antiga. Recarregue com Ctrl+Shift+R e tire prints novos.
