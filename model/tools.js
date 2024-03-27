import fs from 'fs';
import fetch from 'node-fetch'
import path from 'node:path'
import { pipeline } from 'stream'
import { promisify } from 'util'
import cheerio from 'cheerio'
import Version from './version.js';

const Tepm_path = process.cwd() + `/plugins/BlueArchive-plugin/resources/Tepm`

/** 获取版本信息*/
function getV() {
    let bot_version = `<span class="V">${Version.yunzai}</span>`,
        currentVersion = `<span class="V">${Version.version}</span>`

    return {
      bot: Version.name,  //bot名字
      bot_version: Version.yunzai,  //bot版本
      currentVersion: Version.version,  //插件版本
      changelogs: Version.changelogs,  //更新日志
      versionHtml: `<span class="version">Created By ${Version.name} ${bot_version} & BlueArchive-plugin ${currentVersion}</span>`
    }
}

 /**
 * 下载图片 如果不传入路径会保存到临时文件夹并返回图片路径
 * @param url 传入图片链接
 * @param savePath 保存路径
 * @param name 文件名字，没有名字为数字
 */
 async function saveImg(url, savePath, name, er = 0) {
  try {
    let _savePath = savePath
    const img = await fetch(url)
    const buffer = await img.buffer()
    
      if (!_savePath) {
        mkdirs(path.dirname(Tepm_path))
        let num = fs.readdirSync(Tepm_path).length
        _savePath = path.join(Tepm_path, `${name || num + 1}.png`)
        fs.writeFileSync(_savePath, buffer)
        return _savePath
      }else{
        if (name) _savePath = path.join(_savePath, `${name}.png`)
        mkdirs(path.dirname(_savePath))
        fs.writeFileSync(_savePath, buffer)
        return '已保存'
      }
    } catch (err) {
      logger.error(err)
      if (er > 0) {
        logger.mark(logger.yellow('出错，终止本次下载'))
        return false
      }
      logger.mark(logger.yellow('出错！尝试第二次下载'))
      await saveImg(url, savePath, name, er + 1)
    }
  } 

/**
 * 获取网页数据
 * @param url
 * @param headers
 * @param savedata 是否将数据保存为文件
 * @param savename 保存名字
 */
  async function gethtml(url, headers = {}, savedata = false, savename = 'tepm.js') {
      const response = await fetch(url, { headers })
      if (!response.ok) throw new Error('[BA]访问失败！')
      const res = await response.text()
      //logger.mark(res);
      if (savedata) fs.writeFileSync(path.join(Tepm_path, savename), res, 'utf8')
      const $ = cheerio.load(res)
    return $
  }



/**
 * 休眠函数
 * @param ms 毫秒
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * 下载保存文件
 * @param fileUrl 下载地址
 * @param savePath 保存路径
 */
async function downFile(fileUrl, savePath, param = {}) {
  try {
    mkdirs(path.dirname(savePath))
    logger.debug(`[下载文件] ${fileUrl}`)
    const response = await fetch(fileUrl, param)
    const streamPipeline = promisify(pipeline)
    await streamPipeline(response.body, fs.createWriteStream(savePath))
    return true
  } catch (err) {
    logger.error(`下载文件错误：${err}`)
    return false
  }
}

function mkdirs(dirname) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirs(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

/**
 * 递归读取目录
 * @param {*} dirPath 目录路径
 * @returns arr
 */
function readDirSync(dirPath) {
  let arr = []
  let list = fs.readdirSync(dirPath)

  list.forEach((file) => {
    let filePath = path.join(dirPath, file)
    let stat = fs.statSync(filePath)

    if (stat && stat.isDirectory()) {
      arr = arr.concat(readDirSync(filePath))
    } else {
      arr.push(filePath)
    }
  })

  return arr
}

/**
 * 制作转发消息
 * @param e 消息事件
 * @param msg 消息数组
 * @param dec 转发描述
 * @param msgsscr 转发信息是否伪装
 */
async function makeForwardMsg(e, msg = [], dec = '', msgsscr = false) {
  if (!Array.isArray(msg)) msg = [msg]

  let name = msgsscr ? e.sender.card || e.user_id : Bot.nickname
  let id = msgsscr ? e.user_id : Bot.uin

  if (e.isGroup) {
    let info = await e.bot.getGroupMemberInfo(e.group_id, id)
    name = info.card || info.nickname
  }

  let userInfo = {
    user_id: id,
    nickname: name
  }

  let forwardMsg = []
  for (const message of msg){
    if(!message) continue
    forwardMsg.push({
      ...userInfo,
      message: message
    })
  }
    

  /** 制作转发内容 */
  if (e?.group?.makeForwardMsg) {
    forwardMsg = await e.group.makeForwardMsg(forwardMsg)
  } else if (e?.friend?.makeForwardMsg) {
    forwardMsg = await e.friend.makeForwardMsg(forwardMsg)
  } else {
    return msg.join('\n')
  }

  if (dec) {
    /** 处理描述 */
    if (typeof (forwardMsg.data) === 'object') {
      let detail = forwardMsg.data?.meta?.detail
      if (detail) {
        detail.news = [{ text: dec }]
      }
    } else {
      forwardMsg.data = forwardMsg.data
        .replace(/\n/g, '')
        .replace(/<title color="#777777" size="26">(.+?)<\/title>/g, '___')
        .replace(/___+/, `<title color="#777777" size="26">${dec}</title>`)
    }
  }

  return forwardMsg
}
  
  export { 
    getV,
    saveImg,
    gethtml,
    sleep, 
    downFile, 
    mkdirs,
    readDirSync,
    makeForwardMsg
   };