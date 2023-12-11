import plugin from '../lib/plugin.js'
import common from '../lib/common.js'
import tools from '../lib/tools.js'
import { rulePrefixA , rulePrefixB } from '../lib/tools.js'

export class example extends plugin {
    constructor() {
        super({
            name:"关卡攻略",
            dsc:"如名字所说",
            event: "message",
            priority: 7000,
            rule: [
                {
                    reg: `^${rulePrefixA}-${rulePrefixB}$`,
                    fnc:'GQGL'
                                    
                }
            ]
        })
    }

async GQGL (e) {
         let msg = e.msg.replace(/\/|H|-/g, '')
         let msgArray = msg.split('')
         let juTi = e.msg.replace(/\//g, '').trim()
         let zhangJie = ''
         if (msgArray.length == 2) {
             zhangJie = msgArray[0]
         } else if (msgArray.length == 3) {
          zhangJie = msgArray[0] + msgArray[1]
         }
         let xxl = tools.sendpic(zhangJie, juTi)
         let forWardmsg = common.makeForwardMsg(e, xxl, `第${zhangJie}章${juTi}攻略`) // 将此行注释，不注释也可以
        e.reply(forWardmsg) // 然后将这个改为 e.reply(xxl) 即可不用合并转发的消息
    }
  }    
