module.exports = function(grunt) {

  var appConfig = {
    src: {
      js: ['app/script/**/*.js'],
      css: ['app/style/**/*.less'],
      image: ['app/image/**/*.*']
    },
    vendor: {
      js: ['bower_components/jquery/dist/jquery.js',
           'bower_components/bootstrap/dist/js/bootstrap.js'],
      css: ['bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/Font-Awesome/css/font-awesome.css'],
      font: ['bower_components/bootstrap/dist/fonts/**',
             'bower_components/Font-Awesome/fonts/**']
    }
  };

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ect: {
      app: {
        options: {
          variables: {
            env: process.env.NODE_ENV
          }
        },
        files: {
          'public/index.html': 'app/index.ect',
        }
      }
    },
    htmlhint: {
      app: {
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
      app: {
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
      app: appConfig.src.js
    },
    uglify: {
      app: {
        files: {
          'public/script/app.js': appConfig.src.js
        }
      },
      vendor: {
        files: {
          'public/script/vendor.js': appConfig.vendor.js
        }
      }
    },
    less: {
      app: {
        src: appConfig.src.css,
        dest: 'public/style/app.css'
      }
    },
    cssc: {
      app: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors: true,
          consolidateMediaQueries: true
        },
        files: {
            'public/style/app.css': 'public/style/app.css'
        }
      }
    },
    cssmin: {
      app: {
        src: 'public/style/app.css',
        dest: 'public/style/app.css'
      },
      vendor: {
        files: {
          'public/style/vendor.css': appConfig.vendor.css
        }
      }
    },
    copy: {
      vendor: {
        files: [
          {expand: true, src: appConfig.vendor.font, dest: 'public/fonts/', flatten: true, filter: 'isFile'}
        ]
      },
      app: {
        files: [
          {expand: true, src: appConfig.src.image, dest: 'public/image/', flatten: true, filter: 'isFile'},
        ]
      }
    },
    clean: {
      options: {
        force: true
      },
      app: {
        src: ["public/**"]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: appConfig.src.html,
        tasks: ['appHtml'],
        options: {
          livereload: true,
        }
      },
      js: {
        files: appConfig.src.js,
        tasks: ['appJs'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: appConfig.src.css,
        tasks: ['appCss'],
        options: {
          livereload: true,
        }
      },
      image: {
        files: appConfig.src.image,
        tasks: ['appImage'],
        options: {
          livereload: true,
        }
      }
    },
    connect: {
      app: {
        options: {
          port: 9000,
          base: 'public'
        }
      }
    }
  });

  grunt.registerTask('appHtml', ['ect:app','htmlhint:app','htmlmin:app']);
  grunt.registerTask('appCss', ['less:app','cssc:app','cssmin:app']);
  grunt.registerTask('appJs', ['jshint:app','uglify:app']);
  grunt.registerTask('appImage', ['copy:app']);

  grunt.registerTask('vendorCss', ['cssmin:vendor']);
  grunt.registerTask('vendorJs', ['uglify:vendor']);
  grunt.registerTask('vendorFont', ['copy:vendor']);

  grunt.registerTask('default', ['clean','appHtml','appCss','appJs','appImage','vendorCss','vendorJs','vendorFont']);

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    grunt.task.run([
      'default',
      'connect:app',
      'watch'
    ]);
  });
};
