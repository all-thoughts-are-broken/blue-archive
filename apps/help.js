import Help from "../model/help.js"

export class Help_ extends plugin {
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
        this.Help = new Help(e)
    }

    async help() {
        return this.Help.help()
    }

    async version () {
        return this.Help.version()
    }
}
