module.exports = function(grunt) {
    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    //example taken from: http://thecrumb.com/2014/03/15/using-grunt-for-live-reload/
    grunt.initConfig({

        jekyll: {
            options: {
                config: '_config.yml'
            },
            build: {
                //src: 'docs/',
                dest: 'docs/_site'
                //dest: '<%= build_dir %>'
            }
        },

        //https://github.com/gruntjs/grunt-contrib-connect
        connect: {
            server: {
                options: {
                    port: 3000,
                    //base: '<%= build_dir %>',
                    base: 'docs/_site',
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
                    'dist/css/basicseed.css': 'sass/app.scss'
                }
            }
        },

        //https://github.com/gruntjs/grunt-contrib-cssmin
        cssmin: {
            combine: {
                files: {
                    'dist/css/basicseed.min.css': ['dist/css/basicseed.css']
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
              files: [
                { src: ['fonts/*'], dest: 'dist/' },
                { src: ['dist/css/*'], dest: 'docs/_site/css/', flatten: true, filter: 'isFile', expand: true }
              ]
            },
        },

        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            all: {
                files: ['*.html', 'sass/*.scss', 'sass/**/*.scss', 'docs/_layouts/*.html', 'docs/_includes/*.html', 'docs/_plugins/*', 'docs/_posts/*', 'css/basicseed.css', 'docs/index.html', 'docs/partials/*.html', 'docs/partials/examples/*.html'],
                tasks: ['sass', 'cssmin', 'jekyll'],
                options: {
                    livereload: true
                }
            }
        },

        clean: [
            'docs/_site'
        ],

    });

    grunt.registerTask('buildjekyll', ['sass', 'cssmin', 'uglify', 'jekyll', 'copy']);
    grunt.registerTask('default', ['buildjekyll', 'connect', 'watch']);

    grunt.registerTask('build', ['sass', 'cssmin', 'uglify', 'copy']);

};