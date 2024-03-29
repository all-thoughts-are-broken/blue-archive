import base from './base.js'
import Cfg from './Cfg.js'
import lodash from 'lodash'
import moment from 'moment'
import Activity from './activity.js'

/**
 * 
 * 以下是抽取重复角色所给的神明精髓和神明文字数量：
uP角色：
3星重复转化：50神名精髓，100角色神名文字
2星重复转化：10神明精髓，20角色神明文字
非UP角色：
3星重复转化：50神明精髓，30角色神明文字
2星重复转化：10神明精髓，5角色神明文字
1星重复转化：1神明精髓，1角色神明文字
 */

export default class GachaData extends base {

  constructor (e) {
    super(e)
    this.model = 'gacha'
    /** 卡池 */
    this.pool = {}
    /** 默认设置 */
    this.def = Cfg.getdefSet('gacha')
    this.set = Cfg.set.gacha

    /** 默认角色池 */
    this.type = 'limited'
    /** 抽卡结果 */
    this.res = []
  }

  get key () {
    /** 群，私聊分开 */
    if (this.e.isGroup) {
      return `${this.prefix}${this.e.group_id}:${this.userId}`
    } else {
      return `${this.prefix}private:${this.userId}`
    }
  }

  static async init (e) {
    let gacha = new GachaData(e)
    /** 抽卡类型 */
    gacha.getTpye()
    /** 用户抽卡数据 */
    await gacha.userData()
    /** 卡池 */
    await gacha.getPool()

    return gacha
  }

  static getImg (name, type = 'limited') {
    let id = Cfg.getID(name)
    return id ? `https://schale.gg/images/student/collection/${id}.webp` : ''
  }

  getTpye () {
    if (this.e.msg.includes('常驻')) this.type = 'permanent'
  }

  /** 奖池数据 */
  async getPool () {
    let server = this.set.server
    let key = `${this.prefix}NowPool:${server}`
    let NowPool = JSON.parse(await redis.get(key))

    if (!NowPool) {
      let poolArr = Cfg.getConfig('pool')[server]
      poolArr = [...poolArr].reverse()
      /** 获取设置卡池 */
      NowPool = poolArr.find((val) => new Date().getTime() <= new Date(val.endTime).getTime())
      if (!NowPool) {
        logger.mark('开始更新卡池...')
        let pool = await this.upPool()
        poolArr = pool[server]
        NowPool = poolArr.find((val) => new Date().getTime() <= new Date(val.endTime).getTime()) || poolArr.pop()
      }
      this.saveNowPool(key, NowPool)
    }

    if (this.type == 'limited') {
      let role3 = lodash.difference(this.def.role3, NowPool.up)

      this.pool = {
        name: NowPool.name,
        /** up */
        up: NowPool.up,
        /** 常驻3星 */
        role3: role3,
        /** 常驻2星 */
        role2: this.def.role2,
        /** 常驻1星 */
        role1: this.def.role1
      }
    }

    if (this.type == 'permanent') {
      this.pool = {
        name: '常驻',
        up: [],
        role3: this.def.role3,
        role2: this.def.role2,
        role1: this.def.role1
      }
    }
  }

  /** 用户数据 */
  async userData () {
    if (this.user) return this.user

    let user = await redis.get(this.key)

    if (user) {
      user = JSON.parse(user)
      /** 重置今日数据 */
      if (this.getNow() > user.today.expire) {
        logger.debug('重置今日数据')
        user.today = { star: [], expire: this.getEnd().end4, num: 0 }
      }
    } else {
      let commom = {  star2: 0 , num2: 0, num3: 0 }  // 2星数量，2星抽卡次数，3星抽卡次数
      user = {
        permanent: commom,
        limited: commom,
        today: { star: [], expire: this.getEnd().end4, num: 0}
      }
    }

    this.user = user

    return user
  }

  /** 抽卡 */
  async run () {
    let list = this.lottery()

    /** 截图数据 */
    let data = {
      //name: this.e.sender.card,
      //quality: 80,
      ...this.V,
      ...this.lotteryInfo(),
      list
    }

    logger.debug('卡池', this.pool)
    logger.debug('截图数据', data)

    data.img = await this.render('index', data)
    return data
  }

  /** 抽卡 */
  lottery (save = true) {
    /** 十连抽 */
    for (let i = 1; i <= 10; i++) {
      this.index = i
      this.user.today.num++
      if (this.lottery3()) continue
      if (this.lottery2()) continue
      this.lottery1()
    }

    if (save) this.saveUser()

    return this.res
  }

