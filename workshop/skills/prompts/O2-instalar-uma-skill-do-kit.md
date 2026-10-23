# O2 · Instalar uma skill do kit (lendo antes)

> Trazer para o seu projeto uma skill feita por outra pessoa, do jeito seguro: ler o que ela faz antes de
> instalar, instalar sem mudar nada e só então usar.
>
> Na oficina: cerca de 10 min. Cada um escolhe uma das três skills do kit.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do seu site | Sonnet 5.5 | medium | Manual | nenhuma (ela chega neste passo) | nenhum |

Por quê:

- **Manual:** o Claude pede licença antes de cada comando e de cada arquivo. Você vê o `curl` que baixa a skill e o arquivo que ele grava, e aprova um por um.
- **A pasta `.claude/` é protegida:** gravar nela sempre pede licença, mesmo em Accept edits, porque uma skill muda o que o Claude faz. É o cartão do passo 3: leia o caminho e permita.
- **Sonnet 5.5, medium:** baixar e copiar um arquivo é tarefa simples.
- **curl, não WebFetch:** a ferramenta de ler páginas da web resume o texto. Uma skill precisa chegar idêntica.

## O kit

| Skill | O que faz | Mexe em quê |
|---|---|---|
| `divulgar` | escreve um post para Instagram, um para LinkedIn e uma mensagem de WhatsApp a partir do que está no site | só cria `docs/divulgacao.md` |
| `antes-de-publicar` | roda build e testes, confere a base do Vite, peso, caminhos e segredos, e diz PRONTO ou NÃO PRONTO | nada (só confere) |
| `revisar-textos` | revisa ortografia, clareza, tom e tamanho dos textos do site, numa tabela | só os textos que você aprovar |

As três ficam em https://github.com/Movits/sonora/tree/main/workshop/skills/kit. Cada uma é um único arquivo `SKILL.md`, sem scripts.

## Variáveis

| Variável | Exemplo |
|---|---|
| [SKILL_DO_KIT] | divulgar (ou antes-de-publicar, ou revisar-textos) |

## Prompt (copiar e colar)

```text
Quero instalar no meu projeto a skill [SKILL_DO_KIT] do kit da oficina. É um arquivo só:
https://raw.githubusercontent.com/Movits/sonora/main/workshop/skills/kit/[SKILL_DO_KIT]/SKILL.md

1. Baixe com curl, um comando por vez (sem && nem ;), e me mostre o texto inteiro (não use WebFetch: ele resume o texto).
2. Diga em 3 linhas: o que a skill faz, que comandos ela roda e se mexe em arquivos ou na internet.
3. Espere o meu OK. Só então salve, sem mudar nada, em .claude/skills/[SKILL_DO_KIT]/SKILL.md.
```

Depois de instalada, numa **sessão nova** (Sonnet 5.5 · medium · Accept edits), digite `/` e procure a skill na lista. Use assim:

- `divulgar`: `/divulgar`
- `antes-de-publicar`: `/antes-de-publicar`
- `revisar-textos`: `/revisar-textos`

## Versão curta (para o slide)

```text
Quero instalar a skill [SKILL_DO_KIT] do kit da oficina:
raw.githubusercontent.com/Movits/sonora/main/workshop/skills/kit/[SKILL_DO_KIT]/SKILL.md
1. Baixe com curl (um comando por vez) e mostre o texto inteiro.
2. Diga em 3 linhas o que faz, que comandos roda e se usa a internet.
3. Espere o meu OK; depois salve em .claude/skills/[SKILL_DO_KIT]/SKILL.md.
```

## Resultado esperado e validação

O que deve aparecer:

1. Um pedido de licença para o `curl` (aprove) e o texto da skill na tela.
2. O resumo em 3 linhas. Confira com o que você leu: ele bate?
3. Depois do seu OK, um pedido de licença para criar a pasta e o arquivo `.claude/skills/<nome>/SKILL.md` (pode vir como um comando `mkdir` e `cp`). Permita: gravar dentro de `.claude/` sempre pede licença.

Como validar:

- No VS Code, a pasta `.claude/skills/<nome>/` aparece ao lado da `review-landing/`.
- Numa sessão nova, a skill aparece quando você digita `/`.
- Depois de usar: `divulgar` criou `docs/divulgacao.md`; `antes-de-publicar` terminou com PRONTO ou NÃO PRONTO e uma prova por item; `revisar-textos` mostrou a tabela e parou para perguntar.

## Problemas comuns

- **"curl não encontrado" ou erro de certificado:** peça "use o gh: gh api repos/Movits/sonora/contents/workshop/skills/kit/[SKILL_DO_KIT]/SKILL.md com o cabeçalho de conteúdo bruto".
- **A skill não aparece no `/`:** abra uma sessão nova. Se ainda não aparecer, confira o caminho: precisa ser `.claude/skills/<nome>/SKILL.md`, com o nome da pasta igual ao `name:` do arquivo.
- **O resumo do Claude não bate com o texto:** confie no texto. É exatamente para isso que você leu antes.
- **O curl demora ou dá "Connection reset" / "timed out":** é a rede. Peça "tente de novo o curl com --retry 3". Se o Claude disser que o link está errado, abra o link no navegador antes de acreditar.
- **Ele disse que não conseguiu salvar em `.claude/`:** o cartão de licença foi recusado ou fechado. Responda "pode tentar de novo" e clique em Permitir. Se o cartão não aparecer, rode você mesmo os dois comandos (`mkdir` e `cp`) que ele mostrar.
