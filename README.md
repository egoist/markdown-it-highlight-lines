
# markdown-it-highlight-lines

[![NPM version](https://img.shields.io/npm/v/markdown-it-highlight-lines.svg?style=flat)](https://npmjs.com/package/markdown-it-highlight-lines) [![NPM downloads](https://img.shields.io/npm/dm/markdown-it-highlight-lines.svg?style=flat)](https://npmjs.com/package/markdown-it-highlight-lines) [![CircleCI](https://circleci.com/gh/egoist/markdown-it-highlight-lines/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/markdown-it-highlight-lines/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Install

```bash
yarn add markdown-it-highlight-lines
```

## Usage

```js
const MarkdownIt = require('markdown-it')
const highlightLines = require('markdown-it-highlight-lines')

const md = new MarkdownIt()
md.use(highlightLines)

md.render(markdownString)
```

For example, highlight line 1, 2, and line 4 to 5:

````markdown
```js {1,2,4-5}
function foo() {
  return bar()
    .then(res => {
      return res.doSomething()
    })
}
```
````

_Note that the spaces between language name and opening curly bracket are optional._

Each highlighted line will be wrapped in `<span class="highlighted-line"></span>`, you can apply some custom styles to this element, recommended:

```css
pre, pre[class*="language-"] {
  padding: 1.575rem;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 30px 0;
  color: white;
  overflow: auto;
}

.highlighted-line {
  background-color: #14161a;
  display: block;
  margin: 0 -1.575rem;
  padding: 0 1.575rem;
}
```

You can tweak it a bit to suit your own needs.

A real-world example is reactjs.org, this is how it looks like:

<img src="https://i.loli.net/2018/04/02/5ac1ee2d56774.png" width="600" alt="reactjs.org">



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**markdown-it-highlight-lines** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/markdown-it-highlight-lines/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
