import { rRoles } from '@skzz/platform/api/system/role'
import { ApiReturnType } from '@vunk/core'

export type Row = ApiReturnType<typeof rRoles>['rows'][0]

