# normalize-newline

> Normalize the [newline](https://en.wikipedia.org/wiki/Newline) characters in a string to `\n`

Converts Windows-style CRLF (`\r\n`) line endings to Unix-style LF (`\n`). Works in both Node.js and browsers.

## Install

```sh
npm install normalize-newline
```

## Usage

```js
import normalizeNewline from 'normalize-newline';

normalizeNewline('foo\r\nbar\nbaz');
//=> 'foo\nbar\nbaz'

const uint8Array = new TextEncoder().encode('foo\r\nbar\nbaz');
const normalized = normalizeNewline(uint8Array);
new TextDecoder().decode(normalized);
//=> 'foo\nbar\nbaz'
```

## API

### normalizeNewline(input)

Normalizes CRLF (`\r\n`) to LF (`\n`). Other newline characters (`\r` or `\n` alone) are left unchanged.

#### input

Type: `string | Uint8Array`

Input to normalize.

## Related

- [normalize-newline-cli](https://github.com/sindresorhus/normalize-newline-cli) - CLI for this module
