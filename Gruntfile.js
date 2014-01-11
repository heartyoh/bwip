'use strict';

module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      }, 
      dist: {
        src: [
        'bwip.js',
        'lib/canvas-modified.js',
        'lib/symdesc.js',
        'lib/baropts.js',
        'lib/needyoffset.js',
        'fonts/*.js',
        'bwipp/renlinear.js',
        'bwipp/renmatrix.js',
        'bwipp/auspost.js',
        'bwipp/azteccode.js',
        'bwipp/bc412.js',
        'bwipp/channelcode.js',
        'bwipp/codablockf.js',
        'bwipp/code11.js',
        'bwipp/code128.js',
        'bwipp/code16k.js',
        'bwipp/code2of5.js',
        'bwipp/code39.js',
        'bwipp/code32.js',
        'bwipp/code39ext.js',
        'bwipp/code49.js',
        'bwipp/code93.js',
        'bwipp/code93ext.js',
        'bwipp/codeone.js',
        'bwipp/daft.js',
        'bwipp/pdf417.js',
        'bwipp/micropdf417.js',
        'bwipp/gs1-cc.js',
        'bwipp/databarexpanded.js',
        'bwipp/databarexpandedcomposite.js',
        'bwipp/databarexpandedstacked.js',
        'bwipp/databarexpandedstackedcomposite.js',
        'bwipp/databarlimited.js',
        'bwipp/databarlimitedcomposite.js',
        'bwipp/databaromni.js',
        'bwipp/databaromnicomposite.js',
        'bwipp/databarstacked.js',
        'bwipp/databarstackedcomposite.js',
        'bwipp/databarstackedomni.js',
        'bwipp/databarstackedomnicomposite.js',
        'bwipp/databartruncated.js',
        'bwipp/databartruncatedcomposite.js',
        'bwipp/datamatrix.js',
        'bwipp/ean2.js',
        'bwipp/ean5.js',
        'bwipp/ean8.js',
        'bwipp/ean8composite.js',
        'bwipp/ean13.js',
        'bwipp/ean13composite.js',
        'bwipp/ean14.js',
        'bwipp/flattermarken.js',
        'bwipp/gs1-128.js',
        'bwipp/gs1-128composite.js',
        'bwipp/gs1datamatrix.js',
        'bwipp/hibccodablockf.js',
        'bwipp/hibccode128.js',
        'bwipp/hibccode39.js',
        'bwipp/hibcdatamatrix.js',
        'bwipp/hibcmicropdf417.js',
        'bwipp/hibcpdf417.js',
        'bwipp/qrcode.js',
        'bwipp/hibcqrcode.js',
        'bwipp/interleaved2of5.js',
        'bwipp/identcode.js',
        'bwipp/isbn.js',
        'bwipp/ismn.js',
        'bwipp/issn.js',
        'bwipp/itf14.js',
        'bwipp/japanpost.js',
        'bwipp/kix.js',
        'bwipp/leitcode.js',
        'bwipp/maxicode.js',
        'bwipp/msi.js',
        'bwipp/onecode.js',
        'bwipp/pharmacode.js',
        'bwipp/pharmacode2.js',
        'bwipp/planet.js',
        'bwipp/plessey.js',
        'bwipp/posicode.js',
        'bwipp/postnet.js',
        'bwipp/pzn.js',
        'bwipp/rationalizedCodabar.js',
        'bwipp/raw.js',
        'bwipp/renmaximatrix.js',
        'bwipp/royalmail.js',
        'bwipp/sscc18.js',
        'bwipp/symbol.js',
        'bwipp/telepen.js',
        'bwipp/upca.js',
        'bwipp/upcacomposite.js',
        'bwipp/upce.js',
        'bwipp/upcecomposite.js' ].map(function(file) {
          return require('path').join('src', 'bwipjs', file);
        }),
        dest: 'build/bwip-canvas.js'
      }
    },
    uglify: {
      build: {
        src: 'build/bwip-canvas.js',
        dest: 'build/bwip-canvas.min.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['src/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      }
    }
  });

  // Default task.
  // grunt.registerTask('default', ['jshint', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'nodeunit', 'concat', 'uglify']);

};
