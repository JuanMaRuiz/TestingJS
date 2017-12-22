'use strict';

/**
 * Load app configurations
 */

var configSource = process.env.NODE_ENV || 'development';
// var a = require('./env/development');
// console.log(a);
module.exports = require('./env/' + configSource);