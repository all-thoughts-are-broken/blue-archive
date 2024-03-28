import GachaData from '../model/gachaData.js'
import lodash from 'lodash'
import Cfg, {ba} from '../model/Cfg.js'

export class gacha extends plugin {
  constructor () {
    super({
      name: '十连',
      dsc: '模拟抽卡，每天十连20次，四点更新',
      event: 'message',
      priority: 100,
      rule: [
        {
          reg: ba + '(10|[常驻]*[十]+|抽)[连抽卡奖]*$',
          fnc: 'gacha'
        },
        {
          reg: ba + '更新卡池$',
          fnc: 'upPool'
        }
      ]
    })
  }

  async upPool() {
    this.GachaData = await GachaData.init(this.e)
    this.GachaData.upPool()
  }

  /** #十连 */
  async gacha () {
    this.GachaData = await GachaData.init(this.e)

    if (this.checkLimit()) return

    let data = await this.GachaData.run()

    /*
    let {list} = data
    let msg = ''
    list.forEach(v => {
      msg += `${v.name} ${v.star} ${v.isUp ? 'up' : ''}\n`
    })

    await this.e.reply(msg)*/
    await this.e.reply(data.img)
  }

  /** 检查限制 */
  checkLimit () {
    /** 主人不限制 */
    if (this.e.isMaster) return false

    let { user } = this.GachaData
    let { num } = user.today
    let nowCount = num
    
    if (nowCount < this.GachaData.set.count * 10) return false

    let msg = lodash.truncate(this.e.sender.card, { length: 8 }) + '\n'

    if (user.today.star.length > 0) {
      msg += '今日彩色：'
      if (user.today.star.length >= 4) {
        msg += `${user.today.star.length}个`
      } else {
        user.today.star.forEach(v => {
          msg += `${v.name}(${v.num})\n`
        })
        msg = lodash.trim(msg, '\n')
      }
    } else {
      msg += `今日已招募，累计${nowCount}次无彩`
    }
    this.reply(msg, false, { recallMsg: this.GachaData.set.delMsg })
    return true
  }

}
