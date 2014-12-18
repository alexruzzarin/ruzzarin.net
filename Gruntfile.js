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
                files: [
                    {
                        expand: true,
                        cwd: 'public/partials',
                        src: '**/*.html',
                        dest: 'public/partials',
                        ext: '.html'
                    }
                ]
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
                dest: 'public/jss/app.js'
            }
        },
        ngAnnotate: {
            appJs: {
                files: {
                    'public/jss/app.js': ['public/jss/app.js']
                }
            }
        },
        uglify: {
            appJs: {
                files: {
                    'public/jss/app.js': ['public/jss/app.js']
                }
            }
        },
        less: {
            appCss: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/style',
                        src: '*.less',
                        dest: 'public/css',
                        ext: '.css'
                    }
                ]
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
                    {src: 'bower_components/angular/angular.min.js', dest: 'public/jss/angular.min.js'},
                    {
                        src: 'bower_components/angular-route/angular-route.min.js',
                        dest: 'public/jss/angular-route.min.js'
                    },
                ]
            },
            appFonts: {
                files: [
                    {
                        expand: true,
                        src: ['app/fonts/**'],
                        dest: 'public/fonts/',
                        flatten: true,
                        filter: 'isFile'
                    }
                ]
            },
            appImages: {
                files: [
                    {expand: true, src: ['app/images/**/*.*'], dest: 'public/images/', flatten: true, filter: 'isFile'}
                ]
            },
            appStatic: {
                files: [
                    {src: 'app/favicon.ico', dest: 'public/favicon.ico'},
                    {src: 'app/robots.txt', dest: 'public/robots.txt'},
                    {src: 'app/sitemap.xml', dest: 'public/sitemap.xml'}
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
        'azureblob': {
            options: {
                containerDelete: false,
                metadata: {cacheControl: 'public, max-age=31556926'}, // max-age 1 year for all entries
                gzip: true,
                copySimulation: true  // set true: dry-run for what copy would look like in output
            },
            appJs :{
                options:{
                    containerName:'jss'
                },
                files: [{
                    expand: true,
                    cwd: 'public/jss',
                    filter: 'isFile',
                    dest: '/',
                    src: ['app.js' ]
                }]
            },
            appCss :{
                options:{
                    containerName:'css'
                },
                files: [{
                    expand: true,
                    cwd: 'public/css',
                    filter: 'isFile',
                    dest: '/',
                    src: ['app.css' ]
                }]
            },
            appFonts :{
                options:{
                    containerName:'fonts'
                },
                files: [{
                    expand: true,
                    cwd: 'public/fonts',
                    filter: 'isFile',
                    dest: '/',
                    src: ['ruzzarin.*' ]
                }]
            },
            appImages :{
                options:{
                    containerName:'images'
                },
                files: [{
                    expand: true,
                    cwd: 'public/images',
                    filter: 'isFile',
                    dest: '/',
                    src: ['**/*.*' ]
                }]
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
    grunt.registerTask('appStatic', ['copy:appStatic']);
    grunt.registerTask('appFonts', ['copy:appFonts']);

    grunt.registerTask('releaseAppHtml', ['appHtml', 'htmlmin:appHtml']);
    grunt.registerTask('releaseAppCss', ['appCss', 'cssmin:appCss']);
    grunt.registerTask('releaseAppJs', ['appJs', 'ngAnnotate:appJs', 'uglify:appJs']);
    grunt.registerTask('releaseAppImages', ['appImages']);
    grunt.registerTask('releaseAppStatic', ['appStatic']);
    grunt.registerTask('releaseAppFonts', ['appFonts']);

    grunt.registerTask('vendorCss', ['copy:vendorCss']);
    grunt.registerTask('vendorJs', ['copy:vendorJs']);
    grunt.registerTask('vendorFonts', ['copy:vendorFonts']);

    grunt.registerTask('default', ['clean', 'appHtml', 'appCss', 'appJs', 'appImages', 'appStatic', 'appFonts', 'vendorCss', 'vendorJs', 'vendorFonts']);

    grunt.registerTask('release', ['clean', 'releaseAppHtml', 'releaseAppCss', 'releaseAppJs', 'releaseAppImages', 'releaseAppStatic', 'releaseAppFonts', 'vendorCss', 'vendorJs', 'vendorFonts']);

    grunt.registerTask('serve', [
        'default',
        'express:app',
        'watch'
    ]);

};
