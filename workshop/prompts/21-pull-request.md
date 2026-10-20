# 21 · Pull request

> Abrir uma PR (pedido para juntar a branch na `main`) pequena, com o template preenchido (O que muda, Por quê, Como verifiquei, Como validar, Riscos), para que outra pessoa ou outro LLM consiga revisar e validar sem perguntar nada.
>
> Ao vivo no workshop: sim (slide P10, cerca de 8 min, junto com as etapas 22 e 23). No SONORA, o Roberto abre ao vivo a PR da branch `fix/achados-review-landing` e mostra o CI rodando. Se a PR falhar, mostra a PR #1, já mesclada, e o histórico.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto, na branch da tarefa (ou Claude Code CLI). GitHub no navegador para conferir | Sonnet 5.5 | medium | Manual | nenhuma | nenhum (o `gh` faz a ponte com o GitHub) |

Por quê:

- **Sonnet 5.5, medium:** resumir o diff e preencher o template é escrita técnica. Medium dá conta.
- **Manual:** `git push` e `gh pr create` publicam o seu código no GitHub. Você confere o texto e aprova cada comando.
- **Sem conector:** o `gh` usa o login que você mesmo fez (`gh auth login`).
- **Nunca use Bypass.** Merge não é nesta etapa (etapa 23).

**Analogia:** a PR é o pedido para colar o rascunho no livro oficial. O template é o bilhete que vai junto: o que mudou, por quê, como você testou e como a outra pessoa confere.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [OBJETIVO_DO_SITE] | apresentar o fone e levar o visitante à lista de espera (demonstrativa, sem coletar dados) | levar o visitante a pedir orçamento pelo WhatsApp |
| [CRITÉRIOS_DE_ACEITAÇÃO] | `npm run build` sem erro; `npm test` passando; exploded view acompanha o scroll nos dois sentidos | `npm run build` sem erro; console sem erros; botão de orçamento abre o WhatsApp com mensagem pronta |

Os campos entre `< >` no prompt (link do cartão) são dados do momento.

## Prompt (copiar e colar)

```text
CONTEXTO
Projeto: site de [NOME_DA_MARCA]. Objetivo do site: [OBJETIVO_DO_SITE].
Terminei a tarefa nesta branch e os commits já estão feitos.
Cartão da tarefa no Notion: <link do cartão, ou "sem cartão">.
O repositório tem (ou terá) o template em .github/pull_request_template.md.

OBJETIVO
Abrir uma pull request desta branch para a main, com o template preenchido,
pronta para outra pessoa revisar e validar.

RESTRIÇÕES
- Confirme que não estou na main e que git status está limpo.
- Rode antes o mesmo que o CI roda (npm test e npm run build). Se algo falhar, pare.
- Escreva só o que é verdade: em "Como verifiquei", só comandos que você rodou e o
  resultado que apareceu.
- Não faça merge. Não use git push --force.
- Antes de git push e de gh pr create, me mostre o título e o corpo e espere meu OK.

FERRAMENTAS PERMITIDAS
- git status, git log, git diff main...HEAD, git push -u origin <branch>.
- npm test, npm run build.
- gh pr create, gh pr view, gh pr checks.

REQUISITOS TÉCNICOS
- Título no formato dos commits: <tipo>: <descrição curta>, em português.
- Corpo com exatamente estas seções:
  ## O que muda      (1 a 3 frases, para quem não viu o código)
  ## Por quê         (o pedido ou problema; link do cartão)
  ## Como verifiquei (comandos rodados e resultado)
  ## Como validar    (passo a passo para outra pessoa conferir, incluindo
                      gh pr checkout <número>, npm install, npm run dev e o que olhar)
  ## Riscos          (o que pode quebrar, o que ficou de fora, como desfazer)
- Grave o corpo num arquivo temporário fora do projeto (ou apague depois) e use
  gh pr create --base main --title "..." --body-file <arquivo>.
- PR pequena: se o diff tiver mais de um assunto, sugira dividir antes de abrir.

RESULTADO ESPERADO
- O link da PR.
- A saída de gh pr checks (o CI rodando ou já verde).

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- As 5 seções do template estão preenchidas, sem texto de exemplo esquecido.
- "Como validar" funciona para alguém que nunca viu a branch.
- O CI da PR roda (testes e build).

COMO VALIDAR
Abra a PR com gh pr view --web e me diga o que conferir na página
(descrição, aba Files changed e a seção de checks).
```

