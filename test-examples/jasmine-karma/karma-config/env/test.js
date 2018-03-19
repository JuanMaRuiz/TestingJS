'use strict';

module.exports = {
    karma: {
        singleRun: true,
        failFast: true,
        reporters: ['progress', 'spec','coverage'],
        browsers: ['ChromeHeadless'],
        plugins: ['karma-spec-reporter']
    }
}