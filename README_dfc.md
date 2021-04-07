## badges

<p align="center">
    <img src="./badges.svg" width="23%" height="300px" />
</p>

<p align="center">To make badges more standard and acceptable.</p>

<br />
<br />
<br />

![npm](./src/npm.svg) ![javascript](https://img.shields.io/badge/%20%20JavaScript-%20%20%20%20730L-f1e05a.svg) ![html](https://img.shields.io/badge/%20%20HTML-%20%20%20%20164L-e34c26.svg)

Alternative: [**default**](./README.md), [**flat-square**](./README_flat_square.md), [**dynamic-fore-color**](./README_dfc.md), [**dynamic-fore-color (flat_square)**](./README_flat_square_dfc.md).

A collection of badges designed for personal repositories, and I hope that all of these badges can be widely accepted and used in the document of any project so that they can become more and more standard. If you also have some new ideas about badges, just open an issue. Always remember that: **More than a coder, more than a designer.**

So how to create such cute badges? It's very simple. As it's only registered on [npm](https://www.npmjs.com/), you should install it by typing:

```bash
sudo npm install -g badges-cli
```

Then you can use this command line tool for creating badges yourself:

Take the following command as an example, `t` means text content, and `c` means color. If you want to create a badge with SVG sources, you can specify with `p` to tell the tool where to find your sources. Finally, `o` is used to specify where to export the badge.

```bash
badge -t Alipay -c "#1CACEB" -p alipay.svg --dynamic-fore-color -o output.svg
```

One more thing, according to [the suggestion](https://github.com/facebook/jest/issues/5438#issuecomment-362553867) during creating badges for Jest, this tool has been extended to support skins with `s` to specify, which value can be "light" or "dark" temporarily at this moment.

To uninstall the tool, you can just uninstall it by typing:

```bash
sudo npm uninstall -g badges-cli
```

As for how to create a badge and add it in the collection? There are some steps you may need to follow:

1. Fork the repository
2. Install `badges-cli`
3. Create a logo with SVG formatted (**recommended**), or any other formats like PNG. (_**The logo should be wrapped into a square, in another word, the width should be equal to the height, or it would have been horizontally squished.**_)
4. Save the logo in the folder `dist`
5. Add data for your badge in the file `script/data.js`
    ```js
   const data = { 
        // ...
        'React Router': {
            fileName: 'router.svg',
            color: '62DAFB',
            description: 'A badge used for projects using React Router'
        }
    };
    ```
5. Run the script by typing `npm run build`
6. If succeed, the readme file will be automatically updated
7. Finally, push all updates and create a pull request for your change
8. **Done!!**

> Note that: so far haven't I thought out a perfect solution for calculating width of text accurately yet, and it means that the text can not be aligned in some cases.

*Note: if you really like this project, feel free to buy me a swimming chance:*

[![badges](./src/paypal.svg)](http://paypal.me/aleen42) [![badges](./src/patreon.svg)](https://www.patreon.com/aleen42) [![badges](./src/buymeacoffee.svg)](https://www.patreon.com/aleen42)

### Coder

- [![angular](./src/angular_dfc.svg)](https://badges.aleen42.com/src/angular_dfc.svg) A badge used for repositories which has used the framework, Angular
- [![npm](./src/npm_dfc.svg)](https://badges.aleen42.com/src/npm_dfc.svg) A badge used for npm packages
- [![gulp](./src/gulp_dfc.svg)](https://badges.aleen42.com/src/gulp_dfc.svg) A badge used for projects using Gulp to build
- [![react](./src/react_dfc.svg)](https://badges.aleen42.com/src/react_dfc.svg) A badge used for repositories which has used the framework, React
- [![router](./src/router_dfc.svg)](https://badges.aleen42.com/src/router_dfc.svg) A badge used for projects using React Router
- [![modernizr](./src/modernizr_dfc.svg)](https://badges.aleen42.com/src/modernizr_dfc.svg) A badge for projects using Modernizr
- [![reactivex](./src/reactivex_dfc.svg)](https://badges.aleen42.com/src/reactivex_dfc.svg) A badge for projects using ReactiveX
- [![jest](./src/jest_1_dfc.svg)](https://badges.aleen42.com/src/jest_1_dfc.svg) A badge used for projects using Jest for testing JavaScript
- [![jest](./src/jest_2_dfc.svg)](https://badges.aleen42.com/src/jest_2_dfc.svg) A badge used for projects using Jest for testing JavaScript
- [![jasmine](./src/jasmine_dfc.svg)](https://badges.aleen42.com/src/jasmine_dfc.svg) A badge used for projects using Jasmine for testing JavaScript
- [![visual_studio](./src/visual_studio_dfc.svg)](https://badges.aleen42.com/src/visual_studio_dfc.svg) A badge for the Visual Studio IDE
- [![visual_studio_code](./src/visual_studio_code_dfc.svg)](https://badges.aleen42.com/src/visual_studio_code_dfc.svg) A badge for the Visual Studio Code IDE
- [![qunit](./src/qunit_dfc.svg)](https://badges.aleen42.com/src/qunit_dfc.svg) A badge for projects using QUnit for unit tests
- [![redux](./src/redux_dfc.svg)](https://badges.aleen42.com/src/redux_dfc.svg) A badge used for projects using React Redux
- [![eslint](./src/eslint_dfc.svg)](https://badges.aleen42.com/src/eslint_dfc.svg) A badge used for projects using ESLint
- [![gitbook](./src/gitbook_1_dfc.svg)](https://badges.aleen42.com/src/gitbook_1_dfc.svg) A badge used for books publish by Gitbook
- [![gitbook](./src/gitbook_2_dfc.svg)](https://badges.aleen42.com/src/gitbook_2_dfc.svg) A badge used for books publish by Gitbook
- [![node](./src/node_dfc.svg)](https://badges.aleen42.com/src/node_dfc.svg) A badge used for projects built with Node.js
- [![vue](./src/vue_dfc.svg)](https://badges.aleen42.com/src/vue_dfc.svg) A badge used for repositories which has used the framework, Vue
- [![vuepress](./src/vuepress_dfc.svg)](https://badges.aleen42.com/src/vuepress_dfc.svg) A badge used for books publish by Vuepress
- [![gitter](./src/gitter_dfc.svg)](https://badges.aleen42.com/src/gitter_dfc.svg) A badge used for projects can be discussed on Gitter
- [![atom](./src/atom_dfc.svg)](https://badges.aleen42.com/src/atom_dfc.svg) A badge for the Atom editor
- [![sublime_text](./src/sublime_text_dfc.svg)](https://badges.aleen42.com/src/sublime_text_dfc.svg) A badge for the Sulime Text editor
- [![tensorflow](./src/tensorflow_dfc.svg)](https://badges.aleen42.com/src/tensorflow_dfc.svg) A badge use for projects using Tensorflow
- [![bower](./src/bower_dfc.svg)](https://badges.aleen42.com/src/bower_dfc.svg) A badge used for bower packages
- [![tc39](./src/tc39_dfc.svg)](https://badges.aleen42.com/src/tc39_dfc.svg) A badge used for [TC39](https://github.com/tc39) committee
- [![gitlab](./src/gitlab_dfc.svg)](https://badges.aleen42.com/src/gitlab_dfc.svg) A badge used for Gitlab repositories
- [![java](./src/java_dfc.svg)](https://badges.aleen42.com/src/java_dfc.svg) A badge used for projects that coded with Java
- [![grunt](./src/grunt_dfc.svg)](https://badges.aleen42.com/src/grunt_dfc.svg) A badge used for projects using grunt to build
- [![rss](./src/rss_dfc.svg)](https://badges.aleen42.com/src/rss_dfc.svg) A badge used for RSS subscribing
- [![javascript](./src/javascript_dfc.svg)](https://badges.aleen42.com/src/javascript_dfc.svg) A badge used for projects that coded with JavaScript
- [![mocha](./src/mocha_dfc.svg)](https://badges.aleen42.com/src/mocha_dfc.svg) A badge used for projects using Mocha for unit tests
- [![apiary](./src/apiary_dfc.svg)](https://badges.aleen42.com/src/apiary_dfc.svg) A badge used for documents written on Apiary
- [![golang](./src/golang_dfc.svg)](https://badges.aleen42.com/src/golang_dfc.svg) A badge used for projects that coded with Golang
- [![docker](./src/docker_dfc.svg)](https://badges.aleen42.com/src/docker_dfc.svg) A badge used for projects deployed on Docker
- [![kotlin](./src/kotlin_dfc.svg)](https://badges.aleen42.com/src/kotlin_dfc.svg) A badge used for projects that coded with Kotlin
- [![typescript](./src/typescript_dfc.svg)](https://badges.aleen42.com/src/typescript_dfc.svg) A badge used for projects that coded with TypeScript
- [![jsfiddle](./src/jsfiddle_dfc.svg)](https://badges.aleen42.com/src/jsfiddle_dfc.svg) A badge used for projects running on JSFiddle
- [![webpack](./src/webpack_dfc.svg)](https://badges.aleen42.com/src/webpack_dfc.svg) A badge used for projects built with Webpack
- [![slack](./src/slack_dfc.svg)](https://badges.aleen42.com/src/slack_dfc.svg) A badge used for projects discussed on Slack
- [![idea](./src/idea_dfc.svg)](https://badges.aleen42.com/src/idea_dfc.svg) A badge for the IDEA editor
- [![codepen](./src/codepen_dfc.svg)](https://badges.aleen42.com/src/codepen_dfc.svg) A badge used for projects running on CodePen
- [![hacker](./src/hacker_dfc.svg)](https://badges.aleen42.com/src/hacker_dfc.svg) A badge used for hacking projects (**Business Using is not allowed)**
- [![github](./src/github_dfc.svg)](https://badges.aleen42.com/src/github_dfc.svg) A badge used for GitHub repositories


### Community

- [![juejin_translation](./src/juejin_translation_dfc.svg)](https://badges.aleen42.com/src/juejin_translation_dfc.svg) A badge used for any articles translated by [gold-miner](https://github.com/xitu/gold-miner).
- [![stackexchange](./src/stackexchange_dfc.svg)](https://badges.aleen42.com/src/stackexchange_dfc.svg) A badge used for references on Stack Exchange.
- [![superuser](./src/superuser_dfc.svg)](https://badges.aleen42.com/src/superuser_dfc.svg) A badge used for references on Super User
- [![stackoverflow](./src/stackoverflow_dfc.svg)](https://badges.aleen42.com/src/stackoverflow_dfc.svg) A badge used for references on Stack Overflow.
- [![medium](./src/medium_dfc.svg)](https://badges.aleen42.com/src/medium_dfc.svg) A badge used for articles shared on Medium.
- [![serverfault](./src/serverfault_dfc.svg)](https://badges.aleen42.com/src/serverfault_dfc.svg) A badge used for references on Server Fault.


### Communication

- [![messenger](./src/messenger_dfc.svg)](https://badges.aleen42.com/src/messenger_dfc.svg) A badge used for sharing communication ways on Messenger
- [![telegram](./src/telegram_dfc.svg)](https://badges.aleen42.com/src/telegram_dfc.svg) A badge used for sharing communication ways on Telegram
- [![skype](./src/skype_dfc.svg)](https://badges.aleen42.com/src/skype_dfc.svg) A badge used for sharing communication ways on Skype
- [![whatsapp](./src/whatsapp_dfc.svg)](https://badges.aleen42.com/src/whatsapp_dfc.svg) A badge used for sharing communication ways on WhatsApp
- [![line](./src/line_dfc.svg)](https://badges.aleen42.com/src/line_dfc.svg) A badge used for sharing communication ways on Line
- [![wechat](./src/wechat_dfc.svg)](https://badges.aleen42.com/src/wechat_dfc.svg) A badge used for sharing communication ways on WeChat
- [![lunkr](./src/lunkr_dfc.svg)](https://badges.aleen42.com/src/lunkr_dfc.svg) A badge used for sharing communication ways on Coremail Lunkr


### Multimedia

- [![soundcloud](./src/soundcloud_dfc.svg)](https://badges.aleen42.com/src/soundcloud_dfc.svg) A badge used for music shared on SoundCloud
- [![spotify](./src/spotify_dfc.svg)](https://badges.aleen42.com/src/spotify_dfc.svg) A badge used for music shared on Spotify


### Inc

- [![nasa](./src/nasa_dfc.svg)](https://badges.aleen42.com/src/nasa_dfc.svg) A badge used for projects of NASA
- [![codrops](./src/codrops_dfc.svg)](https://badges.aleen42.com/src/codrops_dfc.svg) A badge used for any project of Codrops Inc.
- [![xitu](./src/xitu_dfc.svg)](https://badges.aleen42.com/src/xitu_dfc.svg) A badge used for any articles of Xitu Inc.
- [![coremail](./src/coremail_dfc.svg)](https://badges.aleen42.com/src/coremail_dfc.svg) A badge used for the Coremail Inc.
- [![soundtooth](./src/soundtooth_dfc.svg)](https://badges.aleen42.com/src/soundtooth_dfc.svg) A badge used for any project of Soundtooth Inc.
- [![amazon](./src/amazon_dfc.svg)](https://badges.aleen42.com/src/amazon_dfc.svg) A badge used for the Amazon Inc.
- [![bitcoin](./src/bitcoin_dfc.svg)](https://badges.aleen42.com/src/bitcoin_dfc.svg) A badge used for the Bitcoin Inc.
- [![airbnb](./src/airbnb_dfc.svg)](https://badges.aleen42.com/src/airbnb_dfc.svg) A badge used for the Airbnb Inc.
- [![monsoon](./src/monsoon_dfc.svg)](https://badges.aleen42.com/src/monsoon_dfc.svg) A badge used for the Monsoon Inc.


### Social Media

- [![youtube](./src/youtube_dfc.svg)](https://badges.aleen42.com/src/youtube_dfc.svg) A badge used for Youtube.
- [![pinterest](./src/pinterest_dfc.svg)](https://badges.aleen42.com/src/pinterest_dfc.svg) A badge used for sharing communities on Pinterest.
- [![google_plus](./src/google_plus_dfc.svg)](https://badges.aleen42.com/src/google_plus_dfc.svg) A badge used for sharing communities on Google Plus.
- [![sina_weibo](./src/sina_weibo_dfc.svg)](https://badges.aleen42.com/src/sina_weibo_dfc.svg) A badge used for sharing communities on Sina Weibo.
- [![reddit](./src/reddit_dfc.svg)](https://badges.aleen42.com/src/reddit_dfc.svg) A badge used for articles shared on Reddit.
- [![snapchat](./src/snapchat_dfc.svg)](https://badges.aleen42.com/src/snapchat_dfc.svg) A badge used for Snapchat.
- [![facebook](./src/facebook_dfc.svg)](https://badges.aleen42.com/src/facebook_dfc.svg) A badge used for Facebook.
- [![instagram](./src/instagram_dfc.svg)](https://badges.aleen42.com/src/instagram_dfc.svg) A badge used for Instagram.
- [![twitter](./src/twitter_dfc.svg)](https://badges.aleen42.com/src/twitter_dfc.svg) A badge used for Twitter.


### Sponsors

- [![paypal](./src/paypal_dfc.svg)](https://badges.aleen42.com/src/paypal_dfc.svg) A badge used for Paypal sponsors.
- [![alipay](./src/alipay_dfc.svg)](https://badges.aleen42.com/src/alipay_dfc.svg) A badge used for Alipay sponsors.
- [![patreon](./src/patreon_dfc.svg)](https://badges.aleen42.com/src/patreon_dfc.svg) A badge used for Patreon sponsors.
- [![buymeacoffee](./src/buymeacoffee_dfc.svg)](https://badges.aleen42.com/src/buymeacoffee_dfc.svg) A badge used for BuyMeACoffee sponsors.
- [![issuehunt](./src/issuehunt_dfc.svg)](https://badges.aleen42.com/src/issuehunt_dfc.svg) A badge used for IssueHunt sponsors.


### Car

- [![lamborghini](./src/lamborghini_dfc.svg)](https://badges.aleen42.com/src/lamborghini_dfc.svg) A badge used for cars of Lamborghini
- [![bugatti](./src/bugatti_dfc.svg)](https://badges.aleen42.com/src/bugatti_dfc.svg) A badge used for cars of Bugatti
- [![porsche](./src/porsche_dfc.svg)](https://badges.aleen42.com/src/porsche_dfc.svg) A badge used for cars of Porsche
- [![tesla](./src/tesla_dfc.svg)](https://badges.aleen42.com/src/tesla_dfc.svg) A badge used for cars of Tesla
- [![ferrari](./src/ferrari_dfc.svg)](https://badges.aleen42.com/src/ferrari_dfc.svg) A badge used for cars of Ferrari
- [![toyota](./src/toyota_dfc.svg)](https://badges.aleen42.com/src/toyota_dfc.svg) A badge used for cars of Toyota
- [![mitsubishi](./src/mitsubishi_dfc.svg)](https://badges.aleen42.com/src/mitsubishi_dfc.svg) A badge used for cars of Mitsubishi
- [![maserati](./src/maserati_dfc.svg)](https://badges.aleen42.com/src/maserati_dfc.svg) A badge used for cars of Maserati
- [![marussia](./src/marussia_dfc.svg)](https://badges.aleen42.com/src/marussia_dfc.svg) A badge used for cars of Marussia
- [![koenigsegg](./src/koenigsegg_dfc.svg)](https://badges.aleen42.com/src/koenigsegg_dfc.svg) A badge used for cars of Koenigsegg
- [![bmw](./src/bmw_dfc.svg)](https://badges.aleen42.com/src/bmw_dfc.svg) A badge used for cars of BMW
- [![land_rover](./src/land_rover_dfc.svg)](https://badges.aleen42.com/src/land_rover_dfc.svg) A badge used for cars of Land Rover
- [![mercedes_benz](./src/mercedes_benz_dfc.svg)](https://badges.aleen42.com/src/mercedes_benz_dfc.svg) A badge used for cars of Mercedes Benz
- [![audi](./src/audi_dfc.svg)](https://badges.aleen42.com/src/audi_dfc.svg) A badge used for cars of Audi


### Football Clubs

- [![liverpool](./src/liverpool_dfc.svg)](https://badges.aleen42.com/src/liverpool_dfc.svg) A badge used for FC Liverpool
- [![real_madrid](./src/real_madrid_dfc.svg)](https://badges.aleen42.com/src/real_madrid_dfc.svg) A badge used for FC Real Madrid
- [![manchester_united](./src/manchester_united_dfc.svg)](https://badges.aleen42.com/src/manchester_united_dfc.svg) A badge used for FC Manchester United
- [![arsenal](./src/arsenal_dfc.svg)](https://badges.aleen42.com/src/arsenal_dfc.svg) A badge used for FC Arsenal
- [![ac_milan](./src/ac_milan_dfc.svg)](https://badges.aleen42.com/src/ac_milan_dfc.svg) A badge used for FC AC Milan
- [![bayern_munchen](./src/bayern_munchen_dfc.svg)](https://badges.aleen42.com/src/bayern_munchen_dfc.svg) A badge used for FC Bayern Munchen
- [![barcelona](./src/barcelona_dfc.svg)](https://badges.aleen42.com/src/barcelona_dfc.svg) A badge used for FC Barcelona
- [![chelsea](./src/chelsea_dfc.svg)](https://badges.aleen42.com/src/chelsea_dfc.svg) A badge used for FC Chelsea


### Game

- [![steam](./src/steam_dfc.svg)](https://badges.aleen42.com/src/steam_dfc.svg) A badge used for any game supported on the platform Steam
- [![ingress](./src/ingress_dfc.svg)](https://badges.aleen42.com/src/ingress_dfc.svg) A badge used for the game Ingress published by Niantic Inc.
- [![osu](./src/osu_dfc.svg)](https://badges.aleen42.com/src/osu_dfc.svg) A badge used for the game osu! published by ppy


### Designer

- [![behance](./src/behance_dfc.svg)](https://badges.aleen42.com/src/behance_dfc.svg) A badge used for designing projects sharing on Behance
- [![photoshop](./src/photoshop_dfc.svg)](https://badges.aleen42.com/src/photoshop_dfc.svg) A badge used for designing projects using Photoshop as a tool
- [![illustrator](./src/illustrator_dfc.svg)](https://badges.aleen42.com/src/illustrator_dfc.svg) A badge used for designing projects using Illustrator as a tool
- [![dreamweaver](./src/dreamweaver_dfc.svg)](https://badges.aleen42.com/src/dreamweaver_dfc.svg) A badge used for projects using Dreamweaver as a tool
- [![after_effects](./src/after_effects_dfc.svg)](https://badges.aleen42.com/src/after_effects_dfc.svg) A badge used for designing projects using After Effect as a tool
- [![premiere](./src/premiere_dfc.svg)](https://badges.aleen42.com/src/premiere_dfc.svg) A badge used for designing projects using Premiere as a tool
- [![flash](./src/flash_dfc.svg)](https://badges.aleen42.com/src/flash_dfc.svg) A badge used for designing projects using Flash as a tool
- [![zeplin](./src/zeplin_dfc.svg)](https://badges.aleen42.com/src/zeplin_dfc.svg) A badge used for designing projects with Zeplin

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://wiki.aleen42.com/contribution.html).

### :scroll: License

[MIT](https://wiki.aleen42.com/MIT.html) © aleen42
