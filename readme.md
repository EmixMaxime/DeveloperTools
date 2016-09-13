# Front-end boilerplate with gulp qu'est-ce?
## Le readme n'est pas totalement rédigé...

Ce déoôt héberge ma configuration pour gérer le front-end moderne avec Gulp.
Il permet :
- D'avoir un serveur de développement
- L'utilisation de l'es6
- L'utilisation du typescript
- L'utilisation du langage sass
- L'utilisation d'un standard javascript
- L'utilisation de pug avec la possibilité d'injecter des données

## Le transpiler es6 -> es5
Lorem ipsum

## Le transpiler sass -> css
Utilisation de [libsass](http://sass-lang.com/libsass) qui est bien plus rapide que Compass.
Pour préfixé mon css j'utilise [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) qui utilise lui même [autoprefixer](https://github.com/postcss/autoprefixer) de postcss.

## Le transpiler pug -> html
Utilisation de [gulp-jade](https://www.npmjs.com/package/gulp-jade) en précisant que j'utilise [pug](http://) pour pouvoir utiliser des filtres comme la documentation l'indique.

## Injection de données dans les templates
Utilisation de [gulp-data](https://www.npmjs.com/package/gulp-data) et de [js-yaml](https://github.com/nodeca/js-yaml) car j'injecte ici des données sous écrit en yaml qui faut donc parser.

# Comment ajouter un watcher avec sa tâche liée :
- Ajouter : `name: true` dans config.general.activeLoaders
- Ajouter : `nameWatcher: 'src/*.html` dans config.path
Attention à la convention choisie, nameWatcher/name !
Puis ajouter dans mapLoaders.js quel est la tâche à lancer :
`name: 'name-task'`
