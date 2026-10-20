import { test, expect } from '@playwright/test'
import { execFile } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { promisify } from 'node:util'

// Teste de fumaça da skill /review-landing: o script roda até o fim contra o site
// e produz um resultado completo e coerente. Roda só uma vez (no projeto "desktop").
const rodar = promisify(execFile)

test('o script da skill /review-landing mede o site inteiro', async ({}, info) => {
  test.skip(info.project.name !== 'desktop', 'basta rodar uma vez')
  test.setTimeout(240_000)
  await rodar(process.execPath, ['.claude/skills/review-landing/scripts/checar.mjs', 'http://localhost:4173/sonora/'], {
    maxBuffer: 20 * 1024 * 1024,
  })
  const r = JSON.parse(readFileSync('review-landing/resultado.json', 'utf8'))
  expect(r.completa).toBe(true)
  expect(r.titulos.quantidadeH1).toBe(1)
  for (const tela of r.telas) {
    expect(tela.errosConsole, tela.nome).toEqual([])
    expect(tela.imagens.quebradas, tela.nome).toEqual([])
    expect(tela.rede.dominiosExternos, `${tela.nome}: nada de CDN`).toEqual([])
    expect(tela.rolagemLateral.sobraPx, tela.nome).toBeLessThanOrEqual(0)
  }
})
