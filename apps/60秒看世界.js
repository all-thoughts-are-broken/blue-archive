import plugin from '../../../lib/plugins/plugin.js'

export class example extends plugin {
    constructor() {
      super({
        name: '60秒看世界',
        dsc: 'emmm......',
        event: 'message',
        priority: 5000,
        rule: [
          {
            reg: '^#60秒看世界$',
            fnc: 'kanshijie',
          },
        ],
      });
    }
    async kanshijie (e){
        let url = 'http://lxapi.xn--eet944d.site/API/60s.php'
        
        let msg = [segment.image(url)]
         await e.reply(msg)
         return true
    }
}    