import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Big Ben Production | Premier Events Production'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#070C18',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Blue corner accents */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '60px',
            height: '2px',
            backgroundColor: '#2B7DE8',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '2px',
            height: '60px',
            backgroundColor: '#2B7DE8',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            width: '60px',
            height: '2px',
            backgroundColor: '#2B7DE8',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            width: '2px',
            height: '60px',
            backgroundColor: '#2B7DE8',
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(43,125,232,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'center',
            padding: '0 80px',
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              color: '#2B7DE8',
              fontSize: '14px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              margin: 0,
              fontFamily: 'Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            Premier Events Production
          </p>

          {/* Blue line */}
          <div
            style={{
              width: '50px',
              height: '1px',
              backgroundColor: '#2B7DE8',
            }}
          />

          {/* Brand name */}
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: '72px',
              fontFamily: 'Georgia, serif',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Big Ben Production
          </h1>

          {/* Tagline */}
          <p
            style={{
              color: '#7890A0',
              fontSize: '20px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 300,
              margin: 0,
              lineHeight: 1.5,
              maxWidth: '700px',
            }}
          >
            360 photo booths, event coverage &amp; professional production setups
          </p>

          {/* Blue separator line */}
          <div
            style={{
              width: '80px',
              height: '1px',
              backgroundColor: '#2B7DE8',
              marginTop: '10px',
            }}
          />
        </div>

        {/* Bottom URL */}
        <p
          style={{
            position: 'absolute',
            bottom: '48px',
            color: '#4E6070',
            fontSize: '13px',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '0.15em',
            margin: 0,
          }}
        >
          bigbenproduction.co.uk
        </p>
      </div>
    ),
    size
  )
}
