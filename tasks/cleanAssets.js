var shell = require("shelljs");

module.exports = function(grunt) {

  grunt.registerTask("clean-assets", "Removes the assets folder", function() {
    shell.rm("-rf", "docs/assets");
  });

};