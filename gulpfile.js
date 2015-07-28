var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var minifyCss = require('gulp-minify-css');
var gulpif = require('gulp-if');

var browserSync = require('browser-sync').create();

var runSequence = require('run-sequence').use(gulp);

var browsers = [
'last 2 versions'
];

// Configurations
var path = {
	css: 'css/',
	scss: 'css/',
	js: 'js/'
};

var env = {
	mode: 'dev'
}

// Tasks

gulp.task('minifyCss', function(){
	return gulp.src(path.css +'*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest(path.css))
})

gulp.task('deployment', function() {
	runSequence('sass', 'minifyCss');
});

gulp.task('browser-sync', function() {
	browserSync.init({
        server: "./"
    });
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src(path.scss +'*.scss')
		.pipe($.sass().on('error', $.sass.logError))
		.pipe( gulpif(env.mode == 'deployment', $.autoprefixer(browsers)) )
		.pipe(gulp.dest(path.css))
		.pipe(browserSync.stream())
});

gulp.task('default', ['browser-sync'], function() {
	if(env.mode !== 'deployment') {
		gulp.watch(path.scss +'*.scss', ['sass']);
	} else {
		runSequence('deployment');
		$.util.log("Les tâches pour préparer l'application au déploiement ont étaient effectué");
		$.util.log("Minification du css et js");
	}

});