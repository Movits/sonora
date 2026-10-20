import { defineConfig } from 'vite'

// O site é publicado em https://movits.github.io/sonora/, por isso a "base" é /sonora/.
// Em desenvolvimento (npm run dev) o endereço também fica em http://localhost:5173/sonora/.
export default defineConfig({
  base: '/sonora/',
  server: { port: 5173, strictPort: false },
  preview: { port: 4173, strictPort: false },
  build: {
    // Os quadros da animação ficam em public/frames e são copiados como estão.
    assetsInlineLimit: 0,
  },
})
