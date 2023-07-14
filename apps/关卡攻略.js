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
          },
          {
            reg: '^#2-2',
            fnc: 'pic2n2'
          },
          {
            reg: '^#2-3',
            fnc: 'pic2n3'
          },
          {
            reg: '^#2-4',
            fnc: 'pic2n4'
          },
          {
            reg: '^#2-5',
            fnc: 'pic2n5'      
          },
          {
            reg: '^#2-1H',
            fnc: 'pic2h1'           
          },
          {
            reg: '^#2-2H',
            fnc: 'pic2h2'     
          },
          {
            reg: '^#2-3H',
            fnc: 'pic2h3'
          },
          {
            reg: '^#3-1',
            fnc: 'pic3n1'
          },
          {
            reg: '^#3-2',
            fnc: 'pic3n2'
          },
          {
            reg: '^#3-3',
            fnc: 'pic3n3'
          },
          {
            reg: '^#3-4',
            fnc: 'pic3n4'
          },
          {
            reg: '^#3-5',
            fnc: 'pic3n5'      
          },
          {
            reg: '^#3-1H',
            fnc: 'pic3h1'           
          },
          {
            reg: '^#3-2H',
            fnc: 'pic3h2'     
          },
          {
            reg: '^#3-3H',
            fnc: 'pic3h3'
          },
          {
            reg: '^#4-1',
            fnc: 'pic4n1'
          },
          {
            reg: '^#4-2',
            fnc: 'pic4n2'
          },
          {
            reg: '^#4-3',
            fnc: 'pic4n3'
          },
          {
            reg: '^#4-4',
            fnc: 'pic4n4'
          },
          {
            reg: '^#4-5',
            fnc: 'pic4n5'      
          },
          {
            reg: '^#4-1H',
            fnc: 'pic4h1'           
          },
          {
            reg: '^#4-2H',
            fnc: 'pic4h2'     
          },
          {
            reg: '^#4-3H',
            fnc: 'pic4h3'
          },
          {
            reg: '^#5-1',
            fnc: 'pic5n1'
          },
          {
            reg: '^#5-2',
            fnc: 'pic5n2'
          },
          {
            reg: '^#5-3',
            fnc: 'pic5n3'
          },
          {
            reg: '^#5-4',
            fnc: 'pic5n4'
          },
          {
            reg: '^#5-5',
            fnc: 'pic5n5'      
          },
          {
            reg: '^#5-1H',
            fnc: 'pic5h1'           
          },
          {
            reg: '^#5-2H',
            fnc: 'pic5h2'     
          },
          {
            reg: '^#5-3H',
            fnc: 'pic5h3'
          },
          {
            reg: '^#6-1',
            fnc: 'pic6n1'
          },
          {
            reg: '^#6-2',
            fnc: 'pic6n2'
          },
          {
            reg: '^#6-3',
            fnc: 'pic6n3'
          },
          {
            reg: '^#6-4',
            fnc: 'pic6n4'
          },
          {
            reg: '^#6-5',
            fnc: 'pic6n5'      
          },
          {
            reg: '^#6-1H',
            fnc: 'pic6h1'           
          },
          {
            reg: '^#6-2H',
            fnc: 'pic6h2'     
          },
          {
            reg: '^#6-3H',
            fnc: 'pic6h3'
          },
          {
            reg: '^#7-1',
            fnc: 'pic7n1'
          },
          {
            reg: '^#7-2',
            fnc: 'pic7n2'
          },
          {
            reg: '^#7-3',
            fnc: 'pic7n3'
          },
          {
            reg: '^#7-4',
            fnc: 'pic7n4'
          },
          {
            reg: '^#7-5',
            fnc: 'pic7n5'      
          },
          {
            reg: '^#7-1H',
            fnc: 'pic7h1'           
          },
          {
            reg: '^#7-2H',
            fnc: 'pic7h2'     
          },
          {
            reg: '^#7-3H',
            fnc: 'pic7h3'
          },
          {
            reg: '^#8-1',
            fnc: 'pic8n1'
          },
          {
            reg: '^#8-2',
            fnc: 'pic8n2'
          },
          {
            reg: '^#8-3',
            fnc: 'pic8n3'
          },
          {
            reg: '^#8-4',
            fnc: 'pic8n4'
          },
          {
            reg: '^#8-5',
            fnc: 'pic8n5'      
          },
          {
            reg: '^#8-1H',
            fnc: 'pic8h1'           
          },
          {
            reg: '^#8-2H',
            fnc: 'pic8h2'     
          },
          {
            reg: '^#8-3H',
            fnc: 'pic8h3'
          },
          {
            reg: '^#9-1',
            fnc: 'pic9n1'
          },
          {
            reg: '^#9-2',
            fnc: 'pic9n2'
          },
          {
            reg: '^#9-3',
            fnc: 'pic9n3'
          },
          {
            reg: '^#9-4',
            fnc: 'pic9n4'
          },
          {
            reg: '^#9-5',
            fnc: 'pic9n5'      
          },
          {
            reg: '^#9-1H',
            fnc: 'pic9h1'           
          },
          {
            reg: '^#9-2H',
            fnc: 'pic9h2'     
          },
          {
            reg: '^#9-3H',
            fnc: 'pic9h3'
          },
          {
            reg: '^#10-1',
            fnc: 'pic10n1'
          },
          {
            reg: '^#10-2',
            fnc: 'pic10n2'
          },
          {
            reg: '^#10-3',
            fnc: 'pic10n3'
          },
          {
            reg: '^#10-4',
            fnc: 'pic10n4'
          },
          {
            reg: '^#10-5',
            fnc: 'pic10n5'      
          },
          {
            reg: '^#10-1H',
            fnc: 'pic10h1'           
          },
          {
            reg: '^#10-2H',
            fnc: 'pic10h2'     
          },
          {
            reg: '^#10-3H',
            fnc: 'pic10h3'
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
           segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/4章/4-3H/2.png`)
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
async pic2n1(e){
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


}




