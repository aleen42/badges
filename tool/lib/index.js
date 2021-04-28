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
 *      - Update Time: Apr 28th, 2021
 *
 *
 **********************************************************************/

const execSync = require('child_process').execSync;
const skins = require('./skins');
const fs = require('fs');

const TinyColor = require('@ctrl/tinycolor').default;

const FONT_FAMILY = 'DejaVu Sans,Verdana,Geneva,sans-serif', FONT_SIZE = 12;
const ERROR = `\x1b[31merror   \x1b[0m`;
const SUCCESS = `\x1b[32msuccess \x1b[0m`;

const badges = {
    run: options => {
        /** options validation */
        if (options.text === void 0) {
            console.log(`${ERROR} Text missed`);
            return;
        }

        if (options.output === void 0) {
            console.log(`${ERROR} Missed Output Name`);
            return;
        }

        options = {
            path: '', data: '',
            ...options,
            skin: skins[options.skin || 'dark'] || skins['dark'],
            color: new TinyColor(options.color || '000').toHexString(),
            y: options.y != null,
            dynamicFC: options['dynamic-fore-color'] != null,
        };

        /** calculate the width of a given text */
        const textBlockWidth = measureWidth(options.text);

        if (!textBlockWidth) {
            console.log(`${ERROR} Text contains non-ascii characters`);
            return;
        }

        const imgBlockWidth = 25;
        const [totalWidth, leftDistance] = [imgBlockWidth + textBlockWidth, imgBlockWidth + textBlockWidth / 2 - 1];

        let imageData = options.data;
        if (options.path !== '') {
            const content = fs.readFileSync(options.path).toString('base64');
            // vector
            /[\s\S]*?\.svg$/i.test(options.path) && (imageData = `data:image/svg+xml;base64,${content}`);
            // image
            /[\s\S]*?\.(?:gif|png|jpg|jpeg)$/i.test(options.path) && (imageData = `data:image;base64,${fs.readFileSync(options.path).toString('base64')}`);
        }

        // language=HTML
        const content = {
            'default': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalWidth}" height="20">
    <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
    </linearGradient>

    <clipPath id="a">
        <rect width="${totalWidth}" height="20" rx="3" fill="#fff"/>
    </clipPath>

    <g clip-path="url(#a)">
        <path fill="#${options.skin.color}" d="M0 0h${imgBlockWidth}v20H0z"/>
        <path fill="${options.color}" d="M${imgBlockWidth} 0h${textBlockWidth}v20H25z"/>
        <path fill="url(#b)" d="M0 0h${totalWidth}v20H0z"/>
    </g>
    <g fill="${!options.dynamicFC || new TinyColor(options.color).isDark() ? '#fff' : '#333'}"
        text-anchor="middle" font-family="${FONT_FAMILY}" font-size="${FONT_SIZE}">
        <image x="5" y="3" width="14" height="14" xlink:href="${imageData}"/>
        <text x="${leftDistance}" y="14.6" fill="#010101" fill-opacity=".3">${options.text}</text>
        <text x="${leftDistance}" y="14">${options.text}</text>
    </g>
</svg>`,
            'flat_square': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalWidth}" height="20">
    <g shape-rendering="crispEdges">
        <path fill="#${options.skin.color}" d="M0 0h${imgBlockWidth}v20H0z"/>
        <path fill="${options.color}" d="M${imgBlockWidth} 0h${textBlockWidth}v20H25z"/>
    </g>
    <g fill="${!options.dynamicFC || new TinyColor(options.color).isDark() ? '#fff' : '#333'}"
        text-anchor="middle" font-family="${FONT_FAMILY}" font-size="${FONT_SIZE}">
        <image x="5" y="3" width="14" height="14" xlink:href="${imageData}"/>
        <text x="${leftDistance}" y="14">${options.text}</text>
    </g>
</svg>`
        }[options.style || 'default'];

        /** start to create a local file */
        fs.open(options.output, 'wx', err => {
            if (err && !options.y && err.code === 'EEXIST') {
                console.log(`${ERROR} File already exists`);
                return;
            }

            /** write to the file when it is not existed */
            fs.writeFile(options.output, content.split('\t').join(''), err => {
                if (err) {
                    console.log(`${ERROR} Failed to create the file`);
                    return;
                }

                console.log(`${SUCCESS}Create a badge for ${options.text}`);
            });
        });
    },

    test: () => execSync('badge -h').toString(),
};

/** start to calculate the width of text */
function measureWidth(text) {
	const {createCanvas} = require('canvas');
	const measure = createCanvas(200, 50);
	const measureContext = measure.getContext('2d');
	measureContext.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
	return measureContext.measureText(text).width + /* padding = */5 * 2;
}

module.exports = badges;
