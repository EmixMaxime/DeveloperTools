import browserify from 'browserify';
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import eslint from 'gulp-eslint'
import friendlyFormatter from 'eslint-friendly-formatter'
 
gulp.task('javascript:build', ['javascript:lint'], function () {
  return browserify({
    entries: 'src/es6/main.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest(config.path.jsOutDir))
})

gulp.task('javascript:lint', function () {
  return gulp.src(config.path.jsEs6Watcher)
    .pipe(eslint())
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.results (results => {
        // Called for each ESLint result.
        if (results.errorCount >= 1) {
          browserSync.notify('ESLINT Error')
        }
    }))
    .pipe(eslint.failAfterError())
})

gulp.task('javascript:watch', ['javascript:build'], () => {
  browserSync.reload();
})