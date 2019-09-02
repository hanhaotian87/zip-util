[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/@hanhaotian/zip-util.svg
[npm-url]: https://www.npmjs.com/package/@hanhaotian/zip-util
[downloads-url]: https://www.npmjs.com/package/@hanhaotian/zip-util

# zip-util

This is a util for simple use zip unzip, it used archive.zip and unzipper.  
zip support file, files, string, buffer,stream as src

## Installation

```bash
$ npm install @hanhaotian/zip-util
```

## Quick Examples

### Extract to a directory
```js
let result = await zipUtil.zip(src, dest,newName)
let result = await zipUtil.unzip(src, dest)
```

zip complete 'result' will return 'complete' ,otherwise return error message .



## Licenses
See LICENCE

