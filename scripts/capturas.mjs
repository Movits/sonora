// Tira capturas de tela do site (para revisar o design e para os slides do workshop).
// Uso: com o site rodando (npm run dev ou npm run preview), rode:
//   node scripts/capturas.mjs [url]
// As imagens vão para a pasta capturas/ (fora do Git).
import { chromium } from '@playwright/test'
import { mkdirSync } from 'node:fs'

const URL = process.argv[2] || 'http://localhost:5173/sonora/'
const PASTA = 'capturas'
mkdirSync(PASTA, { recursive: true })

const telas = [
  { nome: 'desktop', width: 1440, height: 900 },
  { nome: 'projetor', width: 1280, height: 720 },
  { nome: 'celular', width: 390, height: 844 },
]
const secoes = ['#topo', '#detalhes', '#ruido', '#caixa', '#numeros', '#reserva', '.rodape']

const browser = await chromium.launch({ channel: 'chrome' })
for (const t of telas) {
  const page = await browser.newPage({ viewport: { width: t.width, height: t.height } })
  const erros = []
  page.on('pageerror', (e) => erros.push(e.message))
  page.on('console', (m) => m.type() === 'error' && erros.push(m.text()))
  await page.goto(URL, { waitUntil: 'load' })
  await page.waitForTimeout(1200)
  // a cena de scroll em 4 momentos
  const cena = await page.$('#por-dentro')
  const box = await cena.boundingBox()
  for (const p of [0.05, 0.35, 0.68, 0.95]) {
    await page.evaluate((y) => window.scrollTo(0, y), box.y + (box.height - t.height) * p)
    await page.waitForTimeout(900)
    await page.screenshot({ path: `${PASTA}/${t.nome}-cena-${Math.round(p * 100)}.jpg`, quality: 80 })
  }
  for (const s of secoes) {
    await page.evaluate((sel) => document.querySelector(sel)?.scrollIntoView({ block: 'start' }), s)
    await page.waitForTimeout(900)
    await page.screenshot({ path: `${PASTA}/${t.nome}-${s.replace(/[#.]/g, '')}.jpg`, quality: 80 })
  }
  console.log(`${t.nome}: ok${erros.length ? ' · ERROS: ' + erros.join(' | ') : ' · sem erros no console'}`)
  await page.close()
}
await browser.close()
