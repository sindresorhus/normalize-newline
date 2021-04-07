import test from 'ava';
import normalizeNewline from './index.js';

test('main', t => {
	t.is(normalizeNewline('foo\r\nbar\r\nbaz\n'), 'foo\nbar\nbaz\n');
	t.is(normalizeNewline('foo\nbar\nbaz\r\n'), 'foo\nbar\nbaz\n');
	t.is(normalizeNewline('foo\nbar\n'), 'foo\nbar\n');
	t.is(normalizeNewline(Buffer.from('foo\r\nbar\r\nbaz\n')).toString(), 'foo\nbar\nbaz\n');
	t.is(normalizeNewline(Buffer.from('foo\nbar\nbaz\r\n')).toString(), 'foo\nbar\nbaz\n');
	t.is(normalizeNewline(Buffer.from('foo\nbar\n')).toString(), 'foo\nbar\n');

	t.throws(() => {
		normalizeNewline(1);
	}, {
		message: 'Expected a `string` or a `Buffer`, got `number`'
	});
});
