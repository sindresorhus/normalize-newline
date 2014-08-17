#!/usr/bin/env node
'use strict';
var stdin = require('get-stdin');
var argv = require('minimist')(process.argv.slice(2));
var pkg = require('./package.json');
var normalizeNewline = require('./');
var input = argv._[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    normalize-newline <string>',
		'    cat file.txt | normalize-newline',
		'',
		'  Example',
		'    cat mixed-newlines.txt | normalize-newline > lf-newlines.txt',
	].join('\n'));
}

function init(data) {
	process.stdout.write(normalizeNewline(data));
}

if (argv.help) {
	help();
	return;
}

if (argv.version) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}

	init(input);
} else {
	stdin(init);
}
