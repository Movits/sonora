# 17 · Testes

> Escrever testes automáticos com Playwright que abrem o site num navegador de verdade e conferem o básico sozinhos: a página carrega, o console fica limpo, nada quebra no celular e a versão com menos movimento funciona.
>
> Ao vivo no workshop: não. O SONORA já tem testes em `tests/`, que rodam no CI de cada PR (etapas 21 e 23). Material para usar no seu projeto.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI) | Sonnet 5.5 (Opus 5.5 high para decidir o que testar num projeto grande) | medium | Accept edits | opcional: `webapp-testing` (anthropics/skills, Apache 2.0) | nenhum |

Por quê:

- **Sonnet 5.5, medium:** escrever teste é construção. O Sonnet escreve bem testes de Playwright e gasta menos.
- **Accept edits:** o Claude cria os arquivos de teste sem pedir licença a cada um, mas pergunta antes de rodar `npx playwright test` e antes de instalar algo.
- **`webapp-testing`:** skill oficial da Anthropic para testar aplicações web com Playwright. É opcional.
- **Sem conector:** o Playwright roda no seu computador. O MCP do Playwright existe, mas baixa pacotes pela rede na primeira vez; não é necessário aqui.

**Analogia:** o teste é o checklist do piloto antes de decolar. Ninguém confia na memória: a lista confere sempre os mesmos itens, do mesmo jeito.

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 com ScrollTrigger (npm), Playwright com o Chrome instalado, `base: '/sonora/'` | Vite + JavaScript puro + GSAP com ScrollTrigger (npm), Playwright |
| [FUNCIONALIDADES] | hero com o produto; exploded view; seção Engenharia; especificações; chamada final para a lista de espera | destinos em cards; roteiro dia a dia; mapa da rota; perguntas frequentes; botão de orçamento pelo WhatsApp |
| [ANIMAÇÃO_DESEJADA] | o fone se desmonta conforme o scroll; blueprint em SVG que se desenha | linha da rota que se desenha no mapa conforme o scroll |
| [CRITÉRIOS_DE_ACEITAÇÃO] | console sem erros; nenhum arquivo com 404; sem rolagem horizontal em 390 px; com reduced-motion aparece a composição estática | console sem erros; botão de orçamento com link `https://wa.me/...`; sem rolagem horizontal em 390 px |

## Prompt (copiar e colar)

```text
CONTEXTO
Site de [NOME_DA_MARCA], feito com [STACK].
Seções e funções: [FUNCIONALIDADES]. Animação principal: [ANIMAÇÃO_DESEJADA].
Leia o CLAUDE.md, o package.json, o vite.config.js e, se existirem,
o playwright.config.js e a pasta tests/.

OBJETIVO
Criar (ou completar) testes automáticos com @playwright/test que confiram o básico
do site num navegador de verdade, para rodar no meu computador e no CI.

RESTRIÇÕES
- Use @playwright/test. Se não estiver no package.json, me peça antes de instalar
  como dependência de desenvolvimento.
- Use o Google Chrome já instalado (channel: 'chrome'), para não baixar navegadores.
- Nada de esperas fixas (waitForTimeout). Use as asserções que esperam sozinhas
  (expect(...).toBeVisible() e parecidas).
- Teste comportamento e estado, não pixel a pixel. Não teste cada quadro da animação.
- Não mude o código do site para o teste passar sem me avisar. Se achar um bug,
  pare e me mostre.

FERRAMENTAS PERMITIDAS
- Ler e criar arquivos em tests/ e o playwright.config.js.
- Ajustar o script "test" do package.json para "playwright test".
- Rodar npx playwright test (me peça antes).
- Não rodar git commit nem git push.

REQUISITOS TÉCNICOS
- playwright.config.js com:
  - webServer que roda o build e o preview (npm run build && npm run preview) e espera
    a URL certa, respeitando o "base" do vite.config.js;
  - baseURL igual a essa URL, terminando em barra; nos testes, page.goto('./');
  - dois projetos de tela: celular (390 x 844) e notebook (1440 x 900);
  - reuseExistingServer quando não estiver no CI.
- Testes, um arquivo por assunto:
  1. Carregamento: título da página e o h1 visíveis.
  2. Console limpo: nenhum console.error e nenhum pageerror durante o carregamento
     e uma rolagem até o fim da página.
  3. Arquivos: nenhuma resposta com status 400 ou maior (imagens, quadros, fontes).
  4. Responsivo: document.documentElement.scrollWidth não passa da largura da janela.
  5. Menos movimento: com page.emulateMedia({ reducedMotion: 'reduce' }), o conteúdo
     principal e a composição estática ficam visíveis.
  6. Funções: um teste curto para cada item de [FUNCIONALIDADES] que dá para clicar
     (ex.: acordeão abre com Enter, link do botão principal está certo).
- Nomes de teste em português, dizendo o que é esperado.

RESULTADO ESPERADO
- playwright.config.js e arquivos em tests/.
- A saída de npx playwright test com todos passando nos dois projetos.
- Um resumo: o que cada teste protege e o que NÃO está coberto.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- npm test roda tudo com um comando e passa.
- Rodar duas vezes seguidas dá o mesmo resultado (teste estável).
- Se eu quebrar de propósito um caminho de imagem, o teste de arquivos falha.

COMO VALIDAR
Me diga como rodar os testes, como ver o relatório e como provocar uma falha de
propósito para ver o teste pegando o erro.
```

