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

const browserSync = {
    forceReload: [
        // './public/index.html',
    ],
}

// Autoprefixing css
const browsers = [
    'last 2 versions'
]

export default {path, browsers, loaders, libSass, template, browserSync}