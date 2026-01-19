'use client'

import { useState } from 'react'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hi@petrovski.co')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }
  return (
    <footer
      id="contact"
      style={{
        padding: '100px 0 60px',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            Let's connect
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--color-text-secondary)',
              marginBottom: '40px',
              lineHeight: 1.6,
            }}
          >
            Ready to build or scale your engineering team? Whether you're a startup looking to establish 
            your technical foundation or an established company aiming to grow your engineering capabilities, 
            I'm here to help you achieve your objectives.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(12px, 3vw, 24px)',
              flexWrap: 'wrap',
              marginBottom: 'clamp(40px, 8vw, 60px)',
            }}
          >
            <div
              onClick={copyEmail}
              style={{
                padding: 'clamp(12px, 2vw, 14px) clamp(20px, 4vw, 32px)',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
                fontSize: 'clamp(13px, 2vw, 14px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-hover)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span>hi@petrovski.co</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  opacity: copied ? 0.6 : 1,
                  transition: 'opacity 0.2s ease',
                }}
              >
                {copied ? (
                  <path
                    d="M13.5 2L6 9.5L2.5 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <>
                    <path
                      d="M5.5 4.5H2.5C1.67157 4.5 1 5.17157 1 6V13.5C1 14.3284 1.67157 15 2.5 15H10C10.8284 15 11.5 14.3284 11.5 13.5V10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.5 10.5H15V1H5.5V10.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </>
                )}
              </svg>
              {copied && (
                <span
                  style={{
                    fontSize: '12px',
                    color: 'var(--color-text-secondary)',
                    marginLeft: '-8px',
                  }}
                >
                  Copied!
                </span>
              )}
            </div>
            <a
              href="https://linkedin.com/in/vladimirpetrovski"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: 'clamp(12px, 2vw, 14px) clamp(20px, 4vw, 32px)',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                fontWeight: 500,
                display: 'inline-block',
                transition: 'background-color 0.2s ease',
                fontSize: 'clamp(13px, 2vw, 14px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vladimirpetrovski"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: 'clamp(12px, 2vw, 14px) clamp(20px, 4vw, 32px)',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                fontWeight: 500,
                display: 'inline-block',
                transition: 'background-color 0.2s ease',
                fontSize: 'clamp(13px, 2vw, 14px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              GitHub
            </a>
          </div>
          <div
            style={{
              paddingTop: '40px',
              borderTop: '1px solid var(--color-border)',
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
            }}
          >
            <p>© {new Date().getFullYear()} Vladimir Petrovski. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
