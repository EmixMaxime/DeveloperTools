import jade from 'pug' // Pug is the new name of Jade
import yaml from 'js-yaml'
import fs from 'fs'

let startLog = function (name, action, fileName) {
    log.time(name)
    log.start(name)
        .action(action)
        .data(fileName)
        .send()
}

let stopLog = function (etat, name) {
    log.error(name)
        .time(log.timeEnd(name))
}

gulp.task('html', function() {
    return gulp.src(config.path.html + '*.jade')
        .pipe($.data(function () {
            if (config.path.injectData && config.path.dataFormat === 'yaml') {
                startLog('HTML:BUILD', 'Injecting data', config.path.dataFile)
                try {
                    let content = fs.readFileSync(config.path.dataFile, 'utf8')
                    return yaml.load(content)
                } catch (err) {
                    console.log(err)
                }

                // stopLog('error', 'HTML:BUILD') Ne fonctionne pas
            }
        }))
        //.pipe(affected())
        .pipe($.jade({
            jade: jade,
            pretty: true
        })).on('error', function (err) {
            log.error(err) // ne fonctionne pas, arrête le script
        })
        .pipe(gulp.dest(config.path.htmlOutDir))
})