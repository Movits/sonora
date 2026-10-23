# Kit de skills da oficina

Três skills para o site que a equipe fez no workshop de 20/10 (Vite + GSAP, com `CLAUDE.md` e `docs/brief.md`).
Cada uma é um único `SKILL.md`, sem scripts: dá para ler inteira em 2 minutos. **Leia antes de instalar**, mesmo esta.

| Skill | O que faz | Mexe em quê | Chamar |
|---|---|---|---|
| [divulgar](divulgar/SKILL.md) | 3 textos de divulgação (Instagram, LinkedIn, WhatsApp) a partir do que está no site, com imagem sugerida e a origem de cada afirmação | só cria `docs/divulgacao.md` | `/divulgar` ou "escreve um post do site" |
| [antes-de-publicar](antes-de-publicar/SKILL.md) | build, testes, base do Vite, peso, caminhos, segredos e console; veredito PRONTO ou NÃO PRONTO com prova | nada | `/antes-de-publicar` ou "posso publicar?" |
| [revisar-textos](revisar-textos/SKILL.md) | tabela com texto atual, problema e sugestão; aplica só o que você aprovar | só os textos aprovados | `/revisar-textos` ou "revisa os textos" |

## Instalar

Do jeito da oficina (o Claude baixa, mostra, espera o seu OK e grava): veja o prompt
[O2](../prompts/O2-instalar-uma-skill-do-kit.md).

À mão, no PowerShell, dentro da pasta do seu site (troque `divulgar` pela skill que quiser):

```powershell
New-Item -ItemType Directory -Force .claude\skills\divulgar
curl.exe -L -o .claude\skills\divulgar\SKILL.md https://raw.githubusercontent.com/Movits/sonora/main/workshop/skills/kit/divulgar/SKILL.md
```

Depois, abra uma sessão nova e digite `/`: a skill aparece na lista.

## O que cada uma faz e não faz

- **divulgar:** lê o site e o brief; não inventa preço, data nem número (vira `[a confirmar]`); se o site diz que a marca
  é fictícia ou a ação é demonstrativa, o texto também diz; não publica em rede social nenhuma; não roda git.
- **antes-de-publicar:** só roda comandos de checagem (`git status`, `git log`, `git remote`, `npm run build`, `npm test`
  e, se precisar, `npm run preview`), um por vez; não abre o `.env`; não corrige nada sem OK.
- **revisar-textos:** primeiro só lê; depois muda apenas o texto dos itens aprovados (nada de classe, estilo ou
  estrutura) e roda `npm run build` no fim.

## Ensaio (23/10/2026, site do relógio, Claude Code 2.1.308)

- `antes-de-publicar`: PRONTO em cerca de 1,5 min, com prova nos 8 itens. Com a base do Vite trocada de propósito:
  FALHA no item 4 e NÃO PRONTO, explicando por que os testes passavam mesmo assim.
- `divulgar`: 3 textos em cerca de 1 min; preço e data como `[a confirmar]`; nenhuma palavra proibida pelo projeto.
- `revisar-textos`: 8 itens, parou e pediu OK, aplicou 2 só no texto. 3 dos 8 itens tinham defeito, e a skill foi
  ajustada depois do ensaio (texto atual exato, sem "ao lado"/"abaixo").

Licença: a mesma do repositório (MIT). Adapte à vontade; se publicar uma versão sua, diga de onde veio.
