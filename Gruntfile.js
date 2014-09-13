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
        js: ['bower_components\jquery\dist\jquery.js',
             'bower_components\bootstrap\dist\js\bootstrap.js'],
        css: ['bower_components\bootstrap\dist\css\bootstrap.css'],
        font: ['bower_components\bootstrap\dist\fonts\glyphicons-halflings-regular.eot',
               'bower_components\bootstrap\dist\fonts\glyphicons-halflings-regular.svg',
               'bower_components\bootstrap\dist\fonts\glyphicons-halflings-regular.ttf',
               'bower_components\bootstrap\dist\fonts\glyphicons-halflings-regular.woff']
      }
    },
    tasks: {
      js:['jshint', 'uglify'],
      css:['less', 'cssc', 'cssmin'],
      html:['htmlhint']
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
    jshint: {
      // You get to make the name
      // The paths tell JSHint which files to validate
      app: appConfig.src.client.js
    },
    uglify: {
      app: {
        files: {
          'dist/script/app.js': appConfig.src.client.js
        }
      },
      vendor: {
        files: {
          'dist/script/vendor.js': appConfig.vendor.client.js
        }
      }
    },
    less: {
      app: {
        src: appConfig.src.client.css,
        dest: 'dist/style/app.css'
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
            'dist/style/app.css': 'dist/style/app.css'
        }
      }
    },
    cssmin: {
      app: {
        src: 'dist/style/app.css',
        dest: 'dist/style/app.css'
      },
      vendor: {
        files: {
          'dist/style/vendor.css': appConfig.vendor.client.css
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: appConfig.src.client.html,
        tasks: appConfig.tasks.html
      },
      js: {
        files: appConfig.src.client.js,
        tasks: appConfig.tasks.js
      },
      css: {
        files: appConfig.src.client.css,
        tasks: appConfig.tasks.css
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', appConfig.tasks.html.concat(appConfig.tasks.js).concat(appConfig.tasks.css));

};
