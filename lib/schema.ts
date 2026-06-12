export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Auspre IoT',
    alternateName: 'Auspre',
    url: 'https://www.auspreiot.com',
    logo: 'https://www.auspreiot.com/logo.png',
    description:
      'Auspre IoT specializes in delivering innovative, custom IoT and software solutions that ignite possibilities for businesses worldwide.',
    slogan: 'Igniting Possibilities',
    foundingDate: '2018',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
    serviceArea: { '@type': 'Place', name: 'Global' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IoT & Software Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Custom IoT Development' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Embedded Systems Design' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Cloud IoT Platforms' },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Software Solutions',
          },
        },
      ],
    },
    sameAs: [
      'https://linkedin.com/company/auspreiot',
      'https://twitter.com/auspreiot',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@auspreiot.com',
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Auspre IoT',
    url: 'https://www.auspreiot.com',
    description: 'Custom IoT & Software Solutions — Igniting Possibilities',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.auspreiot.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

export function serviceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Auspre IoT',
      url: 'https://www.auspreiot.com',
    },
    url,
    areaServed: { '@type': 'Place', name: 'Global' },
  }
}
