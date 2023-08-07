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
            reg: '^#1-2$',
            fnc: 'pic1n2'
          },
          {
            reg: '^#1-3$',
            fnc: 'pic1n3'
          },
          {
            reg: '^#1-4$',
            fnc: 'pic1n4'
          },
          {
            reg: '^#1-5$',
            fnc: 'pic1n5'      
          },
          {
            reg: '^#1-1H$',
            fnc: 'pic1h1'           
          },
          {
            reg: '^#1-2H$',
            fnc: 'pic1h2'     
          },
          {
            reg: '^#1-3H$',
            fnc: 'pic1h3'
          },
          {
            reg: '^#2-1$',
            fnc: 'pic2n1'
          },
          {
            reg: '^#2-2$',
            fnc: 'pic2n2'
          },
          {
            reg: '^#2-3$',
            fnc: 'pic2n3'
          },
          {
            reg: '^#2-4$',
            fnc: 'pic2n4'
          },
          {
            reg: '^#2-5$',
            fnc: 'pic2n5'      
          },
          {
            reg: '^#2-1H$',
            fnc: 'pic2h1'           
          },
          {
            reg: '^#2-2H$',
            fnc: 'pic2h2'     
          },
          {
            reg: '^#2-3H$',
            fnc: 'pic2h3'
          },
          {
            reg: '^#3-1$',
            fnc: 'pic3n1'
          },
          {
            reg: '^#3-2$',
            fnc: 'pic3n2'
          },
          {
            reg: '^#3-3$',
            fnc: 'pic3n3'
          },
          {
            reg: '^#3-4$',
            fnc: 'pic3n4'
          },
          {
            reg: '^#3-5$',
            fnc: 'pic3n5'      
          },
          {
            reg: '^#3-1H$',
            fnc: 'pic3h1'           
          },
          {
            reg: '^#3-2H$',
            fnc: 'pic3h2'     
          },
          {
            reg: '^#3-3H$',
            fnc: 'pic3h3'
          },
          {
            reg: '^#4-1$',
            fnc: 'pic4n1'
          },
          {
            reg: '^#4-2$',
            fnc: 'pic4n2'
          },
          {
            reg: '^#4-3$',
            fnc: 'pic4n3'
          },
          {
            reg: '^#4-4$',
            fnc: 'pic4n4'
          },
          {
            reg: '^#4-5$',
            fnc: 'pic4n5'      
          },
          {
            reg: '^#4-1H$',
            fnc: 'pic4h1'           
          },
          {
            reg: '^#4-2H$',
            fnc: 'pic4h2'     
          },
          {
            reg: '^#4-3H$',
            fnc: 'pic4h3'
          },
          {
            reg: '^#5-1$',
            fnc: 'pic5n1'
          },
          {
            reg: '^#5-2$',
            fnc: 'pic5n2'
          },
          {
            reg: '^#5-3$',
            fnc: 'pic5n3'
          },
          {
            reg: '^#5-4$',
            fnc: 'pic5n4'
          },
          {
            reg: '^#5-5$',
            fnc: 'pic5n5'      
          },
          {
            reg: '^#5-1H$',
            fnc: 'pic5h1'           
          },
          {
            reg: '^#5-2H$',
            fnc: 'pic5h2'     
          },
          {
            reg: '^#5-3H$',
            fnc: 'pic5h3'
          },
          {
            reg: '^#6-1$',
            fnc: 'pic6n1'
          },
          {
            reg: '^#6-2$',
            fnc: 'pic6n2'
          },
          {
            reg: '^#6-3$',
            fnc: 'pic6n3'
          },
          {
            reg: '^#6-4$',
            fnc: 'pic6n4'
          },
          {
            reg: '^#6-5$',
            fnc: 'pic6n5'      
          },
          {
            reg: '^#6-1H$',
            fnc: 'pic6h1'           
          },
          {
            reg: '^#6-2H$',
            fnc: 'pic6h2'     
          },
          {
            reg: '^#6-3H$',
            fnc: 'pic6h3'
          },
          {
            reg: '^#7-1$',
            fnc: 'pic7n1'
          },
          {
            reg: '^#7-2$',
            fnc: 'pic7n2'
          },
          {
            reg: '^#7-3$',
            fnc: 'pic7n3'
          },
          {
            reg: '^#7-4$',
            fnc: 'pic7n4'
          },
          {
            reg: '^#7-5$',
            fnc: 'pic7n5'      
          },
          {
            reg: '^#7-1H$',
            fnc: 'pic7h1'           
          },
          {
            reg: '^#7-2H$',
            fnc: 'pic7h2'     
          },
          {
            reg: '^#7-3H$',
            fnc: 'pic7h3'
          },
          {
            reg: '^#8-1$',
            fnc: 'pic8n1'
          },
          {
            reg: '^#8-2$',
            fnc: 'pic8n2'
          },
          {
            reg: '^#8-3$',
            fnc: 'pic8n3'
          },
          {
            reg: '^#8-4$',
            fnc: 'pic8n4'
          },
          {
            reg: '^#8-5$',
            fnc: 'pic8n5'      
          },
          {
            reg: '^#8-1H$',
            fnc: 'pic8h1'           
          },
          {
            reg: '^#8-2H$',
            fnc: 'pic8h2'     
          },
          {
            reg: '^#8-3H$',
            fnc: 'pic8h3'
          },
          {
            reg: '^#9-1$',
            fnc: 'pic9n1'
          },
          {
            reg: '^#9-2$',
            fnc: 'pic9n2'
          },
          {
            reg: '^#9-3$',
            fnc: 'pic9n3'
          },
          {
            reg: '^#9-4$',
            fnc: 'pic9n4'
          },
          {
            reg: '^#9-5$',
            fnc: 'pic9n5'      
          },
          {
            reg: '^#9-1H$',
            fnc: 'pic9h1'           
          },
          {
            reg: '^#9-2H$',
            fnc: 'pic9h2'     
          },
          {
            reg: '^#9-3H$',
            fnc: 'pic9h3'
          },
          {
            reg: '^#10-1$',
            fnc: 'pic10n1'
          },
          {
            reg: '^#10-2$',
            fnc: 'pic10n2'
          },
          {
            reg: '^#10-3$',
            fnc: 'pic10n3'
          },
          {
            reg: '^#10-4$',
            fnc: 'pic10n4'
          },
          {
            reg: '^#10-5$',
            fnc: 'pic10n5'      
          },
          {
            reg: '^#10-1H$',
            fnc: 'pic10h1'           
          },
          {
            reg: '^#10-2H$',
            fnc: 'pic10h2'     
          },
          {
            reg: '^#10-3H$',
            fnc: 'pic10h3'
          },
          {
            reg: '^#11-1$',
            fnc: 'pic11n1'
          },
          {
            reg: '^#11-2$',
            fnc: 'pic11n2'
          },
          {
            reg: '^#11-3$',
            fnc: 'pic11n3'
          },
          {
            reg: '^#11-4$',
            fnc: 'pic11n4'
          },
          {
            reg: '^#11-5$',
            fnc: 'pic11n5'      
          },
          {
            reg: '^#11-1H$',
            fnc: 'pic11h1'           
          },
          {
            reg: '^#11-2H$',
            fnc: 'pic11h2'     
          },
          {
            reg: '^#11-3H$',
            fnc: 'pic11h3'
          },
          {
            reg: '^#12-1$',
            fnc: 'pic12n1'
          },
          {
            reg: '^#12-2$',
            fnc: 'pic12n2'
          },
          {
            reg: '^#12-3$',
            fnc: 'pic12n3'
          },
          {
            reg: '^#12-4$',
            fnc: 'pic12n4'
          },
          {
            reg: '^#12-5$',
            fnc: 'pic12n5'      
          },
          {
            reg: '^#12-1H$',
            fnc: 'pic12h1'           
          },
          {
            reg: '^#12-2H$',
            fnc: 'pic12h2'     
          },
          {
            reg: '^#12-3H$',
            fnc: 'pic12h3'
          },
          {
            reg: '^#13-1$',
            fnc: 'pic13n1'
          },
          {
            reg: '^#13-2$',
            fnc: 'pic13n2'
          },
          {
            reg: '^#13-3$',
            fnc: 'pic13n3'
          },
          {
            reg: '^#13-4$',
            fnc: 'pic13n4'
          },
          {
            reg: '^#13-5$',
            fnc: 'pic13n5'      
          },
          {
            reg: '^#13-1H$',
            fnc: 'pic13h1'           
          },
          {
            reg: '^#13-2H$',
            fnc: 'pic13h2'     
          },
          {
            reg: '^#13-3H$',
            fnc: 'pic13h3'
          },
          {
            reg: '^#14-1$',
            fnc: 'pic14n1'
          },
          {
            reg: '^#14-2$',
            fnc: 'pic14n2'
          },
          {
            reg: '^#14-3$',
            fnc: 'pic14n3'
          },
          {
            reg: '^#14-4$',
            fnc: 'pic14n4'
          },
          {
            reg: '^#14-5$',
            fnc: 'pic14n5'      
          },
          {
            reg: '^#14-1H$',
            fnc: 'pic14h1'           
          },
          {
            reg: '^#14-2H$',
            fnc: 'pic14h2'     
          },
          {
            reg: '^#14-3H$',
            fnc: 'pic14h3'
          },
          {
            reg: '^#15-1$',
            fnc: 'pic15n1'
          },
          {
            reg: '^#15-2$',
            fnc: 'pic15n2'
          },
          {
            reg: '^#15-3$',
            fnc: 'pic15n3'
          },
          {
            reg: '^#15-4$',
            fnc: 'pic15n4'
          },
          {
            reg: '^#15-5$',
            fnc: 'pic15n5'      
          },
          {
            reg: '^#15-1H$',
            fnc: 'pic15h1'           
          },
          {
            reg: '^#15-2H$',
            fnc: 'pic15h2'     
          },
          {
            reg: '^#15-3H$',
            fnc: 'pic15h3'
          },
          {
            reg: '^#16-1$',
            fnc: 'pic16n1'
          },
          {
            reg: '^#16-2$',
            fnc: 'pic16n2'
          },
          {
            reg: '^#16-3$',
            fnc: 'pic16n3'
          },
          {
            reg: '^#16-4$',
            fnc: 'pic16n4'
          },
          {
            reg: '^#16-5$',
            fnc: 'pic16n5'      
          },
          {
            reg: '^#16-1H$',
            fnc: 'pic16h1'           
          },
          {
            reg: '^#16-2H$',
            fnc: 'pic16h2'     
          },
          {
            reg: '^#16-3H$',
            fnc: 'pic16h3'
          },
          {
            reg: '^#17-1$',
            fnc: 'pic17n1'
          },
          {
            reg: '^#17-2$',
            fnc: 'pic17n2'
          },
          {
            reg: '^#17-3$',
            fnc: 'pic17n3'
          },
          {
            reg: '^#17-4$',
            fnc: 'pic17n4'
          },
          {
            reg: '^#17-5$',
            fnc: 'pic17n5'      
          },
          {
            reg: '^#17-1H$',
            fnc: 'pic17h1'           
          },
          {
            reg: '^#17-2H$',
            fnc: 'pic17h2'     
          },
          {
            reg: '^#17-3H$',
            fnc: 'pic17h3'
          },
          {
            reg: '^#18-1$',
            fnc: 'pic18n1'
          },
          {
            reg: '^#18-2$',
            fnc: 'pic18n2'
          },
          {
            reg: '^#18-3$',
            fnc: 'pic18n3'
          },
          {
            reg: '^#18-4$',
            fnc: 'pic18n4'
          },
          {
            reg: '^#18-5$',
            fnc: 'pic18n5'      
          },
          {
            reg: '^#18-1H$',
            fnc: 'pic18h1'           
          },
          {
            reg: '^#18-2H$',
            fnc: 'pic18h2'     
          },
          {
            reg: '^#18-3H$',
            fnc: 'pic18h3'
          },
          {
            reg: '^#19-1$',
            fnc: 'pic19n1'
          },
          {
            reg: '^#19-2$',
            fnc: 'pic19n2'
          },
          {
            reg: '^#19-3$',
            fnc: 'pic19n3'
          },
          {
            reg: '^#19-4$',
            fnc: 'pic19n4'
          },
          {
            reg: '^#19-5$',
            fnc: 'pic19n5'      
          },
          {
            reg: '^#19-1H$',
            fnc: 'pic19h1'           
          },
          {
            reg: '^#19-2H$',
            fnc: 'pic19h2'     
          },
          {
            reg: '^#19-3H$',
            fnc: 'pic19h3'
          },
          {
            reg: '^#20-1$',
            fnc: 'pic20n1'
          },
          {
            reg: '^#20-2$',
            fnc: 'pic20n2'
          },
          {
            reg: '^#20-3$',
            fnc: 'pic20n3'
          },
          {
            reg: '^#20-4$',
            fnc: 'pic20n4'
          },
          {
            reg: '^#20-5$',
            fnc: 'pic20n5'      
          },
          {
            reg: '^#20-1H$',
            fnc: 'pic20h1'           
          },
          {
            reg: '^#20-2H$',
            fnc: 'pic20h2'     
          },
          {
            reg: '^#20-3H$',
            fnc: 'pic20h3'
          },
          {
            reg: '^#21-1$',
            fnc: 'pic21n1'
          },
          {
            reg: '^#21-2$',
            fnc: 'pic21n2'
          },
          {
            reg: '^#21-3$',
            fnc: 'pic21n3'
          },
          {
            reg: '^#21-4$',
            fnc: 'pic21n4'
          },
          {
            reg: '^#21-5$',
            fnc: 'pic21n5'      
          },
          {
            reg: '^#21-1H$',
            fnc: 'pic21h1'           
          },
          {
            reg: '^#21-2H$',
            fnc: 'pic21h2'     
          },
          {
            reg: '^#21-3H$',
            fnc: 'pic21h3'
          },
          {
            reg: '^#22-1$',
            fnc: 'pic22n1'
          },
          {
            reg: '^#22-2$',
            fnc: 'pic22n2'
          },
          {
            reg: '^#22-3$',
            fnc: 'pic22n3'
          },
          {
            reg: '^#22-4$',
            fnc: 'pic22n4'
          },
          {
            reg: '^#22-5$',
            fnc: 'pic22n5'      
          },
          {
            reg: '^#22-1H$',
            fnc: 'pic22h1'           
          },
          {
            reg: '^#22-2H$',
            fnc: 'pic22h2'     
          },
          {
            reg: '^#22-3H$',
            fnc: 'pic22h3'
          },
          {
            reg: '^#23-1$',
            fnc: 'pic23n1'
          },
          {
            reg: '^#23-2$',
            fnc: 'pic23n2'
          },
          {
            reg: '^#23-3$',
            fnc: 'pic23n3'
          },
          {
            reg: '^#23-4$',
            fnc: 'pic23n4'
          },
          {
            reg: '^#23-5$',
            fnc: 'pic23n5'      
          },
          {
            reg: '^#23-1H$',
            fnc: 'pic23h1'           
          },
          {
            reg: '^#23-2H$',
            fnc: 'pic23h2'     
          },
          {
            reg: '^#23-3H$',
            fnc: 'pic23h3'
          }
       ]
    })
}



