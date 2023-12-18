import cfg from '../model/Cfg.js'
import fs from "node:fs";

const _path=process.cwd() //项目路径

export class example extends plugin {
  constructor () {
    super({
      name: '学生攻略',
      dsc: '查看攻略',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: '^#?(ba|Ba|BA)',
          fnc: 'baimg'
        }
      ]
    })
  }

  async baimg(e){
    let msg = e.msg.replace(/#|B|b|A|a/g, '').trim()
    let name = cfg.getID(msg)
    if (!name) return false //判断名字是否存在
    //图片路径
    let img_path = `${_path}/plugins/BlueArchive-plugin/resources/student_information/${name}.png`
    logger.mark("图片路径:",img_path)
    if (!fs.existsSync(img_path)) return e.reply('唔！图片不见了...')
    
    let msg1 = [
      "你要的档案找到了~",
      segment.image('file:///' + img_path)
    ];
    
     return e.reply(msg1)
  }
}

