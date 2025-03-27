// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://nahomeh.github.io', // Replace with your GitHub username
  base: '/',
  integrations: [tailwind()]
});
