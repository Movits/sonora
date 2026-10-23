# Oficina de Skills · WRW (23/10/2026)

Guia da oficina para a equipe: o que é uma skill, as 3 skills do kit e os 4 passos para usar, instalar, criar e
compartilhar uma skill **no site que você fez no workshop de 20/10**.

## Em 30 segundos

- **Skill** é uma pasta com um arquivo `SKILL.md`: um cabeçalho (`name` e `description`) e as instruções de uma tarefa
  que se repete. O Claude usa quando você digita `/nome` ou sozinho, quando o pedido combina com a `description`.
- Até ser usada, cada skill ocupa só o cabeçalho na conversa (cerca de 100 tokens, segundo a
  [documentação oficial](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)).
- Dentro do projeto (`.claude/skills/`), a skill vai junto no Git: quem clonar ou der `git pull` recebe.
- **Repetiu o mesmo pedido, com passos, mais de uma vez?** Vira skill. Regra que vale sempre vai no `CLAUDE.md`.
  O que tem que acontecer sempre, sem depender do modelo lembrar, é hook.

## Antes de começar

1. App Claude › aba **Code** › abra a pasta do seu site (onde fica o `package.json`).
2. No terminal: `git status` (limpo) e `git pull`.
3. Na caixa de mensagem, digite `/` e procure `review-landing` (ela veio na pasta base do workshop).

Sem o site de terça? Use a cópia do relógio do ensaio (o repositório é público e já traz a `review-landing`):

```powershell
git clone https://github.com/Movits/relogio-ensaio
cd relogio-ensaio
npm install
```

Quem usar o relógio faz o commit no O4 e pula o push (o repositório não é seu).

## Os 4 passos

| Passo | O que você faz | Prompt | Modelo · effort · modo |
|---|---|---|---|
| O1 | Roda a `/review-landing` no seu site e aplica UMA correção | [O1](prompts/O1-usar-uma-skill-pronta.md) | Opus 5.5 · high · Manual |
| O2 | Instala uma skill do kit, lendo antes | [O2](prompts/O2-instalar-uma-skill-do-kit.md) | Sonnet 5.5 · medium · Manual |
| O3 | Cria a sua skill a partir de um pedido que você repete | [O3](prompts/O3-criar-a-sua-skill.md) | Sonnet 5.5 · medium · Accept edits |
| O4 | Testa (sem barra e com barra) e manda para o GitHub | [O4](prompts/O4-testar-e-compartilhar.md) | Sonnet 5.5 · medium · Manual |

Cada arquivo tem o prompt completo, a versão curta (a do slide), o resultado esperado, como validar e os
problemas comuns.

**Dois avisos que vieram do ensaio de 23/10:**

- **Gravar dentro de `.claude/` é protegido:** no ensaio (pelo terminal), foi bloqueado mesmo em Accept edits, porque uma
  skill muda o que o Claude faz. No app, isso deve aparecer como um pedido de licença: leia o caminho e permita.
- **A `/review-landing` leva de 5 a 10 minutos** com Opus · high. Use o modo **Manual** e aprove o build, o preview e o
  script: no modo Plan, o Claude pode pular esses comandos e entregar o relatório sem as capturas.

## O kit

Três skills prontas, cada uma um único `SKILL.md`, sem scripts. Detalhes em [kit/](kit/).

| Skill | O que faz | Mexe em quê |
|---|---|---|
| [`divulgar`](kit/divulgar/SKILL.md) | escreve um post para Instagram, um para LinkedIn e uma mensagem de WhatsApp a partir do que está no site | só cria `docs/divulgacao.md` |
| [`antes-de-publicar`](kit/antes-de-publicar/SKILL.md) | roda build e testes, confere a base do Vite, peso, caminhos e segredos, e diz PRONTO ou NÃO PRONTO, com prova | nada (só confere) |
| [`revisar-textos`](kit/revisar-textos/SKILL.md) | revisa ortografia, clareza, tom e tamanho dos textos do site, numa tabela, e para | só os textos que você aprovar |

Como foram no ensaio (site do relógio, Claude Code 2.1.308): `antes-de-publicar` disse PRONTO em 1,5 min e, com a base
do Vite trocada de propósito, deu FALHA e NÃO PRONTO; `divulgar` escreveu os 3 textos em 1 min sem inventar preço nem
data; `revisar-textos` achou 8 itens e parou para pedir OK (3 tinham defeito: você confere sempre).

## Ideias de skill para o seu site

