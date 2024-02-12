import ranking from '../model/ranking.js'
import { ba } from '../model/Cfg.js'

export class Ranking extends plugin {
    constructor() {
        super({
            name: "BA排行榜",
            dsc: "BA排行榜",
            event: "message",
            priority: 1000,
            rule: [
              {
                  reg: ba + "档线$",
                  fnc: "dx",
              }
            ],
        });
    }

  async dx(e) {
    return await new ranking(e)._dx()
  }
}
