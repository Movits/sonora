# 16 · Debugging

> Encontrar a causa de um erro antes de corrigir, seguindo um caminho fixo: Problema → Investigação → Hipótese → Correção → Teste → Validação. Sem "chute" e sem remendo que só esconde o sintoma.
>
> Ao vivo no workshop: só se aparecer um erro de verdade (slide 40, até 5 min). Nada é quebrado de propósito: se algum passo deu erro, o Roberto usa a versão curta com esse erro, com Opus 5.5, high, Manual. Se nada deu erro, o slide mostra só o método.

## Configuração recomendada

| Ferramenta (onde abrir) | Modelo | Effort | Modo | Skill | Conector |
|---|---|---|---|---|---|
| Claude Desktop › aba Code, na pasta do projeto (ou Claude Code CLI), com o Chrome e o DevTools (F12) abertos | Opus 5.5 | high | Manual | nenhuma obrigatória; opcional: `webapp-testing` (anthropics/skills, Apache 2.0) para reproduzir o erro no navegador | nenhum |

Por quê:

- **Opus 5.5, high:** diagnóstico pede raciocínio: ligar sintoma, código e o que mudou. Um modelo mais fraco tende a "consertar" o primeiro suspeito.
- **Manual:** você aprova cada comando e cada edição. Assim, a investigação não vira uma sequência de mudanças às cegas.
- **Effort não é temperatura:** effort é quanto o modelo pensa. Para bug difícil, high ajuda; `max` só se high não resolver (vale só na sessão).
- **`webapp-testing`:** opcional, ajuda o Claude a abrir a página com Playwright e ler o console sozinho.
- **Nunca use Bypass.**

## Variáveis

| Variável | SONORA | Agência de viagens |
|---|---|---|
| [NOME_DA_MARCA] | SONORA | ANDARA Viagens |
| [STACK] | Vite + JavaScript puro + GSAP 3.15 com ScrollTrigger (npm), quadros WebP em `public/frames` | Vite + JavaScript puro + GSAP com ScrollTrigger (npm) |
| [ANIMAÇÃO_DESEJADA] | o fone se desmonta conforme o scroll (canvas fixado com ~120 quadros) | linha da rota que se desenha no mapa conforme o scroll |
| [CRITÉRIOS_DE_ACEITAÇÃO] | exploded view acompanha o scroll nos dois sentidos; console sem erros; Network sem 404 | a linha da rota termina junto com a seção; console sem erros |

Os campos entre `< >` no prompt são dados do momento (o erro, o que você esperava). Preencha com o que você viu.

## Prompt (copiar e colar)