| Ideia | O pedido que você repete |
|---|---|
| `perguntas-frequentes` | "crie uma seção de perguntas frequentes no estilo do site, com 5 perguntas a partir do brief" (ensaiada: acordou sozinha) |
| `cabe-no-celular` | "depois desta mudança, confira em 390 px se nada passou da tela e se o botão aparece" |
| `versao-em-ingles` | "traduza esta seção para o inglês mantendo o tom da marca, sem mudar o layout" |
| `resumo-da-semana` | "leia os commits da semana e escreva um resumo de 5 linhas para a equipe" |
| `nova-foto` (avançado) | "coloque esta foto em public/img, em WebP, no tamanho certo e com texto alternativo; converta pelo Google Chrome que o Playwright do projeto já usa, sem instalar nada" |

Fora do site também vale: relatório da semana, proposta para cliente, resumo de reunião, checklist de entrega.

## Uma skill boa

1. **Description** com o que faz, quando usar e as frases que a equipe fala de verdade. É ela que faz a skill acordar.
2. **Curta:** só o que o Claude não faria sozinho (a documentação recomenda menos de 500 linhas; as do kit têm menos de 90).
3. **Regra com porquê:** com o motivo, ele acerta também o caso que a regra não previu.
4. **Formato fixo** da resposta e **limite claro** (o que ela não faz: editar sem OK, instalar, rodar git).
5. **Prova:** cada item com o comando e a saída; sem prova, "não verificado".
6. **Revisada por gente:** num estudo de 2026 ([SkillsBench](https://arxiv.org/abs/2602.12670)), skills escritas e
   revisadas por pessoas subiram o acerto de 33,9% para 50,5%; as geradas só pelo modelo, sem revisão, ficaram
   abaixo de não usar skill. A IA escreve o rascunho; você lê, testa e ajusta.

## Antes de instalar a skill de outra pessoa

A documentação oficial diz: *"Use Skills only from trusted sources"*. No Claude Code, uma skill tem o mesmo acesso a
arquivos e à rede que qualquer programa do seu computador.

- **Quem publicou?** Você, a Anthropic ou alguém que você conhece. Estrela e contador de instalações não provam nada.
- **Leia tudo:** o `SKILL.md`, os outros arquivos que ele manda ler e os scripts.
- **Sinais de alerta:** "pré-requisito" que manda rodar `curl`, decodificar base64 ou abrir ZIP com senha; ler `.env`
  ou chaves; mandar dados para fora.
- **Repositório clonado:** olhe `.claude/skills` e o campo `allowed-tools` antes de abrir o Claude nele.
- **Teste longe dos segredos:** numa pasta descartável, sem `.env` de verdade, no modo Manual.
- **Rodou algo estranho?** Remova a skill e troque senhas e chaves.

Casos reais de 2026 em marketplaces abertos: um [estudo](https://arxiv.org/abs/2601.10338) achou ao menos uma
vulnerabilidade em 26,1% de 31.132 skills públicas; a [Snyk](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub)
confirmou 76 skills maliciosas; a [Trail of Bits](https://blog.trailofbits.com/2026/06/03/the-sorry-state-of-skill-distribution/)
enganou scanners de segurança de marketplaces; e a [Zenity Labs](https://labs.zenity.io/post/attackers-target-agents-via-the-skill-supply-chain)
achou skills falsas com 1,7 milhão de instalações que roubavam chaves e `.env`. Cada número mede uma coisa diferente.

## Para levar a skill a outros lugares

- **Todos os seus projetos:** copie a pasta para `C:\Users\<você>\.claude\skills\` (skill pessoal).
- **O app Claude (chat):** compacte a pasta num `.zip` e envie em Personalizar › Skills (o nome do menu pode variar).
  Lá, campos que só o Claude Code entende (como `disable-model-invocation`) dão erro; `name` e `description` funcionam.
- **Outras ferramentas:** o formato é um padrão aberto ([agentskills.io](https://agentskills.io)). O GitHub Copilot lê
  inclusive as skills de `.claude/skills`, e o OpenAI Codex segue o mesmo padrão.

## Para saber mais

- Skills no Claude Code: https://code.claude.com/docs/en/skills
- Visão geral e segurança: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- Boas práticas de autoria: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- Skills da Anthropic (inclui a `skill-creator` e a `frontend-design`): https://github.com/anthropics/skills
- A skill da aula de 20/10: [.claude/skills/review-landing](../../.claude/skills/review-landing/)
