import plugin from '../../../lib/plugins/plugin.js'
import common from '../../../lib/common/common.js'
import fs from 'fs'

const _path=process.cwd()


export class lookFuture extends plugin {
    constructor() {
      super({
        name: '未来视',
        dsc: '攻略',
        event: 'message',
        priority: 3000,
        rule: [{
            reg: '^#?(国际服)?未来视$',
            fnc: 'seeFuture',
          }
        ]
      })
      this.path = `${_path}/plugins/BlueArchive-plugin/resources/extraResources/未来视/`
      this.filePath = this.path
    }


   async seeFuture (e) {
    const paths = [
      this.filePath + `04.png`,
      this.filePath + `03.png`,
      this.filePath + `02.png`,
      this.filePath + `01.jpg`,
    ]
    let msg = ["以上攻略来自https://ba.gamekee.com/150045.html"]

    for (let path of paths) {
      if (!fs.existsSync(path)) {
        return await e.reply('请先发送 #ba更新资源')
      }
      msg.unshift(segment.image(`file:///${path}`))
    }

    let forwardMsg = await common.makeForwardMsg(e, msg, '国际服未来视')    //制作转发的消息

     await e.reply(forwardMsg)
     return true
   }
}   
