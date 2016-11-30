import jade from 'pug' // Pug is the new name of Jade
import yaml from 'js-yaml'
import fs from 'fs'
import log from 'gutil-waterlog'
import {path as pathConfig, template as templateConfig} from './config'

let startLog = (name, action, fileName) => {
    log.time(name)
    log.start(name)
        .action(action)
        .data(fileName)
        .send()
}

const stopLog = (etat, name) => {
    log.error(name)
        .time(log.timeEnd(name))
}

gulp.task('pug', () => {
    return gulp.src(pathConfig.pugWatcher)
        .pipe($.data( () => {
            if (templateConfig.injectData === true && templateConfig.dataFormat === 'yaml') {
                startLog('HTML:BUILD', 'Injecting data from ', templateConfig.dataFile)
                try {
                    const content = fs.readFileSync(templateConfig.dataFile, 'utf8')
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
        .pipe(gulp.dest(pathConfig.htmlOutDir))
})