'use strict';

/**
 * Load app configurations
 */

var configSource = process.env.NODE_ENV || 'development';
console.log(`process.env.NODE_ENV ${process.env.NODE_ENV} or process.env.TRAVIS ${process.env.TRAVIS}`);
// var a = require('./env/development');
// console.log(a);
// module.exports = require('./env/' + configSource);
module.exports = require('./env/test.js');