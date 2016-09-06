import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('foo\r\nbar\r\nbaz\n'), 'foo\nbar\nbaz\n');
	t.is(fn('foo\nbar\nbaz\r\n'), 'foo\nbar\nbaz\n');
	t.is(fn('foo\nbar\n'), 'foo\nbar\n');
	t.is(new Buffer(fn('foo\r\nbar\r\nbaz\n')).toString(), 'foo\nbar\nbaz\n');
	t.is(new Buffer(fn('foo\nbar\nbaz\r\n')).toString(), 'foo\nbar\nbaz\n');
	t.is(new Buffer(fn('foo\nbar\n')).toString(), 'foo\nbar\n');
});
