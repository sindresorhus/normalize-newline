'use strict';

var replaceBuf = function (buf) {
	var crlf = '\r\n';
	var i = buf.indexOf(crlf);

	if (i === -1) {
		return buf;
	}

	var start = buf.slice(0, i);
	var end = replaceBuf(buf.slice(i + crlf.length));
	var len = i + start.length + end.length;

	return Buffer.concat([start, '\n', end], len);
};

module.exports = function (x) {
	if (typeof x !== 'string' && !Buffer.isBuffer(x)) {
		throw new TypeError('Expected a string or a buffer');
	}

	return Buffer.isBuffer(x) ? replaceBuf(x) : x.replace(/\r\n/g, '\n');
};
