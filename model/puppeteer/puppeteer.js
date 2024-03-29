import lodash from 'lodash'
import path from 'path'
import fs from 'fs'
import { mkdirs } from '../tools.js'
import Renderer from '../../../../lib/renderer/loader.js'
import { getV } from '../tools.js'

const _path = process.cwd()
const renderer = Renderer.getRenderer()
const V = getV()

/**
  *
  * @param path html文件路径，相对于plugin resources目录
  * @param data 渲染数据
  * @param cfg 渲染配置
  * @param cfg.beforeRender({data}) 可改写渲染的data数据
  * @returns img
  */
async function render(path, data = {}, cfg = {}) {
    // 处理传入的path
    path = path.replace(/.html$/, "")
    let paths = lodash.filter(path.split("/"), (p) => !!p)
    path = paths.join("/")
    // 创建目录
    mkdirs(`temp/html/BlueArchive-plugin/${path}`)
    // 自动计算pluResPath
    let pluResPath = `../../../${lodash.repeat("../", paths.length)}plugins/BlueArchive-plugin/resources/`
    // 渲染data
    data = {
      sys: {
        scale: 1.2
      },

      copyright: V.versionHtml,
      _plugin: `BlueArchive-plugin`,
      _htmlPath: path,
      pluResPath,
      tplFile: `./plugins/BlueArchive-plugin/resources/${path}.html`,
      saveId: data.saveId || data.save_id || paths[paths.length - 1],

      //screenshot参数
      imgType: 'jpeg',
      quality: 90,  //图片质量
      omitBackground: false,
      pageGotoParams: {
        //waitUntil: "networkidle2"  //等待网络空闲（即在至少 500 毫秒内没有超过 2 个网络连接）后才返回
        waitUntil: "networkidle0"
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
      let saveDir = mkdirs(`temp/ViewData/${plugin}`)
      let file = `${saveDir}/${data._htmlPath.split("/").join("_")}.json`
      await fs.writeFile(file, JSON.stringify(data))
    }

    return await renderer.screenshot(`BlueArchive-plugin/${path}`, data)
  }

export default render