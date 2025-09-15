import test from 'ava';
import normalizeNewline from './index.js';

test('string', t => {
	t.is(normalizeNewline('foo\r\nbar\r\nbaz'), 'foo\nbar\nbaz');
	t.is(normalizeNewline('foo\nbar\nbaz\r\n'), 'foo\nbar\nbaz\n');
	t.is(normalizeNewline('foo\nbar\n'), 'foo\nbar\n');
	t.is(normalizeNewline(''), '');
	t.is(normalizeNewline('no crlf here'), 'no crlf here');
	t.is(normalizeNewline('\r\n\r\n'), '\n\n');
	t.is(normalizeNewline('lone\rcarriage\nreturn'), 'lone\rcarriage\nreturn');
});

test('Uint8Array', t => {
	// Foo\r\nbar -> foo\nbar
	t.deepEqual(
		normalizeNewline(new Uint8Array([102, 111, 111, 13, 10, 98, 97, 114])),
		new Uint8Array([102, 111, 111, 10, 98, 97, 114]),
	);

	// Multiple CRLF: \r\n\r\n -> \n\n
	t.deepEqual(
		normalizeNewline(new Uint8Array([13, 10, 13, 10])),
		new Uint8Array([10, 10]),
	);

	// Empty array
	t.deepEqual(normalizeNewline(new Uint8Array([])), new Uint8Array([]));

	// No CRLF
	t.deepEqual(
		normalizeNewline(new Uint8Array([102, 111, 111])),
		new Uint8Array([102, 111, 111]),
	);

	// Lone \r at end (edge case for i+1 check)
	t.deepEqual(
		normalizeNewline(new Uint8Array([102, 111, 111, 13])),
		new Uint8Array([102, 111, 111, 13]),
	);

	// Lone \r and \n
	t.deepEqual(
		normalizeNewline(new Uint8Array([13, 10, 13, 11, 10])),
		new Uint8Array([10, 13, 11, 10]),
	);
});

test('error handling', t => {
	t.throws(() => normalizeNewline(1), {
		message: 'Expected a `string` or a `Uint8Array`, got `number`',
	});
	t.throws(() => normalizeNewline(null), {
		message: 'Expected a `string` or a `Uint8Array`, got `object`',
	});
});
