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
declare function normalizeNewline(input: string): string;
declare function normalizeNewline(input: Buffer): Buffer;
export default normalizeNewline;
