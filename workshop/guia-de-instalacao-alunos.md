# Guia de instalação para alunos

> Para quem vai levar notebook ao workshop de IA (20/10/2026). Serve para Windows e macOS.
> Leva mais ou menos 30 a 45 minutos. **Faça antes do dia**: a internet do local pode ser lenta.

Não conseguiu instalar? Tudo bem. Dá para acompanhar pela tela principal e refazer em casa. Veja o [fim deste guia](#não-conseguiu-instalar-sem-problema).

## O que você vai precisar

| Ferramenta | Para que serve | Onde baixar | Obrigatório? |
|---|---|---|---|
| **Node.js** (versão LTS, 22 ou mais nova) | É o "motor" que roda o site no seu computador. Vem com o **npm**, a "loja" de pacotes de código. | nodejs.org | Sim |
| **VS Code** | Editor de código. É o "Word" de quem programa. | code.visualstudio.com | Sim |
| **Git** | O "salvar o jogo" do código: guarda cada versão do projeto. | git-scm.com | Sim |
| **Google Chrome** | Navegador para ver e testar o site. | google.com/chrome | Sim |
| **Conta no GitHub** | Onde o código fica guardado na internet. | github.com/signup | Sim |
| **Conta no Claude + app Claude Desktop** | A IA que escreve código com você, na aba **Code** do app. | claude.ai e claude.com/download | Sim, para usar a IA |
| **Notion** | Quadro de tarefas da equipe. | notion.com | Opcional |

**LTS** quer dizer *Long Term Support* (suporte de longo prazo). É a versão estável, a recomendada para quem está começando.

**Sobre o Claude:** o Claude Code (aba Code do app) pode exigir plano pago. Confira em **claude.com/pricing** antes de assinar qualquer coisa. Sem plano, você ainda acompanha tudo pela tela principal.

**Idade mínima:** cada serviço tem a sua. Confira nos termos do Claude, do GitHub e do Notion antes de criar a conta.

---

## Windows, passo a passo

Instale nesta ordem:

1. **Node.js.** Em nodejs.org, baixe o instalador **LTS** (arquivo `.msi`). Clique em *Next* até o fim, com as opções padrão. Se aparecer a opção de instalar "ferramentas para módulos nativos" (*Tools for Native Modules*), pode deixar desmarcada: não vamos precisar.
2. **VS Code.** Em code.visualstudio.com, baixe e instale. Deixe marcada a opção *Add to PATH* (ela já vem marcada).
3. **Git.** Em git-scm.com, baixe o *Git for Windows* e instale. Pode aceitar quase tudo no padrão. Uma dica: na tela *Choosing the default editor*, escolha **Visual Studio Code**. O padrão é o Vim, que é difícil para iniciantes. O Git também instala o **Git Bash**, um terminal extra.
4. **Chrome.** Em google.com/chrome, se ainda não tiver.
5. **Feche e abra o VS Code de novo.** Assim ele "enxerga" o que você instalou.

**Onde fica o terminal:** no VS Code, menu *Terminal → New Terminal* (ou *Terminal → Novo Terminal*, se estiver em português). O terminal é a janela onde você digita comandos.

## macOS, passo a passo

1. **Node.js.** Em nodejs.org, baixe o instalador **LTS** (arquivo `.pkg`) e siga as telas.
2. **VS Code.** Em code.visualstudio.com, baixe, abra o `.zip` e arraste o VS Code para a pasta **Aplicativos**.
3. **Git.** Abra o app **Terminal** (Cmd + Espaço, digite "Terminal" e Enter). Digite `git --version` e aperte Enter.
   - Se aparecer um número de versão, o Git já está instalado.
   - Se o Mac oferecer instalar as "ferramentas de linha de comando", clique em **Instalar** e espere terminar.
4. **Chrome.** Em google.com/chrome, se ainda não tiver.
5. **Feche e abra o Terminal de novo.**

No Mac, você pode usar o app Terminal ou o terminal do VS Code (*Terminal → New Terminal*).

---

## Contas

- **GitHub:** crie em github.com/signup, com um e-mail que você acessa. O GitHub pode pedir verificação em duas etapas: tenha o celular por perto.
- **Claude:** crie a conta em claude.ai. Instale o app **Claude Desktop** (claude.com/download), entre com a sua conta e procure a aba **Code**. Os nomes dos botões podem mudar um pouco entre versões.
- **Notion (opcional):** crie em notion.com.
- **Claude Code no terminal (opcional):** no workshop vamos usar o app. Quem quiser a versão de terminal, siga o passo a passo oficial em code.claude.com/docs. Copie o comando de instalação de lá: ele muda de tempos em tempos.

**Sua "assinatura" no Git.** Rode uma vez no terminal, trocando pelos seus dados. Use o mesmo e-mail da conta do GitHub:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

---

## Como saber se deu certo

Abra um terminal **novo** e rode um comando por vez:

```bash
node -v
npm -v
git --version
```

| Comando | Resposta esperada (exemplo) | Se der erro |
|---|---|---|
| `node -v` | `v22.x.x` ou maior (ex.: `v24.15.0`) | Feche e abra o terminal. Se continuar, reinstale o Node LTS. |
| `npm -v` | um número, como `10.x.x` ou `11.x.x` | O npm vem junto com o Node: reinstale o Node. |
| `git --version` | `git version 2.x.x` | Reinstale o Git. |
| `code --version` (opcional) | um número de versão | No Mac: no VS Code, Cmd + Shift + P → *Shell Command: Install 'code' command in PATH*. |

---

## Teste final: seu primeiro site

1. No VS Code, abra uma pasta para os seus projetos (*File → Open Folder*). Pode criar uma chamada `workshop` em Documentos.
2. Abra o terminal (*Terminal → New Terminal*). Ele já abre dentro dessa pasta.
3. Rode estes comandos, um por vez:

```bash
npm create vite@latest meu-site -- --template vanilla
cd meu-site
npm install
npm install gsap
npm run dev
```

O que cada um faz:

| Comando | O que acontece |
|---|---|
| `npm create vite@latest meu-site -- --template vanilla` | Cria a pasta `meu-site` com um site mínimo em JavaScript puro. |
| `cd meu-site` | Entra na pasta do site. |
| `npm install` | Baixa as peças que o site usa. Pode levar 1 ou 2 minutos. |
| `npm install gsap` | Adiciona o **GSAP**, a biblioteca de animação que vamos usar. |
| `npm run dev` | Liga um servidor local. Aparece algo como `Local: http://localhost:5173/`. |

Durante o primeiro comando:

- Se aparecer `Ok to proceed? (y)`, digite `y` e aperte Enter.
- Se ele perguntar se quer instalar e iniciar agora (*Install with npm and start now?*), responda **No**. Vamos fazer passo a passo.

Para ver o site: segure Ctrl (ou Cmd, no Mac) e clique no endereço `http://localhost:5173/`, ou copie e cole no Chrome. Deve aparecer a página de boas-vindas do Vite.

Para desligar o servidor: clique no terminal e aperte **Ctrl + C**. No Windows, se ele perguntar se quer encerrar, responda `S` ou `Y`.

**Viu a página? Seu notebook está pronto.** Pode guardar ou apagar a pasta `meu-site`: no workshop vamos criar outra.

---

## Problemas comuns

| O que aparece | O que fazer |
|---|---|
| `'node' não é reconhecido...` ou `command not found: node` | Feche e abra o terminal (e o VS Code). Se continuar, reinstale o Node LTS. |
| Windows: "a execução de scripts foi desabilitada neste sistema" ao rodar `npm` | Troque de terminal: no terminal do VS Code, clique na setinha ao lado do **+** e escolha *Command Prompt* ou *Git Bash*. Rode o mesmo comando lá. |
| `node -v` mostra `v18` ou `v20` | Versão antiga. Instale a LTS atual pelo nodejs.org. |
| `Port 5173 is in use, trying another one...` | É normal: outra coisa já usa essa porta. Use o endereço novo que aparecer, como `http://localhost:5174/`. |
| `npm install` muito lento ou com erro de rede | Tente de novo em outra rede, como a do celular. No dia, o instrutor tem uma pasta pronta. |
| Mac: `permission denied` ou `EACCES` | Não use `sudo`. Neste guia nada é instalado de forma global. Confira se você está dentro da sua pasta de projetos. |

---

## Não conseguiu instalar? Sem problema

- **Acompanhe pela tela principal.** O instrutor faz tudo ao vivo, passo a passo.
- **Faça dupla** com um colega que já tem tudo instalado.
- **Refaça em casa**, com calma:
  - repositório do projeto pronto: https://github.com/Movits/sonora
  - site publicado: https://movits.github.io/sonora/
  - pasta `workshop/` do repositório: este guia e os prompts de cada etapa.
- Anote onde travou e traga a dúvida. Erro de instalação é comum e quase sempre tem solução simples.

---

## Checklist antes de sair de casa

- [ ] `node -v` mostra 22 ou mais
- [ ] `npm -v` mostra um número
- [ ] `git --version` mostra um número
- [ ] VS Code abre e o terminal dele funciona
- [ ] Chrome instalado
- [ ] Login no GitHub funcionando
- [ ] Conta Claude criada e app Claude Desktop abrindo a aba Code
- [ ] Teste do Vite feito: vi a página no navegador
- [ ] Carregador do notebook na mochila
