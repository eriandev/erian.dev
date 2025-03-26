import icon from 'astro-icon'
import { loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { iconTyping } from './src/config/integrations'

const { BASE_PATH: site } = loadEnv(process.env.NODE_ENV, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    icon(),
    iconTyping()
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    domains: ['images.ctfassets.net'],
    remotePatterns: [{ protocol: 'https' }],
  },
})
