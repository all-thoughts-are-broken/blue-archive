import base from './base.js'
import { downFile, mkdirs, readDirSync } from './tools.js'
import cfg, { audio_path } from './Cfg.js'
import fs from 'fs'
import path from 'path'
import Api from './api.js'
import fetch from 'node-fetch'

const bgmPath = process.cwd() + `/plugins/BlueArchive-plugin/resources/extraResources/audio/bgm/`

mkdirs(bgmPath)

export default class Audio extends base {
    constructor (e) {
        super(e)
        this.model = 'audio'
        this.cd = 86400 //24小时
        this.key = `Yz:BlueArchive:${this.model}:`
    }


    async bgm(key) {
      let filename
      let files = fs.readdirSync(bgmPath)

      if (!files || files == 0) {
        await this.e.reply('未下载资源')
        return true
      }
  
      if (/随机/.test(key)) {
        filename = files[Math.floor(Math.random() * files.length)]
      } else {

        if (files.includes(key)) {
          filename = key
        } else {
          let regex = new RegExp(`${key}`, 'ig')
          let arr = []

          for (let i of files) {
            if (regex.test(i)) {
              //logger.mark(i)
              arr.push(i)
            }
          }

          if (arr.length == 0) {
            await this.e.reply('没找到这首bgm呢')
            return true
          }
          if (arr.length == 1 && files.includes(arr[0])) {
            filename = arr[0]
          } else {
            await this.e.reply('请选择\n' + arr.join('\n').replace(/.ogg/g, '') + '\n指令示例：#13')
            return 'search'
          }
        }
      }
        
      let filePath = path.join(bgmPath, filename)

      //logger.mark(filePath)

      await this.e.reply(filename.replace(/.ogg/, ''))
      await this.e.reply(segment.record(filePath))
      return true
    }

    async searchBGM(e) {

      if (!e.msg) return false

      let idx = /#\d+/.exec(e.msg)
      if (!idx) return true
      let files = fs.readdirSync(bgmPath)
      let filename = files.filter(file => file.includes(idx[0]))

      if (filename == 0) {
        await e.reply('输入错误')
        return true
      }

      let filePath = path.join(bgmPath, filename[0])

      //logger.mark(filePath)

      await e.reply(filename[0].replace(/.ogg/, ''))
      await e.reply(segment.record(filePath))
      return true
    }

    async voice(key) {
      let Path = path.join(audio_path, 'students')
      let id, name
      let n

      if (key == '随机学生') {
        let role = cfg.getdefSet('role')
        let keys = Object.keys(role)
        n = Math.floor(Math.random() * keys.length)
        id = keys[n]
        name = cfg.getID(id)
      } else {
        id = cfg.getID(key)
        if (!id) {
          logger.mark(`[ba语音]未找到${key}`)
          return false
        }
        name = cfg.getID(id)
      }

      logger.mark(id, name)
      
      Path = path.join(Path, name)

      if (!fs.existsSync(Path)) {
        await this.downVoice(id)
      }

      let files = fs.readdirSync(Path)

      if (files == 0) {
        await this.downVoice(id)
      }
      
      n = Math.floor(Math.random() * files.length)
      Path = path.join(Path, files[n])

      let text = path.parse(files[n]).name

      text = name + 'n' + text
      text = text
      .replace(/n/g, '\n')
      .replace(/_/g, '\n\n')
      .trim()

      await this.e.reply(text)
      await this.e.reply(segment.record(Path))
      return true
    }

    async downVoice(Id = 0) {
      await this.e.reply('开始下载')

      let api = new Api()
      let cacheKey = this.key + 'index'
      let index = await redis.get(cacheKey)
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

        redis.setEx(cacheKey, this.cd, JSON.stringify(idx))
      }

      if (Id) res = { [Id]: res[Id] }

        for (let id in res) {
          let name = cfg.getID(id)
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
  //logger.mark(response.status, response.statusText)
  //logger.mark(response.headers)
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }
  const buffer = await Promise.race([
      response.buffer(),
      timeout(timeoutMs)
  ])
  return buffer
}
