'use strict'
const marko = require('marko');

module.exports = (data, locals) => {
    const template = marko.load(data.path, data.text);

    return new Promise((resolve, reject) => {
        template.renderToString(locals, (err, html) => {
            return err ? reject(err) : resolve(html);
        });
    });
}
