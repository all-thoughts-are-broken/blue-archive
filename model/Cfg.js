import fs from 'node:fs'
import _ from 'lodash'
import YAML from 'yaml'
import chokidar from 'chokidar'

const _path = process.cwd()
const strategy_path = `${_path}/plugins/BlueArchive-plugin/resources/student_information/` //学生攻略路径
const video_path = `${_path}/plugins/BlueArchive-plugin/resources/video/` //视频关卡攻略路径
const gq_path = `${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/`  //关卡攻略路径
const Tepm_path = `${_path}/plugins/BlueArchive-plugin/resources/Tepm/`
const audio_path = `${_path}/plugins/BlueArchive-plugin/resources/audio/`  //音频路径
const extraRes_path = `${_path}/plugins/BlueArchive-plugin/resources/extraResources/` //额外资源路径
const types = `泳装|水着|私服|温泉|正月|新年|骑行|自行车|应援|幼女|运动|体操|体育服|圣诞|女仆|邦尼|兔女郎|露营|野营|礼服|导游`  //角色类型
const typeMap = {
  '骑行': '自行车',
  '体操': '运动',
  '体育服': '运动',
  '新年': '正月',
  '水着': '泳装',
  '野营': '露营',
  '邦尼': '兔女郎'
}
const ba = `^#?(ba|BA|Ba)`

const searchList = {}

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
      strategy_path, 
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
    })

    for (const file of files) {
      if (['role.yaml', 'version.yaml', 'gacha.yaml', 'json'].includes(file)) continue
      if (!fs.existsSync(`${this.configPath}${file}`)) {
        fs.copyFileSync(`${this.defSetPath}${file}`, `${this.configPath}${file}`)
      }
    }
    
    logger.mark(logger.yellow(`[BlueArchive]初始化配置完成!`))
  }

  /** 标题制作配置 */
  get logo_set() {
    return this.getConfig('logo')
  }

  /** 用户配置 */
  get set() {
    return this.getConfig('set')
  }

  /** 默认角色 */
  get defRole() {
    return this.getdefSet('role')
  }

  /** 用户配置角色 */
  get cfgRole() {
    return this.getConfig('role')
  }

  /** 活动更新推送列表 */
  get actPushList() {
    return this.set.actPushList
  }

  /** 活动更新推送设置 */
  get actPushServer() {
    return this.set.actPushServer
  }

  /** 角色列表 */
  roleMap(lang = 'zh') {
    let defRole = this.defRole
    let cfgRole = this.cfgRole
    this.nameID = new Map()
    this.idName = new Map()
      let nameID2 = {}
      for (let i in defRole) {
        nameID2[defRole[i][0]] = i

        if (lang == 'zh') {
          this.idName.set(i, String(defRole[i][0]))
        } else if (lang == 'en') {
          this.idName.set(i, this.nameFilterEn(defRole[i]))
        } else {
          this.idName.set(i, this.nameFilterJp(defRole[i]))
        }
        
        for (let abbr of defRole[i]) {
          this.nameID.set(String(abbr), i)
        }
      }
      for (let i in cfgRole) {
        for (let abbr of cfgRole[i]) {
          this.nameID.set(String(abbr), nameID2[i])
        }
      }
      return this.nameID
  }

  /** 筛选英文名 */
  nameFilterEn(arr) {
    return arr.filter(elem => /[a-z]+/gi.test(elem))[1]
  }

  /** 筛选日文名 */
  nameFilterJp(arr) {
    return arr.filter(elem => /[ぁ-んァ-ヶ]/g.test(elem))[1]
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

  getJson (app, name) {
    let file = `./plugins/BlueArchive-plugin/data/${app}/${name}.json`
    let key = `${app}.${name}`
    if (this.config[key]) return this.config[key] //缓存

    this.config[key] = JSON.parse(
      fs.readFileSync(file, "utf8")
    )

    return this.config[key]
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
   * @return normal 普通服装
   */
  getRole (msg, filterMsg = '') {
    let alias = msg
    if (filterMsg) {
      alias = alias.replace(new RegExp(filterMsg, 'g'), '').trim()
    }

    logger.debug(alias)

    let id = this.getID(alias)
    let name = this.getName(id)
    //let normal = ''

    //if (!this.isNormalRole(name)) {
    //  normal = this.getNormalRole(name)
    //}

    logger.debug(id)
    logger.debug(name)

    if (!id) {
      return false
    }

    return {
      roleId: id,
      alias,
      name: name,
      //normal
    }
  }

  /** 角色map列表 */
  getRoleMap() {
    let role = this.defRole
    let nameID = new Map()
    for (let id in role) {
        nameID.set(role[id], id)
    }
    return nameID
  }

  /**
   * 获取角色id
   * @param keyword 角色名字
   */
  getID(keyword) {
    if (!keyword) return false

    logger.debug('keyword',keyword)

    this.roleMap()
    keyword = keyword.replace(/（/g, '(').replace(/）/g, ')')
    
    //logger.debug('this.nameID',this.nameID)

    let id = this.nameID.get(keyword)
    if (!id) {
      logger.debug(logger.yellow("getID:本地文件无数据"))
    }
    return id || ''
  }

  /**
   * id转角色
   * @param {number} keyword id
   * @param {string} lang 返回语言种类 zh en jp
   * @returns name
   */
  getName(keyword, lang = 'zh') {
    this.roleMap(lang)
    let name = this.idName.get(keyword)
    return name || ''
  }

  /** 搜索角色 */
  search(key, idx = false) {
    this.roleMap()
    let list = Array.from(this.nameID.keys())
    let names = []
    let i = 1

    for (let name of list) {
      if (name.includes(key)) {
        if (idx) {
          names.push(`${i}.${name}`)
          searchList[i] = name
          i++
        } else {
          names.push(name)
        }
      }
    }
    return names
  }

  /**
   * 随机返回一个角色
   * @param {boolean} normalRole 是否返回普通角色
   * @returns 
   */
  random_role(normalRole = false) {
    let role = this.defRole
    let keys = Object.keys(role)
    let randomKey = keys[Math.floor(Math.random() * keys.length)]
    logger.debug('随机id:', randomKey)
    let roleName = role[randomKey][0]
    
    logger.debug('isNormalRole', this.isNormalRole(roleName))

    if (normalRole && !this.isNormalRole(roleName)) {
      var { 
        id: normalRoleId, 
        name: normalRoleName 
      } = this.getNormalRole(roleName)
    }

    return {
      id: randomKey, 
      name: roleName,
      normalRoleId,
      normalRoleName
    }
  }

  /** 普通服装角色 */
  getNormalRole(roleName) {
    roleName = roleName.replace(/\(.*\)|（.*）/g, '')
    let id = this.getID(roleName)
    let name = this.getName(id)
    return { id, name }
  }

  /** 是否普通角色 */
  isNormalRole(roleName) {
    return !/\(.*\)|（.*）/.test(roleName)
  }
}



export default new baCfg()
export { 
  _path,
  strategy_path, 
  types, 
  typeMap,
  video_path, 
  audio_path,
  Tepm_path,
  extraRes_path,
  ba,
  searchList
 }
