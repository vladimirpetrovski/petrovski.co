'use client'

import { useEffect } from 'react'

export default function GeoMeta() {
  useEffect(() => {
    // Add GEO and Dublin Core metadata for US and Europe
    const singleMetaTags = [
      // Primary geographic targeting
      { name: 'geo.placename', content: 'United States, Europe' },
      { name: 'ICBM', content: '37.7749, -122.4194' },
      { name: 'geo.position', content: '37.7749;-122.4194' },
      // Dublin Core metadata
      { name: 'DC.title', content: 'Vladimir Petrovski - Engineering Team Builder' },
      { name: 'DC.creator', content: 'Vladimir Petrovski' },
      { name: 'DC.subject', content: 'Engineering Team Builder, Mobile Engineer, Android Developer' },
      { name: 'DC.description', content: 'Experienced Mobile Engineer with a strong network, specializing in building and scaling engineering teams for startups.' },
      { name: 'DC.publisher', content: 'Vladimir Petrovski' },
      { name: 'DC.language', content: 'en-US' },
      { name: 'DC.coverage', content: 'United States, Europe, Worldwide' },
      { name: 'DC.rights', content: '© 2026 Vladimir Petrovski' },
      // Additional metadata
      { name: 'language', content: 'en-US' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'target', content: 'US, EU, GB, DE, FR, NL' },
    ]

    // Single meta tags (one per name)
    singleMetaTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    })

    // Multiple geo.region tags for different regions
    const regions = ['US', 'EU', 'GB', 'DE', 'FR', 'NL']
    regions.forEach((region) => {
      let meta = document.querySelector(`meta[name="geo.region"][content="${region}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'geo.region')
        meta.setAttribute('content', region)
        document.head.appendChild(meta)
      }
    })
  }, [])

  return null
}
