import plugin from '../../../lib/plugins/plugin.js'
import common from '../../../lib/common/common.js'
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
    }


   async seeFuture (e) {
         let msgs = [
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/未来视/extraResources/01.jpg`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/未来视/extraResources/02.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/未来视/extraResources/03.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/未来视/extraResources/04.png`),
             "以上攻略来自https://ba.gamekee.com/150045.html"

                     ]

        let forwardMsg = await common.makeForwardMsg(e, msgs, '国际服未来视')    //制作转发的消息
        await e.reply(forwardMsg)

   }
}   
