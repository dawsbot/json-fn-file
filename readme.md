# json-fn-file
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![XO code style][xo-image]][xo-url]

> Apply a function to a json file and save to a file

## Install

```
npm install --save json-fn-file
```

## Usage

```js
const jsonFnFile = require('json-fn-file');

// Assuming "input.json" contains:
//  {
//    "key1": "Value1",
//    "key2": "Value2"
//  }
jsonFnFile('input.json', 'output.txt', input => Object.keys(input));
//=> 'key1,key2'
```

## API

### jsonFnFile(inputFile, outputFile, fn)

#### Arguments

| Name       | Description                     |   Type   |  Default  |
| -------    | ------------------------------- | -------- |  -------  |
| inputFile  | File path to input **json** file    | `string` | None (required) |
| outputFile | File path to output file        | `string` | None (required) |
| fn         | Converter function to run on json | `function` | (in) => (in) |

Your function will be fed one argument, the json content of `inputFile`.

#### Returns

Type: `object`

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

[npm-image]: https://badge.fury.io/js/json-fn-file.svg
[npm-url]: https://npmjs.org/package/json-fn-file
[travis-image]: https://travis-ci.org/dawsbot/json-fn-file.svg?branch=master
[travis-url]: https://travis-ci.org/dawsbot/json-fn-file
[xo-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
