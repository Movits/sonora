# 19 · Organização do Git

> Deixar o projeto pronto para trabalhar em equipe: repositório criado, `.gitignore` certo, primeiro commit limpo e uma branch para cada tarefa, sempre saindo da `main` atualizada.
>
> Ao vivo no workshop: material de apoio do P9. No P9 (etapa 20), o Roberto só troca para a branch `fix/achados-review-landing`, já criada e enviada. Repositório, `.gitignore` e branch nova ficam para casa.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI). GitHub CLI (`gh`) instalado e logado | Sonnet 5.5 | low (medium se o repositório estiver bagunçado) | Manual | nenhuma | nenhum (o `gh` faz a ponte com o GitHub) |

Por quê:

- **Sonnet 5.5, low:** comandos de Git são curtos e conhecidos. Não precisa de muito raciocínio.
- **Manual:** cada comando de Git e de `gh` passa por você antes de rodar. Criar repositório e enviar código são ações externas: você precisa ver e aprovar.
- **Sem conector:** o `gh` usa o login que **você** fez com `gh auth login`. Faça o login você mesmo; não entregue senha ou token ao Claude.
- **Nunca use Bypass.**

**Analogia:** a `main` é a versão oficial do livro. Cada branch é um rascunho numa folha separada. Você só cola o rascunho no livro depois que alguém leu (PR, etapa 21).

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 (npm), Playwright, GitHub Pages | Vite + JavaScript puro + GSAP (npm), GitHub Pages |
| [FUNCIONALIDADES] | a próxima tarefa: "seção Engenharia com blueprint em SVG" | a próxima tarefa: "perguntas frequentes em acordeão" |

## Prompt (copiar e colar)

```text
CONTEXTO
Projeto: site de [NOME_DA_MARCA], feito com [STACK], nesta pasta.
Sou iniciante em Git. Antes de cada comando, explique em uma frase o que ele faz.
Próxima tarefa: [FUNCIONALIDADES].

OBJETIVO
Organizar o Git do projeto e deixar uma branch pronta para a próxima tarefa.

RESTRIÇÕES
- Use só comandos seguros: git status, git init, git add, git commit, git switch,
  git switch -c, git pull, git push -u origin <branch>, git restore, git revert, git stash.
- Proibido: git reset --hard, git push --force, git clean e git add -f.
  Se achar que precisa de um deles, pare e me explique por quê.
- Nunca faça commit direto na main depois do primeiro commit.
- Não crie o repositório no GitHub nem faça push sem me perguntar.
- Se aparecer algum arquivo .env ou chave no git status, pare e me avise.

FERRAMENTAS PERMITIDAS
- git e gh (gh auth status, gh repo create). Ler e editar o .gitignore e o .gitattributes.

REQUISITOS TÉCNICOS
1. Diagnóstico: rode git status. Diga se a pasta já é um repositório, em qual branch
   estou e se há mudanças pendentes.
2. .gitignore: confira se ignora pelo menos node_modules/, dist/, .env, .env.*
   (menos .env.example), test-results/, playwright-report/, .DS_Store e Thumbs.db.
   Mostre o que falta e espere meu OK para editar.
   Confira também o .gitattributes: deve ter "* text=auto eol=lf" e as imagens,
   vídeos e fontes como binary. Sem ele, o Git do Windows mostra dezenas de avisos
   "LF will be replaced by CRLF" a cada git add.
3. Se ainda não houver repositório (o ideal é criá-lo na etapa 05, logo depois do
   npm create vite): git init -b main, primeiro commit com "chore: cria o projeto".
   Se o site já foi construído antes do git, esse commit leva só a base
   (configuração, package.json, CLAUDE.md, docs) e o resto fica para os commits
   da etapa 20. Me pergunte antes de rodar
   gh repo create <nome> --public --source=. --push
   (público para publicar grátis no GitHub Pages).
4. Branch da tarefa:
   git switch main
   git pull
   git switch -c <tipo>/<nome-curto>
   Tipo: feat (coisa nova), fix (correção), docs (documentação),
   chore (manutenção). Nome em minúsculas, com hífen, sem acento.
5. Mostre o resultado final: git status, git branch e git log --oneline -3.

RESULTADO ESPERADO
- .gitignore conferido.
- Repositório local (e no GitHub, se eu aprovar) com o primeiro commit.
- Uma branch nova para a tarefa, com o nome sugerido e o motivo.

CRITÉRIOS DE ACEITAÇÃO
- git status limpo ("nothing to commit, working tree clean"). Se o site foi construído
  antes do git, só podem sobrar as mudanças que vão para os commits da etapa 20.
- Estou na branch nova, não na main.
- git check-ignore -v .env node_modules/ dist/ mostra uma regra para cada um.

COMO VALIDAR
Me mostre a saída dos comandos do passo 5 e explique cada linha em português simples.
```

## Versão curta (para o slide)

