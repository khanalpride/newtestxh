/**
 * BrowserSync - live reload on steroids.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('browserSync', {
    src: {
      bsFiles: {
        src: [
          '<%= xh.dist %>/css/*.css',
          '<%= xh.dist %>/js/*.js',
          '<%= xh.dist %>/<%= xh.assets %>/**/*.*',
          '<%= xh.dist %>/**/*.h'
        ]
      },

      options: {
        watchTask: true,
        proxy: 'localhost',
        notify: false
      }
    }
  });
};
