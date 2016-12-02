import cleanCSS from 'gulp-clean-css'
import postcss from 'gulp-postcss'
import cssmqpacker from 'css-mqpacker'
import { path as pathConfig, libSass as libSassConfig, browsers } from './config'

const processors = [
    cssmqpacker()
]

gulp.task('minify-css', () => {
    return gulp.src(`${pathConfig.cssOutDir}.css`)
        .pipe(cleanCSS({debug: true}, (details) => {
            /* https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api */
            console.log(details.name + ': ' + details.stats.originalSize)
            console.log(details.name + ': ' + details.stats.minifiedSize) // More it's possible
        }))
        .pipe(gulp.dest(pathConfig.cssOutDir))
})

gulp.task('css-comb', () => {
    const Comb = require('csscomb')
    const comb = new Comb('csscomb')
    comb.processPath(pathConfig.cssComb)
})


gulp.task('sass', () => {
    return gulp.src(pathConfig.sassWatcher)
        .pipe($.sass(libSassConfig).on('error', $.sass.logError))
        .pipe(
            $.if(process.env.NODE_ENV == 'production', postcss(processors))
        )
        .pipe(
            $.if(process.env.NODE_ENV == 'production', $.autoprefixer(browsers))
        )
        .pipe(gulp.dest(pathConfig.cssOutDir))
        .pipe(browserSync.stream()) // !!!!!!
})
