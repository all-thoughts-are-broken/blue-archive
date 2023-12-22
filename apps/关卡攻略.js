import plugin from '../../../lib/plugins/plugin.js'
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
        e.reply(xxl)
    }
  }
