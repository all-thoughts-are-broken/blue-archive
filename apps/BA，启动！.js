import plugin from '../../../lib/plugins/plugin.js'
const _path = process.cwd();

export class example extends plugin {
    constructor() {
        super({
            name:"BA，启动！.js",
            dsc:"如名字所说",
            envent: "message",
            priority: 7000,
            rule: [
                {
                    reg: '^(BA|Ba|档案)(?:档案)?，启动！?$',
                    
                    fnc:'BlueArchive'
                                    
                }
            ]
        })
    }
     async BlueArchive(e){
        
                let msg = [segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/BA.jpg`)]
            await e.reply(msg)
            return true
     }     
    }     