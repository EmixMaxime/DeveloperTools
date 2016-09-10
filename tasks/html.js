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

const stopLog = function (etat, name) {
    log.error(name)
        .time(log.timeEnd(name))
}

gulp.task('pug', () => {
    return gulp.src(config.path.pugWatcher)
        .pipe($.data( () => {
            if (config.path.injectData === true && config.path.dataFormat === 'yaml') {
                startLog('HTML:BUILD', 'Injecting data from ', config.path.dataFile)
                try {
                    const content = fs.readFileSync(config.path.dataFile, 'utf8')
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