# normalize-newline [![Build Status](https://travis-ci.org/sindresorhus/normalize-newline.svg?branch=master)](https://travis-ci.org/sindresorhus/normalize-newline)

> Normalize the [newline](http://en.wikipedia.org/wiki/Newline) characters of a string to `\n`


## Install

```
$ npm install --save normalize-newline
```


## Usage

```js
var normalizeNewline = require('normalize-newline');

normalizeNewline('foo\r\nbar\nbaz');
//=> foo\nbar\nbaz
```


## CLI

```
$ npm install --global normalize-newline
```

```
$ normalize-newline --help

  Usage
    $ normalize-newline <string>
    $ cat file.txt | normalize-newline

  Example
    $ cat mixed-newlines.txt | normalize-newline > lf-newlines.txt
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
