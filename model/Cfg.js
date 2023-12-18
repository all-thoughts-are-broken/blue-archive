import fs from 'node:fs'
import _ from 'lodash'
import YAML from 'yaml'
import chokidar from 'chokidar'

class baCfg {
  constructor () {
    // 配置文件
    this.configPath = './plugins/BlueArchive-plugin/config/'
    this.config = {}

    // 监听文件
    this.watcher = { config: {} }
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

  /**
   * 听配置文件
   * @param file
   * @param name
   */
  watch (file, name) {
    const watcher = chokidar.watch(file)

    watcher.on('change', (path) => {
      delete
      logger.mark(`[修改配置文件][${name}]`)
    })
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
   * @param keyword id或名字
   */
  getID(keyword) {
    if (!keyword) return false
    let nameID = ''
    //读取本地文件
    let roleId = this.getYaml('role', 'resources')
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
