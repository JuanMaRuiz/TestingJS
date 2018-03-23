const bs = require('browser-sync').create();

bs.init({
    server: {
        baseDir: __dirname,
        index: `/test-examples/${process.argv[2]}/TestRunner.html`,
    },
    host: 'localhost',
    port: 3000
});
