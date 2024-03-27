import puppeteer from 'puppeteer'
import lodash from 'lodash'
import path from 'path'
import fs from 'fs'

const _path = process.cwd()

// 浏览器
let browser = ""
// 截图数达到时重启浏览器 避免生成速度越来越慢
let restartNum = 200
// 截图次数
let renderNum = 0
let restartCount = 0
let restartFn = null
// 锁住
let lock = false
// 截图中
let shoting = []

async function browserInit() {
    if (browser) {
        return browser
    }
    if (lock) {
        return false
    }
    lock = true
    logger.mark("puppeteer 启动中!!!", logger.blue(`(>_<)`))
    //初始化puppeteer
    browser = await puppeteer.launch({
        // executablePath:'',//chromium其他路径
        headless: global.debugView === "debug" ? false : true,  //是否以无头模式运行
        args: [
            "--disable-gpu",  //禁用 GPU 硬件加速
            "--disable-dev-shm-usage",  //不使用 /dev/shm，因为在某些系统中，这个文件夹的空间可能不足
            "--disable-setuid-sandbox",  //禁用 sandbox，这对于某些系统是必要的
            "--no-first-run",  //在首次运行时，不启动初始设置向导
            "--no-sandbox",  // 禁用 Chromium 的沙箱。在没有用户命名空间的系统上，这是必要的
            "--no-zygote",  //不创建 zygote 进程。在某些系统上，这是必要的
            "--single-process",  //以单进程模式运行。这通常不推荐，因为它会降低安全性
        ],
    }).catch((err) => {
        logger.error(err)
        if (String(err).includes("correct Chromium")) {
            logger.error("没有正确安装Chromium，可以尝试执行安装命令：node ./node_modules/puppeteer/install.js")
        }
    })
    lock = false
    if (browser) {
        logger.mark("puppeteer 启动成功", logger.blue(`(^_^)`))
        //监听Chromium实例是否断开
        browser.on("disconnected", function (e) {
            logger.error("Chromium实例关闭或崩溃！", logger.red(`(x.x)`))
            browser = ""
        })

        return browser
    } else {
        logger.error("puppeteer 启动失败", logger.red(`(x.x)`))
        return false
    }
}

async function doRender(savePath, {saveId, _htmlPath, screenshot, imgType, pageGotoParams} = data) {
    if (!(await browserInit())) {
        return false
    }
    let base64 = ""
    let start = Date.now()
    try {
        shoting.push(saveId)
        //图片渲染
        const page = await browser.newPage()
        await page.setViewport({
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1  //一般把 deviceScaleFactor 指定在 1 - 3 区间内 越大图片越清晰，文件大小也会成倍增长
          })
        await page.goto(`file:///${path.resolve(savePath)}`, pageGotoParams)
        if (!screenshot) return page
        await page.waitForSelector("#container")
        await page.waitForTimeout(100)
        let body = await page.$("#container")
        let randData = {
            type: imgType,
            encoding: "base64",
        }
        if (imgType === "jpeg") {
            randData.quality = 90
        }
        if (imgType == "png") {
            randData.omitBackground = true
        }
        base64 = await body.screenshot(randData)
        if (!global.debugView) {
            page.close().catch((err) => logger.error(err))
        }
        shoting.pop()
    } catch (error) {
        logger.error(`图片生成失败:${error}`)
        //重启浏览器
        if (browser) {
            await browser.close().catch((err) => logger.error(err))
        }
        browser = ""
        base64 = ""
        return false
    }
    if (!base64) {
        logger.error(`图片生成为空:${_htmlPath}`)
        return false
    }
    renderNum++
    /** 计算图片大小 */
    let kb = (base64.length / 1024).toFixed(1) + 'kb'
    logger.mark(`[ba图片生成] ${_htmlPath}.html: 格式:${imgType}, 大小：${kb}，耗时：${Date.now() - start}ms，次数:${renderNum}`)
    if (typeof test != "undefined") {
        return `图片base64:${_htmlPath}`
    }
    //截图超过重启数时，自动关闭重启浏览器，避免生成速度越来越慢
    if (renderNum > restartNum * (restartCount + 1)) {
        if (shoting.length <= 0) {
            restartFn && clearTimeout(restartFn)
            restartFn = setTimeout(async function () {
                browser.removeAllListeners("disconnected")
                await browser.close().catch((err) => logger.error(err))
                browser = ""
                restartCount++
                logger.mark("puppeteer 关闭重启")
            }, 100)
        }
    }
    return "base64://" + base64
}


/**
  *
  * @param path html文件路径，相对于plugin resources目录
  * @param data 渲染数据
  * @param cfg 渲染配置
  * @param cfg.beforeRender({data}) 可改写渲染的data数据
  * @returns {Promise<boolean>}
  */
async function render(path, data = {}, cfg = {}) {
    // 处理传入的path
    path = path.replace(/.html$/, "")
    let paths = lodash.filter(path.split("/"), (p) => !!p)
    path = paths.join("/")
    // 创建目录
    await Bot.mkdir(`temp/html/BlueArchive-plugin/${path}`)
    // 自动计算pluResPath
    let pluResPath = `../../../${lodash.repeat("../", paths.length)}plugins/BlueArchive-plugin/resources/`
    const layoutPath = _path + "/plugins/BlueArchive-plugin/resources/common/layout/"
    // 渲染data
    data = {
      screenshot: true, //是否截图
      imgType: 'jpeg',
      sys: {
        scale: 1.2
      },

      copyright: ``,
      _plugin: `BlueArchive-plugin`,
      _htmlPath: path,
      pluResPath,
      tplFile: `./plugins/BlueArchive-plugin/resources/${path}.html`,
      saveId: data.saveId || data.save_id || paths[paths.length - 1],
      pageGotoParams: {
        waitUntil: "networkidle2"  //等待网络空闲（即在至少 500 毫秒内没有超过 2 个网络连接）后才返回
      },

      ...data
    }
    // 处理beforeRender
    if (cfg.beforeRender) {
      data = cfg.beforeRender({ data }) || data
    }
    // 保存模板数据
    if (process.argv.includes("dev")) {
      // debug下保存当前页面的渲染数据，方便模板编写与调试
      // 由于只用于调试，开发者只关注自己当时开发的文件即可，暂不考虑app及plugin的命名冲突
      let saveDir = await Bot.mkdir(`temp/ViewData/${plugin}`)
      let file = `${saveDir}/${data._htmlPath.split("/").join("_")}.json`
      await fs.writeFile(file, JSON.stringify(data))
    }

    const renderer = new Renderer({})
    let savePath = renderer.dealTpl(`BlueArchive-plugin/${path}`, data)
    return await doRender(savePath, data)
  }

export default render