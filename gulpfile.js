var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var minifyCss = require('gulp-minify-css'),
	gulpif = require('gulp-if'),
	browserSync = require('browser-sync').create(),
	runSequence = require('run-sequence').use(gulp),
	gutil = require('gulp-util');

var browsers = [
'last 2 versions'
];

// Configurations
var path = {
	css: 'css/',
	scss: 'sass/',
	js: 'js/',
	html: 'templates/',
	htmlDest : '',
};

var env = {
	mode: 'dev'
}

// Tasks

gulp.task('browser-sync', function() {
	browserSync.init({
        server: "./"
    });
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('deployment', function() {
	runSequence('sass', 'cleanerCss');
});

gulp.task('cleanerCss', function(){
	return gulp.src(path.css +'*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest(path.css))
});

gulp.task('js', function() {
	return gulp.src(path.scss + '*.scss')
		.pipe(browserSync.stream());
});

gulp.task('html', function() {
	return gulp.src(path.html + '*.jade')
        .pipe($.plumber())
		.pipe($.jade({
				pretty: true
			})).on('error', gutil.log)
		.pipe(gulp.dest(path.htmlDest));
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
		gulp.watch(path.js + '*js', ['js']);
		gulp.watch(path.html + '*.jade', ['html']);
	} else {
		runSequence('deployment');
		$.util.log("Les tâches pour préparer l'application au déploiement ont étaient effectué");
		$.util.log("Minification du css et js");
	}

})