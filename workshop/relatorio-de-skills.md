# Relatório de skills: o que foi chamado, como funcionou

Auditoria pedida pelo Roberto ("verifique se todas as skills relevantes foram chamadas e se funcionaram bem").
Preparação do Workshop de IA, 19 a 20/10/2026. Roteador: `/all` (catálogo v7 na hora do roteamento; v8 depois,
com a linha da `review-landing`).

Legenda: **OK** = chamada e funcionou · **Parcial** = funcionou com ressalva · **Falhou** = chamada, mas não
entregou (com o motivo) · **Fora** = relevante, mas deixada de fora de propósito (com o motivo) ·
**Não chamada** = previa no plano e acabou não sendo usada (com o motivo).

## Resumo

- **Chamadas e funcionando:** roteador `/all`, workflow-authoring, plan mode, taste-skill, higgsfield-generate,
  animate, emil-design-eng, mobile-native, built-in-browser (parcial), skill-creator (por agente), code-review,
  silent-failure-hunter, pr-test-analyzer, frontend-design (no ensaio), pptx, chrome-browser, google-workspace,
  conectores do Notion, do GitHub (gh) e do Higgsfield.
- **Falhou:** higgsfield-product-photoshoot (o servidor não respondeu; nenhum crédito gasto; substituída).
- **Fora de propósito:** gpt-tasteskill, scroll-craft, frontend-design na SONORA, design-is, presets de estilo,
  image-to-code, imagegen-frontend, deep-research, council e grilling.
- **Não chamadas (previstas no plano):** claude-api, explain-usage e dataviz. Motivos na tabela; nenhuma delas
  deixou buraco no material.
- **Custo de geração:** 112 créditos do Higgsfield (saldo 1.000 → 888), dentro do teto de 300 autorizado.

## Planejamento e diagnóstico

| Skill / ferramenta | Situação | Evidência | Observações |
| --- | --- | --- | --- |
| `anthropic-skills:all` (roteador) | OK | nota de roteamento no início da conversa | Escolheu domínios, skills e o que fica de fora; sem drift no catálogo. |
| `workflow-authoring` | OK | 6 workflows rodados sem erro de script | Diagnóstico (7 agentes), materiais-base (9), ensaio (3), deck-conteúdo (8), materiais-finais (3), reconciliação dos materiais (até 10, com juiz adversarial por lente). |
| Plan mode | OK | plano aprovado em `~/.claude/plans/use-a-skill-anthropic-skills-all-abstract-whistle.md` | |
| Workflow: diagnóstico | OK | 7/7 agentes, 0 erros; relatórios em `_diag/` e `workshop/diagnostico.md` | O agente do Claude Code teve WebFetch/WebSearch negados: preços de Pro/Max/Team ficaram **não confirmados** e não entram nos slides. A transcrição do vídeo do Nate Herk não foi acessível (o YouTube devolveu 404). |
| Agente `claude-code-guide` | Parcial | `_diag/diag_claude_code.md` | Comandos e modos conferidos na documentação oficial, não na versão 2.1.299 instalada. |
| Agente Plan | Fora | — | Pulado por causa do horário; o agente crítico do diagnóstico revisou o plano. |
| `deep-research` | Fora | — | O Workflow do diagnóstico cobriu a pesquisa (não dobrar orquestradores). |
| `council`, `grilling` | Fora | — | As decisões já estavam fechadas com o Roberto (prazo, publicação, imagens, turma, WRW). |

## Site SONORA

| Skill / ferramenta | Situação | Evidência | Observações |
| --- | --- | --- | --- |
| `taste-skill` (direção visual) | OK | `sonora/.taste-skill/direction.json`; inspector: 10 FAIL → **0 FAIL**, 2 WARN defendidos | Paleta sorteada (pedra clara + azul) trocada pelas cores do produto. Lint de 3 FAIL resolvido com exceções que a própria skill permite (sombras neutras sob texto em foto; sombra de janela flutuante). O inspector só percorre 12 telas; isso escondia entradas do fim da página (resolvido). |
| `higgsfield-generate` | OK | 112 créditos no total (SONORA + kits de reserva); saldo 888 | Ignorados de propósito o "não pré-estime custo" e a instalação da CLI (regra do Roberto vence: orçamento antes de gerar). Upload de PNG repetido falhou uma vez (erro S3); com o ID de upload funcionou. |
| `higgsfield-product-photoshoot` | **Falhou** | 3 tentativas: `Cannot reach .../product-photoshoot/enhance` | O enriquecedor do servidor não respondeu quando havia imagem de referência ou mais de 1 variação. Nenhum crédito gasto. Substituída por GPT Image 2.5 com o fone como referência (mais barato: ~25 créditos em vez de ~58). |
| `animate` | OK | curva `--ease-out` padrão, hovers só com mouse, reduced-motion sem zoom | |
| `emil-design-eng` | OK | janela da reserva com entrada `scale(.96)`, pulso no total do recibo, `:active` unificado | |
| `mobile-native` | OK | `viewport-fit=cover`, safe-area, `touch-action`, `user-select` nos controles, alvos de 44 px | O teste em celular de verdade **não foi feito** (só emulação): fica no checklist. |
| `built-in-browser` | Parcial | console sem erros | Capturas de tela falham com o painel escondido; o Playwright cobriu. |
| Playwright (testes) | OK | `npm test`: 13 passam e 1 é pulado de propósito (o teste do script da skill roda só no desktop) | Inclui celular, reduced-motion e o teste de fumaça do `checar.mjs`. CI verde no GitHub. |
| `frontend-design` | OK (no ensaio) | `ensaio-viagens/comparativo/sem-skill.png` e `com-skill.png` | Usada só no Projeto B de ensaio, para o comparativo com/sem skill do slide. Na SONORA ficou fora (uma direção visual só; a taste-skill já era a direção). |
| `gpt-tasteskill` | Fora | — | Conflita com a taste-skill (pede vidro e gradientes que a outra proíbe). |
| scroll-craft (Nate Herk) | Fora | — | Não instalada (riscos: procura `.env` até 8 pastas acima, servidor que serve dotfiles, envia imagens a um serviço externo). Vira estudo de caso de segurança nos slides. |
| `design-is`, presets de estilo, `image-to-code`, `imagegen-frontend-*` | Fora | — | O inspector da taste-skill já cobre a crítica; os outros têm custo, peso e direção concorrente. |

