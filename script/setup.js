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
 *      - Update Time: Jun 26th, 2019
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
const data = require('./data');

const rootPath = './';
const introductionPath = `${rootPath}introduction.md`;
const footerPath = `${rootPath}footer.md`;
const readmePath = `${rootPath}README.md`;
const distPath = `${rootPath}dist/`;
const outputPath = `${rootPath}src/`;
const linkPath = 'https://aleen42.github.io/badges/src/';

const generateBadge = function (name, badgeItem, index) {
    /** check whether badgeItem is an array */
    const {fileName: fname, color, skin, description} = index !== void 0 ? badgeItem[index] : badgeItem;

    /** extracting name from the file name */
    let fileName = /([\s\S]+)\.[\s\S]+/.exec(fname);
    if (fileName) {
        fileName = fileName[1];
    } else {
        return '';
    }

    /** generating */
    const outputName = index !== void 0 ? fileName + '_' + (index + 1) : fileName;
    const output = `${outputPath}${outputName}.svg`;

    if (!fs.existsSync(output)) {
        console.log(execSync(`badge -c ${color} -s ${skin || 'dark'} -t "${name}" -p ${distPath}${fname} -o ${output}`, {
            encoding: 'utf8'
        }));
    }

    /** documenting */
    return `- [![${fileName}](${outputPath}${outputName}.svg)](${linkPath}${outputName}.svg) ${description}\n`;
};

/** write introduction (remember to rewrite the file) */
let writingText = fs.readFileSync(introductionPath, 'utf8');
let i;

/** generate badges and document it */
for (i = 0; i < data.length; i++) {
    writingText += '\n### ' + data[i].name + '\n\n';

    for (var j in data[i].data) {
        var badgeItem = data[i].data[j];

        if (Object.prototype.toString.call(badgeItem) === '[object Array]') {
            /** badgeItem is an array */
            for (var k = 0, itemsLength = badgeItem.length; k < itemsLength; k++) {
                writingText += generateBadge(j, badgeItem, k);
            }
        } else {
            writingText += generateBadge(j, badgeItem);
        }
    }

    writingText += '\n';
}

/** write footer */
writingText += fs.readFileSync(footerPath, 'utf8');

fs.writeFileSync(readmePath, writingText);
console.log(`${SUCCESS}Build completed`);
