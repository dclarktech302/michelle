import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#faf7f2',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
          fontWeight: 700,
          color: '#6b1a2a',
          letterSpacing: '-0.02em',
          border: '1.5px solid #6b1a2a',
        }}
      >
        MJ
      </div>
    ),
    { ...size }
  )
}
