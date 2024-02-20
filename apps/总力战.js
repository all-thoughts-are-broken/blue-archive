import plugin from '../../../lib/plugins/plugin.js'
import common from '../../../lib/common/common.js'
const _path=process.cwd()




export class zonglizhan extends plugin {
    constructor() {
      super({
        name: '总力战',
        dsc: '攻略',
        event: 'message',
        priority: 3000,
        rule: [{
            reg: '^#?总力战帮助$',
            fnc: 'help',
               },
               {
            reg: '^#?格里高利$',
            fnc: 'guregoreo',
               },
               {
            reg: '^#?大蛇$',
            fnc: 'binah',
               }
        ]
      })
    }

   async help (e) {
let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/sourisen.png`),"目前只有大蛇和格里高利的，慢慢鸽"]
        await e.reply(msg)
           return true

   }

   async guregoreo (e) {
         let msgs = [
             "7个难度的属性图如下",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/格里高利/normal.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/格里高利/hard.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/格里高利/veryhard.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/格里高利/hardcore.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/格里高利/extreme.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/格里高利/insane.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/格里高利/torment.png`),
             "格里高利的机制图如下",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/格里高利/机制.png`),
             "以上就是全部攻略"
                    ]

        let forwardMsg = await common.makeForwardMsg(e, msgs, '格里高利')    //制作转发的消息
        await e.reply(forwardMsg)

   }

   async binah (e) {
    let msgs = [
        "7个难度的属性图如下",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/大蛇/normal.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/大蛇/hard.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/大蛇/veryhard.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/大蛇/hardcore.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/大蛇/extreme.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/大蛇/insane.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/大蛇/torment.png`),
        "大蛇的机制图如下",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/总力战/大蛇/机制.jpg`),
        "以上就是全部攻略"
               ]

   let forwardMsg = await common.makeForwardMsg(e, msgs, '大蛇')    //制作转发的消息
   await e.reply(forwardMsg)

}
}   
