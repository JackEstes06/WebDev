import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  build: { format: 'file' },
  site: "https://jackestes06.github.io",
  base: "/WebDev/",
});
