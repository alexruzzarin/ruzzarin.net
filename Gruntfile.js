module.exports = function (grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ect: {
            appHtml: {
                options: {
                    variables: {
                        env: process.env.NODE_ENV,
                        name: "Alex Ruzzarin",
                        title: "Alex Ruzzarin - Software Developer",
                        description: "Programmer with degree in Analysis and Development of Information Systems. Professional and trainer certified by Microsoft. Crazy for technology, works with. Net, but is a fan of Ruby and JavaScript (and Node.Js).",
                        image: "http://www.ruzzarin.net/images/Alex-Ruzzarin.jpg",
                        keywords: "HTML,CSS,JavaScript,.net,dotnet,node,nodejs,node.js,asp.net,aspnet",
                        googlePlusUrl: "https://plus.google.com/+AlexRuzzarin/posts"
                    }
                },
                files: [
                    {
                        src: ['app/index.ect'],
                        dest: 'public/index.html'
                    },
                    {
                        expand: true,
                        cwd: 'app/partials',
                        src: '**/*.ect',
                        dest: 'public/partials',
                        ext: '.html'
                    }
                ]
            }
        },
        htmlhint: {
            appHtml: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: 'public/index.html'
            }
        },
        htmlmin: {
            appHtml: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'public/index.html': 'public/index.html'
                }
            }
        },
        jshint: {
            // You get to make the name
            // The paths tell JSHint which files to validate
            appJs: ['app/script/**/*.js']
        },
        concat: {
            appJs: {
                src: ['app/script/module.js', 'app/script/**/*.js'],
                dest: 'public/js/app.js'
            }
        },
        uglify: {
            appJs: {
                files: {
                    'public/js/app.js': ['public/js/app.js']
                }
            }
        },
        less: {
            appCss: {
                src: ['app/style/**/*.less'],
                dest: 'public/css/app.css'
            }
        },
        cssc: {
            appCss: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors: true,
                    consolidateMediaQueries: true
                },
                files: {
                    'public/css/app.css': 'public/css/app.css'
                }
            }
        },
        cssmin: {
            appCss: {
                src: 'public/css/app.css',
                dest: 'public/css/app.css'
            }
        },
        copy: {
            vendorFonts: {
                files: [
                    {
                        expand: true,
                        src: ['bower_components/bootstrap/dist/fonts/**',
                            'bower_components/Font-Awesome/fonts/**'],
                        dest: 'public/fonts/',
                        flatten: true,
                        filter: 'isFile'
                    }
                ]
            },
            vendorCss: {
                files: [
                    {
                        src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
                        dest: 'public/css/bootstrap.min.css'
                    },
                    {
                        src: 'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                        dest: 'public/css/bootstrap-theme.min.css'
                    },
                    {
                        src: 'bower_components/Font-Awesome/css/font-awesome.min.css',
                        dest: 'public/css/font-awesome.min.css'
                    }
                ]
            },
            vendorJs: {
                files: [
                    {src: 'bower_components/angular/angular.min.js', dest: 'public/js/angular.min.js'},
                    {
                        src: 'bower_components/angular-route/angular-route.min.js',
                        dest: 'public/js/angular-route.min.js'
                    },
                ]
            },
            appImages: {
                files: [
                    {expand: true, src: ['app/images/**/*.*'], dest: 'public/images/', flatten: true, filter: 'isFile'}
                ]
            },
            newRelic: {
                files: [
                    {src: 'node_modules/newrelic/lib/config.default.js', dest: 'newrelic.js'}
                ]
            }

        },
        clean: {
            options: {
                force: true
            },
            dest: {
                src: ["public/**"]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['app/index.ect', 'app/partials/**/*.ect'],
                tasks: ['appHtml'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['app/script/**/*.js'],
                tasks: ['appJs'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['app/style/**/*.less'],
                tasks: ['appCss'],
                options: {
                    livereload: true
                }
            },
            image: {
                files: ['app/images/**/*.*'],
                tasks: ['appImages'],
                options: {
                    livereload: true
                }
            },
            express: {
                files: ['server.js'],
                tasks: ['express:app'],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        },
        express: {
            app: {
                options: {
                    script: 'server.js',
                    node_env: 'development',
                    port: 3000
                }
            }
        }
    });

    grunt.registerTask('appHtml', ['ect:appHtml', 'htmlhint:appHtml']);
    grunt.registerTask('appCss', ['less:appCss']);
    grunt.registerTask('appJs', ['jshint:appJs', 'concat:appJs']);
    grunt.registerTask('appImages', ['copy:appImages']);

    grunt.registerTask('releaseAppHtml', ['appHtml', 'htmlmin:appHtml']);
    grunt.registerTask('releaseAppCss', ['appCss', 'cssc:appCss', 'cssmin:appCss']);
    grunt.registerTask('releaseAppJs', ['appJs', 'uglify:appJs']);
    grunt.registerTask('releaseAppImages', ['appImages']);

    grunt.registerTask('vendorCss', ['copy:vendorCss']);
    grunt.registerTask('vendorJs', ['copy:vendorJs']);
    grunt.registerTask('vendorFont', ['copy:vendorFonts']);

    grunt.registerTask('default', ['clean', 'appHtml', 'appCss', 'appJs', 'appImages', 'vendorCss', 'vendorJs', 'vendorFont']);

    grunt.registerTask('release', ['clean', 'releaseAppHtml', 'releaseAppCss', 'releaseAppJs', 'releaseAppImages', 'vendorCss', 'vendorJs', 'vendorFont']);

    grunt.registerTask('serve', [
        'default',
        'express:app',
        'watch'
    ]);

};
