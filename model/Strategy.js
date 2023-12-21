import base from './base.js'
import fs from 'fs';
import { saveImg, gethtml } from "./tools.js";

export default class Strategy extends base {
    constructor (e) {
        super(e)
        this.model = 'Strategy'
    }

    /**
     * 检索网页是否有匹配数据并下载图片
     * @param name 角色名
     * @param type 角色类型
     * @param file_name 文件保存名字
     */
    async getimg(name, type, file_name){
        let data = await this.getdata()
        let path = `./plugins/BlueArchive-plugin/resources/student_information/`;
        let url
        logger.mark('name', name)
        logger.mark('type', type)
        for (let key in data) {
            //logger.mark(key)
          if (key.includes(name)) {
            if (!type && !key.match(/泳装|私服|温泉|正月|自行车|应援|幼女|运动|圣诞/)) url = data[key];
            else if (type && key.includes(type)) url = data[key];
            else continue
            url = data[key]
              logger.mark(`找到了"${key}" url "${url}"`);
              await saveImg(url, path, file_name)  //保存
              return segment.image(url)
          }
        }
        return '唔！没找到图片...'
      }

      //获取网页数据
    async getdata() {
        try {
          let html_url = 'https://ba.gamekee.com/155086.html'
          const $ = await gethtml(html_url);
          //logger.mark($);
          let arr = []
          //选择指定元素
          const boldSpans = $('span[style*="font-weight: bold"], span[style*="font-weight:bold"], span[style*="font-weight: 700"], img[loading="lazy"][data-width][data-height][data-real]');
          boldSpans.each((index, element) => {
          let content = $(element).text().trim();
          if (!content) content = 'https:' + $(element).attr('data-real'); //如果为空就是图片链接
          if (!content.match('undefined')) arr.push(content) //排除undefined
        });
        //删除不必要数据
        let s = arr.indexOf('戒野 美咲(ミサキ/Misaki)')
        arr.splice(0, s)
        //logger.mark(s);
  
        let data = {}
        let key
        let url
        //逆向遍历数组处理排版问题并转为对象
        for (let i = arr.length - 1; i >= 0; i--) {
          if (arr[i].startsWith("https")) {
              url = arr[i];  //如果是链接就存起来
          } else {
              key = arr[i].replace(/防吞|\s/g, '')   //不是链接就存为键
              if (url) data[key] = url
          }
      }
  
      //对佳代子进行单独处理
      data['鬼方佳世子.正月(カヨコ/Kayoko)'] = 'https://cdnimg.gamekee.com/wiki2.0/images/w_1562/h_855/829/43637/2023/11/12/90313.png'
        
        //logger.mark(data);

          logger.mark('获取数量：',Object.keys(data).length);

          //将获取数据保存为文件
          if (!fs.existsSync('./plugins/BlueArchive-plugin/resources/')) fs.mkdirSync('./plugins/BlueArchive-plugin/resources/', { recursive: true });
          fs.writeFileSync('./plugins/BlueArchive-plugin/resources/测试用.json', JSON.stringify(data), 'utf8')

          return data
          
        } catch (error) {
          //logger.error(error);
          throw error
        }
      }

}
