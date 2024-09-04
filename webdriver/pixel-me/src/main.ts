import path from 'path'
import { Builder, Browser, By, until, WebElement } from 'selenium-webdriver'
import { Options } from 'selenium-webdriver/chrome'
import fs from 'fs'
import glob from 'fast-glob'
const chromePath = 'E:/devTools/chrome114/GoogleChromePortable64/App/Chrome-bin/chrome.exe'
const siteUrl = 'https://pixel-me.tokyo/en'
import { errorDir, inputDir, outputDir } from '../path.config'

// 创建目录
if (!fs.existsSync(inputDir)) {
  fs.mkdirSync(inputDir)
}
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}
if (!fs.existsSync(errorDir)) {
  fs.mkdirSync(errorDir)
}

// 读取 inputDir 下的 png 或者 webp 文件
const inputImgPaths = glob.sync(`./*.{png,webp}`, {
  cwd: inputDir,
  onlyFiles: true,
  absolute: true,
})


// 文件名称为数字，需要排序
// inputImgPaths.sort((a, b) => {
//   const aName = path.basename(a, '.webp')
//   const bName = path.basename(b, '.webp')
//   return Number(aName) - Number(bName)
// })


const driver = new Builder()
  .forBrowser(Browser.CHROME)
  .setChromeOptions(
    new Options()
      .setChromeBinaryPath(chromePath)
      .addArguments('--ignore-certificate-errors'),
  )
  .build()


async function saveSiteImg (
  inputEl: WebElement,
  inputImgPath: string,
) {
  inputEl.sendKeys(inputImgPath)
  console.log('2.已经输入了图片路径')

  await driver.sleep(2000)

  const imgEl = await driver.wait(
    until.elementLocated(
      By.css('.VueCarousel-slide:nth-child(3) img'),
    ), 
    240000,
  )
  
  console.log('3.获取到了 img 元素', imgEl.getId())
  const imgUrl = await imgEl.getAttribute('src')

  console.log('4.获取到了 img 的src', imgUrl)
  if (imgUrl.startsWith('data:image')) {
    const base64Data = imgUrl.replace(/^data:image\/\w+;base64,/, '')
    const dataBuffer = Buffer.from(base64Data, 'base64')
    
    // 写入文件
    fs.writeFileSync(
      path.resolve(outputDir, path.basename(inputImgPath)),
      dataBuffer,
    )

    // 删除当前 imgEl 
    await driver.executeScript(
      'arguments[0].parentNode.removeChild(arguments[0])',
      imgEl,
    )

  } else {
    // 拷贝原图片到 errorDir
    fs.copyFileSync(
      inputImgPath, 
      path.resolve(errorDir, path.basename(inputImgPath)),
    )
    console.error('图片下载失败', inputImgPath)
  }

}
  

export async function main () {

  const sitePromise = driver.get(siteUrl)
  await sitePromise
  const el = await driver.findElement(
    // .dropzone.preview__drop-zone form input[type="file"]
    By.css('.dropzone.preview__drop-zone form input[type="file"]'),
  )
  console.log('1.获取到了 input 元素', el.getId())

  for (const inputImgPath of inputImgPaths) {
    await saveSiteImg(el, inputImgPath)
  }

  console.log('5.已经完成了所有图片的下载')


}

