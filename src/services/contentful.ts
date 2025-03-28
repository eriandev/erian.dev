import { client } from '@/config/contentful'
import { PG_MAIN_ENTRY_ID } from '@/utils/consts'
import type { PgMainContent } from '@/services/types'

export async function getPgMainContent(): Promise<PgMainContent> {
  const { fields } = await client.getEntry(PG_MAIN_ENTRY_ID, { include: 10 })
  return fields as unknown as PgMainContent
}
