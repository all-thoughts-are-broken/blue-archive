import cfg, { _path } from '../model/Cfg.js'
import Api from '../model/api.js'
import fs from 'fs'

//先这么写着 有空再改
export class student_list extends plugin {
    constructor() {
      super({
        name: '学生列表',
        dsc: 'emmm......',
        event: 'message',
        priority: 5000,
        rule: [
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
        ]
      })
      this.path = `file:///${_path}/plugins/BlueArchive-plugin/resources/extraResources/list/`
      this.filePath = `file:///` + this.path
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
        let role = cfg.getdefSet('role')
  
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

        cfg.saveSet('role', role, 'defSet')

        e.reply('更新完成')
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
}    