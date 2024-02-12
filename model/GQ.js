import fs from 'fs'
import fetch from 'node-fetch'
import { saveImg, gethtml } from "./tools.js"
import Api from './api.js'

const _path = process.cwd();

/**
 * 发送关卡攻略
 * @param zhangJie 第某章
 * @param juTi 具体文件夹，如1-1
 * @param n 作者 1.嘉信 2.皮皮 3.hehedi 4.番茄酱怒炒西红柿   优先级按顺序
 */
async function getImg(zhangJie, juTi, n = 0) {
    let msgs = [`这是第${zhangJie}章${juTi}攻略~`];
    const Path = _path + `/plugins/BlueArchive-plugin/resources/关卡攻略/${zhangJie}章/${juTi}`;
    let files;
      try {
        if (fs.existsSync(Path)) files = fs.readdirSync(Path); //检查路径
        logger.mark(`files：${files}`);
        if (files && files.length != 0) {
        files.forEach(file => {
          msgs.push(segment.image(`file:///${Path}/${file}`));
        });
      }else{
        //本地没找到就请求网页下载
        logger.mark(`未读取到文件`);
        let msg = await upimg(zhangJie, juTi, n)
        if (!msg == '啊嘞？没找到攻略呢') msgs.push(msg)
        else msgs = msg
        }
      }catch (err) {
        msgs = `获取关卡攻略出错：${err}`
        throw err
      }
    return msgs;
  }

  async function getvideo(msg) {
    let data = await getdata(3, msg)
    if (data) {
      //暂时不独立保存每个视频 先咕咕咕。。。
      let path ='./plugins/BlueArchive-plugin/resources/video/video.mp4'
      let res = await fetch(data, {
        headers: {
            'referer': 'https://www.bilibili.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
        }
    })
    res = await res.buffer()
    fs.writeFileSync(path, res)
    return path
    }else{
      return ''
    }
  }

  async function update(n) {
    let a = 1  //章节起始值
    let a2 = 1  //困难章节起始值
    let c = 50 //章节最大值
    let fail = 0  //失败次数
    if (n) {
      c = n
      a = n
      a2 = n
    }

    logger.mark('开始更新普通关卡');
    for (a ; a <= c; a++) {
      if (fail == 2) 
      break
      for (let b = 1; b <= 5; b++) {
        if (fail == 2) 
        break
        let gq = `${a}-${b}`
        let msg = await upimg(a, gq)
        if (msg == '啊嘞？没找到攻略呢')
        fail += 1
      }
    }
    logger.mark('fail', fail)
    fail = 0
    logger.mark('开始更新困难关卡')
    for (a2 ; a2 <= c; a2++) {
      if (fail == 2) 
      break
      for (let b = 1; b <= 3; b++) {
        if (fail == 2) 
        break
        let gq = `${a2}-${b}H`
        let msg = await upimg(a2, gq)
        if (msg == '啊嘞？没找到攻略呢')
        fail += 1
      }
    }
    logger.mark('fail', fail)
    fail = 0
    return '更新完成！'
  }

  async function upimg(zhangJie, juTi, n = 0) {
    if (n < 0 || n > 2) return '啊嘞？没找到攻略呢'
    const Path = _path + `/plugins/BlueArchive-plugin/resources/关卡攻略/${zhangJie}章/${juTi}`
    let msg = []
    logger.mark(`开始下载`, juTi);
    let data = await getdata(n, juTi)
    if (data.length != 0) {
      if (fs.existsSync(Path)) fs.rmdirSync(Path, { recursive: true });  //文件夹存在就删除，不存在就创建
      if (!fs.existsSync(Path)) fs.mkdirSync(Path, { recursive: true });  
        for (let i = 0; i < data.length; i++) {  //循环保存图片
          let save = await saveImg(data[i], `${Path}/${i+1}.png`)
          if (save) msg.push(segment.image(`file:///${Path}/${i+1}.png`))
          else msg.push('图片下载失败')
        }
      }else{
        n = n + 1 //没有找到想要数据，换个作者
        msg = await upimg(zhangJie, juTi, n)
      }
      return msg
  }

/**
 * 搜索对应作者的攻略，返回url
 * @param n 作者 1.嘉信 2.皮皮 3.hehedi 4.番茄酱怒炒西红柿   优先级按顺序  
 * @param barrier 关卡
 */
  async function getdata(n, barrier) {
    let uid
    if (n == 0) uid = 425613        //嘉信 425613
    else if (n == 1) uid = 287349   //皮皮 287349
    else if (n == 2) uid = 383528   //hehedi 383528
    else if (n == 3) uid = 178843   //视频攻略 番茄酱怒炒西红柿 178843

     let res = await getres(uid)
     let page_total = res.meta.pagination.page_total
      for (let i = 0; i < page_total; i++) {
        for (let i = 0; i < res.data.length; i++) {
          let title = res.data[i].title.replace(/ard|\（.*\）|\(.*\)/g, '')
          if (title.match(/[Hh]/)) title = title.replace(/[Hh]/g, '') + 'H'  //将h统一在后面
          if (title != barrier) continue 
            const $ = await gethtml(`https://ba.gamekee.com/${res.data[i].id}.html`) //请求详情页面
            let Element = $('.uploadVideoImg');  //选择视频元素
            let urls = []
            if (Element.length) {
              let data = Element.attr('data-url')
              let avid = data.match(/aid=([0-9]{9})/)[1]
              let cid = data.match(/cid=([0-9]{10})/)[1]
              let url = `https://api.bilibili.com/x/player/playurl?avid=${avid}&cid=${cid}&qn=16&type=mp4&platform=html5`
              let response = await fetch(url);
              let res2 = await response.json();
              urls = res2.data.durl[0].url
            }else{
              Element = $('img[loading="lazy"][data-width][data-height][data-real]');  //选择图片元素
              Element.each((index, element) => {
                let url = $(element).attr('data-real').replace(/\/\//g, 'https://') //图片链接
                urls.push(url); 
              });
            }
            logger.mark('作者:', res.data[0].user.username, 'uid:',res.data[0].user.uid, '获取链接:', [urls], '页码总数:',page_total);
            return urls
      }
      if (i+1 == page_total) break
      res = await getres(uid, i+2)  //获取下一页数据
    }
      return ''
  }



  /**
 * 获取个人主页数据
 * @param uid 作者uid
 * @param page_no 页码
 */
  async function getres(uid, page_no) {
    let url = `https://ba.gamekee.com/v1/user/contentList?uid=${uid}`
    if (page_no) url = url + `&page_no=${page_no}`
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
    getvideo,
    update,
    upimg,
    getdata
   };