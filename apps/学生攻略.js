import cfg from '../model/Cfg.js'
import fs from "node:fs";
import strategy from '../model/Strategy.js'

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
        }
      ]
    })
  }

  async baimg(e){
    let msg = e.msg.replace(/#|[abAB]/g, '').trim()
    let name = cfg.getID(msg)
    if (!name) return false //判断名字是否存在
    name = cfg.getID(name) //用id重新获取名字
    let _name = name
    let msg1 = ["你要的档案找到了~"];
    //图片路径
    let img_path = `./plugins/BlueArchive-plugin/resources/student_information/${name}.png`
    logger.mark("图片路径:",img_path)
    //if (!fs.existsSync(img_path)) return e.reply('唔！图片不见了...')
    let type = name.match(/泳装|私服|温泉|正月|骑行|应援|幼女|运动|体操|圣诞/)  //对传入参数进行处理
    if (type == '骑行') type = '自行车'
    if (type == '体操') type = '运动'
    if (type) _name = name.replace(/\(.*\)/g, '')
    if (!fs.existsSync(img_path))
      msg1.push(await new strategy().getimg(_name, type, name))
    else
      msg1.push(segment.image('file:///' + img_path))
    
     return e.reply(msg1)
  }

  
}

