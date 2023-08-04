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
           let txt = ["目前共有九个总力战boss\n1.GOZ(戈兹)\n2.HOD(霍德)\n3.CHESED(眼球)\n4.BINAH(大蛇)\n5. KAITEN FX Mk.0(寿司)\n6.HIERONYMUS(主教)\n7.GREGORIUS(格里高利)\n8.SHIRO & KURO(黑与白)\n9.PEROROOZILLA(鸡斯拉)\n目前就只做了格里高利和大蛇的"]

           await e.reply(txt)
           return true

   }

   async guregoreo (e) {
         let msgs = [
             "7个难度的属性图如下",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/格里高利/normal.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/格里高利/hard.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/格里高利/veryhard.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/格里高利/hardcore.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/格里高利/extreme.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/格里高利/insane.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/格里高利/torment.png`),
             "格里高利的机制图如下",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/格里高利/机制.png`),
             "以上就是全部攻略"
                    ]

        let forwardMsg = await common.makeForwardMsg(e, msgs, '格里高利')    //制作转发的消息
        await e.reply(forwardMsg)

   }

   async binah (e) {
    let msgs = [
        "7个难度的属性图如下",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/大蛇/normal.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/大蛇/hard.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/大蛇/veryhard.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/大蛇/hardcore.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/大蛇/extreme.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/大蛇/insane.png`),
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/大蛇/torment.png`),
        "格里高利的机制图如下",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/总力战/大蛇/机制.jpg`),
        "以上就是全部攻略"
               ]

   let forwardMsg = await common.makeForwardMsg(e, msgs, '大蛇')    //制作转发的消息
   await e.reply(forwardMsg)

}
}   
