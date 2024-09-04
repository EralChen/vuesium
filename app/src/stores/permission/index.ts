import { usePermissionStore as useVkPermissionStore } from '@vunk/skzz/stores/permission'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { rMenus  } from '@skzz/platform/api/login'
import { createRemoteRoutes } from '@/router/_remote'
import { RouteRecordRaw } from 'vue-router'

export const usePermissionStore = defineStore('permission', () => { 
  const vkPermissionStore = useVkPermissionStore()
  const setMenusByToken = (client?: string) => {
    vkPermissionStore.setPathToRouteInfo(createRemoteRoutes() as Record<string, RouteRecordRaw>)
    return rMenus(client).then((res) => {
      vkPermissionStore.setMenus(res)
      return res
    })
  }

  
  return {
    setPathToRouteInfo: vkPermissionStore.setPathToRouteInfo,
    setMenusByToken,
    routes: computed(() => vkPermissionStore.routes),
    menusTree: computed(() => vkPermissionStore.menusTree),
  }
})
