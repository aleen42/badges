#! /usr/bin/env node

/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *      ================================================================
 *                 More than a coder, More than a designer
 *      ================================================================
 *
 *
 *      - Document: start.js
 *      - Author: aleen42
 *      - Description: for shell script to use
 *      - Create Time: Mar 20th, 2017
 *      - Update Time: Apr 6th, 2017
 *
 *
 **********************************************************************/

/**
 * [badge: import the module]
 * @type {Object}
 */
const badge = require('./index');

/**
 * [opt: help options]
 * @type {[type]}
 */
const opt = require('node-getopt')
	.create([
		['t', 'text=[Any text]', '\tThe text of your badge'],
		['c', 'color=[RGB value]', '\tThe color of your badge'],
		['d', 'data=[Image Data Value with base64 encoding]', '\tThe image data value of your badge'],
		['p', 'path=[SVG Path]', '\tLocal SVG file'],
		['o', 'output=[File Name]', '\tThe image data value of your badge'],
		['y', '', '\tOverride'],
		['v', 'version', '\tShow current version'],
		['h' , 'help', '\tTutorial for this command']
	])
	.setHelp('\
\n\n\nUseAge: badge -t <text> -o <output-file> [-c <color-value> -p <image-path>]\
\n                                                                  _\
\n      _____  _                           ____  _                 |_|\
\n     |  _  |/ \\   ____  ____ __ ___     / ___\\/ \\   __   _  ____  _\
\n     | |_| || |  / __ \\/ __ \\\\ \'_  \\ _ / /    | |___\\ \\ | |/ __ \\| |\
\n     |  _  || |__. ___/. ___/| | | ||_|\\ \\___ |  _  | |_| |. ___/| |\
\n     |_/ \\_|\\___/\\____|\\____||_| |_|    \\____/|_| |_|_____|\\____||_| \
\n                                                                     \
\n     ================================================================\
\n                More than a coder, More than a designer              \
\n     ================================================================\n\n\n\n[[OPTIONS]]\n\n\n\n')
	.bindHelp()
	.parseSystem();

if (opt.options.version) {
	console.log('\n\
\n                                                                  _\
\n      _____  _                           ____  _                 |_|\
\n     |  _  |/ \\   ____  ____ __ ___     / ___\\/ \\   __   _  ____  _\
\n     | |_| || |  / __ \\/ __ \\\\ \'_  \\ _ / /    | |___\\ \\ | |/ __ \\| |\
\n     |  _  || |__. ___/. ___/| | | ||_|\\ \\___ |  _  | |_| |. ___/| |\
\n     |_/ \\_|\\___/\\____|\\____||_| |_|    \\____/|_| |_|_____|\\____||_| \
\n                                                                     \
\n     ================================================================\
\n                More than a coder, More than a designer              \
\n     ================================================================\
\n\
\n         Badges Generator v1.1.4, Copyright © aleen42 2012-2017\n\n');
	return;
}

badge.run(opt.options);
