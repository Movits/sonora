# 20 · Commits

> Gravar o trabalho em commits pequenos, um assunto por commit, com mensagem no padrão Conventional Commits em português que diz **o que** mudou e **por quê**, e com a coautoria do Claude registrada.
>
> Ao vivo no workshop: sim (slide P9, cerca de 6 min). No SONORA, o Roberto troca para a branch `fix/achados-review-landing`, já pronta com 3 commits, e mostra o log, uma mensagem com Por quê e Co-Authored-By e o diff. O plano de commits ao vivo só entra se sobrar tempo, como 4º commit.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI), na branch da tarefa | Sonnet 5.5 | low (medium se houver muitas mudanças misturadas) | Manual | nenhuma | nenhum |

Por quê:

- **Sonnet 5.5, low:** ler o `git diff` e escrever uma boa mensagem não exige o modelo mais caro.
- **Manual:** o commit grava o histórico do projeto. Você lê cada mensagem e aprova o `git commit` antes de ele rodar.
- **Coautoria:** quando o Claude Code faz o commit, ele costuma acrescentar no fim a linha `Co-Authored-By: Claude ... <noreply@anthropic.com>`, com o nome do modelo usado (conferir na sua versão). Assim, o histórico mostra o que foi feito com IA.
- **Nunca use Bypass.**

**Analogia:** cada commit é uma foto com legenda no álbum do projeto. "Foto 37" não diz nada. "Festa de 15 anos da Ana, antes do bolo" diz o quê e quando. A boa mensagem de commit é a legenda que você vai agradecer daqui a um mês.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [CRITÉRIOS_DE_ACEITAÇÃO] | `npm run build` sem erro; `npm test` passando; console sem erros | `npm run build` sem erro; console sem erros; botão de orçamento abre o WhatsApp |

## Prompt (copiar e colar)

```text
CONTEXTO
Projeto: site de [NOME_DA_MARCA]. Terminei uma parte da tarefa nesta branch e quero
gravar o trabalho. Uso Conventional Commits em português.

OBJETIVO
Organizar as mudanças pendentes em commits pequenos, com mensagens que expliquem
o que mudou e por quê.

RESTRIÇÕES
- Confirme que NÃO estou na main. Se estiver, pare e me avise (etapa 19).
- Um assunto por commit. Se o diff misturar coisas (ex.: um conserto e uma seção nova),
  separe em commits diferentes. Se dois assuntos estiverem no mesmo arquivo, não use
  git add -p (é interativo): faça um commit só e explique no corpo por que ficou junto.
- Adicione arquivos pelo nome (git add <arquivo>), não com git add -A às cegas.
- Se aparecer .env, chave, node_modules/ ou dist/ no git status, pare e me avise.
- Não faça git push, não use --amend em commit já enviado, não use --no-verify.

FERRAMENTAS PERMITIDAS
- git status, git diff, git diff --staged, git add <arquivo>, git commit, git log.
- npm run build e npm test, para preencher o "Como verifiquei".

REQUISITOS TÉCNICOS
- Formato da primeira linha: <tipo>: <descrição>
  - tipo: feat (coisa nova), fix (correção), docs (documentação), style (só visual
    ou formatação), refactor (reorganiza sem mudar o comportamento), test (testes),
    chore (manutenção, dependências, configuração);
  - descrição no presente, em português, começando com verbo em minúscula
    ("adiciona", "corrige", "remove"), sem ponto final, até cerca de 72 caracteres.
- Corpo (depois de uma linha em branco):
  - Por quê: o problema ou o pedido que motivou a mudança.
  - O que mudou: só se não estiver óbvio pela primeira linha.
  - Como verifiquei: os comandos que rodou e o resultado real (não invente).
- Última linha: a coautoria do Claude (Co-Authored-By), se a sua configuração
  não acrescentar sozinha.
- Mensagem com várias linhas: use vários -m ou um arquivo temporário com -F
  (fora do projeto ou apagado depois).
- Ordem: cada commit, sozinho, deve passar no npm run build (configuração e
  dependências antes do código que as usa). Se algum não puder compilar sozinho,
  avise no plano.

RESULTADO ESPERADO
1. Primeiro, um plano: para cada commit, a lista de arquivos e a mensagem completa.
   PARE e espere meu OK.
2. Depois do OK, os commits feitos e a saída de git log --oneline -5.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- Cada commit trata de um assunto só.
- Toda mensagem tem tipo, descrição curta e um "Por quê" que eu entendo sem ver o código.
- git status termina limpo, ou só com o que eu pedi para deixar de fora.

COMO VALIDAR
Me mostre git log -3 (com as mensagens completas) e git show --stat do último commit.
```

## Versão curta (para o slide)

```text
Faça os commits desta branch em Conventional Commits, em português.
Um assunto por commit; arquivos pelo nome.
Mensagem: "tipo: verbo + o quê" e, no corpo, Por quê e Como verifiquei
(comandos reais). Mostre o plano e espere meu OK.
Sem push, sem --no-verify.
```

