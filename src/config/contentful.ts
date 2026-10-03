import { createClient } from 'contentful'
import { isNullish } from '@/utils/validation'
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '@/utils/consts'

if (typeof window !== 'undefined') {
  console.error('Contentful client must not be imported in client-side code')
  throw new Error('Contentful client is server-only')
}

if (isNullish(CONTENTFUL_SPACE_ID) || isNullish(CONTENTFUL_ACCESS_TOKEN)) {
  console.error('Missing Contentful credentials')
  throw new Error('Contentful space ID or access token is not defined')
}

export const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})
