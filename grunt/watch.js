module.exports = {
    scripts: {
      files: ['app/scripts/*.js', 'app/lib/js/*.js'],
        tasks: ['eslint', 'concat'],
        options: {
            livereload: true
        }
    },
    html: {
        files: 'app/**/*.html',
        options: {
            livereload: true
        }
    },
    css: {
        files: 'app/**/*.css',
        options: {
            livereload: true
        }
    }
};
