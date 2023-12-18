import fs from 'fs';
import fetch from 'node-fetch'
import { saveImg } from "./tools.js";

const _path = process.cwd();

/**
 * 发送关卡攻略
 * @param zhangJie 第某章
 * @param juTi 具体文件夹，如1-1
 * @param n 作者
 */
async function getImg(zhangJie, juTi, n = 0) {
    if (n < 0 || n > 2) return '啊嘞？没找到攻略呢'
    let msgs = [`这是第${zhangJie}章${juTi}攻略`];
    const Path = _path + `/plugins/BlueArchive-plugin/resources/关卡攻略/${zhangJie}章/${juTi}`;
    let files;
      try {
        if (fs.existsSync(Path)) files = fs.readdirSync(Path);
        logger.mark(`files：${files}`);
        if (files && files.length != 0) {
        files.forEach(file => {
          msgs.push(segment.image(`file:///${Path}/${file}`));
        });
      }else{
        logger.mark(`未读取到文件`);
        logger.mark(`开始下载`);
        let data = await getdata(n)
        data = data[juTi]
        logger.mark(`data`,data);
        if (data) {
          if (!fs.existsSync(Path)) fs.mkdirSync(Path, { recursive: true });
            for (let i = 0; i < data.length; i++) {
              let save = await saveImg(data[i], `${Path}/${i+1}.png`)
              if (save) msgs.push(segment.image(`file:///${Path}/${i+1}.png`))
              else msgs.push('图片下载失败')
            }
          }else{
            n = n + 1
            msgs = await getImg(zhangJie, juTi, n)
          }
        }
      }catch (err) {
        logger.mark(`获取关卡攻略出错：${err}`);
        return `获取关卡攻略出错：${err}`
      }
    return msgs;
  }

  async function getdata(n) {
    let url
    if (n == 0) url = `https://ba.gamekee.com/v1/user/contentList?uid=425613` //嘉信
    else if (n == 1) url = `https://ba.gamekee.com/v1/user/contentList?uid=287349`  //皮皮
    else if (n == 2) url = `https://ba.gamekee.com/v1/user/contentList?uid=383528` //hehedi

     let res = await getres(url)
     let data = {};
     let page_total = res.meta.pagination.page_total
     //logger.mark(res);
      for (let i = 0; i < page_total; i++) {
        for (let i = 0; i < res.data.length; i++) {
          let title = res.data[i].title
          if (!title.match(/[Hh]?\d{1,2}-\d/)) continue
          if (title.match(/[Hh]/)) title = title.replace(/[Hh]/g, '') + 'H'
          let url = res.data[i].thumb.replace(/\/\//g, 'https://')
          data[title] = url.split(',')
      }
      if (i+1 == page_total) break
      res = await getres(`${url}&page_no=${i+2}`)
    }
      logger.mark('作者:', res.data[0].user.username, 'uid:',res.data[0].user.uid, '获取数量:', Object.keys(data).length, '页码总数:',page_total);
      return data
  }

  async function getres(url) {
    //logger.mark('url',url);
    let res = await fetch(url, {
      "headers": {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
          'Game-Alias': 'ba',
          'Game-Id': '829',
          'Host': 'ba.gamekee.com',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
          'Cookie': '_ga=GA1.1.112273484.1701599345; wk_uuid=1ef6bd7b-b228-4f23-89c5-9b36fe2a3f0e; Hm_lvt_4e86461ca95817a955a0fd34fef28c67=1701607712,1701692584,1702473153,1702772970; Hm_lpvt_4e86461ca95817a955a0fd34fef28c67=1702805077; _ga_4M9R3LQQS5=GS1.1.1702802491.12.1.1702805076.0.0.0'
      },
    })
    res = res.json()
    return res
  }
  
  export default { 
    getImg,
    getdata
   };