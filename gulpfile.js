var gulp = require('gulp')
var sass = require('gulp-sass')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var browserSync = require('browser-sync').create()

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./public/"
		}
	})
})

gulp.task('browserify', function() {
	return browserify('./app/app.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./public/js/'));
})

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify'])
	gulp.watch('public/js/*.js').on('change', browserSync.reload)
})

gulp.task('default', ['browser-sync', 'watch'])