  lottery3 () {
    let type = this.type
    let randomNum = lodash.random(0, 100)
    /** 没有出彩 */
    if (randomNum > this.def.chance3) {
      this.user[this.type].num3++
      return false
    }

    let nowCardNum = this.user[this.type].num3 + 1
    let tmpName
    let isUp = false

    if (randomNum <= this.def.chanceUp) {
      tmpName = lodash.sample(this.pool.up)
      isUp = true
    } else {
      tmpName = lodash.sample(this.pool.role3)
    }

    /** 记录今天3星 */
    this.user.today.star.push({ name: tmpName, num: nowCardNum })

    /** 抽卡数清零 */
    this.user[this.type].num3 = 0

    this.res.push({
      name: tmpName,
      isUp,
      star: 3,
      color: 'border-color: #f082cba6; box-shadow: -1px 5px 30px #f082cb;',
      type,
      num: nowCardNum,
      index: this.index,
      imgFile: GachaData.getImg(tmpName),
    })

    return true
  }

  lottery2 () {
    let tmpChance2 = this.def.chance2
    let randomNum = lodash.random(0, 100)
    
    /** 2星保底 */
    if (this.user[this.type].num2 >= 9) {
      tmpChance2 += 1000
    }

    /** 没抽中2星 */
    if (randomNum > tmpChance2 || randomNum <= this.def.chance3) {
      /** 2星保底数+1 */
      this.user[this.type].num2++
      return false
    }

    /** 保底2星数清零 */
    this.user[this.type].num2 = 0

    //let type = 'limited'
    let type = this.type
    let tmpName = lodash.sample(this.pool.role2)

    this.res.push({
      name: tmpName,
      star: 2,
      color: 'border-color: #ffdd009a; box-shadow: -1px 5px 30px #FFDF00;',
      type,
      index: this.index,
      imgFile: GachaData.getImg(tmpName),
    })

    return true
  }

  lottery1 () {
    /** 随机1星 */
    let tmpName = lodash.sample(this.pool.role1)
    this.res.push({
      name: tmpName,
      star: 1,
      color: '',
      type: this.type,
      index: this.index,
      imgFile: GachaData.getImg(tmpName)
    })

    return true
  }

  lotteryInfo () {
    let info = `累计招募点数「${this.user.today.num}」`
    let nowThree = 0
    let nowTwo = 0

    this.res.forEach((v, i) => {
      if (v.star == 3) {
        nowThree++
        info = v.name
        info += `「${v.num}抽」`
      }
      if (v.star == 2) {
        nowTwo++
      }
    })

    let poolName = `限定池：${this.pool.name}`
    if (this.type == 'permanent') poolName = '常驻池'

    let res = {
      info,
      nowThree,
      nowTwo,
      poolName
    }

    logger.debug(`[${poolName}] [出彩数：${nowThree}] [${info}]`)

    return res
  }

  /** 更新卡池 */
  async upPool() {
    const act = await Activity.init(this.e)
    let actList = act.data
    logger.debug(actList)
    let poolArr = Cfg.getConfig('pool')
    for (let elem of actList) {
      if (/【.*卡池.*】/.test(elem.title)) {
        let server = elem.pub_area
        let push = true

        for (let e of poolArr[server])  //判断卡池是否已存在
          if (e.id == elem.id) push = false

        if (push) {
          let title = elem.title.replace(/【.*】|\(3★\)|\(★3\)/g, '')
          let role = title.split(/\s|&/g)
          let startTime = moment.unix(elem.begin_at).format('YYYY-MM-DD HH:mm:ss')
          let endTime = moment.unix(elem.end_at).format('YYYY-MM-DD HH:mm:ss')
          poolArr[server].push({
            id: elem.id,
            name: server + '卡池',
            startTime,
            endTime,
            up: role
          })
        }
      }
    }
    logger.debug('poolArr', poolArr)
    Cfg.saveSet('pool', poolArr)
    return poolArr
  }

  async saveUser () {
    this.user.today.expire = this.getEnd().end4
    logger.debug('this.user', this.user)
    await redis.setEx(this.key, 3600 * 24 * 2, JSON.stringify(this.user))
  }

  /** 缓存当前卡池 */
  async saveNowPool(key, NowPool) {
    await redis.setEx(key, 3600 * 24, JSON.stringify(NowPool))
  }

  /** 当前时间戳 */
  getNow () {
    return moment().format('X')
  }

  /** 当前日期的结束时刻（即午夜之前的那一刻）和距离当前时间4小时后的时刻的时间戳 */
  getEnd () {
    let end = moment().endOf('day').format('X')
    let end4 = 3600 * 4
    if (moment().format('k') < 4) {
      end4 += Number(moment().startOf('day').format('X'))
    } else {
      end4 += Number(end)
    }
    return { end, end4 }
  }
}
