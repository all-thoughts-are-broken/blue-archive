import Cfg, { _path, ba, searchList } from '../model/Cfg.js'
import Api from '../model/api.js'
import fs from 'fs'
import Strategy from '../model/Strategy.js'
import StudentList from "../model/StudentList.js"

export class student_list extends plugin {
    constructor() {
      super({
        name: '学生列表',
        dsc: 'emmm......',
        event: 'message',
        priority: 5000,
        rule: [
          {
            reg: "^#?学生列表$",
            fnc: "student_list",
          },
          {
            reg: '^#(npc|NPC)列表$',
            fnc: 'npc_list',
          },
          {
            reg: '^#往期活动$',
            fnc: 'old_envent',
          },
          {
            reg: '^#光环一览$',
            fnc: 'halo_list',
          },
          {
            reg: '^#学生社团分布图$',
            fnc: 'all_student',
          },
          {
            reg: '^#更新学生列表$',
            fnc: 'uplist',
          },
          {
            reg: ba + '查询',
            fnc: 'search',
          }
        ]
      })
      this.path = `${_path}/plugins/BlueArchive-plugin/resources/extraResources/list/`
      this.filePath = `file:///` + this.path
    }

    async student_list(e) {
      return await new StudentList(e).student_list()
    }

    async npc_list (e){   
      const path = this.filePath + `npc_list.png`
      if (!fs.existsSync(path)) {
        return await e.reply('请先发送 #ba更新资源')
      }
      await e.reply([segment.image(path)])
      return true
    }

    async old_envent (e){
      const path = this.filePath + `old_envent.png`
      if (!fs.existsSync(path)) {
        return await e.reply('请先发送 #ba更新资源')
      }
      await e.reply([segment.image(path)])
      return true
    }

    async halo_list (e){  
      const paths = [
        this.filePath + `halo_11.png`,
        this.filePath + `halo_12.png`,
        this.filePath + `halo_2.png`,
        this.filePath + `halo_3.png`,
      ]
      let msg = ["图片有点大哦"]

      for (let path of paths) {
        if (!fs.existsSync(path)) {
          return await e.reply('请先发送 #ba更新资源')
        }
        msg.push(segment.image(path))
      }

       await e.reply(msg)
       return true
    }

    async all_student (e){ 
      const path = this.filePath + `all_student.jpg`
      if (!fs.existsSync(path)) {
        return await e.reply('请先发送 #ba更新资源')
      }
      await e.reply([segment.image(path)])
      return true 
    }

    async uplist (e){ 
      try {
        let api = new Api()
        let cn = await api.getdata('students', { lang: 'cn' })
        let jp = await api.getdata('students', { lang: 'jp' })
        let en = await api.getdata('students', { lang: 'en' })
        let role = Cfg.getdefSet('role')
  
        for (let i = 0, len = cn.length; i < len; i++) {
          let cnType = this.toType(cn[i].Name)
          let jpType = this.toType(jp[i].Name)
          let enType = this.toType(en[i].Name)
          let arr = []
  
          if (cnType) {
            arr = [
              cn[i].FamilyName + cn[i].PersonalName + cnType, 
              cn[i].PersonalName + cnType,
              cnType.match(/\((.*)\)/)[1] + cn[i].PersonalName,
              jp[i].FamilyName + jp[i].PersonalName + jpType, 
              jp[i].PersonalName + jpType,
              jpType.match(/\((.*)\)/)[1] + jp[i].PersonalName,
              en[i].FamilyName + en[i].PersonalName + enType, 
              en[i].PersonalName + enType
            ]
          } else {
            arr = [
              cn[i].FamilyName + cn[i].PersonalName, 
              cn[i].PersonalName,
              jp[i].FamilyName + jp[i].PersonalName, 
              jp[i].PersonalName,
              en[i].FamilyName + en[i].PersonalName, 
              en[i].PersonalName
            ]
          }
  
          role[cn[i].Id] = [...new Set([...(role[cn[i].Id] || []), ...arr])]
        }

        Cfg.saveSet('role', role, 'defSet')

        await e.reply('更新完成')
      } catch(err) {
        logger.error(err)
      }
      return true
    }

    toType(name) {
      let matchResult = /（.*）|\(.*\)/.exec(name)
      let type = matchResult ? matchResult[0] : ''
      return type.replace(/（/g, '\(').replace(/）/g, '\)')
    }

    async search(e) {
      let key = e.msg.replace(/#|ba|BA|Ba|查询/g, '').trim()
      let list = Cfg.search(key, true)
      if (list.length == 0) {
        await e.reply('未查询到角色')
        return true
      }
      let msg = '您是否在找：\n' + list.join('\n') + '\n\n发送序号以查询角色攻略'
      await e.reply(msg)
      this.setContext('select')
      return true
    }

    async select() {
      let key = this.e.msg.trim()
      logger.debug('key', key)
      let name = searchList[key]
      if (!name) return false
      let str = await Strategy.init(this.e, name)
      if (str) {
        this.e.reply(await str.getImg())
      }
      this.finish('select')
      return true
    }
}    