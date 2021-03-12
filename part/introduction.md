## badges

<p align="center">
    <img src="./badges.svg" width="23%" height="300px" />
</p>

<p align="center">To make badges more standard and acceptable.</p>

<br />
<br />
<br />

![npm](https://aleen42.github.io/badges/src/npm.svg) ![javascript](https://img.shields.io/badge/%20%20JavaScript-%20%20%20%20688L-f1e05a.svg) ![html](https://img.shields.io/badge/%20%20HTML-%20%20%20%2043L-e34c26.svg)

Alternative: [**default**](./README.md)<!-- @IGNORE PREVIOUS: link -->, [**flat-square**](./README_flat_square.md)<!-- @IGNORE PREVIOUS: link -->, [**dynamic-fore-color**](./README_dfc.md)<!-- @IGNORE PREVIOUS: link -->, [**dynamic-fore-color (flat_square)**](./README_flat_square_dfc.md)<!-- @IGNORE PREVIOUS: link -->.

A collection of badges designed for personal repositories, and I hope that all of these badges can be widely accepted and used in the document of any project so that they can become more and more standard. If you also have some new ideas about badges, just open an issue. Always remember that: **More than a coder, more than a designer.**

So how to create such cute badges? It's very simple. As it's only registered on [npm](https://www.npmjs.com/), you should install it by typing:

```bash
sudo npm install -g badges-cli
```

Then you can use this command line tool for creating badges yourself:

Take the following command as an example, `t` means text content, and `c` means color. If you want to create a badge with SVG sources, you can specify with `p` to tell the tool where to find your sources. Finally, `o` is used to specify where to export the badge.

```bash
badge {{ARGS}}
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

[![badges](https://aleen42.github.io/badges/src/paypal.svg)](http://paypal.me/aleen42) [![badges](https://aleen42.github.io/badges/src/patreon.svg)](https://www.patreon.com/aleen42) [![badges](https://aleen42.github.io/badges/src/buymeacoffee.svg)](https://www.patreon.com/aleen42)
