// Configurations paths
const path = {
    cssOutDir: './public/css/',
    scssWatcher: './sass/**/*.scss',

    jsOutDir: './public/js/',
    jsEs6Watcher: './src/es6/*.js',

    htmlOutDir : 'public/',
    pugWatcher: './templates/**/*.pug',
    injectData: true,
    dataFormat: 'yaml',
    dataFile: 'templates/data.yml',

    data: 'templates/',

    typescriptWatcher: './src/typescript/*.ts',
}

// All posibility : https://github.com/sass/node-sass#options
const libSass = {
    includePaths: [],
}

const general = {
    activeLoaders: {
        typescript: false,
        scss: true,
        jsEs6: true,
        pug: true,
    },
    forceReload: [
        './public/index.html',
        './public/js/*.js'
    ],
}

// Autoprefixing css
const browsers = [
    'last 2 versions'
]


const env = {
    mode: 'dev'
}

export default {path, env, browsers, general, libSass}