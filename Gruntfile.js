module.exports = function(grunt) {
  "use strict";

  require("jit-grunt")(grunt);

  grunt.initConfig({
    watch: {
      scripts: {
        files: "web-layer/**/*.js",
        tasks: ["eslint"],
        options: {
          livereload: true,
        },
      },
      html: {
        files: "web-layer/**/*.html",
        options: {
          livereload: true,
        },
      },
    },
    eslint: {
      options: {
        // format: 'node_modules/eslint-tap',
        configFile: ".eslintrc",
      },
      target: ["web-layer/scripts/*.js"],
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            "web-layer/scripts/*.js",
            "web-layer/*.html",
          ],
        },
        options: {
          watchTask: true,
          server: "./web-layer",
        },
      },
    },
  });

  grunt.registerTask("default", ["eslint", "browserSync", "watch"]);
};
