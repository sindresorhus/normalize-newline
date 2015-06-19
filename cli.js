#!/usr/bin/env node
'use strict';
var getStdin = require('get-stdin');
var meow = require('meow');
var normalizeNewline = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ normalize-newline <string>',
		'  $ cat file.txt | normalize-newline',
		'',
		'Example',
		'  $ cat mixed-newlines.txt | normalize-newline > lf-newlines.txt'
	]
});

function init(data) {
	process.stdout.write(normalizeNewline(data));
}

if (process.stdin.isTTY) {
	if (!cli.input[0]) {
		console.error('Expected a string');
		process.exit(1);
	}

	init(cli.input[0]);
} else {
	getStdin(init);
}
