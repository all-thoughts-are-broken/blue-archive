import moment from "moment"
import base from './base.js'
import { getV, gethtml } from "./tools.js";

export default class Activity extends base {
    constructor (e) {
        super(e)
        this.model = 'activity'
    }

    async activity(e, server) {
        let now = moment(),
            currentYear = now.year(),
            currentMonth = now.month() + 1,
            currentDay = now.date(),
            currentTime = now.format('HH:mm:ss');

        //html数据
        let data = {
          day: currentYear + "年" + currentMonth + "月" + currentDay + '日',
          time: currentTime,
          activity: []
        }
  
        let activityData = await this.getdata(),
            activity_star = false

            if (server == '国服') 
              activityData = activityData.CN
            else if (server == '国际服') 
              activityData = activityData.INT
            else if (server == '日服') 
              activityData = activityData.JP
            else
              activityData = [
            ...activityData.CN,
            ...activityData.INT,
            ...activityData.JP
            ]

            for (let activity of activityData) {
              let { activity_time } = activity

              let time = await this.convertTimeFormat(activity_time)  //解析时间

              let { endYear, endMonth, endDay, endTime } = time.endTime
              let { startYear, startMonth, startDay, startTime } = time.startTime

              let startDate = `${startYear}-${startMonth}-${startDay} ${startTime}`
              let endDate = `${endYear}-${endMonth}-${endDay} ${endTime}`
  
              let a = moment(startDate).format('x'),  //活动起始时间戳
                  b = moment().format('x')  //当前时间戳
  
              if (b > a) activity_star = true
              else activity_star = false
  
              let date
  
              if (!activity_star)
                date = startDate
              else
                date = endDate
  
              let start = moment(date),
                  end = moment(),
                  duration = moment.duration(start.diff(end));  //计算时间差

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
  
              data.activity.push({
                activity_star: activity_star,  //活动是否开始
                day: day,  // 天
                hour: hour,  // 小时
                minute: minute,  // 分
                second: second,  // 秒
                time_diff: time_diff,  // 时间差
                ...activity,
                activity_time: `${startMonth}月${startDay}日\u0020${startTime}\u0020~\u0020${endMonth}月${endDay}日\u0020${endTime}`
              })
            }
          
            //logger.mark(data)
  
        return e.runtime.render('BlueArchive-plugin', 'html/activity/activity', {
          ...await getV(),
          ...data
        })
    }

    /** 获取数据*/
    async getdata() {
      try {
        const url = 'https://ba.gamekee.com/date';
        const headers = {
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
        };
    
        const $ = await gethtml(url, headers, false, 'activity.html');
  
        // 删除碍事的元素
      $('.header, .nav-body').remove();
  
      let data = {
        CN: [],
        INT: [],
        JP: [],
      }

      const boldSpans = $('.c-item')
      boldSpans.each((index, element) => {
        let title = $(element).find('.item-title').text().trim();  
        let time = $(element).find('.sub-title').text().trim();  
        let img = $(element).find('img').attr('src');
        let server = title.match(/\【(.*)\】/);
        let banner;

        if (Array.isArray(server)) server = server[1].replace(/卡池/g, '')
        if (title.match(/卡池/)) banner = true
        else banner = false
  
        let activity = {
          server: server,  //服务器
          banner: banner,  //是否卡池
          title: title.replace(/\【.*\】/g, ''),  //标题
          activity_time: time,   //活动时间
          img: img? 'https:'+img : ''  //活动图片
        }
  
        if (server == '国服') {
          data.CN.push(activity)
        }
        if (server == '国际服') {
          data.INT.push(activity)
        }
        if (server == '日服') {
          data.JP.push(activity)
        }
      });
  
      //logger.mark(data)
  
      return data;
    
      } catch (error) {
        logger.error(error);
      }
    }

    /** 解析时间段*/
    async convertTimeFormat(input) {

      let times = input.split(' ~ '),
          start = times[0],
          end = times[1];
    
      let StartTime = await this.formatTime(start),
          EndTime = await this.formatTime(end);

      let startMonth = StartTime.month,
          endMonth = EndTime.month,
          currentMonth = moment().month() + 1,
          currentYear = moment().year(),
          startYear,
          endYear

      //判断年份
      if (endMonth < startMonth) {
        if (currentMonth >= startMonth) {
          startYear = currentYear
          endYear = currentYear + 1
        } else {
          startYear = currentYear - 1
          endYear = currentYear
        }
      } else {
        if (currentMonth >= startMonth && currentMonth <= endMonth) {
          startYear = currentYear
          endYear = currentYear
        } else if (currentMonth < startMonth) {
          startYear = currentYear - 1
          endYear = currentYear
        } else {
          startYear = currentYear
          endYear = currentYear + 1
        }
      }

      let startTime = {
            startYear: startYear,
            startMonth: StartTime.month,
            startDay: StartTime.day,
            startTime: StartTime.hourMinute
          },
          endTime = {
            endYear: endYear,
            endMonth: EndTime.month,
            endDay: EndTime.day,
            endTime: EndTime.hourMinute
          }
    
      return { startTime, endTime }
    }
    
    /** 分割日期和时间*/
    async formatTime(time) {
      let parts = time.split(' ');
      let monthDay = parts[0];
      let hourMinute = parts[1];
    
      let { month, day } = await this.formatMonthDay(monthDay);
    
      return { month, day, hourMinute }
    }
    
    /** 分割月日*/
    async formatMonthDay(monthDay) {
      let parts = monthDay.split('-');
      let month = parseInt(parts[0], 10);
      let day = parseInt(parts[1], 10);
      return { month, day }
    }
  

}