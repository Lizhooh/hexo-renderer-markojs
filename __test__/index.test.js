const renderer = require('../lib/renderer')

test('main', () => {
    const data = {
        text: '<div>Hello ${data.name}!</div>',
        path: './__test__/test.marko',
    }
    return renderer(data, { name: 'world' }).then(html => {
        expect(html).toBe('<div>Hello world!</div>')
    });
});
