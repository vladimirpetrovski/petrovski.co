'use client'

const projects = [
  {
    title: 'Speak',
    description: 'The world\'s most advanced AI language tutor. Practice speaking with instant feedback, personalized lessons, and seamless text and audio messaging. Learn languages naturally through conversation with AI-powered guidance.',
    category: 'Android • AI • Education',
    url: 'https://www.speak.com/',
    domain: 'speak.com',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
  },
  {
    title: 'FreeNow',
    description: 'Europe\'s leading mobility platform connecting millions of riders with drivers. Book rides instantly, track in real-time, and pay seamlessly. Available across major cities with 10+ million downloads.',
    category: 'Android • Mobility • Transportation',
    url: 'https://www.free-now.com/',
    domain: 'free-now.com',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
  },
  {
    title: 'CHIPOLO',
    description: 'Smart Bluetooth item finder that helps you never lose your keys, wallet, or important items again. Ring your items from your phone or double-click CHIPOLO to find your phone. With over 500k downloads worldwide.',
    category: 'Android • IoT • BLE',
    url: 'https://chipolo.net/',
    domain: 'chipolo.net',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    title: '1tap by Receipt Bank',
    description: 'Smart receipt scanner and automatic IRS tax tracker for self-employed businesses. Take photos of receipts and invoices to automatically extract data for tax records. Streamlines bookkeeping and expense management.',
    category: 'Android • FinTech • ML',
    url: 'https://1tapreceipts.com/',
    domain: '1tapreceipts.com',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
  },
  {
    title: 'Lama',
    description: 'Video interview platform that helps businesses produce personalized video interviews in minutes. Conduct interviews directly through the app and seamlessly integrate videos on websites and blogs at a fraction of professional video production costs.',
    category: 'Android • Video • SaaS',
    url: null,
    domain: null,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
  },
  {
    title: 'Zoyo Baby Monitor',
    description: 'Smart baby monitor that watches over your child with every sleep. Tracks breathing movements, temperature, and position in real-time. HD camera with night vision, two-way audio, and instant alerts when your child needs you.',
    category: 'Android • IoT • Hardware',
    url: null,
    domain: null,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop',
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: '100px 0',
        backgroundColor: 'var(--color-section-bg)',
      }}
      className="fade-in-up"
    >
      <div className="container">
        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            marginBottom: '48px',
            letterSpacing: '-0.02em',
          }}
        >
          Projects
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
          }}
        >
          {projects.map((project, index) => {
            const cardStyle = {
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease',
              cursor: project.url ? 'pointer' : 'default',
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
            } as React.CSSProperties

            const content = (
              <>
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: 'var(--color-hover)',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.style.backgroundImage = 'none'
                      e.currentTarget.parentElement!.style.backgroundColor = 'var(--color-hover)'
                    }}
                  />
                </div>
                <div style={{ padding: '32px' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'var(--color-text-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '12px',
                      fontWeight: 500,
                    }}
                  >
                    {project.category}
                  </p>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      marginBottom: '8px',
                      lineHeight: 1.3,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {project.title}
                    {project.url && (
                      <span style={{ marginLeft: '8px', fontSize: '16px', opacity: 0.6 }}>↗</span>
                    )}
                  </h3>
                  {project.domain && (
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '16px',
                        fontFamily: 'monospace',
                        opacity: 0.8,
                      }}
                    >
                      {project.domain}
                    </p>
                  )}
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </>
            )

            if (project.url) {
              return (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {content}
                </a>
              )
            }

            return (
              <div
                key={index}
                style={cardStyle}
              >
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
