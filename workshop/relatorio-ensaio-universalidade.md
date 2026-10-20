# Ensaio de universalidade: os prompts fora dos headphones

> **Nota sobre a numeração.** Os blocos P1 a P9 deste relatório são os do ensaio, não os do deck. No deck (e no guia do instrutor), eles ficam assim:
>
> | Ensaio | Prompts | Deck |
> |---|---|---|
> | P1 | 01 + 02 | P1 (brief e requisitos) |
> | P2 | 04 + 05 | P3 (projeto e CLAUDE.md). A stack (04) já vem fixa; o P2 do deck é o plano, com o 03, que não foi ensaiado |
> | P3 | 06 | P4 (identidade visual) |
> | P4 | imagens no Higgsfield (não ensaiado) | P5 (imagens, só demonstração) |
> | P5 | 10 | P6 (landing page) |
> | P6 | 12 | P7 (animação de scroll) |
> | P7 | 13 + 14 | sem prática própria: as fotos entram no P6; a 14 fica para "se sobrar tempo" |
> | P8 | 15 | P8 (revisão com a /review-landing), que no deck roda no SONORA |
> | P9 | 19 + 20 | P9 (branch, diff e commits), que no deck roda no SONORA |
> | — | 16 | slide 38 (debugging com erro plantado) |
>
> Os P10 a P12 citados abaixo já usam a numeração do deck. Os estados descritos são os do ensaio de 19/10; o estado atual da pasta base do Projeto B está no guia do instrutor.

Workshop de IA · ensaio de 19/10/2026 · tema: agência de viagens (ANDARA Viagens, marca fictícia)
Site do ensaio: `C:\Users\rober\workshop-ia\ensaio-viagens\site` · notas: `ensaio-viagens\_notas` · comparativo: `ensaio-viagens\comparativo`

## Objetivo

Provar que a biblioteca de `workshop/prompts` funciona fora do contexto do SONORA (headphones). Para isso, as etapas do Projeto B foram rodadas na ordem do workshop num tema diferente, o de agência de viagens, com o kit de imagens pronto. Para cada prompt, o ensaio anotou se funcionou como está, o que foi preciso adaptar e quanto tempo levou. No fim, os próprios prompts foram corrigidos com o que apareceu.

**Resultado:** os 14 prompts testados funcionaram e nenhum falhou. Quatro rodaram sem mudança (02, 04, 10 e 12) e dez precisaram de adaptação. O site compila e abre com o console limpo. O `npm test` passa 23 testes (1 é pulado de propósito). A rota se desenha no mapa com pin e scrub, volta quando a página sobe e aparece completa com reduced-motion. O repositório local tem 6 commits na branch `feat/landing-andara`, sem remoto e sem push.

> O resumo do ensaio diz "3 sem mudança e 11 com adaptação", mas a lista das etapas tem 4 e 10. Este relatório usa a lista.

Não foram ensaiadas neste tema: 03, 07, 08, 09, 11, 18 e 21 a 26. Isso inclui os blocos ao vivo P10 a P12 (PR, revisão, merge, Notion e deploy), porque o ensaio não tinha remoto e não podia fazer push. Os kits de hamburgueria e de relógio também não foram testados.

## Resultado por prompt

