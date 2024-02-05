const fs = require('fs');
const path = require('path');
const data = require('./data');
const TinyColor = require('@ctrl/tinycolor').default;

data.forEach(category => {
    const l = element => new TinyColor([].concat(element)[0].color).toHsl().l;
    const h = element => new TinyColor([].concat(element)[0].color).toHsl().h;
	category.data = Object.fromEntries(
	    Object.entries(category.data)
            .sort((a, b) => a[0] < b[0] ? -1 : a[0] === b[0] ? 0 : 1) // sort by name
            .sort((a, b) => l(a[1]) - l(b[1])) // sort by lightness
            .sort((a, b) => h(a[1]) - h(b[1])) // sort by hue
    )
});

const date = new Date();
const [y, m, d] = [
	date.getFullYear(),
	date.getMonth(),
	`${date.getDate()}`,
];

fs.writeFileSync(path.resolve(__dirname, './data.js'), `/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \\   ____  ____ __ ___     / ___\\/ \\   __   _  ____  _
 *      | |_| || |  / __ \\/ __ \\\\ '_  \\ _ / /    | |___\\ \\ | |/ __ \\| |
 *      |  _  || |__. ___/. ___/| | | ||_|\\ \\___ |  _  | |_| |. ___/| |
 *      |_/ \\_|\\___/\\____|\\____||_| |_|    \\____/|_| |_|_____|\\____||_|
 *
 *      ================================================================
 *                 More than a coder, More than a designer
 *      ================================================================
 *
 *
 *      - Document: data.js
 *      - Author: aleen42
 *      - Description: data for building badges
 *      - Create Time: Apr 20th, 2017
 *      - Update Time: ${[
	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
][m]} ${d + (/1$/.test(d) ? 'st' : /2$/.test(d) ? 'nd' : /3$/.test(d) ? 'rd' : 'th')}, ${y}
 *
 *
 **********************************************************************/

module.exports = ${
	JSON.stringify(data, (k, v) => v.color
		? JSON.stringify(v, null, 1)
			.replace(/^[\t ]*"[^:\n\r]+(?<!\\)":/gm, match => match.replace(/"/g, ''))
			.replace(/{\n\s/g, '{ ')
			.replace(/\n}/g, ' }')
			.replace(/\n/g, '')
		: v, 4)
		.replace(/\\"/g, '"')
		.replace(/"{/g, '{')
		.replace(/}"/g, '}')
		.replace(/"/g, '\'')
};
`, {encoding: 'utf8'});

module.exports = data;
