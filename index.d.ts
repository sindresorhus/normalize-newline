/**
Normalize the newline characters in a string to `\n`.

@example
```
import normalizeNewline from 'normalize-newline';

normalizeNewline('foo\r\nbar\nbaz');
//=> 'foo\nbar\nbaz'

normalizeNewline(Buffer.from('foo\r\nbar\nbaz')).toString();
//=> 'foo\nbar\nbaz'
```
*/
export default function normalizeNewline(input: string): string;
export default function normalizeNewline(input: Buffer): Buffer;
