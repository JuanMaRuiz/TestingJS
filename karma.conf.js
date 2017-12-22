// // Config values to allow TravisCI to run chrome in it's container
// browsers: ['Chrome', 'ChromeCanary'],
//     customLaunchers: {
//         Chrome_travis_ci: {
//             base: 'Chrome',
//                 flags: ['--no-sandbox']
//         }
//     },


// // Detect if this is TravisCI running the tests and tell it to use chromium
// if (process.env.TRAVIS) {
//     config.browsers = ['Chrome_travis_ci'];
// }

// karma.conf.js
module.exports = function (config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        files: [
            'app/scripts/jqLite.js',
            'app/scripts/app.js',
            'app/scripts/devInfo.js',
            'app/scripts/template.js',
            'app/scripts/developers.js',
            'app/data.json',
            'test/*.js',
        ],
        specReporter: {
            maxLogLines: 5,             // limit number of lines logged per test
            suppressErrorSummary: true, // do not print error summary
            suppressFailed: false,      // do not print information about failed tests
            suppressPassed: false,      // do not print information about passed tests
            suppressSkipped: true,      // do not print information about skipped tests
            showSpecTiming: false,      // print the time elapsed for each spec
            failFast: true              // test would finish with error when a first fail occurs. 
        },
        // plugins: ["karma-spec-reporter"],
        reporters: ['progress', 'spec','coverage'],
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        autoWatch: true,
    });
};