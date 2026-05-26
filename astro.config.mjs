import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jumafernandez.github.io',
  base: '/isft189-web',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
