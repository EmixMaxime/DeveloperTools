const taskNameForLoader = {
	typescript: 'typescript:watch', // Pour le loader 'typescript' j'utilise la tache gulp ...
	scss: 'sass',
	pug: 'pug',
	csscomb: 'css-comb'
}

taskNameForLoader.jsEs6 = process.env.NODE_ENV == 'prodution' ? 'javascript:watch' : 'javascript:build'

export default taskNameForLoader