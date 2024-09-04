import { defineConfig } from 'unocss'
import { createUnocssSettings } from '@vunk/shared/vite/unocss'
import { namedFontSize, namedGap, unoShortcuts } from '@skzz/platform/theme'

/**
 * @link
 * https://eralchen.github.io/vunk-shared/zh-CN/vite/unocss/createUnocssSettings
 */
const settings = createUnocssSettings({
  presetFlexPrefix: 'sk',
  /**
   * @default 'g'
   * class="gmt-m"
   * if you want to use like `mt-m`, you can set it to `''`
   */
  presetGapPrefix: '',
  presetGapTheme: Object.keys(namedGap).reduce((a, c) => {
    const key = c.replace('--gap-', '')
    a[key] = namedGap[c]
    return a
  }, {}),

  presetFontTheme: Object.keys(namedFontSize).reduce((a, c) => {
    const key = c.replace('--f-', '')
    a[key] = namedFontSize[c]
    return a
  }, {}),

})

settings.shortcuts = unoShortcuts


// const theme = settings.theme as NormalObject
// theme['colors'].test = '#ff0000'

export default defineConfig(settings)