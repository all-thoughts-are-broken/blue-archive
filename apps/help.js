import Help from "../model/help.js";
import { getV } from "../model/tools.js";

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
                {
                    reg: "^(/|#)*(ba|BA|Ba|bA)(插件)?版本$",
                    fnc: "version",
                },
            ],
        });
    }

    async help(e) {
        let data = await new Help(e).get(this.e);
        if (!data) return e.reply('未获取到帮助数据')
        if (!e.runtime) return e.reply('请更新至最新的云崽')
        return e.runtime.render('BlueArchive-plugin', 'html/help/help', data)
    }

    async version (e) {
        if (!e.runtime) return e.reply('请更新至最新的云崽')
        return await e.runtime.render('BlueArchive-plugin', 'html/version/version', await getV())
    }
}
