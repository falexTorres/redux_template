var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var config = require('../config').browserify;
var babelify = require('babelify');

gulp.task('browserify', ['start'], function(callback) {
  var bundleQueue = config.bundleConfigs.length;
  var browserifyThis = function(bundleConfig) {
    var bundler = browserify({
      entries: bundleConfig.entries,
      extensions: config.extensions
    });

    var bundle = function() {
      return bundler
        .bundle()
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    bundler.transform(babelify.configure());

    var reportFinished = function() {
      if (bundleQueue) {
        bundleQueue--;
        if (bundleQueue === 0) {
          callback();
        }
      }
    };

    return bundle();

  };

  config.bundleConfigs.forEach(browserifyThis);
})

