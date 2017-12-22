'use strict';
const karma = require('karma');

// Detect if this is TravisCI running the tests and tell it to use chromium
if (process.env.TRAVIS) {
    console.log(`is Travis ${process.env.TRAVIS}`);
    karma.config.browsers = ['Chrome_travis_ci'];

}

/**
 * Load app configurations
 */

var configSource = process.env.NODE_ENV || 'development';
// var a = require('./env/development');
// console.log(a);
module.exports = require('./env/' + configSource);