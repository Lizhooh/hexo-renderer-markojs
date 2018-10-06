/* globals hexo */
'use strict'
const renderer = require('./lib/renderer');

hexo.extend.renderer.register('marko', 'html', renderer);
