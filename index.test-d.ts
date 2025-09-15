import {expectType} from 'tsd';
import normalizeNewline from './index.js';

expectType<string>(normalizeNewline('foo\r\nbar\nbaz'));
expectType<Uint8Array>(normalizeNewline(new Uint8Array([102, 111, 111, 13, 10])));
