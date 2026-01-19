export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vladimir Petrovski',
    jobTitle: 'Engineering Team Builder',
    description: 'Experienced Mobile Engineer with a strong network, specializing in building and scaling engineering teams for startups.',
    url: 'https://petrovski.co',
    image: 'https://petrovski.co/images/profile.jpeg',
    sameAs: [
      'https://linkedin.com/in/vladimirpetrovski',
      'https://github.com/vladimirpetrovski',
    ],
    knowsAbout: [
      'Mobile Engineering',
      'Android Development',
      'Flutter Development',
      'Engineering Leadership',
      'Team Building',
      'Cross-platform Development',
      'Startup Engineering',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Engineering Professional',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Startup Engineering Teams',
    },
    address: [
      {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressRegion: 'United States',
      },
      {
        '@type': 'PostalAddress',
        addressCountry: 'EU',
        addressRegion: 'Europe',
      },
    ],
    areaServed: [
      {
        '@type': 'Place',
        name: 'United States',
        '@id': 'https://www.wikidata.org/wiki/Q30',
      },
      {
        '@type': 'Place',
        name: 'Europe',
        '@id': 'https://www.wikidata.org/wiki/Q46',
      },
      {
        '@type': 'Place',
        name: 'Worldwide',
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vladimir Petrovski - Engineering Team Builder',
    url: 'https://petrovski.co',
    description: 'Personal portfolio of Vladimir Petrovski, Engineering Team Builder and Mobile Engineer',
    author: {
      '@type': 'Person',
      name: 'Vladimir Petrovski',
    },
    inLanguage: ['en-US', 'en-GB', 'en'],
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Place',
        name: 'United States and Europe',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
