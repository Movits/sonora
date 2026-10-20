# Plano de contingência

> Para o instrutor do workshop de IA (20/10/2026). Use junto com o [checklist pré-workshop](checklist-pre-workshop.md).

**Regra geral: algo vai dar errado, e tudo bem.**

- Fale em voz alta o que está acontecendo: "a internet caiu, vou para o plano B". Isso também é aula.
- Dê no máximo **2 minutos** para o plano B.
- Dê no máximo **5 minutos** para resolver um erro ao vivo.
- Passou disso? Vá para o plano C e siga a aula. Investigue depois.

## Kit de reserva (tenha à mão)

| Reserva | Onde está |
|---|---|
| Hotspot do celular | já pareado com o notebook |
| SONORA rodando local | `npm run preview` (endereço que o terminal mostrar; no SONORA, em geral `http://localhost:4173/sonora/`, por causa do `base: '/sonora/'`) |
| Deck em PDF e `.pptx` | notebook e pendrive |
| MP4 do scroll do SONORA | notebook e pendrive |
| MP4 do ciclo cartão → PR → deploy | notebook e pendrive |
| PR de reserva com CI verde | GitHub, aberta antes da aula |
| Pasta pronta do Projeto B (`.zip`) | notebook e pendrive (o zip do Windows só serve para Windows) |
| Kits de imagens por tema | notebook e pendrive |
| Prints do quadro e de um cartão do Notion | notebook |
| Pontos de recuperação (tags) | `git tag -n` no SONORA |
| Prompts de cada etapa | `workshop/prompts/` no repositório |

---

## Tabela de problemas

