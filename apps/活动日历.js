import plugin from '../../../lib/plugins/plugin.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export class example extends plugin {
  constructor() {
    super({
      name: 'BA活动日历',
      dsc: '去wiki去截图并返回图片',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: '^#BA活动日历$',
          fnc: 'Ba_Envent',
        },
      ],
    });
  }

  // 封装延时函数
  async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async Ba_Envent(e) {
    const puppeteer = require('puppeteer');

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
        '--single-process',
      ],
    });

    const page = await browser.newPage();

    // 修改页面的 navigator.language 属性
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', {
        get: function () {
          return 'zh-CN';
        },
      });
    });

    await page.goto('https://ba.gamekee.com/');
    await this.delay(7000); // 等待7秒

    await page.waitForSelector('.right-model-container');
    const element = await page.$('.right-model-container');

    if (element) {
      // 获取元素的位置和尺寸信息
      const box = await element.boundingBox();

      // 截取指定区域的截图
      if (box) {
        // 调整 clip 选项的数值，缩小或扩大截图的区域
        const newBox = {
          x: box.x - 10,         // 指定元素的左上角 x 坐标
          y: box.y - 10,         // 指定元素的左上角 y 坐标
          width: box.width + 59, // 指定元素的宽度
          height: box.height + 2500, // 指定元素的高度
        };

        await this.reply(segment.image(await page.screenshot({
          clip: newBox,
        })));
      } else {
        await this.reply('未找到指定元素');
      }
    } else {
      await this.reply('未找到指定元素');
    }

    await browser.close();
  }
}
