'use strict';

module.exports = {
    singleRun: true,
    reporters: ['progress', 'coverage'],
    browsers: ['Chrome'],
    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
                flags: ['--no-sandbox']
        }
    }
}