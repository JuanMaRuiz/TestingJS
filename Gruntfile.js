module.exports = function(grunt) {
  'use strict';

  require('jit-grunt')(grunt);

  grunt.initConfig({
    watch: {
      scripts: {
        files: 'web-layer/**/*.js',
        tasks: ['eslint'],
        options: {
          livereload: true
        }
      },
      html: {
        files: 'web-layer/**/*.html',
        options: {
          livereload: true
        }
      }
    },
    copy: {
      styles: {
        expand: true,
        flatten: true,
        src: ['node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.css'],
        dest: 'web-layer/lib/css/'
      }
    },
    eslint: {
      options: {
        // format: 'node_modules/eslint-tap',
        configFile: '.eslintrc',
        fix: true // By default eslint task will try to fix all lint errors if not it will fail
      },
      target: ['web-layer/scripts/*.js']
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          'web-layer/scripts/*.js'
        ],
        dest: 'dist/built.js'
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'web-layer/scripts/*.js',
            'web-layer/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './web-layer'
        }
      }
    }
  });

  grunt.registerTask('default', ['eslint', 'copy', 'browserSync', 'watch']);
};
