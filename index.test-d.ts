import {expectType} from 'tsd';
import normalizeNewline from './index.js';

expectType<string>(normalizeNewline('foo\r\nbar\nbaz'));
expectType<Buffer>(normalizeNewline(Buffer.from('foo\r\nbar\nbaz')));

