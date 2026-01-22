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
badge -t Alipay -c "#1CACEB" -p alipay.svg --dynamic-fore-color -o output.svg
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

### AI

- [![grok](./src/grok_dfc.svg)](https://badges.aleen42.com/src/grok_dfc.svg) A badge used for projects utilizing [Grok](https://github.com/xai-org/grok-1)
- [![openai](./src/openai_dfc.svg)](https://badges.aleen42.com/src/openai_dfc.svg) A badge used for projects utilizing [OpenAI](https://github.com/openai) models
- [![pytorch](./src/pytorch_dfc.svg)](https://badges.aleen42.com/src/pytorch_dfc.svg) A badge used for projects built with [PyTorch](https://github.com/pytorch/pytorch)
- [![anthropic](./src/anthropic_dfc.svg)](https://badges.aleen42.com/src/anthropic_dfc.svg) A badge used for projects utilizing [Anthropic](https://github.com/anthropics) models
- [![hugging_face](./src/hugging_face_dfc.svg)](https://badges.aleen42.com/src/hugging_face_dfc.svg) A badge used for projects utilizing [Hugging Face](https://github.com/huggingface)
- [![langchain](./src/langchain_dfc.svg)](https://badges.aleen42.com/src/langchain_dfc.svg) A badge used for projects built with [LangChain](https://github.com/langchain-ai/langchain)
- [![langgraph](./src/langgraph_dfc.svg)](https://badges.aleen42.com/src/langgraph_dfc.svg) A badge used for projects built with [LangGraph](https://github.com/langchain-ai/langgraph)
- [![chatglm](./src/chatglm_dfc.svg)](https://badges.aleen42.com/src/chatglm_dfc.svg) A badge used for projects utilizing GLM models provided by [z.ai](https://github.com/zai-org)
- [![qwen](./src/qwen_dfc.svg)](https://badges.aleen42.com/src/qwen_dfc.svg) A badge used for projects utilizing [Qwen](https://github.com/QwenLM/Qwen)
- [![deepseek](./src/deepseek_dfc.svg)](https://badges.aleen42.com/src/deepseek_dfc.svg) A badge used for projects utilizing [DeepSeek](https://github.com/deepseek-ai/DeepSeek-V3)
- [![google_gemini](./src/google_gemini_dfc.svg)](https://badges.aleen42.com/src/google_gemini_dfc.svg) A badge used for projects utilizing [Google Gemini](https://github.com/google-gemini)


### Coder

- [![nextdotjs](./src/nextdotjs_dfc.svg)](https://badges.aleen42.com/src/nextdotjs_dfc.svg) A badge used for projects built with [Next.js](https://github.com/vercel/next.js)
- [![cli](./src/cli_dfc.svg)](https://badges.aleen42.com/src/cli_dfc.svg) A badge used for projects which provide command-line interfaces
- [![terser](./src/terser_dfc.svg)](https://badges.aleen42.com/src/terser_dfc.svg) A badge used for projects using [Terser](https://github.com/terser/terser) for compressing JavaScript
- [![codepen](./src/codepen_dfc.svg)](https://badges.aleen42.com/src/codepen_dfc.svg) A badge used for projects running on CodePen
- [![github](./src/github_dfc.svg)](https://badges.aleen42.com/src/github_dfc.svg) A badge used for GitHub repositories
- [![hacker](./src/hacker_dfc.svg)](https://badges.aleen42.com/src/hacker_dfc.svg) A badge used for hacking projects (**Business Using is not allowed)**
- [![idea](./src/idea_dfc.svg)](https://badges.aleen42.com/src/idea_dfc.svg) A badge for the IDEA editor
- [![rome](./src/rome_dfc.svg)](https://badges.aleen42.com/src/rome_dfc.svg) A badge used for projects built with [Rome](https://github.com/rome/tools)
- [![elasticsearch](./src/elasticsearch_dfc.svg)](https://badges.aleen42.com/src/elasticsearch_dfc.svg) A badge used for projects using [Elasticsearch](https://github.com/elastic/elasticsearch)
- [![kibana](./src/kibana_dfc.svg)](https://badges.aleen42.com/src/kibana_dfc.svg) A badge used for projects using [Kibana](https://github.com/elastic/kibana)
- [![logstash](./src/logstash_dfc.svg)](https://badges.aleen42.com/src/logstash_dfc.svg) A badge used for projects using [Logstash](https://github.com/elastic/logstash)
- [![gitbook](./src/gitbook_1_dfc.svg)](https://badges.aleen42.com/src/gitbook_1_dfc.svg) A badge used for books publish by Gitbook
- [![gitbook](./src/gitbook_2_dfc.svg)](https://badges.aleen42.com/src/gitbook_2_dfc.svg) A badge used for books publish by Gitbook
- [![chrome_extensions](./src/chrome_extensions_dfc.svg)](https://badges.aleen42.com/src/chrome_extensions_dfc.svg) A badge used for Chrome extensions
- [![gulp](./src/gulp_dfc.svg)](https://badges.aleen42.com/src/gulp_dfc.svg) A badge used for projects using [Gulp](https://github.com/gulpjs/gulp) to build
- [![angular](./src/angular_dfc.svg)](https://badges.aleen42.com/src/angular_dfc.svg) A badge used for repositories which has used the framework, [Angular](https://github.com/angular/angular)
- [![redis](./src/redis_dfc.svg)](https://badges.aleen42.com/src/redis_dfc.svg) A badge used for projects using [Redis](https://github.com/redis/redis)
- [![ember](./src/ember_dfc.svg)](https://badges.aleen42.com/src/ember_dfc.svg) A badge used for projects which has used [ember.js](https://github.com/emberjs/ember.js) for templating
- [![rust](./src/rust_dfc.svg)](https://badges.aleen42.com/src/rust_dfc.svg) A badge used for projects that coded with [Rust](https://github.com/rust-lang/rust)
- [![postcss](./src/postcss_dfc.svg)](https://badges.aleen42.com/src/postcss_dfc.svg) A badge used for projects using [PostCSS](https://github.com/postcss/postcss)
- [![svelte](./src/svelte_dfc.svg)](https://badges.aleen42.com/src/svelte_dfc.svg) A badge used for projects built with [Svelte](https://github.com/sveltejs/svelte)
- [![gitlab](./src/gitlab_dfc.svg)](https://badges.aleen42.com/src/gitlab_dfc.svg) A badge used for Gitlab repositories
- [![html5](./src/html5_dfc.svg)](https://badges.aleen42.com/src/html5_dfc.svg) A badge used for projects using HTML 5
- [![mocha](./src/mocha_dfc.svg)](https://badges.aleen42.com/src/mocha_dfc.svg) A badge used for projects using [Mocha](https://github.com/mochajs/mocha) for unit tests
- [![bower](./src/bower_dfc.svg)](https://badges.aleen42.com/src/bower_dfc.svg) A badge used for [bower](https://github.com/bower/bower) packages
- [![squirrelly](./src/squirrelly_dfc.svg)](https://badges.aleen42.com/src/squirrelly_dfc.svg) A badge used for projects which has used [squirrelly](https://github.com/squirrellyjs/squirrelly) for templating
- [![java](./src/java_dfc.svg)](https://badges.aleen42.com/src/java_dfc.svg) A badge used for projects that coded with [Java](https://github.com/openjdk/jdk)
- [![tc39](./src/tc39_1_dfc.svg)](https://badges.aleen42.com/src/tc39_1_dfc.svg) A badge used for [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_2_dfc.svg)](https://badges.aleen42.com/src/tc39_2_dfc.svg) A badge used for proposals under stage 1 of [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_3_dfc.svg)](https://badges.aleen42.com/src/tc39_3_dfc.svg) A badge used for proposals under stage 2 of [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_4_dfc.svg)](https://badges.aleen42.com/src/tc39_4_dfc.svg) A badge used for proposals under stage 3 of [TC39](https://github.com/tc39) committee
- [![tc39](./src/tc39_5_dfc.svg)](https://badges.aleen42.com/src/tc39_5_dfc.svg) A badge used for proposals under stage 4 of [TC39](https://github.com/tc39) committee
- [![handlebars](./src/handlebars_dfc.svg)](https://badges.aleen42.com/src/handlebars_dfc.svg) A badge used for projects which has used [Handlebars](https://github.com/handlebars-lang/handlebars.js) for templating
- [![parcel](./src/parcel_dfc.svg)](https://badges.aleen42.com/src/parcel_dfc.svg) A badge used for projects built with [Parcel](https://github.com/parcel-bundler/parcel)
- [![pugjs](./src/pugjs_dfc.svg)](https://badges.aleen42.com/src/pugjs_dfc.svg) A badge used for projects which has used [Pug](https://github.com/pugjs/pug) for templating
- [![grafana](./src/grafana_dfc.svg)](https://badges.aleen42.com/src/grafana_dfc.svg) A badge used for projects using [Grafana](https://github.com/grafana/grafana)
- [![sublime_text](./src/sublime_text_dfc.svg)](https://badges.aleen42.com/src/sublime_text_dfc.svg) A badge for the Sulime Text editor
- [![rss](./src/rss_dfc.svg)](https://badges.aleen42.com/src/rss_dfc.svg) A badge used for RSS subscribing
- [![grunt](./src/grunt_dfc.svg)](https://badges.aleen42.com/src/grunt_dfc.svg) A badge used for projects using [grunt](https://github.com/gruntjs/grunt) to build
- [![tensorflow](./src/tensorflow_dfc.svg)](https://badges.aleen42.com/src/tensorflow_dfc.svg) A badge use for projects using [Tensorflow](https://github.com/tensorflow/tensorflow)
- [![esbuild](./src/esbuild_dfc.svg)](https://badges.aleen42.com/src/esbuild_dfc.svg) A badge used for projects built with [ESBuild](https://github.com/evanw/esbuild)
- [![javascript](./src/javascript_dfc.svg)](https://badges.aleen42.com/src/javascript_dfc.svg) A badge used for projects that coded with JavaScript
- [![ejs](./src/ejs_dfc.svg)](https://badges.aleen42.com/src/ejs_dfc.svg) A badge used for projects which has used [ejs](https://github.com/mde/ejs) (Embedded JavaScript templates) for templating
- [![nunjucks](./src/nunjucks_dfc.svg)](https://badges.aleen42.com/src/nunjucks_dfc.svg) A badge used for projects which has used [Nunjucks](https://github.com/mozilla/nunjucks) for templating
- [![node](./src/node_dfc.svg)](https://badges.aleen42.com/src/node_dfc.svg) A badge used for projects built with [Node.js](https://github.com/nodejs/node)
- [![mongodb](./src/mongodb_dfc.svg)](https://badges.aleen42.com/src/mongodb_dfc.svg) A badge used for projects using [MongoDB](https://github.com/mongodb/mongo)
- [![atom](./src/atom_dfc.svg)](https://badges.aleen42.com/src/atom_dfc.svg) A badge for the Atom editor
- [![mongodb](./src/mongodb_dfc.svg)](https://badges.aleen42.com/src/mongodb_dfc.svg) A badge used for projects using [Mongo DB](https://github.com/mongodb/mongo)
- [![cssnano](./src/cssnano_dfc.svg)](https://badges.aleen42.com/src/cssnano_dfc.svg) A badge used for projects using [CSSNano](https://github.com/cssnano/cssnano) for compacting CSS
- [![vue](./src/vue_dfc.svg)](https://badges.aleen42.com/src/vue_dfc.svg) A badge used for repositories which has used the framework, [Vue](https://github.com/vuejs/core)
- [![vuepress](./src/vuepress_dfc.svg)](https://badges.aleen42.com/src/vuepress_dfc.svg) A badge used for books publish by [Vuepress](https://github.com/vuejs/vuepress)
- [![supabase](./src/supabase_dfc.svg)](https://badges.aleen42.com/src/supabase_dfc.svg) A badge used for projects using [Supabase](https://github.com/supabase/supabase)
- [![apiary](./src/apiary_dfc.svg)](https://badges.aleen42.com/src/apiary_dfc.svg) A badge used for documents written on Apiary
- [![fastapi](./src/fastapi_dfc.svg)](https://badges.aleen42.com/src/fastapi_dfc.svg) A badge used for projects built with [FastAPI](https://github.com/fastapi/fastapi)
- [![tailwindcss](./src/tailwindcss_dfc.svg)](https://badges.aleen42.com/src/tailwindcss_dfc.svg) A badge used for projects using [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
- [![golang](./src/golang_dfc.svg)](https://badges.aleen42.com/src/golang_dfc.svg) A badge used for projects that coded with [Golang](https://github.com/golang/go)
- [![react](./src/react_dfc.svg)](https://badges.aleen42.com/src/react_dfc.svg) A badge used for repositories that using [React](https://github.com/facebook/react)
- [![docker](./src/docker_dfc.svg)](https://badges.aleen42.com/src/docker_dfc.svg) A badge used for projects deployed on Docker
- [![kotlin](./src/kotlin_dfc.svg)](https://badges.aleen42.com/src/kotlin_dfc.svg) A badge used for projects that coded with [Kotlin](https://github.com/JetBrains/kotlin)
- [![visual_studio_code](./src/visual_studio_code_dfc.svg)](https://badges.aleen42.com/src/visual_studio_code_dfc.svg) A badge for the [Visual Studio Code](https://github.com/microsoft/vscode) IDE
- [![backbone](./src/backbone_dfc.svg)](https://badges.aleen42.com/src/backbone_dfc.svg) A badge used for repositories that using [backbonejs](https://github.com/jashkenas/backbone)
- [![css3](./src/css3_dfc.svg)](https://badges.aleen42.com/src/css3_dfc.svg) A badge used for projects using CSS 3
- [![typescript](./src/typescript_dfc.svg)](https://badges.aleen42.com/src/typescript_dfc.svg) A badge used for projects that coded with [TypeScript](https://github.com/microsoft/TypeScript)
- [![cplusplus](./src/cplusplus_dfc.svg)](https://badges.aleen42.com/src/cplusplus_dfc.svg) A badge used for projects that coded with C++
- [![flutter](./src/flutter_dfc.svg)](https://badges.aleen42.com/src/flutter_dfc.svg) A badge used for projects built with [Flutter](https://github.com/flutter/flutter)
- [![python](./src/python_dfc.svg)](https://badges.aleen42.com/src/python_dfc.svg) A badge used for projects that coded with [Python](https://github.com/python/cpython)
- [![jsfiddle](./src/jsfiddle_dfc.svg)](https://badges.aleen42.com/src/jsfiddle_dfc.svg) A badge used for projects running on JSFiddle
- [![lodash](./src/lodash_dfc.svg)](https://badges.aleen42.com/src/lodash_dfc.svg) A badge used for projects which has used [Lodash](https://github.com/lodash/lodash), a JavaScript utility
- [![marko](./src/marko_dfc.svg)](https://badges.aleen42.com/src/marko_dfc.svg) A badge used for projects which has used [marko](https://github.com/marko-js/marko) for templating
- [![webpack](./src/webpack_dfc.svg)](https://badges.aleen42.com/src/webpack_dfc.svg) A badge used for projects built with [Webpack](https://github.com/webpack/webpack)
- [![kubernetes](./src/kubernetes_dfc.svg)](https://badges.aleen42.com/src/kubernetes_dfc.svg) A badge used for projects using [Kubernetes](https://github.com/kubernetes/kubernetes)
- [![postgresql](./src/postgresql_dfc.svg)](https://badges.aleen42.com/src/postgresql_dfc.svg) A badge used for projects using [PostgreSQL](https://github.com/postgres/postgres)
- [![vitejs](./src/vitejs_dfc.svg)](https://badges.aleen42.com/src/vitejs_dfc.svg) A badge used for projects using [Vite](https://github.com/vitejs/vite)
- [![eslint](./src/eslint_dfc.svg)](https://badges.aleen42.com/src/eslint_dfc.svg) A badge used for projects using [ESLint](https://github.com/eslint/eslint)
- [![eclipse](./src/eclipse_dfc.svg)](https://badges.aleen42.com/src/eclipse_dfc.svg) A badge for the Eclipse editor
- [![preact](./src/preact_dfc.svg)](https://badges.aleen42.com/src/preact_dfc.svg) A badge used for repositories that using [Preact](https://github.com/preactjs/preact)
- [![redux](./src/redux_dfc.svg)](https://badges.aleen42.com/src/redux_dfc.svg) A badge used for projects using [React Redux](https://github.com/reduxjs/react-redux)
- [![webix](./src/webix_dfc.svg)](https://badges.aleen42.com/src/webix_dfc.svg) A badge used for projects which has used [Webix](https://github.com/webix-hub/webix) for UI integration
- [![visual_studio](./src/visual_studio_dfc.svg)](https://badges.aleen42.com/src/visual_studio_dfc.svg) A badge for the Visual Studio IDE
- [![csharp](./src/csharp_dfc.svg)](https://badges.aleen42.com/src/csharp_dfc.svg) A badge used for projects that coded with C#
- [![jasmine](./src/jasmine_dfc.svg)](https://badges.aleen42.com/src/jasmine_dfc.svg) A badge used for projects using [Jasmine](https://github.com/jasmine/jasmine) for testing JavaScript
- [![qunit](./src/qunit_dfc.svg)](https://badges.aleen42.com/src/qunit_dfc.svg) A badge for projects using [QUnit](https://github.com/qunitjs/qunit) for unit tests
- [![reactivex](./src/reactivex_dfc.svg)](https://badges.aleen42.com/src/reactivex_dfc.svg) A badge for projects using [ReactiveX](https://github.com/ReactiveX/RxJS)
- [![modernizr](./src/modernizr_dfc.svg)](https://badges.aleen42.com/src/modernizr_dfc.svg) A badge for projects using [Modernizr](https://github.com/Modernizr/Modernizr)
- [![jest](./src/jest_1_dfc.svg)](https://badges.aleen42.com/src/jest_1_dfc.svg) A badge used for projects using [Jest](https://github.com/facebook/jest) for testing JavaScript.
- [![jest](./src/jest_2_dfc.svg)](https://badges.aleen42.com/src/jest_2_dfc.svg) A badge used for projects using [Jest](https://github.com/facebook/jest) for testing JavaScript. *(**official accepted** by [facebook/jest#5348](https://github.com/facebook/jest/issues/5438))*
- [![erlang](./src/erlang_dfc.svg)](https://badges.aleen42.com/src/erlang_dfc.svg) A badge used for projects that coded with [Erlang](https://github.com/erlang/otp)
- [![nestjs](./src/nestjs_dfc.svg)](https://badges.aleen42.com/src/nestjs_dfc.svg) A badge used for projects built with [NestJS](https://github.com/nestjs/nest)
- [![react-router](./src/react-router_dfc.svg)](https://badges.aleen42.com/src/react-router_dfc.svg) A badge used for projects using [React Router](https://github.com/remix-run/react-router)
- [![jade](./src/jade_dfc.svg)](https://badges.aleen42.com/src/jade_dfc.svg) A badge used for projects which has used [Jade](https://jade-lang.com) for templating
- [![npm](./src/npm_dfc.svg)](https://badges.aleen42.com/src/npm_dfc.svg) A badge used for [npm](https://github.com/npm/cli) packages
- [![rollup](./src/rollup_dfc.svg)](https://badges.aleen42.com/src/rollup_dfc.svg) A badge used for projects built with [Rollup](https://github.com/rollup/rollup)


### Community

- [![stackoverflow](./src/stackoverflow_dfc.svg)](https://badges.aleen42.com/src/stackoverflow_dfc.svg) A badge used for references on Stack Overflow.
- [![medium](./src/medium_dfc.svg)](https://badges.aleen42.com/src/medium_dfc.svg) A badge used for articles shared on Medium.
- [![superuser](./src/superuser_dfc.svg)](https://badges.aleen42.com/src/superuser_dfc.svg) A badge used for references on Super User
- [![stackexchange](./src/stackexchange_dfc.svg)](https://badges.aleen42.com/src/stackexchange_dfc.svg) A badge used for references on Stack Exchange.
- [![juejin_translation](./src/juejin_translation_dfc.svg)](https://badges.aleen42.com/src/juejin_translation_dfc.svg) A badge used for any articles translated by [gold-miner](https://github.com/xitu/gold-miner).
- [![serverfault](./src/serverfault_dfc.svg)](https://badges.aleen42.com/src/serverfault_dfc.svg) A badge used for references on Server Fault.


### Communication

- [![lunkr](./src/lunkr_dfc.svg)](https://badges.aleen42.com/src/lunkr_dfc.svg) A badge used for sharing communication ways on Coremail Lunkr
- [![wechat](./src/wechat_dfc.svg)](https://badges.aleen42.com/src/wechat_dfc.svg) A badge used for sharing communication ways on WeChat
- [![line](./src/line_dfc.svg)](https://badges.aleen42.com/src/line_dfc.svg) A badge used for sharing communication ways on Line
- [![whatsapp](./src/whatsapp_dfc.svg)](https://badges.aleen42.com/src/whatsapp_dfc.svg) A badge used for sharing communication ways on WhatsApp
- [![skype](./src/skype_dfc.svg)](https://badges.aleen42.com/src/skype_dfc.svg) A badge used for sharing communication ways on Skype
- [![telegram](./src/telegram_dfc.svg)](https://badges.aleen42.com/src/telegram_dfc.svg) A badge used for sharing communication ways on Telegram
- [![messenger](./src/messenger_dfc.svg)](https://badges.aleen42.com/src/messenger_dfc.svg) A badge used for sharing communication ways on Messenger
- [![discord](./src/discord_dfc.svg)](https://badges.aleen42.com/src/discord_dfc.svg) A badge used for groups discussed on [Discord](https://discord.com/)
- [![slack](./src/slack_dfc.svg)](https://badges.aleen42.com/src/slack_dfc.svg) A badge used for groups discussed on [Slack](https://slack.com/)
- [![gitter](./src/gitter_dfc.svg)](https://badges.aleen42.com/src/gitter_dfc.svg) A badge used for groups discussed on [Gitter](https://gitter.im/)


### Multimedia

- [![soundcloud](./src/soundcloud_dfc.svg)](https://badges.aleen42.com/src/soundcloud_dfc.svg) A badge used for music shared on SoundCloud
- [![spotify](./src/spotify_dfc.svg)](https://badges.aleen42.com/src/spotify_dfc.svg) A badge used for music shared on Spotify


### Inc

- [![soundtooth](./src/soundtooth_dfc.svg)](https://badges.aleen42.com/src/soundtooth_dfc.svg) A badge used for any project of Soundtooth Inc.
- [![bitcoin](./src/bitcoin_dfc.svg)](https://badges.aleen42.com/src/bitcoin_dfc.svg) A badge used for the Bitcoin Inc.
- [![amazon](./src/amazon_dfc.svg)](https://badges.aleen42.com/src/amazon_dfc.svg) A badge used for the Amazon Inc.
- [![monsoon](./src/monsoon_dfc.svg)](https://badges.aleen42.com/src/monsoon_dfc.svg) A badge used for the Monsoon Inc.
- [![codrops](./src/codrops_dfc.svg)](https://badges.aleen42.com/src/codrops_dfc.svg) A badge used for any project of Codrops Inc.
- [![coremail](./src/coremail_dfc.svg)](https://badges.aleen42.com/src/coremail_dfc.svg) A badge used for the Coremail Inc.
- [![nasa](./src/nasa_dfc.svg)](https://badges.aleen42.com/src/nasa_dfc.svg) A badge used for projects of NASA
- [![xitu](./src/xitu_dfc.svg)](https://badges.aleen42.com/src/xitu_dfc.svg) A badge used for any articles of Xitu Inc.
- [![airbnb](./src/airbnb_dfc.svg)](https://badges.aleen42.com/src/airbnb_dfc.svg) A badge used for the Airbnb Inc.


### Social Media

- [![youtube](./src/youtube_dfc.svg)](https://badges.aleen42.com/src/youtube_dfc.svg) A badge used for Youtube.
- [![google_plus](./src/google_plus_dfc.svg)](https://badges.aleen42.com/src/google_plus_dfc.svg) A badge used for sharing communities on Google Plus.
- [![reddit](./src/reddit_dfc.svg)](https://badges.aleen42.com/src/reddit_dfc.svg) A badge used for articles shared on Reddit.
- [![snapchat](./src/snapchat_dfc.svg)](https://badges.aleen42.com/src/snapchat_dfc.svg) A badge used for Snapchat.
- [![twitter](./src/twitter_dfc.svg)](https://badges.aleen42.com/src/twitter_dfc.svg) A badge used for Twitter.
- [![facebook](./src/facebook_dfc.svg)](https://badges.aleen42.com/src/facebook_dfc.svg) A badge used for Facebook.
- [![instagram](./src/instagram_dfc.svg)](https://badges.aleen42.com/src/instagram_dfc.svg) A badge used for Instagram.
- [![sina_weibo](./src/sina_weibo_dfc.svg)](https://badges.aleen42.com/src/sina_weibo_dfc.svg) A badge used for sharing communities on Sina Weibo.
- [![pinterest](./src/pinterest_dfc.svg)](https://badges.aleen42.com/src/pinterest_dfc.svg) A badge used for sharing communities on Pinterest.


### Sponsors

- [![patreon](./src/patreon_dfc.svg)](https://badges.aleen42.com/src/patreon_dfc.svg) A badge used for Patreon sponsors.
- [![buymeacoffee](./src/buymeacoffee_dfc.svg)](https://badges.aleen42.com/src/buymeacoffee_dfc.svg) A badge used for BuyMeACoffee sponsors.
- [![issuehunt](./src/issuehunt_dfc.svg)](https://badges.aleen42.com/src/issuehunt_dfc.svg) A badge used for IssueHunt sponsors.
- [![alipay](./src/alipay_dfc.svg)](https://badges.aleen42.com/src/alipay_dfc.svg) A badge used for Alipay sponsors.
- [![paypal](./src/paypal_dfc.svg)](https://badges.aleen42.com/src/paypal_dfc.svg) A badge used for Paypal sponsors.


### Car

- [![mercedes_benz](./src/mercedes_benz_dfc.svg)](https://badges.aleen42.com/src/mercedes_benz_dfc.svg) A badge used for cars of Mercedes Benz
- [![toyota](./src/toyota_dfc.svg)](https://badges.aleen42.com/src/toyota_dfc.svg) A badge used for cars of Toyota
- [![lamborghini](./src/lamborghini_dfc.svg)](https://badges.aleen42.com/src/lamborghini_dfc.svg) A badge used for cars of Lamborghini
- [![land_rover](./src/land_rover_dfc.svg)](https://badges.aleen42.com/src/land_rover_dfc.svg) A badge used for cars of Land Rover
- [![bmw](./src/bmw_dfc.svg)](https://badges.aleen42.com/src/bmw_dfc.svg) A badge used for cars of BMW
- [![audi](./src/audi_dfc.svg)](https://badges.aleen42.com/src/audi_dfc.svg) A badge used for cars of Audi
- [![marussia](./src/marussia_dfc.svg)](https://badges.aleen42.com/src/marussia_dfc.svg) A badge used for cars of Marussia
- [![maserati](./src/maserati_dfc.svg)](https://badges.aleen42.com/src/maserati_dfc.svg) A badge used for cars of Maserati
- [![koenigsegg](./src/koenigsegg_dfc.svg)](https://badges.aleen42.com/src/koenigsegg_dfc.svg) A badge used for cars of Koenigsegg
- [![bugatti](./src/bugatti_dfc.svg)](https://badges.aleen42.com/src/bugatti_dfc.svg) A badge used for cars of Bugatti
- [![porsche](./src/porsche_dfc.svg)](https://badges.aleen42.com/src/porsche_dfc.svg) A badge used for cars of Porsche
- [![mitsubishi](./src/mitsubishi_dfc.svg)](https://badges.aleen42.com/src/mitsubishi_dfc.svg) A badge used for cars of Mitsubishi
- [![ferrari](./src/ferrari_dfc.svg)](https://badges.aleen42.com/src/ferrari_dfc.svg) A badge used for cars of Ferrari
- [![tesla](./src/tesla_dfc.svg)](https://badges.aleen42.com/src/tesla_dfc.svg) A badge used for cars of Tesla


### Football Clubs

- [![manchester_united](./src/manchester_united_dfc.svg)](https://badges.aleen42.com/src/manchester_united_dfc.svg) A badge used for FC Manchester United
- [![real_madrid](./src/real_madrid_dfc.svg)](https://badges.aleen42.com/src/real_madrid_dfc.svg) A badge used for FC Real Madrid
- [![liverpool](./src/liverpool_dfc.svg)](https://badges.aleen42.com/src/liverpool_dfc.svg) A badge used for FC Liverpool
- [![chelsea](./src/chelsea_dfc.svg)](https://badges.aleen42.com/src/chelsea_dfc.svg) A badge used for FC Chelsea
- [![barcelona](./src/barcelona_dfc.svg)](https://badges.aleen42.com/src/barcelona_dfc.svg) A badge used for FC Barcelona
- [![bayern_munchen](./src/bayern_munchen_dfc.svg)](https://badges.aleen42.com/src/bayern_munchen_dfc.svg) A badge used for FC Bayern Munchen
- [![arsenal](./src/arsenal_dfc.svg)](https://badges.aleen42.com/src/arsenal_dfc.svg) A badge used for FC Arsenal
- [![ac_milan](./src/ac_milan_dfc.svg)](https://badges.aleen42.com/src/ac_milan_dfc.svg) A badge used for FC AC Milan


### Game

- [![ingress](./src/ingress_dfc.svg)](https://badges.aleen42.com/src/ingress_dfc.svg) A badge used for the game Ingress published by Niantic Inc.
- [![steam](./src/steam_dfc.svg)](https://badges.aleen42.com/src/steam_dfc.svg) A badge used for any game supported on the platform Steam
- [![osu](./src/osu_dfc.svg)](https://badges.aleen42.com/src/osu_dfc.svg) A badge used for the game osu! published by ppy


### Designer

- [![flash](./src/flash_dfc.svg)](https://badges.aleen42.com/src/flash_dfc.svg) A badge used for designing projects using Flash as a tool
- [![illustrator](./src/illustrator_dfc.svg)](https://badges.aleen42.com/src/illustrator_dfc.svg) A badge used for designing projects using Illustrator as a tool
- [![zeplin](./src/zeplin_dfc.svg)](https://badges.aleen42.com/src/zeplin_dfc.svg) A badge used for designing projects with Zeplin
- [![dreamweaver](./src/dreamweaver_dfc.svg)](https://badges.aleen42.com/src/dreamweaver_dfc.svg) A badge used for projects using Dreamweaver as a tool
- [![photoshop](./src/photoshop_dfc.svg)](https://badges.aleen42.com/src/photoshop_dfc.svg) A badge used for designing projects using Photoshop as a tool
- [![behance](./src/behance_dfc.svg)](https://badges.aleen42.com/src/behance_dfc.svg) A badge used for designing projects sharing on Behance
- [![after_effects](./src/after_effects_dfc.svg)](https://badges.aleen42.com/src/after_effects_dfc.svg) A badge used for designing projects using After Effect as a tool
- [![premiere](./src/premiere_dfc.svg)](https://badges.aleen42.com/src/premiere_dfc.svg) A badge used for designing projects using Premiere as a tool

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://wiki.aleen42.com/contribution.html).

### :scroll: License

[MIT](https://wiki.aleen42.com/MIT.html) © aleen42
