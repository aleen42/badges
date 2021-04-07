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
badge -t Alipay -c "#1CACEB" -p alipay.svg -o output.svg
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

- [![angular](./src/angular.svg)](https://badges.aleen42.com/src/angular.svg) A badge used for repositories which has used the framework, Angular
- [![npm](./src/npm.svg)](https://badges.aleen42.com/src/npm.svg) A badge used for npm packages
- [![gulp](./src/gulp.svg)](https://badges.aleen42.com/src/gulp.svg) A badge used for projects using Gulp to build
- [![erlang](./src/erlang.svg)](https://badges.aleen42.com/src/erlang.svg) A badge used for projects that coded with Erlang
- [![modernizr](./src/modernizr.svg)](https://badges.aleen42.com/src/modernizr.svg) A badge for projects using Modernizr
- [![reactivex](./src/reactivex.svg)](https://badges.aleen42.com/src/reactivex.svg) A badge for projects using ReactiveX
- [![jest](./src/jest_1.svg)](https://badges.aleen42.com/src/jest_1.svg) A badge used for projects using [Jest](https://github.com/facebook/jest) for testing JavaScript.
- [![jest](./src/jest_2.svg)](https://badges.aleen42.com/src/jest_2.svg) A badge used for projects using [Jest](https://github.com/facebook/jest) for testing JavaScript. *(**official accepted** by [facebook/jest#5348](https://github.com/facebook/jest/issues/5438))*
- [![jasmine](./src/jasmine.svg)](https://badges.aleen42.com/src/jasmine.svg) A badge used for projects using Jasmine for testing JavaScript
- [![visual_studio](./src/visual_studio.svg)](https://badges.aleen42.com/src/visual_studio.svg) A badge for the Visual Studio IDE
- [![visual_studio_code](./src/visual_studio_code.svg)](https://badges.aleen42.com/src/visual_studio_code.svg) A badge for the Visual Studio Code IDE
- [![qunit](./src/qunit.svg)](https://badges.aleen42.com/src/qunit.svg) A badge for projects using QUnit for unit tests
- [![redux](./src/redux.svg)](https://badges.aleen42.com/src/redux.svg) A badge used for projects using React Redux
- [![eslint](./src/eslint.svg)](https://badges.aleen42.com/src/eslint.svg) A badge used for projects using ESLint
- [![gitbook](./src/gitbook_1.svg)](https://badges.aleen42.com/src/gitbook_1.svg) A badge used for books publish by Gitbook
- [![gitbook](./src/gitbook_2.svg)](https://badges.aleen42.com/src/gitbook_2.svg) A badge used for books publish by Gitbook
- [![node](./src/node.svg)](https://badges.aleen42.com/src/node.svg) A badge used for projects built with Node.js
- [![vue](./src/vue.svg)](https://badges.aleen42.com/src/vue.svg) A badge used for repositories which has used the framework, Vue
- [![vuepress](./src/vuepress.svg)](https://badges.aleen42.com/src/vuepress.svg) A badge used for books publish by Vuepress
- [![gitter](./src/gitter.svg)](https://badges.aleen42.com/src/gitter.svg) A badge used for projects can be discussed on Gitter
- [![atom](./src/atom.svg)](https://badges.aleen42.com/src/atom.svg) A badge for the Atom editor
- [![sublime_text](./src/sublime_text.svg)](https://badges.aleen42.com/src/sublime_text.svg) A badge for the Sulime Text editor
- [![tensorflow](./src/tensorflow.svg)](https://badges.aleen42.com/src/tensorflow.svg) A badge use for projects using Tensorflow
- [![bower](./src/bower.svg)](https://badges.aleen42.com/src/bower.svg) A badge used for bower packages
- [![tc39](./src/tc39.svg)](https://badges.aleen42.com/src/tc39.svg) A badge used for [TC39](https://github.com/tc39) committee
- [![gitlab](./src/gitlab.svg)](https://badges.aleen42.com/src/gitlab.svg) A badge used for Gitlab repositories
- [![java](./src/java.svg)](https://badges.aleen42.com/src/java.svg) A badge used for projects that coded with Java
- [![grunt](./src/grunt.svg)](https://badges.aleen42.com/src/grunt.svg) A badge used for projects using grunt to build
- [![rss](./src/rss.svg)](https://badges.aleen42.com/src/rss.svg) A badge used for RSS subscribing
- [![javascript](./src/javascript.svg)](https://badges.aleen42.com/src/javascript.svg) A badge used for projects that coded with JavaScript
- [![mocha](./src/mocha.svg)](https://badges.aleen42.com/src/mocha.svg) A badge used for projects using Mocha for unit tests
- [![apiary](./src/apiary.svg)](https://badges.aleen42.com/src/apiary.svg) A badge used for documents written on Apiary
- [![react](./src/react.svg)](https://badges.aleen42.com/src/react.svg) A badge used for repositories which has used the framework, React
- [![router](./src/router.svg)](https://badges.aleen42.com/src/router.svg) A badge used for projects using React Router
- [![golang](./src/golang.svg)](https://badges.aleen42.com/src/golang.svg) A badge used for projects that coded with Golang
- [![docker](./src/docker.svg)](https://badges.aleen42.com/src/docker.svg) A badge used for projects deployed on Docker
- [![kotlin](./src/kotlin.svg)](https://badges.aleen42.com/src/kotlin.svg) A badge used for projects that coded with Kotlin
- [![typescript](./src/typescript.svg)](https://badges.aleen42.com/src/typescript.svg) A badge used for projects that coded with TypeScript
- [![jsfiddle](./src/jsfiddle.svg)](https://badges.aleen42.com/src/jsfiddle.svg) A badge used for projects running on JSFiddle
- [![webpack](./src/webpack.svg)](https://badges.aleen42.com/src/webpack.svg) A badge used for projects built with Webpack
- [![slack](./src/slack.svg)](https://badges.aleen42.com/src/slack.svg) A badge used for projects discussed on Slack
- [![idea](./src/idea.svg)](https://badges.aleen42.com/src/idea.svg) A badge for the IDEA editor
- [![codepen](./src/codepen.svg)](https://badges.aleen42.com/src/codepen.svg) A badge used for projects running on CodePen
- [![hacker](./src/hacker.svg)](https://badges.aleen42.com/src/hacker.svg) A badge used for hacking projects (**Business Using is not allowed)**
- [![github](./src/github.svg)](https://badges.aleen42.com/src/github.svg) A badge used for GitHub repositories


### Community

- [![juejin_translation](./src/juejin_translation.svg)](https://badges.aleen42.com/src/juejin_translation.svg) A badge used for any articles translated by [gold-miner](https://github.com/xitu/gold-miner).
- [![stackexchange](./src/stackexchange.svg)](https://badges.aleen42.com/src/stackexchange.svg) A badge used for references on Stack Exchange.
- [![superuser](./src/superuser.svg)](https://badges.aleen42.com/src/superuser.svg) A badge used for references on Super User
- [![stackoverflow](./src/stackoverflow.svg)](https://badges.aleen42.com/src/stackoverflow.svg) A badge used for references on Stack Overflow.
- [![medium](./src/medium.svg)](https://badges.aleen42.com/src/medium.svg) A badge used for articles shared on Medium.
- [![serverfault](./src/serverfault.svg)](https://badges.aleen42.com/src/serverfault.svg) A badge used for references on Server Fault.


### Communication

- [![messenger](./src/messenger.svg)](https://badges.aleen42.com/src/messenger.svg) A badge used for sharing communication ways on Messenger
- [![telegram](./src/telegram.svg)](https://badges.aleen42.com/src/telegram.svg) A badge used for sharing communication ways on Telegram
- [![skype](./src/skype.svg)](https://badges.aleen42.com/src/skype.svg) A badge used for sharing communication ways on Skype
- [![whatsapp](./src/whatsapp.svg)](https://badges.aleen42.com/src/whatsapp.svg) A badge used for sharing communication ways on WhatsApp
- [![line](./src/line.svg)](https://badges.aleen42.com/src/line.svg) A badge used for sharing communication ways on Line
- [![wechat](./src/wechat.svg)](https://badges.aleen42.com/src/wechat.svg) A badge used for sharing communication ways on WeChat
- [![lunkr](./src/lunkr.svg)](https://badges.aleen42.com/src/lunkr.svg) A badge used for sharing communication ways on Coremail Lunkr


### Multimedia

- [![soundcloud](./src/soundcloud.svg)](https://badges.aleen42.com/src/soundcloud.svg) A badge used for music shared on SoundCloud
- [![spotify](./src/spotify.svg)](https://badges.aleen42.com/src/spotify.svg) A badge used for music shared on Spotify


### Inc

- [![nasa](./src/nasa.svg)](https://badges.aleen42.com/src/nasa.svg) A badge used for projects of NASA
- [![codrops](./src/codrops.svg)](https://badges.aleen42.com/src/codrops.svg) A badge used for any project of Codrops Inc.
- [![xitu](./src/xitu.svg)](https://badges.aleen42.com/src/xitu.svg) A badge used for any articles of Xitu Inc.
- [![coremail](./src/coremail.svg)](https://badges.aleen42.com/src/coremail.svg) A badge used for the Coremail Inc.
- [![soundtooth](./src/soundtooth.svg)](https://badges.aleen42.com/src/soundtooth.svg) A badge used for any project of Soundtooth Inc.
- [![amazon](./src/amazon.svg)](https://badges.aleen42.com/src/amazon.svg) A badge used for the Amazon Inc.
- [![bitcoin](./src/bitcoin.svg)](https://badges.aleen42.com/src/bitcoin.svg) A badge used for the Bitcoin Inc.
- [![airbnb](./src/airbnb.svg)](https://badges.aleen42.com/src/airbnb.svg) A badge used for the Airbnb Inc.
- [![monsoon](./src/monsoon.svg)](https://badges.aleen42.com/src/monsoon.svg) A badge used for the Monsoon Inc.


### Social Media

- [![youtube](./src/youtube.svg)](https://badges.aleen42.com/src/youtube.svg) A badge used for Youtube.
- [![pinterest](./src/pinterest.svg)](https://badges.aleen42.com/src/pinterest.svg) A badge used for sharing communities on Pinterest.
- [![google_plus](./src/google_plus.svg)](https://badges.aleen42.com/src/google_plus.svg) A badge used for sharing communities on Google Plus.
- [![sina_weibo](./src/sina_weibo.svg)](https://badges.aleen42.com/src/sina_weibo.svg) A badge used for sharing communities on Sina Weibo.
- [![reddit](./src/reddit.svg)](https://badges.aleen42.com/src/reddit.svg) A badge used for articles shared on Reddit.
- [![snapchat](./src/snapchat.svg)](https://badges.aleen42.com/src/snapchat.svg) A badge used for Snapchat.
- [![facebook](./src/facebook.svg)](https://badges.aleen42.com/src/facebook.svg) A badge used for Facebook.
- [![instagram](./src/instagram.svg)](https://badges.aleen42.com/src/instagram.svg) A badge used for Instagram.
- [![twitter](./src/twitter.svg)](https://badges.aleen42.com/src/twitter.svg) A badge used for Twitter.


### Sponsors

- [![paypal](./src/paypal.svg)](https://badges.aleen42.com/src/paypal.svg) A badge used for Paypal sponsors.
- [![alipay](./src/alipay.svg)](https://badges.aleen42.com/src/alipay.svg) A badge used for Alipay sponsors.
- [![patreon](./src/patreon.svg)](https://badges.aleen42.com/src/patreon.svg) A badge used for Patreon sponsors.
- [![buymeacoffee](./src/buymeacoffee.svg)](https://badges.aleen42.com/src/buymeacoffee.svg) A badge used for BuyMeACoffee sponsors.
- [![issuehunt](./src/issuehunt.svg)](https://badges.aleen42.com/src/issuehunt.svg) A badge used for IssueHunt sponsors.


### Car

- [![lamborghini](./src/lamborghini.svg)](https://badges.aleen42.com/src/lamborghini.svg) A badge used for cars of Lamborghini
- [![bugatti](./src/bugatti.svg)](https://badges.aleen42.com/src/bugatti.svg) A badge used for cars of Bugatti
- [![porsche](./src/porsche.svg)](https://badges.aleen42.com/src/porsche.svg) A badge used for cars of Porsche
- [![tesla](./src/tesla.svg)](https://badges.aleen42.com/src/tesla.svg) A badge used for cars of Tesla
- [![ferrari](./src/ferrari.svg)](https://badges.aleen42.com/src/ferrari.svg) A badge used for cars of Ferrari
- [![toyota](./src/toyota.svg)](https://badges.aleen42.com/src/toyota.svg) A badge used for cars of Toyota
- [![mitsubishi](./src/mitsubishi.svg)](https://badges.aleen42.com/src/mitsubishi.svg) A badge used for cars of Mitsubishi
- [![maserati](./src/maserati.svg)](https://badges.aleen42.com/src/maserati.svg) A badge used for cars of Maserati
- [![marussia](./src/marussia.svg)](https://badges.aleen42.com/src/marussia.svg) A badge used for cars of Marussia
- [![koenigsegg](./src/koenigsegg.svg)](https://badges.aleen42.com/src/koenigsegg.svg) A badge used for cars of Koenigsegg
- [![bmw](./src/bmw.svg)](https://badges.aleen42.com/src/bmw.svg) A badge used for cars of BMW
- [![land_rover](./src/land_rover.svg)](https://badges.aleen42.com/src/land_rover.svg) A badge used for cars of Land Rover
- [![mercedes_benz](./src/mercedes_benz.svg)](https://badges.aleen42.com/src/mercedes_benz.svg) A badge used for cars of Mercedes Benz
- [![audi](./src/audi.svg)](https://badges.aleen42.com/src/audi.svg) A badge used for cars of Audi


### Football Clubs

- [![liverpool](./src/liverpool.svg)](https://badges.aleen42.com/src/liverpool.svg) A badge used for FC Liverpool
- [![real_madrid](./src/real_madrid.svg)](https://badges.aleen42.com/src/real_madrid.svg) A badge used for FC Real Madrid
- [![manchester_united](./src/manchester_united.svg)](https://badges.aleen42.com/src/manchester_united.svg) A badge used for FC Manchester United
- [![arsenal](./src/arsenal.svg)](https://badges.aleen42.com/src/arsenal.svg) A badge used for FC Arsenal
- [![ac_milan](./src/ac_milan.svg)](https://badges.aleen42.com/src/ac_milan.svg) A badge used for FC AC Milan
- [![bayern_munchen](./src/bayern_munchen.svg)](https://badges.aleen42.com/src/bayern_munchen.svg) A badge used for FC Bayern Munchen
- [![barcelona](./src/barcelona.svg)](https://badges.aleen42.com/src/barcelona.svg) A badge used for FC Barcelona
- [![chelsea](./src/chelsea.svg)](https://badges.aleen42.com/src/chelsea.svg) A badge used for FC Chelsea


### Game

- [![steam](./src/steam.svg)](https://badges.aleen42.com/src/steam.svg) A badge used for any game supported on the platform Steam
- [![ingress](./src/ingress.svg)](https://badges.aleen42.com/src/ingress.svg) A badge used for the game Ingress published by Niantic Inc.
- [![osu](./src/osu.svg)](https://badges.aleen42.com/src/osu.svg) A badge used for the game osu! published by ppy


### Designer

- [![behance](./src/behance.svg)](https://badges.aleen42.com/src/behance.svg) A badge used for designing projects sharing on Behance
- [![photoshop](./src/photoshop.svg)](https://badges.aleen42.com/src/photoshop.svg) A badge used for designing projects using Photoshop as a tool
- [![illustrator](./src/illustrator.svg)](https://badges.aleen42.com/src/illustrator.svg) A badge used for designing projects using Illustrator as a tool
- [![dreamweaver](./src/dreamweaver.svg)](https://badges.aleen42.com/src/dreamweaver.svg) A badge used for projects using Dreamweaver as a tool
- [![after_effects](./src/after_effects.svg)](https://badges.aleen42.com/src/after_effects.svg) A badge used for designing projects using After Effect as a tool
- [![premiere](./src/premiere.svg)](https://badges.aleen42.com/src/premiere.svg) A badge used for designing projects using Premiere as a tool
- [![flash](./src/flash.svg)](https://badges.aleen42.com/src/flash.svg) A badge used for designing projects using Flash as a tool
- [![zeplin](./src/zeplin.svg)](https://badges.aleen42.com/src/zeplin.svg) A badge used for designing projects with Zeplin

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://wiki.aleen42.com/contribution.html).

### :scroll: License

[MIT](https://wiki.aleen42.com/MIT.html) © aleen42