```text
CONTEXTO
Projeto: site de [NOME_DA_MARCA], feito com [STACK].
Animação principal: [ANIMAÇÃO_DESEJADA].
Rodo com npm run dev e abro no Chrome.

PROBLEMA (o que eu vejo)
- O que acontece: <ex.: a animação do topo fica parada quando rolo a página>
- O que eu esperava: <ex.: a animação acompanhar a rolagem>
- Onde: <seção, largura da tela, navegador; local (npm run dev) ou publicado>
- Desde quando: <ex.: depois do último commit, depois de trocar as imagens>
- Erros do Console (copiados do DevTools): <cole aqui>
- Pedidos com erro na aba Network (ex.: 404): <cole aqui ou "nenhum">

OBJETIVO
Encontrar a causa raiz antes de corrigir. Não quero remendo que esconda o sintoma.

RESTRIÇÕES
- Fase 1 é só leitura: não edite nenhum arquivo até eu aprovar a hipótese.
- A correção deve ser a menor possível. Não reescreva arquivos inteiros.
- Não desative testes, não remova a animação e não silencie erros com try/catch vazio.
- Nada de git reset, git push, git commit ou instalação de pacotes.

FERRAMENTAS PERMITIDAS
- Ler arquivos, buscar no código e, se o projeto já tiver git, ver git log e git diff.
- Rodar npm run dev, npm run build, npm run preview e, se existir no package.json,
  npm test (me peça antes).
- Colocar console.log temporários (ou markers: true no ScrollTrigger, se o projeto usar GSAP)
  só para investigar, e remover tudo antes de terminar.

REQUISITOS TÉCNICOS (siga este método, nesta ordem)
1. Problema: reescreva o sintoma em uma frase e diga como reproduzir, passo a passo.
2. Investigação: leia os arquivos envolvidos e o que mudou recentemente
   (git log --oneline -5 e git diff; sem git, me pergunte o que foi feito por
   último e procure no código o nome citado no erro). Liste as evidências.
   Lembre que um erro no main.js pode parar tudo o que vem depois dele.
3. Hipótese: até 3, da mais provável para a menos provável. Para cada uma: a evidência
   a favor, a evidência contra e o teste mais barato para confirmar ou descartar.
   PARE aqui e espere eu escolher.
4. Correção: só depois do meu OK, faça a menor mudança que ataca a causa.
5. Teste: rode npm run build e, se existir, npm test. Build verde não prova a
   correção (o build não acusa nome de função errado): confira também o console.
   Se o projeto tiver testes, crie um que falharia antes da correção e passa depois.
6. Validação: diga o que eu confiro no navegador (Console, Network, a seção afetada
   em 390 e 1440 px, e com reduced-motion).

RESULTADO ESPERADO
- Primeiro, só os passos 1 a 3 (diagnóstico). Pare.
- Depois do meu OK: a correção, a saída dos testes e um resumo com causa,
  arquivo:linha, o que mudou e como evitar que volte.

CRITÉRIOS DE ACEITAÇÃO
- [CRITÉRIOS_DE_ACEITAÇÃO]
- O sintoma não aparece mais seguindo os passos de reprodução.
- Console sem erros e Network sem 404.
- npm run build passa (e npm test, se o projeto tiver testes).
- Nenhum console.log de investigação ficou no código.

COMO VALIDAR
Repita os passos de reprodução e diga o que eu devo ver agora.
Sugira a mensagem do commit (tipo fix:) com o "por quê" no corpo.
```

## Versão curta (para o slide)

```text
Bug: <o que vejo> | Esperado: <o que deveria> | Console: <erro>.
Não edite ainda. 1) Reproduza. 2) Investigue (código e, se houver, git diff).
3) Até 3 hipóteses com evidência e teste barato. Pare.
Depois do meu OK: menor correção, build e testes,
e me diga como validar no navegador.
```

## Resultado esperado e validação

O método em uma tabela:

| Passo | Pergunta | O que você faz | O que o Claude faz |
|---|---|---|---|
| Problema | O que exatamente está errado? | Descreve o sintoma e cola o erro do Console | Reescreve o sintoma e o jeito de reproduzir |
| Investigação | Onde e desde quando? | Diz o que mudou por último | Lê o código, `git log`, `git diff` |
| Hipótese | Por que acontece? | Escolhe qual hipótese testar | Lista até 3, com evidência e teste |
| Correção | Qual a menor mudança? | Aprova a edição (modo Manual) | Edita só o necessário |
| Teste | Prova que resolveu? | Aprova rodar os comandos | `npm run build`, `npm test` |
| Validação | Resolveu para quem usa? | Confere no navegador | Diz onde olhar |

O DevTools é o "raio X" do site (F12 no Chrome):

| Painel | Para quê | O que procurar |
|---|---|---|
| Console | Erros de JavaScript | Linhas vermelhas. Clique no `arquivo:linha` à direita para ir ao código. |
| Network | Arquivos que a página baixou | Status `404` (arquivo não encontrado). Filtre por **Img** para ver os quadros. Marque **Disable cache**. Num projeto Vite sem `appType: "mpa"`, o arquivo que falta volta com `200` e `content-type: text/html` (clique na linha › Headers). |
| Elements | HTML e CSS de cada parte | Elemento existe? Está com `display: none`, `opacity: 0` ou fora da tela? |
| Performance | Travadas na rolagem | Grave alguns segundos rolando a página e procure blocos longos em vermelho. |
| Modo responsivo (Ctrl+Shift+M) | Tamanhos de tela | O bug só aparece no celular? |
| Menu de comandos (Ctrl+Shift+P) | Simular `prefers-reduced-motion` | Digite `reduced motion`. |

Para conferir que a correção vale também para a versão publicada, teste o build, não só o modo de desenvolvimento:

```bash
npm run build
npm run preview
```

Abra o endereço que o `preview` mostrar e repita os passos. Para desfazer uma tentativa que não deu certo: `git restore <arquivo>` (apaga as mudanças não commitadas daquele arquivo) ou `/rewind` no Claude Code (não cobre comandos de terminal; conferir no app desktop).

