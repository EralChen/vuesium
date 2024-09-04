import { getToken, removeToken } from '@vunk/skzz/shared/utils-auth'
import { useUserStore } from '@skzz/platform/stores/user'
import router from './router'
import { usePermissionStore } from '@/stores/permission'

const whiteList: (RegExp|string)[] = [/^\/login/, /^\/_play/] // no redirect whitelist

const loginPath = '/login'

router.beforeEach(async (to, from, next) => {
  /**
   * 当在登录页面时
   * 通过 publicFetch 获取平台信息
   * 这将重写 platformFetch 的 baseURL
   * 这个功能仅在 平台管理系统 中使用
   */
  // const platformStore = usePlatformStore()
  // if (to.path.includes('/login')) {
  //   const platform = to.params.platform as string
  //   await platformStore.setPlatformInfoByCode(platform)
  // }
  // const platformInfo  = await platformStore.getPlatformInfo()
  // loginPath = '/login/' +  platformInfo.code
  /* ------------------------------------------------ */

  const userStore = useUserStore()
  const permissionStore = usePermissionStore()

  // determine whether the user has logged in
  const token = getToken()


  if (token) {
    if (to.path === loginPath) {

      next(
        {
          path: '/home',
          
        },
      )

    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const roles = userStore.getRoleIds()

      if (roles?.length) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          // const { roles } = await store.dispatch('user/getInfo')
          await userStore.setPuppet()
          await userStore.setUserInfoByToken()
          
 

          // [TODO] if rUserInfo get roles.length ===  0

          // generate accessible routes map based on roles
          await permissionStore.setMenusByToken()
    
          // dynamically add accessible routes
          permissionStore.routes.forEach(route => {
            router.addRoute(route)
          })

          


          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
          // next()

        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error)
          // remove token and go to login page to re-login
          // await store.dispatch('user/resetToken')
          removeToken()
          next(loginPath)
        }
      }
    }
  } else {
    /* has no token*/
    if (
      whiteList.some(rule => 
        typeof rule === 'string' ? rule === to.path
          : rule.test(to.path),
      )
    ) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(loginPath)

      // NProgress.done()
    }
  }
})

