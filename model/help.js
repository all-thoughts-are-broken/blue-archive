import base from './base.js'
import config from './Cfg.js'
import { getV } from "./tools.js";

export default class Help extends base {
    constructor(e) {
        super(e)
        this.model = 'help'
    }

    async get(e) {
        let helpData = config.getConfig('help')
        let version = await getV()

        return {
            ...version,
            saveId: 'help',
            quality: 100,
            helpData
        }
    }
}
