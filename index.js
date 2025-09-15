const CRLF_REGEX = /\r\n/g;
const CARRIAGE_RETURN = 13; // \r
const LINE_FEED = 10; // \n

export default function normalizeNewline(input) {
	if (typeof input === 'string') {
		return input.replaceAll(CRLF_REGEX, '\n');
	}

	if (input instanceof Uint8Array) {
		const result = [];
		let i = 0;

		while (i < input.length) {
			if (input[i] === CARRIAGE_RETURN && input[i + 1] === LINE_FEED) {
				result.push(LINE_FEED);
				i += 2;
			} else {
				result.push(input[i]);
				i++;
			}
		}

		return new Uint8Array(result);
	}

	throw new TypeError(`Expected a \`string\` or a \`Uint8Array\`, got \`${typeof input}\``);
}
