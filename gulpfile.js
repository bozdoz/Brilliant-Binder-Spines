var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('default', ['sass', 'browserify', 'bs', 'watch']);

gulp.task('sass', function() {
	return gulp.src('./css/style.scss')
        .pipe(sass({
            	outputStyle: 'compressed'
            }).on('error', function (err) {
                console.log( err.message );
                browserSync.notify( err.message );
                this.emit('end');
            })
        )
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserify', function() {
	return browserify('./js/script.js')
		.bundle()
        .on('error', function (err) {
            console.log( err );
            browserSync.notify( err.message );
            this.emit('end');
        })
		.pipe(source('main.js'))
		.pipe(gulp.dest('./js/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('bs', function() {
    return browserSync.init({
        server: {
            baseDir: "./"
        },
        online : false,
        ui : false,
		files : ['*.html','*.css']
    });
});

gulp.task('watch', function() {
	gulp.watch(['./js/*.js', './js/**/*.js'], ['browserify']);
	gulp.watch(['./css/style.scss'], ['sass']);
});