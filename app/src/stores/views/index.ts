import { defineStore } from 'pinia'
import { ref, shallowRef, watch } from 'vue'
import { RouteLocationNormalizedLoaded, RouteRecordRaw, useRoute } from 'vue-router'
import { pickObject } from '@vunk/core/shared/utils-object'

type BaseView = RouteRecordRaw & { fullPath: string }

export const useViewsStore = defineStore('views', () => {
  const currentBaseView = shallowRef<BaseView>()
  const setCurrentBaseView = (route: BaseView) => {
    currentBaseView.value = route
  }



  const baseViewsRecord = shallowRef<Record<string, BaseView>>({})
  const addBaseViewToRecord = (fullPath: string, route: RouteRecordRaw) => {
    baseViewsRecord.value[fullPath] = {
      ...route,
      fullPath: fullPath,
    }
  }


  const findBaseViewByFullPath = (fullPath: string) => {
    const keys = Object.keys(baseViewsRecord.value)
    // 最长的 key
    let key = ''
    keys.forEach((k) => {
      if (fullPath.startsWith(k) && k.length > key.length) {
        key = k
      }
    })
    if (key) {
      return baseViewsRecord.value[key]
    } 

  }



  
  const visitedViews = ref<RouteLocationNormalizedLoaded[]>([])
  const addVisitedView = (route: RouteLocationNormalizedLoaded, index?: number) => {

    const routeInfo =  pickObject(route, {
      // [TODO] 持久化储存的数据是否需要这部分
      excludes: ['matched', 'redirectedFrom'],
    }) as RouteLocationNormalizedLoaded

    if (typeof index === 'number' && index >= 0) {
      visitedViews.value.splice(index, 0, routeInfo)
    } else {
      visitedViews.value.push(routeInfo)
    }

   
  }

  const setVisitedViews = (routes: RouteLocationNormalizedLoaded[]) => {
    visitedViews.value = routes
  }


  const delVisitedView = (query: {
    fullPath?: string
    path?: string
  }) => {
   
    const index = visitedViews.value.findIndex((v) => {
      return  Object.keys(query).every((key) => {
        const _key = key as keyof typeof query
        return query[_key] === undefined || v[_key] === query[_key]
      })
    })
    let item: RouteLocationNormalizedLoaded | undefined
    if (index >= 0) {
      item = visitedViews.value.splice(index, 1)[0]
    }
    return {
      index,
      item,
    }

  }
  const collectingVisitedViews = () => {
    const route = useRoute()
  
    watch(route, (newRoute) => {
      if (
        visitedViews.value
          .some((v) => v.fullPath === newRoute.fullPath)
      ) {
        return
      }
      
      if (
        newRoute.meta?.title
        && newRoute.meta?.tagsView !== false
      ) {
 
        const { index } = delVisitedView({ path: newRoute.path }) 

        addVisitedView({ ...newRoute }, index)
      }
      
    }, { immediate: true })
  }


  return { 
    currentBaseView,
    setCurrentBaseView,

    baseViewsRecord,
    addBaseViewToRecord,
    findBaseViewByFullPath,

    visitedViews,
    setVisitedViews,
    addVisitedView,
    delVisitedView,
    collectingVisitedViews,

  }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ['visitedViews'],
      },
    ],
  },
})
