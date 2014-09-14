module.exports = function(grunt) {

  var appConfig = {
    src: {
      client: {
        js: ['app/script/**/*.js'],
        css: ['app/style/**/*.less'],
        html: ['app/**/*.html']
      }
    },
    vendor: {
      client: {
        js: ['bower_components/jquery/public/jquery.js',
             'bower_components/bootstrap/public/js/bootstrap.js'],
        css: ['bower_components/bootstrap/public/css/bootstrap.css'],
        font: ['bower_components/bootstrap/public/fonts/**']
      }
    }
  };

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
        src: appConfig.src.client.html
      }
    },
    htmlmin: {
      app: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'public/index.html': appConfig.src.client.html[0]
        }
      }
    },
    jshint: {
      // You get to make the name
      // The paths tell JSHint which files to validate
      app: appConfig.src.client.js
    },
    uglify: {
      app: {
        files: {
          'public/script/app.js': appConfig.src.client.js
        }
      },
      vendor: {
        files: {
          'public/script/vendor.js': appConfig.vendor.client.js
        }
      }
    },
    less: {
      app: {
        src: appConfig.src.client.css,
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
          'public/style/vendor.css': appConfig.vendor.client.css
        }
      }
    },
    copy: {
      vendor: {
        files: [
          {expand: true, src: appConfig.vendor.client.font, dest: 'public/font/'},
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
        files: appConfig.src.client.html,
        tasks: ['appHtml'],
        options: {
          livereload: true,
        }
      },
      js: {
        files: appConfig.src.client.js,
        tasks: ['appJs'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: appConfig.src.client.css,
        tasks: ['appCss'],
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

  grunt.registerTask('appHtml', ['htmlhint:app','htmlmin:app']);
  grunt.registerTask('appCss', ['less:app','cssc:app','cssmin:app']);
  grunt.registerTask('appJs', ['jshint:app','uglify:app']);

  grunt.registerTask('vendorCss', ['cssmin:vendor']);
  grunt.registerTask('vendorJs', ['uglify:vendor']);
  grunt.registerTask('vendorFont', ['copy:vendor']);

  grunt.registerTask('default', ['clean','appHtml','appCss','appJs','vendorCss','vendorJs','vendorFont']);

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    grunt.task.run([
      'default',
      'connect:app',
      'watch'
    ]);
  });

  grunt.registerTask('showVars', 'appConfig', function (target) {
    console.log(appConfig);
    console.log('-------------------------------------');
    console.log(appConfig.vendor.client.js);
  });
};
