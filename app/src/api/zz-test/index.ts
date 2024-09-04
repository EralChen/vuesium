/**
 * 这个一个使用 快开平台 接口的示例
 * 仅用作参考
 * 
 */
import { request } from '@skzz/platform/shared/fetch/platform'
import { QueryRData, RestFetchQueryOptions } from '@vunk/skzz'
import { Pagination } from '@skzz/platform'
import { Workflow } from './types'
import { MENU_DATA } from './const'


/**
* https://www.apifox.cn/link/project/1903413/apis/api-69170149
* @param query 
* @param pagination 
* @returns 
*/
export const rWorkflows = (query: Partial<Workflow>, pagination?: Pagination) => {
  return request<[QueryRData<Workflow>]>({
    method: 'POST',
    url: '/core/busi/query',
    data: {
      'datasetIds': [
        '1',
      ],
      'condition': {
        '1': {
          ...query,
          ...(pagination ? { pagination } : {}),
        },
      },
      ...MENU_DATA,
      'buttonId': 'search',
    },
  } as RestFetchQueryOptions).then(res => {
    return res.datas[0]
  })
}