async pic1n1(e){
    let msg = ["1-1",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-1/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/1章/1-1/2.png`)
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
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-1/2.png`)
              ];
    e.reply(msg)          
    return true
}
async pic2n2(e){
  let msg = ["2-2",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-2/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-2/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic2n3(e){
  let msg = ["2-3",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-3/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-3/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic2n4(e){
  let msg = ["2-4",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-4/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-4/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic2n5(e){
  let msg = ["2-5",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-5/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-5/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic2h1(e){
  let msg = ["2-1H",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-1H/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-1H/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic2h2(e){
  let msg = ["2-2H",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-2H/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-2H/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic2h3(e){
  let msg = ["2-3H",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-3H/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/2章/2-3H/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic3n1(e){
  let msg = ["3-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-1/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic3n2(e){
let msg = ["3-2",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-2/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-2/2.png`)
          ];
e.reply(msg)          
return true
}
async pic3n3(e){
let msg = ["3-3",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-3/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-3/2.png`)
          ];
e.reply(msg)          
return true
}
async pic3n4(e){
let msg = ["3-4",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-4/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-4/2.png`)
          ];
e.reply(msg)          
return true
}
async pic3n5(e){
let msg = ["3-5",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-5/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-5/2.png`)
          ];
e.reply(msg)          
return true
}
async pic3h1(e){
let msg = ["3-1H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-1H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-1H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic3h2(e){
let msg = ["3-2H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-2H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-2H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic3h3(e){
let msg = ["3-3H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-3H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/3章/3-3H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic4n1(e){
  let msg = ["4-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-1/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic4n2(e){
let msg = ["4-2",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-2/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-2/2.png`)
          ];
e.reply(msg)          
return true
}
async pic4n3(e){
let msg = ["4-3",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-3/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-3/2.png`)
          ];
e.reply(msg)          
return true
}
async pic4n4(e){
let msg = ["4-4",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-4/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-4/2.png`)
          ];
e.reply(msg)          
return true
}
async pic4n5(e){
let msg = ["4-5",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-5/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-5/2.png`)
          ];
e.reply(msg)          
return true
}
async pic4h1(e){
let msg = ["4-1H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-1H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-1H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic4h2(e){
let msg = ["4-2H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-2H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-2H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic4h3(e){
let msg = ["4-3H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-3H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-3H/2.jpg`)
          ];
e.reply(msg)          
return true
}
async pic5n1(e){
  let msg = ["5-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-1/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic5n2(e){
let msg = ["5-2",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-2/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-2/2.png`)
          ];
e.reply(msg)          
return true
}
async pic5n3(e){
let msg = ["5-3",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-3/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-3/2.png`)
          ];
e.reply(msg)          
return true
}
async pic5n4(e){
let msg = ["5-4",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-4/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-4/2.png`)
          ];
e.reply(msg)          
return true
}
async pic5n5(e){
let msg = ["5-5",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-5/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-5/2.png`)
          ];
e.reply(msg)          
return true
}
async pic5h1(e){
let msg = ["5-1H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-1H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-1H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic5h2(e){
let msg = ["5-2H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-2H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-2H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic5h3(e){
let msg = ["5-3H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-3H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/5章/5-3H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic6n1(e){
  let msg = ["6-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-1/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic6n2(e){
let msg = ["6-2",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-2/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-2/2.png`)
          ];
e.reply(msg)          
return true
}
async pic6n3(e){
let msg = ["6-3",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-3/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-3/2.png`)
          ];
e.reply(msg)          
return true
}
async pic6n4(e){
let msg = ["6-4",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-4/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-4/2.png`)
          ];
e.reply(msg)          
return true
}
async pic6n5(e){
let msg = ["6-5",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-5/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-5/2.png`)
          ];
e.reply(msg)          
return true
}
async pic6h1(e){
let msg = ["6-1H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-1H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-1H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic6h2(e){
let msg = ["6-2H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-2H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-2H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic6h3(e){
let msg = ["6-3H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-3H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/6章/6-3H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic7n1(e){
  let msg = ["7-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-1/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic7n2(e){
let msg = ["7-2",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-2/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-2/2.png`)
          ];
e.reply(msg)          
return true
}
async pic7n3(e){
let msg = ["7-3",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-3/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-3/2.png`)
          ];
e.reply(msg)          
return true
}
async pic7n4(e){
let msg = ["7-4",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-4/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-4/2.png`)
          ];
e.reply(msg)          
return true
}
async pic7n5(e){
let msg = ["7-5",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-5/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-5/2.png`)
          ];
e.reply(msg)          
return true
}
async pic7h1(e){
let msg = ["7-1H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-1H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-1H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic7h2(e){
let msg = ["7-2H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-2H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-2H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic7h3(e){
let msg = ["7-3H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-3H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/7章/7-3H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic8n1(e){
  let msg = ["8-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-1/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic8n2(e){
let msg = ["8-2",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-2/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-2/2.png`)
          ];
e.reply(msg)          
return true
}
async pic8n3(e){
let msg = ["8-3",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-3/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-3/2.png`)
          ];
e.reply(msg)          
return true
}
async pic8n4(e){
let msg = ["8-4",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-4/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-4/2.png`)
          ];
e.reply(msg)          
return true
}
async pic8n5(e){
let msg = ["8-5",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-5/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-5/2.png`)
          ];
e.reply(msg)          
return true
}
async pic8h1(e){
let msg = ["8-1H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-1H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-1H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic8h2(e){
let msg = ["8-2H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-2H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-2H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic8h3(e){
let msg = ["8-3H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-3H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/8章/8-3H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic9n1(e){
  let msg = ["9-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-1/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic9n2(e){
let msg = ["9-2",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-2/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-2/2.png`)
          ];
e.reply(msg)          
return true
}
async pic9n3(e){
let msg = ["9-3",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-3/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-3/2.png`)
          ];
e.reply(msg)          
return true
}
async pic9n4(e){
let msg = ["9-4",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-4/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-4/2.png`)
          ];
e.reply(msg)          
return true
}
async pic9n5(e){
let msg = ["9-5",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-5/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-5/2.png`)
          ];
e.reply(msg)          
return true
}
async pic9h1(e){
let msg = ["9-1H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-1H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-1H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic9h2(e){
let msg = ["9-2H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-2H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-2H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic9h3(e){
let msg = ["9-3H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-3H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/9章/9-3H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic10n1(e){
  let msg = ["10-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-1/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic10n2(e){
let msg = ["10-2",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-2/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-2/2.png`)
          ];
e.reply(msg)          
return true
}
async pic10n3(e){
let msg = ["10-3",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-3/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-3/2.png`)
          ];
e.reply(msg)          
return true
}
async pic10n4(e){
let msg = ["10-4",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-4/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-4/2.png`)
          ];
e.reply(msg)          
return true
}
async pic10n5(e){
let msg = ["10-5",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-5/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-5/2.png`)
          ];
e.reply(msg)          
return true
}
async pic10h1(e){
let msg = ["10-1H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-1H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-1H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic10h2(e){
let msg = ["10-2H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-2H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-2H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic10h3(e){
let msg = ["10-3H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-3H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/10章/10-3H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic11n1(e){
  let msg = ["11-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-1/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic11n2(e){
  let msg = ["11-2",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-2/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-2/2.png`)
             
            ];
  e.reply(msg)          
  return true
}
async pic11n3(e){
  let msg = ["11-3",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-3/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-3/2.png`)
             
            ];
  e.reply(msg)          
  return true
}
async pic11n4(e){
  let msg = ["11-4",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-4/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-4/2.png`)
             
            ];
  e.reply(msg)          
  return true
}
async pic11n5(e){
  let msg = ["11-5",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-5/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-5/2.png`)
            
            ];
  e.reply(msg)          
  return true
}
async pic11h1(e){
  let msg = ["11-1H",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-1H/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-1H/2.png`)
             
            ];
  e.reply(msg)          
  return true
}
async pic11h2(e){
  let msg = ["11-3H",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-2H/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-2H/2.png`)
             
            ];
  e.reply(msg)          
  return true
}
async pic11h3(e){
  let msg = ["11-3H",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-3H/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/11章/11-3H/2.png`)
            
            ];
  e.reply(msg)          
  return true
}
async pic12n1(e){
  let msg = ["12-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-1/2.png`)
            ];
  e.reply(msg)          
  return true
}
async pic12n2(e){
let msg = ["12-2",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-2/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-2/2.png`)
          ];
e.reply(msg)          
return true
}
async pic12n3(e){
let msg = ["12-3",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-3/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-3/2.png`)
          ];
e.reply(msg)          
return true
}
async pic12n4(e){
let msg = ["12-4",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-4/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-4/2.png`)
          ];
e.reply(msg)          
return true
}
async pic12n5(e){
let msg = ["12-5",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-5/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-5/2.png`)
          ];
e.reply(msg)          
return true
}
async pic12h1(e){
let msg = ["12-1H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-1H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-1H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic12h2(e){
let msg = ["12-2H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-2H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-2H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic12h3(e){
let msg = ["12-3H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-3H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/12章/12-3H/2.png`)
          ];
e.reply(msg)          
return true
}
async pic13n1(e){
let msg = ["13-1",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-1/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-1/2.png`)
          ];
e.reply(msg)          
return true
}
async pic13n2(e){
let msg = ["13-2",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-2/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-2/2.png`)
        ];
e.reply(msg)          
return true
}
async pic13n3(e){
let msg = ["13-3",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-3/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-3/2.png`)
        ];
e.reply(msg)          
return true
}
async pic13n4(e){
let msg = ["13-4",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-4/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-4/2.png`)
        ];
e.reply(msg)          
return true
}
async pic13n5(e){
let msg = ["13-5",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-5/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-5/2.png`)
        ];
e.reply(msg)          
return true
}
async pic13h1(e){
let msg = ["13-1H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-1H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-1H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-1H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic13h2(e){
let msg = ["13-2H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-2H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-2H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-2H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic13h3(e){
let msg = ["13-3H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-3H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-3H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/13章/13-3H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic14n1(e){
let msg = ["14-1",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-1/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-1/2.png`)
          ];
e.reply(msg)          
return true
}
async pic14n2(e){
let msg = ["14-2",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-2/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-2/2.png`)
        ];
e.reply(msg)          
return true
}
async pic14n3(e){
let msg = ["14-3",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-3/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-3/2.png`)
        ];
e.reply(msg)          
return true
}
async pic14n4(e){
let msg = ["14-4",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-4/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-4/2.png`)
        ];
e.reply(msg)          
return true
}
async pic14n5(e){
let msg = ["14-5",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-5/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-5/2.png`)
        ];
e.reply(msg)          
return true
}
async pic14h1(e){
let msg = ["14-1H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/4-1H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/4-1H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-1H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic14h2(e){
let msg = ["14-2H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-2H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-2H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-3H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic14h3(e){
let msg = ["14-3H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-3H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-3H/2.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/14章/14-3H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic15n1(e){
let msg = ["15-1",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-1/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-1/2.png`)
          ];
e.reply(msg)          
return true
}
async pic15n2(e){
let msg = ["15-2",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-2/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-2/2.png`)
        ];
e.reply(msg)          
return true
}
async pic15n3(e){
let msg = ["15-3",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-3/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-3/2.png`)
        ];
e.reply(msg)          
return true
}
async pic15n4(e){
let msg = ["15-4",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-4/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-4/2.png`)
        ];
e.reply(msg)          
return true
}
async pic15n5(e){
let msg = ["15-5",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-5/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-5/2.png`)
        ];
e.reply(msg)          
return true
}
async pic15h1(e){
let msg = ["15-1H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-1H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-1H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/14-1H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic15h2(e){
let msg = ["15-2H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-2H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-2H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-2H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic15h3(e){
let msg = ["15-3H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-3H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-3H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/15章/15-3H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic16n1(e){
let msg = ["16-1",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-1/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-1/2.png`)
          ];
e.reply(msg)          
return true
}
async pic16n2(e){
let msg = ["16-2",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-2/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-2/2.png`)
        ];
e.reply(msg)          
return true
}
async pic16n3(e){
let msg = ["16-3",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-3/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-3/2.png`)
        ];
e.reply(msg)          
return true
}
async pic16n4(e){
let msg = ["16-4",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-4/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-4/2.png`)
        ];
e.reply(msg)          
return true
}
async pic16n5(e){
let msg = ["16-5",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-5/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-5/2.png`)
        ];
e.reply(msg)          
return true
}
async pic16h1(e){
let msg = ["16-1H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-1H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-1H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-1H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic16h2(e){
let msg = ["16-2H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-2H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-2H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-2H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic16h3(e){
let msg = ["16-3H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-3H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-3H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/16章/16-3H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic17n1(e){
let msg = ["17-1",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-1/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-1/2.png`)
          ];
e.reply(msg)          
return true
}
async pic17n2(e){
let msg = ["17-2",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-2/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-2/2.png`)
        ];
e.reply(msg)          
return true
}
async pic17n3(e){
let msg = ["17-3",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-3/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-3/2.png`)
        ];
e.reply(msg)          
return true
}
async pic17n4(e){
let msg = ["17-4",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-4/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-4/2.png`)
        ];
e.reply(msg)          
return true
}
async pic17n5(e){
let msg = ["17-5",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-5/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-5/2.png`)
        ];
e.reply(msg)          
return true
}
async pic17h1(e){
let msg = ["17-1H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-1H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-1H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-1H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic17h2(e){
let msg = ["17-2H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-2H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-2H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-2H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic17h3(e){
let msg = ["17-3H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-3H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-3H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/17章/17-3H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic18n1(e){
let msg = ["18-1",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-1/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-1/2.png`)
          ];
e.reply(msg)          
return true
}
async pic18n2(e){
let msg = ["18-2",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-2/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-2/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-2/3.png`)
        ];
e.reply(msg)          
return true
}
async pic18n3(e){
let msg = ["18-3",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-3/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-3/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-3/3.png`)
        ];
e.reply(msg)          
return true
}
async pic18n4(e){
let msg = ["18-4",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-4/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-4/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-4/3.png`)
        ];
e.reply(msg)          
return true
}
async pic18n5(e){
let msg = ["18-5",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-5/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-5/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-5/3.png`)
        ];
e.reply(msg)          
return true
}
async pic18h1(e){
let msg = ["18-1H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-1H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-1H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-1H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic18h2(e){
let msg = ["18-2H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-2H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-2H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-2H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic18h3(e){
let msg = ["18-3H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-3H/1.jpg`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-3H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/18章/18-3H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic19n1(e){
let msg = ["19-1",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-1/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-1/2.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-1/3.png`)
          ];
e.reply(msg)          
return true
}
async pic19n2(e){
let msg = ["19-2",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-2/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-2/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-2/3.png`)
        ];
e.reply(msg)          
return true
}
async pic19n3(e){
let msg = ["19-3",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-3/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-3/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-3/3.png`)
        ];
e.reply(msg)          
return true
}
async pic19n4(e){
let msg = ["19-4",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-4/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-4/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-4/3.png`)
        ];
e.reply(msg)          
return true
}
async pic19n5(e){
let msg = ["19-5",
          segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-5/1.png`),
          segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-5/2.png`),
          segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-5/3.png`)
        ];
e.reply(msg)          
return true
}
async pic19h1(e){
let msg = ["19-1H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-1H/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-1H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-1H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic19h2(e){
let msg = ["19-2H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-2H/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-2H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-2H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic19h3(e){
let msg = ["19-3H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-3H/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-3H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/19章/19-2H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic20n1(e){
let msg = ["20-1",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-1/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-1/2.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-1/3.png`)
          ];
e.reply(msg)          
return true
}
async pic20n2(e){
let msg = ["20-2",
          segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-2/1.png`),
          segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-2/2.png`),
          segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-2/3.png`)
        ];
e.reply(msg)          
return true
}
async pic20n3(e){
let msg = ["20-3",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-3/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-3/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-3/3.png`)
        ];
e.reply(msg)          
return true
}
async pic20n4(e){
let msg = ["20-4",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-4/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-4/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-4/3.png`)
        ];
e.reply(msg)          
return true
}
async pic20n5(e){
let msg = ["20-5",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-5/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-5/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-5/3.png`)
        ];
e.reply(msg)          
return true
}
async pic20h1(e){
let msg = ["20-1H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-1H/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-1H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-1H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic20h2(e){
let msg = ["20-2H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-2H/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-2H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-2H/3.png`)
        ];
e.reply(msg)          
return true
}
async pic20h3(e){
let msg = ["20-3H",
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-3H/1.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-3H/2.png`),
         segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/20章/20-3H/3.jpg`)
        ];
e.reply(msg)          
return true
}
async pic21n1(e){
  let msg = ["21-1",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-1/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-1/2.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-1/3.png`)
            ];
  e.reply(msg)          
  return true
  }
  async pic21n2(e){
  let msg = ["21-2",
            segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-2/1.png`),
            segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-2/2.png`),
            segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-2/3.png`)
          ];
  e.reply(msg)          
  return true
  }
  async pic21n3(e){
  let msg = ["21-3",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-3/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-3/2.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-3/3.png`)
          ];
  e.reply(msg)          
  return true
  }
  async pic21n4(e){
  let msg = ["21-4",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-4/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-4/2.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-4/3.png`)
          ];
  e.reply(msg)          
  return true
  }
  async pic21n5(e){
  let msg = ["21-5",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-5/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-5/2.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-5/3.png`)
          ];
  e.reply(msg)          
  return true
  }
  async pic21h1(e){
  let msg = ["21-1H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-1H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-1H/2.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-1H/3.png`)
          ];
  e.reply(msg)          
  return true
  }
  async pic21h2(e){
  let msg = ["21-2H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-2H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-2H/2.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-2H/3.png`)
          ];
  e.reply(msg)          
  return true
  }
  async pic21h3(e){
  let msg = ["21-3H",
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-3H/1.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-3H/2.png`),
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/21章/21-3H/3.png`)
          ];
  e.reply(msg)          
  return true
  }
  async pic22n1(e){
    let msg = ["22-1",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-1/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-1/2.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-1/3.png`)
              ];
    e.reply(msg)          
    return true
    }
    async pic22n2(e){
    let msg = ["22-2",
              segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-2/1.png`),
              segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-2/2.png`),
              segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-2/3.png`)
            ];
    e.reply(msg)          
    return true
    }
    async pic22n3(e){
    let msg = ["22-3",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-3/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-3/2.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-3/3.png`)
            ];
    e.reply(msg)          
    return true
    }
    async pic22n4(e){
    let msg = ["22-4",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-4/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-4/2.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-4/3.png`)
            ];
    e.reply(msg)          
    return true
    }
    async pic22n5(e){
    let msg = ["22-5",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-5/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-5/2.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-5/3.png`)
            ];
    e.reply(msg)          
    return true
    }
    async pic22h1(e){
    let msg = ["22-1H",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-1H/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-1H/2.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-1H/3.png`)
            ];
    e.reply(msg)          
    return true
    }
    async pic22h2(e){
    let msg = ["22-2H",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-2H/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-2H/2.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-2H/3.png`)
            ];
    e.reply(msg)          
    return true
    }
    async pic22h3(e){
    let msg = ["22-3H",
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-3H/1.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-3H/2.png`),
             segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/22章/22-3H/3.png`)
            ];
    e.reply(msg)          
    return true
    }
    async pic23n1(e){
      let msg = ["23-1",
                 segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-1/1.png`),
                 segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-1/2.png`)
                ];
      e.reply(msg)          
      return true
      }
      async pic23n2(e){
      let msg = ["23-2",
                segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-2/1.png`),
                segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-2/2.png`)
              ];
      e.reply(msg)          
      return true
      }
      async pic23n3(e){
      let msg = ["23-3",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-3/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-3/2.png`)
              ];
      e.reply(msg)          
      return true
      }
      async pic23n4(e){
      let msg = ["23-4",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-4/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-4/2.png`)
              ];
      e.reply(msg)          
      return true
      }
      async pic23n5(e){
      let msg = ["23-5",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-5/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-5/2.png`)
              ];
      e.reply(msg)          
      return true
      }
      async pic23h1(e){
      let msg = ["23-1H",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-1H/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-1H/2.png`)
              ];
      e.reply(msg)          
      return true
      }
      async pic23h2(e){
      let msg = ["23-2H",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-2H/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-2H/2.png`)
              ];
      e.reply(msg)          
      return true
      }
      async pic23h3(e){
      let msg = ["23-3H",
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-3H/1.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-3H/2.png`),
               segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/23章/23-3H/3.png`)
              ];
      e.reply(msg)          
      return true
      }


}




