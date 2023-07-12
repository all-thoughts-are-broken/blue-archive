// 主库
import Version from "../model/version.js";
import config from "../model/index.js";
import puppeteer from "../../../lib/puppeteer/puppeteer.js";
import lodash from "lodash";

import { exec, execSync } from "node:child_process";

/**
 * 处理插件更新1
 */
export class update extends plugin {
    constructor() {
        super({
            name: "更新插件",
            dsc: "更新插件",
            event: "message",
            priority: 4000,
            rule: [
                {
                    reg: "^#*BA(插件)?版本$",
                    fnc: "version",
                },
                {
                    /** 命令正则匹配 */
                    reg: "^#*BA(插件)?(强制更新|更新)$",
                    /** 执行方法 */
                    fnc: "updateBA",
                },
            ],
        });

        this.versionData = config.getConfig("version");
    }

    /**
     * rule - 插件版本信息
     */
    async version() {
        const data = await new Version(this.e).getData(this.versionData.slice(0, 3));
        let img = await puppeteer.screenshot("version", data);
        this.e.reply(img);
    }

    /**
     * 更新主程序
     * @param e
     * @returns {Promise<boolean>}
     */
    async rconsoleUpdate(e) {
        if (!e.isMaster) {
            await e.reply("你不是主人哦");
            return true;
        }

        let isForce = !!e.msg.includes("强制");

        const pluginName = "BlueArchive-plugin";

        let command = `git -C ./plugins/${pluginName}/ pull --no-rebase`;
        if (isForce) {
            command = `git -C ./plugins/${pluginName}/ checkout . && ${command}`;
        }
        this.oldCommitId = await this.getCommitId(pluginName);
        await e.reply("阿罗娜正在更新哦，请稍等");

        let ret = await this.execSync(command);
        if (ret.error) {
            e.reply(`失败了！重试一下吧！`);
            await this.gitErr(ret.error, ret.stdout);
            return false;
        }
        const time = await this.getTime(pluginName);
        if (/Already up|已经是最新/g.test(ret.stdout)) {
            e.reply(`BA插件已经是最新: ${this.versionData[0].version}`);
        } else {
            this.isUp = true;
            e.reply(`BA插件更新成功，最后更新时间：${time}`);
            e.reply(await this.getLog(pluginName));
        }
        return true;
    }

    async getCommitId(pluginName) {
        // let cm = 'git rev-parse --short HEAD'
        const command = `git -C ./plugins/${pluginName}/ rev-parse --short HEAD`;
        let commitId = execSync(command, { encoding: "utf-8" });
        commitId = lodash.trim(commitId);
        return commitId;
    }

    async execSync(cmd) {
        return new Promise((resolve, reject) => {
            exec(cmd, { windowsHide: true }, (error, stdout, stderr) => {
                resolve({ error, stdout, stderr });
            });
        });
    }

    async getTime(pluginName) {
        const cm = `cd ./plugins/${pluginName}/ && git log -1 --oneline --pretty=format:"%cd" --date=format:"%m-%d %H:%M"`;
        let time = "";
        try {
            time = execSync(cm, { encoding: "utf-8" });
            time = lodash.trim(time);
        } catch (error) {
            time = "获取时间失败";
        }
        return time;
    }

    async getLog(pluginName) {
        let cm =
            'git log  -20 --oneline --pretty=format:"%h||[%cd]  %s" --date=format:"%m-%d %H:%M"';
        if (pluginName) {
            cm = `cd ./plugins/${pluginName}/ && ${cm}`;
        }
        let logAll;
        try {
            logAll = execSync(cm, { encoding: "utf-8" });
        } catch (error) {
            this.reply(error.toString(), true);
        }
        if (!logAll) return false;
        logAll = logAll.split("\n");
        let log = [];
        for (let str of logAll) {
            str = str.split("||");
            if (str[0] === this.oldCommitId) break;
            if (str[1].includes("Merge branch")) continue;
            log.push(str[1]);
        }
        let line = log.length;
        log = log.join("\n");
        if (log.length <= 0) return "";
        logger.info(`${pluginName || "Yunzai-Bot"}更新日志，共${line}条\n${log}`);
        return log;
    }

    async gitErr(err, stdout) {
        let msg = "更新失败！";
        let errMsg = err.toString();
        stdout = stdout.toString();
        if (errMsg.includes("Timed out")) {
            await this.reply(msg + `\n连接超时：${errMsg.match(/'(.+?)'/g)[0].replace(/'/g, "")}`);
        } else if (/Failed to connect|unable to access/g.test(errMsg)) {
            await this.reply(msg + `\n连接失败：${errMsg.match(/'(.+?)'/g)[0].replace(/'/g, "")}`);
        } else if (errMsg.includes("be overwritten by merge")) {
            await this.reply(
                msg +
                    `存在冲突：\n${errMsg}\n` +
                    "请解决冲突后再更新，或者执行#强制更新，放弃本地修改",
            );
        } else if (stdout.includes("CONFLICT")) {
            await this.reply([
                msg + "存在冲突\n",
                errMsg,
                stdout,
                "\n请解决冲突后再更新，或者执行#强制更新，放弃本地修改",
            ]);
        } else {
            await this.reply([errMsg, stdout]);
        }
    }
}
