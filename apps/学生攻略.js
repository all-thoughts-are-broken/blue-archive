import Strategy from '../model/Strategy.js'
import { ba } from '../model/Cfg.js'

let state = false //更新状态

export class strategy extends plugin {
  constructor () {
    super({
      name: '学生攻略',
      dsc: '查看攻略',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: ba,
          fnc: 'baimg'
        },
        {
          reg: '^#?更新(.*)攻略$',
          fnc: 'baimg'
        },
        {
          reg: `${ba}?更新全部(角色|学生)(攻略)?$`,
          fnc: 'update'
        }
      ]
    })
  }

  async baimg(){
    let key = this.e.msg.replace(/#|ba|BA|Ba|更新|攻略/g, '').trim()
    let str = await Strategy.init(this.e, key)

    if (!str) return false
    
    //更新指定学生攻略
    if (this.e.msg.match(/更新/)) {
      let msg = state ? '正在更新中...请耐心等待！' : await str.getStr()
      return this.e.reply(msg)
    }

    logger.mark("图片路径:", str.imgPath)

    let msg = []
    let img = await str.getImg()

    if (!img) {
      msg = '唔！没找到图片...'
    } else {
      msg.push("你要的档案找到了~", img)
    }
    
     return this.e.reply(msg)
  }

  async update() {
    if (!this.e.isMaster) return false
    if (state) return this.e.reply('正在更新中...')
    state = true
    this.e.reply('开始更新...请耐心等待！')
    let msg = await new Strategy().update()
    state = false
    return this.e.reply(msg)
  }
  
}