| Problema | Sinal | Plano B imediato | Plano C |
|---|---|---|---|
| **Internet caiu** | Páginas não carregam. O Claude não responde. `git push` dá erro de conexão. | Ligar o hotspot do celular. Enquanto conecta, seguir com o SONORA local (`npm run preview`) e o deck em PDF. | Aula offline: PDF, MP4 do scroll e do ciclo PR → deploy, código aberto no VS Code. O Projeto B vira leitura guiada da pasta pronta. Os alunos refazem em casa pelo repositório. |
| **Claude lento** | Resposta leva mais de 1 ou 2 min. Fica "pensando" sem parar. | Conferir o seletor: Sonnet 5.5 e effort medium. Se estiver em Opus ou Fable, trocar. Pedir uma tarefa menor. Abrir sessão nova: contexto menor responde mais rápido. | Mostrar o resultado pronto pela tag do passo e ler em voz alta o prompt que gerou aquilo (`workshop/prompts/`). |
| **Claude fora do ar** | Erro de serviço em toda mensagem. A página de status oficial mostra incidente (conferir o endereço antes da aula). | Seguir pelas tags e pelos MP4. Mostrar o que mudou entre dois checkpoints: `git diff --stat v0.2-visual v0.3-exploded`. | Trocar a ordem dos blocos: trazer para agora o que não depende do Claude (fluxo Git e PR pelo vídeo, Notion à mão, custos). Tentar de novo mais tarde. |
| **Limite de uso atingido** | Aviso de limite de sessão ou semanal na resposta. | Mostrar o resultado pela tag do passo. Se o aviso disser que só um modelo bateu o limite, trocar de modelo. Usar sessão nova a cada tarefa: sessão longa gasta mais. | Seguir pelas tags e pelos MP4. Prevenção: conferir o uso de manhã (checklist, bloco 1) e não usar Opus nem Fable na aula. |
| **App Claude Desktop trava** | Janela congelada. Não abre sessão nova. | Fechar e abrir o app. Abrir sessão nova no mesmo projeto. | Claude Code na web (claude.ai/code) com o repositório do GitHub; testar antes se a conta tem acesso. Ou seguir pelas tags e MP4. |
| **Higgsfield sem créditos ou fila lenta** | Saldo insuficiente. Geração parada na fila por minutos. | Não gerar ao vivo. Usar o kit de imagens pré-gerado do tema. | Imagem provisória sem custo: pedir ao Claude formas em SVG ou um gradiente em CSS no lugar da foto. A imagem real entra depois. |
| **`npm install` falha** | `npm ERR!`, `ETIMEDOUT`, `ECONNRESET`, ou parado por mais de 3 min. | `npm install --prefer-offline` (usa o cache aquecido no dia). Trocar para o hotspot. | Usar a pasta pronta do Projeto B: descompactar o `.zip` e rodar `npm run dev`. |
| **Porta ocupada no dev server** | O Vite avisa `Port 5173 is in use, trying another one...`. Ou o navegador mostra um site antigo. | Usar o endereço que o terminal mostrar (ex.: `http://localhost:5174/`). Ou escolher a porta: `npm run dev -- --port 5180`. | Fechar o servidor antigo com Ctrl + C no terminal dele. Se não achar: no Windows, `netstat -ano \| findstr :5173` e depois `taskkill /PID <número> /F`; no macOS, `lsof -i :5173` e depois `kill <PID>`. |
| **Animação travando no projetor** | O scroll engasga, quadros pulam, a ventoinha dispara. | Fechar abas e apps. Baixar para 1280×720. Usar mouse com roda. Mostrar a versão estática: F12 → *Rendering* → emular `prefers-reduced-motion: reduce`. | Tocar o MP4 do scroll em tela cheia e explicar por cima. |
| **Push, PR ou Actions falha** | `git push` recusado ou com erro de login. `gh pr create` com erro. Check vermelho, ou parado em *Queued*. | `gh auth status` para ver o login. Mostrar a PR de reserva, já com CI verde. CI vermelho de verdade? Abrir o log e usar como exercício (linha "Erro de código ao vivo"). **Nunca mesclar com CI vermelho para salvar a demo.** | MP4 do ciclo cartão → PR → deploy. |
| **GitHub Pages não atualiza** | Depois do merge, a URL pública mostra a versão antiga, ou dá 404. | Abrir a aba *Actions*: o deploy leva alguns minutos. Recarregar com Ctrl + F5 ou numa janela anônima (cache). Enquanto espera: `npm run build` e `npm run preview`: "é exatamente isto que vai para o ar". | Mostrar a versão publicada antes e o trecho de deploy do MP4. Conferir de novo no fim da aula. |
| **Notion MCP falha** | O Claude não acha as ferramentas do Notion, pede login de novo ou dá erro. | Reconectar o conector nas configurações do app (conferir o caminho na sua versão). Enquanto isso, atualizar o cartão à mão: o fluxo é o mesmo, a IA só poupa digitação. | Mostrar os prints do quadro e do cartão atualizado. |
| **Conversão do deck falha** | No Google Slides: fonte trocada, imagem faltando, layout quebrado. Ou o Drive não abre. | Apresentar pelo `.pptx` local. | PDF em tela cheia: do notebook, do pendrive ou de outro computador. |
| **Notebook de aluno sem Node** | `node -v` responde "não é reconhecido" ou "command not found". Ou a versão é menor que 22. | Dupla com um colega que já tem tudo. Ou acompanhar pela tela principal. | Instalar no intervalo só se levar menos de 5 min e não atrasar a turma. Senão, refazer em casa com o guia de instalação. |
| **Tempo estourado** | Passou do marco do bloco (seção "Se o tempo apertar"). | Cortar na ordem da seção abaixo. | O que sobrar vira dever de casa: repositório + `workshop/prompts/`. |
| **Erro de código ao vivo** | Tela branca. Caixa vermelha de erro do Vite. Erro no console (F12). Animação não aparece. | Virar exercício de debugging, até 5 min: ler o erro em voz alta → copiar para o Claude → pedir **a causa antes da correção** (modo Manual ou Plan) → aplicar → conferir no navegador. | Guardar o que foi feito (`git stash push -u -m "erro ao vivo"`) e voltar ao último checkpoint (commit ou tag). Investigar depois da aula. |
| **Projetor sem imagem** | Tela preta ou "sem sinal". | Trocar cabo ou adaptador. Win + P → **Duplicar**. Reiniciar só o projetor. | Turma em volta do notebook. Ou apresentar o PDF de outro computador. |
| **Dado sensível na tela** | Apareceu um `.env`, uma chave, um nome de cliente ou um e-mail pessoal. | Trocar de janela na hora (Alt + Tab) ou cortar a projeção (Win + P → *Somente tela do PC*). | Se foi chave ou senha: considerar vazada. Revogar e gerar outra logo depois da aula. |
| **Claude faz algo inesperado** | Edita um arquivo que não devia ou roda um comando fora do combinado. | Parar a resposta (Esc ou o botão de parar). Conferir o modo: deve estar em Manual. Ver o que mudou: `git status` e `git diff`. | Desfazer com git (seção "Como voltar"). Os checkpoints do Claude não cobrem o que foi feito por comando de terminal. |

