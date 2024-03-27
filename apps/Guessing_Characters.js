import fs from 'fs'
import path from 'path'
import lodash from 'lodash'
import sizeOf from 'image-size'
import render from "../model/puppeteer/puppeteer.js"
import Cfg, { ba } from '../model/Cfg.js'
import sharp from 'sharp'
import fetch from 'node-fetch'

const _path = process.cwd()
const portraitPath = path.join(_path, 'plugins/BlueArchive-plugin/resources/img/students/portrait')
const collectionPath = path.join(_path, 'plugins/BlueArchive-plugin/resources/img/students/collection')
const lobbyPath = path.join(_path, 'plugins/BlueArchive-plugin/resources/img/students/lobby')

const guessConfigMap = new Map()

function getGuessConfig(e) {
    let key = e.message_type + e[e.isGroup ? 'group_id' : 'user_id']
    let config = guessConfigMap.get(key)
    if (config == null) {
        config = {
            // 是否正在游戏中
            playing: false,
            // 当前角色Id
            roleId: '',
            // 计时器timer
            timer: null,
            // 答案图片
            answer: null,
            // 删除自身，等待释放内存
            delete: () => guessConfigMap.delete(key),
        }
        guessConfigMap.set(key, config)
    }
    return config
}

async function replayAnswer(e, message, cfg, isReply = false) {
    clearTimeout(cfg.timer)
    cfg.playing = false
    let answer = await cfg.answer
    if (answer) {
        message.push('\n')
        message.push(segment.image(answer))
    }
    await e.reply(message, isReply)
    cfg.delete()
}
  
export class Caijuese extends plugin {
    constructor() {
        super({
            name: 'ba猜角色',
            dsc: '猜角色',
            event: 'message',
            priority: 1000,
            rule: [
                {
                    reg: ba + '猜(头像|角色)(普通|困难|地狱)?(模式)?',
                    fnc: 'guessAvatar'
                },
                {
                    reg: ba + '结束猜(头像|角色)',
                    fnc: 'end'
                },
                {
                    reg: '',
                    fnc: 'guessAvatarCheck',
                    log: false
                }
            ]
        })
        this.GAME_TIME_OUT = 30 //游戏时长（秒），默认 30 秒
        this.colors = [ // 随机背景颜色
            '#F5F5F5',
            '#FFEDED',
            '#F7F0D7',
            '#C0E2F5',
            '#FFCDCA',
            '#D0FFC3',
            '#D9D6FF',
        ]
        this.props = {
            flag: true,
            src: `file:///`,
            size: 0, 
            imgTop: 0, 
            imgLeft: 0, 
            imgColor: '',
            imgWidth: 0,
            imgHeight: 0,
            hardMode: false, 
            hellMode: false, 
            normalMode: true
        }
    }

    async end(e) {
        let config = getGuessConfig(e)
        clearTimeout(config.timer)
        config.delete()
        return await e.reply('已结束猜角色')
    }

    async guessAvatar(e) {
        let guessConfig = getGuessConfig(e)
        if (guessConfig.playing) {
            e.reply('猜角色游戏正在进行哦')
            return true
        }
        // 模式判断
        this.props.hardMode = e.msg.includes('困难')
        this.props.hellMode = e.msg.includes('地狱')
        // 既不是困难也不是地狱，那就是普通模式
        this.props.normalMode = (!this.props.hardMode && !this.props.hellMode)
        // 图片大小
        let helpText
        if (this.props.hardMode) {
            helpText = '%s\n在『困难模式』下，发送的图片将会变成黑白色。'
        } else if (this.props.hellMode) {
            helpText = '%s\n在『地狱模式』下，发送的图片将会变成反色。'
        } else {
            helpText = '%s'
        }
        helpText = helpText.replace('%s', `即将发送一张『随机学生』的『随机一角』，${this.GAME_TIME_OUT}秒之后揭晓答案！`)
        e.reply(helpText)
        let num = lodash.random(0, 100)

        if (num <= 30) {
            this.imgPath = portraitPath
        } else if (num > 30 && num <= 50) {
            this.imgPath = lobbyPath
        } else {
            this.imgPath = collectionPath
        }

        let {
            id: roleId,
            name: roleName,
            normalRoleId,
            normalRoleName
        } = Cfg.random_role(true)

        guessConfig.playing = true
        guessConfig.roleId = normalRoleId || roleId
        logger.mark('ID:', roleId)
        logger.mark('角色:', roleName)
        logger.mark('普通角色ID:', normalRoleId)
        logger.mark('普通角色:', normalRoleName)

        let filePath = path.join(this.imgPath, `${roleName}.webp`)
        let imgSrc = filePath
        let buffer = ''

        if (!fs.existsSync(filePath)) {
            if (this.imgPath == portraitPath) {
                imgSrc = `https://schale.gg/images/student/portrait/${roleId}.webp`  //立绘
            } else if(this.imgPath == lobbyPath) {
                imgSrc = `https://schale.gg/images/student/lobby/${roleId}.webp`  //大头照
            } else if(this.imgPath == collectionPath) {
                imgSrc = `https://schale.gg/images/student/collection/${roleId}.webp`  //记忆大厅
            }
            logger.debug('imgSrc:', imgSrc)
            const res = await fetch(imgSrc)
            buffer = await res.buffer()
            this.props.src = imgSrc
            await Bot.mkdir(path.dirname(filePath))
            fs.writeFileSync(filePath, buffer)
        } else {
            buffer = fs.readFileSync(filePath)
            this.props.src += imgSrc
        }

        let imgSize = sizeOf(buffer)
        let { props } = await this.getProps(buffer, imgSize)
        logger.debug(props)

        if (!props) {
            return await e.reply('呜~ 图片生成失败了…')
        }

        // 生成图片不阻断运行 
        let promise = render('html/Guessing_Characters/index.html', props)
        setTimeout(async () => {
            let base64 = await promise
            if (base64) {
                e.reply(segment.image(base64))
                props.flag = false
                guessConfig.normalMode = props.normalMode
                guessConfig.answer = await render('html/Guessing_Characters/index.html', props)
                guessConfig.timer = setTimeout(() => {
                    if (guessConfig.playing) {
                        replayAnswer(e, ['很遗憾，还没有人答对哦，正确答案是：' + roleName], guessConfig)
                    }
                }, this.GAME_TIME_OUT * 1000)
            } else {
                guessConfig.playing = false
                e.reply('呜~ 图片生成失败了… 请稍后重试 〒▽〒')
            }
        }, 1500)
        return true
    }

