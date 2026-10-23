# O3 · Criar a sua skill

> Transformar um pedido que você repete numa skill do seu projeto: um `SKILL.md` com nome, quando usar,
> passos e formato da resposta.
>
> Na oficina: cerca de 15 min. É o passo principal.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do seu site | Sonnet 5.5 | medium | Accept edits | opcional: `skill-creator` (se aparecer quando você digita `/`) | nenhum |

Por quê:

- **Sonnet 5.5, medium:** escrever um arquivo de texto curto e bem estruturado é tarefa do dia a dia.
- **Accept edits:** ele cria o `SKILL.md` sem pedir licença; você lê o arquivo no fim.
- **skill-creator:** é a skill oficial da Anthropic que ajuda a criar e testar skills. Se ela não aparecer na sua lista, tudo bem: este prompt já traz o que ela pediria.

## Escolha o que vai virar skill

Bom candidato: um pedido que você já fez mais de uma vez, que tem passos, e que precisa sair sempre do mesmo jeito. Ideias para o seu site:

| Ideia | O pedido que você repete |
|---|---|
| `nova-foto` | "coloque esta foto em public/img, em WebP, no tamanho certo e com texto alternativo" |
| `perguntas-frequentes` | "crie uma seção de perguntas frequentes no estilo do site, com 5 perguntas a partir do brief" |
| `cabe-no-celular` | "depois desta mudança, confira em 390 px se nada passou da tela e se o botão aparece" |
| `versao-em-ingles` | "traduza esta seção para o inglês mantendo o tom da marca, sem mudar o layout" |
| `resumo-da-semana` | "leia os commits da semana e escreva um resumo de 5 linhas para a equipe" |

## Variáveis

| Variável | Exemplo |
|---|---|
| [O_QUE_VOCE_REPETE] | coloque esta foto em public/img, em WebP, no tamanho certo e com texto alternativo |
| [NOME_DA_SKILL] | nova-foto (minúsculas e hífens, igual ao nome da pasta) |

## Prompt (copiar e colar)

```text
Quero transformar um pedido que eu repito numa skill deste projeto.
O pedido: "[O_QUE_VOCE_REPETE]"

Crie .claude/skills/[NOME_DA_SKILL]/SKILL.md com:
- no cabeçalho, name: [NOME_DA_SKILL] e uma description que diga o que a skill faz
  E quando usar, com 3 frases que eu diria para pedir isso;
- passos numerados, e em cada regra importante o porquê;
- o formato da resposta;
- o que a skill NÃO pode fazer (por exemplo: editar sem o meu OK, instalar pacote, rodar git).
Até 60 linhas, sem scripts. Leia o CLAUDE.md antes, para seguir as regras do projeto.
No fim, mostre o arquivo inteiro.
```

## Versão curta (para o slide)

```text
Transforme este pedido, que eu repito, numa skill do projeto:
"[O_QUE_VOCE_REPETE]"
Crie .claude/skills/[NOME_DA_SKILL]/SKILL.md com:
- description: o que faz e quando usar, com 3 frases que eu diria
- passos numerados, cada regra com o porquê
- o formato da resposta e o que ela NÃO pode fazer
Até 60 linhas, sem scripts. Mostre o arquivo no fim.
```

## Resultado esperado e validação

O que deve aparecer:

1. Um arquivo `.claude/skills/<nome>/SKILL.md` que começa com `---`, `name:` e `description:` e fecha com `---`.
2. Passos numerados, o formato da resposta e uma lista do que a skill não faz.
3. O arquivo inteiro na tela, com menos de 60 linhas.

Como validar:

- Leia a `description` em voz alta: ela diz **o que faz e quando usar**? Se não diz quando usar, o Claude não vai lembrar dela sozinho.
- O `name:` é igual ao nome da pasta, em minúsculas e com hífens.
- O teste de verdade é o O4: usar a skill numa sessão nova.

## Problemas comuns

- **Ele criou a skill em outro lugar** (por exemplo `~/.claude/skills`, a pasta pessoal): peça para mover para `.claude/skills/` do projeto, que é a que vai para o Git e para a equipe.
- **O arquivo ficou enorme:** peça "corte para 60 linhas; tire o que o Claude já sabe fazer sem ajuda".
- **A description ficou vaga** ("ajuda com fotos"): peça "reescreva a description com o que faz, quando usar e 3 frases de exemplo".