---

## Se o tempo apertar

**Marcos sugeridos** (ajuste ao roteiro final do deck):

| Marco | Até quando (H = início da aula) |
|---|---|
| Projeto B começou | H + 1h00 |
| Prática dos alunos terminou | H + 1h50 |
| Fluxo de trabalho (cartão → PR → deploy) começou | H + 2h05 |
| Encerramento começou | H + 2h45 |

**Ordem de corte** (corte de cima para baixo):

1. **Mídia e Higgsfield:** mostrar só os assets prontos e o slide de custos, em 1 min.
2. **Comandos extras do Claude Code** (`/context`, `/compact`, `/rewind`): ficar só em modelo, effort e modos.
3. **Seção Engenharia do SONORA:** mostrar o resultado, sem abrir o código.
4. **Skills:** um slide com a skill do projeto e a regra "inspecione antes de instalar". Cortar o estudo de caso detalhado.
5. **Notion pelo MCP:** mostrar o cartão já atualizado (print), sem a demo ao vivo.
6. **Ciclo PR → deploy ao vivo:** trocar pelo MP4 (2 min) e pela PR de reserva.
7. **Prática dos alunos:** de 30–40 min para 15–20 min, só os primeiros passos. O resto fica para casa.

**Nunca cortar:**

- O Projeto B rodando no navegador com pelo menos uma animação, mesmo que venha da pasta pronta.
- O fluxo de trabalho explicado do começo ao fim, mesmo que só pelo vídeo: ideia → cartão → branch → commit → PR → CI → revisão → merge → deploy → cartão atualizado.
- Segurança básica: não mostrar segredos, modo Manual para iniciante, ler antes de aprovar, inspecionar skills de terceiros antes de instalar.
- Encerramento de 5 min com os links (repositório, site, guia) e como continuar em casa.

---

## Pontos de recuperação (tags do SONORA)

Uma **tag** é um marcador com nome num ponto da história do projeto. É como um "save" com etiqueta: dá para voltar a ele a qualquer hora.

> Os nomes intermediários abaixo são a sequência planejada. Confira com `git tag -n` antes da aula. Se as tags reais tiverem outros nomes, atualize esta tabela.

| Tag | O que tem | Use quando |
|---|---|---|
| `v0.1-estrutura` | Vite, HTML com as seções, CSS base e fontes locais. Sem animação. | quiser mostrar o "esqueleto" ou recomeçar do básico |
| `v0.2-visual` | Layout, tipografia, cores e hero estático. | a demo de design precisar de um ponto sem animação |
| `v0.3-exploded` | Canvas fixado (pin) com os quadros WebP e o scrub do ScrollTrigger. | a animação principal quebrar |
| `v0.4-engenharia` | Seção Engenharia com o blueprint em SVG animado por código. | a parte de SVG quebrar |
| `v0.5-movimento-reduzido` | Versão estática para `prefers-reduced-motion` e ajustes de celular. | precisar da versão estática |
| `v0.6-testes-ci` | Testes com Playwright e CI no GitHub Actions. | for mostrar testes e CI |
| `v1.0-publicavel` | Deploy no GitHub Pages, README, CLAUDE.md e a skill `review-landing`. | quiser o estado final, igual ao que está no ar |

