module.exports = function(grunt) {
  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  //example taken from: http://thecrumb.com/2014/03/15/using-grunt-for-live-reload/
  grunt.initConfig({

      //https://github.com/gruntjs/grunt-contrib-connect
      connect: {
          server: {
              options: {
                  port: 3000,
                  base: '<%= build_dir %>',
                  // Change this to '0.0.0.0' to access the server from outside.
                  hostname: 'localhost',
                  livereload: true,
                  open: true
              }
          }
      },

      //https://github.com/gruntjs/grunt-contrib-sass
      sass: {
          dist: {
              files: {
                  'dist/css/app.css': 'sass/app.scss'
              }
          }
      },

      //https://github.com/gruntjs/grunt-contrib-cssmin
      cssmin: {
          combine: {
              files: {
                  'dist/css/app.min.css': ['dist/css/app.css']
              }
          }
      },

      //combine files like this: 'dist/js/output.js': ['js/input.js', 'js/input2.js']
      uglify: {
          scriptz: {
              files: {
                  'dist/js/main.js': 'js/main.js'
              }
          }
      },

      copy: {
          main: {
              src: 'fonts/*',
              dest: 'dist/',
          },
      },

      // https://github.com/gruntjs/grunt-contrib-watch
      watch: {
          all: {
              files: ['*.html', 'sass/*.scss', 'sass/**/*.scss', 'docs/*'],
              tasks: ['sass', 'cssmin'],
              options: {
                  livereload: true
              }
          }
      }

  });

  grunt.registerTask('build', ['sass', 'cssmin', 'uglify', 'copy']);
  grunt.registerTask('default', ['build', 'connect', 'watch']);

};