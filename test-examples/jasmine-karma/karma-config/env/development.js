'use strict';

module.exports = {
    karma: {
        singleRun: false,
        failFast: true,
        browsers: ['Chrome'],
        reporters: ['progress', 'spec'],
        plugins: ['karma-spec-reporter']
    },
};