## Quando adaptar

- **Bug só no site publicado:** suspeite primeiro do caminho base (`base` do Vite) e de letras maiúsculas e minúsculas em nomes de arquivo. O Windows trata `Hero.webp` e `hero.webp` como iguais; o servidor do GitHub Pages, não. Veja a etapa 25.
- **Bug só no celular de verdade:** o modo responsivo não imita tudo (memória, GPU, barra do navegador). Teste no aparelho; com cabo USB e o Chrome do Android, `chrome://inspect` mostra o console do celular.
- **Bug que aparece "às vezes":** em geral é tempo. A animação começou antes de as imagens ou as fontes carregarem. No GSAP, `ScrollTrigger.refresh()` depois do carregamento costuma resolver.
- **Lentidão (não erro):** a investigação é no painel Performance e no peso dos arquivos. Quadros grandes demais e muitos ao mesmo tempo pesam na memória.
- **Projeto com servidor e banco:** o DevTools não basta. O erro pode estar nos logs do servidor; inclua esses logs no PROBLEMA.

## Problemas comuns

- **O Claude "corrige" sem achar a causa e cria outro bug** → exija o diagnóstico antes (fase 1 só leitura) e use o modo Manual.
- **Várias tentativas em círculo** → pare. Peça um resumo do que já foi descartado, rode `/clear` e comece uma conversa nova com esse resumo no PROBLEMA.
- **"Na minha máquina funciona"** → recarregue com Ctrl+Shift+R, marque Disable cache e teste com `npm run build` e `npm run preview`.
- **O build passou, mas a página está quebrada** → o `npm run build` só junta os arquivos: nome de função errado só aparece no Console (`ReferenceError`), quando a página roda. Sempre abra o Console depois do build.
- **Um erro desligou uma parte que não tem nada a ver** → o `main.js` parou na linha do erro e não chegou a iniciar as seções seguintes. Corrija o primeiro erro do Console antes de investigar o resto.
- **O projeto ainda não tem git nem testes** → a investigação vale do mesmo jeito: diga ao Claude o que você mudou por último e peça para ele procurar no código o nome que aparece no erro.
- **O erro some quando abro o DevTools** → abrir o DevTools muda o tamanho da janela, e a animação recalcula. Isso é uma pista: o bug depende do tamanho da tela ou do momento em que a página mediu o layout.

## Exemplo ruim × bom

**Ruim:**

```text
O site quebrou, conserta aí.
```

**Bom:**

```text
Bug: no hero, o canvas fica preto quando rolo a página.
Esperado: os quadros do fone mudarem com a rolagem.
Onde: Chrome, 1440 px, só no site publicado (local funciona).
Desde: o primeiro deploy.
Console: nenhum erro. Network: 404 em /frames/0001.webp.
Não edite ainda. Reproduza, investigue (código e git diff) e me dê até 3 hipóteses
com evidência e um teste barato para cada. Pare e espere meu OK.
```

Por que o bom funciona melhor:

- **Dá evidência:** o 404 e o "só no publicado" já apontam para o caminho dos arquivos. O Claude não precisa adivinhar.
- **Separa sintoma de esperado:** fica claro o que é "consertado".
- **Proíbe editar antes de entender:** evita a troca de um bug por outro.
- **Pede hipóteses com teste:** você aprende o raciocínio e escolhe o que testar.
- **O ruim** obriga o modelo a chutar. Ele pode reescrever a animação inteira e o problema (um caminho de arquivo) continuar lá.

## Notas do ensaio (19/10/2026)

- Tema agência de viagens, com um erro plantado (`fracaoDasParadas` no lugar de `fracaoDaParada`, em `mapa.js:32`): 1,2 min do diagnóstico com 3 hipóteses até a correção de uma palavra, com console limpo em 1440 e 390 px.
- O `npm run build` passou com o erro. O console mostrou o `ReferenceError`, e em cascata o botão final parou de citar o destino, porque o `main.js` parou antes de `initOrcamento`. É um bom exemplo para a aula.
- Na ordem do workshop ainda não há git (etapa 19) nem `npm test` (etapa 17). A investigação foi feita por leitura e busca, por isso o prompt agora trata os dois como "se existir".
