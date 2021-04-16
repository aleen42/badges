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
 *      - Document: data.js
 *      - Author: aleen42
 *      - Description: a script for building README.md
 *      - Create Time: Apr 20th, 2017
 *      - Update Time: Apr 8th, 2021
 *
 *
 **********************************************************************/

const SUCCESS = `\x1b[32m${'success '}\x1b[0m`;

/**
 * [fs: file system module]
 * @type {[type]}
 */
const fs = require('fs');

/**
 * [exec: shell_exec module]
 * @type {[type]}
 */
const execSync = require('child_process').execSync;

/**
 * [data: data for badges]
 * @param  {[type]} 'data' [description]
 * @return {[type]}        [description]
 */
const data = require('./sorted-data');

const rootPath = './';
const distPath = `${rootPath}dist/`;
const outputPath = `${rootPath}src/`;
const linkPath = 'https://badges.aleen42.com/src/';

const suffix = (base, ...suffix) => [base, ...suffix].filter(x => x).join('_');

const generateBadge = (style, dfc) => (name, badgeItem, index) => {
    /** check whether badgeItem is an array */
    const {text, fileName: fname, color, skin, description} = badgeItem;

    /** extracting name from the file name */
    let fileName = /([\s\S]+)\.[\s\S]+/.exec(fname);
    if (fileName) {
        fileName = fileName[1];
    } else {
        return '';
    }

    /** generating */
    const outputName = `${suffix(`${fileName}${index !== void 0 ? `_${index + 1}` : ''}`, style, dfc ? 'dfc' : '')}.svg`;
    const output = `${outputPath}${outputName}`;

    if (!fs.existsSync(output)) {
        console.log(execSync(`badge ${[
            dfc ? '--dynamic-fore-color' : '',
            `-c ${color}`,
            `-s ${skin || 'dark'}`,
            `-t "${text || name}"`,
            `-p ${distPath}${fname}`,
            `--style=${style}`,
            `-o ${output}`,
        ].join(' ')}`, {
            encoding: 'utf8'
        }));
    }

    /** documenting */
    return `- [![${fileName}](${output})](${linkPath}${outputName}) ${description}\n`;
};

/** generate badges and document it */
const content = (style = '', dfc) => data.reduce((text, {name, data}) => text
    + `\n### ${name}\n\n`
    + Object.entries(data).reduce((text, [name, badgeItem]) => {
        const _generate = generateBadge(style, dfc);
        if (Object.prototype.toString.call(badgeItem) === '[object Array]') {
            /** badgeItem is an array */
            return text + badgeItem.map((item, j) => {
                return _generate(name, item, j);
            }).join('');
        } else {
            return text + _generate(name, badgeItem);
        }
    }, '')
    + '\n', fs.readFileSync(`${rootPath}/part/introduction.md`, 'utf8')
        .replace(/{{ARGS}}/, [
            '-t Alipay', '-c "#1CACEB"',  '-p alipay.svg',
            ...style ? [`--style=${style}`] : [],
            ...dfc ? [`--dynamic-fore-color`] : [],
            '-o output.svg',
        ].join(' '))
        .replace(/<!-- @IGNORE PREVIOUS: link -->/g, ''))
    + fs.readFileSync(`${rootPath}/part/footer.md`, 'utf8');

fs.writeFileSync(`${rootPath}README.md`, content());
fs.writeFileSync(`${rootPath}README_flat_square.md`, content('flat_square'));
fs.writeFileSync(`${rootPath}README_dfc.md`, content('', true));
fs.writeFileSync(`${rootPath}README_flat_square_dfc.md`, content('flat_square', true));
console.log(`${SUCCESS}Build completed`);
