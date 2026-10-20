import { defineConfig, devices } from '@playwright/test'

// Testes de ponta a ponta: abrem o site num Chrome de verdade e conferem o que um visitante veria.
// Uso: npm test   (gera o build, sobe o "preview" e roda os testes)
export default defineConfig({
  testDir: 'tests',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4173/sonora/',
    channel: 'chrome', // usa o Google Chrome instalado (não baixa navegador)
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
    { name: 'celular', use: { ...devices['Pixel 7'], channel: 'chrome' } },
  ],
  webServer: {
    command: 'npm run build && npm run preview -- --port 4173 --strictPort',
    url: 'http://localhost:4173/sonora/',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
