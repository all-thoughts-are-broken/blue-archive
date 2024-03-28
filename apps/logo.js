import {ba} from '../model/Cfg.js'
import render from '../model/puppeteer/puppeteer.js'
import Cfg from '../model/Cfg.js'

const parameter = {
    transparentBg: true,
    bgColour: 'white',
    height: 250,
    width: 200,  //900
    graphOffset: {
        X: -15,
        Y: 0
    },
    colourL: '#128AFA',
    colourR: '#2B2B2B',
    outline: 'white'
}

export class BA_title extends plugin {
    constructor() {
        super({
            name:"ba标题制作",
            dsc:"标题制作",
            envent: "message",
            priority: 7000,
            rule: [
                {
                    reg: ba + '标题',
                    fnc:'BA_title'
                },
                {
                    reg: ba + '设置',
                    fnc:'BA_title_set'
                },
                {
                    reg: ba + '重置设置$',
                    fnc:'reset'
                }
            ]
        })
        this.parameter = Cfg.logo_set
        this.colourMap = {
            "天蓝": "#128AFA",
            "红": "red",
            "绿": "green",
            "蓝": "blue",
            "黄": "yellow",
            "紫": "purple",
            "青": "#00FFFF",
            "黑": "black",
            "白": "white",
            "灰": "#808080",
            "橙": "orange",
            "粉": "pink"
        }
    }
    
    get current_set() {
        return `\n透明背景：${this.parameter.transparentBg?'开':'关'}\n背景颜色：${this.parameter.bgColour}\n画布大小：${this.parameter.height} * ${this.parameter.width}\n图标位置：X:${this.parameter.graphOffset.X} Y:${this.parameter.graphOffset.Y}\n文字左：${this.parameter.colourL}\n文字右：${this.parameter.colourR}\n文字边框：${this.parameter.outline}`
    }

    async BA_title(e){
        const regx = new RegExp(`${ba}标题`, 'g')
        let title = e.msg.replace(regx, '').split(' ')
        let textL = title[0]
        let textR = title[1]

        logger.debug(title)

        //html参数
        let data = {
            omitBackground: this.parameter.transparentBg,
            imgType: this.parameter.transparentBg ? 'png' : 'jpeg',
            a: textL || '布鲁',
            b: textR || '阿凯！！！',
            ...this.parameter
        }

        //const page = await render('html/BA_logo/index.html', data)
        //const canvasHandle = await page.$('canvas')
        //const canvas = await page.evaluate(canvas => canvas.toDataURL(), canvasHandle)
        //const image = canvas.replace("data:image/png;base64,", "base64://")

        const image = await render('html/BA_logo/index.html', data)
        await e.reply(image)
        return true
    }

    async BA_title_set(e) {
        const regx = new RegExp(`${ba}设置|透明背景|背景颜色|画布大小|图标位置|文字左|文字右|文字边框`, 'g')
        let set = e.msg.replace(regx, '').trim()

        if (/透明背景/.test(e.msg)) {
            set.includes('开') ? this.parameter.transparentBg = true : this.parameter.transparentBg = false
        }
        else if (/背景颜色/.test(e.msg)) {
            this.parameter.bgColour = this.colourMap[set] || set
            logger.mark(`设置背景颜色:${set}`)
        }
        else if (/画布大小/.test(e.msg)) {
            set = set.split(' ')
            this.parameter.height = set[0]
            this.parameter.width = set[1]
            logger.mark(`设置画布大小: h:${set[0]} w:${set[1]}`)
        }
        else if (/图标位置/.test(e.msg)) {
            set = set.split(' ')
            this.parameter.graphOffset.X = set[0]
            this.parameter.graphOffset.Y = set[1]
            logger.mark(`设置图标位置: x：${set[0]} y：${set[1]}`)
        }
        else if (/文字左/.test(e.msg)) {
            this.parameter.colourL = this.colourMap[set] || set
            logger.mark(`设置文字左颜色:${set}`)
        }
        else if (/文字右/.test(e.msg)) {
            this.parameter.colourR = this.colourMap[set] || set
            logger.mark(`设置文字右颜色:${set}`)
        }
        else if (/文字边框/.test(e.msg)) {
            this.parameter.outline = this.colourMap[set] || set
            logger.mark(`设置文字边框颜色:${set}`)
        }

        Cfg.saveSet('logo', this.parameter)

        await e.reply(`当前设置：` + this.current_set)
        return true
    }

    async reset(e) {
        this.parameter = parameter
        Cfg.saveSet('logo', this.parameter)
        e.reply('重置完成：' + this.current_set)
        return true
    }

    
}