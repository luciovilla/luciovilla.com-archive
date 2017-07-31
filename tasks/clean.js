var shell = require("shelljs");

module.exports = function(grunt) {

  grunt.registerTask("clean", "Removes the docs folder", function() {
    shell.rm("-rf", "docs");
  });

};