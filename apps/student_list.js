import List from "../model/list.js";

export class list extends plugin {
    constructor(e) {
        super({
            name: "学生列表",
            dsc: "emmm",
            event: "message",
            priority: 500,
            rule: [
                {
                    reg: "^#?学生列表$",
                    fnc: "list",
                }
            ],
        });
    }

    async list(e) {
        let data = await new List(e).get();
        if (!data) return e.reply('未获取到列表数据')
        if (!e.runtime) return e.reply('请更新到最新的喵崽 or T崽')
        return e.runtime.render('BlueArchive-plugin', 'html/student_list/student_list', data)
    }
}
