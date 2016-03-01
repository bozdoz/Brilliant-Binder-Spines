var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        online : false,
        ui : false,
	files : ['*.html','*.js','*.css']
    });
});
