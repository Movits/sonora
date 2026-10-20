# 26 · Melhorias futuras

> Depois que o site está no ar, olhar com calma o que melhorar e transformar isso numa lista curta e priorizada (o backlog), separando o que é ajuste simples do que muda a arquitetura do projeto (servidor, banco, pagamento, login).
>
> Ao vivo no workshop: não (pode fechar a aula como "o que vem depois"). Material para continuar o seu projeto em casa.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI), com o site publicado aberto no Chrome | Opus 5.5 | high | Plan | opcional: `web-design-guidelines` (vercel-labs, MIT; precisa de internet) | opcional: Notion, para virar cartões depois da sua aprovação |

Por quê:

- **Opus 5.5, high:** é planejamento. Pesar impacto, esforço e risco, e perceber quando uma ideia muda a arquitetura, pede raciocínio.
- **Plan:** o Claude lê e propõe; nada é editado. Você aprova o plano antes de qualquer mudança.
- **Notion (opcional):** os itens aprovados viram cartões no quadro (etapa 24), sempre com "pode gravar".
- **Nunca use Bypass.**

**Analogia:** é a lista de reforma depois da mudança para a casa nova. Trocar a lâmpada é rápido; mexer na parede exige engenheiro. A lista precisa dizer qual é qual.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [SEGMENTO] | áudio premium (eletrônicos de consumo) | turismo de natureza |
| [PÚBLICO_ALVO] | adultos de 25 a 40 anos que trabalham com foco ou viajam muito | adultos de 28 a 45 anos que querem natureza com conforto |
| [OBJETIVO_DO_SITE] | apresentar o fone e levar o visitante à lista de espera (demonstrativa, sem coletar dados) | levar o visitante a pedir orçamento pelo WhatsApp |
| [FUNCIONALIDADES] | hero com o produto; exploded view; seção Engenharia; especificações; chamada final para a lista de espera | destinos em cards; roteiro dia a dia; mapa da rota; perguntas frequentes; botão de orçamento pelo WhatsApp |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 com ScrollTrigger (npm), Playwright, GitHub Pages | Vite + JavaScript puro + GSAP com ScrollTrigger (npm), GitHub Pages |
| [CRITÉRIOS_DE_ACEITAÇÃO] | cada melhoria tem um critério testável; nenhuma quebra o reduced-motion | cada melhoria tem um critério testável; o botão de orçamento continua na primeira tela do celular |

## Prompt (copiar e colar)

```text
CONTEXTO
Site de [NOME_DA_MARCA], do segmento [SEGMENTO], para [PÚBLICO_ALVO].
Objetivo do site: [OBJETIVO_DO_SITE]. Hoje ele tem: [FUNCIONALIDADES].
Stack: [STACK]. Endereço publicado: <link do site>.
Relatório do Lighthouse (se eu tiver rodado): <cole aqui o resumo ou "não rodei">.
Leia o README, o CLAUDE.md, a pasta docs/ (se existir) e o código de src/.

OBJETIVO
Montar um backlog curto e priorizado de melhorias, separando o que é ajuste simples
do que muda a arquitetura do projeto.

RESTRIÇÕES
- Modo Plan: só leitura. Não edite arquivos, não instale nada, não crie cartões.
- No máximo 12 itens. Prefira o que ajuda o objetivo do site.
- Não invente números (acessos, conversão, preço). Custo de serviço só com a fonte e
  a data; sem fonte, escreva "conferir".
- Marque com [muda a arquitetura] tudo que exigir servidor, banco de dados, login,
  pagamento, CMS ou serviço pago, e explique em uma frase por quê.
- Marque com [LGPD] tudo que coletar ou guardar dado pessoal.

FERRAMENTAS PERMITIDAS
- Ler o código e os documentos do projeto.
- Pesquisa na web só para confirmar limites e preços de serviços (me peça antes).

REQUISITOS TÉCNICOS (áreas para olhar)
1. Desempenho: peso de imagens, vídeo e quadros; carregamento no celular e em rede lenta.
2. Acessibilidade: contraste, foco, textos alternativos, versão com menos movimento.
3. Busca e compartilhamento: título e descrição da página, imagem de prévia ao
   compartilhar (Open Graph), favicon.
4. Conteúdo e conversão: a ação principal está clara? O que falta para o visitante
   decidir (prova, preço, perguntas frequentes)?
5. Medição: como saber se o site cumpre o objetivo (ex.: contar cliques no botão
   principal), com aviso de cookies e respeito à LGPD.
6. Manutenção: testes que faltam, documentação, código repetido.
7. Próximo nível: idiomas, domínio próprio, painel para editar conteúdo, servidor.

RESULTADO ESPERADO
Tabela:
# | Melhoria | Por que ajuda o objetivo | Esforço (P/M/G) | Impacto (baixo/médio/alto) | Muda a arquitetura? | Critério de aceitação | Etapa da biblioteca para fazer
Depois: as 3 que eu deveria fazer primeiro (maior impacto com menor esforço) e o motivo.
Por fim, pergunte se quero transformar as 3 em cartões no Notion. Pare.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- Todo item tem critério de aceitação testável e a etapa indicada (ex.: 14, 17, 25).
- Todo item que muda a arquitetura está marcado e explicado.

COMO VALIDAR
Para cada uma das 3 primeiras, diga como eu meço o antes e o depois
(Lighthouse, teste, ou o que olhar no navegador).
```

