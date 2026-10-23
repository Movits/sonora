# O4 · Testar e compartilhar a sua skill

> Provar que a skill funciona (chamada pela barra e acordando sozinha pela descrição) e mandar para o GitHub,
> para quem clonar o projeto ganhar a skill junto.
>
> Na oficina: cerca de 7 min.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, numa sessão nova, na pasta do seu site | Sonnet 5.5 | medium | Manual (para o commit e o push) | a sua skill nova | nenhum |

Por quê:

- **Sessão nova:** o teste vale quando a conversa não sabe nada da criação da skill, igual a quem clonar o projeto amanhã.
- **Manual:** commit e push mudam o que vai para o GitHub. Você aprova cada comando.

## O teste em 3 tentativas

1. **Sem barra:** escreva uma das 3 frases da `description`, do jeito que você falaria. A skill acordou sozinha? O Claude costuma dizer que está usando a skill.
2. **Com barra:** `/[NOME_DA_SKILL]`. Funciona do começo ao fim?
3. **Se a 1 falhou:** peça o ajuste da `description` (prompt abaixo, primeira linha) e repita numa sessão nova.

## Variáveis

| Variável | Exemplo |
|---|---|
| [NOME_DA_SKILL] | nova-foto |
| [UMA_FRASE_SUA] | põe essa foto no site |

## Prompt (copiar e colar)

```text
Ajuste a description da skill [NOME_DA_SKILL] para ela ser usada quando eu disser
"[UMA_FRASE_SUA]". Não mude o resto do arquivo.

Depois:
1. Confira: o name bate com o nome da pasta? A description diz o que faz e quando usar?
2. Faça commit só de .claude/skills/[NOME_DA_SKILL], com a mensagem "feat: skill [NOME_DA_SKILL]".
3. Faça o push e me dê o link da pasta da skill no GitHub.
```

Se a skill já acordou sozinha na tentativa 1, apague a primeira frase do prompt e comece em "1. Confira".

## Versão curta (para o slide)

```text
Ajuste a description da skill [NOME_DA_SKILL] para ela ser usada
quando eu disser "[UMA_FRASE_SUA]". Não mude o resto.
Depois: confira se o name bate com a pasta, faça commit só de
.claude/skills/[NOME_DA_SKILL] ("feat: skill [NOME_DA_SKILL]"),
faça o push e me dê o link da pasta no GitHub.
```

## Resultado esperado e validação

O que deve aparecer:

1. Uma mudança só na linha `description:`.
2. Pedidos de licença para `git add`, `git commit` e `git push` (aprove um por um, lendo).
3. O link `https://github.com/<você>/<repositório>/tree/main/.claude/skills/<nome>`.

Como validar:

- Abra o link: o `SKILL.md` está lá.
- Quem clonar ou fizer `git pull` do seu projeto ganha a skill junto, sem instalar nada.
- O push também dispara o deploy do site (o workflow do Pages roda a cada push na `main`). A skill não muda o site: ela fica em `.claude/`, fora do `dist/`.

## Para levar a skill para outros lugares

- **Todos os seus projetos:** copie a pasta para `C:\Users\<você>\.claude\skills\` (skill pessoal).
- **O app Claude (chat):** compacte a pasta da skill num .zip e envie em Configurações › Capacidades › Skills (conferir o nome do menu na sua versão).
- **A equipe toda:** do jeito que você fez agora, dentro do projeto, no Git.

## Problemas comuns

- **O push foi recusado ("rejected"):** peça "faça git pull --rebase e tente o push de novo". Se aparecer conflito, pare e chame o Roberto.
- **A skill acorda em pedidos que não têm nada a ver:** a description está larga demais. Peça para ela dizer também quando **não** usar.
- **A skill nunca acorda sozinha, só com a barra:** a description não tem as palavras que você usa. Coloque as suas frases nela.
