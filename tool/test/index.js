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
 *      - Description: this is the entrace of some tests
 *      - Create Time: Mar 20th, 2017
 *      - Update Time: Jun 26th, 2019
 *
 *
 **********************************************************************/

const {test} = require('../lib/index');

/**
 * [should: test framework module]
 * @type {Object}
 */
require('chai').should();

describe('tests', () => {
	it('test case', () => {
		test().should.contain('Usage: badge -t');
	});
});
