# Relatório de testes

Preparação do Workshop de IA (aula de 20/10/2026). Só entra como "testado" o que foi executado de verdade,
com a evidência ao lado. Datas: 19/10/2026 (prompt 03: 20/10/2026), máquina do Roberto (Windows 11, Chrome, Node 24).

## 1. Testado e aprovado

| O quê | Como foi testado | Resultado |
| --- | --- | --- |
| Build do SONORA | `npm run build` local e no CI (GitHub Actions) | Sem erro; JS de 120 kB (47 kB com gzip) |
| Testes do SONORA | `npx playwright test` (Chrome do sistema; desktop e celular) | 13 passam, 1 pulado de propósito (o teste do script da skill roda só no desktop) |
| CI da PR #1 | job "Testes" no GitHub Actions | Verde; PR mesclada |
| Publicação | GitHub Pages em https://movits.github.io/sonora/ | No ar (HTTP 200); deploy automático a cada merge na main |
| Qualidade visual | inspector da taste-skill em 1440, 768 e 390 px | 0 FAIL, 2 WARN defendidos (exceções que a skill permite) |
| Cena do scroll | gravação da rolagem no site publicado + folha de quadros conferida | Os quadros carregam e a explosão e a remontagem aparecem completas (baixar os quadros só quando a cena entra na tela é a correção da PR ao vivo) |
| Carga inicial | medição do `/review-landing` antes e depois da correção | 1ª carga de 4,4 MB para 437 KB (correção na branch da PR ao vivo) |
| Skill `/review-landing` | rodada no SONORA; numa página com defeitos plantados; numa página-armadilha para falsos positivos; teste de fumaça `tests/checar.spec.js` no CI | Pegou todos os defeitos plantados; sem falso positivo de overflow e de SVG depois da correção; revisão incompleta sai com código 1 |
| Biblioteca de prompts | ensaio num 2º tema (agência de viagens), seguindo a biblioteca etapa por etapa | 14/14 funcionaram (4 sem mudança, 10 com adaptação); relatório em `relatorio-ensaio-universalidade.md` |
| Com e sem skill de design | o mesmo hero gerado com e sem a `frontend-design` no ensaio | Capturas `comparativo/sem-skill.png` e `com-skill.png` |
| Pasta base do Projeto B | `npm run build`, `npm test` (2 testes), prova negativa (imagem que falta e div larga fazem os testes falharem), cópia com `Copy-Item` e extração do zip | Tudo passou; a base tem 1 commit e nada modificado; o zip tem 116,8 KB e precisa de `npm install` depois de extraído |
| Prompt 03 (P2, modo Plan) | 14 rodadas em 20/10 pelo Claude Code do app (modo Plan, Opus 5.5 high), com um roteiro que aprovava o plano em Manual e liberava só `docs/plano.md`, numa pasta com o brief e os requisitos do ensaio | Nenhuma edição antes da aprovação; nenhuma biblioteca fora da stack. O texto antigo levava de 2 a 3 min, chegava a cerca de 1.900 a 2.200 palavras e planejava `npm create vite` (conflito com a base). Com o texto da aula (versão curta nova + acréscimo do guia, 2 rodadas): plano na tela em 52 a 115 s, 499 a 636 palavras, base respeitada (`/meu-site/`, `src/sections`, `public/img`), sem ler fora da pasta; numa delas, uma passada de corte de uns 25 s para caber nas 500 palavras. Só a versão curta, sem o acréscimo (a dos alunos): 145 s, 518 palavras, com contagem de palavras |
| Sequência do P3 | os comandos do guia rodados ao pé da letra numa pasta temporária, pela cópia e pelo zip (com `docs\` de teste) | Commit e tag `passo-1` criados, sem `docs\docs`, `git status` limpo, build e 2 testes passando |
| Deck | `validate.py` da skill pptx; LibreOffice → PDF; folhas de miniaturas conferidas | 51 slides, 51 com notas; sem texto estourando a caixa nas miniaturas |
| Deck no Google Slides | piloto enviado pelo Chrome e convertido com "Salvar como Apresentações Google" | Notas do apresentador conferidas na interface |
| Notion demo | página privada e banco "Trabalho \| SONORA" criados pelo conector | Views Quadro e Entregue; cartão da skill com a PR #1 como comprovação |
| Vídeos de reserva | `sonora-scroll.mp4` (35 s) e `ciclo-da-pr.mp4` (77 s), conferidos por folha de quadros | Na pasta `WRW - Workshop\reservas` do OneDrive |

## 2. Testado com problemas (e o que foi feito)

| O quê | Problema | O que foi feito |
| --- | --- | --- |
| `higgsfield-product-photoshoot` | O servidor não respondeu em 3 tentativas | Nenhum crédito gasto; imagens geradas com GPT Image 2.5 usando o fone como referência |
| Capturas no navegador do app | Falham com o painel escondido | O Playwright fez as capturas e os testes |
| Gravação de vídeo do Playwright | Pede para baixar um ffmpeg próprio | Gravado pela captura de tela do próprio Chrome e montado com o ffmpeg já instalado |
| Página da PR no GitHub (sem login) | Às vezes demora mais de 30 s para abrir | Nova tentativa automática; para a aula, deixar a aba da PR aberta antes |
| Inspector da taste-skill | Percorre só 12 telas, e a página é mais longa | As entradas do fim da página foram conferidas à parte (teste de rolagem) |
| Prompt 06 no ensaio | O botão reprovou no 1º cálculo de contraste (4,47:1) | O prompt já manda conferir o par texto/fundo do botão; anotado no guia do instrutor |

## 3. Não testado

- **Celular de verdade** (iPhone e Android): só emulação no Chrome. Ver o checklist.
- **Safari** e outros navegadores além do Chrome.
- **O plano novo do P2 nos prompts seguintes (05 a 13):** o ensaio parou no `docs/plano.md` salvo.
- **Prompt 03 no app Desktop, com clique:** o ensaio foi pelo Claude Code do app em modo texto, com a aprovação feita por um roteiro. No Desktop, os tempos podem variar um pouco.
- **Deploy do Projeto B (P12) num repositório novo:** o fluxo foi testado no SONORA (repositório, Actions e
  Pages), mas não num repositório `meu-site` criado do zero.
- **A aula em tempo real:** a estimativa do ensaio (P1 a P8 em cerca de 55 a 64 min) não inclui as perguntas da
  turma.
- **Rede e projetor do local.**
- **Leitor de tela de verdade:** a acessibilidade foi medida pelo script (títulos, rótulos, foco), não ouvida.
- **A skill `/review-landing` instalada em `~/.claude/skills/` em outra máquina.**

## 4. Depende de autorização ou decisão do Roberto

- Abrir, revisar e mesclar a PR ao vivo (P10) e mover o cartão no Notion.
- Criar o repositório `meu-site` e ativar o Pages ao vivo (P12): é publicação.
- Reenviar o `all.zip` atualizado em claude.ai › Skills (o catálogo do `/all` ganhou a `review-landing`).
- Decidir sobre os hooks pessoais e sobre o upload automático de sessões antes de projetar a tela.
- Gerar imagens ao vivo no Higgsfield (gasta créditos; a aula usa os kits prontos).

## 5. Opcional (fica para depois)

- Teste da skill com uma página de defeitos plantados versionada no repositório (lacuna apontada pela revisão
  de testes da PR #1).
- Ensaiar o deploy num repositório novo.
- Skill `web-design-guidelines` como segunda opinião no P8.
