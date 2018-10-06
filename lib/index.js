'use strict'
const renderer = require('./renderer');

hexo.extend.renderer.register('marko', 'html', renderer);
