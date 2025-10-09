/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTENTFUL_ACCESS_TOKEN: string
  readonly CONTENTFUL_SPACE_ID: string
  readonly EXTERNAL_API: string
  readonly PG_MAIN_ENTRY_ID: string
  readonly PUBLIC_ORIGIN: string
  readonly PUBLIC_PROTOCOL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
