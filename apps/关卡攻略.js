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
                },
                {
                    reg: `^(/|#)视频[0-9]{1,2}-[1-5][Hh]?$`,
                    fnc:'video'
                },

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

    async video (e) {
        e.msg = e.msg
        .replace(/\/|#|视频/g, '')
        .replace(/h/g, 'H')
        .trim()
        logger.mark("关卡:",e.msg)
        let path = await gq.getvideo(e.msg)
        if (!path) return this.GQGL(e)  //没找到视频尝试找图片
        //if (!path) return e.reply('没找到视频呢~尝试下找图片吧')
        e.reply(segment.video(path))

   }

    
  }
