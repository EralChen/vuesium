import path from 'path'

export const appRoot = path.resolve(__dirname, './')
export const srcRoot = path.resolve(appRoot, './src')

export const inputDir = path.resolve(appRoot, './data')
export const outputDir = path.resolve(appRoot, './dist')
export const errorDir = path.resolve(appRoot, './error')
