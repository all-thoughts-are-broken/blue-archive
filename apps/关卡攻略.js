import plugin from '../../../lib/plugins/plugin.js'
const _path=process.cwd()

export class example extends plugin {
    constructor () {
      super({
        name: '学生攻略',
        dsc: '查看攻略',
        event: 'message',
        priority: 50,
        rule: [
          {
            reg: '^#1-1$',
            fnc: 'pic1n1'
          },
          {
            reg: '^#1-2',
            fnc: 'pic1n2'
          },
          {
            reg: '^#1-3',
            fnc: 'pic1n3'
          },
          {
            reg: '^#1-4',
            fnc: 'pic1n4'
          },
          {
            reg: '^#1-5',
            fnc: 'pic1n5'      
          },
          {
            reg: '^#1-1H',
            fnc: 'pic1h1'           
          },
          {
            reg: '^#1-2H',
            fnc: 'pic1h2'     
          },
          {
            reg: '^#1-3H',
            fnc: 'pic1h3'
         },
         {
            reg: '^#2-1',
            fnc: 'pic2n1'


          }
       ]
    })
}



async pic1n1(e){
    let msg = ["1-1",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-1/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-1/2.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-1/3.png`)
              ];
    e.reply(msg)          
    return true
}
async pic1n2(e){
    let msg = ["1-2",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-2/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-2/2.png`)
               
              ];
    e.reply(msg)          
    return true
}
async pic1n3(e){
    let msg = ["1-3",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-3/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-3/2.png`)
               
              ];
    e.reply(msg)          
    return true
}
async pic1n4(e){
    let msg = ["1-4",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-4/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-4/2.png`)
               
              ];
    e.reply(msg)          
    return true
}
async pic1n5(e){
    let msg = ["1-5",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-5/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-5/2.png`)
              
              ];
    e.reply(msg)          
    return true
}
async pic1h1(e){
    let msg = ["1-1H",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-1H/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-1H/2.png`)
               
              ];
    e.reply(msg)          
    return true
}
async pic1h2(e){
    let msg = ["1-3H",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-2H/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-2H/2.png`)
               
              ];
    e.reply(msg)          
    return true
}
async pic1h3(e){
    let msg = ["1-3H",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-3H/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-3H/2.png`)
              
              ];
    e.reply(msg)          
    return true
}
async pic2n1(e){
    let msg = ["2-1",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-1/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-2/2.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-3/3.png`)
              ];
    e.reply(msg)          
    return true
}





}




