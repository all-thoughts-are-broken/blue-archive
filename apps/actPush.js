import Cfg, {ba} from '../model/Cfg.js'
import Activity from '../model/activity.js'

export class ActPush extends plugin {
    constructor() {
        super({
            name:"ba活动更新推送",
            dsc:"活动更新推送",
            envent: "message",
            priority: 7000,
            rule: [
                {
                    reg: ba + '活动推送$',
                    fnc:'actPush'
                },
                {
                    reg: ba + '推送清空缓存$',
                    fnc:'del'
                }
            ]
        })
        this.push = Cfg.set.actPush
        this.task = !this.push || {
			cron: '0 0 0/2 * * ?', //Cron表达式，(秒 分 时 日 月 星期)
			name: "ba活动更新推送",
			fnc: () => this.actPush(),
            log: true
		}
    }

    get key() {
        return `Yz:BlueArchive-plugin:actPush`
    }
    
    async actPush(){
        const act = new Activity(this.e)
        let data = JSON.parse(await redis.get(this.key))
        let actData = await act.getdata()
        if (!data) {
            logger.mark('[ba活动更新推送]：未获取到缓存数据')
            await redis.set(this.key, JSON.stringify(actData))
            return true
        }
        
        let pushList = Cfg.actPushList
        let title = []
        let newAct = []
        
        for (let elem of data) {
            title.push(elem.title)
        }
        for (let elem of actData) {
            if (!title.includes(elem.title)) {
                newAct.push(elem)
            }
        }

        logger.debug('newAct', newAct)

        if (newAct.length !== 0) {
            let img = await act.activity(Cfg.actPushServer, newAct)

            for (let key of pushList) {
                try {
					await Bot.pickGroup(key).sendMsg(segment.image(img))
				  } catch (err) {
					logger.error(`ba活动更新推送${key}失败:`, err)
				  }
                  await Bot.sleep(10000) //休息10秒
            }
            await redis.set(this.key, JSON.stringify(actData))
        }
        return true
     }

     async del() {
        logger.mark('清空缓存', await redis.del(this.key))
     }
    } 