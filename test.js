import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('foo\r\nbar\r\nbaz\n'), 'foo\nbar\nbaz\n');
	t.is(fn('foo\nbar\nbaz\r\n'), 'foo\nbar\nbaz\n');
	t.is(fn('foo\nbar\n'), 'foo\nbar\n');
});
