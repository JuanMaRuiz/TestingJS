const bs = require('browser-sync').create();

bs.init({
    server: {
        baseDir: __dirname,
        index: '/test-examples/jasmine-standalone-3.1.0/TestRunner.html',
    },
    host: 'localhost',
    port: 3000  
});