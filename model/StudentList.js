import base from './base.js'
import Cfg from './Cfg.js'

export default class StudentList extends base {
    constructor(e) {
        super(e)
        this.model = 'student_list'
    }

    async student_list() {
        let studentData = Cfg.getConfig('student_list')
        let img = await this.render('student_list', {studentData})
        return await this.e.reply(img)
    }
}
