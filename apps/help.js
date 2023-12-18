import Help from "../model/help.js";
import puppeteer from "../../../lib/puppeteer/puppeteer.js";
import md5 from "md5";

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
        if (!data) return;
        let img = await this.cache(data);
        await this.reply(img);
    }

    async cache(data) {
        let tmp = md5(JSON.stringify(data));
        if (help.helpData.md5 === tmp) {
            return help.helpData.img;
        }

        help.helpData.img = await puppeteer.screenshot("help", data);
        help.helpData.md5 = tmp;

        return help.helpData.img;
    }

    static helpData = {
        md5: "",
        img: "",
    };
}
