module.exports = function(grunt) {
  'use strict';

  // Measures the time each task takes
  require('time-grunt')(grunt);
  /**
   * Load grunt configuration based on grunt/aliases.yaml and execute all tasks defined en every alias.
   * Task are stored in grunt folder
   */
  require('load-grunt-config')(grunt);
};
