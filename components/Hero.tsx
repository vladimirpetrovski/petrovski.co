'use client'

interface HeroProps {
  mounted: boolean
}

export default function Hero({ mounted }: HeroProps) {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
      className={mounted ? 'fade-in-up' : ''}
    >
      <div className="container">
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(32px, 6vw, 64px)',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
        className="hero-grid"
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="hero-image-wrapper"
          >
            <img
              src="/images/profile.jpeg"
              alt="Vladimir Petrovski"
              style={{
                width: '100%',
                maxWidth: 'clamp(200px, 50vw, 300px)',
                height: 'auto',
                borderRadius: '12px',
                objectFit: 'cover',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              }}
            />
          </div>
          <div className="hero-content">
          <h1
            style={{
              fontSize: 'clamp(28px, 6vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 'clamp(20px, 3vw, 24px)',
              letterSpacing: '-0.02em',
            }}
            className="hero-title"
          >
            Build and scale engineering product teams
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 3.5vw, 24px)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'clamp(28px, 4vw, 40px)',
              lineHeight: 1.6,
            }}
            className="hero-description"
          >
            Experienced Mobile Engineer with a strong network, specializing in building and scaling engineering teams for small startups. I focus on building apps and complete solutions using cross-platform development, handling everything from planning and design to testing and infrastructure.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: 'clamp(12px, 2vw, 16px)', 
            flexWrap: 'wrap',
          }}
          className="hero-buttons"
          >
            <a
              href="#contact"
              style={{
                padding: 'clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px)',
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg)',
                borderRadius: '6px',
                fontWeight: 500,
                display: 'inline-block',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                fontSize: 'clamp(14px, 2vw, 16px)',
                textAlign: 'center',
                minWidth: 'clamp(120px, 20vw, 140px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.opacity = '1'
              }}
            >
              Get in touch
            </a>
            <a
              href="#portfolio"
              style={{
                padding: 'clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px)',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                fontWeight: 500,
                display: 'inline-block',
                transition: 'background-color 0.2s ease',
                fontSize: 'clamp(14px, 2vw, 16px)',
                textAlign: 'center',
                minWidth: 'clamp(120px, 20vw, 140px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              View my work
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
