import { taskWithName } from '@lib-env/shared'
import { series } from 'gulp'
import { main } from './src/main'

export default series([
  taskWithName('pixel-me', async () => {
    await main()
  }),
])