## Resultado esperado e validação

O que deve aparecer:

1. Um plano com os commits propostos (arquivos e mensagem de cada um). Você aprova ou pede ajuste.
2. Os commits gravados e o histórico curto.

Como conferir:

```bash
git log --oneline -5      # um commit por linha, com o tipo na frente
git log -1                # a mensagem completa do último commit
git show --stat HEAD      # quais arquivos entraram no último commit
git status                # deve terminar limpo
```

Tipos mais usados:

| Tipo | Quando | Exemplo |
|---|---|---|
| `feat` | Coisa nova para quem usa o site | `feat: adiciona seção de perguntas frequentes` |
| `fix` | Correção de erro | `fix: corrige menu que não fechava no celular` |
| `docs` | Documentação | `docs: explica como rodar os testes no README` |
| `style` | Ajuste visual ou de formatação, sem mudar o comportamento | `style: aumenta o espaçamento entre as seções` |
| `refactor` | Reorganiza o código sem mudar o que ele faz | `refactor: separa o carregamento dos quadros em src/lib` |
| `test` | Testes | `test: confere o console limpo no celular` |
| `chore` | Manutenção (dependências, configuração) | `chore: atualiza o gsap` |

## Quando adaptar

- **Equipe que usa outra língua nas mensagens (inglês):** mantenha o padrão do repositório. Consistência vale mais que a língua.
- **Merge por squash (todos os commits da PR viram um só):** a mensagem que fica na `main` é o título da PR. Capriche no título da PR (etapa 21).
- **Mudança que quebra algo para quem usa (ex.: troca de endereço de página):** o padrão tem um jeito de avisar, com `!` depois do tipo (`feat!: ...`) ou uma linha `BREAKING CHANGE:` no corpo.
- **Projeto com regras automáticas de mensagem (hook ou lint de commit):** se o commit for bloqueado, leia o erro e ajuste a mensagem. Não pule a checagem.
- **Projeto construído etapa por etapa (como o Projeto B):** com o git criado na etapa 05, rode este prompt ao fim das etapas 06, 10, 12, 13 e 14. Cada commit sai pequeno e com um assunto só; se você deixar tudo para o fim, os assuntos se misturam nos mesmos arquivos e não dá mais para separar.
- **Changelog automático:** quem usa Conventional Commits pode gerar a lista de novidades a partir do histórico. Isso só funciona se os tipos estiverem certos.

## Problemas comuns

- **Um commit gigante misturando tudo** → peça para separar por assunto, adicionando arquivo por arquivo.
- **A mensagem só diz "o quê" ("altera main.js")** → peça o "por quê": qual problema isso resolve ou qual pedido atende.
- **Esqueci um arquivo no commit** → se ainda **não** fez push, `git commit --amend` é aceitável. Se já fez push, faça um commit novo.
- **O commit foi para a `main`** → veja a etapa 19, "Problemas comuns": `git switch -c feat/<nome>` leva o commit para uma branch nova.

## Exemplo ruim × bom

**Ruim (prompt e mensagem):**

```text
faz o commit aí
```

```text
update
```

**Bom (prompt):**

```text
Faça os commits desta branch em Conventional Commits, em português.
Um assunto por commit, arquivos pelo nome. No corpo: Por quê e Como verifiquei,
com os comandos que você rodou de verdade. Mostre o plano e espere meu OK.
```

**Bom (mensagem que sai):**

```text
fix: corrige quadros do exploded view que não carregavam no GitHub Pages

Por quê: os caminhos dos quadros começavam com "/" e ignoravam o base
"/sonora/" do Vite. No npm run dev funcionava; publicado, dava 404.

O que mudou: os caminhos agora usam import.meta.env.BASE_URL.

Como verifiquei: npm run build e npm run preview; aba Network sem 404;
npm test passou.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
```

Por que o bom funciona melhor:

- **O histórico vira documentação:** daqui a um mês, `git log` conta a história do projeto sem você abrir o código.
- **O "por quê" evita repetir o erro:** quem ler sabe que o problema era o `base`, não as imagens.
- **"Como verifiquei" dá confiança:** quem revisa sabe o que foi testado e o que não foi.
- **Commit pequeno é fácil de desfazer:** se der errado, `git revert` desfaz só aquilo.
- **"update"** não diz nada. Na hora de achar quando algo quebrou, todos os commits parecem iguais.

## Notas do ensaio (19/10/2026)

- Tema agência de viagens: 1,1 min para 5 commits em Conventional Commits em português, com Por quê, O que mudou, Como verifiquei (comandos reais) e Co-Authored-By. Os arquivos foram adicionados pelo nome; status limpo e sem push.
- Como o git começou com o site pronto, o commit da landing juntou estrutura, animação e interações, que moram nos mesmos arquivos (a mensagem explica). Os commits intermediários não compilam sozinhos, porque o `index.html` só entra no 3º dos 5.
- Com o git criado na etapa 05 e um commit ao fim das etapas 06, 10, 12, 13 e 14, o "um assunto por commit" passa a ser possível.
