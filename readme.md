# normalize-newline [![Build Status](https://travis-ci.org/sindresorhus/normalize-newline.svg?branch=master)](https://travis-ci.org/sindresorhus/normalize-newline)

> Normalize the [newline](http://en.wikipedia.org/wiki/Newline) characters in a string to `\n`


## Install

```
$ npm install --save normalize-newline
```


## Usage

```js
const normalizeNewline = require('normalize-newline');

normalizeNewline('foo\r\nbar\nbaz');
//=> 'foo\nbar\nbaz'
```


## Related

- [normalize-newline-cli](https://github.com/sindresorhus/normalize-newline-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
