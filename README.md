# egg-ip-search

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-ip-search.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-ip-search
[travis-image]: https://img.shields.io/travis/eggjs/egg-ip-search.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-ip-search
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-ip-search.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-ip-search?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-ip-search.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-ip-search
[snyk-image]: https://snyk.io/test/npm/egg-ip-search/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-ip-search
[download-image]: https://img.shields.io/npm/dm/egg-ip-search.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-ip-search

<!--
Description here.
-->

## Install

```bash
$ npm i egg-ip-search --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.ipSearch = {
  enable: true,
  package: 'egg-ip-search',
};
```

```js
// {app_root}/controller/xxx.js
const location = await this.ctx.getLocation();
const location = await this.ctx.getLocationByIP('223.71.87.228');
```


see [config/config.default.js](config/config.default.js) for more detail.

## Example



```js
const location = await this.ctx.getLocationByIP('223.71.87.228'); // { province: "北京", city: "北京", isp: "中国移动北京分公司" }
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
