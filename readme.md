# normalize-newline

> Normalize the [newline](https://en.wikipedia.org/wiki/Newline) characters in a string to `\n`

## Install

```
$ npm install normalize-newline
```

## Usage

```js
import normalizeNewline from 'normalize-newline';

normalizeNewline('foo\r\nbar\nbaz');
//=> 'foo\nbar\nbaz'

normalizeNewline(Buffer.from('foo\r\nbar\nbaz')).toString();
//=> 'foo\nbar\nbaz'
```

## API

### normalizeNewline(input)

#### input

Type: `string | Buffer`

Input to normalize.

## Related

- [normalize-newline-cli](https://github.com/sindresorhus/normalize-newline-cli) - CLI for this module
