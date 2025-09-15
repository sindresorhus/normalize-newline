/**
Normalizes CRLF (`\r\n`) to LF (`\n`). Other newline characters (`\r` or `\n` alone) are left unchanged.

@example
```
import normalizeNewline from 'normalize-newline';

normalizeNewline('foo\r\nbar\nbaz');
//=> 'foo\nbar\nbaz'

const uint8Array = new TextEncoder().encode('foo\r\nbar\nbaz');
const normalized = normalizeNewline(uint8Array);
new TextDecoder().decode(normalized);
//=> 'foo\nbar\nbaz'
```
*/
export default function normalizeNewline(input: string): string;
export default function normalizeNewline(input: Uint8Array): Uint8Array;
