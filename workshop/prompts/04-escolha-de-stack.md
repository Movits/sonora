# 04 · Escolha de stack

> Escolher as ferramentas do projeto (linguagem, bibliotecas, hospedagem) pelos requisitos e pelo seu nível, e registrar o porquê. Stack é o "kit de ferramentas" do site: escolher mal é como levar uma furadeira para pregar um quadro.
>
> Ao vivo no workshop: sim (slide P2, junto com a etapa 05). A stack do workshop já está decidida (tabela abaixo): o Roberto explica o porquê e roda os comandos de criação do Projeto B. Use o prompt completo nos seus próximos projetos.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Opus 5.5 | high | Plan | nenhuma | nenhum |

Por quê:

- **Opus 5.5, high:** escolher stack é decisão de arquitetura. Ela define o que você vai conseguir manter daqui a seis meses.
- **Modo Plan:** o Claude compara e recomenda sem instalar nada. Instalar pacote é a última coisa, depois da sua aprovação.
- **Sem skill e sem conector:** o trabalho é ler os requisitos e conferir pacotes no npm.

### A stack do workshop (já decidida, e por quê)

| Peça | O que é | Por que foi escolhida |
|---|---|---|
| Vite | servidor de desenvolvimento e ferramenta de build | abre o site em segundos e gera a pasta `dist/` pronta para publicar |
| JavaScript puro | sem framework (sem React) | menos conceitos para aprender; o foco fica em HTML, CSS e animação |
| GSAP 3.15 + ScrollTrigger (pelo npm) | biblioteca de animação; o ScrollTrigger liga a animação ao scroll | madura e bem documentada. Licença própria da Webflow, gratuita inclusive para uso comercial, mas não é open source OSI |
| Fontes locais | arquivos `.woff2` dentro do projeto, ou um pacote `@fontsource` pelo npm (o SONORA usa este) | o site funciona sem internet e sem depender de CDN |
| Playwright | testes automáticos no navegador | confere se a página abre e se não há erro no console |
| GitHub Pages | hospedagem de site estático | grátis para repositório público e publica pelo GitHub Actions |

Comandos para começar o Projeto B:

```bash
npm create vite@latest meu-site -- --template vanilla
cd meu-site
npm install
npm install gsap
npm run dev
```

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [OBJETIVO_DO_SITE] | apresentar o fone e levar à lista de espera (demonstrativa) | levar a pedir orçamento pelo WhatsApp |
| [FUNCIONALIDADES] | hero; exploded view; Engenharia; especificações; chamada final | destinos; roteiro; mapa da rota; perguntas frequentes; botão de orçamento |
| [ANIMAÇÃO_DESEJADA] | sequência de cerca de 120 quadros num canvas fixado, com scrub | linha da rota que se desenha no mapa (SVG) |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 com ScrollTrigger (npm), fontes locais, Playwright, GitHub Pages | "não sei, me recomende" (ou a mesma stack do workshop) |
| [CRITÉRIOS_DE_ACEITAÇÃO] | build sem erro; funciona sem internet depois de publicado; reduced-motion | build sem erro; botão visível no celular; fotos com texto alternativo |

## Prompt (copiar e colar)

