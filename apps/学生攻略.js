import cfg from '../model/Cfg.js'
import fs from "node:fs";
import strategy from '../model/Strategy.js'
import { path, types } from '../model/Cfg.js'

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
          reg: '^#?[abAB]',
          fnc: 'baimg'
        },
        {
          reg: '^#?更新(.*)攻略$',
          fnc: 'baimg'
        },
        {
          reg: '^#?[abAB]?更新全部(角色|学生)(攻略)?$',
          fnc: 'update'
        }
      ]
    })
  }

  async baimg(e){
    let msg = e.msg.replace(/#|[abAB]|更新|攻略/g, '').trim()
    let file_name = cfg.getID(msg)
    if (!file_name) return false //判断名字是否存在
    file_name = cfg.getID(file_name) //用id重新获取名字
    let _name = file_name
    let type = file_name.match(types)  //对传入参数进行处理
    if (type == '骑行') type = '自行车'
    if (type == '体操') type = '运动'
    if (type) _name = file_name.replace(/\(.*\)/g, '')
    
    //更新指定学生攻略
    if (e.msg.match(/更新/)) {
    if (state) return e.reply('正在更新中...请耐心等待！')
      return e.reply(await new strategy().getimg(_name, type, file_name))
    }

    let msg1 = [];
    //图片路径
    let img_path = `${path}${file_name}.png`
    logger.mark("图片路径:",img_path)
    //if (!fs.existsSync(img_path)) return e.reply('唔！图片不见了...')

    if (!fs.existsSync(img_path))
      msg1.push(await new strategy().getimg(_name, type, file_name))
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

