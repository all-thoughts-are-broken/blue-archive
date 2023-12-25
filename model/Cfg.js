import fs from 'node:fs'
import _ from 'lodash'
import YAML from 'yaml'
import chokidar from 'chokidar'

const _path = process.cwd()
const path = `${_path}/plugins/BlueArchive-plugin/resources/student_information/` //学生攻略路径
const video_path = `${_path}/plugins/BlueArchive-plugin/resources/video/` //视频关卡攻略路径
const gq_path = `${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/`  //关卡攻略路径
const types = /泳装|私服|温泉|正月|骑行|应援|幼女|运动|体操|圣诞/  //角色类型

class baCfg {
  constructor () {

    /** 默认设置 */
    this.defSetPath = "./plugins/BlueArchive-plugin/defSet/";
    this.defSet = {};

    // 配置文件
    this.configPath = './plugins/BlueArchive-plugin/config/'
    this.config = {}

    // 监听文件
    this.watcher = { config: {} ,defSet: {}}

    this.initCfg()
  }

  /** 初始化配置 */
  initCfg () {
    logger.mark(logger.yellow(`[BlueArchive]初始化配置中...`))
    const configPath = this.configPath
    const pathDef = this.defSetPath
    const files = fs.readdirSync(pathDef).filter(file => file.endsWith(".yaml"))
    const paths = [path, video_path, gq_path, configPath]
    paths.forEach(path => {
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true }); // recursive选项表示创建多级路径
        logger.mark(`${path.replace('./plugins/BlueArchive-plugin', '')} 创建成功`);
      }
    });
    for (const file of files)
      if (!fs.existsSync(`${configPath}${file}`))
        fs.copyFileSync(`${pathDef}${file}`, `${configPath}${file}`)
        logger.mark(logger.yellow(`[BlueArchive]初始化配置完成!`))
  }

  /**
   * 获取配置文件
   * @param name
   */
  getConfig (name) {
    return this.getYaml(name)
  }
  

    /**
   * 获取配置yaml
   * @param type 默认跑配置-defSet，用户配置-config
   * @param name 名称
   */
    getYaml (name, type = 'config') {
      let file = `./plugins/BlueArchive-plugin/${type}/${name}.yaml`
      let key = `${type}.${name}`
      if (this.config[key]) return this.config[key] //缓存
  
      this.config[key] = YAML.parse(
        fs.readFileSync(file, "utf8")
      )
      // 监听文件
      this.watch(file, name)
  
      return this.config[key]
    }

  /**
   * 获取文件路径
   * @param name
   * @returns {string}
   */
  getFilePath (name) {
    return `${this.configPath}${name}.yaml`
  }


  /** 监听配置文件 */
  watch (file, name, type = "config") {
    let key = `${type}.${name}`

    if (this.watcher[key]) return

    const watcher = chokidar.watch(file)
    watcher.on("change", path => {
      delete this.config[key]
      if (typeof Bot == "undefined") return
      logger.mark(logger.yellow(`[修改ba配置文件][${type}][${name}]`))
      if (this[`change_${name}`]) {
        this[`change_${name}`]()
      }
    })

    this.watcher[key] = watcher
  }

  /**
   * 保存配置
   * @param name
   * @param data
   */
  saveSet (name, data) {
    let file = this.getFilePath(name)
    if (_.isEmpty(data)) {
      fs.existsSync(file) && fs.unlinkSync(file)
    } else {
      let yaml = YAML.stringify(data)
      fs.writeFileSync(file, yaml, 'utf8')
    }
  }

  /**直接cv大佬的代码
   * 获取角色id
   * @param keyword id或名字 'list'返回列表
   */
  getID(keyword) {
    if (!keyword) return false
    let nameID = ''
    //读取本地文件
    let roleId = this.getYaml('role', 'config')
    //返回列表
    /*
    if (keyword == 'list') {
      let data = {}
      for (let key in roleId) {
        let key2 = roleId[key][0]
        data[key2] = key
      }
      return data
    }*/
    if (keyword == 'list') {
      nameID = new Map()
      for (let key in roleId) {
          nameID.set(roleId[key], key)
      }
      return nameID
    }
    //id转角色名字
    if (!isNaN(Number(keyword))) {
        if (roleId[keyword] && roleId[keyword][0]) {
            return roleId[keyword][0]
        } else {
            //logger.mark("本地文件无数据");
            return ""
        }
    }
    //角色名字转id
    if (!nameID) {
        nameID = new Map()
        for (let i in roleId) {
            for (let val of roleId[i]) {
                nameID.set(val, i) //键i 值val
            }
        }
    }
    let name = nameID.get(keyword)
    if (!name) {
        //logger.mark("本地文件无数据");
    }
    return name ? name : ""
  }

}

export default new baCfg()
export { path, types, video_path }
