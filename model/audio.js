import base from './base.js'
import { mkdirs } from './tools.js'
import cfg, { audio_path, extraRes_path } from './Cfg.js'
import fs from 'fs'
import path from 'path'
import Api from './api.js'
import fetch from 'node-fetch'
import lodash from "lodash"

const bgmPath = path.join(extraRes_path, `audio/bgm/`)
const voicePath = path.join(audio_path, 'students')

export default class Audio extends base {
    constructor (e, keyword, bgmList) {
        super(e)
        this.model = 'audio'
        this.cd = 86400 //24小时
        this.key = `${this.prefix}index`
        this.keyword = keyword
        this.bgmList = bgmList || ''
        this.fileName = ''
        this.filePath = ''

        this.searchResult = []
    }

    /** 初始化bgm */
    static async initBGM (e) {
      let bgmList = this.getBGM()
      if (!bgmList) return false
      let keyword = e.msg.replace(/#ba|#BA|#Ba|bgm/g, '').trim()
      return new Audio(e, keyword, bgmList)
    }

    /** 初始化语音 */
    static async initVoice (e) {
      let keyword = e.msg.replace(/#|语音|[AaBb]/g, '').trim()
      if (!keyword) return false
      return new Audio(e, keyword)
    }

    /** 获取bgm列表 */
    static getBGM() {
      const files = fs.existsSync(bgmPath) ? fs.readdirSync(bgmPath) : false
      if (!files || files.length == 0) {
        return false
      }
      return files
    }

    /** 获取路径 */
    getFilePath(filename, isBGM = true) {
      this.fileName = filename
      this.filePath = path.join(isBGM ? bgmPath : voicePath, filename)
      return this.filePath
    }

    /** 发送消息 */
    async replyBGM() {
      await this.e.reply(this.fileName.replace(/.ogg/, ''))
      await this.e.reply(segment.record(this.filePath))
    }

    async bgm() {
      if (/随机/.test(this.keyword)) {
        let filename = lodash.sample(this.bgmList)
        this.getFilePath(filename)
      } else if (/列表/.test(this.keyword)) {
        this.bgmList = lodash.orderBy(this.bgmList, item => Number(/\d+/.exec(item)[0]))
        let msg = this.bgmList.join('\n')

        return this.e.reply(await Bot.makeForwardMsg({
          message: msg,
          nickname: '阿罗那的老公',
          user_id: this.e.user_id
        }))
      } else{
        return this.searchBGM()
      }

      await this.replyBGM()
      return true
    }

    /** 搜索bgm */
    async searchBGM() {
      if (this.bgmList.includes(this.keyword)) {
        this.getFilePath(this.keyword)
      } else {
        const regex = new RegExp(`${this.keyword}`, 'ig')
        const result = []

        for (let i of this.bgmList) {
          if (regex.test(i)) {
            //logger.mark(i)
            result.push(i)
          }
        }

        if (result.length == 0) {
          await this.e.reply('没找到这首bgm呢')
          return false
        }

        if (result.length == 1 && this.bgmList.includes(result[0])) {
          this.getFilePath(result[0])
        } else {
          await this.e.reply('请选择\n' + result.join('\n').replace(/.ogg/g, '') + '\n指令示例：#13')
          return 'select'
        }
      }
      await this.replyBGM()
      return true
    }

    /** 选择bgm */
    async selectBGM(e) {
      if (!e.msg) return false

      let idx = /#\d+/.exec(e.msg)
      if (!idx) return true
      let filename = this.bgmList.filter(file => file.includes(idx[0]))

      if (filename == 0) {
        await e.reply('输入错误')
        return true
      }

      this.getFilePath(filename[0])
      this.replyBGM()
      return true
    }

    /** 语音 */
    async voice() {
      let id, name

      if (this.keyword == '随机学生') {
        let role = cfg.random_role()
        id = role.id
        name = role.name
      } else {
        id = cfg.getID(this.keyword)
        if (!id) {
          logger.mark(`[ba语音]未找到${this.keyword}`)
          return false
        }
        name = cfg.getName(id)
      }

      logger.mark(id, name)
      
      let Path = path.join(voicePath, name)

      if (!fs.existsSync(Path)) {
        await this.downVoice(id)
      }

      let files = fs.readdirSync(Path)

      if (files.length == 0) {
        await this.downVoice(id)
      }
      
      let fileName = lodash.sample(files)
      this.getFilePath(fileName, false)

      let text = path.parse(fileName).name

      text = name + 'n' + text
      text = text
      .replace(/n/g, '\n')
      .replace(/_/g, '\n\n')
      .trim()

      await this.e.reply(text)
      await this.e.reply(segment.record(this.filePath))
      return true
    }

    async downVoice(Id = 0) {
      await this.e.reply('开始下载')

      let api = new Api()
      let index = await redis.get(this.key)
      let res = await api.getdata('voice', {}, true)
      let idx = {}

      if (index) {
        idx = JSON.parse(index)
      } else {
        index = await api.getdata('index')

        for (let key1 in index) {
          for (let key2 in index[key1]) {
            idx[key2] = index[key1][key2]
          }
        }

        redis.setEx(this.key, this.cd, JSON.stringify(idx))
      }

      if (Id) res = { [Id]: res[Id] }

        for (let id in res) {
          let name = cfg.getName(id)
          if (!name) return false
          for (let key in res[id]) {
            for (let elem of res[id][key]) {
              let Group = elem.Group.match(/(.*?)(\d)?$/)
              let i = idx[Group[1]].replace(/\s*\{.*\}/g, '') + (Group[2] || '')
              let text = elem.Transcription? elem.Transcription.replace(/\n/g, 'n').replace(/\?/g, '？') : ''
              let audio = 'https://static.schale.gg/voice/' + elem.AudioClip
              let savePath = path.join(audio_path, 'students', name, `${i}_${text}.mp3`)
              if (fs.existsSync(savePath)) {
                logger.mark(`${i}.mp3 已存在`)
                continue
              }
              //logger.mark(audio)
              //logger.mark(text)
              await download(audio, savePath)
            }
          }
        }
        await this.e.reply('下载完成')
    }


}

async function download(fileUrl, savePath, param) {
  try {
    mkdirs(path.dirname(savePath))
    logger.debug(`[下载音频] ${fileUrl}`)
    const buffer = await fetchTimeout(fileUrl, param, 10000) // 超时时间为10秒
    fs.writeFileSync(savePath, buffer)
    return true
  } catch (err) {
    logger.error(`下载音频错误：${err}`)
    return false
  }
}

function timeout(ms) {
  return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('超时')), ms)
  })
}

async function fetchTimeout(url, options, timeoutMs) {
  const response = await fetch(url, options)
  logger.debug(response.status, response.statusText)
  logger.debug(response.headers)
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }
  const buffer = await Promise.race([
      response.buffer(),
      timeout(timeoutMs)
  ])
  return buffer
}
