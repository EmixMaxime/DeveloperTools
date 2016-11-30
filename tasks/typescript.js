import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import tsify from 'tsify'
import babelify from 'babelify'
import { path as pathConfig } from './config'
// import ts from 'gulp-typescript'

const tsConfig = require('../tsconfig.json') // Configuration file

let bundleStream = function () {
  return browserify()
    .add([
      'src/typescript/main.ts'
    ])
    .plugin(tsify, { target: 'es6' })
    .transform(babelify)
    .bundle()
    .on('error', (err) => {
      log.error('TypeScript')
        .action(err.name)
        .data(err.fileName)
        .send()
      log.text(err.message)
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
}

gulp.task('typescript:build', function () {
  return bundleStream()
    .pipe(gulp.dest(pathConfig.tsOutDir))
})

gulp.task('typescript:watch', ['typescript:build'], browserSync.reload);
