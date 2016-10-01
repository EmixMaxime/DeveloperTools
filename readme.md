# Front-end boilerplate with gulp qu'est-ce?
## Le readme n'est pas totalement rédigé...

Ce dépôt héberge ma configuration pour gérer le front-end moderne avec Gulp.

Il permet :
- D'avoir un serveur de développement
- L'utilisation de l'es6, typescript
- L'utilisation du langage sass
- L'utilisation d'un standard javascript avec un linter
- L'utilisation de pug (anciennement Jade) avec la possibilité d'injecter des données
Et surtout d'ajouter des fonctionnalités très rapidement et sans prise de tête !

## Le serveur de développement
J'utilise ici [browsersync](https://www.browsersync.io/) pour sa rapidité et sa facilité.
De plus il permet de synchroniser différents navigateurs, et intègre un dashboard parfois très pratique.
Synchroniser différents navigateurs?
Si vous donnez le lien externe à votre client, celui-ci sera synchroniser avec vous, c-a-d que si vous effectuer une action (ouverture d'un menu par un clique, navigation sur une autre page) l'action sera faite aussi chez votre client, et vice versa.

## Le transpiler es6 -> es5
Nous devons transpiler notre javascript es6 en es5 pour la compatibilité des anciens navigateurs, mais aussi avoir un transpiler qui gère les modules.
Ici j'utilise [browserify](http://browserify.org/) pour gérer mes modules et babelify pour la transpilation es6 to es5.
### Eslint
Nous devons garder un code facil et propre à lire, pour cela j'ai ajouté eslint.
Ici j'ai décidé de mettre ce [standard](http://standardjs.com/) car c'est celui que j'utilise.

## Le transpiler sass -> css
Utilisation de [libsass](http://sass-lang.com/libsass) qui est bien plus rapide que Compass.
Pour préfier mon css j'utilise [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) qui utilise lui même [autoprefixer](https://github.com/postcss/autoprefixer) de postcss.
J'ai également ajouté l'outil [CssComb](http://csscomb.com) pour réorganiser nos fichiers pour garder la même structure interne.

### Configurer l'autoprefixer
Pour configurer cet autoprefixer, il suffit de modifier `config.browsers`.

## Le transpiler pug -> html
Utilisation de [gulp-jade](https://www.npmjs.com/package/gulp-jade) en précisant que j'utilise [pug](http://) pour pouvoir utiliser des filtres comme la documentation l'indique.

## Injection de données dans les templates
Utilisation de [gulp-data](https://www.npmjs.com/package/gulp-data) et de [js-yaml](https://github.com/nodeca/js-yaml) car j'injecte ici des données sous écrit en yaml qui faut donc parser.
### Configurer l'injection de données :
`config.template.injectData` boolean
`config.template.dataFormat` : yaml | d'autres format sont à venir!
`config.template.dataFile` : path

# Comment ajouter un watcher avec sa tâche liée :
- Ajouter : `name: true` dans config.general.activeLoaders
- Ajouter : `nameWatcher: 'src/*.html` dans config.path
Attention à la convention choisie, nameWatcher/name !
Puis ajouter dans mapLoaders.js quel est la tâche à lancer :
`name: 'name-task'`
