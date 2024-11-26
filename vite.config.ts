import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import nightwatchPlugin from 'vite-plugin-nightwatch';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    nightwatchPlugin(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        prependData: '@use "@/app/styles/_variables.scss";\n',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
