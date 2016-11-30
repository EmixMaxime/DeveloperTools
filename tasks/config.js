// Configurations paths
const path = {
    cssOutDir: './public/css/',
    scssWatcher: './sass/**/*.sass',

    jsOutDir: './public/js/',
    jsEs6Watcher: './src/es6/*.js',

    htmlOutDir : 'public/',
    pugWatcher: './templates/**/*.pug',

    typescriptWatcher: './src/typescript/*.ts',
    csscombWatcher: './sass/*.sass',
    cssComb: './sass/'
}

// All posibility : https://github.com/sass/node-sass#options
const libSass = {
    includePaths: [],
}

const template = {
}

const loaders = {
    typescript: false,
    sass: true,
    jsEs6: false,
    pug: false,
// csscomb: true,
}

export const browserSync = {
    forceReload: [
        // './public/index.html',
    ],
    hotHtmlReloading: true,
    serverOptions: { // List of interesting options
        server: './public/',
        logConnections: false, // Default : false
        logFileChanges: true, // Default : true
        reloadOnRestart: false, // Default : false
        notify: true, // Default : false
        // host: '192.168.1.30' // Is optional, but it fixed bug on my raspberryPi
    }
}

// Autoprefixing css
const browsers = [
    'last 2 versions'
]

export default {path, browsers, loaders, libSass, template, browserSync}