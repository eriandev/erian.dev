/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BASE_PATH: string
  readonly CONTENTFUL_SPACE_ID: string
  readonly CONTENTFUL_ACCESS_TOKEN: string
  readonly PG_MAIN_ENTRY_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
