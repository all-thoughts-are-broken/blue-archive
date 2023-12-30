import base from './base.js'
import config from './Cfg.js'

export default class Help extends base {
    constructor(e) {
        super(e)
        this.model = 'help'
    }

    async get(e) {
        let helpData = config.getConfig('help')

        const versionData = config.getdefSet('version')

        const version =
            (versionData && versionData.length && versionData[0].version) || '1.0.0'

        return {
            ...this.screenData,
            saveId: 'help',
            quality: 100,
            version,
            helpData
        }
    }
}
