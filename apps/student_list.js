import List from "../model/list.js";
import puppeteer from "../../../lib/puppeteer/puppeteer.js";
import md5 from "md5";

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
                },
            ],
        });
    }

    async list(e) {
        let list = new List(e)
        let data = await list.get();
        if (!data) return;
        let img = await this.cache(data);
        await this.reply(img);
    }

    async cache(data) {
        let tmp = md5(JSON.stringify(data));
        if (list.studentData.md5 === tmp) {
            return list.studentData.img;
        }

        list.studentData.img = await puppeteer.screenshot("list", data);
        list.studentData.md5 = tmp;

        return list.studentData.img;
    }

    static studentData = {
        md5: "",
        img: "",
    };
}
