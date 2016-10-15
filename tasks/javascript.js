import postcss from 'gulp-postcss'

import browserify from 'browserify';
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
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
  .pipe(buffer()) // Explications: http://stackoverflow.com/questions/24992980/how-to-uglify-output-with-browserify-in-gulp
  .pipe(
    $.if(process.env.NODE_ENV == 'production', $.uglify())
  )
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