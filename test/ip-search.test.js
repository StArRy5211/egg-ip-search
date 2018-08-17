'use strict';

const mock = require('egg-mock');

describe('test/ip-search-tmp.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/ip-search-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect({
        isp: '中国移动北京分公司',
        province: '北京',
        city: '北京',
      })
      .expect(200);
  });
});