Criar uma tag que faltou (troque `<hash>` pelo código do commit, visto em `git log --oneline`):

```bash
git tag -a v0.3-exploded <hash> -m "Exploded view com scrub funcionando"
git push origin v0.3-exploded
```

---

## Como voltar a um estado anterior com segurança

**Regra de ouro: voltar não pode apagar nada.** Primeiro guarde o que está pela metade. Depois mude de lugar.

Nos comandos abaixo, troque o que está entre `< >` pelo valor real.

### Passo 1. Ver onde você está

```bash
git status
git log --oneline -5
git tag -n
```

### Passo 2. Guardar o que está pela metade

Escolha uma das opções:

```bash
# Opção A: gaveta temporária (guarda também os arquivos novos)
git stash push -u -m "ao vivo: antes de voltar"
```

```bash
# Opção B: commit numa branch própria
git switch -c tentativa-ao-vivo
git add -A
git commit -m "chore: guarda tentativa ao vivo antes de voltar"
```

### Passo 3. Ir para o checkpoint numa branch nova

A `main` fica intacta.

```bash
git switch -c volta-v0-3 v0.3-exploded
npm install
npm run dev
```

O `npm install` só é preciso se o `package.json` mudou entre as versões. Na dúvida, rode.

### Passo 4. Voltar ao normal depois

```bash
git switch main
git stash list
git stash pop
```

`git stash list` e `git stash pop` só valem se você usou a opção A. O `pop` devolve o que estava guardado.

### Casos especiais

**Voltar um arquivo só**, do jeito que estava numa tag:

```bash
git restore --source=v0.3-exploded -- <caminho/do/arquivo>
```

**Jogar fora as mudanças não salvas de um arquivo** (essas mudanças se perdem):

```bash
git restore <caminho/do/arquivo>
```

**Desfazer algo que já está na `main` e no ar.** Use `revert`, que cria um commit novo "ao contrário" e não reescreve a história. E siga o fluxo normal de PR:

```bash
git switch -c fix/desfaz-mudanca
git revert <hash-do-commit>
git push -u origin fix/desfaz-mudanca
gh pr create --fill
```

Se o commit a desfazer for um merge, use `git revert -m 1 <hash-do-commit>`.

**Nunca durante a aula:** `git reset --hard`, `git push --force` e `git clean -fd`. Eles apagam histórico ou arquivos sem volta. O Claude Code da máquina do palco já está configurado para negar esses comandos.

### Checkpoints do próprio Claude Code

- O `/rewind` (ou Esc duas vezes no terminal, com o campo vazio) volta o código, a conversa ou os dois até um prompt anterior.
- Limites: ele não desfaz o que foi feito por comando de terminal nem edições fora do Claude, e **não substitui o git**.
- No app Desktop, conferir na sua versão se o recurso aparece.

---

## Projeto B: checkpoints ao vivo

O Projeto B nasce sem git. Logo depois do `npm create vite`, crie o primeiro "save":

```bash
cd meu-site
git init
git add -A
git commit -m "chore: cria projeto com Vite"
git tag passo-1
```

A cada passo que funcionar no navegador, salve de novo:

```bash
git add -A
git commit -m "feat: adiciona hero do tema"
git tag passo-2
```

Se o passo seguinte quebrar e não der para consertar em 5 min:

```bash
git stash push -u -m "passo 3 quebrado"
```

Pronto: os arquivos voltam a ser os do último commit (`passo-2`), e a tentativa fica guardada no stash. Mostre isso para a turma: é o "salvar o jogo" na prática.
