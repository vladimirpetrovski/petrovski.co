'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme from data-theme attribute set by the blocking script
  // This ensures server and client match on first render
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      // Read from the attribute that the blocking script sets
      const htmlTheme = document.documentElement.getAttribute('data-theme') as Theme | null
      if (htmlTheme === 'dark' || htmlTheme === 'light') {
        return htmlTheme
      }
    }
    // Default for SSR (will be overridden on client)
    return 'light'
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Ensure theme is synced with what the script set
    const currentTheme = document.documentElement.getAttribute('data-theme') as Theme | null
    if (currentTheme === 'dark' || currentTheme === 'light') {
      setTheme(currentTheme)
    } else {
      // Fallback: read from localStorage if attribute not set
      const savedTheme = localStorage.getItem('theme') as Theme | null
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
      } else {
        setTheme('light')
        document.documentElement.setAttribute('data-theme', 'light')
      }
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
