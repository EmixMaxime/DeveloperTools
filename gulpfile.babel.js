import gulp from 'gulp'
import config from './tasks/config'
import taskNameForLoader from './tasks/mapLoaders'
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

gulp.task('dev', ['browser-sync'], function () {
    for (let loader in config.general.activeLoaders) {
        if (config.general.activeLoaders[loader] === true) {
            log.time('GULP')
            log.success('GULP')
                .action(`Watchers ${loader} launched at `)
                .data(`${config.path[loader + 'Watcher']}`)
                .send()
            gulp.watch(config.path[loader + 'Watcher'], [taskNameForLoader[loader]])
        }
    }
})

gulp.task('build', ['javascript:build'], () => {
    
})
