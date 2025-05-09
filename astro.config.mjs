import icon from 'astro-icon'
import { loadEnv } from 'vite'
import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { iconTyping } from './src/config/integrations'

const { PUBLIC_ORIGIN: site, PUBLIC_PROTOCOL: protocol } = loadEnv(process.env.NODE_ENV, process.cwd(), 'PUBLIC')

export default defineConfig({
  site,
  integrations: [icon(), svelte(), iconTyping()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ['images.ctfassets.net'],
    remotePatterns: [{ protocol }],
  },
})
