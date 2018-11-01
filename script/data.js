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
 *      - Description: data for builiding badges
 *      - Create Time: Apr 20th, 2017
 *      - Update Time: Feb 3rd, 2018
 *
 *
 **********************************************************************/

module.exports = [
    {
        name: 'Coder',
        data: {
            /**
             * use object but not array, because there are cases when a same name need to be built
             * into more than one badges.
             */
            'Angular': { fileName: 'angular.svg', color: 'DD1B16', description: 'A badge used for repositories which has used the framework, Angular' },
            'npm': { fileName: 'npm.svg', color: 'C12127', description: 'A badge used for npm packages' },
            'Gulp': { fileName: 'gulp.svg', color: 'D34A47', description: 'A badge used for projects using Gulp to build' },
            'React': { fileName: 'react.svg', color: '61DAFB', description: 'A badge used for repositories which has used the framework, React' },
            'React Router': { fileName: 'router.svg', color: '62DAFB', description: 'A badge used for projects using React Router' },
            'Modernizr': { fileName: 'modernizr.svg', color: 'D91B77', description: 'A badge for projects using Modernizr' },
            'ReactiveX': { fileName: 'reactivex.svg', color: 'C7008F', description: 'A badge for projects using ReactiveX' },
            'Jest': [
                { fileName: 'jest.svg', color: '99425b', description: 'A badge used for projects using Jest for testing JavaScript' },
                { fileName: 'jest.svg', skin: 'light', color: '99425b', description: 'A badge used for projects using Jest for testing JavaScript' }
            ],
            'Jasmine': { fileName: 'jasmine.svg', color: '8A4182', description: 'A badge used for projects using Jasmine for testing JavaScript' },
            'Visual Studio': { fileName: 'visual_studio.svg', color: '68217A', description: 'A badge for the Visual Studio IDE' },
            'Visual Studio Code': { fileName: 'visual_studio_code.svg', color: '028FD6', description: 'A badge for the Visual Studio Code IDE' },
            'QUnit': { fileName: 'qunit.svg', color: '9E2087', description: 'A badge for projects using QUnit for unit tests' },
            'Redux': { fileName: 'redux.svg', color: '764ABC', description: 'A badge used for projects using React Redux' },
            'ESLint': { fileName: 'eslint.svg', color: '4B32C3', description: 'A badge used for projects using ESLint' },
            /** When there are more than one badge to build, use an array, like Gitbook */
            'Gitbook': [
                { fileName: 'gitbook.png', color: 'B7B7B7', description: 'A badge used for books publish by Gitbook' },
                { fileName: 'gitbook.svg', color: '3681FC', description: 'A badge used for books publish by Gitbook' }
            ],
            'Node': { fileName: 'node.svg', color: '689F63', description: 'A badge used for projects built with Node.js' },
            'Vue': { fileName: 'vue.svg', color: '3eaf7c', description: 'A badge used for repositories which has used the framework, Vue' },
            'VuePress': { fileName: 'vuepress.svg', color: '3eaf7c', description: 'A badge used for books publish by Vuepress' },
            'Gitter': { fileName: 'gitter.svg', color: '4DB798', description: 'A badge used for projects can be discussed on Gitter' },
            'Atom': { fileName: 'atom.svg', color: '7ECE8D', description: 'A badge for the Atom editor' },
            'Sublime Text': { fileName: 'sublime_text.png', color: 'FFAD46', description: 'A badge for the Sulime Text editor' },
            'Bower': { fileName: 'bower.svg', color: 'F68A31', description: 'A badge used for bower packages' },
            'Gitlab': { fileName: 'gitlab.svg', color: 'FC6D26', description: 'A badge used for Gitlab repositories' },
            'Grunt': { fileName: 'grunt.svg', color: 'FBA919', description: 'A badge used for projects using grunt to build' },
            'RSS': { fileName: 'rss.svg', color: 'FF9911', description: 'A badge used for RSS subscribing' },
            'JavaScript': { fileName: 'javascript.svg', color: 'F7DF1E', description: 'A badge used for projects that coded with JavaScript' },
            'Mocha': { fileName: 'mocha.svg', color: '8D6748', description: 'A badge used for projects using Mocha for unit tests' },
            'Apiary': { fileName: 'apiary.svg', color: '59C5AC', description: 'A badge used for documents written on Apiary' },
            'Docker': { fileName: 'docker.svg', color: '1D91B4', description: 'A badge used for projects deployed on Docker' },
            'TypeScript': { fileName: 'typescript.svg', color: '007ACC', description: 'A badge used for projects that coded with TypeScript' },
            'JSFiddle': { fileName: 'jsfiddle.svg', color: '4679A4', description: 'A badge used for projects running on JSFiddle' },
            'Webpack': { fileName: 'webpack.svg', color: '6F95DB', description: 'A badge used for projects built with Webpack' },
            'Slack': { fileName: 'slack.svg', color: '392538', description: 'A badge used for projects discussed on Slack' },
            'IDEA': { fileName: 'idea.svg', color: '000000', description: 'A badge for the IDEA editor' },
            'CodePen': { fileName: 'codepen.svg', color: '000000', description: 'A badge used for projects running on CodePen' },
            'Hacker': { fileName: 'hacker.svg', color: '1C1C1C', description: 'A badge used for hacking projects (**Business Using is not allowed)**' },
            'GitHub': { fileName: 'github.svg', color: '24292E', description: 'A badge used for GitHub repositories' }
        }
    }, {
        name: 'Community',
        data: {
            '掘金翻译计划': { fileName: 'juejin_translation.svg', color: '006CFF', description: 'A badge used for any articles translated by gold-miner' },
            'Facebook': { fileName: 'facebook.svg', color: '3C5A99', description: 'A badge used for sharing communities on Facebook' },
            'Stack Exchange': { fileName: 'stackexchange.svg', color: '205296', description: 'A badge used for references on Stack Exchange' },
            'Super User': { fileName: 'superuser.svg', color: '2EACE3', description: 'A badge used for references on Super User' },
            'Twitter': { fileName: 'twitter.svg', color: '1DA1F2', description: 'A badge used for sharing communities on Twitter' },
            'Google+': { fileName: 'google_plus.svg', color: 'DC4A38', description: 'A badge used for sharing communities on Google+' },
            'Pinterest': { fileName: 'pinterest.svg', color: 'CE0F19', description: 'A badge used for sharing communities on Pinterest' },
            'Sina': { fileName: 'sina_weibo.svg', color: 'E6162D', description: 'A badge used for sharing communities on Sina Weibo' },
            'Reddit': { fileName: 'reddit.svg', color: 'FF4500', description: 'A badge used for articles shared on Reddit' },
            'Stack Overflow': { fileName: 'stackoverflow.svg', color: 'F48023', description: 'A badge used for GitHub repositories' },
            'Medium': { fileName: 'medium.svg', color: '14C767', description: 'A badge used for articles shared on Medium' },
            'Server Fault': { fileName: 'serverfault.svg', color: '231F20', description: 'A badge used for references on Server Fault' }
        }
    }, {
        name: 'Communication',
        data: {
            'Messenger': { fileName: 'messenger.svg', color: '009BFF', description: 'A badge used for sharing communication ways on Messenger' },
            'Telegram': { fileName: 'telegram.svg', color: '2EA5D8', description: 'A badge used for sharing communication ways on Telegram' },
            'Skype': { fileName: 'skype.svg', color: '00AFF0', description: 'A badge used for sharing communication ways on Skype' },
            'WhatsApp': { fileName: 'whatsapp.svg', color: '4CCA5A', description: 'A badge used for sharing communication ways on WhatsApp' },
            'Line': { fileName: 'line.svg', color: '00B900', description: 'A badge used for sharing communication ways on Line' },
            'WeChat': { fileName: 'wechat.svg', color: '2DC100', description: 'A badge used for sharing communication ways on WeChat' },
            'Coremail Lunkr': { fileName: 'lunkr.svg', color: 'FAF00A', description: 'A badge used for sharing communication ways on Coremail Lunkr' }
        }
    }, {
        name: 'Multimedia',
        data: {
            'SoundCloud': { fileName: 'soundcloud.svg', color: 'FF4700', description: 'A badge used for music shared on SoundCloud' },
            'Spotify': { fileName: 'spotify.svg', color: '1ED760', description: 'A badge used for music shared on Spotify' }
        }
    }, {
        name: 'Inc',
        data: {
            'NASA': { fileName: 'nasa.svg', color: '1A5DAD', description: 'A badge used for projects of NASA' },
            'Codrops': { fileName: 'codrops.svg', color: '237DAC', description: 'A badge used for any project of Codrops Inc.' },
            'Paypal': { fileName: 'paypal.svg', color: '179BD7', description: 'A badge used for the Paypal Inc.' },
            'Alipay': { fileName: 'alipay.svg', color: '1CACEB', description: 'A badge used for the Alipay Inc.' },
            'xitu': { fileName: 'xitu.svg', color: '006CFF', description: 'A badge used for any articles of Xitu Inc.' },
            'Coremail': { fileName: 'coremail.svg', color: '0065AC', description: 'A badge used for the Coremail Inc.' },
            'Soundtooth': { fileName: 'soundtooth.svg', color: 'E15132', description: 'A badge used for any project of Soundtooth Inc.' },
            'Patreon': { fileName: 'patreon.svg', color: 'FF5900', description: 'A badge used for the Patreon Inc.' },
            'Amazon': { fileName: 'amazon.svg', color: 'FF9900', description: 'A badge used for the Amazon Inc.' },
            'Bitcoin': { fileName: 'bitcoin.svg', color: 'F7931A', description: 'A badge used for the Bitcoin Inc.' },
            'Airbnb': { fileName: 'airbnb.svg', color: 'FF5A5F', description: 'A badge used for the Airbnb Inc.' },
            'Monsoon': { fileName: 'monsoon.svg', color: '64AA51', description: 'A badge used for the Monsoon Inc.' }
        }
    }, {
        name: 'Car',
        data: {
            'Lamborghini': { fileName: 'lamborghini.svg', color: 'D8A016', description: 'A badge used for cars of Lamborghini' },
            'Bugatti': { fileName: 'bugatti.svg', color: 'BE0030', description: 'A badge used for cars of Bugatti' },
            'Porsche': { fileName: 'porsche.svg', color: 'E2001A', description: 'A badge used for cars of Porsche' },
            'Tesla': { fileName: 'tesla.svg', color: 'E82127', description: 'A badge used for cars of Tesla' },
            'Ferrari': { fileName: 'ferrari.svg', color: 'ED1C24', description: 'A badge used for cars of Ferrari' },
            'Toyota': { fileName: 'toyota.svg', color: 'FF0000', description: 'A badge used for cars of Toyota' },
            'Mitsubishi': { fileName: 'mitsubishi.svg', color: 'E60012', description: 'A badge used for cars of Mitsubishi' },
            'Maserati': { fileName: 'maserati.svg', color: '0C2E59', description: 'A badge used for cars of Maserati' },
            'Marussia': { fileName: 'marussia.svg', color: '003C84', description: 'A badge used for cars of Marussia' },
            'Koenigsegg': { fileName: 'koenigsegg.svg', color: '304B84', description: 'A badge used for cars of Koenigsegg' },
            'BMW': { fileName: 'bmw.svg', color: '318DBB', description: 'A badge used for cars of BMW' },
            'Land Rover': { fileName: 'land_rover.svg', color: '008948', description: 'A badge used for cars of Land Rover' },
            'Mercedes Benz': { fileName: 'mercedes_benz.svg', color: '333333', description: 'A badge used for cars of Mercedes Benz' },
            'Audi': { fileName: 'audi.svg', color: '888A8C', description: 'A badge used for cars of Audi' }
        }
    }, {
        name: 'Football Clubs',
        data: {
            'Liverpool': { fileName: 'liverpool.svg', color: '00A398', description: 'A badge used for FC Liverpool' },
            'Real Madrid': { fileName: 'real_madrid.svg', color: 'FEBE10', description: 'A badge used for FC Real Madrid' },
            'Manchester United': { fileName: 'manchester_united.svg', color: 'E12F22', description: 'A badge used for FC Manchester United' },
            'Arsenal': { fileName: 'arsenal.svg', color: 'EF0107', description: 'A badge used for FC Arsenal' },
            'AC Milan': { fileName: 'ac_milan.svg', color: 'EA2A2D', description: 'A badge used for FC AC Milan' },
            'Bayern Munchen': { fileName: 'bayern_munchen.svg', color: 'EF325B', description: 'A badge used for FC Bayern Munchen' },
            'Barcelona': { fileName: 'barcelona.svg', color: 'A50044', description: 'A badge used for FC Barcelona' },
            'Chelsea': { fileName: 'chelsea.svg', color: '034694', description: 'A badge used for FC Chelsea' }
        }
    }, {
        name: 'Game',
        data: {
            'Steam': { fileName: 'steam.svg', color: '171A21', description: 'A badge used for any game supported on the platform Steam' },
            'Ingress': { fileName: 'ingress.svg', color: '09AEED', description: 'A badge used for the game Ingress published by Niantic Inc.' },
            'OSU!': { fileName: 'osu.png', color: 'F58AAB', description: 'A badge used for the game osu! published by ppy' }
        }
    }, {
        name: 'Designer',
        data: {
            'Behance': { fileName: 'behance.svg', color: '0155E5', description: 'A badge used for designing projects sharing on Behance' },
            'Photoshop': { fileName: 'photoshop.svg', color: '289CC7', description: 'A badge used for designing projects using Photoshop as a tool' },
            'Illustrator': { fileName: 'illustrator.svg', color: 'FF7F18', description: 'A badge used for designing projects using Illustrator as a tool' },
            'Dreamweaver': { fileName: 'dreamweaver.svg', color: '4CF900', description: 'A badge used for projects using Dreamweaver as a tool' },
            'After Effects': { fileName: 'after_effects.svg', color: 'B696CF', description: 'A badge used for designing projects using After Effect as a tool' },
            'Premiere': { fileName: 'premiere.svg', color: 'E579FF', description: 'A badge used for designing projects using Premiere as a tool' },
            'Flash': { fileName: 'flash.svg', color: 'FE3A0C', description: 'A badge used for designing projects using Flash as a tool' },
            'Zeplin': { fileName: 'zeplin.svg', color: 'FDBD39', description: 'A badge used for designing projects with Zeplin' }
        }
    }
];
