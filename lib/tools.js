import fs from 'fs';
const _path = process.cwd();
export const rulePrefixA = '/(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23)'
export const rulePrefixB = '(1|2|3|4|5)(H?)$'

/**
 * 发送关卡攻略
 * @param zhangJie 第某章
 * @param juTi 具体文件夹，如1-1
 */
function sendpic(zhangJie = '', juTi = '') {
    let msgs = [`这是第${zhangJie}章${juTi}攻略`];
    const folderPath = `plugins/BlueArchive-plugin/resources/关卡攻略/${zhangJie}章/${juTi}`;
  
    try {
      const files = fs.readdirSync(folderPath);
      files.forEach(file => {
        msgs.push(
          segment.image(`file:///${_path}/plugins/BlueArchive-plugin/resources/关卡攻略/${zhangJie}章/${juTi}/${file}`)
        );
      });
    } catch (err) {
      logger.info(`无法读取文件夹：${err}`);
    }
  
    return msgs;
  }
  
  export default { sendpic };