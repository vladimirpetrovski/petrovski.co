'use client'

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(26, 26, 26, 0.8)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderBottom: '1px solid var(--color-border)',
      zIndex: 1000,
      padding: '16px 0',
      transition: 'background-color 0.3s ease',
      boxShadow: '0 1px 0 rgba(0, 0, 0, 0.05)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="/" style={{ fontSize: 'clamp(16px, 4vw, 18px)', fontWeight: 600 }}>
          Vladimir Petrovski
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 4vw, 32px)' }}>
          <nav style={{ 
            display: 'flex', 
            gap: 'clamp(12px, 4vw, 32px)',
            fontSize: '14px',
          }}
          className="desktop-nav"
          >
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexDirection: 'column',
            gap: '4px',
          }}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            backgroundColor: 'var(--color-text)',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            backgroundColor: 'var(--color-text)',
            transition: 'all 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            backgroundColor: 'var(--color-text)',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
          }} />
        </button>
        {menuOpen && (
          <nav style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-bg)',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            padding: '16px',
            gap: '16px',
            transition: 'background-color 0.3s ease',
          }}
          className="mobile-nav"
          >
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  )
}
