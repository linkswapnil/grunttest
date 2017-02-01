module.exports = function(grunt) {

    pkg: grunt.file.readJSON('package.json'),

        grunt.initConfig({
            jasmine : {
                // Your project's source files
                src : 'js/*.js',
                // Your Jasmine spec files

                options : {
                    specs : 'js/*spec.js'
                }
            }
        });

    // Register tasks.
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task.
    grunt.registerTask('default', 'jasmine');

};