## Versão curta (para o slide)

```text
(Modo Plan) Olhe o site de [NOME_DA_MARCA] no ar e o código.
Até 12 melhorias numa tabela: impacto, esforço, critério de aceitação
e etapa para fazer. Marque [muda a arquitetura] e [LGPD].
Sem números inventados. Indique as 3 primeiras e pare.
```

## Resultado esperado e validação

O que deve aparecer:

1. Uma tabela de até 12 melhorias, com esforço, impacto, critério e a etapa da biblioteca que resolve cada uma.
2. As 3 primeiras, com o motivo.
3. A pergunta sobre criar cartões. Nada alterado no projeto (`git status` limpo).

Como medir antes e depois:

- **Lighthouse:** F12, painel **Lighthouse** (pode estar no `>>`), escolha **Mobile** e analise o site publicado numa janela anônima. Guarde as notas de desempenho, acessibilidade, boas práticas e SEO. A nota varia um pouco a cada rodada: compare médias de 2 ou 3 rodadas.
- **Rede lenta:** aba Network, seletor de velocidade, e recarregue. Quanto tempo até o produto aparecer?
- **Testes:** cada melhoria aprovada ganha um teste quando der (etapa 17).

Para fazer as melhorias, volte às etapas: interações (14), revisão de design (15), testes (17), segurança (18) e o ciclo branch → commit → PR → revisão → merge → deploy → Notion (19 a 25).

## Quando adaptar

A mesma pergunta, "o que vem depois?", tem respostas de arquitetura diferentes para cada tipo de projeto:

- **Loja virtual de verdade:** precisa de catálogo, estoque, carrinho, pagamento (provedor com checkout próprio), frete, nota fiscal, política de troca e LGPD. Isso é outro projeto: plataforma de loja pronta ou backend próprio. O GitHub Pages não serve para loja.
- **Restaurante ou cafeteria:** cardápio que o dono edita sem programar (planilha ou CMS), horário, mapa, link de delivery ou de reserva. O pedido online costuma ficar com o app de delivery, não com o site.
- **Turismo (como a ANDARA):** datas, vagas e preço por saída mudam o tempo todo. Se isso entrar no site, vira dado (planilha, CMS ou banco), e reserva com pagamento exige sistema próprio ou de terceiros.
- **Portfólio:** adicionar projetos fica fácil com um arquivo de dados (JSON) ou um CMS leve. Estudos de caso pesam mais que efeitos.
- **Produto com animação pesada (como o SONORA):** no celular, menos quadros e imagens menores, ou uma composição estática. Uma versão 3D (Three.js) é bônus possível, mas pesa na GPU e exige um modelo 3D com peças separadas.
- **Site com login ou dados de usuário:** serviços como Supabase e Firebase têm plano grátis com limites (o Supabase Free pausa o projeto depois de 7 dias sem uso). Entram chaves, regras de acesso e LGPD: refaça a etapa 18 com rigor.
- **Site em vários idiomas:** textos separados do código e uma estrutura de páginas por idioma.

## Problemas comuns

- **Lista infinita, tudo "importante"** → limite a 12 itens e peça as 3 primeiras, com o motivo.
- **Ideias que mudam a natureza do projeto sem avisar ("é só pôr um login")** → exija a coluna "Muda a arquitetura?" com uma frase de explicação.
- **Custos e números inventados** → peça fonte e data, ou "conferir". Número sem fonte não vira decisão.
- **O backlog nunca vira trabalho** → transforme já as 3 primeiras em cartões no Notion (etapa 24), cada uma com critério de aceitação.
