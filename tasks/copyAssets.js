/*

Copies the assets directory over to /docs

*/

var shell = require("shelljs");

module.exports = function(grunt) {

  grunt.registerTask("copy", "Copy assets directory", function() {
    if (grunt.file.exists("src/assets")) {
      if (!grunt.file.exists("docs/assets")) shell.mkdir("-p", "docs/assets");
      shell.cp("-r", "src/assets", "docs");
    }
  });

}
