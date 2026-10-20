// RESERVA: o recibo se atualiza a cada escolha. Ao "reservar", abre uma janela explicando
// que a loja é demonstrativa. Nenhum dado é enviado para lugar nenhum.
const PRECO_BASE = 2499
const reais = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function iniciarReserva() {
  const form = document.querySelector('#form-reserva')
  const linhas = document.querySelector('[data-recibo-linhas]')
  const total = document.querySelector('[data-recibo-total]')
  const modal = document.querySelector('#modal-reserva')
  if (!form || !linhas || !total) return

  function escolhas() {
    const cor = form.querySelector('input[name="cor"]:checked')?.value ?? 'Grafite'
    const extras = [...form.querySelectorAll('input[name="extra"]:checked')].map((c) => ({
      nome: c.value,
      preco: Number(c.dataset.preco),
    }))
    const soma = PRECO_BASE + extras.reduce((t, e) => t + e.preco, 0)
    return { cor, extras, soma }
  }

  function linha(texto, valor) {
    const li = document.createElement('li')
    const a = document.createElement('span')
    const b = document.createElement('span')
    a.textContent = texto
    b.textContent = valor
    li.append(a, b)
    return li
  }

  const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)')
  let somaAnterior = null

  // Pequeno pulso no total quando o valor muda: mostra que a escolha teve efeito
  function pulsar(el) {
    const quadros = menosMovimento.matches
      ? [{ opacity: 0.4 }, { opacity: 1 }]
      : [{ opacity: 0.4, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }]
    el.animate?.(quadros, { duration: 220, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' })
  }

  function atualizar() {
    const { cor, extras, soma } = escolhas()
    linhas.replaceChildren(
      linha(`Arc · ${cor}`, reais.format(PRECO_BASE)),
      ...extras.map((e) => linha(e.nome, reais.format(e.preco))),
      linha('Frete', 'Grátis'),
    )
    total.textContent = reais.format(soma)
    if (somaAnterior !== null && soma !== somaAnterior) pulsar(total)
    somaAnterior = soma
  }

  form.addEventListener('change', atualizar)

  form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const { cor, extras, soma } = escolhas()
    if (!modal?.showModal) {
      alert(`Reserva demonstrativa: Arc ${cor}, total ${reais.format(soma)}. Nada foi cobrado.`)
      return
    }
    const lista = modal.querySelector('[data-modal-lista]')
    lista.replaceChildren(
      ...[`SONORA Arc · ${cor}`, ...extras.map((e) => e.nome)].map((t) => {
        const li = document.createElement('li')
        li.textContent = t
        return li
      }),
    )
    modal.querySelector('[data-modal-total]').textContent = reais.format(soma)
    modal.showModal()
  })

  atualizar()
}
