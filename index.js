import fs from 'node:fs'

logger.info('--------- >_< ---------')
logger.info('BlueArchive-plugin成功加载')
logger.info('阿罗娜来工作啦')
logger.info('目前的阿罗娜会做的还不多')
logger.info('请多多包涵哦')
logger.info('-----------------------')

const files = fs.readdirSync('./plugins/BlueArchive-plugin/apps').filter(file => file.endsWith('.js'))

let ret = []

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})


ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')

  if (ret[i].status != 'fulfilled') {
      logger.error(`载入插件错误：${logger.red(name)}`)
      logger.error(ret[i].reason)
      continue
  }
  apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}


export { apps }