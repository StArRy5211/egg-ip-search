'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.ip = '223.71.87.228';
    const location = await this.ctx.getLocation();
    this.ctx.body = location;
  }
}

module.exports = HomeController;
