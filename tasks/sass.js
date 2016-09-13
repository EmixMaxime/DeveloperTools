import cleanCSS from 'gulp-clean-css'

gulp.task('minify-css', () => {
    return gulp.src(config.path.sassOutDir +'*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            /* https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api */
            console.log(details.name + ': ' + details.stats.originalSize)
            console.log(details.name + ': ' + details.stats.minifiedSize) // More it's possible
        }))
        .pipe(gulp.dest(config.path.css))
})

gulp.task('css-comb', () => {
    const Comb = require('csscomb')
    const comb = new Comb('csscomb')
    comb.processPath(config.path.cssComb)
})


gulp.task('sass', () => {
    return gulp.src(config.path.scssWatcher)
        .pipe($.sass(config.libSass).on('error', $.sass.logError))
        .pipe( $.if(config.env.mode == 'deployment', $.autoprefixer(config.browsers)) )
        .pipe(gulp.dest(config.path.cssOutDir))
        .pipe(browserSync.stream()) // !!!!!!
})