    async guessAvatarCheck(e) {
        let guessConfig = getGuessConfig(e)
        let { playing, roleId, normalMode } = guessConfig
        if (playing && roleId && e.msg) {
            let id = Cfg.getID(e.msg.trim())
            if (roleId == id) {
                await replayAnswer(e, ['恭喜你答对了！'], guessConfig, true)
                if (normalMode && lodash.random(0, 100) <= 8) {
                    e.reply('如果感觉太简单了的话，可以对我说“#ba猜角色困难模式”或者“#ba猜角色地狱模式”哦！')
                }
                return true
            }
            return false
        }
        return false
    }

    /** 判断区域是否透明 */
    async isTransparent(buffer, block) {
        return sharp(buffer)
          .extract(block) // 提取指定区域
          .raw()
          .toBuffer()
          .then((buffer) => {
            let isTransparent = true

            //在一个RGBA图像中，每个像素由四个值组成：红色（R），绿色（G），蓝色（B）和透明度（A）。这四个值通常都存储在一个连续的数组中，每个值占用一个字节。遍历这个数组时，需要每次跳过四个值，也就是一个像素。
            for (let i = 0; i < buffer.length; i += 4) {           
                // 获取像素的alpha值 (0-255)
                const alpha = buffer[i + 3]
    
                if (alpha > 127) {
                    isTransparent = false
                    break
                  }
              }
      
            if (isTransparent) {
              logger.debug(logger.yellow('这块区域没有内容'))
            } else {
              logger.debug(logger.yellow('这块区域有内容'))
            }
            return isTransparent
          })
          .catch(err => logger.error(err))
    }

    /** 计算透明像素百分比 */
    async tpPerc(buffer, block) {
        return sharp(buffer)
        .extract(block)
        .raw()
        .toBuffer()
        .then((buffer) => {
          let transparentPixelCount = 0
          const pixelCount = buffer.length / 4
      
          for (let i = 0; i < buffer.length; i += 4) {
            const alpha = buffer[i + 3]
            if (alpha <= 127) {
              transparentPixelCount++
            }
          }

          logger.debug('像素总量：', pixelCount, block.width * block.height)
      
          const transparentPixelPercentage = (transparentPixelCount / pixelCount) * 100
      
          logger.debug(logger.yellow(`当前区域透明像素百分比：${transparentPixelPercentage.toFixed(2)}%`))
          return transparentPixelPercentage
        })
        .catch(err => logger.error(err))
    }

    async getProps(buffer, imgSize, n = 0) {
        if (n > 9) return false  //防止无限递归
        let data = this.compute_blocks(imgSize)

        let transparent = await this.tpPerc(buffer, data.block)

        if (transparent > 70) {
            return await this.getProps(buffer, imgSize, ++n)
        }

        //if (await this.isTransparent(buffer, data.block)) {
        //    return await this.getProps(buffer, imgSize, ++n)
        //}
        return data
    }

    /** 计算区域 */
    compute_blocks(imgSize) {
        let wh, ratio, size
        
        // 减小生成过多空白的可能性
        let minTop = 0, limitTop = 0, minLeft = 0, limitLeft = 0

        if (this.imgPath == portraitPath) {
            wh = imgSize.width < imgSize.height ? imgSize.width : imgSize.height  //选择较小的那一边
            ratio = this.aspectRatio(imgSize.width, imgSize.height) > 70 ? lodash.random(0.05, 0.1) : lodash.random(0.1, 0.18) //根据高宽比例选择不同 区域 比例
            size = Math.round(wh * ratio)  //区域大小为较小那一边的百分之n
            minLeft = 30
            limitLeft = 30
        } else {
            size = Math.round(imgSize.width * 0.2)
            minTop = 50
        }

        logger.debug('高宽比',ratio)
        logger.debug('区域大小',size)
        logger.debug('图片信息',imgSize)

        // 算出图片位置
        let imgTop = lodash.random(minTop, imgSize.height - size - limitTop)
        let imgLeft = lodash.random(minLeft, imgSize.width - size - limitLeft)
        let imgColor = this.colors[lodash.random(0, this.colors.length - 1)]
        let props = {
            ...this.props,
            size: size,
            imgTop, imgLeft, imgColor,
            imgWidth: imgSize.width,
            imgHeight: imgSize.height
        }

        //logger.debug(props)

        let block = { 
            left: props.imgLeft, 
            top: props.imgTop, 
            width: size, 
            height: size
        }

        logger.debug('指定区域:', block)

        return { props, block }
    }

    /** 计算高宽比 越大越接近正方形 */
    aspectRatio(width, height) {
        return width < height ? Math.round(width / height * 100) : Math.round(height / width * 100)
    }
}
