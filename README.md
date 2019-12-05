# musixmatch

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

NuxtJS module musixmatch API
The simplified NuxtJS module for request Musixmatch API support. Inspire by https://github.com/c0b41/musixmatch.
Request are pretty awesome, but I found myself using it into NuxtJS

Also check out [here](https://github.com/c0b41/musixmatch#methods) to using the methods that are very similar to request

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `musixmatch` dependency to your project

```bash
yarn add musixmatch # or npm install musixmatch
```

2. Add `musixmatch` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'musixmatch',
    // With options
    ['musixmatch', { /* module options */ }]
  ]
}
```
## Module Options

```js
{
  modules: [
    // Simple usage
    'musixmatch'
  ],
  // With options
  musixmatch: {
    apikey: '<Your Musixmatch API Key>' //Required
    rootURL: '<Musixmatch API version root URL>' //Optional default 'https://api.musixmatch.com/ws/1.1/'
    format: 'json' //optional default is json
    corsURL: '' //Optional if you have problem with CORS default is 'https://cors-anywhere.herokuapp.com/'
  }
}
```
## Quick Usage
Now you can use all Musixmatch services with `$this.musixmatch` and followed by method
```js

this.$musixmatch.chartArtists({ page: 1, page_size: 3, country: 'us'}).then(function (res) {
  if (res != null) {
    console.log(res.artist_list)
  }
})

```

## Methods
For more information how to use Methods and Params with example... please refer to https://github.com/c0b41/musixmatch#methods

## License

[MIT License](./LICENSE)

Copyright (c) IMAN

https://www.axfon.com

https://atel.us


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/musixmatch/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/musixmatch

[npm-downloads-src]: https://img.shields.io/npm/dt/musixmatch.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/musixmatch

[circle-ci-src]: https://img.shields.io/circleci/project/github/https://github.com.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/https://github.com

[codecov-src]: https://img.shields.io/codecov/c/github/https://github.com.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/https://github.com

[license-src]: https://img.shields.io/npm/l/musixmatch.svg?style=flat-square
[license-href]: https://npmjs.com/package/musixmatch
