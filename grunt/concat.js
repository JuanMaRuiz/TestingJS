module.exports = {
    options: {
        separator: ';'
    },
    dist: {
        src: [
          'lib/js/jqLite.js',
          'app/scripts/**/*.js'
        ],
        dest: 'dist/js/built.js'
    }
};
