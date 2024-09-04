import path from 'path'
import { defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { packagesDir } from '@lib-env/path'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import { appRoot, srcRoot } from './path.config'
import VueDevTools from 'vite-plugin-vue-devtools'
import unocss from 'unocss/vite'
import { windowEnv } from '@vunk/shared/vite/plain'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) as unknown as ImportMetaEnv
  return {
    base: env.VITE_BASE_URL + '/',
    build: {
      outDir: path.resolve(appRoot,'./dist' + env.VITE_BASE_URL),
    },
    server: {
      host: '0.0.0.0',
    },
    resolve: {
      alias: {
        '_v': path.resolve(srcRoot,'./views'),
        '_c': path.resolve(srcRoot,'./components'),
        '@': path.resolve(srcRoot,'.'),
        'esri': '@arcgis/core',
      },
    },

    plugins: [
      VueDevTools(),
      vue(),
      vueJSX(),
  
      windowEnv(),
      unocss(),
      // legacy({
      //   modernPolyfills: ['esnext.array.at'],
      // }),
      viteExternalsPlugin(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [
          path.resolve(packagesDir,'./icons/svg'),
          path.resolve(appRoot, './src/icons/svg'),
        ],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),

    ],


  } as UserConfig

})
