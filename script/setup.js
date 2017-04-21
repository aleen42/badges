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
 *      - Update Time: Apr 20th, 2017
 *
 *
 **********************************************************************/

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
const introductionPath = rootPath + 'introduction.md';
const footerPath = rootPath + 'footer.md';
const readmePath = rootPath + 'README.md';
const distPath = rootPath + 'dist/';
const outputPath = rootPath + 'src/';
const imgPath = 'https://rawgit.com/aleen42/badges/master/src/';
const cdnPath = 'https://cdn.rawgit.com/aleen42/badges/master/src/';

const generateBadge = function (name, badgeItem, index) {
    /** check whether badgeItem is an array */
    var item = index !== void 0 ? badgeItem[index] : badgeItem;

    /** extracting name from the file name */
    var fileName = /([\s\S]+)\.[\s\S]+/.exec(item.fileName)
    if (fileName) {
        fileName = fileName[1];
    } else {
        return '';
    }

    /** generating */
    var outputName = index !== void 0 ? fileName + '_' + (index + 1) : fileName;
    var output = outputPath + outputName + '.svg';

    if (!fs.existsSync(output)) {
        console.log(execSync('badge -c ' + item.color + ' -t "' + name + '" -p ' + (distPath + item.fileName) + ' -o ' + output, {
            encoding: 'utf8'
        }));
    }

    /** documenting */
    var imgUrl = imgPath + outputName + '.svg';
    var cdnUrl = cdnPath + outputName + '.svg';

    return '- [![' + fileName + '](' + imgUrl + ')](' + cdnUrl + ') ' + item.description + '\n';
};

var writingText = '';
var i;
var categoryLength = data.length;

/** write introduction (remember to rewrite the file) */
writingText += fs.readFileSync(introductionPath, 'utf8');

/** generate badges and document it */
for (i = 0; i < categoryLength; i++) {
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
console.log('[Success: build completed]');
