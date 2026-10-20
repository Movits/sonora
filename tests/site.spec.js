import { test, expect } from '@playwright/test'

// Junta os erros do console para cada teste reclamar se aparecer algum
function vigiarConsole(page) {
  const erros = []
  page.on('pageerror', (e) => erros.push(`pageerror: ${e.message}`))
  page.on('console', (m) => {
    if (m.type() === 'error') erros.push(`console: ${m.text()}`)
  })
  return erros
}

test('abre sem erros e mostra o título', async ({ page }) => {
  const erros = vigiarConsole(page)
  await page.goto('./')
  await expect(page.locator('h1')).toContainText(/O silêncio/i)
  await expect(page.locator('h1')).toContainText(/tem forma/i)
  await expect(page.locator('.nav__acao')).toBeVisible()
  expect(erros).toEqual([])
})

test('a cena de scroll carrega os quadros e troca de capítulo', async ({ page }) => {
  await page.goto('./')
  const cena = page.locator('#por-dentro')
  await expect(cena).toHaveClass(/tem-canvas/, { timeout: 10_000 })
  await expect(page.locator('.capitulo.is-ativo')).toHaveAttribute('data-capitulo', '0')

  // rola até perto do fim da cena: o último capítulo ("Tudo volta ao lugar") deve estar ativo
  const caixa = await cena.boundingBox()
  const altura = page.viewportSize().height
  await page.mouse.wheel(0, caixa.y + (caixa.height - altura) * 0.95)
  await expect(page.locator('.capitulo.is-ativo')).toHaveAttribute('data-capitulo', '5', { timeout: 5_000 })
})

test('todas as imagens carregam', async ({ page }) => {
  await page.goto('./')
  // rola a página inteira para as imagens "lazy" carregarem
  const total = await page.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y < total; y += 600) await page.evaluate((v) => window.scrollTo(0, v), y)
  await page.waitForLoadState('networkidle')
  const quebradas = await page.evaluate(() =>
    [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.getAttribute('src')),
  )
  expect(quebradas).toEqual([])
})

test('o recibo soma os extras e a reserva abre a janela demonstrativa', async ({ page }) => {
  await page.goto('./#reserva')
  const total = page.locator('[data-recibo-total]')
  await expect(total).toHaveText(/2\.499,00/)

  await page.locator('label.extra', { hasText: 'Garantia de 3 anos' }).click()
  await expect(total).toHaveText(/2\.748,00/)
  await page.locator('label.cor', { hasText: 'Areia' }).click()
  await expect(page.locator('[data-recibo-linhas]')).toContainText('Arc · Areia')

  await page.getByRole('button', { name: 'Reservar o meu' }).click()
  const janela = page.locator('#modal-reserva')
  await expect(janela).toBeVisible()
  await expect(janela).toContainText('Reserva demonstrativa')
  await expect(janela).toContainText('Garantia de 3 anos')
  await janela.getByRole('button', { name: 'Fechar' }).click()
  await expect(janela).toBeHidden()
})

test('não tem rolagem para os lados', async ({ page }) => {
  await page.goto('./')
  const sobra = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  expect(sobra).toBeLessThanOrEqual(0)
})

test.describe('com "reduzir movimento" ligado', () => {
  test.use({ reducedMotion: 'reduce' })

  test('a cena vira composição parada com todos os textos visíveis', async ({ page }) => {
    await page.goto('./')
    await expect(page.locator('#por-dentro')).toHaveClass(/sem-movimento/)
    const titulos = page.locator('.capitulo__titulo')
    await expect(titulos).toHaveCount(6)
    for (const t of await titulos.all()) await expect(t).toBeVisible()
  })
})
