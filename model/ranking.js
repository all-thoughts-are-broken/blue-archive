import base from './base.js'
import { getV } from "./tools.js"
import Api from './api.js'
import cfg from './Cfg.js'
import QRCode from "qrcode"

export default class Rank extends base {
    constructor (e) {
        super(e)
        this.model = 'rank'
        this.api = new Api()
        this.token = cfg.getConfig('set').token
    }

async rank(token) {

  let { data } = await this.api.getdata('rank', { token })
  let records = data.records

  let rank = []
  let obj = {}
  let minRank = {}

  rank.push(`<span class="rank_ text">排名</span>`
  + `<span class="rank_ text">分数</span>`
  + `<span class="rank_ text">难度</span>`
  + `<span class="rank_ text">时间</span>`
  )

  for (var i = 0, len = records.length; i < len; i++) {
    if (i <= 20) {
      rank.push(`<span class="rank_ ranking">${records[i].rank}</span>`
      + `<span class="rank_ score">${records[i].bestRankingPoint.toLocaleString()}</span>`
      + `<span class="rank_ difficulty"><span class="_difficulty" id="${records[i].hard}">${records[i].hard}</span></span>`
      + `<span class="rank_ time">${records[i].battleTime}</span>`
      )
    }
    
    if (obj.hard && obj.hard != records[i].hard) {
      minRank[obj.hard] = obj[obj.hard]
    }
    
    obj.hard = records[i].hard
    obj[records[i].hard] = this.createRankHTML(records[i])
  }

  let lastData = records[len - 1]
  minRank[lastData.hard] = this.createRankHTML(lastData)

  return  { rank, minRank }
}

createRankHTML(data) {
  return `<span class="rank_ difficulty"><span class="_difficulty" id="${data.hard}">${data.hard.replace(/EX/, 'Extreme').replace(/HC/, 'HardCore').replace(/N/, 'Normal')}</span></span>` + `<br>`
  + `<span class="rank_ ranking">${data.rank.toLocaleString()}</span>`
}


async dx(token) {
  let res = await this.api.getdata('dx', { token })
  let html = {}
  
  for (let data of res.data) {
    let rank = data.rank.toString()
    .replace(/240000/, '三档')
    .replace(/120000/, '二档')
    .replace(/20000/, '一档')

    html[rank] = `<span class="dx_text">${rank}</span>` + `<br>`
    + `<span class="dx_text">${data.bestRankingPoint.toLocaleString()}</span>` + `<br>`
    + `<span class="dx_text"><span class="_difficulty" id="${data.hard}">${data.hard}</span>&nbsp;${data.battleTime}</span>`
  }

  return html
  }

async boss(token) {
  let { data } = await this.api.getdata('season', { token })
  let { season, map, boss, startTime, endTime } = data[0]
  let html = `<span class="title">第${season}期</span>&nbsp;`
  + `<span class="title">${map.value}&nbsp;${boss}</span>`

  return html
}

async _dx() {
  if (!this.token) {
    await this.e.reply('未填写token')
    return true
  }

  let boss = await this.boss(this.token)
  let dx = await this.dx(this.token)
  let rank = await this.rank(this.token)

  let qr = await QRCode.toDataURL(`https://arona.icu/raidRank`)
  let src = `<span class="infoSrc">数据来源：什亭之匣</span>` 
  let infoSrc = `<div class="arona_icu" style="background-image: url(${qr})">${src}</div>`

  this.e.runtime.render('BlueArchive-plugin', 'html/rank/rank', {
    infoSrc,
    boss,
    ...rank,
    ...dx,
    ...await getV()
  })
}


}