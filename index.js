const bs = require('browser-sync').create();

// Listen to change events on HTML and reload
bs.watch("test-examples/**/*.js").on("change", bs.reload);

bs.init({
    server: {
        baseDir: __dirname,
        index: `/test-examples/${process.argv[2]}/TestRunner.html`,
    },
    host: 'localhost',
    port: 3000
});
