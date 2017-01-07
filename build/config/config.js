// Configurations paths
export const path = {
  cssOutDir: './public/css/',
  sassWatcher: './src/sass/*.+(scss|sass)',

  jsOutDir: './public/js/',
  javascriptWatcher: './src/javascript/*.js',

  htmlOutDir: 'public/',
  pugWatcher: './templates/**/*.pug',

  typescriptWatcher: './src/typescript/*.ts',
  csscombWatcher: './sass/*.sass',
  cssComb: './src/sass/'
}

// All posibility : https://github.com/sass/node-sass#options
export const libSass = {
  // Include foundation scss files for example
  includePaths: [
    'ressources/assets/bower_components/foundation-sites/scss',
    'ressources/assets/bower_components/motion-ui/src'
  ],
}

export const template = {
  injectData: true,
  dataFormat: 'yaml',
  dataFile: 'templates/data.yml'
}

const loaders = {
  typescript: false,
  sass: true,
  javascript: true,
  pug: true,
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
    browser: [] // Dont open browser at start
    // host: '192.168.1.30' // Is optional, but it fixed bug on my raspberryPi
  }
}

// Autoprefixing css
export const browsers = [
  'last 2 versions'
]

export default { path, browsers, loaders, libSass, template, browserSync }