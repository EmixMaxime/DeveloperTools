// Configurations paths
const path = {
    sassOutDir: './public/css/',
    sass: './sass/**/',

    jsEs6: './src/es6/',
    jsOutDir: './public/js/',

    html: 'templates/**/',
    htmlOutDir : 'public/',
    injectData: true,
    dataFormat: 'yaml',
    dataFile: 'templates/data.yml',

    data: 'templates/',

    ts: './src/',
    tsOutDir: './public/js'
}

const general = {
    forceReload: [
        './public/index.html'
    ]
}

// Autoprefixing css
const browsers = [
    'last 2 versions'
]


const env = {
    mode: 'dev'
}

export default {path, env, browsers, general}