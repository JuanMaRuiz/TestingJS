'use strict';

var envConfig = require('./karma-config');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        port: 9876,  // karma web server port
        browsers: envConfig.karma.browsers,
        files: [
            '../../app/scripts/jqLite.js',
            '../../app/scripts/app.js',
            '../../app/scripts/devInfo.js',
            '../../app/scripts/template.js',
            '../../app/scripts/developers.js',
            '../../app/data.json',
            'tests/*.js',
        ],
        specReporter: {
            maxLogLines: 50,             // limit number of lines logged per test
            suppressErrorSummary: false, // do not print error summary
            suppressFailed: false,      // do not print information about failed tests
            suppressPassed: false,      // do not print information about passed tests
            suppressSkipped: true,      // do not print information about skipped tests
            showSpecTiming: false,      // print the time elapsed for each spec
            failFast: true              // test would finish with error when a first fail occurs. 
        },
        reporters: envConfig.karma.reporters,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: envConfig.karma.singleRun,
        autoWatch: envConfig.karma.autoWatch,
    });
};