const bs = require('browser-sync').create();

bs.init({
    server: {
        baseDir: __dirname,
        index: '/test-examples/mocha/TestRunner.html',
    },
    host: 'localhost',
    port: 3000
});
