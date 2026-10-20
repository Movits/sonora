import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reduzirMovimento } from '../lib/movimento.js'

gsap.registerPlugin(ScrollTrigger)

/*
  ONDA (painel "Inverter"): desenhada inteira por código, sem nenhuma imagem.
  - linha clara fina: o ruído do mundo
  - linha de cobre: a "anti-onda" que o fone cria (o ruído de cabeça para baixo)
  - linha clara grossa: o que chega ao ouvido = ruído + anti-onda
  Conforme você rola, a anti-onda cresce e a soma vira uma linha reta: silêncio.
*/
export function iniciarOnda() {
  const canvas = document.querySelector('.painel__onda')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const cores = getComputedStyle(document.documentElement)
  const tinta = cores.getPropertyValue('--ink').trim() || '#ece7df'
  const apagada = cores.getPropertyValue('--muted').trim() || '#a8a196'
  const cobre = cores.getPropertyValue('--accent').trim() || '#c98a5b'

  const estado = { anti: reduzirMovimento() ? 1 : 0, fase: 0 }
  let visivel = false

  // O "ruído": soma de três senos, para parecer som de verdade e não um seno perfeito
  const ruido = (x, fase) =>
    Math.sin(x * 0.018 + fase) * 0.55 + Math.sin(x * 0.047 + fase * 1.7) * 0.3 + Math.sin(x * 0.11 + fase * 0.6) * 0.15

  function ajustar() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const { width, height } = canvas.getBoundingClientRect()
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    desenhar()
  }

  function linha(y0, amp, f, cor, espessura) {
    const dpr = canvas.width / canvas.getBoundingClientRect().width || 1
    ctx.beginPath()
    for (let x = 0; x <= canvas.width; x += 4) {
      const y = y0 + f(x / dpr) * amp
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.strokeStyle = cor
    ctx.lineWidth = espessura * dpr
    ctx.stroke()
  }

  function desenhar() {
    const { width: W, height: H } = canvas
    ctx.clearRect(0, 0, W, H)
    const amp = H * 0.11
    const a = estado.anti
    const f = estado.fase
    linha(H * 0.24, amp, (x) => ruido(x, f), apagada, 2) // ruído
    linha(H * 0.5, amp, (x) => -ruido(x, f) * a, cobre, 3) // anti-onda
    linha(H * 0.76, amp, (x) => ruido(x, f) * (1 - a), tinta, 4) // soma
  }

  new ResizeObserver(ajustar).observe(canvas)

  if (reduzirMovimento()) return

  // A rolagem controla o tamanho da anti-onda
  ScrollTrigger.create({
    trigger: canvas.closest('.painel'),
    start: 'top 70%',
    end: 'bottom 60%',
    onUpdate: (self) => {
      estado.anti = gsap.utils.clamp(0, 1, self.progress * 1.25)
      desenhar()
    },
    onToggle: (self) => (visivel = self.isActive),
  })

  // As ondas andam devagar enquanto o painel está visível
  gsap.ticker.add(() => {
    if (!visivel || document.hidden) return
    estado.fase += 0.025
    desenhar()
  })
}
