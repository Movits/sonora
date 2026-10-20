# 23 · Merge

> Juntar a PR na `main` só quando tudo está pronto (CI verde, revisão feita, sem conflitos), de forma manual e consciente, e depois deixar o computador e o GitHub em ordem: `main` atualizada, branch apagada e deploy acompanhado.
>
> Ao vivo no workshop: material de apoio do P10 (etapa 21). Com o check verde e os achados triados, o Roberto confere o checklist e faz o merge da PR do SONORA na tela.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| GitHub no navegador (botão de merge da PR) ou Claude Desktop › aba Code com o `gh` (ou Claude Code CLI) | Sonnet 5.5 | low | Manual | nenhuma | nenhum |

Por quê:

- **Sonnet 5.5, low:** conferir um checklist e rodar `gh pr merge` é simples.
- **Manual:** o merge muda a versão oficial e, neste projeto, dispara o deploy. **Quem decide é uma pessoa.** O Claude só mescla quando você pede, e você aprova o comando.
- **Merge é manual por regra:** nada de auto-merge enquanto você está aprendendo.
- **Nunca use Bypass.**

**Analogia:** o merge é o "imprimir" do livro oficial. Antes de apertar, você confere se a revisão foi feita, se a gráfica (CI) aprovou o arquivo e se ninguém mexeu na mesma página ao mesmo tempo (conflito).

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [CRITÉRIOS_DE_ACEITAÇÃO] | CI verde (testes e build); revisão feita e achados triados; exploded view acompanha o scroll nos dois sentidos | CI verde; revisão feita; botão de orçamento abre o WhatsApp |

Os campos entre `< >` (número da PR) são dados do momento.

## Prompt (copiar e colar)

```text
CONTEXTO
Site de [NOME_DA_MARCA]. A PR #<número da PR> está aberta e foi revisada.
Neste projeto, todo merge na main dispara o deploy automático.

OBJETIVO
Conferir se a PR pode entrar na main e, só com a minha autorização, fazer o merge
e arrumar o repositório local.

RESTRIÇÕES
- Fase 1 é só conferência. Não mescle nada até eu escrever "pode mesclar".
- Se algum item do checklist falhar, pare e me diga o que falta.
- Nada de git push --force, git reset ou rebase. Nada de auto-merge.
- Use merge commit (gh pr merge --merge), a menos que eu diga outra estratégia.

FERRAMENTAS PERMITIDAS
- gh pr view, gh pr checks, gh pr merge, gh run list, gh run watch.
- git switch, git pull, git branch -d (com -d minúsculo: só apaga branch já mesclada).

REQUISITOS TÉCNICOS
Fase 1, checklist (mostre cada item com OK ou FALTA):
1. CI verde: gh pr checks <número>.
2. Revisão: houve revisão de outro LLM ou de outra pessoa, e os achados foram triados
   (veja os comentários com gh pr view <número> --comments).
3. Sem conflito com a main: gh pr view <número> --json mergeable.
4. Descrição completa: as 5 seções do template preenchidas.
5. Critérios de aceitação: [CRITÉRIOS_DE_ACEITAÇÃO].
PARE e espere "pode mesclar".

Fase 2, depois do meu OK:
6. gh pr merge <número> --merge --delete-branch
7. git switch main
   git pull
   git branch -d <nome da branch>  (se ela ainda existir no meu computador)
8. Acompanhe o deploy: gh run list --limit 3 e, se houver um rodando, gh run watch.

RESULTADO ESPERADO
- O checklist da fase 1.
- Depois do OK: confirmação do merge, a main local atualizada e o resultado do deploy.
- Um resumo de uma linha para eu colar na Próxima ação do cartão (etapa 24).

CRITÉRIOS DE ACEITAÇÃO
- A PR aparece como Merged no GitHub.
- git log --oneline -3 na main mostra o merge.
- O workflow de deploy terminou com sucesso.

COMO VALIDAR
Me diga onde ver o merge no GitHub, onde ver o deploy (aba Actions) e qual endereço
abrir para conferir o site publicado.
```

## Versão curta (para o slide)

```text
Confira a PR #<número>: CI verde, revisão triada, sem conflito,
template completo. Mostre OK/FALTA e pare.
Só com meu "pode mesclar": gh pr merge --merge --delete-branch,
git switch main, git pull, e acompanhe o deploy.
```

## Resultado esperado e validação

O que deve aparecer:

1. O checklist com OK ou FALTA em cada item. Se faltar algo, nada é mesclado.
2. Depois do seu "pode mesclar": a PR como **Merged**, a branch apagada, a `main` atualizada.
3. O deploy rodando na aba **Actions** do repositório e, no fim, o site novo no ar (etapa 25).

```bash
gh pr view <número>      # deve mostrar "MERGED"
git log --oneline -3     # na main, o commit de merge aparece no topo
gh run list --limit 3    # o deploy aparece e termina com sucesso
```

**Estratégias de merge, em uma linha cada:**

| Estratégia | O que acontece | Quando usar |
|---|---|---|
| Merge commit (`--merge`) | Os commits da branch entram como estão, mais um commit de merge | Padrão recomendado: o histórico conta a história inteira |
| Squash (`--squash`) | Todos os commits da PR viram um só | Quando a branch tem muitos commits pequenos de "tentativa" |
| Rebase (`--rebase`) | Reescreve os commits em cima da `main` | Evite enquanto estiver aprendendo |

Escolha uma estratégia por projeto e mantenha.

**Se o merge quebrou o site:** não apague nada. Crie uma branch, desfaça com `git revert` e abra uma PR:

```bash
git switch main
git pull
git switch -c fix/desfaz-pr-<número>
git revert -m 1 <código do commit de merge>
git push -u origin fix/desfaz-pr-<número>
```

O `-m 1` diz ao Git para manter o lado da `main` e desfazer o que a PR trouxe. O código do commit aparece em `git log --oneline`.

## Quando adaptar

- **Equipe:** proteja a `main` no GitHub (PR obrigatória, CI obrigatório e aprovação de outra pessoa; os nomes das opções ficam em Settings do repositório e mudam com o tempo: conferir). A regra "quem fez não conclui" vale também para o merge.
- **Conflito com a `main`:** atualize a branch juntando a `main` nela (sem rebase), resolva os trechos marcados, rode os testes e envie:
  ```bash
  git switch main
  git pull
  git switch <sua-branch>
  git merge main
  ```
  Depois de resolver: `git add <arquivos>`, `git commit`, `npm test` e `git push`.
- **Projeto com banco de dados:** o merge pode disparar mudanças no banco no deploy. Tenha cópia de segurança e um plano para voltar antes de mesclar.
- **Auto-merge:** existe (`gh pr merge --auto`), mas só faz sentido com proteção forte da `main` e uma equipe que confia no CI. Não é para iniciante.
- **Correção urgente em produção (hotfix):** mesmo com pressa, faça uma PR pequena com o CI. Pular o CI é como a urgência vira dois problemas.

## Problemas comuns

- **O botão de merge está cinza** → falta algo: CI vermelho ou rodando, aprovação obrigatória, ou conflito. A própria página da PR diz o quê.
- **"This branch has conflicts"** → veja o item "Conflito com a `main`" acima. Se o conflito for grande, peça ajuda ao Claude no modo Manual, arquivo por arquivo.
- **O deploy falhou depois do merge** → abra a aba Actions, clique no run vermelho e leia o erro (etapas 16 e 25). Se o site no ar quebrou, desfaça com `git revert` numa PR.
- **A `main` do seu computador está atrasada** → `git switch main` e `git pull`. Sempre antes de criar uma branch nova.
