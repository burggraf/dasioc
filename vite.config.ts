import routify from '@roxi/routify/vite-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const pwaManifest = {
  name: 'Did Anyone Say It On Camera?',
  short_name: 'DASIOC',
  start_url: 'index.html',
  description: 'DASIOC: Did Anyone Say It On Camera?  Find video snippets using text searches.',
  background_color: '#387ef5',
  theme_color: '#387ef5',
  icons: [
    {
      "src": "assets/icons/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-64.png",
      "sizes": "64x64",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-168.png",
      "sizes": "168x168",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }]
}


/* 
  experimenting with webcomponents in svelte 
  great guide: 
    https://www.thisdot.co/blog/web-components-with-svelte
    https://dev.to/tnzk/svelte-for-web-components-development-pitfalls-and-workarounds-as-of-july-2021-3lii
*/
const svelteWebcomponentConfig = {
  include: ['./src/lib/*.svelte'],
  compilerOptions: {
    customElement: true,
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // @ts-ignore
    { config: () => ({ ssr: { noExternal: true } }) },

    routify({
      // @ts-ignore
      ssr: {
        spank: {
          sitemap: '.routify/sitemap.default.txt',
        },
      },
    }),
    VitePWA({
      manifest: pwaManifest,
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'assets/*'],
    }),

    svelte(),
  ],
  publicDir: "src/static",
  resolve: {
    alias: {
      $lib: resolve('./src/lib'),
      $components: resolve('./src/components'),
      $services: resolve('./src/services'),
      $routes: resolve('./src/routes'),
      $static: resolve('./src/static'),
      $ionic: resolve('./src/lib/ionic')
    }
  }
})
