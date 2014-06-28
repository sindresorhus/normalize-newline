'use strict';
var assert = require('assert');
var normalizeNewline = require('./');

it('should normalize the newline character to lf', function () {
	assert.equal(normalizeNewline('foo\r\nbar\r\nbaz\n'), 'foo\nbar\nbaz\n');
	assert.equal(normalizeNewline('foo\nbar\nbaz\r\n'), 'foo\nbar\nbaz\n');
	assert.equal(normalizeNewline('foo\nbar\n'), 'foo\nbar\n');
});
