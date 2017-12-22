'use strict';

module.exports = {
    karma: {
        singleRun: true,
        reporters: ['progress', 'spec','coverage'],
        browsers: ['ChromeHeadless'],
    }
}