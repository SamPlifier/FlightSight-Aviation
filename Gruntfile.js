module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'lib/styles/main.min.css': 'src/styles/main.scss'
                }
            }
        },

        uglify: {
            options: {
                preserveComments: false
            },
            my_target: {
                files: {
                    'lib/js/annotated/concat/uglify/main.min.js': ['lib/js/annotated/concat/main.js']
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['lib/js/annotated/*.js'],
                dest: 'lib/js/annotated/concat/main.js'
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['lib/assets.{png,jpg,jpeg,gif,svg}'],
                    dest: 'lib/assets'
                }]
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    './lib/js/annotated/main.js': ['src/js/*.js']
                }
            }
        },
        watch: {
            css: {
                files: ['src/styles/**/*'],
                tasks: ['sass']
            },

            javascript: {
                files: ['src/js/*'],
                tasks: ['ngAnnotate', 'concat', 'uglify']
            },

            img: {
                files: ['images/**/*'],
                tasks: ['imagemin']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['sass', 'watch', 'imagemin', 'concat', 'uglify', 'ngAnnotate']);
};
