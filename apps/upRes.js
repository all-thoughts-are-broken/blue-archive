import { ba, extraRes_path } from '../model/Cfg.js'
import { exec, execSync } from "child_process"
import fs from "fs"

let uping = false

export class UpRes extends plugin {
    constructor() {
        super({
            name: "BA资源",
            dsc: "BA资源",
            event: "message",
            priority: 1000,
            rule: [
            {
              reg: ba + `(强制)?更新资源$`,
              fnc: "upRes",
            },
            {
              reg: ba + "?下载bgm$",
              fnc: "upRes",
            },
            ]
        })
    }

  async upRes(e) {
    if (uping) {
      await e.reply("已有命令更新中..请勿重复操作")
      return true
    }

    let cmd = ``
    if (fs.existsSync(`${extraRes_path}.git`)) {
      cmd = `git pull`
      if (e.msg.includes("强制")) {
        cmd = "git checkout . && git pull"
        e.reply("正在执行强制更新操作，请稍等")
      } else {
        e.reply("正在执行更新操作，请稍等")
      }
      uping = true

      exec(cmd, {
		  	cwd: extraRes_path
		  }, function(error, stdout, stderr) {
		  	logger.mark(stdout)
		  	if (/Already up to date/.test(stdout)||stdout.includes("最新")) {
		  		e.reply("目前所有资源都已经是最新了~")
          uping = false
		  		return true
		  	}

        let numbgm = [...stdout.matchAll(/create mode \d* audio\/bgm\//g)]

		  	if (numbgm && numbgm.length != 0) {
		  		e.reply(`报告主人，更新成功，此次更新了${numbgm.length}首bgm~`)
          uping = false
		  		return true
		  	}
		  	if (error) {
		  		e.reply("更新失败！\nError code: " + error.code + "\n" + error.stack + "\n 请稍后重试。")
		  	} else {
		  		e.reply("ba资源更新成功~")
		  	}
		  })
    } else {
      cmd = `git clone --depth 1 https://gitee.com/molan10406/ba_resources.git "${extraRes_path}"`
		  // cmd = `git clone --depth 1 https://gitee.com/molan10406/ba_resources.git "${extraRes_path}"`
		  e.reply("开始尝试拉取资源，可能会需要一段时间，请耐心等待~")
      uping = true
		  exec(cmd, function(error, stdout, stderr) {
        logger.mark(stdout)
		  	if (error) {
		  		e.reply("ba资源包安装失败！\nError code: " + error.code + "\n" + error.stack + "\n 请稍后重试。")
		  	} else {
		  		e.reply("ba资源包安装成功！您后续也可以通过 #ba更新资源 命令来更新资源")
		  	}
		  })
    }

    uping = false
    return true
  }
}
