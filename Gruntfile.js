module.exports = function(grunt) {
// Load Grunt tasks declared in the package.json file
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

//GOT IT FROM HERE: http://thecrumb.com/2014/03/15/using-grunt-for-live-reload/
grunt.initConfig({
    
    // https://github.com/blai/grunt-express
    express: {
        all: {
            options: {
                server: "server.js",
                bases: ['C:\\Git\\basicseed'],
                //bases: ['Sites/basicseed'],
                port: 8080,
                hostname: "0.0.0.0",
                livereload: true
            }
        }
    },
    
    compass: {
        dist: {
            options: {
                sassDir: 'sass',
                cssDir: 'assets/css'                
            }
        }
    },

    cssmin: {
      combine: {
        files: {
          'assets/css/app.min.css': ['assets/css/app.css']
        }
      }
    },

    //combine files like this: 'assets/js/output.js': ['js/input.js', 'js/input2.js']
    uglify: {
        scriptz: {
          files: {
            'assets/js/main.js': 'js/main.js'
          }
        }
    },
    
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
        all: {
                files: ['*.html', 'sass/*.scss'],
                tasks: ['compass', 'cssmin'],
                options: {
                    livereload: true
            }
        }
    },
    
    // https://www.npmjs.org/package/grunt-open
    open: {
        all: {
            path: 'http://localhost:8080/index.html'
        }
    }
    });

    grunt.registerTask('build', ['compass', 'cssmin', 'uglify']);
    grunt.registerTask('default', ['build', 'express', 'open', 'watch']);

};
    
   
    