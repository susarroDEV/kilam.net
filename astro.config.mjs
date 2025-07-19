// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://kilam.net',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap()
  ],
  i18n: {
    locales: ['en', 'es', 'ca', 'gl', 'eu'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    }
  },

  adapter: node({
    mode: 'standalone'
  })
})