import cfg from '../model/Cfg.js'
import fs from "node:fs";
import strategy from '../model/Strategy.js'
import { path, types, typeMap, ba } from '../model/Cfg.js'

let state = false //更新状态

export class example extends plugin {
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

  async baimg(e){
    let name = e.msg.replace(/#|[abAB]|更新|攻略/g, '').trim()
    let id = cfg.getID(name)
    if (!id) return false //判断名字是否存在
    name = cfg.getID(id) //用id重新获取名字
    let _name = name
    let type = (name.match(`\((${types})\)`) || [])[1]
    type = typeMap[type] || type
    name = type? name.replace(/\(.*\)/g, '') : name
    
    //更新指定学生攻略
    if (e.msg.match(/更新/)) {
    if (state) return e.reply('正在更新中...请耐心等待！')
      return e.reply(await new strategy().getimg(name, type, _name))
    }

    let msg1 = [];
    //图片路径
    let img_path = `${path}${name}.png`
    logger.mark("图片路径:",img_path)
    //if (!fs.existsSync(img_path)) return e.reply('唔！图片不见了...')

    if (!fs.existsSync(img_path))
      msg1.push(await new strategy().getimg(name, type, _name))
    else
      msg1.push(segment.image('file:///' + img_path))

    if (!msg1.includes('唔！没找到图片...')) msg1.unshift("你要的档案找到了~")
    
     return e.reply(msg1)
  }

  async update(e) {
    if (!e.isMaster) return false
    if (state) return e.reply('正在更新中...')
    state = true
    e.reply('开始更新...请耐心等待！')
    let msg = await new strategy().update()
    state = false
    return e.reply(msg)
  }

  
}

