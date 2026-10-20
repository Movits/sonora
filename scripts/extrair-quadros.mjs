// Extrai a sequência de quadros da animação de scroll a partir do vídeo em midia/explosao.mp4.
// Uso: npm run frames   (precisa do ffmpeg instalado e no PATH)
//
// Por que quadros e não o vídeo direto? Rolar um <video> para frente e para trás engasga em
// muitos navegadores, principalmente no celular. Imagens soltas num <canvas> respondem na hora.
import { execFileSync } from 'node:child_process'
import { mkdirSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'

const VIDEO = 'midia/explosao.mp4'
const SAIDAS = [
  // pasta, quadros por segundo, largura, qualidade WebP (0-100)
  { pasta: 'public/frames/desktop', fps: 12, largura: 1600, qualidade: 72 },
  { pasta: 'public/frames/mobile', fps: 6, largura: 900, qualidade: 68 },
]

for (const s of SAIDAS) {
  rmSync(s.pasta, { recursive: true, force: true })
  mkdirSync(s.pasta, { recursive: true })
  execFileSync(
    'ffmpeg',
    [
      '-loglevel', 'error',
      '-i', VIDEO,
      '-vf', `fps=${s.fps},scale=${s.largura}:-2:flags=lanczos`,
      '-c:v', 'libwebp',
      '-quality', String(s.qualidade),
      '-compression_level', '6',
      join(s.pasta, 'q%03d.webp'),
    ],
    { stdio: 'inherit' },
  )
  const arquivos = readdirSync(s.pasta)
  const bytes = arquivos.reduce((t, f) => t + statSync(join(s.pasta, f)).size, 0)
  console.log(`${s.pasta}: ${arquivos.length} quadros, ${(bytes / 1024 / 1024).toFixed(1)} MB`)
}
