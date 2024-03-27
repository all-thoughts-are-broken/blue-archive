import base from './base.js'
import Cfg from './Cfg.js'

export default class StudentList extends base {
    constructor(e) {
        super(e)
        this.model = 'student_list'
    }

    async student_list() {
        let studentData = Cfg.getConfig('student_list')
        return this.e.runtime.render('BlueArchive-plugin', 'html/student_list/student_list', {studentData})
    }
}
