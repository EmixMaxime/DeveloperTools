import gulp from 'gulp'
import config from './tasks/config'
import log from 'gutil-waterlog'
import loader from 'gulp-load-plugins'

const $ = loader() // Load the gulp plugins
const browserSync = require('browser-sync').create(); // require browser-sync

/* Global variables */
global.config = config
global.gulp = gulp
global.log = log
global.$ = $
global.browserSync = browserSync
/* -- */

import requireDir from 'require-dir'
requireDir('./tasks') // Require all of files into the folder

gulp.task('test', function () {
    log.time('task');
    log.task('example') // 'example is the plugin\group name' 
            .action('Building JS...')
            .hr()
            .send()
})

gulp.task('e', function () {
    console.log()
})

gulp.task('default', ['browser-sync'], function() {
    if(config.env.mode !== 'deployment') {
        // gulp.watch(path.data + '*.yml', ['html']);
        // gulp.watch(`${config.path.sass}'*.scss`, ['sass']);
        gulp.watch(config.path.sass + '*.scss', ['sass']);
        gulp.watch(config.path.ts + '*ts', ['typescript:watch']);
        gulp.watch(config.path.jsEs6 + '*.js', ['javascript:watch'])
        // gulp.watch(path.html + '*.jade', ['html']);
    } else {
        // runSequence('deployment');
        // $.util.log("Les tâches pour préparer l'application au déploiement ont étaient effectué");
        // $.util.log("Minification du css et js");
    }
})

gulp.task('default', function () {
    gulp.watch(config.path.html + '*.jade', ['html'])
})
