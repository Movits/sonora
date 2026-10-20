# Relatório de testes

Preparação do Workshop de IA (aula de 20/10/2026). Só entra como "testado" o que foi executado de verdade,
com a evidência ao lado. Datas: 19/10/2026, máquina do Roberto (Windows 11, Chrome, Node 24).

## 1. Testado e aprovado

| O quê | Como foi testado | Resultado |
| --- | --- | --- |
| Build do SONORA | `npm run build` local e no CI (GitHub Actions) | Sem erro; JS de 120 kB (47 kB com gzip) |
| Testes do SONORA | `npx playwright test` (Chrome do sistema; desktop e celular) | 13 passam, 1 pulado de propósito (o teste do script da skill roda só no desktop) |
| CI da PR #1 | job "Testes" no GitHub Actions | Verde; PR mesclada |
| Publicação | GitHub Pages em https://movits.github.io/sonora/ | No ar (HTTP 200); deploy automático a cada merge na main |
| Qualidade visual | inspector da taste-skill em 1440, 768 e 390 px | 0 FAIL, 2 WARN defendidos (exceções que a skill permite) |
| Cena do scroll | gravação da rolagem no site publicado + folha de quadros conferida | Os quadros carregam quando a cena entra na tela; explosão e remontagem completas |
| Carga inicial | medição do `/review-landing` antes e depois da correção | 1ª carga de 4,4 MB para 437 KB (correção na branch da PR ao vivo) |
| Skill `/review-landing` | rodada no SONORA; numa página com defeitos plantados; numa página-armadilha para falsos positivos; teste de fumaça `tests/checar.spec.js` no CI | Pegou todos os defeitos plantados; sem falso positivo de overflow e de SVG depois da correção; revisão incompleta sai com código 1 |
| Biblioteca de prompts | ensaio num 2º tema (agência de viagens), seguindo os prompts ao pé da letra | 14/14 funcionaram (6 sem mudança, 8 com adaptação pequena); relatório em `relatorio-ensaio-universalidade.md` |
| Com e sem skill de design | o mesmo hero gerado com e sem a `frontend-design` no ensaio | Capturas `comparativo/sem-skill.png` e `com-skill.png` |
| Pasta base do Projeto B | `npm run build`, `npm test` (2 testes), prova negativa (imagem que falta e div larga fazem os testes falharem), cópia com `Copy-Item` e extração do zip | Tudo passou; a base tem 1 commit e nada modificado; o zip tem 116,8 KB e precisa de `npm install` depois de extraído |
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
- **Prompt 03 (P2, planejamento no modo Plan):** não entrou no ensaio.
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
- Ensaiar o prompt 03 e o deploy num repositório novo.
- Skill `web-design-guidelines` como segunda opinião no P8.
