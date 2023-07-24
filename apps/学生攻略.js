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
          reg: '^(#|档案)+(阿露|社长|愉悦姐)$',
          fnc: 'pic63'
        },
        {
          reg:'^(#|档案)+(艾米|拉链)$',
          fnc:'pic34'
        },
        {
          reg:'^(#|档案)+(晴奈|神秘狙)$',
          fnc:'pic64'
        },
        {
          reg:'^(#|档案)+(日富美|浮士德|悍匪头子)$',
          fnc:'pic97'
        },
        {
          reg:'^(#|档案)+(日奈|阳奈)$',
          fnc:'pic61'
        },
        {
          reg:'^(#|档案)+(星野|大叔)$',
          fnc:'pic155'
        },
        {
          reg:'^(#|档案)+(伊织|佐仓|佐三枪)$',
          fnc:'pic62'
        },
        {
          reg:'^(#|档案)+(真纪|涂鸦|真希)$',
          fnc:'pic28'
        },
        {
          reg:'^(#|档案)+(尼禄|暴躁姐)$',
          fnc:'pic31'
        },
        {  
          reg:'^(#|档案)+(泉|老八|汉堡妹)$',
          fnc:'pic104'
        },
        { 
          reg:'^(#|档案)+(白子|小仓唯)$',
          fnc:'pic127'
        },
        {
          reg:'^(#|档案)+(瞬|教官|梅花|山海狙|充电宝)$',
          fnc:'pic148'
        },
        {
          reg:'^(#|档案)+(堇|健身妹|运动妹|体委|运动部长)$',
          fnc:'pic38'
        },
        {
          reg:'^(#|档案)+(鹤城|颜艺姐|颜艺)$',
          fnc:'pic129'
        },
        {
          reg:'^(#|档案)+(泉奈|小狐狸|忍忍)$',
          fnc:'pic1'
        },
        {
          reg:'^(#|档案)+(爱丽丝)$',
          fnc:'pic154'
        },
        {
          reg:'^(#|档案)+(绿|小绿)$',
          fnc:'pic30'
        },
        {
          reg:'^(#|档案)+(切里诺|斯大萝|白胡子)$',
          fnc:'pic137'
        },
        {
          reg:'^(#|档案)+(柚子|柜子精)$',
          fnc:'pic36'
        },
        {
          reg:'^(#|档案)+(梓)$',
          fnc:'pic96'
        },
        {
          reg:'^(#|档案)+(小春|死刑|虾线)$',
          fnc:'pic125'
        },
        {
          reg:'^(#|档案)+(水梓)$',
          fnc:'pic116'
        },
        {
          reg:'^(#|档案)+(水日奈|泳装日奈)$',
          fnc:'pic53'
        },
        {
          reg:'^(#|档案)+(水伊织|泳装伊织|水佐三枪)$',
          fnc:'pic54'
        },
        {
          reg:'^(#|档案)+(单车白子)$',
          fnc:'pic128'
        },
        {
          reg:'^(#|档案)+(幼女瞬)$',
          fnc:'pic145'
        },
        {
          reg:'^(#|档案)+(兔女郎尼禄|兔尼禄)$',
          fnc:'pic21'
        },
        {
          reg:'^(#|档案)+(兔女郎花凛|兔花凛)$',
          fnc:'pic22'
        },
        {
          reg:'^(#|档案)+(兔女郎明日奈|兔女郎亚丝娜|兔明日奈|兔亚丝娜)$',
          fnc:'pic40'
        },
        {
          reg:'^(#|档案)+(夏|小夏)$',
          fnc:'pic91'
        },
        {
          reg:'^(#|档案)+(温泉千夏)$',
          fnc:'pic103'
        },
        {
          reg:'^(#|档案)+(正月阿露)$',
          fnc:'pic56'
        },
        {
          reg:'^(#|档案)+(正月睦月)$',
          fnc:'pic55'
        },
        {
          reg:'^(#|档案)+(若藻|大狐狸)$',
          fnc:'pic7'
        },
        {
          reg:'^(#|档案)+(三森)$',
          fnc:'pic11'
        },
        {
          reg:'^(#|档案)+(优|忧|羽)$',
          fnc:'pic89'
        },
        {
          reg:'^(#|档案)+(日向|大修女)$',
          fnc:'pic92'
        },
        {
          reg:'^(#|档案)+(玛丽娜|保洁阿姨|保洁)$',
          fnc:'pic138'
        },
        {
          reg:'^(#|档案)+(宫子)$',
          fnc:'pic124'
        },
        {
          reg:'^(#|档案)+(美游|小垃姬|垃姬兔)$',
          fnc:'pic123'
        },
        {
          reg:'^(#|档案)+(月咏|大忍|巨忍)$',
          fnc:'pic12'
        },
        {
          reg:'^(#|档案)+(美咲|毒刺)$',
          fnc:'pic15'
        },
        {
          reg:'^(#|档案)+(亚津子|敦子|秤砣|公主)$',
          fnc:'pic17'
        },
        {
          reg:'^(#|档案)+(泳装大狐狸|水大狐狸)$',
          fnc:'pic158'
        },
        {
          reg:'^(#|档案)+(泳装野宫|水野宫)$',
          fnc:'pic126'
        },
        {
          reg:'^(#|档案)+(泳装星野|水星野|水大叔)$',
          fnc:'pic156'
        },
        {
          reg:'^(#|档案)+(泳装泉奈|水泉奈)$',
          fnc:'pic8'
        },
        {
          reg:'^(#|档案)+(泳装千世|水千世)$',
          fnc:'pic9'
        },
        {
          reg:'^(#|档案)+(纱织)$',
          fnc:'pic18'
        },
        {
          reg:'^(#|档案)+(和沙)$',
          fnc:'pic88'
        },
        {
          reg:'^(#|档案)+(心奈)$',
          fnc:'pic146'
        },
        {
          reg:'^(#|档案)+(应援团歌原|应援歌原)$',
          fnc:'pic33'
        },
        {
          reg:'^(#|档案)+(诺亚)$',
          fnc:'pic39'
        },
        {
          reg:'^(#|档案)+(体操服优香|体操优香)$',
          fnc:'pic20'
        },
        {
          reg:'^(#|档案)+(体操服玛丽|体操玛丽)$',
          fnc:'pic115'
        },
        {
          reg:'^(#|档案)+(时雨)$',
          fnc:'pic139'
        },
        {
          reg:'^(#|档案)+(圣诞芹奈)$',
          fnc:'pic86'
        },
        {
          reg:'^(#|档案)+(正月晴奈)$',
          fnc:'pic51'
        },
        {
          reg:'^(#|档案)+(朱音)$',
          fnc:'pic45'
        },
        {
          reg:'^(#|档案)+(千世)$',
          fnc:'pic13'
        },
        {
          reg:'^(#|档案)+(明里)$',
          fnc:'pic108'
        },
        {
          reg:'^(#|档案)+(莲见)$',
          fnc:'pic100'
        },
        {
          reg:'^(#|档案)+(野宫)$',
          fnc:'pic132'
        },
        {
          reg:'^(#|档案)+(代佳子)$',
          fnc:'pic110'
        },
        {
          reg:'^(#|档案)+(睦月)$',
          fnc:'pic107'
        },
        {
          reg:'^(#|档案)+(淳子)$',
          fnc:'pic111'
        },
        {
          reg:'^(#|档案)+(芹香)$',
          fnc:'pic133'
        },
        {
          reg:'^(#|档案)+(椿)$',
          fnc:'pic14'
        },
        {
          reg:'^(#|档案)+(优香|邮箱)$',
          fnc:'pic44'
        },
        {
          reg:'^(#|档案)+(桃井)$',
          fnc:'pic46'
        },
        {
          reg:'^(#|档案)+(桐奈)$',
          fnc:'pic152'
        },
        {
          reg:'^(#|档案)+(春香)$',
          fnc:'pic112'
        },
        {
          reg:'^(#|档案)+(明日奈|亚丝娜)$',
          fnc:'pic47'
        },
        {
          reg:'^(#|档案)+(琴里|小鸟)$',
          fnc:'pic49'
        },
        {
          reg:'^(#|档案)+(铃美)$',
          fnc:'pic113'
        },
        {
          reg:'^(#|档案)+(菲娜)$',
          fnc:'pic118'
        },
        {         
          reg:'^(#|档案)+(泳装鹤城)$',
          fnc:'pic99'
        },
        {
          reg:'^(#|档案)+(泳装泉|水老八)$',
          fnc:'pic106'
        },
        {
          reg:'^(#|档案)+(巴)$',
          fnc:'pic141'
        },
        {
          reg:'^(#|档案)+(吹雪|摆烂人|摆烂)$',
          fnc:'pic151'
        },
        {
          reg:'^(#|档案)+(小满|满)$',
          fnc:'pic4'
        },
        {
          reg:'^(#|档案)+(应援团响|应援响)$',
          fnc:'pic42'
        },
        {
          reg:'^(#|档案)+(体操服莲见)$',
          fnc:'pic98'
        },
        {
          reg:'^(#|档案)+(正月淳子)$',
          fnc:'pic105'
        },
        {
          reg:'^(#|档案)+(响)$',
          fnc:'pic27'
        },
        {
          reg:'^(#|档案)+(花凛)$',
          fnc:'pic35'
        },
        {
          reg:'^(#|档案)+(沙凌)$',
          fnc:'p1c147'
        },
        {
          reg:'^(#|档案)+(真白)$',
          fnc:'pic95'
        },
        {
          reg:'^(#|档案)+(泳装日富美|水日富美|水浮士德)$',
          fnc:'pic93'
        },
        {
          reg:'^(#|档案)+(泳装真白)$',
          fnc:'pic117'
        },
        {
          reg:'^(#|档案)+(私服沙凌)$',
          fnc:'pic149'
        },
        {
          reg:'^(#|档案)+(初音未来|初音)$',
          fnc:'pic120'
        },
        {
          reg:'^(#|档案)+(亚子)$',
          fnc:'pic66'
        },
        {
          reg:'^(#|档案)+(温泉切里诺)$',
          fnc:'pic140'
        },
        {
          reg:'^(#|档案)+(温泉和香)$',
          fnc:'pic136'
        },
        {
          reg:'^(#|档案)+(正月芹香)$',
          fnc:'pic130'
        },
        {
          reg:'^(#|档案)+(濑名)$',
          fnc:'pic65'
        },
        {
          reg:'^(#|档案)+(千寻)$',
          fnc:'pic29'
        },
        {
          reg:'^(#|档案)+(咲)$',
          fnc:'pic122'
        },
        {
          reg:'^(#|档案)+(枫)$',
          fnc:'pic2'
        },
        {
          reg:'^(#|档案)+(伊吕波|168|虎式)$',
          fnc:'pic60'
        },
        {
          reg:'^(#|档案)+(日和)$',
          fnc:'pic16'
        },
        {
          reg:'^(#|档案)+(萌绘)$',
          fnc:'pic121'
        },
        {
          reg:'^(#|档案)+(兔女郎朱音)$',
          fnc:'pic32'
        },
        {
          reg:'^(#|档案)+(日鞠|轮椅)$',
          fnc:'pic26'
        },
        {
          reg:'^(#|档案)+(圣诞花绘)$',
          fnc:'pic87'
        },
        {
          reg:'^(#|档案)+(正月枫香)$',
          fnc:'pic52'
        },
        {
          reg:'^(#|档案)+(爱莉)$',
          fnc:'pic113'
        },
        {
          reg:'^(#|档案)+(枫香)$',
          fnc:'pic113'
        },
        {
          reg:'^(#|档案)+(花绘)$',
          fnc:'pic101'
        },
        {
          reg:'^(#|档案)+(晴)$',
          fnc:'pic113'
        },
        {
          reg:'^(#|档案)+(歌原)$',
          fnc:'pic48'
        },
        {
          reg:'^(#|档案)+(绫音)$',
          fnc:'pic113'
        },
        {
          reg:'^(#|档案)+(静子|看板娘)$',
          fnc:'pic119'
        },
        {
          reg:'^(#|档案)+(花子|车神)$',
          fnc:'pic113'
        },
        {
          reg:'^(#|档案)+(玛丽)$',
          fnc:'pic5'
        },
        {
          reg:'^(#|档案)+(千夏)$',
          fnc:'pic109'
        },
        {
          reg:'^(#|档案)+(小玉)$',
          fnc:'pic79'
        },
        {
          reg:'^(#|档案)+(朱莉)$',
          fnc:'pic113'
        },
        {
          reg:'^(#|档案)+(小护士)$',
          fnc:'pic102'
        },
        {
          reg:'^(#|档案)+(志美子)$',
          fnc:'pic113'
        },
        {
          reg:'^(#|档案)+(好美)$',
          fnc:'pic113'
        },
        {
          reg:'^(#|档案)+(和香)$',
          fnc:'pic37'
        },
        {
          reg:'^(#|档案)+(泳装绫音)$',
          fnc:'pic131'
        },
        {
          reg:'^(#|档案)+(泳装静子)$',
          fnc:'pic3'
        },
        {
          reg:'^(#|档案)+(未花|mika)$',
          fnc:'pic157'
        },
        {
          reg:'^(#|档案)+(小雪)$',
          fnc:'pic25'
        },
        {
          reg:'^(#|档案)+(时)$',
          fnc:'pic19'
        },
        {
          reg:'^(#|档案)+(兔女郎时)$',
          fnc:'pic23'
        },
        {
          reg:'^(#|档案)+(枫)$',
          fnc:'pic2'
        },
        {
          reg:'^(#|档案)+(佳穗)$',
          fnc:'pic10'
        },
        {
          reg:'^(#|档案)+(女仆爱丽丝|扫地机器人)$',
          fnc:'pic24'
        },
        {
          reg:'^(#|档案)+(叶渚)$',
          fnc:'pic150'
        },
        {
          reg:'^(#|档案)+(实梨)$',
          fnc:'pic135'
        },
        {
          reg:'^(#|档案)+(渚)$',
          fnc:'pic114'
        },
        {
          reg:'^(#|档案)+(玲沙)$',
          fnc:'pic83'
        },
        {
          reg:'^(#|档案)+(樱子)$',
          fnc:'pic84'
        },
        {
          reg:'^(#|档案)+(正月春香)$',
          fnc:'pic57'
        },
        {
          reg:'^(#|档案)+(正月代佳子)$',
          fnc:'pic58'
        },
        {
          reg:'^(#|档案)+(惠)$',
          fnc:'pic59'
        },
        {
          reg:'^(#|档案)+(美弥)$',
          fnc:'pic85'
        },
        {
          reg:'^(#|档案)+(南)$',
          fnc:'pic143'
        },
        {          
          reg:'^(#|档案)+(桐乃)$',
          fnc:'pic152'
        },
        {          
          reg:'^(#|档案)+(水美游|泳装美游|水小垃姬)$',
          fnc:'pic159'
        },
        {          
          reg:'^(#|档案)+(水咲|泳装咲)$',
          fnc:'pic160'
        },
        {          
          reg:'^(#|档案)+(水宫子|泳装宫子)$',
          fnc:'pic161'
        },
        {          
          reg:'^(#|档案)+(水白子|泳装白子)$',
          fnc:'pic162'
        }
      ]
    })
  }

  async pic1(e){
    let msg =["你要的档案找到了",
    segment.image(`file:///${_path}/resources/1.png`)];
     e.reply(msg)
  return true
  }


  async pic2(e){
    let msg = ["你要的档案找到了", 
    segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/2.png`)];
     e.reply(msg);
  return true;
  }



  async pic3(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/3.png`)];
     e.reply(msg)
    return true
  }


  async pic4(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/4.png`)];
     e.reply(msg)
    return true
  }
  
  
  async pic5(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/5.png`)];
     e.reply(msg)
    return true
  }


  async pic7(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/7.png`)];
     e.reply(msg)
    return true
  }
  async pic8(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/8.png`)];
     e.reply(msg)
    return true
  }

  async pic9(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/9.png`)];
     e.reply(msg)
    return true
  }

  async pic10(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/10.png`)];
     e.reply(msg)
    return true
  }

  async pic11(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/11.png`)];
     e.reply(msg)
    return true
  }

  async pic12(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/12.png`)];
     e.reply(msg)
    return true
  }

  async pic13(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/13.png`)];
     e.reply(msg)
    return true
  }

  async pic14(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/14.png`)];
     e.reply(msg)
    return true
  }

  async pic15(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/15.png`)];
     e.reply(msg)
    return true
  }

  async pic16(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/16.png`)];
     e.reply(msg)
    return true
  }

  async pic17(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/17.png`)];
     e.reply(msg)
    return true
  }

  async pic18(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/18.png`)];
     e.reply(msg)
    return true
  }

  async pic19(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/19.png`)];
     e.reply(msg)
    return true
  }

  async pic20(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/20.png`)];
     e.reply(msg)
    return true
  }

  async pic21(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/21.png`)];
     e.reply(msg)
    return true
  }

  async pic22(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/22.png`)];
     e.reply(msg)
    return true
  }

  async pic23(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/23.png`)];
     e.reply(msg)
    return true
  }

  async pic24(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/24.png`)];
     e.reply(msg)
    return true
  }

  async pic25(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/25.png`)];
     e.reply(msg)
    return true
  }

  async pic26(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/26.png`)];
     e.reply(msg)
    return true
  }

  async pic27(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/27.png`)];
     e.reply(msg)
    return true
  }

  async pic28(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/28.png`)];
     e.reply(msg)
    return true
  }

  async pic29(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/29.png`)];
     e.reply(msg)
    return true
  }

  async pic30(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/30.png`)];
     e.reply(msg)
    return true
  }

  async pic31(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/31.png`)];
     e.reply(msg)
    return true
  }

  async pic32(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/32.png`)];
     e.reply(msg)
    return true
  }

  async pic33(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/33.png`)];
     e.reply(msg)
    return true
  }

  async pic34(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/34.png`)];
     e.reply(msg)
    return true
  }

  async pic35(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/35.png`)];
     e.reply(msg)
    return true
  }

  async pic36(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/36.png`)];
     e.reply(msg)
    return true
  }

  async pic37(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/37.png`)];
     e.reply(msg)
    return true
  }

  async pic38(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/38.png`)];
     e.reply(msg)
    return true
  }

  async pic39(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/39.png`)];
     e.reply(msg)
    return true
  }

  async pic40(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/40.png`)];
     e.reply(msg)
    return true
  }

  async pic41(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/41.png`)];
     e.reply(msg)
    return true
  }

  async pic42(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/42.png`)];
     e.reply(msg)
    return true
  }

  async pic43(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/43.png`)];
     e.reply(msg)
    return true
  }

  async pic44(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/44.png`)];
     e.reply(msg)
    return true
  }

  async pic45(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/45.png`)];
     e.reply(msg)
    return true
  }

  async pic46(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/46.png`)];
     e.reply(msg)
    return true
  }

  async pic47(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/47.png`)];
     e.reply(msg)
    return true
  }

  async pic48(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/48.png`)];
     e.reply(msg)
    return true
  }

  async pic49(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/49.png`)];
     e.reply(msg)
    return true
  }

  async pic51(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/51.png`)];
     e.reply(msg)
    return true
  }

  async pic52(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/52.png`)];
     e.reply(msg)
    return true
  }

  async pic53(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/53.png`)];
     e.reply(msg)
    return true
  }

  async pic54(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/54.png`)];
     e.reply(msg)
    return true
  }

  async pic55(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/55.png`)];
     e.reply(msg)
    return true
  }

  async pic56(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/56.png`)];
     e.reply(msg)
    return true
  }

  async pic57(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/57.png`)];
     e.reply(msg)
    return true
  }

  async pic58(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/58.png`)];
     e.reply(msg)
    return true
  }

  async pic59(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/59.png`)];
     e.reply(msg)
    return true
  }

  async pic60(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/60.png`)];
     e.reply(msg)
    return true
  }

  async pic61(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/61.png`)];
     e.reply(msg)
    return true
  }

  async pic62(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/62.png`)];
     e.reply(msg)
    return true
  }

  async pic63(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/63.png`)];
     e.reply(msg)
    return true
  }

  async pic64(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/64.png`)];
     e.reply(msg)
    return true
  }

  async pic65(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/65.png`)];
     e.reply(msg)
    return true
  }

  async pic66(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/66.png`)];
     e.reply(msg)
    return true
  }

  async pic83(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/83.png`)];
     e.reply(msg)
    return true
  }

  async pic84(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/84.png`)];
     e.reply(msg)
    return true
  }

  async pic85(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/85.png`)];
     e.reply(msg)
    return true
  }

  async pic86(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/86.png`)];
     e.reply(msg)
    return true
  }

  async pic87(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/87.png`)];
     e.reply(msg)
    return true
  }

  async pic88(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/88.png`)];
     e.reply(msg)
    return true
  }

  async pic89(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/89.png`)];
     e.reply(msg)
    return true
  }

  async pic91(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/91.png`)];
     e.reply(msg)
    return true
  }

  async pic92(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/92.png`)];
     e.reply(msg)
    return true
  }

  async pic93(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/93.png`)];
     e.reply(msg)
    return true
  }

  async pic95(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/95.png`)];
     e.reply(msg)
    return true
  }

  async pic96(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/96.png`)];
     e.reply(msg)
    return true
  }

  async pic97(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/97.png`)];
     e.reply(msg)
    return true
  }

  async pic98(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/98.png`)];
     e.reply(msg)
    return true
  }

  async pic99(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/99.png`)];
     e.reply(msg)
    return true
  }

  async pic100(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/100.png`)];
     e.reply(msg)
    return true
  }

  async pic101(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/101.png`)];
     e.reply(msg)
    return true
  }

  async pic102(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/102.png`)];
     e.reply(msg)
    return true
  }

  async pic103(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/103.png`)];
     e.reply(msg)
    return true
  }

  async pic104(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/104.png`)];
     e.reply(msg)
    return true
  }

  async pic105(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/105.png`)];
     e.reply(msg)
    return true
  }

  async pic106(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/106.png`)];
     e.reply(msg)
    return true
  }

  async pic107(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/107.png`)];
     e.reply(msg)
    return true
  }

  async pic108(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/108.png`)];
     e.reply(msg)
    return true
  }

  async pic109(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/109.png`)];
     e.reply(msg)
    return true
  }

  async pic110(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/110.png`)];
     e.reply(msg)
    return true
  }

  async pic111(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/111.png`)];
     e.reply(msg)
    return true
  }

  async pic112(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/112.png`)];
     e.reply(msg)
    return true
  }

  async pic113(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/113.png`)];
     e.reply(msg)
    return true
  }

  async pic114(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/114.png`)];
     e.reply(msg)
    return true
  }

  async pic115(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/115.png`)];
     e.reply(msg)
    return true
  }

  async pic116(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/116.png`)];
     e.reply(msg)
    return true
  }

  async pic117(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/117.png`)];
     e.reply(msg)
    return true
  }

  async pic118(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/118.png`)];
     e.reply(msg)
    return true
  }

  async pic119(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/119.png`)];
     e.reply(msg)
    return true
  }

  async pic120(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/120.png`)];
     e.reply(msg)
    return true
  }

  async pic121(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/121.png`)];
     e.reply(msg)
    return true
  }

  async pic122(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/122.png`)];
     e.reply(msg)
    return true
  }

  async pic123(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/123.png`)];
     e.reply(msg)
    return true
  }

  async pic124(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/124.png`)];
     e.reply(msg)
    return true
  }

  async pic125(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/125.png`)];
     e.reply(msg)
    return true
  }

  async pic126(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/126.png`)];
     e.reply(msg)
    return true
  }

  async pic127(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/127.png`)];
     e.reply(msg)
    return true
  }

  async pic128(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/128.png`)];
     e.reply(msg)
    return true
  }

  async pic129(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/129.png`)];
     e.reply(msg)
    return true
  }

  async pic130(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/130.png`)];
     e.reply(msg)
    return true
  }

  async pic131(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/131.png`)];
     e.reply(msg)
    return true
  }

  async pic132(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/132.png`)];
     e.reply(msg)
    return true
  }

  async pic133(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/133.png`)];
     e.reply(msg)
    return true
  }

  async pic135(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/135.png`)];
     e.reply(msg)
    return true
  }

  async pic136(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/136.png`)];
     e.reply(msg)
    return true
  }

  async pic137(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/137.png`)];
     e.reply(msg)
    return true
  }

  async pic138(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/138.png`)];
     e.reply(msg)
    return true
  }

  async pic139(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/139.png`)];
     e.reply(msg)
    return true
  }

  async pic140(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/140.png`)];
     e.reply(msg)
    return true
  }

  async pic145(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/145.png`)];
     e.reply(msg)
    return true
  }

  async pic146(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/146.png`)];
     e.reply(msg)
    return true
  }

  async pic147(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/147.png`)];
     e.reply(msg)
    return true
  }

  async pic148(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/148.png`)];
     e.reply(msg)
    return true
  }

  async pic149(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/149.png`)];
     e.reply(msg)
    return true
  }

  async pic150(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/150.png`)];
     e.reply(msg)
    return true
  }

  async pic151(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/151.png`)];
     e.reply(msg)
    return true
  }

  async pic152(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/152.png`)];
     e.reply(msg)
    return true
  }

  async pic154(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/154.png`)];
     e.reply(msg)
    return true
  }

  async pic155(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/155.png`)];
     e.reply(msg)
    return true
  }

  async pic156(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/156.png`)];
     e.reply(msg)
    return true
  }

  async pic157(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/157.png`)];
     e.reply(msg)
    return true
  }

  async pic143(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/143.png`)];
     e.reply(msg)
    return true
  }

  async pic158(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/158.png`)];
     e.reply(msg)
    return true
  }

  async pic159(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/159.png`)];
     e.reply(msg)
    return true
  }

  async pic160(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/160.png`)];
     e.reply(msg)
    return true
  }

  async pic161(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/161.png`)];
     e.reply(msg)
    return true
  }

  async pic162(e){
    let msg =["你要的档案找到了",
        segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/student_information/162.png`)];
     e.reply(msg)
    return true
  }

}

