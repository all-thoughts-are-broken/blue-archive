import moment from "moment"
import base from './base.js'
import { getV } from "./tools.js"
import Api from './api.js'

export default class Activity extends base {
    constructor (e) {
        super(e)
        this.model = 'activity'
    }

    async activity(e, server) {

      let now = moment()
      let future = moment().add(7, 'days') // 加上7天
      let past = moment().subtract(20, 'days') // 减去20天
      let futureTime = future.unix() // 转换为时间戳（秒级）
      let pastTime = past.unix()
      
      let nowTime = now.format('X')  //当前时间戳 X返回秒级 x返回毫秒级

      let api = new Api()
      let { data } = await api.getdata('activity', {  past: pastTime, future: futureTime })
      let info = { CN: [], INT: [], JP: [] }
      let serverMap = { '国服': 'CN', '国际服': 'INT', '日服': 'JP' }


      for (let elem of data) {
        let start = moment.unix(elem.begin_at).format('MM月DD HH:mm')
        let end = moment.unix(elem.end_at).format('MM月DD HH:mm')
        let serverID = serverMap[elem.pub_area]

        info[serverID].push({
          server: elem.pub_area,  //服务器
          serverID: serverID, 
          banner: /\【.*卡池.*\】/.test(elem.title),  //是否卡池
          title: elem.title.replace(/\【.*\】/g, ''),  //标题
          activity_time: `${start} ~ ${end}`,   //活动时间
          start: elem.begin_at,
          end: elem.end_at,
          img: elem.picture? 'https:'+elem.picture : ''  //活动图片
        })
      }

        //html数据
        let htmlData = {
          day: now.format('YYYY年M月D日'),
          activity: []
        }

            if (server == '国服') 
              info = info.CN
            else if (server == '国际服') 
              info = info.INT
            else if (server == '日服') 
              info = info.JP
            else
              info = [
            ...info.CN,
            ...info.INT,
            ...info.JP
            ]

            for (let act of info) {
  
              let activity_star = false
              let date

              if (nowTime >= act.start) activity_star = true
              else activity_star = false          

              if (!activity_star) date = act.start
              else date = act.end
  
              let time = moment.unix(date),
                  diff = time.diff(now, 'seconds'),  //计算时间差
                  duration = moment.duration(diff, 'seconds');  // 创建时间长度对象

              let day = duration.days(),
                  hour = duration.hours(),
                  minute = duration.minutes(),
                  second = duration.seconds(),
                  time_diff,
                  style

              //logger.mark('时间差:', day,'天',hour,'时',minute,'分',second,'秒');

              if (activity_star) //判断样式
                style = 2
              else
                style = 1

              if (!day) {
                if (!hour) {
                  if (!minute) {
                    time_diff = `<span class="act${style} second">${second}</span> 秒`
                  }
                  else {
                    time_diff = `<span class="act${style} minute">${minute}</span> 分 <span class="act${style} second">${second}</span> 秒`
                  }
                } else {
                  time_diff = `<span class="act${style} hour">${hour}</span> 小时 <span class="act${style} minute">${minute}</span> 分`
                }
              } else {
                time_diff = `<span class="act${style} day">${day}</span> 天 <span class="act${style} hour">${hour}</span> 小时`
              }
  
              htmlData.activity.push({
                activity_star: activity_star,  //活动是否开始
                time_diff: time_diff,  // 时间差
                ...act
              })
            }
  
        return e.runtime.render('BlueArchive-plugin', 'html/activity/activity', {
          ...await getV(),
          ...htmlData
        })
    }
}