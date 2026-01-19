'use client'

interface AboutProps {
  mounted: boolean
}

export default function About({ mounted }: AboutProps) {
  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        backgroundColor: 'var(--color-section-bg)',
      }}
      className={mounted ? 'fade-in-up' : ''}
    >
      <div className="container">
        <h2
          style={{
            fontSize: 'clamp(28px, 6vw, 48px)',
            fontWeight: 700,
            marginBottom: 'clamp(32px, 6vw, 48px)',
            letterSpacing: '-0.02em',
          }}
        >
          About me
        </h2>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <p
            style={{
              fontSize: 'clamp(16px, 3.5vw, 18px)',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              marginBottom: 'clamp(20px, 4vw, 24px)',
            }}
          >
            Experienced Mobile Engineer with a strong network, specializing in building and scaling engineering teams for small startups. I have extensive experience leading engineering and product teams, guiding them through the entire development process, ensuring alignment with business goals and delivering high-quality results.
          </p>
          <p
            style={{
              fontSize: 'clamp(16px, 3.5vw, 18px)',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              marginBottom: 'clamp(20px, 4vw, 24px)',
            }}
          >
            With a strong focus on building apps and complete solutions using cross-platform development, I handle everything from planning and design to testing and infrastructure. I thrive in fast-paced environments and take pride in owning the products I work on.
          </p>
          <p
            style={{
              fontSize: 'clamp(16px, 3.5vw, 18px)',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              marginBottom: 'clamp(28px, 5vw, 32px)',
            }}
          >
            With a background in Android, Flutter, and Node.js, leveraging AI tools, I build apps and solutions efficiently that work smoothly and look great on any device. I'm comfortable working across the stack, including backend development when needed. My goal is to create top-notch applications and solutions that make a meaningful difference for users and businesses.
          </p>
        </div>
      </div>
    </section>
  )
}
