// PONTO DE ENTRADA: o Vite carrega este arquivo a partir do index.html.
// Aqui só juntamos as peças; cada seção tem o próprio arquivo em src/sections/.

// Fontes instaladas pelo npm (funcionam sem internet)
import '@fontsource/unbounded/800.css'
import '@fontsource/onest/400.css'
import '@fontsource/onest/500.css'

// Estilos: tokens primeiro (as variáveis), depois a base e cada seção
import './styles/tokens.css'
import './styles/base.css'
import './styles/hero.css'
import './styles/cena.css'
import './styles/detalhes.css'
import './styles/ruido.css'
import './styles/caixa.css'
import './styles/numeros.css'
import './styles/reserva.css'
import './styles/rodape.css'

import { iniciarHero } from './sections/hero.js'
import { iniciarCena } from './sections/cena.js'
import { iniciarOnda } from './sections/onda.js'
import { iniciarReserva } from './sections/reserva.js'
import { iniciarEntradas } from './lib/entradas.js'

// Marca que o JavaScript está rodando (o CSS só esconde coisas para animar se esta classe existir)
document.documentElement.classList.add('js')

iniciarHero()
iniciarCena()
iniciarOnda()
iniciarReserva()
iniciarEntradas()
