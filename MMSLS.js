/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22960227&pid=9700e600d3dc2b62438b62a8f610f84f&tid=5c7e90b9519d722ca1947ab465eb90d7",
    "https://www.maimemo.com/share/page?uid=22960227&pid=9700e600d3dc2b62438b62a8f610f84f&tid=5c7e90b9519d722ca1947ab465eb90d7",
    "https://www.maimemo.com/share/page?uid=22960227&pid=9700e600d3dc2b62438b62a8f610f84f&tid=5c7e90b9519d722ca1947ab465eb90d7",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22960227&pid=82383636ad6964c0c066bc244b14ac1b&tid=c43155646aefab4f186ddd8bf067c5e1",
    "https://www.maimemo.com/share/page?uid=22960227&pid=82383636ad6964c0c066bc244b14ac1b&tid=c43155646aefab4f186ddd8bf067c5e1",
    "https://www.maimemo.com/share/page?uid=22960227&pid=82383636ad6964c0c066bc244b14ac1b&tid=c43155646aefab4f186ddd8bf067c5e1",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
