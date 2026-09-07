export const IS_PROD = import.meta.env.PROD
export const ORIGIN = import.meta.env.PUBLIC_ORIGIN
export const PROTOCOL = import.meta.env.PUBLIC_PROTOCOL
export const EXTERNAL_API = import.meta.env.EXTERNAL_API
export const PG_MAIN_ENTRY_ID = import.meta.env.PG_MAIN_ENTRY_ID
export const CONTENTFUL_SPACE_ID = import.meta.env.CONTENTFUL_SPACE_ID
export const CONTENTFUL_ACCESS_TOKEN = import.meta.env.CONTENTFUL_ACCESS_TOKEN

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://erian.dev/#website',
      url: 'https://erian.dev/',
      name: 'Erick Vargas',
      description: 'Frontend Developer portfolio',
      publisher: {
        '@id': 'https://erian.dev/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://erian.dev/#person',
      name: 'Erick Vargas',
      url: 'https://erian.dev/',
      jobTitle: 'Frontend Developer',
      sameAs: ['https://github.com/eriandev', 'https://www.linkedin.com/in/eriandev'],
    },
  ],
} as const
