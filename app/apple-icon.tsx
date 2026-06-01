import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#faf7f2',
          borderRadius: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 72,
          fontWeight: 700,
          color: '#6b1a2a',
          letterSpacing: '-0.02em',
          border: '6px solid #6b1a2a',
        }}
      >
        MJ
      </div>
    ),
    { ...size }
  )
}