```text
CONTEXTO
Leia docs/brief.md, docs/requisitos.md e docs/plano.md, se existirem.
Objetivo do site: [OBJETIVO_DO_SITE].
Funcionalidades: [FUNCIONALIDADES].
Animação: [ANIMAÇÃO_DESEJADA].
Minha preferência de stack: [STACK].
Critérios: [CRITÉRIOS_DE_ACEITAÇÃO].
Sou iniciante em programação; vou manter este projeto sozinho.

OBJETIVO
Recomendar a stack mais simples que cumpre os requisitos e registrar a decisão
em docs/stack.md.

RESTRIÇÕES
- Compare no máximo 3 opções. Uma delas deve ser a mais simples possível
  (HTML, CSS e JavaScript com Vite).
- Não invente pacote. Para cada biblioteca citada, confirme que existe no npm
  e informe a versão atual e a licença, rodando:
  npm view <pacote> version license
  Se não conseguir confirmar, escreva "não confirmado".
- Prefira menos dependências. Cada biblioteca a mais precisa de um motivo
  ligado a um requisito.
- Nada de CDN. Tudo instalado pelo npm ou guardado no projeto.
- Diga com clareza se algum requisito exige servidor (backend) e quanto isso
  muda de custo e de complexidade.
- Não instale nada antes da minha aprovação.

FERRAMENTAS PERMITIDAS
- Ler arquivos do projeto.
- Rodar só comandos de consulta: npm view, node --version, npm --version.
- Consultar documentação oficial das ferramentas comparadas.
- Depois da aprovação: criar docs/stack.md e rodar os comandos de instalação
  que eu aprovar.

REQUISITOS TÉCNICOS
Compare as opções numa tabela com estes critérios:
facilidade para iniciante, precisa de backend?, custo de hospedagem,
peso para o celular, licença, funciona sem CDN, publica no GitHub Pages?,
quanto tempo até o primeiro resultado na tela.

RESULTADO ESPERADO
1. Tabela comparativa e recomendação em 3 frases.
2. Depois da aprovação, docs/stack.md com:
   decisão, alternativas descartadas e por quê, comandos exatos de criação,
   dependências com versão e licença, o que exigiria servidor no futuro,
   e "quando rever esta decisão".

CRITÉRIOS DE ACEITAÇÃO
- Toda biblioteca citada tem versão e licença conferidas com npm view
  ou está marcada "não confirmado".
- A recomendação cita qual requisito justifica cada dependência.
- Os comandos de criação rodam numa pasta vazia sem erro.

COMO VALIDAR
- Mostre a saída do npm view de cada pacote.
- Diga qual comando eu rodo para ver o site funcionando pela primeira vez.
```

## Versão curta (para o slide)

```text
(Modo Plan) Leia docs/. Compare até 3 stacks para [OBJETIVO_DO_SITE] com [FUNCIONALIDADES], para um iniciante. Critérios: facilidade, backend, custo, peso no celular, licença, sem CDN, GitHub Pages. Confira cada pacote com "npm view <pacote> version license". Recomende a mais simples e registre em docs/stack.md. Não instale nada antes da aprovação.
```

## Resultado esperado e validação

O que deve aparecer:

- Uma tabela comparativa e uma recomendação curta.
- A saída de `npm view` de cada pacote. Exemplo do que conferir:

```bash
npm view gsap version license
npm view vite version license
```

- Depois da aprovação, `docs/stack.md` e os comandos de instalação.

Como conferir:

- Rode você mesmo um `npm view` de qualquer pacote citado. Se der erro 404, o pacote não existe. Pare e avise o Claude.
- Abra `package.json`: só podem aparecer as dependências aprovadas.
- Rode `npm run dev` e abra o endereço que aparecer no terminal (no Vite, o padrão é `http://localhost:5173`).

## Quando adaptar

- **Loja virtual real:** carrinho, estoque e pagamento pedem backend e um provedor de pagamento, ou uma plataforma de loja pronta. Não tente fazer pagamento num site estático.
- **Negócio real hospedado de graça:** as regras do GitHub Pages proíbem usá-lo como hospedagem de negócio online ou loja. Para cliente real, compare Netlify e Cloudflare Pages (no Cloudflare Pages, cada arquivo pode ter no máximo 25 MiB). O Vercel Hobby é só para uso não comercial.
- **Login ou dados salvos:** serviços como Supabase e Firebase têm plano grátis com limites (o Supabase Free pausa o projeto depois de 7 dias sem uso). Isso já é outra arquitetura: chaves, regras de acesso e LGPD.
- **Blog ou cardápio que muda toda semana:** um gerador de site estático ou um arquivo de dados (JSON) separado do HTML facilita a vida de quem atualiza.
- **Objeto 3D que o visitante gira:** Three.js (licença MIT) entra, mas exige GPU, modelo 3D separado por peças e mais estudo. Para iniciante, uma sequência de imagens costuma dar o mesmo efeito com menos risco.
- **Equipe que já sabe React:** aí React pode ser a escolha simples, porque o "simples" depende de quem vai manter.

## Problemas comuns

- **Pacote que não existe ou abandonado** → `npm view <pacote>` dá 404 ou mostra a última versão de anos atrás. Peça alternativa ou faça sem a biblioteca.
- **O Claude sugere CDN ("cole esta tag script")** → peça "instale pelo npm e importe no main.js". CDN quebra sem internet e muda sem aviso.
- **Versões que não combinam (erro de peer dependency no npm install)** → copie o erro inteiro para o Claude e peça a explicação antes de qualquer `--force`.
- **Stack demais para o problema** → pergunte "qual requisito justifica esta biblioteca?". Se ele não souber responder, ela sai.
