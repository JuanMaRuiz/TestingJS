/**
 * You can run this file using as a node command line utility. Yoy can pass a "mocha" or "jasmine-standalone"
 * params. It will serve the TestRunner.html file in your browser, creating a new browserSync instance
 * and it will watch all your test files from that folder. So every time you make change in any of your
 * test into that folder the browser will be reloaded and you will be able to see status of your tests.
 */
const bs = require('browser-sync').create();

// Listen to change events on HTML and reload
bs.watch("test-examples/**/*.js").on("change", bs.reload);

bs.init({
  server: {
    baseDir: __dirname,
    index: `/test-examples/${process.argv[2]}/TestRunner.html`,
  },
  host: 'localhost',
  port: 3000,
});
