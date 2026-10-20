# 01 · Pesquisa e definição do negócio

> Transformar uma ideia solta ("quero um site de hamburgueria") num brief de uma página: o que é o negócio, para quem é o site, qual ação o visitante deve tomar e como vamos saber se deu certo.
>
> Ao vivo no workshop: sim (slide P1, 5 min). A turma escolhe o tema do Projeto B e o Roberto preenche as variáveis na tela.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, com a pasta do projeto aberta (ou Claude Code CLI na pasta) | Sonnet 5.5 | medium (low se você só quer organizar ideias que já tem) | Manual (ou Plan) | nenhuma | nenhum (Google Drive opcional, se o material da marca estiver lá) |

Por quê:

- **Sonnet 5.5:** pesquisar e organizar texto não pede o modelo mais caro. Na API, ele custa metade do Opus 5.5 (US$ 2/10 contra 4/20 por milhão de tokens de entrada/saída).
- **Effort medium:** basta para comparar concorrentes e resumir. Effort é quanto o modelo "pensa" antes de responder. Não é temperatura (temperatura não se ajusta no Claude Code).
- **Manual:** o Claude pede licença antes de pesquisar na web e antes de criar o arquivo. Você acompanha cada passo. Plan também serve: ele pesquisa e só escreve depois que você aprova.
- **Sem skill:** nesta etapa, o que importa são as suas respostas, não um estilo pronto.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA (marca fictícia) | ANDARA Viagens (marca fictícia) |
| [SEGMENTO] | áudio premium (eletrônicos de consumo) | turismo de natureza |
| [PRODUTO_OU_SERVIÇO] | headphone over-ear sem fio, com cancelamento de ruído | roteiros de 7 a 10 dias em grupos pequenos (até 12 pessoas) pela Patagônia e pela Chapada Diamantina |
| [PÚBLICO_ALVO] | adultos de 25 a 40 anos que trabalham com foco ou viajam muito e pagam mais por design e engenharia | adultos de 28 a 45 anos que querem natureza com conforto, sem planejar tudo sozinhos |
| [OBJETIVO_DO_SITE] | apresentar o fone e levar o visitante à lista de espera (demonstrativa, sem coletar dados) | levar o visitante a pedir orçamento pelo WhatsApp |
| [REFERÊNCIAS] | páginas de produto da Apple (AirPods Pro e Max), Sonos Ace, Nothing Headphone (1) | sites de turismo premiados no Awwwards (ex.: Tourisme Sumène Artense) e revistas de viagem impressas |

## Prompt (copiar e colar)

```text
CONTEXTO
Vou criar um site para [NOME_DA_MARCA], do segmento [SEGMENTO], que oferece [PRODUTO_OU_SERVIÇO].
O público principal é [PÚBLICO_ALVO].
O site deve [OBJETIVO_DO_SITE].
Referências de que gosto: [REFERÊNCIAS].
Se algum desses campos estiver vazio ou vago, não invente: pergunte.

OBJETIVO
Montar um brief de negócio de uma página. Ele vai guiar todas as próximas etapas
(requisitos, plano, identidade visual e código).

RESTRIÇÕES
- Ainda não escreva código e não crie nada além de docs/brief.md.
- Antes de escrever, faça no máximo 5 perguntas, todas de uma vez.
  Prefira perguntas de múltipla escolha.
- Separe fato de suposição: marque cada afirmação como [fato], [suposição] ou [a confirmar].
- Não invente números (preço, tamanho de mercado, estatística).
  Dado tirado da web vem com o link; sem fonte, escreva "a confirmar".
- Se a marca for fictícia, confira se o nome não coincide com uma marca conhecida
  do mesmo segmento e me avise.
- Não crie depoimentos nem avaliações como se fossem reais.

FERRAMENTAS PERMITIDAS
- Pesquisa na web (peça licença antes), para olhar no máximo 3 concorrentes ou referências.
- Criar um único arquivo: docs/brief.md.
- Não instale pacotes e não rode comandos que alterem o projeto.

REQUISITOS TÉCNICOS
- Markdown simples, português do Brasil, frases curtas.
- No máximo uma página (cerca de 400 palavras).

RESULTADO ESPERADO (docs/brief.md)
1. O negócio em uma frase: o quê, para quem e por que é diferente.
2. Público-alvo: quem é, o que quer e 3 coisas que o impedem de comprar ou contratar.
3. Objetivo do site: UMA ação principal e, se houver, até 2 ações secundárias.
4. Proposta de valor: 3 mensagens que o site precisa comunicar.
5. Concorrentes e referências (tabela): o que fazem bem e o que vamos fazer diferente.
6. Tom de voz: 3 adjetivos e 3 coisas que a marca nunca diria.
7. Como saberemos que o site deu certo (uma métrica simples,
   ex.: cliques no botão principal).
8. Perguntas em aberto.

CRITÉRIOS DE ACEITAÇÃO
- Existe exatamente uma ação principal para o visitante.
- Toda afirmação sobre mercado ou concorrente tem link ou está marcada [a confirmar].
- Quem não conhece o projeto entende o negócio lendo só o item 1.

COMO VALIDAR
- No fim, mostre o brief e liste à parte tudo o que é [suposição] ou [a confirmar].
- Diga o que eu preciso conferir pessoalmente antes de passar para os requisitos.
```

