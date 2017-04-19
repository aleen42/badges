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
 *      - Document: index.js
 *      - Author: aleen42
 *      - Description: the main entrance for badge
 *      - Create Time: Mar 20th, 2017
 *      - Update Time: Apr 6th, 2017
 *
 *
 **********************************************************************/

/**
 * [exec: shell_exec module]
 * @type {[type]}
 */
const execSync = require('child_process').execSync;

/**
 * [map: the map list of width for a single character]
 * @type {[type]}
 */
const map = require('./map.js');

/**
 * [fs: file system module]
 * @type {[type]}
 */
const fs = require('fs');

module.exports = {
	run: function (options) {
		/** options validation */
		if (options.text === void 0) {
			console.log('[Error: miss text]');
			return;
		}

		if (options.output === void 0) {
			console.log('[Error: miss output name]');
			return;
		}

		options.color = options.color === void 0 ? '000000' : options.color;
		options.path = options.path === void 0 ? '' : options.path;
		options.data = options.data === void 0 ? '' : options.data;
		options.y = options.y === void 0 ? false : !!options.y;

		/** calcuate the width of a given text */
		const textBlockWidth = this.calcWidthOfText(options.text);

		if (!textBlockWidth) {
			console.log('[Error: the text should be composed with Ascii characters]');
			return;
		}

		const imgBlockWidth = 25;
		const totalWidth = imgBlockWidth + textBlockWidth;
		const leftDistance = imgBlockWidth + textBlockWidth / 2 - 1;
		var imageData = '';

		if (options.path !== '') {
			if (/[\s\S]*?\.svg$/i.test(options.path)) {
				imageData = 'data:image/svg+xml;base64,' + fs.readFileSync(options.path).toString('base64');
			}

			if (/[\s\S]*?\.(?:gif|png|jpg|jpeg)$/i.test(options.path)) {
				imageData = 'data:image;base64,' + fs.readFileSync(options.path).toString('base64');
			}
		} else {
			imageData = options.data;
		}

		const content = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + totalWidth + '" height="20">\
				<linearGradient id="b" x2="0" y2="100%">\
					<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>\
					<stop offset="1" stop-opacity=".1"/>\
				</linearGradient>\
				<clipPath id="a">\
					<rect width="' + totalWidth + '" height="20" rx="3" fill="#fff"/>\
				</clipPath>\
				<g clip-path="url(#a)">\
					<path fill="#555" d="M0 0h' + imgBlockWidth + 'v20H0z"/>\
					<path fill="#' + options.color + '" d="M' + imgBlockWidth + ' 0h' + textBlockWidth + 'v20H25z"/>\
					<path fill="url(#b)" d="M0 0h' + totalWidth + 'v20H0z"/>\
				</g>\
				<g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="12">\
					<image x="5" y="3" width="14" height="14" xlink:href="' + imageData + '"/>\
					<text x="19.5" y="15" fill="#010101" fill-opacity=".3"></text>\
					<text x="19.5" y="14"></text>\
					<text x="' + leftDistance + '" y="15" fill="#010101" fill-opacity=".3">' + options.text + '</text>\
					<text x="' + leftDistance + '" y="14">' + options.text + '</text>\
				</g>\
			</svg>';

		/** start to create a local file */
		fs.open(options.output, 'wx', function (err, fd) {
			if (err) {
				if (!options.y && err.code === "EEXIST") {
					console.log('[Error: file already exists]');
					return;
				}
			}

			/** write to the file when it is not existed */
			fs.writeFile(options.output, content.split('\t').join(''), function (err) {
				if (err) {
					console.log('[Error: failed to create such file]');
					return;
				}

				console.log('[Success: creating completed]');
			});
		});
	},

	calcWidthOfText: function (text) {
		/** start to calculate the width of text */
		var width = 0;
		var len = text.length;

		const padding = 5;

		for (var i = 0; i < len; i++) {
			var chCode = text.charCodeAt(i);

			/** only support ascii characters temporary */
			if (chCode < 0 || chCode > 127) {
				return false;
			}

			var chLen = map[chCode];

			if (chLen) {
				width += chLen;
			}
		}

		return width + padding;
	},

	/**
	 * [test: test function of this module]
	 * @return {[type]}    [description]
	 */
	test: function () {
		return execSync('badge -h').toString();
	}
};
