'use strict';

/**
 * Load app configurations
 */

var configSource = process.env.TRAVIS ? 'test' : 'development'; // You could configure as process.env.NODE_ENV as well

module.exports = require('./env/' + configSource);
