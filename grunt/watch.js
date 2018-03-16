module.exports = {
    scripts: {
        files: 'app/**/*.js',
        tasks: ['eslint'],
        options: {
            livereload: true
        }
    },
    html: {
        files: 'app/**/*.html',
        options: {
            livereload: true
        }
    }
};