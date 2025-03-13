/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BASE_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
