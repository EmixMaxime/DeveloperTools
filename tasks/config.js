// Configurations paths
const path = {
    cssOutDir: './public/css/',
    scssWatcher: './sass/**/*.scss',

    csscombWatcher: './sass/*.scss',
    cssComb: './sass/',
    
}

// All posibility : https://github.com/sass/node-sass#options
const libSass = {
    includePaths: [],
}

const general = {
    activeLoaders: {
        scss: true,
        csscomb: true,
    },
    forceReload: [
        './public/index.html',
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