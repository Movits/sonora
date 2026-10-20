// PONTO DE ENTRADA (v0.4): animações simples (entradas e troca de cor). A cena de scroll chega na v0.5.
import '@fontsource/unbounded/800.css'
import '@fontsource/onest/400.css'
import '@fontsource/onest/500.css'

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
import { iniciarReserva } from './sections/reserva.js'
import { iniciarEntradas } from './lib/entradas.js'

document.documentElement.classList.add('js')
// enquanto a cena de scroll não existe, ela fica como composição parada
document.querySelector('.cena')?.classList.add('sem-movimento')

iniciarHero()
iniciarReserva()
iniciarEntradas()
