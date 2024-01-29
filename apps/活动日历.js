import plugin from '../../../lib/plugins/plugin.js';
import common from '../../../lib/common/common.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import {KnownDevices} from 'puppeteer';

export class example extends plugin {
  constructor() {
    super({
      name: 'BA活动日历',
      dsc: '去wiki去截图并返回图片',
      event: 'message',
      priority: 50,
      rule: [
        {
          reg: '^#(ba|BA|Ba|bA)活动日历$',
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
  const iPhone = KnownDevices['iPhone 12 Pro'];
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
  await page.emulate(iPhone);
  await page.goto('https://ba.gamekee.com/date');//目标网址
  await common.sleep(1000)

  // 删除碍事的元素
  await page.evaluate(() => {
    const selectors = ['.header', '.nav-body'];
    for (let selector of selectors) {
      const elements = document.querySelectorAll(selector);
      for (let element of elements) {
        element.remove();
      }
    }
  });

  const element = await page.$(".left-warp")

  await this.reply(segment.image(await element.screenshot()));
  }
}
