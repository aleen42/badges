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
            fileName: 'react-router.svg',
            color: '#D0021B',
            description: 'A badge used for projects using React Router'
        },
    };
    ```
5. Run the script by typing `npm run build`
6. If succeed, the readme file will be automatically updated
7. Finally, push all updates and create a pull request for your change
8. **Done!!**

> Note that: so far haven't I thought out a perfect solution for calculating width of text accurately yet, and it means that the text can not be aligned in some cases.

*Note: if you really like this project, feel free to buy me a swimming chance:*

[![badges](./src/paypal.svg)](http://paypal.me/aleen42) [![badges](./src/patreon.svg)](https://www.patreon.com/aleen42) [![badges](./src/buymeacoffee.svg)](https://www.buymeacoffee.com/aleen42)

### Coder

- [![terser](./src/terser.svg)](https://badges.aleen42.com/src/terser.svg) A badge used for projects using [Terser](https://github.com/terser/terser) for compressing JavaScript
- [![codepen](./src/codepen.svg)](https://badges.aleen42.com/src/codepen.svg) A badge used for projects running on CodePen
- [![github](./src/github.svg)](https://badges.aleen42.com/src/github.svg) A badge used for GitHub repositories
- [![hacker](./src/hacker.svg)](https://badges.aleen42.com/src/hacker.svg) A badge used for hacking projects (**Business Using is not allowed)**
- [![idea](./src/idea.svg)](https://badges.aleen42.com/src/idea.svg) A badge for the IDEA editor
- [![rome](./src/rome.svg)](https://badges.aleen42.com/src/rome.svg) A badge used for projects built with [Rome](https://github.com/rome/tools)
- [![elasticsearch](./src/elasticsearch.svg)](https://badges.aleen42.com/src/elasticsearch.svg) A badge used for projects using [Elasticsearch](https://github.com/elastic/elasticsearch)
- [![kibana](./src/kibana.svg)](https://badges.aleen42.com/src/kibana.svg) A badge used for projects using [Kibana](https://github.com/elastic/kibana)
- [![logstash](./src/logstash.svg)](https://badges.aleen42.com/src/logstash.svg) A badge used for projects using [Logstash](https://github.com/elastic/logstash)
- [![gitbook](./src/gitbook_1.svg)](https://badges.aleen42.com/src/gitbook_1.svg) A badge used for books publish by Gitbook
- [![gitbook](./src/gitbook_2.svg)](https://badges.aleen42.com/src/gitbook_2.svg) A badge used for books publish by Gitbook
- [![chrome_extensions](./src/chrome_extensions.svg)](https://badges.aleen42.com/src/chrome_extensions.svg) A badge used for Chrome extensions
- [![gulp](./src/gulp.svg)](https://badges.aleen42.com/src/gulp.svg) A badge used for projects using Gulp to build
- [![angular](./src/angular.svg)](https://badges.aleen42.com/src/angular.svg) A badge used for repositories which has used the framework, Angular
- [![postcss](./src/postcss.svg)](https://badges.aleen42.com/src/postcss.svg) A badge used for projects using [PostCSS](https://github.com/postcss/postcss)
- [![gitlab](./src/gitlab.svg)](https://badges.aleen42.com/src/gitlab.svg) A badge used for Gitlab repositories
- [![mocha](./src/mocha.svg)](https://badges.aleen42.com/src/mocha.svg) A badge used for projects using Mocha for unit tests
- [![bower](./src/bower.svg)](https://badges.aleen42.com/src/bower.svg) A badge used for bower packages
- [![java](./src/java.svg)](https://badges.aleen42.com/src/java.svg) A badge used for projects that coded with Java
- [![tc39](./src/tc39_1.svg)](https://badges.aleen42.com/src/tc39_1.svg) A badge used for [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_2.svg)](https://badges.aleen42.com/src/tc39_2.svg) A badge used for proposals under stage 1 of [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_3.svg)](https://badges.aleen42.com/src/tc39_3.svg) A badge used for proposals under stage 2 of [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_4.svg)](https://badges.aleen42.com/src/tc39_4.svg) A badge used for proposals under stage 3 of [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_5.svg)](https://badges.aleen42.com/src/tc39_5.svg) A badge used for proposals under stage 4 of [TC39](https://github.com/tc39) committee
- [![parcel](./src/parcel.svg)](https://badges.aleen42.com/src/parcel.svg) A badge used for projects built with [Parcel](https://github.com/parcel-bundler/parcel)
- [![grafana](./src/grafana.svg)](https://badges.aleen42.com/src/grafana.svg) A badge used for projects using [Grafana](https://github.com/grafana/grafana)
- [![sublime_text](./src/sublime_text.svg)](https://badges.aleen42.com/src/sublime_text.svg) A badge for the Sulime Text editor
- [![rss](./src/rss.svg)](https://badges.aleen42.com/src/rss.svg) A badge used for RSS subscribing
- [![grunt](./src/grunt.svg)](https://badges.aleen42.com/src/grunt.svg) A badge used for projects using grunt to build
- [![tensorflow](./src/tensorflow.svg)](https://badges.aleen42.com/src/tensorflow.svg) A badge use for projects using Tensorflow
- [![esbuild](./src/esbuild.svg)](https://badges.aleen42.com/src/esbuild.svg) A badge used for projects built with [ESBuild](https://github.com/evanw/esbuild)
- [![javascript](./src/javascript.svg)](https://badges.aleen42.com/src/javascript.svg) A badge used for projects that coded with JavaScript
- [![node](./src/node.svg)](https://badges.aleen42.com/src/node.svg) A badge used for projects built with Node.js
- [![atom](./src/atom.svg)](https://badges.aleen42.com/src/atom.svg) A badge for the Atom editor
- [![cssnano](./src/cssnano.svg)](https://badges.aleen42.com/src/cssnano.svg) A badge used for projects using [CSSNano](https://github.com/cssnano/cssnano) for compacting CSS
- [![vue](./src/vue.svg)](https://badges.aleen42.com/src/vue.svg) A badge used for repositories which has used the framework, Vue
- [![vuepress](./src/vuepress.svg)](https://badges.aleen42.com/src/vuepress.svg) A badge used for books publish by Vuepress
- [![apiary](./src/apiary.svg)](https://badges.aleen42.com/src/apiary.svg) A badge used for documents written on Apiary
- [![tailwindcss](./src/tailwindcss.svg)](https://badges.aleen42.com/src/tailwindcss.svg) A badge used for projects using [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
- [![golang](./src/golang.svg)](https://badges.aleen42.com/src/golang.svg) A badge used for projects that coded with Golang
- [![react](./src/react.svg)](https://badges.aleen42.com/src/react.svg) A badge used for repositories that using [React](https://github.com/facebook/react)
- [![docker](./src/docker.svg)](https://badges.aleen42.com/src/docker.svg) A badge used for projects deployed on Docker
- [![kotlin](./src/kotlin.svg)](https://badges.aleen42.com/src/kotlin.svg) A badge used for projects that coded with Kotlin
- [![visual_studio_code](./src/visual_studio_code.svg)](https://badges.aleen42.com/src/visual_studio_code.svg) A badge for the Visual Studio Code IDE
- [![typescript](./src/typescript.svg)](https://badges.aleen42.com/src/typescript.svg) A badge used for projects that coded with TypeScript
- [![python](./src/python.svg)](https://badges.aleen42.com/src/python.svg) A badge used for projects that coded with Python
- [![jsfiddle](./src/jsfiddle.svg)](https://badges.aleen42.com/src/jsfiddle.svg) A badge used for projects running on JSFiddle
- [![webpack](./src/webpack.svg)](https://badges.aleen42.com/src/webpack.svg) A badge used for projects built with [Webpack](https://github.com/webpack/webpack)
- [![vitejs](./src/vitejs.svg)](https://badges.aleen42.com/src/vitejs.svg) A badge used for projects using [Vite](https://github.com/vitejs/vite)
- [![eslint](./src/eslint.svg)](https://badges.aleen42.com/src/eslint.svg) A badge used for projects using ESLint
- [![preact](./src/preact.svg)](https://badges.aleen42.com/src/preact.svg) A badge used for repositories that using [Preact](https://github.com/preactjs/preact)
- [![redux](./src/redux.svg)](https://badges.aleen42.com/src/redux.svg) A badge used for projects using React Redux
- [![visual_studio](./src/visual_studio.svg)](https://badges.aleen42.com/src/visual_studio.svg) A badge for the Visual Studio IDE
- [![jasmine](./src/jasmine.svg)](https://badges.aleen42.com/src/jasmine.svg) A badge used for projects using Jasmine for testing JavaScript
- [![qunit](./src/qunit.svg)](https://badges.aleen42.com/src/qunit.svg) A badge for projects using QUnit for unit tests
- [![reactivex](./src/reactivex.svg)](https://badges.aleen42.com/src/reactivex.svg) A badge for projects using ReactiveX
- [![modernizr](./src/modernizr.svg)](https://badges.aleen42.com/src/modernizr.svg) A badge for projects using Modernizr
- [![jest](./src/jest_1.svg)](https://badges.aleen42.com/src/jest_1.svg) A badge used for projects using [Jest](https://github.com/facebook/jest) for testing JavaScript.
- [![jest](./src/jest_2.svg)](https://badges.aleen42.com/src/jest_2.svg) A badge used for projects using [Jest](https://github.com/facebook/jest) for testing JavaScript. *(**official accepted** by [facebook/jest#5348](https://github.com/facebook/jest/issues/5438))*
- [![erlang](./src/erlang.svg)](https://badges.aleen42.com/src/erlang.svg) A badge used for projects that coded with Erlang
- [![react-router](./src/react-router.svg)](https://badges.aleen42.com/src/react-router.svg) A badge used for projects using [React Router](https://github.com/remix-run/react-router)
- [![npm](./src/npm.svg)](https://badges.aleen42.com/src/npm.svg) A badge used for npm packages
- [![rollup](./src/rollup.svg)](https://badges.aleen42.com/src/rollup.svg) A badge used for projects built with [Rollup](https://github.com/rollup/rollup)


### Community

- [![stackoverflow](./src/stackoverflow.svg)](https://badges.aleen42.com/src/stackoverflow.svg) A badge used for references on Stack Overflow.
- [![medium](./src/medium.svg)](https://badges.aleen42.com/src/medium.svg) A badge used for articles shared on Medium.
- [![superuser](./src/superuser.svg)](https://badges.aleen42.com/src/superuser.svg) A badge used for references on Super User
- [![stackexchange](./src/stackexchange.svg)](https://badges.aleen42.com/src/stackexchange.svg) A badge used for references on Stack Exchange.
- [![juejin_translation](./src/juejin_translation.svg)](https://badges.aleen42.com/src/juejin_translation.svg) A badge used for any articles translated by [gold-miner](https://github.com/xitu/gold-miner).
- [![serverfault](./src/serverfault.svg)](https://badges.aleen42.com/src/serverfault.svg) A badge used for references on Server Fault.


### Communication

- [![lunkr](./src/lunkr.svg)](https://badges.aleen42.com/src/lunkr.svg) A badge used for sharing communication ways on Coremail Lunkr
- [![wechat](./src/wechat.svg)](https://badges.aleen42.com/src/wechat.svg) A badge used for sharing communication ways on WeChat
- [![line](./src/line.svg)](https://badges.aleen42.com/src/line.svg) A badge used for sharing communication ways on Line
- [![whatsapp](./src/whatsapp.svg)](https://badges.aleen42.com/src/whatsapp.svg) A badge used for sharing communication ways on WhatsApp
- [![skype](./src/skype.svg)](https://badges.aleen42.com/src/skype.svg) A badge used for sharing communication ways on Skype
- [![telegram](./src/telegram.svg)](https://badges.aleen42.com/src/telegram.svg) A badge used for sharing communication ways on Telegram
- [![messenger](./src/messenger.svg)](https://badges.aleen42.com/src/messenger.svg) A badge used for sharing communication ways on Messenger
- [![discord](./src/discord.svg)](https://badges.aleen42.com/src/discord.svg) A badge used for groups discussed on [Discord](https://discord.com/)
- [![slack](./src/slack.svg)](https://badges.aleen42.com/src/slack.svg) A badge used for groups discussed on [Slack](https://slack.com/)
- [![gitter](./src/gitter.svg)](https://badges.aleen42.com/src/gitter.svg) A badge used for groups discussed on [Gitter](https://gitter.im/)


### Multimedia

- [![soundcloud](./src/soundcloud.svg)](https://badges.aleen42.com/src/soundcloud.svg) A badge used for music shared on SoundCloud
- [![spotify](./src/spotify.svg)](https://badges.aleen42.com/src/spotify.svg) A badge used for music shared on Spotify


### Inc

- [![soundtooth](./src/soundtooth.svg)](https://badges.aleen42.com/src/soundtooth.svg) A badge used for any project of Soundtooth Inc.
- [![bitcoin](./src/bitcoin.svg)](https://badges.aleen42.com/src/bitcoin.svg) A badge used for the Bitcoin Inc.
- [![amazon](./src/amazon.svg)](https://badges.aleen42.com/src/amazon.svg) A badge used for the Amazon Inc.
- [![monsoon](./src/monsoon.svg)](https://badges.aleen42.com/src/monsoon.svg) A badge used for the Monsoon Inc.
- [![codrops](./src/codrops.svg)](https://badges.aleen42.com/src/codrops.svg) A badge used for any project of Codrops Inc.
- [![coremail](./src/coremail.svg)](https://badges.aleen42.com/src/coremail.svg) A badge used for the Coremail Inc.
- [![nasa](./src/nasa.svg)](https://badges.aleen42.com/src/nasa.svg) A badge used for projects of NASA
- [![xitu](./src/xitu.svg)](https://badges.aleen42.com/src/xitu.svg) A badge used for any articles of Xitu Inc.
- [![airbnb](./src/airbnb.svg)](https://badges.aleen42.com/src/airbnb.svg) A badge used for the Airbnb Inc.


### Social Media

- [![youtube](./src/youtube.svg)](https://badges.aleen42.com/src/youtube.svg) A badge used for Youtube.
- [![google_plus](./src/google_plus.svg)](https://badges.aleen42.com/src/google_plus.svg) A badge used for sharing communities on Google Plus.
- [![reddit](./src/reddit.svg)](https://badges.aleen42.com/src/reddit.svg) A badge used for articles shared on Reddit.
- [![snapchat](./src/snapchat.svg)](https://badges.aleen42.com/src/snapchat.svg) A badge used for Snapchat.
- [![twitter](./src/twitter.svg)](https://badges.aleen42.com/src/twitter.svg) A badge used for Twitter.
- [![facebook](./src/facebook.svg)](https://badges.aleen42.com/src/facebook.svg) A badge used for Facebook.
- [![instagram](./src/instagram.svg)](https://badges.aleen42.com/src/instagram.svg) A badge used for Instagram.
- [![sina_weibo](./src/sina_weibo.svg)](https://badges.aleen42.com/src/sina_weibo.svg) A badge used for sharing communities on Sina Weibo.
- [![pinterest](./src/pinterest.svg)](https://badges.aleen42.com/src/pinterest.svg) A badge used for sharing communities on Pinterest.


### Sponsors

- [![patreon](./src/patreon.svg)](https://badges.aleen42.com/src/patreon.svg) A badge used for Patreon sponsors.
- [![buymeacoffee](./src/buymeacoffee.svg)](https://badges.aleen42.com/src/buymeacoffee.svg) A badge used for BuyMeACoffee sponsors.
- [![issuehunt](./src/issuehunt.svg)](https://badges.aleen42.com/src/issuehunt.svg) A badge used for IssueHunt sponsors.
- [![alipay](./src/alipay.svg)](https://badges.aleen42.com/src/alipay.svg) A badge used for Alipay sponsors.
- [![paypal](./src/paypal.svg)](https://badges.aleen42.com/src/paypal.svg) A badge used for Paypal sponsors.


### Car

- [![mercedes_benz](./src/mercedes_benz.svg)](https://badges.aleen42.com/src/mercedes_benz.svg) A badge used for cars of Mercedes Benz
- [![toyota](./src/toyota.svg)](https://badges.aleen42.com/src/toyota.svg) A badge used for cars of Toyota
- [![lamborghini](./src/lamborghini.svg)](https://badges.aleen42.com/src/lamborghini.svg) A badge used for cars of Lamborghini
- [![land_rover](./src/land_rover.svg)](https://badges.aleen42.com/src/land_rover.svg) A badge used for cars of Land Rover
- [![bmw](./src/bmw.svg)](https://badges.aleen42.com/src/bmw.svg) A badge used for cars of BMW
- [![audi](./src/audi.svg)](https://badges.aleen42.com/src/audi.svg) A badge used for cars of Audi
- [![marussia](./src/marussia.svg)](https://badges.aleen42.com/src/marussia.svg) A badge used for cars of Marussia
- [![maserati](./src/maserati.svg)](https://badges.aleen42.com/src/maserati.svg) A badge used for cars of Maserati
- [![koenigsegg](./src/koenigsegg.svg)](https://badges.aleen42.com/src/koenigsegg.svg) A badge used for cars of Koenigsegg
- [![bugatti](./src/bugatti.svg)](https://badges.aleen42.com/src/bugatti.svg) A badge used for cars of Bugatti
- [![porsche](./src/porsche.svg)](https://badges.aleen42.com/src/porsche.svg) A badge used for cars of Porsche
- [![mitsubishi](./src/mitsubishi.svg)](https://badges.aleen42.com/src/mitsubishi.svg) A badge used for cars of Mitsubishi
- [![ferrari](./src/ferrari.svg)](https://badges.aleen42.com/src/ferrari.svg) A badge used for cars of Ferrari
- [![tesla](./src/tesla.svg)](https://badges.aleen42.com/src/tesla.svg) A badge used for cars of Tesla


### Football Clubs

- [![manchester_united](./src/manchester_united.svg)](https://badges.aleen42.com/src/manchester_united.svg) A badge used for FC Manchester United
- [![real_madrid](./src/real_madrid.svg)](https://badges.aleen42.com/src/real_madrid.svg) A badge used for FC Real Madrid
- [![liverpool](./src/liverpool.svg)](https://badges.aleen42.com/src/liverpool.svg) A badge used for FC Liverpool
- [![chelsea](./src/chelsea.svg)](https://badges.aleen42.com/src/chelsea.svg) A badge used for FC Chelsea
- [![barcelona](./src/barcelona.svg)](https://badges.aleen42.com/src/barcelona.svg) A badge used for FC Barcelona
- [![bayern_munchen](./src/bayern_munchen.svg)](https://badges.aleen42.com/src/bayern_munchen.svg) A badge used for FC Bayern Munchen
- [![arsenal](./src/arsenal.svg)](https://badges.aleen42.com/src/arsenal.svg) A badge used for FC Arsenal
- [![ac_milan](./src/ac_milan.svg)](https://badges.aleen42.com/src/ac_milan.svg) A badge used for FC AC Milan


### Game

- [![ingress](./src/ingress.svg)](https://badges.aleen42.com/src/ingress.svg) A badge used for the game Ingress published by Niantic Inc.
- [![steam](./src/steam.svg)](https://badges.aleen42.com/src/steam.svg) A badge used for any game supported on the platform Steam
- [![osu](./src/osu.svg)](https://badges.aleen42.com/src/osu.svg) A badge used for the game osu! published by ppy


### Designer

- [![flash](./src/flash.svg)](https://badges.aleen42.com/src/flash.svg) A badge used for designing projects using Flash as a tool
- [![illustrator](./src/illustrator.svg)](https://badges.aleen42.com/src/illustrator.svg) A badge used for designing projects using Illustrator as a tool
- [![zeplin](./src/zeplin.svg)](https://badges.aleen42.com/src/zeplin.svg) A badge used for designing projects with Zeplin
- [![dreamweaver](./src/dreamweaver.svg)](https://badges.aleen42.com/src/dreamweaver.svg) A badge used for projects using Dreamweaver as a tool
- [![photoshop](./src/photoshop.svg)](https://badges.aleen42.com/src/photoshop.svg) A badge used for designing projects using Photoshop as a tool
- [![behance](./src/behance.svg)](https://badges.aleen42.com/src/behance.svg) A badge used for designing projects sharing on Behance
- [![after_effects](./src/after_effects.svg)](https://badges.aleen42.com/src/after_effects.svg) A badge used for designing projects using After Effect as a tool
- [![premiere](./src/premiere.svg)](https://badges.aleen42.com/src/premiere.svg) A badge used for designing projects using Premiere as a tool

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://wiki.aleen42.com/contribution.html).

### :scroll: License

[MIT](https://wiki.aleen42.com/MIT.html) © aleen42