| Prompt | Resultado | Min | O que precisou adaptar | Problema |
|---|---|---|---|---|
| 01 Pesquisa e negócio | com adaptação | 2,2 | A vitrine mudou para Patagônia, Portugal e Japão, porque o kit (lago glacial, falésias, bonde, templo) não batia com o exemplo, que falava em Chapada Diamantina. O instrutor respondeu às 5 perguntas. O brief nasceu fora do projeto e foi movido na etapa 05. | A referência "Tourisme Sumène Artense, premiado no Awwwards" não foi confirmada (detalhes abaixo). Se `docs/` for criado antes do `npm create vite`, o create-vite oferece remover os arquivos, o que apagaria o brief. |
| 02 Requisitos | sem mudança | 0,6 | — | "No máximo 6 em Precisa" não diz se o limite vale para RF e RNF somados. |
| 04 Stack | sem mudança | 1,2 | — | Na primeira vez, o npm pergunta "Ok to proceed? (y)". O `docs/plano.md` não existe, porque a etapa 03 fica fora; o "se existirem" do prompt resolveu. |
| 05 Estrutura | com adaptação | 1,8 | O `/init` não roda dentro de um subagente, então o CLAUDE.md foi escrito direto. Os docs saíram de `../docs` para `docs/`. O nome do repositório foi escolhido pelo instrutor. | O Playwright 1.64.1 procura o `chromium-1248`, que não está baixado: só funciona com `channel: 'chrome'`. |
| 06 Identidade visual | com adaptação | 2,9 | O botão reprovou no primeiro cálculo de contraste: 4,47:1 e 3,03:1. Passou com #10283e sobre #f47a42 (5,53:1). O `estilo.html` não tinha `<link rel="icon">` e dava 404 no console. | O brief empurra para o visual padrão de turismo (areia + serifada + laranja). A fonte dos títulos foi trocada para fugir dele. |
| 10 Landing page | sem mudança | 3,2 | — | O prompt pede espaço reservado para imagem, mas o kit já existia. O HTML das imagens foi refeito na 13 (retrabalho). |
| 12 Animações de scroll | sem mudança | 2,7 | — | A gsap-skills recomendada não está instalada. Uma seção fixada mais alta que a tela corta o conteúdo, e o prompt não avisa. |
| 13 Ativos | com adaptação | 3,1 | Os originais foram copiados do kit para `_originais/`. Os cartões 4:5 com fotos 16:9 exigiram `crop` manual em cada foto. O hero saiu com 1920×1086. | Nenhum. |
| 14 Interações | com adaptação | 2,3 | Os roteiros de exemplo de Portugal e do Japão foram escritos do zero. Abrir um painel pediu `ScrollTrigger.refresh()`. | O cartão dizia "uma semana de trilha" e o roteiro tinha 3 dias; a etapa 15 pegou. |
| 15 Revisão de design | com adaptação | 2,5 | O `@playwright/test` foi instalado antes da hora (ele só entra na 17). A skill foi copiada e `/review-landing/` foi para o `.gitignore`. A revisão rodou no mesmo contexto de quem construiu. | Ao vivo, a skill para e pede a instalação. |
| 16 Debugging | com adaptação | 1,2 | Ainda não havia git (etapa 19) nem `npm test` (etapa 17): a investigação foi por leitura e busca. | O build passou com o erro; só o console mostrou. |
| 17 Testes | com adaptação | 4,1 | `appType: 'mpa'` no `vite.config.js`. | No padrão do Vite, a imagem que falta volta com 200 text/html, e o teste "nenhum 404" passava com a imagem quebrada. |
| 19 Organização do Git | com adaptação | 0,5 | Sem `gh repo create`, pull nem push, porque não havia remoto e o ensaio proibia. | Sem `.gitattributes`, cada `git add` mostra avisos de CRLF. O "working tree clean" não fecha na 19. |
| 20 Commits | com adaptação | 1,1 | Assuntos que moram no mesmo arquivo não foram separados (`git add -p` é interativo). | Os commits intermediários não compilam sozinhos. Com o git só na etapa 19, não dá para cumprir "um assunto por commit". |
| **Total** | 14 de 14 funcionaram | **29,4** | | |

