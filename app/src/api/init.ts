import { restFetch as publicRestFetch } from '@skzz/platform/shared/fetch/public'
import { restFetch as platformRestFetch } from '@skzz/platform/shared/fetch/platform'

import { restFetch } from '@skzz-template/shared/fetch/base'

publicRestFetch.baseURL = import.meta.env.VITE_BASE_URL + '/data'
platformRestFetch.baseURL = import.meta.env.VITE_DEFAULT_PLATFORM_API
platformRestFetch.DEV = import.meta.env.DEV

restFetch.baseURL = import.meta.env.VITE_BASE_API