## Versão curta (para o slide)

```text
Crie testes com @playwright/test para [NOME_DA_MARCA]:
página carrega, console sem erros, nenhum 404, sem rolagem horizontal
em 390 e 1440 px, e reduced-motion mostra o conteúdo.
Use o Chrome instalado, sem esperas fixas.
Rode e me mostre a saída.
```

## Resultado esperado e validação

Você deve ver um `playwright.config.js`, uma pasta `tests/` com arquivos `.spec.js` e a saída do terminal com os testes passando. Compare com os testes do SONORA, que já seguem este formato.

Um teste típico tem esta cara:

```js
import { test, expect } from '@playwright/test';

test('a página carrega sem erros no console', async ({ page }) => {
  const erros = [];
  page.on('console', (msg) => { if (msg.type() === 'error') erros.push(msg.text()); });
  page.on('pageerror', (err) => erros.push(err.message));

  await page.goto('./');
  await expect(page.locator('h1')).toBeVisible();
  expect(erros).toEqual([]);
});
```

Por que `page.goto('./')` e não `'/'`? Com `base: '/sonora/'`, o site fica em `http://localhost:4173/sonora/`. A barra sozinha (`'/'`) leva para a raiz do servidor, onde não há nada.

Comandos úteis:

```bash
npm test                              # roda todos os testes (script "test" do package.json)
npx playwright test --headed          # mostra o navegador enquanto testa
npx playwright test --ui              # abre a interface visual do Playwright
npx playwright test --project=celular # roda só o projeto "celular"
npx playwright show-report            # abre o relatório da última execução
```

Prova de que o teste funciona: troque o nome de um arquivo de imagem no código, rode `npm test` e veja o teste de arquivos falhar. Depois desfaça com `git restore <arquivo>`.

No CI, os mesmos testes rodam a cada PR. Na página da PR, a seção de checks mostra verde ou vermelho; pelo terminal, `gh pr checks`.

## Quando adaptar

- **Site com formulário ou servidor:** teste o caminho completo (preencher, enviar, ver a mensagem). Para não depender do serviço de verdade, o Playwright pode simular a resposta com `page.route`.
- **Loja ou pagamento:** teste o fluxo inteiro só em ambiente de teste do provedor de pagamento, nunca com cartão real.
- **Conteúdo que muda (cardápio, preços, destinos):** não teste o texto exato. Teste a estrutura (existe pelo menos um card, todo card tem preço).
- **Animação pesada (como o SONORA):** teste o começo e o fim (primeiro e último estado) e a versão com menos movimento. Quadro a quadro é frágil e lento.
- **Comparação visual por print (`toHaveScreenshot`):** é útil, mas muda com fonte, sistema e placa de vídeo. Use só quando os prints são gerados sempre na mesma máquina (por exemplo, só no CI).
- **Site em vários idiomas:** um projeto de teste por idioma.

## Problemas comuns

- **"Executable doesn't exist" ou navegador não encontrado** → confira se o Google Chrome está instalado e se o config usa `channel: 'chrome'`. Outra saída é `npx playwright install chromium`, que baixa o navegador do Playwright (um download: confirme antes).
- **Timeout esperando o webServer** → a URL do config não bate com a do `npm run preview` (porta ou `base`). Rode o preview à mão e copie o endereço exato.
- **Teste que passa às vezes e falha às vezes** → em geral é espera fixa ou animação no meio. Troque `waitForTimeout` por `expect(...).toBeVisible()` e, se precisar, teste com reduced-motion.
- **Passa no seu computador e falha no CI** → abra o log do CI (Details na PR). Diferença comum: fonte, tamanho de tela ou um arquivo com letra maiúscula no nome.