## Versão curta (para o slide)

```text
Abra a PR desta branch para a main.
Antes: npm test e npm run build.
Título "tipo: descrição". Corpo: O que muda, Por quê,
Como verifiquei (só o que rodou), Como validar (passo a passo), Riscos.
Mostre o texto e espere meu OK. Sem merge.
```

## Resultado esperado e validação

O que deve aparecer:

1. O título e o corpo propostos. Você lê e aprova.
2. O `git push` da branch e o link da PR.
3. Na página da PR: a descrição com as 5 seções, a aba **Files changed** com o diff e a seção de checks com o CI rodando.

Comandos para conferir:

```bash
gh pr view            # resumo da PR da branch atual
gh pr view --web      # abre a PR no navegador
gh pr checks          # situação do CI (testes e build)
```

Modelo do arquivo `.github/pull_request_template.md` (o GitHub usa esse texto ao abrir uma PR pelo site):

```markdown
## O que muda
<!-- 1 a 3 frases. O que esta PR entrega, para quem não viu o código. -->

## Por quê
<!-- O pedido ou o problema. Link do cartão no Notion. -->

## Como verifiquei
<!-- Comandos rodados e o resultado. Ex.: npm test (todos passaram), npm run build (ok). -->

## Como validar
<!-- Passo a passo para outra pessoa conferir. -->
1. `gh pr checkout NUMERO`
2. `npm install` e depois `npm run dev`
3. Abrir o endereço que aparecer e conferir: ...

## Riscos
<!-- O que pode quebrar, o que ficou de fora e como desfazer. -->
```

Depois de abrir a PR, cole o link na **Comprovação** do cartão e mude o Status para **Feito (a validar)** (etapa 24).

## Quando adaptar

- **Mudança visual:** coloque prints de antes e depois na PR (arraste a imagem para a caixa de comentário do GitHub). Quem revisa entende em segundos.
- **Trabalho ainda em andamento:** abra como rascunho (`gh pr create --draft`). Ninguém revisa até você marcar como pronta.
- **Hospedagem com prévia por PR (Netlify, Vercel e outras):** elas podem gerar um link de teste para cada PR. Coloque esse link em "Como validar". No GitHub Pages, só a `main` é publicada; a validação é local.
- **Equipe:** peça revisores na PR. Projetos maiores usam um arquivo `CODEOWNERS` para avisar automaticamente quem cuida de cada pasta.
- **PR grande demais:** divida por assunto (uma PR por cartão). PR enorme ninguém revisa direito, nem pessoa nem LLM.
- **Atualização de dependência:** em "Riscos", diga o que a nova versão muda e como você conferiu que nada quebrou.

## Problemas comuns

- **`gh` pede login** → rode `gh auth login` você mesmo e tente de novo.
- **CI vermelho na PR** → clique em **Details** no check que falhou, copie o erro e use a etapa 16. Corrija com um commit novo na mesma branch e faça `git push`: a PR atualiza sozinha.
- **O template não apareceu** → ele precisa estar em `.github/pull_request_template.md` na `main`. Com `--body-file`, o `gh` usa o seu arquivo, então o Claude preenche as seções à mão.
- **"Como verifiquei" diz que testes passaram, mas ninguém rodou** → peça "só comandos que você rodou nesta sessão, com a saída". Texto bonito sem prova não vale.
