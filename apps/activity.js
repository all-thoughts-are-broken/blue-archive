import activity from '../model/activity.js'

export class Activity extends plugin {
    constructor() {
        super({
            name: "BA活动日历",
            dsc: "BA活动日历",
            event: "message",
            priority: 1000,
            rule: [
                {
                    reg: "^#?[abAB]?((国|国际|日)服|全部)?活动(日历)?$",
                    fnc: "Calendar",
                }
            ],
        });
    }

  async Calendar(e) {
    let server = ''

    if (/国服/.test(e.msg))
      server = '国服'
    else if (/国际服/.test(e.msg))
      server = '国际服'
    else if (/日服/.test(e.msg))
      server = '日服'
    else if (!/活动|日历/.test(e.msg))
      return false

    return await new activity().activity(e, server)

  }
}
