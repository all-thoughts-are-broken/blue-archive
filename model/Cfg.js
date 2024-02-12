import fs from 'node:fs'
import _ from 'lodash'
import YAML from 'yaml'
import chokidar from 'chokidar'

const _path = process.cwd()
const path = `${_path}/plugins/BlueArchive-plugin/resources/student_information/` //学生攻略路径
const video_path = `${_path}/plugins/BlueArchive-plugin/resources/video/` //视频关卡攻略路径
const gq_path = `${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/`  //关卡攻略路径
const Tepm_path = `${_path}/plugins/BlueArchive-plugin/resources/Tepm/`
const audio_path = `${_path}/plugins/BlueArchive-plugin/resources/audio/`  //音频路径
const types = `泳装|水着|私服|温泉|正月|新年|骑行|自行车|应援|幼女|运动|体操|圣诞|女仆|兔女郎|露营|野营|礼服`  //角色类型
const typeMap = {
  '骑行': '自行车',
  '体操': '运动',
  '新年': '正月',
  '水着': '泳装',
  '野营': '露营'
};
const ba = `^#?(ba|BA|Ba)`

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
    const files = fs.readdirSync(this.defSetPath).filter(file => file.endsWith(".yaml"))
    const paths = [
      path, 
      video_path, 
      gq_path, 
      Tepm_path,
      audio_path,
      this.configPath
    ]
    paths.forEach(path => {
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true }); // recursive选项表示创建多级路径
        logger.mark(`${path.replace(`${_path}/plugins/BlueArchive-plugin`, '')} 创建成功`);
      }
    });
    for (const file of files)
      if (!fs.existsSync(`${this.configPath}${file}`) && file != 'role.yaml' && file != 'version.yaml')
        fs.copyFileSync(`${this.defSetPath}${file}`, `${this.configPath}${file}`)
        logger.mark(logger.yellow(`[BlueArchive]初始化配置完成!`))
  }

  /**
   * 获取用户配置文件
   * @param name
   */
  getConfig (name) {
    return this.getYaml(name)
  }

  /**
   * 获取默认配置文件
   * @param name
   */
  getdefSet (name) {
    return this.getYaml(name, 'defSet')
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
  getFilePath (name, type = "config") {
    if (type == 'defSet') {
      return `${this.defSetPath}${name}.yaml`
    } else {
      return `${this.configPath}${name}.yaml`
    }
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
  saveSet (name, data, type = 'config') {
    let file = this.getFilePath(name, type)
    if (_.isEmpty(data)) {
      fs.existsSync(file) && fs.unlinkSync(file)
    } else {
      let yaml = YAML.stringify(data)
      fs.writeFileSync(file, yaml, 'utf8')
    }
  }

  /**
   * 获取消息内学生名称
   * @param msg 判断消息
   * @param filterMsg 过滤消息
   * @return roleId 角色id
   * @return name 角色名称
   * @return alias 当前别名
   */
  getRole (msg, filterMsg = '') {
    let alias = msg
    if (filterMsg) {
      alias = alias.replace(new RegExp(filterMsg, 'g'), '').trim()
    }

    logger.mark(alias);

    let id = this.getID(alias)
    let name = this.getID(id)

    logger.mark(id);
    logger.mark(name);

    if (!id) {
      return false
    }

    return {
      roleId: id,
      alias,
      name: name
    }
  }

  /**
   * 获取角色id
   * @param keyword id或名字 'list'返回列表
   */
  getID(keyword) {
    if (!keyword) return false

    //读取本地文件
    let role = this.getdefSet('role')
    let role2 = this.getConfig('role')

    //转为map对象
      this.nameID = new Map()
      let nameID2 = {}
      for (let i in role) {
        nameID2[role[i][0]] = i
        for (let abbr of role[i]) {
          this.nameID.set(String(abbr), i)
        }
      }
      for (let i in role2) {
        for (let abbr of role2[i]) {
          this.nameID.set(String(abbr), nameID2[i])
        }
      }

      //logger.mark(this.nameID);

    //返回列表
    if (keyword == 'list') {
      let nameID = new Map()
      for (let key in role) {
          nameID.set(role[key], key)
      }
      return nameID
    }
    
    //id转角色名字
    if (!isNaN(Number(keyword))) {
      for (let [key, value] of this.nameID) {
        if (value == keyword) {
          return key;
        }
      }
      return ''
    }
    
    keyword = keyword.replace(/（/g, '(').replace(/）/g, ')')

    //角色名字转id
    let id = this.nameID.get(keyword)
    if (!id) {
        //logger.mark("本地文件无数据");
    }
    return id ? id : ''
  }

}

export default new baCfg()
export { 
  _path,
  path, 
  types, 
  typeMap,
  video_path, 
  audio_path,
  Tepm_path,
  ba
 }
