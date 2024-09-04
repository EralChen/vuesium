import { ToggleHandler } from '@vunk/core/shared/utils-class'
import { useSharedDark } from '@skzz/platform/composables'
import { watch } from 'vue'
import esriConfig from '@arcgis/core/config'

class DarkThemeToggle extends ToggleHandler {
  private head: HTMLHeadElement = document.head
  private lightLink: HTMLLinkElement = this.createLink('light')
  private darkLink: HTMLLinkElement = this.createLink('dark')

  constructor () {
    super()
    if (!this.head.contains(this.lightLink)) {
      this.head.appendChild(this.lightLink)
    }
  }
  add () {
    if (this.head.contains(this.lightLink)) {
      this.head.replaceChild(
        this.darkLink, 
        this.lightLink,
      )
    } else { 
      this.head.appendChild(this.darkLink)
    }
    this.removeHandler = () => {
      if (this.head.contains(this.darkLink)) {
        this.head.replaceChild(
          this.lightLink, 
          this.darkLink,
        )
      }
    }
  }
  createLink (type: 'dark' | 'light') {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = esriConfig.assetsPath + `/esri/themes/${type}/main.css`
    return link
  }
}

const darkThemeToggle = new DarkThemeToggle()


const useInitEsriTheme = () => {
  const isDark = useSharedDark()
  watch(() => isDark.value, (v) => {
    if (v) {
      darkThemeToggle.add()
    } else {
      darkThemeToggle.remove()
    }
  }, { immediate: true })
}

export {
  useInitEsriTheme,
}

