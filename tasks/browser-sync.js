import gulp from 'gulp'
import config from './config'
require('./sass')

const serverOptions = { // List of interesting options
    directory: './public/',
    logConnections: false, // Default : false
    logFileChanges: true, // Default : true
    reloadOnRestart: false, // Default : false
    notify: true, // Default : false
    host: '192.168.1.30' // Is optional, but it fixed bug on my raspberryPi
}

/* https://www.browsersync.io/docs/gulp#gulp-sass-css */

/* For HTML & JS : https://www.browsersync.io/docs/gulp#gulp-reload */

/* https://www.browsersync.io/docs/options#option-tunnel it's similar to ngrok ! OU : https://www.browsersync.io/docs/options#option-xip*/

/* https://www.browsersync.io/docs/options#option-ghostMode -> pour synchroniser avec les navigateurs, je scroll sur pc, ça scroll portable, click idem ect */
gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        server: serverOptions.directory,
        
    })
    config.general.forceReload.forEach( item => {
        gulp.watch(item).on('change', browserSync.reload);
    })
    gulp.watch('./public/js/*.js').on('change', browserSync.reload);
    gulp.watch(config.path.sass + "*.scss", ['sass']);
})