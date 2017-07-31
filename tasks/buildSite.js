/*

Builds files for Github Pages

*/

var shell = require("shelljs");

module.exports = function(grunt) {

  grunt.registerTask("site", "Builds site files", function() {
    if (grunt.file.exists("src/assets")) {
      shell.cp("-r", "build", "docs");
      shell.cp("-r", "CNAME", "docs");
    }
  });

}
