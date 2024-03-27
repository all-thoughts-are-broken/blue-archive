import base from './base.js'
import Cfg from './Cfg.js'
import lodash from 'lodash'
import moment from 'moment'
import path from 'node:path'
import fs from 'fs'
import { saveImg } from './tools.js'

const _path = process.cwd()
const tarotsPath = `${_path}/plugins/BlueArchive-plugin/resources/tarot/`

export default class Tarot extends base {

  constructor (e) {
    super(e)
    this.model = 'tarot'

    /** 默认设置 */
    this.set = Cfg.set.tarot

    this.cardKey = lodash.sample(Object.keys(this.cards))
    this.cardInfo()
  }

  get key() {
    /** 群，私聊分开 */
    if (this.e.isGroup) {
      return `${this.prefix}${this.e.group_id}:${this.userId}`
    } else {
      return `${this.prefix}private:${this.userId}`
    }
  }

  get formations() {
    return Cfg.getJson(this.model, 'formations')
  }

  get cards() {
    return Cfg.getJson(this.model, 'cards')
  }

  get cardUrls() {
    return Cfg.getJson(this.model, 'tarotUrls')
  }

  get fortune_descriptions() {
    return Cfg.getJson(this.model, 'fortune_descriptions')
  }

  /** 初始化卡片 */
  cardInfo(cardKey = this.cardKey) {
    this.card = this.cards[cardKey]
    this.cardName = this.card.name_cn
    this.cardMeaningUp = this.card.meaning.up
    this.cardMeaningDown = this.card.meaning.down
    this.cardUrl = this.cardUrls[`tarot_${cardKey}`]
    this.localPath = path.join(tarotsPath, this.card.type, `${this.card.pic}.png`)
  }

  static async init (e) {
    let tarot = new Tarot(e)
    let canAccess = await tarot.canAccessTarot()
    return canAccess ? tarot : false
  }

  /** 限制 */
  async canAccessTarot() {
    const counterValue = await redis.get(this.key)
    if (counterValue === null) {
      try {
        await redis.setEx(this.key, this.getEnd(), '1')
      } catch (err) {
        logger.error(err)
      }
      return true
    }

    logger.debug(counterValue, typeof counterValue)

    if (parseInt(counterValue) >= this.set.limit) {
      return false
    }

    await redis.incr(this.key)
    return true
  }

  /** 塔罗牌 */
  async tarot () {
    let msg = `塔罗牌名称: ${this.cardName}\n正位含义: ${this.cardMeaningUp}\n逆位含义: ${this.cardMeaningDown}`

    await this.e.reply(msg, false, { at: true })

    if (!fs.existsSync(this.localPath)) {
      if (!await saveImg(this.cardUrl, this.localPath)) {
        await this.e.reply('下载图片失败')
        return true
      }
    }

    await this.e.reply(segment.image(`file:///${this.localPath}`))
    return true
  }

  /** 占卜 */
  async divination() {
    const chosenSpread = lodash.sample(Object.keys(this.formations))
    const spreadInfo = this.formations[chosenSpread]
    const selectedCards = []
    for (let i = 0; i < spreadInfo.cards_num; i++) {
        let cardKey = lodash.sample(Object.keys(this.cards))
        selectedCards.push(cardKey)
    }

    this.e.reply(`老师，你抽到的牌阵是：${chosenSpread}`, false, { at: true })

    for (let i = 0; i < selectedCards.length; i++) {
      let cardKey = selectedCards[i]
      this.cardInfo(cardKey)
      let representation = lodash.sample(spreadInfo.representations)[i]  //描述
      let position  //位置
      let cardMeaning  //卡片解释
      let isUp = lodash.random(0, 1)
      if (isUp) {
          position = '正位'
          cardMeaning = this.card.meaning.up
      } else {
          position = '逆位'
          cardMeaning = this.card.meaning.down
      }

      let msg = `${representation}：${this.cardName}（${position}）\n解释：${cardMeaning}`

      if (!fs.existsSync(this.localPath)) {
        if (!await saveImg(this.cardUrl, this.localPath)) {
          await this.e.reply(msg + '\n\n图片下载失败')
          continue
        }
      }

      await this.e.reply([msg, segment.image(`file:///${this.localPath}`)], false, { at: true })
    }
  }

  /** 运势 */
  async fortune() {
    let fortuneScore = lodash.random(1, 100)
    let scoreRange = `${Math.floor((fortuneScore - 1) / 10) * 10 + 1}-${Math.floor((fortuneScore - 1) / 10) * 10 + 10}`
    let fortune_description = lodash.sample(this.fortune_descriptions[scoreRange])

    let msg = `今日塔罗牌：${this.cardName}\n今日运势指数：${fortuneScore}\n运势解读：${fortune_description}\n`
      
    if (!fs.existsSync(this.localPath)) {
      if (!await saveImg(this.cardUrl, this.localPath)) {
        await this.e.reply(msg + '\n\n图片下载失败')
      }
    }

    await this.e.reply([msg, segment.image(`file:///${this.localPath}`)], false, { at: true })
    return true
  }

  /** 解读 */
  async reading() {
    let userInput = this.e.msg.replace(/#|ba|塔罗牌解读/g, '').trim()
    let specificCardKey
    if (!userInput) {
        specificCardKey = lodash.sample(Object.keys(this.cards))
    } else if (!isNaN(userInput) && userInput in this.cards) {
        specificCardKey = userInput
    } else {
        specificCardKey = Object.keys(this.cards).find(key => this.cards[key].name_cn === userInput)
    }
    if (specificCardKey) {
      this.cardInfo(specificCardKey)
      let cardDescription = this.card.description.join('\n')
      let msg = [
        `塔罗牌名称: ${this.cardName}\n原作者解读:\n${cardDescription}`, 
        segment.image(`file:///${this.localPath}`)
      ]
        
      if (!fs.existsSync(this.localPath)) {
        if (!await saveImg(this.cardUrl, this.localPath)) {
          msg[0] += '\n\n图片下载失败'
          msg.pop()
        }
      }
      await this.e.reply(msg, false, { at: true })
    } else {
      await this.e.reply('未找到指定的塔罗牌或输入格式错误，请输入正确的卡牌编号或名称。', false, { at: true })
    }
    return true
  }

  /** 当前日期现在时刻到结束时刻的秒数 */
  getEnd () {
    let endOfDay = moment().endOf('day')
    let endS = endOfDay.diff(moment(), 'seconds')
    return endS
  }
}
