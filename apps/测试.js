import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'

export class cs extends plugin {
    constructor() {
        super({
            name: "BA插件帮助",
            dsc: "BA插件帮助",
            event: "message",
            priority: 500,
            rule: [
                {
                    reg: "^未来视$",
                    fnc: "w",
                },
                { 
                    reg: "^cs$",
                    fnc: "cs",
                },
            ],
        });
    }

    //jQuery 选择器解释  https://www.runoob.com/jquery/jquery-ref-selectors.html
    //siblings() 方法返回被选元素的所有同级元素。
    //attr() 方法设置或返回被选元素的属性和值

    async w() {
        axios.get('https://ba.gamekee.com/150045.html')
          .then(response => {
            // 解析返回数据
            const data = response.data;
            //logger.mark(data);
            const $ = cheerio.load(data);
            // 提取所需的内容
            let url = []

              $('input.catalog-input').each((index, element) => {  //
                let value = $(element).attr('value');
                let dataReal = $(element)
                .parents('div.div-img') //选择上两级父元素
                .next('div.div-img') //选择同级下一个元素
                .find('img') //选择后代元素
                .attr('data-real') //返回被选元素的属性和值
                if (dataReal) {
                  dataReal = 'https:' + dataReal
                  url.push('标题:', value, '图片url:', dataReal)
                }
                //logger.mark('Value:', value, 'Data-real:', dataReal);
              });

            logger.mark(url);

          })
          .catch(error => {
            logger.error(error);
          });
    }

/*
    async cs1() {
      axios.get('https://ba.gamekee.com/158584.html')
        .then(response => {
          // 解析返回数据
          const data = response.data;
          //logger.mark(data);
          const $ = cheerio.load(data);
          // 提取所需的内容
          let url = []

          let title = $('title').text()
          url.push('title', title)

            $('div.div-img').each((index, element) => {  //
              let dataReal = $(element)
              .find('img') //选择后代元素
              .attr('data-real') //返回被选元素的属性和值
              if (dataReal) {
                dataReal = 'https:' + dataReal
                url.push('图片url:', dataReal)
              }
            });

          logger.mark(url);

        })
        .catch(error => {
          logger.error(error);
        });
  }
*/

  async 关卡攻略() {
    let url = `https://ba.gamekee.com/v1/user/contentList?uid=425613` //嘉信
    //let url = `https://ba.gamekee.com/v1/user/contentList?uid=287349`  //皮皮

            let res = await this.getdata(url)
            let data = {};
            let page_total = res.meta.pagination.page_total
            //logger.mark(res);
          for (let i = 0; i < page_total; i++) {
            logger.mark('页码总数',page_total);
            for (let i = 0; i < res.data.length; i++) {
              let title = res.data[i].title
              if (!title.match(/[Hh]?\d{1,2}-\d/)) continue
              let url = res.data[i].thumb.replace(/\/\//g, 'https://')
              data[title] = url.split(',')
          }
          if (i+1 == page_total) break
          res = await this.getdata(`${url}&page_no=${i+2}`)
        }
          logger.mark(data);
  }

  async getdata(url) {
    //logger.mark('url',url);
    let res = await fetch(url, {
      "headers": {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
          'Game-Alias': 'ba',
          'Game-Id': '829',
          'Host': 'ba.gamekee.com',
          'Referer': 'https://ba.gamekee.com/user/index/425613.html',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
          'Cookie': '_ga=GA1.1.112273484.1701599345; wk_uuid=1ef6bd7b-b228-4f23-89c5-9b36fe2a3f0e; Hm_lvt_4e86461ca95817a955a0fd34fef28c67=1701607712,1701692584,1702473153,1702772970; Hm_lpvt_4e86461ca95817a955a0fd34fef28c67=1702805077; _ga_4M9R3LQQS5=GS1.1.1702802491.12.1.1702805076.0.0.0'
      },
    })
    res = await res.json()
    return res
  }
}
