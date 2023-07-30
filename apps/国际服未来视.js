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
             "1.卡池未来视",
             "此部分卡池推荐为个人评估，当然还是看自己选择搭配&玩法\n实际卡池排程&活动还是以官方为主\n官方有说想要未来视排程跟日服缩短1个月差距\n没有活动的几个池子可能会变7天或是拿掉合并",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/未来视/1.png`),
             "2.存石未来视",
             "截止泳二复刻限定池，村长制作",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/未来视/2.png`),
             "3.BA钻石规划",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/未来视/3.png`),
             "4.活动未来视",
             "截至日版最新进度，此为配合满练玩家进度\n新手可能有差需多吃几管(还是得看自己能力)",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/未来视/4.png`),
             "以上攻略来自https://b23.tv/6zfBrT7"

                     ]

        let forwardMsg = await common.makeForwardMsg(e, msgs, '国际服未来视')    //制作转发的消息
        await e.reply(forwardMsg)

   }
}   
