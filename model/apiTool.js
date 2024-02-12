export default class apiTool {

  constructor() {}


  getUrlMap(data = {}) {

    let urlMap = {
/**gamekee */

        /** 活动 */
        activity: {
          url: `https://www.gamekee.com/v1/activity/get`,
          query: `start_at=${data.past}&end_at=${data.future}`
        },
        /** 个人主页 */
        user: {
          url: `https://ba.gamekee.com/v1/user/contentList`,
          query: `uid=${data.uid}&page_no=${data.page_no}`
        },

/**schale.gg */

        /** 语音 */
        voice: {
          url: `https://schale.gg/data/cn/voice.min.json`,
          query: ``
        },
        /** 学生列表 */
        students: {
          url: `https://schale.gg/data/${data.lang}/students.min.json`, 
          query: ``
        },
        /** 敌对角色列表 */
        enemies: {
          url: `https://schale.gg/data/cn/enemies.min.json`,
          query: ``
        },
        /** 各种类型 */
        index: {
          url: `https://schale.gg/data/cn/localization.min.json`,
          query: ``
        },


/** arona.icu */

        /** 排行榜 */
        rank: {
          url: 'https://api.arona.icu/api/v2/rank/list',
          body: {
            server: 1, //1国服，2B服
            season: "latest", //期数，latest默认当前最新，可填数值查询具体期数
            type: 2, //查询类型，1常规，2档线
            page: 1, //页
            size: 40 //单页大小默认10
            }
        },
        /** 学生列表 */
        student: {
          url: 'https://api.arona.icu/api/student/info/list',
          body: {
            server: 1 //1 国服，2 B服
            }
        },
        /** 档线 */
        dx: {
          url: 'https://api.arona.icu/api/v2/rank/list_top',
          body: {}
        },
        /** 第20001位用户信息 */
        '20001': {
          url: 'https://api.arona.icu/api/v2/rank/list_20001',
          body: {}
        },
        /** 活动信息 */
        act: {
          url: 'https://api.arona.icu/api/events/v2/info',
          body: {
            server: 1
            }
        },
        /** 抽奖概率 */
        draw: {
          url: 'https://api.arona.icu/api/events/v2/gachaProbability',
          body: {
            server: 1
            }
        },
        /** 轮播图 */
        banners: {
          url: 'https://api.arona.icu/api/events/v2/banners',
          body: {
            server: 1
            }
        },
        /** boss信息 */
        boss: {
          url: 'https://api.arona.icu/raids/boss/info',
          body: {}
        },
        /** 期数 */
        season: {
          url: 'https://api.arona.icu/api/season/list',
          body: {}
        },
        /** 根据id查询BOSS信息 */
        idBoss: {
          url: 'https://api.arona.icu/raids/boss/info/id',
          body: {
            boss_id: 1
          }
        },

    }
    return urlMap
  }
}
