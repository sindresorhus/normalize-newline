'use strict';
var CRLF = '\r\n';

var replaceBuf = function (buf) {
	var i = buf.indexOf(CRLF);

	if (i === -1) {
		return buf;
	}

	var start = buf.slice(0, i);
	var end = replaceBuf(buf.slice(i + CRLF.length));
	var len = i + start.length + end.length;

	return Buffer.concat([start, '\n', end], len);
};

module.exports = function (x) {
	if (typeof x !== 'string' && !Buffer.isBuffer(x)) {
		throw new TypeError('Expected a string or a buffer');
	}

	return Buffer.isBuffer(x) ? replaceBuf(x) : x.replace(new RegExp(CRLF, 'g'), '\n');
};
