import MD5 from 'md5'
import fetch from 'node-fetch'
import apiTool from './apiTool.js'

export default class baApi {

  constructor () {
    this.apiTool = new apiTool()
    this.cacheCd = 600 //10分钟
  }

  /**
 * 
 * @param {*} type 请求接口
 * @param {*} data 请求参数
 */
async getdata(type, data = {}, cached = false) {

  let { url, headers, body } = this.getUrl(type, data)

  if (!url) return false

  let cacheKey = this.cacheKey(type, data)
  let cahce = await redis.get(cacheKey)
  if (cahce) return JSON.parse(cahce)

  if (data.headers) {
      headers = { ...headers, ...data.headers }
    }

    let param = {
      headers
    }

    if (body) {
      param.method = 'post'
      param.body = body
    } else {
      param.method = 'get'
    }

    let response = {}
    let start = Date.now()

    try {
      //logger.debug(`[访问接口][${type}]`,url, param)
      response = await fetch(url, param)

      //logger.debug(response.headers)

    } catch (error) {
      logger.error(error.toString())
      return false
    }

    if (!response.ok) {
      logger.error(`[ba接口][${type}] ${response.status} ${response.statusText}`)
      return false
    }

    logger.mark(`[ba接口][${type}] ${Date.now() - start}ms`)
    
    const res = await response.json()
    
    //logger.debug(`[ba接口返回]`,res)//访问结果

    if (!res) {
      logger.mark('ba接口没有返回')
      return false
    }

    res.api = type

    if (cached) this.cache(res, cacheKey)

    return res
}

cacheKey (type, data) {
  return 'Yz:BlueArchive:' + MD5(type + JSON.stringify(data))
}

async cache (res, cacheKey) {
  if (!res) return
  redis.setEx(cacheKey, this.cacheCd, JSON.stringify(res))
}

getUrl (type, data = {}) {
  let urlMap = this.apiTool.getUrlMap(data)
  if (!urlMap[type]) return false

  let { url, query = '', body = '' } = urlMap[type]

  if (query) url += `?${query}`
  if (body) body = JSON.stringify(body)

  let headers = this.getHeaders(type, data)

  return { url, headers, body }
}

  getHeaders (type, data) {
    let Windows = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36'
    let Android = `Mozilla/5.0 (Linux; Android 12; MI 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36 EdgA/110.0.1587.66 ?`

    const gamekee = {
      'game-alias': 'ba',
      'User-Agent': Android,
      'Referer': 'https://www.gamekee.com/ba/date'
    },
    schale = {
      'User-Agent': Windows,
    },
    arona_icu = {
      'User-Agent': Windows,
      'Referer': 'https://arona.icu',
      'Authorization': `ba-token ${data.token}`,
      'Content-Type': 'application/json'
    }

    if (['activity', 'user'].includes(type)) {
      return gamekee
    } else if (['voice', 'students', 'enemies', 'index'].includes(type)) {
      return schale
    } else if (['rank', 'dx', 'student', '20001', 'act', 'draw', 'banners', 'boss', 'season', 'idBoss', 'friends'].includes(type)) {
      return arona_icu
    }

    return {}
  }


}