```text
Organize o Git de [NOME_DA_MARCA]. Explique cada comando antes.
Confira o .gitignore (node_modules, dist, .env).
Depois: git switch main, git pull, git switch -c feat/<tarefa>.
Proibido reset --hard e push --force.
Pergunte antes de criar o repositório ou enviar.
```

## Resultado esperado e validação

No terminal, ao final:

```bash
git status                                 # "On branch feat/..." e "working tree clean"
git branch                                 # a branch atual aparece com *
git log --oneline -3                       # os últimos commits, um por linha
git check-ignore -v .env node_modules/ dist/ # uma regra do .gitignore para cada caminho
```

No GitHub (se o repositório foi criado): a página do repositório mostra os arquivos, **sem** `node_modules/`, `dist/` nem `.env`.

**Comandos seguros para desfazer** (mais detalhes em [`../guia-de-comandos.md`](../guia-de-comandos.md), seção 4.5):

| Situação | Comando seguro | Cuidado |
|---|---|---|
| Estraguei um arquivo e ainda não fiz commit | `git restore <arquivo>` | As mudanças não commitadas daquele arquivo somem. Olhe `git diff` antes. |
| Coloquei um arquivo no stage sem querer | `git restore --staged <arquivo>` | Nenhum: o conteúdo continua. |
| Quero guardar o que estou fazendo e trocar de branch | `git stash` e, depois, `git stash pop` | Não esqueça de trazer de volta. |
| Um commit já enviado quebrou algo | `git revert --no-edit <commit>` | Seguro: cria um commit novo que desfaz o antigo. |
| Comecei a tarefa na branch errada (sem commit) | `git switch -c feat/<nome>` | As mudanças vão junto para a branch nova. |

**Alerta sobre `git reset`:** ele move a branch para trás e reescreve o histórico. Com `--hard`, apaga trabalho não commitado sem volta. Não use. Se alguém sugerir (inclusive o Claude), pare e peça ajuda.

## Quando adaptar

- **Equipe:** proteja a `main` no GitHub (PR obrigatória e CI obrigatório antes do merge; os nomes das opções mudam: conferir em Settings do repositório). Cada pessoa trabalha na própria branch e faz `git pull` na `main` antes de criar uma nova.
- **Arquivos grandes (vídeo, sequência de quadros):** o GitHub avisa acima de 50 MB por arquivo e recusa arquivos muito grandes (conferir o limite atual). Comprima o vídeo ou use quadros WebP menores. Para mídia muito pesada, existe o Git LFS, mas ele tem cotas próprias.
- **Projeto que já existe no GitHub:** em vez de `git init`, clone (`gh repo clone <dono>/<repo>`) e rode `npm install`.
- **Repositório privado:** o GitHub Pages grátis só publica repositório público; o privado exige plano pago.
- **Vários projetos na mesma pasta:** um repositório por projeto. Nunca rode `git init` na sua pasta de usuário inteira.

## Problemas comuns

- **`fatal: not a git repository`** → você está na pasta errada ou ainda não rodou `git init`. Confira com `pwd` (Git Bash) ou `Get-Location` (PowerShell).
- **Fiz commit na `main` sem querer (ainda sem push)** → rode `git switch -c feat/<nome>`: a branch nova leva o commit junto. Envie a branch e abra a PR normalmente. Depois do merge, `git pull` na `main` deixa tudo igual.
- **`node_modules` entrou no commit** → acrescente `node_modules/` no `.gitignore`, rode `git rm -r --cached node_modules` e faça um commit `chore:`.
- **Dezenas de avisos "LF will be replaced by CRLF" a cada `git add`** → não é erro: é o Git do Windows avisando que vai trocar o fim de linha. Um `.gitattributes` com `* text=auto eol=lf` (como o do SONORA) acaba com os avisos.
- **O status não fica limpo depois do primeiro commit** → o site foi construído antes do git, e o que sobrou é o trabalho das etapas anteriores. Ele entra nos commits da etapa 20. Da próxima vez, crie o git na etapa 05.
- **`git push` recusado ("rejected", "fetch first")** → alguém mudou a branch no GitHub. Rode `git pull`, resolva conflitos se houver e envie de novo. Nunca use `--force`.

## Notas do ensaio (19/10/2026)

- Tema agência de viagens: 0,5 min. Diagnóstico ("not a git repository"), `Thumbs.db` acrescentado e regras conferidas com `git check-ignore`. Depois, `git init -b main`, o commit da base e a branch `feat/landing-andara`. Não houve `gh repo create` nem push, porque o ensaio não tinha remoto.
- Com `core.autocrlf=true` e sem `.gitattributes`, cada `git add` encheu a tela de avisos de CRLF, o que assusta o iniciante.
- O "working tree clean" não fechou nesta etapa, porque o site inteiro foi construído antes do git; só fechou depois da etapa 20. O plano de contingência já manda criar o git logo depois do `npm create vite`.
