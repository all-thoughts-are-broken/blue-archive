import plugin from '../../../lib/plugins/plugin.js'
const _path=process.cwd()
export class example extends plugin {
    constructor() {
      super({
        name: 'wiki',
        dsc: 'emmm......',
        event: 'message',
        priority: 5000,
        rule: [
        {
          reg: '^#wiki日奈$',
          fnc: 'pic1',
        },
        {
          reg: '^#wiki(水|泳装)日奈$',
          fnc: 'pic2',
        },
        {
          reg: '^#wiki亚子$',
          fnc: 'npic3',
        },
        {
          reg: '^#wiki伊织$',
          fnc: 'pic4',
        },
        {
          reg: '^#wiki(水|泳装)伊织$',
          fnc: 'pic5',
        },
        {
          reg: '^#wiki千夏$',
          fnc: 'pic6',
        },
        {
          reg: '^#wiki(温|温泉)千夏$',
          fnc: 'pic7',
        },
        {
          reg: '^#wiki(168|伊吕波)$',
          fnc: 'pic8',



          }  
        ],
      });
    }
      async pic1 (e){   
        let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/ba.wiki/1.png`)]
         await e.reply(msg)
         return true
      }
     async pic2 (e){   
       let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/ba.wiki/2.png`)]
       await e.reply(msg)
       return true
      }
      async pic3 (e){   
        let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/ba.wiki/3.png`)]
        await e.reply(msg)
        return true
      }
      async pic4 (e){   
        let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/ba.wiki/4.png`)]
        await e.reply(msg)
        return true
      }
      async pic5 (e){   
        let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/ba.wiki/5.png`)]
        await e.reply(msg)
        return true
      }
      async pic6 (e){   
        let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/ba.wiki/6.png`)]
        await e.reply(msg)
        return true
      }
      async pic7 (e){   
        let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/ba.wiki/7.png`)]
        await e.reply(msg)
        return true
      }
      async pic8 (e){   
        let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/ba.wiki/8.png`)]
        await e.reply(msg)
        return true
      }






}    