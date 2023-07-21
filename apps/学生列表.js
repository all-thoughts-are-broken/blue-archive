import plugin from '../../../lib/plugins/plugin.js'
const _path=process.cwd()
export class example extends plugin {
    constructor() {
      super({
        name: '学生列表',
        dsc: 'emmm......',
        event: 'message',
        priority: 5000,
        rule: [
          {
            reg: '^#学生列表$',
            fnc: 'student_list',
          },
          {
            reg: '^#(npc|NPC)列表$',
            fnc: 'npc_list',
          },
          {
            reg: '^#往期活动$',
            fnc: 'old_envent',
          }  
        ],
      });
    }
    async student_list (e){   
        let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/list/student_list.png`)]
         await e.reply(msg)
         return true
    }
    async npc_list (e){   
      let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/list/npc_list.png`)]
       await e.reply(msg)
       return true
  }
  async old_envent (e){   
    let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/list/old_envent.png`)]
     await e.reply(msg)
     return true
}
}    