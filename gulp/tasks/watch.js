var gulp = require('gulp');

gulp.task('watch', ['start'], function() {
	/*gulp.watch('public/javascripts/home/*.js', ['browserify']);
	gulp.watch('public/javascripts/splash/*.js', ['browserify']);
	gulp.watch('public/javascripts/themes/*.js', ['browserify']);*/
  gulp.watch('redux/*.js', ['browserify']);
  gulp.watch('redux/reducers/*.js', ['browserify']);
  gulp.watch('redux/components/*.js', ['browserify']);
  gulp.watch('redux/stores/*.js', ['browserify']);
  gulp.watch('redux/actions/*.js', ['browserify']);
  gulp.watch('redux/containers/*.js', ['browserify']);
});
