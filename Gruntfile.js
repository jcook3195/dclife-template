module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      css: {
        files: ['assets/styles/*.css'],
        options: {
          // Start a live reload server on the default port 35729
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', 'watch');
};
