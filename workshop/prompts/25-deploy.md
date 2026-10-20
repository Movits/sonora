# 25 · Deploy

> Publicar o site na internet de graça, com endereço público, e fazer cada merge na `main` atualizar o site sozinho (GitHub Pages via GitHub Actions). Para quem não usa Git, há a alternativa de arrastar a pasta para o Netlify Drop.
>
> Ao vivo no workshop: sim, em duas partes. No P3b (slide 32, cerca de 6 min, logo depois do P3), o Roberto publica o Projeto B ainda vazio e a turma abre no celular; a cada passo seguinte, o push atualiza o site. No P12 (slide 51, cerca de 3 min), o último push e a versão final no celular.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI). GitHub no navegador: **Settings › Pages** e aba **Actions** do repositório | Sonnet 5.5 | medium | Manual | nenhuma | nenhum (o `gh` faz a ponte com o GitHub) |

Por quê:

- **Sonnet 5.5, medium:** escrever o workflow e ajustar o `base` do Vite é configuração conhecida.
- **Manual:** publicar é ação pública. Você aprova cada comando e cada arquivo de configuração.
- **Configurações do repositório (Settings › Pages):** quem muda é você, no navegador. O Claude explica onde clicar.
- **Nunca use Bypass.**

**Analogia:** o `npm run build` "imprime" o site na pasta `dist/`. O GitHub Actions é a gráfica automática: a cada merge, ela imprime de novo e pendura o cartaz novo na vitrine (GitHub Pages).

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA (repositório `sonora`, endereço https://movits.github.io/sonora/) | ANDARA Viagens (repositório `andara-viagens`, endereço `https://<seu-usuario>.github.io/andara-viagens/`) |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 (npm), quadros em `public/frames`, `base: '/sonora/'` | Vite + JavaScript puro + GSAP (npm) |
| [CRITÉRIOS_DE_ACEITAÇÃO] | o site abre no endereço público; console sem erros; Network sem 404 (quadros, fontes, imagens); exploded view funciona | o site abre no endereço público; fotos carregam; botão de orçamento abre o WhatsApp |

Os campos entre `< >` (nome do repositório, seu usuário) são dados do momento.

## Prompt (copiar e colar)

```text
CONTEXTO
Site de [NOME_DA_MARCA], feito com [STACK]. O repositório no GitHub é público:
<seu-usuario>/<nome-do-repositorio>. Endereço esperado:
https://<seu-usuario>.github.io/<nome-do-repositorio>/
Leia o vite.config.js, o package.json e a pasta .github/workflows/ (se existir).

OBJETIVO
Publicar o site no GitHub Pages pelo GitHub Actions, para que todo merge na main
atualize o site sozinho.

RESTRIÇÕES
- Trabalhe numa branch (chore/deploy-pages) e entregue por PR. Nada de push na main.
- Não mude configurações do repositório pelo terminal: me diga onde clicar.
- Não coloque segredo nenhum no workflow (o site é estático e não precisa).
- Não instale pacotes novos.

FERRAMENTAS PERMITIDAS
- Ler e editar vite.config.js, arquivos de src/ e criar .github/workflows/deploy.yml.
- Rodar npm run build e npm run preview.
- git e gh (status, add, commit, push da branch, pr create, run list, run watch).

REQUISITOS TÉCNICOS
1. base do Vite: no vite.config.js, base: '/<nome-do-repositorio>/'
   (com barra no começo e no fim).
2. Caminhos: tudo que está em public/ e é montado no JavaScript (ex.: os quadros da
   animação) precisa usar import.meta.env.BASE_URL. Procure caminhos que começam com
   "/" no código e me mostre a lista antes de mudar.
3. Nomes de arquivo: confira se as maiúsculas e minúsculas no código batem com os
   arquivos (no servidor do GitHub, Hero.webp e hero.webp são diferentes).
4. Workflow .github/workflows/deploy.yml:
   - dispara em push na main e manualmente (workflow_dispatch);
   - permissões mínimas: contents: read, pages: write, id-token: write;
   - job de build: checkout, setup-node (Node 22), npm ci, npm run build,
     configure-pages e upload-pages-artifact com a pasta dist;
   - job de deploy: deploy-pages, no ambiente github-pages;
   - use as actions oficiais (actions/...) na versão mais recente que você conhecer
     e me avise para eu conferir as versões.
5. Teste local antes de abrir a PR: npm run build e npm run preview, abrindo o
   endereço com o base.
6. Me diga o passo manual: Settings › Pages › Source = GitHub Actions.

RESULTADO ESPERADO
- vite.config.js com o base certo, caminhos corrigidos e o workflow criado.
- Uma PR com o template preenchido (etapa 21).
- Depois do merge: o run de deploy verde e o endereço público funcionando.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- npm run preview mostra o site certo no endereço com o base.
- O workflow de deploy termina com sucesso depois do merge.

COMO VALIDAR
Me diga como acompanhar o deploy (aba Actions ou gh run watch) e o que conferir
no site publicado (Console, Network, celular).
```

## Versão curta (para o slide)

```text
Publique [NOME_DA_MARCA] no GitHub Pages pelo Actions.
vite.config.js: base '/<repo>/'. Caminhos do public/ no JS com
import.meta.env.BASE_URL. Workflow: push na main → npm ci,
npm run build, upload de dist, deploy-pages.
Teste com npm run preview. Entregue por PR.
```

## Versão curta · primeiro deploy (P3b, logo depois do P3)

Na aula, o site vai para o ar **antes** de ganhar conteúdo, com as seções vazias. Assim a turma abre o endereço no celular e vê cada passo seguinte aparecer. Este primeiro deploy vai direto na `main`, porque a PR só é ensinada no P10. Daí em diante, cada commit com push na `main` publica de novo.

```text
Publique [NOME_DA_MARCA] no GitHub Pages pelo Actions já,
para a turma acompanhar no celular. Repositório
público [REPO]: crie sem push e me espere ligar o Pages.
vite.config.js: base '/[REPO]/'. Workflow: push na main →
npm ci, npm run build, upload de dist, deploy-pages.
Teste com npm run preview. Este primeiro deploy vai
direto na main (a PR vem no P10).
```

- **Ordem:** criar o repositório sem push → **Settings › Pages › Source: GitHub Actions** → push. Se o push vier antes, o primeiro run falha com "Get Pages site failed": ligue o Pages e use **Re-run jobs**.
- **Ensaio de 20/10/2026** (site de relógio, Claude Code 2.1.304, Sonnet 5.5 · medium): o site ficou no ar uns 4 min depois do prompt, e o run de deploy levou 28 s.

## Resultado esperado e validação

O que deve aparecer:

1. `vite.config.js` com `base: '/<nome-do-repositorio>/'`.
2. `.github/workflows/deploy.yml` novo.
3. Uma PR. Depois do merge, a aba **Actions** mostra o run de deploy. Quando ele fica verde, o site está no ar.

Passo manual (uma vez por repositório): no GitHub, **Settings › Pages › Build and deployment › Source: GitHub Actions** (os nomes podem mudar; conferir na tela).

Teste local, antes da PR:

```bash
npm run build
npm run preview
```

Abra o endereço que o `preview` mostrar (no SONORA, `http://localhost:4173/sonora/`). Depois do merge:

```bash
gh run list --limit 3   # o deploy aparece na lista
gh run watch            # acompanha o run até terminar
```

No site publicado: F12, aba **Console** (sem vermelho) e aba **Network** (sem 404). Teste também no celular de verdade.

Referência do workflow (é o formato padrão do GitHub Pages com Actions; **as versões `@vN` mudam: confira a mais recente antes da aula**):

```yaml
name: Deploy no GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

**Alternativa sem Git: Netlify Drop.**

1. No `vite.config.js`, use `base: '/'` (no Netlify o site fica na raiz do endereço).
2. Rode `npm run build`.
3. Abra `app.netlify.com/drop` e arraste a pasta `dist/` para a página. Pode pedir login (conferir antes da aula).
4. O Netlify devolve um endereço `...netlify.app`. Cada atualização exige arrastar de novo.

**Custos (outubro de 2026):**

| Item | Custo | Observação |
|---|---|---|
| GitHub Pages | grátis em repositório público | Repositório privado exige plano pago. Limites: site de até 1 GB, banda de 100 GB/mês (limite flexível), 10 builds por hora. As regras proíbem usar como hospedagem de negócio online ou loja. |
| Netlify Free | grátis | 300 créditos por mês; cada GB de banda consome 20 créditos. |
| Vercel Hobby | grátis | Só para uso pessoal, não comercial. |
| Cloudflare Pages | grátis | Cada arquivo pode ter no máximo 25 MiB (atenção ao vídeo). |
| Domínio .com.br | R$ 40 por ano | Registro.br. |
| Domínio .com | cerca de US$ 10 por ano | Valor de referência de terceiros; varia por registrador (conferir). |

## Quando adaptar

- **Site com servidor (formulário que grava, login, banco):** o GitHub Pages só serve arquivos prontos; não roda servidor. Você vai precisar de outro serviço para a parte de servidor (backend próprio ou serviços como Supabase e Firebase, que têm plano grátis com limites). A arquitetura muda.
- **Loja ou negócio real:** as regras do GitHub Pages proíbem. Use uma plataforma de loja ou uma hospedagem que aceite uso comercial, e leia os termos.
- **Vídeo pesado ou muitos quadros:** respeite o limite por arquivo do serviço e pense no celular: vídeo menor (por exemplo, 720p) e menos quadros. Teste o tempo de carregamento numa rede lenta (Network › seletor de velocidade).
- **Domínio próprio:** em Settings › Pages há o campo de domínio personalizado; depois, no registrador do domínio, você aponta o DNS. Com domínio próprio na raiz, o `base` volta a ser `'/'`. Conferir o passo a passo atual do GitHub antes.
- **Site com várias páginas e rotas (React Router e parecidos):** o GitHub Pages não sabe redirecionar rotas e pode dar 404 ao recarregar. Nesse caso, compare outras hospedagens.
- **Repositório chamado `<seu-usuario>.github.io`:** ele publica na raiz (`https://<seu-usuario>.github.io/`), então o `base` é `'/'`.

## Problemas comuns

- **Página em branco ou CSS faltando no site publicado** → o `base` está errado. Ele precisa ser `'/<nome-do-repositorio>/'`, com as duas barras.
- **Quadros, imagens ou fontes com 404 só no site publicado** → caminhos montados no JavaScript sem `import.meta.env.BASE_URL`, ou maiúsculas e minúsculas diferentes no nome do arquivo. Use a etapa 16.
- **O workflow falha com "Get Pages site failed"** → o Pages ainda não está ligado com Source = GitHub Actions. Ligue em Settings › Pages e rode de novo (Actions › Re-run, ou `workflow_dispatch`).
- **O site mostra a versão antiga** → confira se o run terminou verde e recarregue com Ctrl+Shift+R. Às vezes leva alguns minutos.
