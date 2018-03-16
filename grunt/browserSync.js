module.exports = {
    dev: {
        bsFiles: {
            src: [
                'app/scripts/*.js',
                'app/*.html'
            ]
        },
        options: {
            watchTask: true,
            server: './app'
        }
    }
};