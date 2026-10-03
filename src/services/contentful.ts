import { client } from '@/config/contentful'
import { isNullish } from '@/utils/validation'
import { fetchWithTimeout } from '@/utils/fetch'
import { normalizePgMain } from '@/utils/contentful/normalization'
import { EXTERNAL_API, IS_PROD, PG_MAIN_ENTRY_ID } from '@/utils/consts'
import type { ContentfulPgMain } from '@/utils/contentful/types'
import type { PgMain } from '@/services/types'

export async function getPgMainContent(): Promise<PgMain> {
  if (IS_PROD) {
    if (isNullish(PG_MAIN_ENTRY_ID)) throw new Error('PG_MAIN_ENTRY_ID is not defined in production environment')

    try {
      const contentfulPgMain = await client.getEntry(PG_MAIN_ENTRY_ID, { include: 10 })
      return normalizePgMain(contentfulPgMain as unknown as ContentfulPgMain)
    } catch (error) {
      console.error('Failed to fetch content from Contentful', error)
      throw error
    }
  }

  try {
    if (isNullish(EXTERNAL_API)) throw new Error('EXTERNAL_API is not defined in non-production environment')

    const url = `${EXTERNAL_API}/eriandev.json`
    const response = await fetchWithTimeout(url)

    if (!response.ok) throw new Error(`Failed to fetch mock content: ${response.status} ${response.statusText}`)

    const contentfulPgMain = (await response.json()) as unknown as ContentfulPgMain
    return normalizePgMain(contentfulPgMain)
  } catch (error) {
    console.error('Failed to fetch mock content', error)
    throw error
  }
}
