module.exports = {
    options: {
        // format: 'node_modules/eslint-tap',
        configFile: '.eslintrc',
        fix: true // By default eslint task will try to fix all lint errors if not it will fail
    },
    target: ['app/scripts/**/*.js']
};