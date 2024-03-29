import base from './base.js'
import config from './Cfg.js'

export default class Help extends base {
    constructor(e) {
        super(e)
        this.model = 'help'
    }

    async help() {
        let img = await this.render('help', { 
            quality: 100, 
            helpData: config.getConfig('help')
        })
        return await this.e.reply(img)
    }

    async version() {
        this.model = 'version'
        let img = await this.render('version', this.V)
        return await this.e.reply(img)
    }
}
