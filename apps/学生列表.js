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
          }  
        ],
      });
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
    async halo_list (e){   
      let msg = ["图片有点大哦",
      segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/list/halo_11.png`),
      segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/list/halo_12.png`),
      segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/list/halo_2.png`),
      segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/list/halo_3.png`)
    ]
       await e.reply(msg)
       return true
    }
    async all_student (e){   
      let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/list/all_student.jpg`)]
       await e.reply(msg)
       return true
    }
}    