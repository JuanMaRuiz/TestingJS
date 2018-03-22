'use strict';

module.exports = {
    karma: {
        singleRun: false,
        failFast: true,
        browsers: ['Chrome'],
        reporters: ['progress', 'spec', 'coverage'],
        plugins: ['karma-spec-reporter']
    },
};
