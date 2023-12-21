import fs from 'fs';
import fetch from 'node-fetch'
import { join } from 'path'
import path from 'node:path'
import { pipeline } from 'stream'
import { promisify } from 'util'
import cheerio from 'cheerio'

const _path = process.cwd();
const Tepm_path = _path + `/plugins/BlueArchive-plugin/resources/Tepm`

 /**
 * 下载图片 如果不传入路径会保存到临时文件夹并返回图片路径
 * @param data 传入图片链接
 * @param path 保存路径
 * @param name 文件名字，没有名字为数字
 */
 async function saveImg(data, path, name) {
  let buffer
  const img = await fetch(data)
  const arrayBuffer = await img.arrayBuffer()
  buffer = Buffer.from(arrayBuffer)
    try {
      if (!path) {
        let a;
          if (!fs.existsSync(Tepm_path)) fs.mkdirSync(Tepm_path);
          a = fs.readdirSync(Tepm_path).length
          if (name) path = join(Tepm_path, `${name}.png`)
          else path = join(Tepm_path, `${a + 1}.png`)
        fs.writeFileSync(path, buffer)
        return path
      }else{
        if (name) path = join(path, `${name}.png`)
        fs.writeFileSync(path, buffer)
        return '已保存'
      }
    } catch (error) {
      throw error;
    }
  } 

/**
 * 获取网页数据
 * @param url 链接
 */
  async function gethtml(url) {
      const response = await fetch(url);
      if (!response.ok) throw new Error('访问失败！');
      const res = await response.text();
          //logger.mark(res);
        const $ = cheerio.load(res);
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
    saveImg,
    gethtml,
    sleep, 
    downFile, 
    makeForwardMsg
   };