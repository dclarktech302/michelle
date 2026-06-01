import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const input = join(__dirname, '../public/images/candidate-headshot.webp')
const output = join(__dirname, '../public/images/og-image.jpg')

const metadata = await sharp(input).metadata()
const { width, height } = metadata

// Crop centered to 1200x630 ratio
const targetRatio = 1200 / 630
const sourceRatio = width / height

let cropWidth, cropHeight, left, top

if (sourceRatio > targetRatio) {
  cropHeight = height
  cropWidth = Math.round(height * targetRatio)
  left = Math.round((width - cropWidth) / 2)
  top = 0
} else {
  cropWidth = width
  cropHeight = Math.round(width / targetRatio)
  left = 0
  top = Math.round((height - cropHeight) / 3) // bias toward top/face
}

await sharp(input)
  .extract({ left, top, width: cropWidth, height: cropHeight })
  .resize(1200, 630)
  .jpeg({ quality: 85 })
  .toFile(output)

console.log('OG image generated:', output)
