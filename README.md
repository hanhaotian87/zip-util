[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/zip-util.svg
[npm-url]: https://npmjs.org/package/zip-util
[downloads-url]: https://npmjs.org/package/zip-util

# zip-util

This is a util for simple use zip unzip, it used archive.zip and unzipper.

## Installation

```bash
$ npm install zip-util
```

## Quick Examples

### Extract to a directory
```js
let result = await zipUtil.zip(src, dest)
let result = await zipUtil.unzip(src, dest)
```

zip complete 'result' will return 'complete' ,otherwise return error message .



## Licenses
See LICENCE