Sobre a referência do Awwwards: o Tourisme Sumène Artense existe ([site oficial](https://www.tourisme-sumene-artense.com/)) e aparece na [lista Travel & Tourism do Awwwards](https://www.awwwards.com/websites/travel-tourism/), creditado ao estúdio SPKTR, segundo uma busca feita em 19/10. O nível do prêmio não foi confirmado. Nos prompts 01 e 15, o exemplo passou a dizer "aparece na lista Travel & Tourism; prêmio a confirmar".

## Tempo: medido e ao vivo

**Medido:** 29,4 min no total, cronometrados com `date +%s` em `_notas/tempos.txt` (a soma das etapas dá 1.763 s). Sem as etapas 16 e 17, que ficam para casa, foram 24,1 min.

**Ao vivo vai demorar mais**, porque o agente não explica, a turma não participa e não há rede ruim. A estimativa abaixo soma três margens:

1. **×1,5 sobre o tempo do agente:** rede do local, latência do app e aprovação de cada comando no modo Manual.
2. **+2 a 4 min por bloco de interação humana que não acontece enquanto o modelo trabalha:** a turma escolhe o tema e responde às perguntas, o instrutor escolhe a direção ou os itens da revisão, lê as mensagens de commit em voz alta e espera o `npm install` na rede do local.
3. **+25% sobre tudo, para imprevistos:** um passo refeito, uma queda de rede, uma pergunta da turma.

| Bloco | Etapas | Agente (min) | Ao vivo estimado (min) |
|---|---|---|---|
| P1 | 01 + 02 | 2,8 | 10 |
| P2 | 04 + 05 | 3,0 | 9 |
| P3 | 06 | 2,9 | 8 |
| P5 | 10 | 3,2 | 8 a 9 |
| P6 | 12 | 2,7 | 8 |
| P7 | 13 + 14 | 5,4 | 13 |
| P8 | 15 | 2,5 | 7 |
| P9 | 19 + 20 | 1,6 | 6 |
| **Total** | | **24,1** | **cerca de 70 (entre 60 e 80)** |

O P4 (imagens no Higgsfield) não entrou no ensaio e não está nesta conta.

**Como isso se compara à agenda:** pelos marcos do plano de contingência, o Projeto B começa em H+1h00 e o fluxo de trabalho em H+2h05. Ficam 65 min para P1 a P8, e a estimativa para esses blocos dá cerca de 64. Ou seja, **cabe, mas sem folga nenhuma**.

Com a pasta pronta antes da aula (Vite, gsap, `@playwright/test`, `git init`, `appType: 'mpa'`, `.gitattributes`, a skill `/review-landing` copiada e as fotos já recortadas em `_originais/`), o P2 cai para cerca de 4 min e o P7 para cerca de 9. P1 a P8 ficam em torno de 55 min, com 10 min de folga.

Os tempos por bloco que estão nos slides e no README são apertados. O P1 tem 5 min, mas com a turma respondendo leva de 8 a 10. O P8 tem 5 min, mas leva cerca de 7 se aplicar 1 ou 2 itens.

## Ao vivo ou para casa

| Situação | Prompts | Por quê |
|---|---|---|
| **Seguro ao vivo** | 02, 06, 10, 12, 14, 19, 20 | Funcionaram e são curtos (de 0,5 a 3,2 min de agente). Na 14, faça uma interação só. A 12 rodou bem sem a gsap-skills. A 19 e a 20 ficam limpas se o git tiver nascido na 05. |
| **Ao vivo, só com preparo antes** | 01, 04, 05, 13, 15 | 01: tema e kit combinados antes, e as perguntas respondidas pela turma. 04 e 05: dependem de rede, do "Ok to proceed?" e do `/init`; melhor partir da pasta pronta e mostrar a estrutura. 13: o recorte 4:5 pede olho em cada foto; leve 2 ou 3 já recortadas. 15: o Playwright e a skill precisam estar instalados. |
| **Para casa** | 16, 17 | A 17 é a etapa mais longa (4,1 min) e o achado do `appType` pede explicação. A 16 é ótima para a aula ("build verde não prova nada") e leva só 1,2 min com o erro plantado: use como bônus se sobrar tempo. |
| **Não ensaiados neste tema** | 03, 07, 08, 09, 11, 18, 21 a 26 | Não há evidência deste ensaio. Os blocos P10 a P12 dependem do SONORA, que já está no ar, e da PR de reserva. |

**Antes da aula**, em ordem:

1. Montar a pasta pronta do Projeto B com o que está na lista acima.
2. Rodar o `npm test` do SONORA na máquina do palco, para confirmar o Chrome com `channel: 'chrome'`.
3. Decidir se instala a gsap-skills ou se tira a recomendação da etapa 12.
4. Alinhar o README e a etapa 08 com a vitrine nova (veja "O que ficou de fora").

## Comparativo com e sem skill

Mesmo prompt (a versão curta da etapa 10, com as variáveis da ANDARA), mesma foto (`hero.webp`), só a primeira tela, capturada a 1280×720 no Chrome. Nas duas versões, o console ficou limpo, e em 375 px não houve rolagem lateral e o botão apareceu na primeira tela.

A versão sem skill saiu no molde mais comum: foto sob película azul, título branco em negrito na fonte do sistema, selo em maiúsculas, dois botões e três destaques. Funciona, mas serviria para qualquer agência, e o botão branco sobre laranja dá 2,8:1, abaixo do mínimo AA.

A versão com a skill `frontend-design` mostra a foto inteira e põe o texto embaixo, no fundo areia, como a abertura de uma revista. O título é uma serifa grande, os detalhes estão numa fonte de placa e há um botão só, com texto azul sobre laranja (cerca de 5:1). O texto também ficou mais concreto. A diferença está na composição e na tipografia, não em detalhe, e custou só ler um arquivo.

Ressalvas honestas:

- O teste foi feito uma vez, e o mesmo modelo fez as duas versões sabendo que era um teste, o que favorece a versão com skill.
- A versão B usa fontes que vêm com o Windows (Sitka e Bahnschrift). Isso fere a regra de fontes locais da etapa 06, e num Mac a página aberta ao vivo troca de fonte (as capturas não mudam).
- Só a primeira tela foi comparada.
- No ensaio principal, mesmo com a skill, foi preciso desviar à mão do visual padrão de turismo. A skill ajuda, mas não substitui o olho de quem revisa.

## Ajustes aplicados nos prompts

Cada arquivo abaixo ganhou, no fim, a seção "Notas do ensaio (19/10/2026)". As seções e a numeração não mudaram.

- **01:** o exemplo de produto passou para Patagônia, Portugal e Japão, os destinos do kit, e a referência ganhou "prêmio a confirmar". O CONTEXTO agora pede para conferir se o material pronto combina com as variáveis. As FERRAMENTAS avisam que, sem projeto Vite, o `npm create vite` deve criar uma pasta nova. Em Problemas comuns entraram o "não aceite remover os arquivos" do create-vite e o caso de imagens que não combinam com o brief.
- **05:** o Passo A propõe mover o brief e os requisitos de `../docs` para `docs/`, traz `appType: "mpa"` no `vite.config.js` (também no exemplo e na versão curta), cria o `.gitattributes` com `* text=auto eol=lf` e propõe `git init` com o primeiro commit depois do build. O passo do `/init` ganhou a alternativa de escrever o CLAUDE.md direto.
- **06:** o contraste agora inclui o texto do botão sobre a cor de destaque. O prompt pede para fugir do visual de sempre do segmento, não só dos clichês de IA. O `estilo.html` passa a ter `<link rel="icon">`, e ele pode ter um JS mínimo para as fontes. Problemas comuns ganhou três casos: o botão de cor quente, a cara de todo site do segmento e o 404 do favicon.
- **13:** o prompt pergunta onde estão os originais e copia para `_originais/`. Ele pede `crop` com deslocamento escolhido quando a proporção muda e usa `width` e `height` reais, conferidos com o `ffprobe`. O critério de 404 ganhou a ressalva do `appType`. O exemplo de `crop` 4:5 e o comando do `ffprobe` foram testados com ffmpeg 8.1.2: 800×1000 e 1920×1086. Problemas comuns ganhou o "200 sem imagem" e o recorte que corta o assunto.
- **14:** o conteúdo que falta é escrito como "de exemplo" e conferido contra o resto da página. Quando a interação muda a altura da página, o prompt pede `ScrollTrigger.refresh()` (no `<details>`, pelo evento `toggle`). Problemas comuns ganhou o pin desalinhado e o texto que contradiz o cartão.
- **15:** antes de rodar a skill, o prompt confere se o `@playwright/test` está instalado; se faltar, para e pergunta, ou revisa sem a skill. Também manda pôr `/review-landing/` no `.gitignore`. O exemplo de referência foi corrigido. Problemas comuns ganhou a skill pedindo Playwright e o "Executable doesn't exist".
- **16:** git log, git diff e `npm test` passam a valer "se existir"; sem git, o Claude pergunta o que mudou e busca o nome que aparece no erro. O prompt lembra que build verde não prova a correção e que um erro no `main.js` para o resto da página. A tabela do DevTools ganhou a ressalva do 200 text/html. Problemas comuns ganhou três casos.
- **17:** o teste de arquivos manda conferir o `appType` e o content-type das imagens. A "prova de que o teste funciona" explica o que fazer se nada falhar. Problemas comuns explica o `chromium-<número>` e o teste de 404 que passa.
- **19:** o prompt confere o `.gitattributes` e recomenda criar o repositório na etapa 05. Se o site já existe, o primeiro commit leva só a base. O "working tree clean" ficou condicional. Problemas comuns ganhou os avisos de CRLF e o status que não limpa.
- **20:** quando dois assuntos estão no mesmo arquivo, sai um commit só, explicado, sem `git add -p`. O prompt pede que cada commit compile sozinho. Quando adaptar ganhou o caso de commitar ao fim das etapas 06, 10, 12, 13 e 14.

## O que ficou de fora

Estes arquivos não foram tocados, por escopo. As mudanças ficam como sugestão:

- **README.md (linhas 116 e 121) e 08 (linha 53):** o exemplo da agência ainda fala em Chapada Diamantina, e o README ainda diz "premiados no Awwwards (ex.: Tourisme Sumène Artense)". Sugestão: alinhar com o 01.
- **02:** dizer se "no máximo 6 em Precisa" soma RF e RNF.
- **04:** avisar sobre o "Ok to proceed? (y)" na primeira execução do `npm create vite`.
- **10:** se as imagens já existem, usar as imagens direto em vez de espaço reservado, para evitar o retrabalho na 13.
- **12:** avisar que uma seção fixada mais alta que a tela corta o conteúdo. Pôr a ressalva do `appType` nos "404 na aba Network" das linhas 115, 191 e 210. Decidir o que fazer com a gsap-skills, que não está instalada.
- **checklist-pre-workshop.md:** incluir os itens da pasta pronta listados acima.

## Como conferir

Não rodei de novo o build nem os testes. Conferi os tempos em `_notas/tempos.txt`, os 6 commits com `git log` e o `appType: 'mpa'` no `vite.config.js` do ensaio. Para repetir:

```bash
cd C:/Users/rober/workshop-ia/ensaio-viagens/site
npm run build      # ✓ built; o maior arquivo do dist é o hero-1920.webp (368 KB)
npm test           # Playwright: 23 passam e 1 é pulado de propósito, em 390 e 1440 px
git log --oneline  # 6 commits na feat/landing-andara, sem remoto
```
