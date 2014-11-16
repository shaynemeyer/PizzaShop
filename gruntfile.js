/**
 * Created by shayne on 11/15/14.
 */
module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ["./public/js/**/*.js"],
      options: {
        unused: true
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerInitTask("default", ["jshint"]);
};