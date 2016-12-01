var gulp = require('gulp');
	sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	del = require('del'),
	print = require('gulp-print'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel');


var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();	


gulp.task('sayhello', function() {
	console.log("Hello World :P");
})

gulp.task('clean', function(cb) {
	del([
		'dist'
	], cb)
})


gulp.task('build-css', function() {
	gulp.src('./styles/*')
	.pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
})

gulp.task('build', ['clean', 'build-css', 'build-js'], function() {
	return gulp.src('index.html')
	.pipe(cachebust.references())
	.pipe(hulp.dest('dist'));
})

gulp.task('watch', function() {
	return gulp.watch(['./index.html','./partials/*.html','./styles/*.*css','./js/**/*.js'], ['build']);
})


gulp.task('build-js', function() {
   return gulp.src('js/**/*.js')               
      .pipe(sourcemaps.init())
      .pipe(print())                        
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./')) 
      .pipe(gulp.dest('./dist/js')); 
});