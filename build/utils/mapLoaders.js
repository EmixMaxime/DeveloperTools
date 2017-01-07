const taskNameForLoader = {
	typescript: 'typescript:watch', // Pour le loader 'typescript' j'utilise la tache gulp ...
	sass: 'sass',
	pug: 'pug',
	csscomb: 'css-comb',
  javascript: 'javascript:watch'
}

// taskNameForLoader.jsEs6 = process.env.NODE_ENV == 'prodution' ? 'javascript:watch' : 'javascript:build'

export default taskNameForLoader