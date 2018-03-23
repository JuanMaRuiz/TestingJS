const bs = require('browser-sync').create();

// Listen to change events on HTML and reload
bs.watch("test-examples/**/*.js").on("change", bs.reload);

bs.init({
    server: {
        baseDir: __dirname,
        index: '/test-examples/jasmine-standalone-3.1.0/TestRunner.html',
    },
    host: 'localhost',
    port: 3000
});
