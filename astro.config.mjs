import icon from 'astro-icon'
import { loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

const { BASE_PATH: site } = loadEnv(process.env.NODE_ENV, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  },
})
