import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://erian.dev',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  },
})
