import base from './base.js'
import fs from 'fs'
import { saveImg, gethtml } from "./tools.js"
import Cfg,{ strategy_path, types, typeMap } from './Cfg.js'

export default class Strategy extends base {
    constructor (e, id) {
        super(e)
        this.model = 'Strategy'
        this.roleID = id
        this.roleName = Cfg.getName(this.roleID)
        this.imgPath = `${strategy_path}${this.roleName}.png`
        this.otherName()
    }

    /** 获取英文和日文名 */
    otherName() {
      this.getJpName()
      this.getEnName()
    }

    getJpName(id) {//优先用日文名检索以提高准确性
      this.jpName = Cfg.getName(id || this.roleID, 'jp').replace(/\(.*\)/g, '') || '没有日文名' 
    }

    getEnName(id) {
      this.enName = Cfg.getName(id || this.roleID, 'en').replace(/\(.*\)/g, '') || '没有英文名'
    }

    static async init (e, key) {
      let id = Cfg.getID(key)
      return id ? new Strategy(e, id) : false
    }

    async getImg() {
      if (fs.existsSync(this.imgPath)) {
        return segment.image(`file:///${this.imgPath}`)
      }
      return await this.getStr()
    }

    /** 检索网页是否有匹配数据并下载图片 */
    async getStr(){
      let { name, type } = this.toType(this.roleName)
      let data = await this.getdata()

      logger.mark(`name:${name}，enName:${this.enName}，jpName:${this.jpName}`)
      logger.mark('type', type)

      for (let i = 0; i < data.length; i += 2) {
        let role = data[i]
        let url = data[i + 1]

        if (!role) continue
        if (role.includes(this.jpName) || role.includes(name)) {
          if (!type && !role.match(`.${types}`) || type && role.includes(type)) {
            logger.mark(`找到了${role}`)
            logger.mark(`url ${url}`)
            await saveImg(url, strategy_path, this.roleName)  //保存
            return segment.image(url)
          }
        }
      }
      return false
    }

    /** 解析类型和名字 */
    toType(name) {
      let type = (name.match(`\((${types})\)`) || [])[1]
      type = typeMap[type] || type
      name = name.replace(/\(.*\)/g, '')
      return { type, name }
    }


      //更新全部学生攻略
      async update(){
        let data = await this.getdata()

        let namelist = Cfg.getRoleMap()
        let map = new Map()
     
      for (let [names, id] of namelist) {     //遍历列表
        for (let i=0; i < names.length; i++) {  //遍历所有别名

          let { name, type } = this.toType(names[i])

          for (let i = 0; i < data.length; i += 2) {  //匹配名字和类型
            let role = data[i]
            let url = data[i + 1]
            if (!role) continue
            this.getJpName(id)

            if (role.includes(this.jpName) || role.includes(name)) {
              if (!type && !role.match(`.${types}`) || type && role.includes(type)) {
                map.set(names[0], url)
                break
              }
            }
          }
          if (map.has(names[0])) break  //找到了！下一个！！
        }
      }

      //logger.debug('map', map) 

      // 将 Map 对象转换为普通对象并存为文件
      let obj = {}
      for (let [key, value] of map) {
        obj[key] = value;
      }
      fs.writeFileSync('./plugins/BlueArchive-plugin/resources/Tepm/测试用(map).json', JSON.stringify(obj), 'utf8')

      //保存
      for (let [file_name, url] of map) {
          logger.debug('下载:', file_name)
          await saveImg(url, strategy_path, file_name)
      }
        return `更新完成！学生数量${map.size}`
      }

      //获取网页数据
    async getdata() {
        try {
          const $ = await gethtml('https://ba.gamekee.com/155086.html')
          //logger.debug($)
          let data = []

          //删除多余元素
          $('.fold-content:first').remove()

          //选择指定元素
          const parent = $('.fold-content')
          const boldSpans = parent.find('span[style*="font-weight: bold"], span[style*="font-weight:bold"], span[style*="font-weight: 700"], img[loading="lazy"][data-real]')

          boldSpans.each((i, element) => {
          let content = $(element).text().trim()
          if (!content) content = '$https:' + $(element).attr('data-real') + '$' //如果为空就是图片链接
          if (!content.match('undefined')) data.push(content) //排除undefined
        })

        //处理排版问题
        let index = data.indexOf('鬼方 佳世子/佳代子.正月(カヨコ/Kayoko)')
        data[index] = data[index + 1]
        data[index + 1] = '鬼方 佳世子/佳代子.正月(カヨコ/Kayoko)'

        //对数组进行处理
        data = data.join('')
        .replace(/\s|防吞|227号温泉浴场营运日志常驻更新追加常驻PU/g, '')
        .replace(/（/g, '(')
        .replace(/）/g, ')')
        .split('$')


          logger.debug('获取数量：',data.length)
          logger.debug(data)

          //将获取数据保存为文件
          fs.writeFileSync('./plugins/BlueArchive-plugin/resources/Tepm/测试用(data).json', JSON.stringify(data), 'utf8')

          return data

        } catch (error) {
          //logger.error(error);
          throw error
        }
      }

}
