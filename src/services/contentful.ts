import { client } from '@/config/contentful'
import { PG_MAIN_ENTRY_ID } from '@/utils/consts'
import { normalizePgMain } from '@/utils/contentful/normalization'
import type { ContentfulPgMain } from '@/utils/contentful/types'
import type { PgMain } from '@/services/types'

export async function getPgMainContent(): Promise<PgMain> {
  const contentfulPgMain = await client.getEntry(PG_MAIN_ENTRY_ID, { include: 10 })
  return normalizePgMain(contentfulPgMain as unknown as ContentfulPgMain)
}
