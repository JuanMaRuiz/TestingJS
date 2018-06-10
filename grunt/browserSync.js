module.exports = {
    dev: {
        bsFiles: {
            src: [
                'app/scripts/*.js',
                'app/css/*.css',
                'app/*.html'
            ]
        },
        options: {
            watchTask: true,
            server: './app'
        }
    }
};
