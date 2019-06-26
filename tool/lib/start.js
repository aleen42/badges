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
 *      - Update Time: Jun 26th, 2019
 *
 *
 **********************************************************************/

const stats = require('../../package.json');
const enhance = str => `\x1b[32m${str}\x1b[0m`;
const brand = `
                                                                  _
      _____  _                           ____  _                 |_|
     |  _  |/ \\   ____  ____ __ ___     / ___\\/ \\   __   _  ____  _
     | |_| || |  / __ \\/ __ \\\\ '_  \\ _ / /    | |___\\ \\ | |/ __ \\| |
     |  _  || |__. ___/. ___/| | | ||_|\\ \\___ |  _  | |_| |. ___/| |
     |_/ \\_|\\___/\\____|\\____||_| |_|    \\____/|_| |_|_____|\\____||_| 
                                                                     
     ================================================================
                More than a coder, More than a designer              
     ================================================================
`;

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
		['s', 'skin=[Skin]', '\tThe skin of your badge'],
		['d', 'data=[Image Data Value with base64 encoding]', '\tThe image data value of your badge'],
		['p', 'path=[SVG Path]', '\tLocal SVG file'],
		['o', 'output=[File Name]', '\tThe image data value of your badge'],
		['y', '', '\tOverride'],
		['v', 'version', '\tShow current version'],
		['h' , 'help', '\tTutorial for this command']
	])
    .setHelp(`${brand}
\tVersion: ${enhance(stats.version)}
\tUsage: badge -t ${enhance('<text>')} -o ${enhance('<output-file>')} [-c ${enhance('<color-value>')} -p ${enhance('<image-path>')}]

[[OPTIONS]]`)
	.bindHelp()
	.parseSystem();

const {version} = opt.options;
if (version) {
    console.log(`${brand}
\t\tBadges v${enhance(stats.version)}, Copyright © aleen42 2012-2019`);
	return;
}

badge.run(opt.options);
