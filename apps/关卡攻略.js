import gq from '../model/GQ.js'

export class example extends plugin {
    constructor() {
        super({
            name:"关卡攻略",
            dsc:"如名字所说",
            event: "message",
            priority: 1000,
            rule: [
                {
                    reg: `^(/|#)[0-9]{1,2}-[1-5][Hh]?$`,
                    fnc:'GQGL'
                }
            ]
        })
    }

async GQGL (e) {
         let zhangJie = e.msg.replace(/\/|-[1-5][Hh]?|#/g, '')
         let juTi = e.msg
         .replace(/\/|#/g, '')
         .replace(/h/g, 'H')
         .trim()
         logger.mark("章节:",zhangJie, "关卡:",juTi)
         let msg = await gq.getImg(zhangJie, juTi)
        e.reply(msg)
    }

    
  }
