## badges

<p align="center">
    <img src="./badges.png" width="20%" />
</p>

<p align="center">
    To make badges more standard and acceptable.
</p>

[![badges](https://cdn.rawgit.com/aleen42/badges/master/src/badges.svg)](https://cdn.rawgit.com/aleen42/badges/master/src/badges.svg)

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
4. Run the script by typing `npm run build`
5. If succeed, the readme file will be automatically updated
6. Finally, push all updates and create a pull request for your change
7. **Done!!**

> Note that: so far haven't I thought out a perfect solution for calculating width of text yet, and it means that the text can not be aligned.
