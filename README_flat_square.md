## badges

<p align="center">
    <img src="./badges.svg" width="23%" height="300px" />
</p>

<p align="center">To make badges more standard and acceptable.</p>

<br />
<br />
<br />

![npm](src/npm.svg) ![cli](src/cli.svg) ![javascript](https://img.shields.io/badge/%20%20JavaScript-%20%20%20%20730L-f1e05a.svg) ![html](https://img.shields.io/badge/%20%20HTML-%20%20%20%20164L-e34c26.svg)

Alternative: [**default**](./README.md), [**flat-square**](./README_flat_square.md), [**dynamic-fore-color**](./README_dfc.md), [**dynamic-fore-color (flat_square)**](./README_flat_square_dfc.md).

A collection of badges designed for personal repositories, and I hope that all of these badges can be widely accepted and used in the document of any project so that they can become more and more standard. If you also have some new ideas about badges, just open an issue. Always remember that: **More than a coder, more than a designer.**

So, how to create such cute badges? It's very simple. As it's only registered on [npm](https://www.npmjs.com/), you should install it by typing:

```bash
sudo npm install -g badges-cli
```

Then you can use this command-line tool for creating badges yourself:

Take the following command as an example, `t` means text content, and `c` means color. If you want to create a badge with SVG sources, you can specify with `p` to tell the tool where to find your sources. Finally, `o` is used to specify where to export the badge.

```bash
badge -t Alipay -c "#1CACEB" -p alipay.svg --style=flat_square -o output.svg
```

One more thing, according to [the suggestion](https://github.com/facebook/jest/issues/5438#issuecomment-362553867) during creating badges for Jest, this tool has been extended to support skins with `s` to specify, which value can be "light" or "dark" temporarily at this moment.

To uninstall the tool, you can just uninstall it by typing:

```bash
sudo npm uninstall -g badges-cli
```

As for how to create a badge and add it to the collection? There are some steps you may need to follow:

1. Fork the repository and checkout the `main` branch
2. Install dependencies by running `npm i`
3. Create a logo with SVG formatted (**recommended**) or other formats like PNG. (_**The logo should be wrapped into a square, in other words, the width should be equal to the height, or it would have been horizontally squished.**_)
4. Save the logo in the folder `icon`
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
5. Run the command `npm run build` to build to test and to prettify `data.js`
6. If successful, the readme file will be automatically updated
7. Finally, push the icon and modification of the data file and create a pull request for your change, the GitHub Action will build all for you, **Done!!**

> Note that: so far haven't thought out a perfect solution for calculating the width of text accurately yet, and it means that the text can not be aligned in some cases.

*Note: if you like this project, feel free to buy me a swimming chance:*

[![badges](src/paypal.svg)](http://paypal.me/aleen42) [![badges](src/patreon.svg)](https://www.patreon.com/aleen42) [![badges](src/buymeacoffee.svg)](https://www.buymeacoffee.com/aleen42)

### Coder

- [![cli](./src/cli_flat_square.svg)](https://badges.aleen42.com/src/cli_flat_square.svg) A badge used for projects which provide command-line interfaces
- [![terser](./src/terser_flat_square.svg)](https://badges.aleen42.com/src/terser_flat_square.svg) A badge used for projects using [Terser](https://github.com/terser/terser) for compressing JavaScript
- [![codepen](./src/codepen_flat_square.svg)](https://badges.aleen42.com/src/codepen_flat_square.svg) A badge used for projects running on CodePen
- [![github](./src/github_flat_square.svg)](https://badges.aleen42.com/src/github_flat_square.svg) A badge used for GitHub repositories
- [![hacker](./src/hacker_flat_square.svg)](https://badges.aleen42.com/src/hacker_flat_square.svg) A badge used for hacking projects (**Business Using is not allowed)**
- [![idea](./src/idea_flat_square.svg)](https://badges.aleen42.com/src/idea_flat_square.svg) A badge for the IDEA editor
- [![rome](./src/rome_flat_square.svg)](https://badges.aleen42.com/src/rome_flat_square.svg) A badge used for projects built with [Rome](https://github.com/rome/tools)
- [![elasticsearch](./src/elasticsearch_flat_square.svg)](https://badges.aleen42.com/src/elasticsearch_flat_square.svg) A badge used for projects using [Elasticsearch](https://github.com/elastic/elasticsearch)
- [![kibana](./src/kibana_flat_square.svg)](https://badges.aleen42.com/src/kibana_flat_square.svg) A badge used for projects using [Kibana](https://github.com/elastic/kibana)
- [![logstash](./src/logstash_flat_square.svg)](https://badges.aleen42.com/src/logstash_flat_square.svg) A badge used for projects using [Logstash](https://github.com/elastic/logstash)
- [![gitbook](./src/gitbook_1_flat_square.svg)](https://badges.aleen42.com/src/gitbook_1_flat_square.svg) A badge used for books publish by Gitbook
- [![gitbook](./src/gitbook_2_flat_square.svg)](https://badges.aleen42.com/src/gitbook_2_flat_square.svg) A badge used for books publish by Gitbook
- [![chrome_extensions](./src/chrome_extensions_flat_square.svg)](https://badges.aleen42.com/src/chrome_extensions_flat_square.svg) A badge used for Chrome extensions
- [![gulp](./src/gulp_flat_square.svg)](https://badges.aleen42.com/src/gulp_flat_square.svg) A badge used for projects using Gulp to build
- [![angular](./src/angular_flat_square.svg)](https://badges.aleen42.com/src/angular_flat_square.svg) A badge used for repositories which has used the framework, Angular
- [![ember](./src/ember_flat_square.svg)](https://badges.aleen42.com/src/ember_flat_square.svg) A badge used for projects which has used [ember.js](https://github.com/emberjs/ember.js) for templating
- [![postcss](./src/postcss_flat_square.svg)](https://badges.aleen42.com/src/postcss_flat_square.svg) A badge used for projects using [PostCSS](https://github.com/postcss/postcss)
- [![svelte](./src/svelte_flat_square.svg)](https://badges.aleen42.com/src/svelte_flat_square.svg) A badge used for repositories that using [Svelte](https://github.com/sveltejs/svelte)
- [![gitlab](./src/gitlab_flat_square.svg)](https://badges.aleen42.com/src/gitlab_flat_square.svg) A badge used for Gitlab repositories
- [![html5](./src/html5_flat_square.svg)](https://badges.aleen42.com/src/html5_flat_square.svg) A badge used for projects using HTML 5
- [![mocha](./src/mocha_flat_square.svg)](https://badges.aleen42.com/src/mocha_flat_square.svg) A badge used for projects using Mocha for unit tests
- [![bower](./src/bower_flat_square.svg)](https://badges.aleen42.com/src/bower_flat_square.svg) A badge used for bower packages
- [![squirrelly](./src/squirrelly_flat_square.svg)](https://badges.aleen42.com/src/squirrelly_flat_square.svg) A badge used for projects which has used [squirrelly](https://github.com/squirrellyjs/squirrelly) for templating
- [![java](./src/java_flat_square.svg)](https://badges.aleen42.com/src/java_flat_square.svg) A badge used for projects that coded with Java
- [![tc39](./src/tc39_1_flat_square.svg)](https://badges.aleen42.com/src/tc39_1_flat_square.svg) A badge used for [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_2_flat_square.svg)](https://badges.aleen42.com/src/tc39_2_flat_square.svg) A badge used for proposals under stage 1 of [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_3_flat_square.svg)](https://badges.aleen42.com/src/tc39_3_flat_square.svg) A badge used for proposals under stage 2 of [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_4_flat_square.svg)](https://badges.aleen42.com/src/tc39_4_flat_square.svg) A badge used for proposals under stage 3 of [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_5_flat_square.svg)](https://badges.aleen42.com/src/tc39_5_flat_square.svg) A badge used for proposals under stage 4 of [TC39](https://github.com/tc39) committee
- [![handlebars](./src/handlebars_flat_square.svg)](https://badges.aleen42.com/src/handlebars_flat_square.svg) A badge used for projects which has used [Handlebars](https://github.com/handlebars-lang/handlebars.js) for templating
- [![parcel](./src/parcel_flat_square.svg)](https://badges.aleen42.com/src/parcel_flat_square.svg) A badge used for projects built with [Parcel](https://github.com/parcel-bundler/parcel)
- [![pugjs](./src/pugjs_flat_square.svg)](https://badges.aleen42.com/src/pugjs_flat_square.svg) A badge used for projects which has used [Pug](https://github.com/pugjs/pug) for templating
- [![grafana](./src/grafana_flat_square.svg)](https://badges.aleen42.com/src/grafana_flat_square.svg) A badge used for projects using [Grafana](https://github.com/grafana/grafana)
- [![sublime_text](./src/sublime_text_flat_square.svg)](https://badges.aleen42.com/src/sublime_text_flat_square.svg) A badge for the Sulime Text editor
- [![rss](./src/rss_flat_square.svg)](https://badges.aleen42.com/src/rss_flat_square.svg) A badge used for RSS subscribing
- [![grunt](./src/grunt_flat_square.svg)](https://badges.aleen42.com/src/grunt_flat_square.svg) A badge used for projects using grunt to build
- [![tensorflow](./src/tensorflow_flat_square.svg)](https://badges.aleen42.com/src/tensorflow_flat_square.svg) A badge use for projects using Tensorflow
- [![esbuild](./src/esbuild_flat_square.svg)](https://badges.aleen42.com/src/esbuild_flat_square.svg) A badge used for projects built with [ESBuild](https://github.com/evanw/esbuild)
- [![javascript](./src/javascript_flat_square.svg)](https://badges.aleen42.com/src/javascript_flat_square.svg) A badge used for projects that coded with JavaScript
- [![ejs](./src/ejs_flat_square.svg)](https://badges.aleen42.com/src/ejs_flat_square.svg) A badge used for projects which has used [ejs](https://github.com/mde/ejs) (Embedded JavaScript templates) for templating
- [![nunjucks](./src/nunjucks_flat_square.svg)](https://badges.aleen42.com/src/nunjucks_flat_square.svg) A badge used for projects which has used [Nunjucks](https://github.com/mozilla/nunjucks) for templating
- [![node](./src/node_flat_square.svg)](https://badges.aleen42.com/src/node_flat_square.svg) A badge used for projects built with Node.js
- [![atom](./src/atom_flat_square.svg)](https://badges.aleen42.com/src/atom_flat_square.svg) A badge for the Atom editor
- [![mongodb](./src/mongodb_flat_square.svg)](https://badges.aleen42.com/src/mongodb_flat_square.svg) A badge used for projects using [Mongo DB](https://github.com/mongodb/mongo)
- [![cssnano](./src/cssnano_flat_square.svg)](https://badges.aleen42.com/src/cssnano_flat_square.svg) A badge used for projects using [CSSNano](https://github.com/cssnano/cssnano) for compacting CSS
- [![vue](./src/vue_flat_square.svg)](https://badges.aleen42.com/src/vue_flat_square.svg) A badge used for repositories which has used the framework, Vue
- [![vuepress](./src/vuepress_flat_square.svg)](https://badges.aleen42.com/src/vuepress_flat_square.svg) A badge used for books publish by Vuepress
- [![apiary](./src/apiary_flat_square.svg)](https://badges.aleen42.com/src/apiary_flat_square.svg) A badge used for documents written on Apiary
- [![tailwindcss](./src/tailwindcss_flat_square.svg)](https://badges.aleen42.com/src/tailwindcss_flat_square.svg) A badge used for projects using [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
- [![golang](./src/golang_flat_square.svg)](https://badges.aleen42.com/src/golang_flat_square.svg) A badge used for projects that coded with Golang
- [![react](./src/react_flat_square.svg)](https://badges.aleen42.com/src/react_flat_square.svg) A badge used for repositories that using [React](https://github.com/facebook/react)
- [![docker](./src/docker_flat_square.svg)](https://badges.aleen42.com/src/docker_flat_square.svg) A badge used for projects deployed on Docker
- [![kotlin](./src/kotlin_flat_square.svg)](https://badges.aleen42.com/src/kotlin_flat_square.svg) A badge used for projects that coded with Kotlin
- [![visual_studio_code](./src/visual_studio_code_flat_square.svg)](https://badges.aleen42.com/src/visual_studio_code_flat_square.svg) A badge for the Visual Studio Code IDE
- [![backbone](./src/backbone_flat_square.svg)](https://badges.aleen42.com/src/backbone_flat_square.svg) A badge used for repositories that using [backbonejs](https://github.com/jashkenas/backbone)
- [![css3](./src/css3_flat_square.svg)](https://badges.aleen42.com/src/css3_flat_square.svg) A badge used for projects using CSS 3
- [![typescript](./src/typescript_flat_square.svg)](https://badges.aleen42.com/src/typescript_flat_square.svg) A badge used for projects that coded with TypeScript
- [![python](./src/python_flat_square.svg)](https://badges.aleen42.com/src/python_flat_square.svg) A badge used for projects that coded with Python
- [![jsfiddle](./src/jsfiddle_flat_square.svg)](https://badges.aleen42.com/src/jsfiddle_flat_square.svg) A badge used for projects running on JSFiddle
- [![lodash](./src/lodash_flat_square.svg)](https://badges.aleen42.com/src/lodash_flat_square.svg) A badge used for projects which has used [Lodash](https://github.com/lodash/lodash), a JavaScript utility
- [![marko](./src/marko_flat_square.svg)](https://badges.aleen42.com/src/marko_flat_square.svg) A badge used for projects which has used [marko](https://github.com/marko-js/marko) for templating
- [![webpack](./src/webpack_flat_square.svg)](https://badges.aleen42.com/src/webpack_flat_square.svg) A badge used for projects built with [Webpack](https://github.com/webpack/webpack)
- [![vitejs](./src/vitejs_flat_square.svg)](https://badges.aleen42.com/src/vitejs_flat_square.svg) A badge used for projects using [Vite](https://github.com/vitejs/vite)
- [![eslint](./src/eslint_flat_square.svg)](https://badges.aleen42.com/src/eslint_flat_square.svg) A badge used for projects using ESLint
- [![eclipse](./src/eclipse_flat_square.svg)](https://badges.aleen42.com/src/eclipse_flat_square.svg) A badge for the Eclipse editor
- [![preact](./src/preact_flat_square.svg)](https://badges.aleen42.com/src/preact_flat_square.svg) A badge used for repositories that using [Preact](https://github.com/preactjs/preact)
- [![redux](./src/redux_flat_square.svg)](https://badges.aleen42.com/src/redux_flat_square.svg) A badge used for projects using React Redux
- [![webix](./src/webix_flat_square.svg)](https://badges.aleen42.com/src/webix_flat_square.svg) A badge used for projects which has used [Webix](https://github.com/webix-hub/webix) for UI integration
- [![visual_studio](./src/visual_studio_flat_square.svg)](https://badges.aleen42.com/src/visual_studio_flat_square.svg) A badge for the Visual Studio IDE
- [![jasmine](./src/jasmine_flat_square.svg)](https://badges.aleen42.com/src/jasmine_flat_square.svg) A badge used for projects using Jasmine for testing JavaScript
- [![qunit](./src/qunit_flat_square.svg)](https://badges.aleen42.com/src/qunit_flat_square.svg) A badge for projects using QUnit for unit tests
- [![reactivex](./src/reactivex_flat_square.svg)](https://badges.aleen42.com/src/reactivex_flat_square.svg) A badge for projects using ReactiveX
- [![modernizr](./src/modernizr_flat_square.svg)](https://badges.aleen42.com/src/modernizr_flat_square.svg) A badge for projects using Modernizr
- [![jest](./src/jest_1_flat_square.svg)](https://badges.aleen42.com/src/jest_1_flat_square.svg) A badge used for projects using [Jest](https://github.com/facebook/jest) for testing JavaScript.
- [![jest](./src/jest_2_flat_square.svg)](https://badges.aleen42.com/src/jest_2_flat_square.svg) A badge used for projects using [Jest](https://github.com/facebook/jest) for testing JavaScript. *(**official accepted** by [facebook/jest#5348](https://github.com/facebook/jest/issues/5438))*
- [![erlang](./src/erlang_flat_square.svg)](https://badges.aleen42.com/src/erlang_flat_square.svg) A badge used for projects that coded with Erlang
- [![react-router](./src/react-router_flat_square.svg)](https://badges.aleen42.com/src/react-router_flat_square.svg) A badge used for projects using [React Router](https://github.com/remix-run/react-router)
- [![jade](./src/jade_flat_square.svg)](https://badges.aleen42.com/src/jade_flat_square.svg) A badge used for projects which has used [Jade](https://jade-lang.com) for templating
- [![npm](./src/npm_flat_square.svg)](https://badges.aleen42.com/src/npm_flat_square.svg) A badge used for npm packages
- [![rollup](./src/rollup_flat_square.svg)](https://badges.aleen42.com/src/rollup_flat_square.svg) A badge used for projects built with [Rollup](https://github.com/rollup/rollup)


### Community

- [![stackoverflow](./src/stackoverflow_flat_square.svg)](https://badges.aleen42.com/src/stackoverflow_flat_square.svg) A badge used for references on Stack Overflow.
- [![medium](./src/medium_flat_square.svg)](https://badges.aleen42.com/src/medium_flat_square.svg) A badge used for articles shared on Medium.
- [![superuser](./src/superuser_flat_square.svg)](https://badges.aleen42.com/src/superuser_flat_square.svg) A badge used for references on Super User
- [![stackexchange](./src/stackexchange_flat_square.svg)](https://badges.aleen42.com/src/stackexchange_flat_square.svg) A badge used for references on Stack Exchange.
- [![juejin_translation](./src/juejin_translation_flat_square.svg)](https://badges.aleen42.com/src/juejin_translation_flat_square.svg) A badge used for any articles translated by [gold-miner](https://github.com/xitu/gold-miner).
- [![serverfault](./src/serverfault_flat_square.svg)](https://badges.aleen42.com/src/serverfault_flat_square.svg) A badge used for references on Server Fault.


### Communication

- [![lunkr](./src/lunkr_flat_square.svg)](https://badges.aleen42.com/src/lunkr_flat_square.svg) A badge used for sharing communication ways on Coremail Lunkr
- [![wechat](./src/wechat_flat_square.svg)](https://badges.aleen42.com/src/wechat_flat_square.svg) A badge used for sharing communication ways on WeChat
- [![line](./src/line_flat_square.svg)](https://badges.aleen42.com/src/line_flat_square.svg) A badge used for sharing communication ways on Line
- [![whatsapp](./src/whatsapp_flat_square.svg)](https://badges.aleen42.com/src/whatsapp_flat_square.svg) A badge used for sharing communication ways on WhatsApp
- [![skype](./src/skype_flat_square.svg)](https://badges.aleen42.com/src/skype_flat_square.svg) A badge used for sharing communication ways on Skype
- [![telegram](./src/telegram_flat_square.svg)](https://badges.aleen42.com/src/telegram_flat_square.svg) A badge used for sharing communication ways on Telegram
- [![messenger](./src/messenger_flat_square.svg)](https://badges.aleen42.com/src/messenger_flat_square.svg) A badge used for sharing communication ways on Messenger
- [![discord](./src/discord_flat_square.svg)](https://badges.aleen42.com/src/discord_flat_square.svg) A badge used for groups discussed on [Discord](https://discord.com/)
- [![slack](./src/slack_flat_square.svg)](https://badges.aleen42.com/src/slack_flat_square.svg) A badge used for groups discussed on [Slack](https://slack.com/)
- [![gitter](./src/gitter_flat_square.svg)](https://badges.aleen42.com/src/gitter_flat_square.svg) A badge used for groups discussed on [Gitter](https://gitter.im/)


### Multimedia

- [![soundcloud](./src/soundcloud_flat_square.svg)](https://badges.aleen42.com/src/soundcloud_flat_square.svg) A badge used for music shared on SoundCloud
- [![spotify](./src/spotify_flat_square.svg)](https://badges.aleen42.com/src/spotify_flat_square.svg) A badge used for music shared on Spotify


### Inc

- [![soundtooth](./src/soundtooth_flat_square.svg)](https://badges.aleen42.com/src/soundtooth_flat_square.svg) A badge used for any project of Soundtooth Inc.
- [![bitcoin](./src/bitcoin_flat_square.svg)](https://badges.aleen42.com/src/bitcoin_flat_square.svg) A badge used for the Bitcoin Inc.
- [![amazon](./src/amazon_flat_square.svg)](https://badges.aleen42.com/src/amazon_flat_square.svg) A badge used for the Amazon Inc.
- [![monsoon](./src/monsoon_flat_square.svg)](https://badges.aleen42.com/src/monsoon_flat_square.svg) A badge used for the Monsoon Inc.
- [![codrops](./src/codrops_flat_square.svg)](https://badges.aleen42.com/src/codrops_flat_square.svg) A badge used for any project of Codrops Inc.
- [![coremail](./src/coremail_flat_square.svg)](https://badges.aleen42.com/src/coremail_flat_square.svg) A badge used for the Coremail Inc.
- [![nasa](./src/nasa_flat_square.svg)](https://badges.aleen42.com/src/nasa_flat_square.svg) A badge used for projects of NASA
- [![xitu](./src/xitu_flat_square.svg)](https://badges.aleen42.com/src/xitu_flat_square.svg) A badge used for any articles of Xitu Inc.
- [![airbnb](./src/airbnb_flat_square.svg)](https://badges.aleen42.com/src/airbnb_flat_square.svg) A badge used for the Airbnb Inc.


### Social Media

- [![youtube](./src/youtube_flat_square.svg)](https://badges.aleen42.com/src/youtube_flat_square.svg) A badge used for Youtube.
- [![google_plus](./src/google_plus_flat_square.svg)](https://badges.aleen42.com/src/google_plus_flat_square.svg) A badge used for sharing communities on Google Plus.
- [![reddit](./src/reddit_flat_square.svg)](https://badges.aleen42.com/src/reddit_flat_square.svg) A badge used for articles shared on Reddit.
- [![snapchat](./src/snapchat_flat_square.svg)](https://badges.aleen42.com/src/snapchat_flat_square.svg) A badge used for Snapchat.
- [![twitter](./src/twitter_flat_square.svg)](https://badges.aleen42.com/src/twitter_flat_square.svg) A badge used for Twitter.
- [![facebook](./src/facebook_flat_square.svg)](https://badges.aleen42.com/src/facebook_flat_square.svg) A badge used for Facebook.
- [![instagram](./src/instagram_flat_square.svg)](https://badges.aleen42.com/src/instagram_flat_square.svg) A badge used for Instagram.
- [![sina_weibo](./src/sina_weibo_flat_square.svg)](https://badges.aleen42.com/src/sina_weibo_flat_square.svg) A badge used for sharing communities on Sina Weibo.
- [![pinterest](./src/pinterest_flat_square.svg)](https://badges.aleen42.com/src/pinterest_flat_square.svg) A badge used for sharing communities on Pinterest.


### Sponsors

- [![patreon](./src/patreon_flat_square.svg)](https://badges.aleen42.com/src/patreon_flat_square.svg) A badge used for Patreon sponsors.
- [![buymeacoffee](./src/buymeacoffee_flat_square.svg)](https://badges.aleen42.com/src/buymeacoffee_flat_square.svg) A badge used for BuyMeACoffee sponsors.
- [![issuehunt](./src/issuehunt_flat_square.svg)](https://badges.aleen42.com/src/issuehunt_flat_square.svg) A badge used for IssueHunt sponsors.
- [![alipay](./src/alipay_flat_square.svg)](https://badges.aleen42.com/src/alipay_flat_square.svg) A badge used for Alipay sponsors.
- [![paypal](./src/paypal_flat_square.svg)](https://badges.aleen42.com/src/paypal_flat_square.svg) A badge used for Paypal sponsors.


### Car

- [![mercedes_benz](./src/mercedes_benz_flat_square.svg)](https://badges.aleen42.com/src/mercedes_benz_flat_square.svg) A badge used for cars of Mercedes Benz
- [![toyota](./src/toyota_flat_square.svg)](https://badges.aleen42.com/src/toyota_flat_square.svg) A badge used for cars of Toyota
- [![lamborghini](./src/lamborghini_flat_square.svg)](https://badges.aleen42.com/src/lamborghini_flat_square.svg) A badge used for cars of Lamborghini
- [![land_rover](./src/land_rover_flat_square.svg)](https://badges.aleen42.com/src/land_rover_flat_square.svg) A badge used for cars of Land Rover
- [![bmw](./src/bmw_flat_square.svg)](https://badges.aleen42.com/src/bmw_flat_square.svg) A badge used for cars of BMW
- [![audi](./src/audi_flat_square.svg)](https://badges.aleen42.com/src/audi_flat_square.svg) A badge used for cars of Audi
- [![marussia](./src/marussia_flat_square.svg)](https://badges.aleen42.com/src/marussia_flat_square.svg) A badge used for cars of Marussia
- [![maserati](./src/maserati_flat_square.svg)](https://badges.aleen42.com/src/maserati_flat_square.svg) A badge used for cars of Maserati
- [![koenigsegg](./src/koenigsegg_flat_square.svg)](https://badges.aleen42.com/src/koenigsegg_flat_square.svg) A badge used for cars of Koenigsegg
- [![bugatti](./src/bugatti_flat_square.svg)](https://badges.aleen42.com/src/bugatti_flat_square.svg) A badge used for cars of Bugatti
- [![porsche](./src/porsche_flat_square.svg)](https://badges.aleen42.com/src/porsche_flat_square.svg) A badge used for cars of Porsche
- [![mitsubishi](./src/mitsubishi_flat_square.svg)](https://badges.aleen42.com/src/mitsubishi_flat_square.svg) A badge used for cars of Mitsubishi
- [![ferrari](./src/ferrari_flat_square.svg)](https://badges.aleen42.com/src/ferrari_flat_square.svg) A badge used for cars of Ferrari
- [![tesla](./src/tesla_flat_square.svg)](https://badges.aleen42.com/src/tesla_flat_square.svg) A badge used for cars of Tesla


### Football Clubs

- [![manchester_united](./src/manchester_united_flat_square.svg)](https://badges.aleen42.com/src/manchester_united_flat_square.svg) A badge used for FC Manchester United
- [![real_madrid](./src/real_madrid_flat_square.svg)](https://badges.aleen42.com/src/real_madrid_flat_square.svg) A badge used for FC Real Madrid
- [![liverpool](./src/liverpool_flat_square.svg)](https://badges.aleen42.com/src/liverpool_flat_square.svg) A badge used for FC Liverpool
- [![chelsea](./src/chelsea_flat_square.svg)](https://badges.aleen42.com/src/chelsea_flat_square.svg) A badge used for FC Chelsea
- [![barcelona](./src/barcelona_flat_square.svg)](https://badges.aleen42.com/src/barcelona_flat_square.svg) A badge used for FC Barcelona
- [![bayern_munchen](./src/bayern_munchen_flat_square.svg)](https://badges.aleen42.com/src/bayern_munchen_flat_square.svg) A badge used for FC Bayern Munchen
- [![arsenal](./src/arsenal_flat_square.svg)](https://badges.aleen42.com/src/arsenal_flat_square.svg) A badge used for FC Arsenal
- [![ac_milan](./src/ac_milan_flat_square.svg)](https://badges.aleen42.com/src/ac_milan_flat_square.svg) A badge used for FC AC Milan


### Game

- [![ingress](./src/ingress_flat_square.svg)](https://badges.aleen42.com/src/ingress_flat_square.svg) A badge used for the game Ingress published by Niantic Inc.
- [![steam](./src/steam_flat_square.svg)](https://badges.aleen42.com/src/steam_flat_square.svg) A badge used for any game supported on the platform Steam
- [![osu](./src/osu_flat_square.svg)](https://badges.aleen42.com/src/osu_flat_square.svg) A badge used for the game osu! published by ppy


### Designer

- [![flash](./src/flash_flat_square.svg)](https://badges.aleen42.com/src/flash_flat_square.svg) A badge used for designing projects using Flash as a tool
- [![illustrator](./src/illustrator_flat_square.svg)](https://badges.aleen42.com/src/illustrator_flat_square.svg) A badge used for designing projects using Illustrator as a tool
- [![zeplin](./src/zeplin_flat_square.svg)](https://badges.aleen42.com/src/zeplin_flat_square.svg) A badge used for designing projects with Zeplin
- [![dreamweaver](./src/dreamweaver_flat_square.svg)](https://badges.aleen42.com/src/dreamweaver_flat_square.svg) A badge used for projects using Dreamweaver as a tool
- [![photoshop](./src/photoshop_flat_square.svg)](https://badges.aleen42.com/src/photoshop_flat_square.svg) A badge used for designing projects using Photoshop as a tool
- [![behance](./src/behance_flat_square.svg)](https://badges.aleen42.com/src/behance_flat_square.svg) A badge used for designing projects sharing on Behance
- [![after_effects](./src/after_effects_flat_square.svg)](https://badges.aleen42.com/src/after_effects_flat_square.svg) A badge used for designing projects using After Effect as a tool
- [![premiere](./src/premiere_flat_square.svg)](https://badges.aleen42.com/src/premiere_flat_square.svg) A badge used for designing projects using Premiere as a tool

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://wiki.aleen42.com/contribution.html).

### :scroll: License

[MIT](https://wiki.aleen42.com/MIT.html) © aleen42