## Fluxo profissional, materiais e deck

| Skill / ferramenta | Situação | Evidência | Observações |
| --- | --- | --- | --- |
| Workflow: materiais-base | OK | 9/9 agentes; 26 prompts + 8 documentos em `workshop/` | |
| Workflow: ensaio de universalidade | OK | `workshop/relatorio-ensaio-universalidade.md`: 14/14 prompts funcionaram no tema "agência de viagens" | O prompt 03 (P2) ficou fora desse ensaio e foi ensaiado à parte em 20/10 (14 rodadas no modo Plan, ver o relatório de testes). |
| Workflow: materiais-finais | OK | pasta base `projeto-b-base` (build e 2 testes passando; zip refeito depois, com 116,8 KB), guia do instrutor, passada de consistência | Os 3 agentes rodaram em paralelo e o guia não viu a pasta base pronta; a reconciliação seguinte corrigiu isso. |
| Notion (conector) | OK | página privada "Workshop IA · SONORA (demo)" com o banco "Trabalho \| SONORA", views Quadro e Entregue, 6 cartões | O cartão da skill está em "Feito (a validar)" com a PR #1 como comprovação. |
| GitHub (gh) | OK | repo público `Movits/sonora`, 6 tags, Pages no ar, PR #1 mesclada com CI verde | |
| `skill-creator` | OK (por agente) | `.claude/skills/review-landing/` (SKILL.md, `scripts/checar.mjs`, README) | Rodou num agente separado (contexto próprio, como pede o catálogo para skills grandes). Seguiu o método (descrição com gatilhos, "porquê" de cada regra, script para o repetitivo); os evals e o benchmark foram pulados por tempo. A skill foi testada no SONORA e numa página com defeitos plantados. |
| `code-review` | OK | 10 achados na PR #1 | 7 corrigidos dentro da própria PR #1; os outros 3 (falsos positivos de overflow e SVG, função duplicada) corrigidos depois, no commit `57ee6c2`. |
| Agente `silent-failure-hunter` | OK | 3 achados ALTA e 2 MÉDIA no `checar.mjs` | Nenhum catch vazio; o problema era resultado parcial parecendo completo. Corrigido: `completa`, código de saída 1, `titulos: null` quando o desktop não é medido, try/catch por tela. |
| Agente `pr-test-analyzer` | OK | 2 lacunas (notas 6 e 5) | Virou o teste de fumaça `tests/checar.spec.js`, que roda no CI. Fica em aberto a lacuna 1: um teste com página de defeitos plantados versionada no repositório. |
| `pptx` | OK | `deck/saida/Workshop-IA-WRW.pptx` (51 slides, 51 com notas); `validate.py` passa | O validador falha no Windows por caminho longo; copiado para `deck/_pptx/` e passou. QA: LibreOffice → PDF → folhas de miniaturas conferidas. |
| `chrome-browser` + `google-workspace` | OK | piloto convertido para Google Slides com as notas conferidas na interface | O conector do Drive não sobe arquivo grande (base64 na chamada); o upload foi feito pelo Chrome. A versão final do deck segue a mesma rota. |
| `claude-api` | Não chamada | — | A skill serve para construir apps com a API. Os preços e modelos do slide vieram da documentação oficial (platform.claude.com/docs), com data e fonte no próprio slide. |
| `explain-usage` | Não chamada | — | O slide de tokens usa uma conta ilustrativa (marcada como tal), não o gasto real desta sessão. |
| `dataviz` | Não chamada | — | O deck não tem gráfico de dados; os diagramas foram feitos com formas nativas do PowerPoint, que o Google Slides converte melhor que imagem. |
| `verification-before-completion`, `sanidade` | Na verificação final | — | Rodam no fechamento, depois do clone limpo. |
