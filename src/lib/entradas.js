// ENTRADAS: cada parte marcada com data-entrada sobe e aparece quando chega perto da tela.
// As partes da mesma seção entram em sequência (título, texto, imagem), 80 ms uma depois da outra.
//
// Por que não só IntersectionObserver? Se a pessoa rola muito rápido (ou pula por um link),
// um elemento pode passar pela tela sem ser "visto" e ficar invisível para sempre.
// Aqui, tudo que já está acima do fim da tela é revelado, inclusive o que já passou.
export function iniciarEntradas() {
  let pendentes = [...document.querySelectorAll('[data-entrada]')]

  // Atraso em escada dentro de cada seção
  const porSecao = new Map()
  pendentes.forEach((p) => {
    const secao = p.closest('section, header, footer') || document.body
    const lista = porSecao.get(secao) || []
    lista.push(p)
    porSecao.set(secao, lista)
  })
  porSecao.forEach((lista) =>
    lista.forEach((p, i) => p.style.setProperty('--atraso', `${Math.min(i, 8) * 80}ms`)),
  )

  let agendado = false
  function verificar() {
    agendado = false
    const limite = window.innerHeight * 0.92
    pendentes = pendentes.filter((p) => {
      if (p.getBoundingClientRect().top < limite) {
        p.classList.add('entrou')
        return false
      }
      return true
    })
    if (!pendentes.length) {
      window.removeEventListener('scroll', agendar)
      window.removeEventListener('resize', agendar)
    }
  }
  function agendar() {
    if (!agendado) {
      agendado = true
      requestAnimationFrame(verificar)
    }
  }

  window.addEventListener('scroll', agendar, { passive: true })
  window.addEventListener('resize', agendar)
  verificar()
}
