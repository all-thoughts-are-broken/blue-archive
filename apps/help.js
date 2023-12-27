import Help from "../model/help.js";

export class help extends plugin {
    constructor(e) {
        super({
            name: "BA插件帮助",
            dsc: "BA插件帮助",
            event: "message",
            priority: 500,
            rule: [
                {
                    reg: "^(/|#)*(ba|BA|Ba|bA)(插件)?(命令|帮助|功能|指令)$",
                    fnc: "help",
                },
            ],
        });
    }

    async help(e) {
        let help = new Help(e)
        let data = await help.get(this.e);
        if (!data) return '未获取到数据'
        return e.runtime.render('BlueArchive-plugin', 'html/help/help', data)
    }
}
