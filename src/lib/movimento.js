// Pergunta ao navegador se a pessoa pediu menos movimento nas configurações do sistema.
// Quem pede menos movimento continua vendo todo o conteúdo, só que sem animação.
export const reduzirMovimento = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Caminho correto para arquivos da pasta public/, tanto em localhost quanto no GitHub Pages
export const caminho = (arquivo) => `${import.meta.env.BASE_URL}${arquivo}`
