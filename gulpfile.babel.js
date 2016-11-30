import gulp from 'gulp'
import config from './tasks/config'
import taskNameForLoader from './tasks/mapLoaders'
import log from 'gutil-waterlog'
import loader from 'gulp-load-plugins'
import getActiveTasks from './tasks/getActiveTasks'
const loaders = getActiveTasks()
const configLoaders = config.loaders

const $ = loader() // Load the gulp plugins
const browserSync = require('browser-sync').create()

/* Global variables */
global.config = config
global.gulp = gulp
global.log = log
global.$ = $
global.browserSync = browserSync
/* -- */

/* Require activated tasks (with configuration.loaders) */
loaders.forEach(loader => {
    require(`./tasks/${loader}.js`)
})

require('./tasks/browser-sync')

const launchTask = () => {
    for (let loader in configLoaders) {
        if (configLoaders[loader] === true) {
            log.time('GULP')
            log.success('GULP')
                .action(`Watchers ${loader} launched at `)
                .data(`${config.path[loader + 'Watcher']}`)
                .send()
            gulp.watch(config.path[loader + 'Watcher'], [taskNameForLoader[loader]])
        }
    }
}

gulp.task('dev', ['browser-sync'], function () {
    launchTask()
})

const getLoadersForProduction = function () {
    const loaders = []
    for (let loader in configLoaders) {
        if (configLoaders[loader] === true) {
            loaders.push(taskNameForLoader[loader])
        }
    }
    return loaders
}

gulp.task('build', getLoadersForProduction(), () => {
    console.log('The env :', process.env.NODE_ENV)
    const loaders = getLoadersForProduction()
    loaders.push('minify-css')
    console.log(loaders)
})
