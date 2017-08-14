'use strict';
const replaceBuffer = require('replace-buffer');

const CRLF = '\r\n';

module.exports = x => {
	if (typeof x !== 'string' && !Buffer.isBuffer(x)) {
		throw new TypeError(`Expected a \`string\` or a \`Buffer\`, got \`${typeof x}\``);
	}

	return Buffer.isBuffer(x) ? replaceBuffer(x, CRLF, '\n') : x.replace(new RegExp(CRLF, 'g'), '\n');
};