## Versão curta (para o slide)

```text
Quero um site para [NOME_DA_MARCA] ([SEGMENTO]), que oferece [PRODUTO_OU_SERVIÇO] para [PÚBLICO_ALVO]. Objetivo: [OBJETIVO_DO_SITE]. Antes, faça até 5 perguntas. Depois crie docs/brief.md (1 página): negócio em uma frase, público, UMA ação principal, 3 mensagens, concorrentes, tom de voz. Sem código. Marque suposições e não invente números.
```

## Resultado esperado e validação

O que deve aparecer:

1. Primeiro, um bloco de até 5 perguntas. Responda na mesma conversa.
2. Depois, um pedido de licença para criar `docs/brief.md` (no modo Manual). Aprove.
3. O arquivo com as 8 seções e uma lista final de suposições.

Como conferir:

- Abra `docs/brief.md` no editor ou rode `/diff` para ver o que foi criado.
- Procure a seção 3: tem **uma** ação principal? Se tiver três, peça para escolher.
- Clique nos links dos concorrentes. Link quebrado ou inventado: peça para marcar como [a confirmar].
- Leia só o item 1 em voz alta. Se a turma não entender, o brief ainda não está pronto.

## Quando adaptar

- **Negócio real, com clientes de verdade:** a IA não substitui conversar com 2 ou 3 clientes. Use o brief como roteiro de entrevista e depois atualize o arquivo com o que ouviu.
- **Negócio local (restaurante, cafeteria, barbearia):** o brief precisa de endereço, horário, área de entrega e canais (WhatsApp, Instagram, app de delivery). A ação principal costuma ser "pedir" ou "reservar", e a busca local pesa mais que o visual.
- **Loja virtual de verdade:** inclua catálogo, frete, trocas e forma de pagamento. Isso já avisa que um site estático não basta: vai precisar de plataforma de loja ou backend.
- **Produto que ainda não existe (como o SONORA):** o objetivo vira validar interesse (lista de espera). Não prometa preço, prazo ou especificação que ninguém confirmou.
- **Portfólio pessoal:** o público é recrutador ou cliente, a ação é "entrar em contato" e a prova são os projetos. Concorrentes viram "portfólios que admiro".
- **Setor com regras de publicidade (saúde, finanças, educação):** acrescente uma seção "o que não podemos prometer" e confirme com quem entende do setor.

## Problemas comuns

- **O Claude escreve três páginas e já sugere código** → repita "uma página, sem código" ou troque para o modo Plan.
- **Aparecem números sem fonte ("o mercado cresce 23% ao ano")** → peça o link ou a marcação [a confirmar]. Número sem fonte não entra no site.
- **Ele não faz perguntas e inventa o público** → responda "pare e faça as 5 perguntas antes de escrever".
- **Sem internet ou pesquisa bloqueada** → peça para trabalhar só com o que você informou e marcar todo o resto como [suposição].

## Exemplo ruim × bom

**Ruim:**

```text
Faz um site de hamburgueria bonito.
```

**Bom:**

```text
Quero um site para a Brasa Rasa (hamburgueria artesanal fictícia), que vende smash burgers para universitários de 18 a 25 anos do bairro. Objetivo: levar o visitante a pedir pelo WhatsApp. Antes, faça até 5 perguntas. Depois crie docs/brief.md (1 página): negócio em uma frase, público, UMA ação principal, 3 mensagens, concorrentes, tom de voz. Sem código. Marque suposições e não invente números.
```

Por que o bom funciona melhor:

- **Dá contexto:** marca, produto e público. O Claude para de chutar o básico.
- **Define o objetivo:** "pedir pelo WhatsApp" decide o resto do site (botão, posição, texto).
- **Limita o formato:** uma página, oito seções. Você consegue ler e corrigir em 2 minutos.
- **Põe restrições:** sem código e sem números inventados. Evita o Claude "sair fazendo".
- **Abre espaço para perguntas:** o modelo tira dúvidas antes, em vez de adivinhar depois.
- O ruim deixa tudo em aberto. "Bonito" não dá para conferir, e o resultado sai genérico.
