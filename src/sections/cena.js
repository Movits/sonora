import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reduzirMovimento, caminho } from '../lib/movimento.js'

gsap.registerPlugin(ScrollTrigger)

/*
  CENA DE SCROLL: uma sequência de imagens desenhada num <canvas>.
  A rolagem (0% a 100% da seção) escolhe qual quadro aparece:
    0%–62%   o fone se desmonta (quadro 0 → último)
    62%–76%  fica parado, todo aberto
    76%–100% se monta de novo (último → quadro 0)
*/
const CONJUNTOS = {
  desktop: { pasta: 'frames/desktop', total: 121 },
  mobile: { pasta: 'frames/mobile', total: 60 },
}

// Em que ponto da rolagem cada capítulo de texto aparece
const CAPITULOS = [0, 0.12, 0.3, 0.45, 0.62, 0.78]

const nomeDoQuadro = (pasta, i) => caminho(`${pasta}/q${String(i + 1).padStart(3, '0')}.webp`)

// Converte o progresso da rolagem (0 a 1) no "tempo" do vídeo (0 a 1)
function tempoDoVideo(p) {
  if (p < 0.62) return p / 0.62
  if (p < 0.76) return 1
  return 1 - (p - 0.76) / 0.24
}

export function iniciarCena() {
  const secao = document.querySelector('.cena')
  if (!secao) return
  const canvas = secao.querySelector('.cena__canvas')
  const aviso = secao.querySelector('.cena__carregando')
  const porcentagem = secao.querySelector('[data-progresso]')
  const capitulos = [...secao.querySelectorAll('.capitulo')]

  // Menos movimento: a cena vira uma imagem parada com todos os textos visíveis
  if (reduzirMovimento()) {
    secao.classList.add('sem-movimento')
    return
  }

  const conjunto = window.matchMedia('(max-width: 760px)').matches ? CONJUNTOS.mobile : CONJUNTOS.desktop
  const ctx = canvas.getContext('2d')
  const quadros = new Array(conjunto.total)
  let carregados = 0
  const estado = { quadro: 0 }
  let ultimoDesenhado = -1

  // ---------- desenhar ----------
  function ajustarTamanho() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const { width, height } = canvas.getBoundingClientRect()
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    ultimoDesenhado = -1
    desenhar()
  }

  // Se o quadro pedido ainda não chegou, usa o carregado mais próximo
  function quadroDisponivel(i) {
    for (let d = 0; d < conjunto.total; d++) {
      if (quadros[i - d]?.complete) return quadros[i - d]
      if (quadros[i + d]?.complete) return quadros[i + d]
    }
    return null
  }

  function desenhar() {
    const i = Math.round(estado.quadro)
    if (i === ultimoDesenhado) return
    const img = quadroDisponivel(i)
    if (!img) return
    ultimoDesenhado = i
    // "contain" com folga: a imagem inteira cabe na tela, centralizada, deixando os cantos livres
    // para os textos dos capítulos (no celular, em pé, amplia e corta um pouco as laterais)
    const folga = canvas.width > canvas.height ? 0.84 : 1.35
    const escala = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight) * folga
    const w = img.naturalWidth * escala
    const h = img.naturalHeight * escala
    ctx.fillStyle = '#020202'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h)
  }

  // ---------- carregar (o primeiro quadro antes, depois o resto) ----------
  function carregar(i) {
    return new Promise((resolve) => {
      const img = new Image()
      img.decoding = 'async'
      img.onload = () => {
        quadros[i] = img
        carregados++
        if (porcentagem) porcentagem.textContent = Math.round((carregados / conjunto.total) * 100)
        resolve()
      }
      img.onerror = () => {
        console.warn(`[cena] não carregou o quadro ${i + 1} (${img.src})`)
        resolve()
      }
      img.src = nomeDoQuadro(conjunto.pasta, i)
    })
  }

  if (aviso) aviso.hidden = false
  carregar(0).then(() => {
    secao.classList.add('tem-canvas')
    ajustarTamanho()
    // carrega o resto em lotes de 8 para não travar a rede
    const resto = Array.from({ length: conjunto.total - 1 }, (_, k) => k + 1)
    const lote = async () => {
      while (resto.length) await Promise.all(resto.splice(0, 8).map(carregar))
      if (aviso) aviso.hidden = true
      ultimoDesenhado = -1
      desenhar()
    }
    lote()
  })

  new ResizeObserver(ajustarTamanho).observe(canvas)

  // ---------- capítulos de texto ----------
  let capituloAtivo = 0
  function marcarCapitulo(p) {
    let n = 0
    CAPITULOS.forEach((inicio, k) => {
      if (p >= inicio) n = k
    })
    if (n === capituloAtivo) return
    capitulos[capituloAtivo]?.classList.remove('is-ativo')
    capitulos[n]?.classList.add('is-ativo')
    capituloAtivo = n
  }

  // ---------- ligar à rolagem ----------
  ScrollTrigger.create({
    trigger: secao,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      const alvo = tempoDoVideo(self.progress) * (conjunto.total - 1)
      // um pouco de suavização: o quadro "persegue" a rolagem em 0,35 s
      gsap.to(estado, { quadro: alvo, duration: 0.35, ease: 'power2.out', overwrite: true, onUpdate: desenhar })
      marcarCapitulo(self.progress)
    },
  })
}
