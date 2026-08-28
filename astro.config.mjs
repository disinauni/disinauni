import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'

export default defineConfig({
  site: 'https://disinauni.my.id',
  // Vercel adapter (SSR-capable) dipasang dari awal walau situs ini masih statis penuh,
  // supaya nanti mudah menambah route API/SSR (mis. dashboard, auth) tanpa migrasi adapter.
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
})
