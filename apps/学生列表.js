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
            fnc: 'liebiao',
          },
        ],
      });
    }
    async liebiao (e){   
        let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/学生列表.png`)]
         await e.reply(msg)
         return true
    }
}    