## badges

<p align="center">
    <img src="https://rawgit.com/aleen42/badges/master/badges.png" width="20%" />
</p>

<p align="center">
    To make badges more standard and acceptable.
</p>

[![badges](https://rawgit.com/aleen42/badges/master/aleen42.svg)](https://rawgit.com/aleen42/badges/master/aleen42.svg)

A collection of badges designed for personal repositories, and I hope that all of these badges can be widely accepted and used in the document of any project so that they can become more and more standard. If you also have some new ideas about badges, just open an issue. Always remember that: **More than a coder, more than a designer.**

So how to create such cute badges? It's very simple. As it's only registered on [npm](https://www.npmjs.com/), you should install it by typing:

```bash
sudo npm install -g badges-cli
```

Then you can use this command line tool for creating badges yourself:

```bash
badge -t Alipay -c 1CACEB -p alipay.svg -o output.svg
```

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
    'React Router': { fileName: 'router.svg', color: '62DAFB', description: 'A badge used for projects using React Router' }
    ```
5. Run the script by typing `npm run build`
6. If succeed, the readme file will be automatically updated
7. Finally, push all updates and create a pull request for your change
8. **Done!!**

> Note that: so far haven't I thought out a perfect solution for calculating width of text accurately yet, and it means that the text can not be aligned in some cases.

### Coder

- [![angular](https://rawgit.com/aleen42/badges/master/src/angular.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/angular.svg) A badge used for repositories which has used the framework, Angular
- [![npm](https://rawgit.com/aleen42/badges/master/src/npm.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/npm.svg) A badge used for npm packages
- [![gulp](https://rawgit.com/aleen42/badges/master/src/gulp.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/gulp.svg) A badge used for projects using Gulp to build
- [![vue](https://rawgit.com/aleen42/badges/master/src/vue.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/vue.svg) A badge used for repositories which has used the framework, Vue
- [![react](https://rawgit.com/aleen42/badges/master/src/react.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/react.svg) A badge used for repositories which has used the framework, React
- [![router](https://rawgit.com/aleen42/badges/master/src/router.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/router.svg) A badge used for projects using React Router
- [![modernizr](https://rawgit.com/aleen42/badges/master/src/modernizr.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/modernizr.svg) A badge for projects using Modernizr
- [![reactivex](https://rawgit.com/aleen42/badges/master/src/reactivex.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/reactivex.svg) A badge for projects using ReactiveX
- [![jasmine](https://rawgit.com/aleen42/badges/master/src/jasmine.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/jasmine.svg) A badge used for projects using Jasmine for unit tests
- [![visual_studio](https://rawgit.com/aleen42/badges/master/src/visual_studio.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/visual_studio.svg) A badge for the Visual Studio IDE
- [![visual_studio_code](https://rawgit.com/aleen42/badges/master/src/visual_studio_code.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/visual_studio_code.svg) A badge for the Visual Studio Code IDE
- [![qunit](https://rawgit.com/aleen42/badges/master/src/qunit.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/qunit.svg) A badge for projects using QUnit for unit tests
- [![redux](https://rawgit.com/aleen42/badges/master/src/redux.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/redux.svg) A badge used for projects using React Redux
- [![eslint](https://rawgit.com/aleen42/badges/master/src/eslint.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/eslint.svg) A badge used for projects using ESLint
- [![gitbook](https://rawgit.com/aleen42/badges/master/src/gitbook_1.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/gitbook_1.svg) A badge used for books publish on Gitbook
- [![gitbook](https://rawgit.com/aleen42/badges/master/src/gitbook_2.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/gitbook_2.svg) A badge used for books publish on Gitbook
- [![node](https://rawgit.com/aleen42/badges/master/src/node.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/node.svg) A badge used for projects built with Node.js
- [![gitter](https://rawgit.com/aleen42/badges/master/src/gitter.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/gitter.svg) A badge used for projects can be discussed on Gitter
- [![atom](https://rawgit.com/aleen42/badges/master/src/atom.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/atom.svg) A badge for the Atom editor
- [![sublime_text](https://rawgit.com/aleen42/badges/master/src/sublime_text.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/sublime_text.svg) A badge for the Sulime Text editor
- [![bower](https://rawgit.com/aleen42/badges/master/src/bower.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/bower.svg) A badge used for bower packages
- [![gitlab](https://rawgit.com/aleen42/badges/master/src/gitlab.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/gitlab.svg) A badge used for Gitlab repositories
- [![grunt](https://rawgit.com/aleen42/badges/master/src/grunt.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/grunt.svg) A badge used for projects using grunt to build
- [![rss](https://rawgit.com/aleen42/badges/master/src/rss.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/rss.svg) A badge used for RSS subscribing
- [![javascript](https://rawgit.com/aleen42/badges/master/src/javascript.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/javascript.svg) A badge used for projects that coded with JavaScript
- [![mocha](https://rawgit.com/aleen42/badges/master/src/mocha.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/mocha.svg) A badge used for projects using Mocha for unit tests
- [![apiary](https://rawgit.com/aleen42/badges/master/src/apiary.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/apiary.svg) A badge used for documents written on Apiary
- [![docker](https://rawgit.com/aleen42/badges/master/src/docker.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/docker.svg) A badge used for projects deployed on Docker
- [![jsfiddle](https://rawgit.com/aleen42/badges/master/src/jsfiddle.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/jsfiddle.svg) A badge used for projects running on JSFiddle
- [![webpack](https://rawgit.com/aleen42/badges/master/src/webpack.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/webpack.svg) A badge used for projects built with Webpack
- [![slack](https://rawgit.com/aleen42/badges/master/src/slack.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/slack.svg) A badge used for projects discussed on Slack
- [![idea](https://rawgit.com/aleen42/badges/master/src/idea.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/idea.svg) A badge for the IDEA editor
- [![codepen](https://rawgit.com/aleen42/badges/master/src/codepen.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/codepen.svg) A badge used for projects running on CodePen
- [![hacker](https://rawgit.com/aleen42/badges/master/src/hacker.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/hacker.svg) A badge used for hacking projects (**Business Using is not allowed)**
- [![github](https://rawgit.com/aleen42/badges/master/src/github.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/github.svg) A badge used for GitHub repositories


### Community

- [![juejin_translation](https://rawgit.com/aleen42/badges/master/src/juejin_translation.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/juejin_translation.svg) A badge used for any articles translated by gold-miner
- [![facebook](https://rawgit.com/aleen42/badges/master/src/facebook.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/facebook.svg) A badge used for sharing communities on Facebook
- [![stackexchange](https://rawgit.com/aleen42/badges/master/src/stackexchange.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/stackexchange.svg) A badge used for references on Stack Exchange
- [![superuser](https://rawgit.com/aleen42/badges/master/src/superuser.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/superuser.svg) A badge used for references on Super User
- [![twitter](https://rawgit.com/aleen42/badges/master/src/twitter.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/twitter.svg) A badge used for sharing communities on Twitter
- [![google_plus](https://rawgit.com/aleen42/badges/master/src/google_plus.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/google_plus.svg) A badge used for sharing communities on Google+
- [![pinterest](https://rawgit.com/aleen42/badges/master/src/pinterest.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/pinterest.svg) A badge used for sharing communities on Pinterest
- [![sina_weibo](https://rawgit.com/aleen42/badges/master/src/sina_weibo.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/sina_weibo.svg) A badge used for sharing communities on Sina Weibo
- [![reddit](https://rawgit.com/aleen42/badges/master/src/reddit.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/reddit.svg) A badge used for articles shared on Reddit
- [![stackoverflow](https://rawgit.com/aleen42/badges/master/src/stackoverflow.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/stackoverflow.svg) A badge used for GitHub repositories
- [![medium](https://rawgit.com/aleen42/badges/master/src/medium.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/medium.svg) A badge used for articles shared on Medium
- [![serverfault](https://rawgit.com/aleen42/badges/master/src/serverfault.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/serverfault.svg) A badge used for references on Server Fault


### Communication

- [![messenger](https://rawgit.com/aleen42/badges/master/src/messenger.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/messenger.svg) A badge used for sharing communication ways on Messenger
- [![telegram](https://rawgit.com/aleen42/badges/master/src/telegram.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/telegram.svg) A badge used for sharing communication ways on Telegram
- [![skype](https://rawgit.com/aleen42/badges/master/src/skype.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/skype.svg) A badge used for sharing communication ways on Skype
- [![whatsapp](https://rawgit.com/aleen42/badges/master/src/whatsapp.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/whatsapp.svg) A badge used for sharing communication ways on WhatsApp
- [![line](https://rawgit.com/aleen42/badges/master/src/line.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/line.svg) A badge used for sharing communication ways on Line
- [![wechat](https://rawgit.com/aleen42/badges/master/src/wechat.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/wechat.svg) A badge used for sharing communication ways on WeChat
- [![lunkr](https://rawgit.com/aleen42/badges/master/src/lunkr.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/lunkr.svg) A badge used for sharing communication ways on Coremail Lunkr


### Multimedia

- [![soundcloud](https://rawgit.com/aleen42/badges/master/src/soundcloud.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/soundcloud.svg) A badge used for music shared on SoundCloud
- [![spotify](https://rawgit.com/aleen42/badges/master/src/spotify.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/spotify.svg) A badge used for music shared on Spotify


### Inc

- [![nasa](https://rawgit.com/aleen42/badges/master/src/nasa.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/nasa.svg) A badge used for projects of NASA
- [![codrops](https://rawgit.com/aleen42/badges/master/src/codrops.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/codrops.svg) A badge used for any project of Codrops Inc.
- [![paypal](https://rawgit.com/aleen42/badges/master/src/paypal.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/paypal.svg) A badge used for the Paypal Inc.
- [![alipay](https://rawgit.com/aleen42/badges/master/src/alipay.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/alipay.svg) A badge used for the Alipay Inc.
- [![xitu](https://rawgit.com/aleen42/badges/master/src/xitu.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/xitu.svg) A badge used for any articles of Xitu Inc.
- [![coremail](https://rawgit.com/aleen42/badges/master/src/coremail.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/coremail.svg) A badge used for the Coremail Inc.
- [![soundtooth](https://rawgit.com/aleen42/badges/master/src/soundtooth.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/soundtooth.svg) A badge used for any project of Soundtooth Inc.
- [![patreon](https://rawgit.com/aleen42/badges/master/src/patreon.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/patreon.svg) A badge used for the Patreon Inc.
- [![amazon](https://rawgit.com/aleen42/badges/master/src/amazon.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/amazon.svg) A badge used for the Amazon Inc.
- [![bitcoin](https://rawgit.com/aleen42/badges/master/src/bitcoin.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/bitcoin.svg) A badge used for the Bitcoin Inc.
- [![airbnb](https://rawgit.com/aleen42/badges/master/src/airbnb.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/airbnb.svg) A badge used for the Airbnb Inc.
- [![monsoon](https://rawgit.com/aleen42/badges/master/src/monsoon.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/monsoon.svg) A badge used for the Monsoon Inc.


### Car

- [![lamborghini](https://rawgit.com/aleen42/badges/master/src/lamborghini.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/lamborghini.svg) A badge used for cars of Lamborghini
- [![bugatti](https://rawgit.com/aleen42/badges/master/src/bugatti.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/bugatti.svg) A badge used for cars of Bugatti
- [![porsche](https://rawgit.com/aleen42/badges/master/src/porsche.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/porsche.svg) A badge used for cars of Porsche
- [![tesla](https://rawgit.com/aleen42/badges/master/src/tesla.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/tesla.svg) A badge used for cars of Tesla
- [![ferrari](https://rawgit.com/aleen42/badges/master/src/ferrari.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/ferrari.svg) A badge used for cars of Ferrari
- [![toyota](https://rawgit.com/aleen42/badges/master/src/toyota.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/toyota.svg) A badge used for cars of Toyota
- [![mitsubishi](https://rawgit.com/aleen42/badges/master/src/mitsubishi.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/mitsubishi.svg) A badge used for cars of Mitsubishi
- [![maserati](https://rawgit.com/aleen42/badges/master/src/maserati.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/maserati.svg) A badge used for cars of Maserati
- [![marussia](https://rawgit.com/aleen42/badges/master/src/marussia.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/marussia.svg) A badge used for cars of Marussia
- [![koenigsegg](https://rawgit.com/aleen42/badges/master/src/koenigsegg.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/koenigsegg.svg) A badge used for cars of Koenigsegg
- [![bmw](https://rawgit.com/aleen42/badges/master/src/bmw.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/bmw.svg) A badge used for cars of BMW
- [![land_rover](https://rawgit.com/aleen42/badges/master/src/land_rover.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/land_rover.svg) A badge used for cars of Land Rover
- [![mercedes_benz](https://rawgit.com/aleen42/badges/master/src/mercedes_benz.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/mercedes_benz.svg) A badge used for cars of Mercedes Benz
- [![audi](https://rawgit.com/aleen42/badges/master/src/audi.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/audi.svg) A badge used for cars of Audi


### Football Clubs

- [![liverpool](https://rawgit.com/aleen42/badges/master/src/liverpool.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/liverpool.svg) A badge used for FC Liverpool
- [![real_madrid](https://rawgit.com/aleen42/badges/master/src/real_madrid.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/real_madrid.svg) A badge used for FC Real Madrid
- [![manchester_united](https://rawgit.com/aleen42/badges/master/src/manchester_united.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/manchester_united.svg) A badge used for FC Manchester United
- [![arsenal](https://rawgit.com/aleen42/badges/master/src/arsenal.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/arsenal.svg) A badge used for FC Arsenal
- [![ac_milan](https://rawgit.com/aleen42/badges/master/src/ac_milan.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/ac_milan.svg) A badge used for FC AC Milan
- [![bayern_munchen](https://rawgit.com/aleen42/badges/master/src/bayern_munchen.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/bayern_munchen.svg) A badge used for FC Bayern Munchen
- [![barcelona](https://rawgit.com/aleen42/badges/master/src/barcelona.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/barcelona.svg) A badge used for FC Barcelona
- [![chelsea](https://rawgit.com/aleen42/badges/master/src/chelsea.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/chelsea.svg) A badge used for FC Chelsea


### Game

- [![steam](https://rawgit.com/aleen42/badges/master/src/steam.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/steam.svg) A badge used for any game supported on the platform Steam
- [![ingress](https://rawgit.com/aleen42/badges/master/src/ingress.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/ingress.svg) A badge used for the game Ingress published by Niantic Inc.
- [![osu](https://rawgit.com/aleen42/badges/master/src/osu.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/osu.svg) A badge used for the game osu! published by ppy


### Designer

- [![behance](https://rawgit.com/aleen42/badges/master/src/behance.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/behance.svg) A badge used for designing projects sharing on Behance
- [![photoshop](https://rawgit.com/aleen42/badges/master/src/photoshop.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/photoshop.svg) A badge used for designing projects using Photoshop as a tool
- [![illustrator](https://rawgit.com/aleen42/badges/master/src/illustrator.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/illustrator.svg) A badge used for designing projects using Illustrator as a tool
- [![dreamweaver](https://rawgit.com/aleen42/badges/master/src/dreamweaver.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/dreamweaver.svg) A badge used for projects using Dreamweaver as a tool
- [![after_effects](https://rawgit.com/aleen42/badges/master/src/after_effects.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/after_effects.svg) A badge used for designing projects using After Effect as a tool
- [![premiere](https://rawgit.com/aleen42/badges/master/src/premiere.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/premiere.svg) A badge used for designing projects using Premiere as a tool
- [![flash](https://rawgit.com/aleen42/badges/master/src/flash.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/flash.svg) A badge used for designing projects using Flash as a tool
- [![zeplin](https://rawgit.com/aleen42/badges/master/src/zeplin.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/zeplin.svg) A badge used for designing projects with Zeplin

#### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.gitbooks.io/personalwiki/content/contribution.html).

#### :scroll: License

[MIT](https://aleen42.gitbooks.io/personalwiki/content/MIT.html) © aleen42
