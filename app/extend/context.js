'use strict';

const QQwry = require('../../lib/qqwry');
const Taobao = require('../../lib/taobao');
const util = require('../../lib/util');

const qqwry = new QQwry();
const taobao = new Taobao();

module.exports = {
  async getLocation() {
    const ip = this.ip;
    const result = {};

    if (ip && !util.isLAN(ip)) {
      try {
        let geo = await qqwry.search(ip);

        if (!geo) {
          geo = await taobao.search(ip);
        }

        return geo;
      } catch (error) {
        console.warn('search ip geo fail. ', error);
        return result;
      }
    }

    return result;
  },
};
