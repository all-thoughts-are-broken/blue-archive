import Tarot from '../model/tarot.js'
import {ba} from '../model/Cfg.js'

export class Ba_Tarot extends plugin {
  constructor () {
    super({
      name: 'ba塔罗牌',
      dsc: 'ba塔罗牌',
      event: 'message',
      priority: 1000,
      rule: [
        {
          reg: ba + '(塔罗牌$|运势$|占卜$|塔罗牌解读)',
          fnc: 'tarot'
        }
      ]
    })
  }

  async tarot () {
    let key = this.e.msg
    const tarot = await Tarot.init(this.e)

    //解读不限制
    if (/解读/.test(key)) {
      return await tarot.reading()
    }

    if (!tarot && !this.e.isMaster) {
      await this.reply('已达到今日上限了哦~')
      return true
    }
    
    if (/塔罗牌$/.test(key)) {
      return await tarot.tarot()
    } else if (/运势$/.test(key)) {
      return await tarot.fortune()
    } else if (/占卜$/.test(key)) {
      return await tarot.divination()
    }
  }
}