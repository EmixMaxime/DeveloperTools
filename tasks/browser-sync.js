import gulp from 'gulp'
import { browserSync as config } from './config'
import './sass'

if (config.hotHtmlReloading === true) {
    browserSync.use(require("bs-html-injector"), {
        files: [config.serverOptions.server + '/*.html']
    })
}

/* https://www.browsersync.io/docs/gulp#gulp-sass-css */
/* For HTML & JS : https://www.browsersync.io/docs/gulp#gulp-reload */
/* https://www.browsersync.io/docs/options#option-tunnel it's similar to ngrok ! OU : https://www.browsersync.io/docs/options#option-xip*/
/* https://www.browsersync.io/docs/options#option-ghostMode -> pour synchroniser avec les navigateurs, je scroll sur pc, ça scroll portable, click idem ect */
gulp.task('browser-sync', ['sass'], function() {
    browserSync.init(config.serverOptions)
    config.forceReload.forEach( item => {
        gulp.watch(item).on('change', browserSync.reload);
    })
})