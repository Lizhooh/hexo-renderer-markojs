## hexo-renderer-marko

[![NPM version](https://img.shields.io/npm/v/hexo-renderer-markojs.svg?style=flat-square)](https://npmjs.com/package/hexo-renderer-markojs) [![NPM downloads](https://img.shields.io/npm/dm/hexo-renderer-markojs.svg?style=flat-square)](https://npmjs.com/package/hexo-renderer-markojs)

Use [marko](https://github.com/marko-js/marko/) template in Hexo.

### Install

```bash
$ npm install --save hexo-renderer-markojs
```

### Usage
Create a layout file `index.marko`.

```html
class {
    onCreate() {
        this.state = {
            name: 'hello',
        };
    }
}
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <title>Home</title>
    </head>
    <body>
        <h1>Hello Word</h1>
        <p>${data.page.total}</p>
        <p>${state.name}</p>
    </body>
</html>
```

All hexo local variables are in the data property.

```js
${data.page}     Page specific information and custom variables set in front-matter.
${data.site}     Sitewide information.
${data.config}   Site configuration.
${data.theme}    Theme configuration. Inherits from site configuration.
${data.env}      Environment variables
...
```


Please read the hexo related documentation: https://hexo.io/docs/variables.html