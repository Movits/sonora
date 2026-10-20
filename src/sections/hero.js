import { reduzirMovimento } from '../lib/movimento.js'

// HERO: as três cores do fone se revezam devagar, como luz mudando numa sala.
const CORES = ['Grafite', 'Areia', 'Prata']
const INTERVALO = 5600 // ms que cada cor fica na tela

export function iniciarHero() {
  const fotos = [...document.querySelectorAll('.hero__foto')]
  const nome = document.querySelector('[data-cor-nome]')
  if (fotos.length < 2 || reduzirMovimento()) return

  let atual = 0
  let timer = null

  const trocar = () => {
    fotos[atual].classList.remove('is-ativa')
    atual = (atual + 1) % fotos.length
    fotos[atual].classList.add('is-ativa')
    if (nome) nome.textContent = CORES[atual]
  }

  const tocar = () => {
    clearInterval(timer)
    timer = setInterval(trocar, INTERVALO)
  }

  // Pausa quando a aba fica escondida (economiza bateria e não "pula" cores)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearInterval(timer)
    else tocar()
  })

  tocar()
}
