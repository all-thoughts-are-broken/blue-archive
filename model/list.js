import base from './base.js'
import config from './Cfg.js'

export default class List extends base {
    constructor(e) {
        super(e)
        this.model = 'student_list'
    }

    async get(e) {
        let studentData = config.getConfig('student_list')

        return {
            ...this.screenData,
            saveId: 'student_list',
            studentData
        }
    }
}
