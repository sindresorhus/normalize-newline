import test from 'ava';
import m from './';

test(t => {
	t.is(m('foo\r\nbar\r\nbaz\n'), 'foo\nbar\nbaz\n');
	t.is(m('foo\nbar\nbaz\r\n'), 'foo\nbar\nbaz\n');
	t.is(m('foo\nbar\n'), 'foo\nbar\n');
	t.is(new Buffer(m('foo\r\nbar\r\nbaz\n')).toString(), 'foo\nbar\nbaz\n');
	t.is(new Buffer(m('foo\nbar\nbaz\r\n')).toString(), 'foo\nbar\nbaz\n');
	t.is(new Buffer(m('foo\nbar\n')).toString(), 'foo\nbar\n');
	t.throws(m.bind(null, 1), 'Expected a `string` or a `Buffer`, got `number`');
});
