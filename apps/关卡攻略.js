import gq from '../model/GQ.js'

let state = false //更新状态

export class example extends plugin {
    constructor() {
        super({
            name:"关卡攻略",
            dsc:"如名字所说",
            event: "message",
            priority: 1000,
            rule: [
                {
                    reg: `^(/|#)(更新)?[0-9]{1,2}-[1-5][Hh]?$`,
                    fnc:'GQGL'
                },
                {
                    reg: `^(/|#)视频[0-9]{1,2}-[1-5][Hh]?$`,
                    fnc:'video'
                },
                {
                    reg: `^(/|#)?更新(全部)?([0-9]{1,2})?(关卡|章节|章)(攻略)?$`,
                    fnc:'update'
                },
            ]
        })
    }

async GQGL (e) {
         let zhangJie = e.msg.replace(/\/|-[1-5][Hh]?|#|更新/g, '')
         let msg
         let juTi = e.msg
         .replace(/\/|#|更新/g, '')
         .replace(/h/g, 'H')
         .trim()
         logger.mark("章节:",zhangJie, "关卡:",juTi)
         if (e.msg.match(/更新/)) {
            if (state) 
            return e.reply('正在更新中...请耐心等待！')
            msg = await gq.upimg(zhangJie, juTi)
        }
        else
            msg = await gq.getImg(zhangJie, juTi)

        return e.reply(msg)
    }

    async video (e) {
        e.msg = e.msg
        .replace(/\/|#|视频/g, '')
        .replace(/h/g, 'H')
        .trim()
        logger.mark("关卡:",e.msg)
        let path = await gq.getvideo(e.msg)
        if (!path) {
            e.reply('没找到呢...尝试找图片攻略...')
            return this.GQGL(e)  //没找到视频尝试找图片
        }
        //if (!path) return e.reply('没找到视频呢~尝试下找图片吧')
        return e.reply(segment.video(path))

   }

   async update (e) {
    if (!e.isMaster) return false
    if (state) return e.reply('正在更新中...')
    let n = Number(e.msg.match(/[0-9]{1,2}/))
    let msg
    logger.mark("章节:",n)
    if (!n) msg = `开始更新全部关卡攻略~\n时间较长请耐心等待...`
    else msg = `开始更新${n}章关卡攻略...`
    state = true
    e.reply(msg)
    let mag = await gq.update(n)
    state = false
    return e.reply(mag)
   }

    
  }
