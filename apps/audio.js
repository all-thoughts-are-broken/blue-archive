import audio from '../model/audio.js'
import { ba } from '../model/Cfg.js'

export class Audio extends plugin {
    constructor() {
        super({
            name: "BA音频",
            dsc: "bgm",
            event: "message",
            priority: 1000,
            rule: [
            {
              reg: `^(#ba|#BA|#Ba)?(随机)?bgm(.*)?$`,
              fnc: "bgm",
            },
            //{
            //  reg: ba + "?下载bgm$",
            //  fnc: "downBGM",
            //},
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
    let key = e.msg.replace(/#ba|#BA|#Ba|bgm/g, '').trim()
    if (await new audio(e).bgm(key) == 'search') {
      this.setContext('searchBGM')
    }
    return true
  }

  async searchBGM() {
    if (await new audio(this.e).searchBGM(this.e)) {
      this.finish('searchBGM')
    }
    return true
  }

  //async downBGM(e) {
  //  if (!e.isMaster) return false
  //  return await new audio(e).downBGM()
  //}

  async voice(e) {
    let key = e.msg.replace(/#|语音|[AaBb]/g, '').trim()
    if (!key)
      return false
    else
      return await new audio(e).voice(key)
  }

  async downVoice() {
    if (!e.isMaster) return false
    return await new audio(e).downVoice()
  }
}
