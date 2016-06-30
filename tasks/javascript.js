import browserify from 'browserify';
import babelify from 'babelify'
import source from 'vinyl-source-stream'
 
gulp.task('javascript:build', function () {
  browserify({
    entries: 'src/es6/main.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest(config.path.jsOutDir))
})

gulp.task('javascript:watch', ['javascript:build'], browserSync.reload)