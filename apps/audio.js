import Audio from '../model/audio.js'
import { ba } from '../model/Cfg.js'

export class Audio_ extends plugin {
    constructor() {
        super({
            name: "BA音频",
            dsc: "bgm",
            event: "message",
            priority: 100,
            rule: [
            {
              reg: `^(#ba|#BA|#Ba)?(随机)?bgm(.*)?$`,
              fnc: "bgm",
            },
            { 
              reg: ba + "?(.*)语音$",
              fnc: "voice",
            },
            { 
              reg: ba + "?下载学生语音$",
              fnc: "downVoice",
            }
            ]
        })
    }

  async bgm(e) {
    const audio = await Audio.initBGM(e)
    if (!audio) {
      await e.reply('未下载资源,请先发送 #ba更新资源')
      return true
    }

    if (await audio.bgm() == 'select') {
      e.audio = audio
      this.setContext('selectBGM')
    }
    return true
  }

  async selectBGM(e) {
    const audio = e.audio
    if (audio.selectBGM(this.e)) {
      this.finish('selectBGM')
    }
    return true
  }

  async voice(e) {
    const audio = await Audio.initVoice(e)
    if (!audio)
      return false
    else
      return await audio.voice()
  }

  async downVoice(e) {
    if (!e.isMaster) return false
    return await new Audio(e).downVoice()
  }
}
