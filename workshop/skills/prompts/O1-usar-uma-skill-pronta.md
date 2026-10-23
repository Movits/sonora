# O1 · Usar uma skill pronta: /review-landing no seu site

> Rodar uma skill que já está no seu projeto e ver o que muda em relação a um pedido solto: o mesmo roteiro,
> os mesmos critérios e o mesmo formato de relatório, toda vez.
>
> Na oficina: cerca de 10 min. O Roberto mostra primeiro, depois cada um roda no próprio site.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, numa sessão nova, na pasta do seu site (meu-site) | Opus 5.5 | high | Manual | `/review-landing` (já está em `.claude/skills/` do seu projeto) | nenhum |

Por quê:

- **Sessão nova:** quem construiu a página tende a defender o que fez. Uma conversa limpa revisa com olhos de fora.
- **Manual:** a skill precisa rodar o build e o script de checagem, que só gravam `dist/` e `review-landing/` (o git ignora as duas). No modo Plan, o Claude pode pular esses comandos e entregar o relatório sem capturas (aconteceu no ensaio de 23/10). Em Manual ele pede licença a cada comando: aprove o build, o preview e o `checar.mjs`. O prompt e a skill garantem que nenhum arquivo do projeto muda.
- **Opus 5.5, high:** revisar é julgar e justificar. Se o seu plano estiver perto do limite de uso, use Sonnet 5.5, medium.
- **A skill já está aí:** a pasta base do workshop trouxe `.claude/skills/review-landing/`. Antes de rodar, abra o `SKILL.md` no VS Code e leia o cabeçalho: skill não é mágica, é um texto que dá para ler.

## Variáveis

| Variável | Relógio (ensaio) | O seu site |
|---|---|---|
| (nenhuma) | cole como está | cole como está |

## Prompt (copiar e colar)

```text
/review-landing

Revise o meu site e pare no relatório.
Quero as 3 prioridades com arquivo:linha, o valor atual e o valor proposto.
Não altere nenhum arquivo.
```

Depois do relatório, escolha **uma** prioridade, troque para **Sonnet 5.5 · medium · Accept edits** e peça:
*"Aplique só a prioridade 1. Rode o build e os testes e me diga onde conferir no navegador."*
Se ele pedir licença duas ou três vezes para o mesmo build (comandos com `|` ou `>`), pode aprovar.

## Versão curta (para o slide)

```text
/review-landing
Revise o meu site e pare no relatório.
Quero as 3 prioridades com arquivo:linha, o valor atual e o proposto.
Não altere nenhum arquivo.
```

## Resultado esperado e validação

O que deve aparecer:

1. O Claude diz que está usando a skill `review-landing` e pede licença para rodar o build, subir o site e abrir o Chrome em 3 larguras. A revisão inteira leva de 5 a 10 minutos com Opus · high (ensaios: 5 min 22 s em 20/10 e 9 min 26 s em 23/10).
2. Uma tabela com nota de 0 a 10 por área (visual, responsividade, acessibilidade, performance, animações, código), as 3 prioridades e o que não deu para verificar.
3. A pergunta "quer que eu aplique alguma correção?". Ele para aí.

Como validar:

- No terminal: `git status` não mostra nenhum arquivo do projeto modificado (a pasta `review-landing/` com as capturas é ignorada pelo git).
- Abra uma captura em `review-landing/` (ex.: `celular-1.jpg`) e confira se ela mostra o seu site.

## Problemas comuns

- **"Playwright não encontrado" ou "Chrome não encontrado":** o script da skill precisa do `@playwright/test` (já vem na pasta base) e do Google Chrome instalado. Sem eles, peça a revisão sem a skill: apague a primeira linha do prompt.
- **A skill não aparece quando você digita `/`:** confira se a sessão está aberta na pasta do site (a raiz, onde fica o `package.json`).
- **Passou de 10 minutos:** troque para Sonnet 5.5 e peça só as 3 prioridades.
- **O relatório diz que não rodou o build ou o script, e não há capturas:** a sessão estava em Plan. Troque para Manual, peça de novo e aprove o build, o preview e o `checar.mjs`.
- **A revisão cita algo que você já mudou:** recarregue o navegador com Ctrl+Shift+R e peça de novo.
