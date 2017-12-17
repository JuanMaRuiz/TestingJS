module.exports = function(grunt) {
  'use strict';

  require('jit-grunt')(grunt);

  grunt.initConfig({
    watch: {
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
    },
    copy: {
      styles: {
        expand: true,
        flatten: true,
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.css',
          'node_modules/bootstrap/dist/css/bootstrap-theme.css'
        ],
        dest: 'app/lib/css/'
      }
    },
    eslint: {
      options: {
        // format: 'node_modules/eslint-tap',
        configFile: '.eslintrc',
        fix: true // By default eslint task will try to fix all lint errors if not it will fail
      },
      target: ['app/scripts/*.js']
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          'app/scripts/*.js'
        ],
        dest: 'dist/built.js'
      }
    },
    browserSync: {
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
    }
  });

  grunt.registerTask('default', ['eslint', 'copy', 'browserSync', 'watch']);
};
