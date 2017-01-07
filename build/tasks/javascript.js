import browserify from 'browserify';
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import eslint from 'gulp-eslint'
import friendlyFormatter from 'eslint-friendly-formatter'
import {path as pathConfig } from '../config/config'
import sourcemaps from 'gulp-sourcemaps'
import tap from 'gulp-tap'
 
// gulp.task('javascript:build', ['javascript:lint'], function () {
//   return browserify({
//     entries: 'ressources/assets/javascript/main.js',
//     extensions: ['.js'],
//     debug: true
//   })
//   .transform(babelify)
//   .bundle()
//   .pipe(source('main.js'))
//   .pipe(buffer()) // Explications: http://stackoverflow.com/questions/24992980/how-to-uglify-output-with-browserify-in-gulp
//   .pipe(
//     $.if(process.env.NODE_ENV == 'production', $.uglify())
//   )
//   .pipe(gulp.dest(pathConfig.jsOutDir))
// })

gulp.task('javascript:build'/*, ['javascript:lint']*/, function () {
  return gulp.src(pathConfig.javascriptWatcher, {read: false}) // no need of reading file because browserify does.
    // transform file objects using gulp-tap plugin
    .pipe(tap((file) => {
      // gutil.log('bundling ' + file.path)
      // replace file contents with browserify's bundle stream
      try {
        file.contents = browserify(file.path, {debug: true, transform: [babelify]}).bundle()
      } catch (err) { console.log(err) }
    }))
    // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
    .pipe(buffer())
    // load and init sourcemaps
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe($.uglify())
    // write sourcemaps
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(pathConfig.jsOutDir))

})


gulp.task('javascript:lint', function () {
  return gulp.src(pathConfig.javascriptWatcher)
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
  browserSync.reload()
})