import replaceBuffer from 'replace-buffer';

const CRLF = '\r\n';

export default function normalizeNewline(input) {
	if (typeof input !== 'string' && !Buffer.isBuffer(input)) {
		throw new TypeError(`Expected a \`string\` or a \`Buffer\`, got \`${typeof input}\``);
	}

	return Buffer.isBuffer(input) ? replaceBuffer(input, CRLF, '\n') : input.replace(new RegExp(CRLF, 'g'), '\n');
}
