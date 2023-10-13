import base from './base.js'
import config from './index.js'
import cfg from '../../../lib/config/config.js'

export default class List extends base {
    constructor(e) {
        super(e)
        this.model = 'student_list'
    }

    static async get(e) {
        let html = new List(e)
        return await html.getData()
    }

    async getData() {
        let studentData = config.getConfig('student_list')

        let groupCfg = cfg.getGroup(this.group_id)

        if (groupCfg.disable && groupCfg.disable.length) {
            studentData.map((item) => {
                if (groupCfg.disable.includes(item.group)) {
                    item.disable = true
                }
                return item
            })
        }

        return {
            ...this.screenData,
            saveId: 'student_list',
            studentData
        }
    }
}
